import { type LucideIcon } from 'lucide-react';

// Base form props interface
export interface FormData<T> {
	data: T;
	onUpdate: (data: Partial<T>) => void;
}

// Household form data
export interface HouseholdData {
	size: number;
	country: string;
	state?: string;
}

// Electricity form data
export interface ElectricityData {
	annualConsumption: number;
	unit: 'kwh' | 'mwh';
}

// Shipping form data
export interface ShippingData {
	packagesPerYear: number;
	weight: number;
	weightUnit: 'g' | 'lb' | 'kg' | 'mt';
	distance: number;
	distanceUnit: 'km' | 'mi';
	transportMethod: 'ship' | 'train' | 'truck' | 'plane';
}

// Transportation form data
export interface TransportationData {
	hasElectricCar: boolean;
	annualMileage: number;
	vehicleType?: 'sedan' | 'suv' | 'truck' | 'motorcycle';
	fuelType?: 'gasoline' | 'diesel' | 'hybrid' | 'electric';
}

// Shopping form data
export interface ShoppingData {
	monthlyExpenditure: number;
	sustainablePurchases: number; // percentage
	categories?: {
		clothing: number;
		electronics: number;
		food: number;
		other: number;
	};
}

// Emission category type
export interface EmissionCategory {
	name: string;
	value: number;
	icon: LucideIcon;
}
