"use client";

import { Check, Leaf } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
  progress: number;
}

export function StepIndicator({ steps, currentStep, progress }: StepIndicatorProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-sm">
        <span className="flex items-center gap-2">
          <Leaf className="w-4 h-4 text-green-600" />
          Step {currentStep + 1} of {steps.length}
        </span>
        <span className="font-medium text-green-600">{steps[currentStep]}</span>
      </div>
      
      <Progress value={progress} className="h-2 bg-gray-100 [&>div]:bg-green-600" />
      
      <div className="flex justify-between mt-1">
        {steps.map((_, index) => (
          <div 
            key={index}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              index <= currentStep 
                ? 'bg-green-100 text-green-600' 
                : 'bg-gray-100 text-gray-400'
            }`}
          >
            {index < currentStep ? (
              <Check className="w-4 h-4" />
            ) : (
              <span>{index + 1}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}