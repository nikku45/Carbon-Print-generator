import { type LucideIcon } from 'lucide-react';

export interface FormData<T> {
  data: T;
  onUpdate: (data: Partial<T>) => void;
}

export interface HouseholdData {
  size: number;
  country: string;
  state?: string;
}

export interface ElectricityData {
  annualConsumption: number;
}

export interface TransportationData {
  hasElectricCar: boolean;
  annualMileage: number;
}

export interface ShoppingData {
  monthlyExpenditure: number;
  sustainablePurchases: number;
}

export interface EmissionCategory {
  name: string;
  value: number;
  icon: LucideIcon;
}