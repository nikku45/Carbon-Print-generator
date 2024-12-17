"use client";

import { useEffect, useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { calculateElectricityEmissions, CarbonAPIError } from "@/lib/carbon-api";
import { EMISSIONS_FACTORS } from "@/lib/constants";
import { EmissionsChart } from "./EmissionsChart";
import { EmissionsSummary } from "./results/EmissionsSummary";
import { Recommendations } from "./results/Recommendations";
import { Leaf, Car, ShoppingBag, Zap } from "lucide-react";
import { calculateTreesNeeded, calculateTransportationEmissions, calculateShoppingEmissions } from "@/lib/utils";
import type { FootprintData, EmissionCategory } from "@/lib/types";

interface ResultsProps {
  data: FootprintData;
}

export default function Results({ data }: ResultsProps) {
  const [emissions, setEmissions] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const calculateEmissions = async () => {
      try {
        const electricityEmissions = await calculateElectricityEmissions(
          data.electricity.annualConsumption,
          data.household.country,
          data.household.state
        );
        setEmissions(electricityEmissions.data.attributes.carbon_mt);
        setError(null);
      } catch (err) {
        const message = err instanceof CarbonAPIError 
          ? err.message 
          : 'Failed to calculate emissions';
        setError(message);
        setEmissions(0);
      } finally {
        setLoading(false);
      }
    };

    calculateEmissions();
  }, [data]);

  if (loading) {
    return (
      <div className="flex items-center justify-center gap-2 text-green-600">
        <Leaf className="w-5 h-5 animate-spin" />
        <span>Calculating your carbon footprint...</span>
      </div>
    );
  }

  const transportationEmissions = calculateTransportationEmissions(
    data.transportation.annualMileage,
    data.transportation.hasElectricCar,
    EMISSIONS_FACTORS.transportation.electricCarEmissionsPerMile,
    EMISSIONS_FACTORS.transportation.carEmissionsPerMile
  );

  const shoppingEmissions = calculateShoppingEmissions(
    data.shopping.monthlyExpenditure,
    data.shopping.sustainablePurchases,
    EMISSIONS_FACTORS.shopping.emissionsPerDollar,
    EMISSIONS_FACTORS.shopping.sustainableReductionFactor
  );

  const categories: EmissionCategory[] = [
    { name: "Electricity", value: emissions || 0, icon: Zap },
    { name: "Transportation", value: transportationEmissions, icon: Car },
    { name: "Shopping", value: shoppingEmissions, icon: ShoppingBag },
  ];

  const totalEmissions = categories.reduce((acc, item) => acc + item.value, 0);
  const treesNeeded = calculateTreesNeeded(totalEmissions);

  return (
    <div className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <EmissionsSummary 
        totalEmissions={totalEmissions}
        treesNeeded={treesNeeded}
      />

      <EmissionsChart data={categories} />

      <Recommendations 
        categories={categories}
        totalEmissions={totalEmissions}
      />
    </div>
  );
}