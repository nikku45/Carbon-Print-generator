"use client";

import { Check, Leaf } from "lucide-react";
import { motion } from "framer-motion";

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
  progress: number;
}

export function StepIndicator({ steps, currentStep, progress }: StepIndicatorProps) {
  return (
    <div className="space-y-4">
      <motion.div
        className="flex justify-between items-center text-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="flex items-center gap-2 text-muted-foreground">
          <Leaf className="w-4 h-4 text-primary" />
          <span>Step {currentStep + 1} of {steps.length}</span>
        </span>
        <motion.span
          key={steps[currentStep]}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-medium text-primary"
        >
          {steps[currentStep]}
        </motion.span>
      </motion.div>

      <div className="relative">
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        <div className="flex justify-between mt-2">
          {steps.map((_, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;

            return (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: isCurrent ? 1.1 : 1,
                  opacity: 1
                }}
                transition={{ duration: 0.2 }}
                className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isCompleted
                    ? 'bg-primary/10 text-primary'
                    : isCurrent
                      ? 'bg-primary/20 text-primary ring-2 ring-primary ring-offset-2'
                      : 'bg-secondary text-muted-foreground'
                  }`}
              >
                {isCompleted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Check className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}