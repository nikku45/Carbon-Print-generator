import type { LucideIcon } from 'lucide-react';

export interface FootprintData {
	household: {
		size: number;
		country: string;
		state?: string;
	};
	electricity: {
		annualConsumption: number;
		unit: 'kwh' | 'mwh';
	};
	shipping: {
		packagesPerYear: number;
		weight: number;
		weightUnit: 'g' | 'lb' | 'kg' | 'mt';
		distance: number;
		distanceUnit: 'km' | 'mi';
		transportMethod: 'ship' | 'train' | 'truck' | 'plane';
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
