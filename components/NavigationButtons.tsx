"use client";

import { memo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationButtonsProps {
  onBack: () => void;
  onNext: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export const NavigationButtons = memo(function NavigationButtons({
  onBack,
  onNext,
  isFirstStep,
  isLastStep,
}: NavigationButtonsProps) {
  return (
    <div className="flex justify-between pt-4">
      <Button
        onClick={onBack}
        variant="outline"
        disabled={isFirstStep}
        className="flex items-center gap-2"
      >
        <ChevronLeft className="h-4 w-4" />
        Back
      </Button>
      <Button
        onClick={onNext}
        disabled={isLastStep}
        className="flex items-center gap-2"
      >
        {isLastStep ? "Complete" : "Next"}
        {!isLastStep && <ChevronRight className="h-4 w-4" />}
      </Button>
    </div>
  );
});