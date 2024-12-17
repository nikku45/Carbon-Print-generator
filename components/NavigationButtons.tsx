"use client";

import { memo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

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
    <div className="flex justify-between pt-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          onClick={onBack}
          variant="outline"
          disabled={isFirstStep}
          className="relative group flex items-center gap-2 pr-6 hover:bg-primary/5 disabled:opacity-50"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          <span>Back</span>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          onClick={onNext}
          disabled={isLastStep}
          className="relative group flex items-center gap-2 pl-6 bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <span>{isLastStep ? "Complete" : "Next"}</span>
          {!isLastStep && (
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          )}
        </Button>
      </motion.div>
    </div>
  );
});