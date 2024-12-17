import type { LucideIcon } from 'lucide-react';

export interface FootprintData {
  household: {
    size: number;
    country: string;
    state?: string;
  };
  electricity: {
    annualConsumption: number;
  };
  transportation: {
    hasElectricCar: boolean;
    annualMileage: number;
  };
  shopping: {
    monthlyExpenditure: number;
    sustainablePurchases: number;
  };
}

export interface EmissionCategory {
  name: string;
  value: number;
  icon: LucideIcon;
}