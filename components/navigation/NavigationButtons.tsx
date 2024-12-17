"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationButtonsProps {
  onBack: () => void;
  onNext: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export function NavigationButtons({ onBack, onNext, isFirstStep, isLastStep }: NavigationButtonsProps) {
  return (
    <div className="flex justify-between mt-4">
      <Button
        variant="outline"
        onClick={onBack}
        disabled={isFirstStep}
        className="flex items-center gap-2 border-green-200 hover:bg-green-50 hover:text-green-700"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Button>
      <Button
        onClick={onNext}
        disabled={isLastStep}
        className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
      >
        {isLastStep ? 'Calculate' : 'Next'}
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
}