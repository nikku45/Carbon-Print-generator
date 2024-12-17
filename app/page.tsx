"use client";

import { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import HouseholdForm from "@/components/forms/HouseholdForm";
import ElectricityForm from "@/components/forms/ElectricityForm";
import ShippingForm from "@/components/forms/ShippingForm";
import TransportationForm from "@/components/forms/TransportationForm";
import ShoppingForm from "@/components/forms/ShoppingForm";
import Results from "@/components/Results";
import { StepIndicator } from "@/components/StepIndicator";
import { NavigationButtons } from "@/components/NavigationButtons";
import type { FootprintData } from "@/lib/api/carbon-api";

//  step types
type StepKey = 'HOUSEHOLD' | 'ELECTRICITY' | 'SHIPPING' | 'TRANSPORTATION' | 'SHOPPING' | 'RESULTS';
type StepValue = 0 | 1 | 2 | 3 | 4 | 5;

const CALCULATOR_STEPS: Record<StepKey, StepValue> = {
  HOUSEHOLD: 0,
  ELECTRICITY: 1,
  SHIPPING: 2,
  TRANSPORTATION: 3,
  SHOPPING: 4,
  RESULTS: 5,
} as const;

const STEP_LABELS = ["Household", "Electricity", "Shipping", "Transportation", "Shopping", "Results"] as const;
type StepLabel = typeof STEP_LABELS[number];

// Initial footprint data
const INITIAL_FOOTPRINT_DATA: FootprintData = {
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
};

export default function Home() {
  const [currentStep, setCurrentStep] = useState<StepValue>(CALCULATOR_STEPS.HOUSEHOLD);
  const [footprintData, setFootprintData] = useState<FootprintData>(INITIAL_FOOTPRINT_DATA);

  const progress = ((currentStep + 1) / STEP_LABELS.length) * 100;

  const handleNext = useCallback(() => {
    setCurrentStep((prev) =>
      prev < CALCULATOR_STEPS.RESULTS ? ((prev + 1) as StepValue) : prev
    );
  }, []);

  const handleBack = useCallback(() => {
    setCurrentStep((prev) =>
      prev > CALCULATOR_STEPS.HOUSEHOLD ? ((prev - 1) as StepValue) : prev
    );
  }, []);

  const updateData = useCallback(<K extends keyof FootprintData>(
    section: K,
    data: Partial<FootprintData[K]>
  ) => {
    setFootprintData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }));
  }, []);

  // Render current step component
  const renderStepComponent = useCallback(() => {
    switch (currentStep) {
      case CALCULATOR_STEPS.HOUSEHOLD:
        return (
          <HouseholdForm
            data={footprintData.household}
            onUpdate={(data: Partial<FootprintData['household']>) =>
              updateData("household", data)
            }
          />
        );
      case CALCULATOR_STEPS.ELECTRICITY:
        return (
          <ElectricityForm
            data={footprintData.electricity}
            onUpdate={(data: Partial<FootprintData['electricity']>) =>
              updateData("electricity", data)
            }
          />
        );
      case CALCULATOR_STEPS.SHIPPING:
        return (
          <ShippingForm
            data={footprintData.shipping}
            onUpdate={(data: Partial<FootprintData['shipping']>) =>
              updateData("shipping", data)
            }
          />
        );
      case CALCULATOR_STEPS.TRANSPORTATION:
        return (
          <TransportationForm
            data={footprintData.transportation}
            onUpdate={(data: Partial<FootprintData['transportation']>) =>
              updateData("transportation", data)
            }
          />
        );
      case CALCULATOR_STEPS.SHOPPING:
        return (
          <ShoppingForm
            data={footprintData.shopping}
            onUpdate={(data: Partial<FootprintData['shopping']>) =>
              updateData("shopping", data)
            }
          />
        );
      case CALCULATOR_STEPS.RESULTS:
        return <Results data={footprintData} />;
      default:
        return null;
    }
  }, [currentStep, footprintData, updateData]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <Header />
        <Card className="p-6">
          <div className="space-y-6">
            <StepIndicator
              steps={[...STEP_LABELS]}
              currentStep={currentStep}
              progress={progress}
            />

            <div
              className="min-h-[400px] py-4"
              role="region"
              aria-label={`Step ${currentStep + 1}: ${STEP_LABELS[currentStep]}`}
            >
              {renderStepComponent()}
            </div>

            <NavigationButtons
              onBack={handleBack}
              onNext={handleNext}
              isFirstStep={currentStep === CALCULATOR_STEPS.HOUSEHOLD}
              isLastStep={currentStep === CALCULATOR_STEPS.RESULTS}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}