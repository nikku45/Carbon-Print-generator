"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import HouseholdForm from "@/components/calculator/HouseholdForm";
import ElectricityForm from "@/components/calculator/ElectricityForm";
import ShippingForm from "@/components/calculator/forms/ShippingForm";
import TransportationForm from "@/components/calculator/TransportationForm";
import ShoppingForm from "@/components/calculator/ShoppingForm";
import Results from "@/components/calculator/Results";
import { StepIndicator } from "@/components/calculator/StepIndicator";
import { NavigationButtons } from "@/components/calculator/NavigationButtons";
import type { FootprintData } from "@/lib/carbon-api";

const steps = ["Household", "Electricity", "Shipping", "Transportation", "Shopping", "Results"];

export default function Calculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [footprintData, setFootprintData] = useState<FootprintData>({
    household: { size: 1, country: "US" },
    electricity: { annualConsumption: 0, unit: 'kwh' },
    shipping: {
      packagesPerYear: 1,
      weight: 1,
      weightUnit: 'kg',
      distance: 100,
      distanceUnit: 'km',
      transportMethod: 'truck',
    },
    transportation: { hasElectricCar: false, annualMileage: 0 },
    shopping: { monthlyExpenditure: 0, sustainablePurchases: 0 },
  });

  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const updateData = <K extends keyof FootprintData>(
    section: K,
    data: Partial<FootprintData[K]>
  ) => {
    setFootprintData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-green-800">Carbon Footprint Calculator</h1>
          <p className="text-green-600">
            Calculate your annual CO2 emissions and understand your environmental impact
          </p>
        </div>

        <Card className="p-6">
          <div className="space-y-6">
            <StepIndicator
              steps={steps}
              currentStep={currentStep}
              progress={progress}
            />

            <div className="min-h-[400px] py-4">
              {currentStep === 0 && (
                <HouseholdForm
                  data={footprintData.household}
                  onUpdate={(data) => updateData("household", data)}
                />
              )}
              {currentStep === 1 && (
                <ElectricityForm
                  data={footprintData.electricity}
                  onUpdate={(data) => updateData("electricity", data)}
                />
              )}
              {currentStep === 2 && (
                <ShippingForm
                  data={footprintData.shipping}
                  onUpdate={(data) => updateData("shipping", data)}
                />
              )}
              {currentStep === 3 && (
                <TransportationForm
                  data={footprintData.transportation}
                  onUpdate={(data) => updateData("transportation", data)}
                />
              )}
              {currentStep === 4 && (
                <ShoppingForm
                  data={footprintData.shopping}
                  onUpdate={(data) => updateData("shopping", data)}
                />
              )}
              {currentStep === 5 && <Results data={footprintData} />}
            </div>

            <NavigationButtons
              onBack={handleBack}
              onNext={handleNext}
              isFirstStep={currentStep === 0}
              isLastStep={currentStep === steps.length - 1}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}