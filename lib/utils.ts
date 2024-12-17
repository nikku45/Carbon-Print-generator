import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatEmissionValue(value: number): string {
  return value.toFixed(2);
}

export function calculateTreesNeeded(emissions: number): number {
  // Average tree absorbs about 22kg of CO2 per year
  // 1 metric ton = 1000 kg
  // So we need (emissions * 1000) / 22 trees
  return Math.round(emissions * 45.45); // This gives us a more accurate number
}

export function calculateTransportationEmissions(
  annualMileage: number,
  hasElectricCar: boolean,
  electricCarEmissionsPerMile: number,
  carEmissionsPerMile: number
): number {
  return hasElectricCar
    ? (annualMileage * electricCarEmissionsPerMile) / 1000
    : (annualMileage * carEmissionsPerMile) / 1000;
}

export function calculateShoppingEmissions(
  monthlyExpenditure: number,
  sustainablePurchases: number,
  emissionsPerDollar: number,
  sustainableReductionFactor: number
): number {
  return (
    monthlyExpenditure * 
    12 * 
    emissionsPerDollar * 
    (1 - (sustainablePurchases / 100 * sustainableReductionFactor))
  ) / 1000;
}