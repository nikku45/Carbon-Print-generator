"use client";

import { useEffect, useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { calculateElectricityEmissions, CarbonAPIError } from "@/lib/api/carbon-api";
import { EMISSIONS_FACTORS } from "@/lib/constants";
import { EmissionsChart } from "@/components/results/EmissionsChart";
import { EmissionsSummary } from "@/components/results/EmissionsSummary";
import { Recommendations } from "@/components/results/Recommendations";
import { Leaf, Car, ShoppingBag, Zap, Package } from "lucide-react";
import { calculateTreesNeeded, calculateTransportationEmissions, calculateShoppingEmissions, calculateShippingEmissions } from "@/lib/utils";
import type { FootprintData, EmissionCategory } from "@/lib/types";

interface ResultsProps {
  data: FootprintData;
}

export default function Results({ data }: ResultsProps) {
  const [emissions, setEmissions] = useState<{
    electricity: number;
    shipping: number;
  }>({ electricity: 0, shipping: 0 });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const calculateAllEmissions = async () => {
      try {
        // Calculate electricity emissions
        const electricityEmissions = await calculateElectricityEmissions(
          data.electricity.annualConsumption,
          data.household.country,
          data.household.state
        );

        // Calculate shipping emissions for each package and multiply by number of packages
        const shippingEmissionsPerPackage = await calculateShippingEmissions(
          data.shipping.weight,
          data.shipping.weightUnit,
          data.shipping.distance,
          data.shipping.distanceUnit,
          data.shipping.transportMethod
        );

        // Multiply single package emissions by number of packages per year
        const totalShippingEmissions = shippingEmissionsPerPackage * data.shipping.packagesPerYear;

        setEmissions({
          electricity: electricityEmissions.data.attributes.carbon_mt,
          shipping: totalShippingEmissions
        });
        setError(null);
      } catch (err) {
        const message = err instanceof CarbonAPIError
          ? err.message
          : err instanceof Error
            ? `Failed to calculate emissions: ${err.message}`
            : 'An unexpected error occurred';
        setError(message);
        setEmissions({ electricity: 0, shipping: 0 });
      } finally {
        setLoading(false);
      }
    };

    calculateAllEmissions();
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
    { name: "Electricity", value: emissions.electricity, icon: Zap },
    { name: "Shipping", value: emissions.shipping, icon: Package },
    { name: "Transportation", value: transportationEmissions, icon: Car },
    { name: "Shopping", value: shoppingEmissions, icon: ShoppingBag },
  ];

  const totalEmissions = categories.reduce((acc, item) => acc + item.value, 0);
  const treesNeeded = calculateTreesNeeded(totalEmissions);

  return (
    <div className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>
            <pre className="whitespace-pre-wrap">{error}</pre>
          </AlertDescription>
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