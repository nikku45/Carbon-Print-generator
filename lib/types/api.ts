import type {
	HouseholdData,
	ElectricityData,
	ShippingData,
	TransportationData,
	ShoppingData,
} from './forms';

// API response types
export interface CarbonAPIResponse {
	data: {
		id: string;
		type: string;
		attributes: {
			carbon_mt: number;
			carbon_kg: number;
			carbon_lb: number;
		};
	};
}

export interface CarbonAPIError {
	message: string;
	code: string;
}

// Combined footprint data
export interface FootprintData {
	household: HouseholdData;
	electricity: ElectricityData;
	shipping: ShippingData;
	transportation: TransportationData;
	shopping: ShoppingData;
}

// API request types
export interface ElectricityRequest {
	type: 'electricity';
	electricity_unit: 'kwh' | 'mwh';
	electricity_value: number;
	country: string;
	state?: string;
}

export interface ShippingRequest {
	type: 'shipping';
	weight_unit: ShippingData['weightUnit'];
	weight_value: number;
	distance_unit: ShippingData['distanceUnit'];
	distance_value: number;
	transport_method: ShippingData['transportMethod'];
}
