import { z } from 'zod';

const CARBON_API_KEY = process.env.CARBON_API_KEY;

const electricityEstimateSchema = z.object({
	data: z.object({
		id: z.string(),
		type: z.string(),
		attributes: z.object({
			carbon_g: z.number(),
			carbon_lb: z.number(),
			carbon_kg: z.number(),
			carbon_mt: z.number(),
		}),
	}),
});

export type ElectricityEstimate = z.infer<typeof electricityEstimateSchema>;

export class CarbonAPIError extends Error {
	constructor(message: string, public readonly status?: number) {
		super(message);
		this.name = 'CarbonAPIError';
	}
}

export async function calculateElectricityEmissions(
	electricityValue: number,
	country: string,
	state?: string
): Promise<ElectricityEstimate> {
	try {
		const response = await fetch(
			'https://www.carboninterface.com/api/v1/estimates',
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${CARBON_API_KEY}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					type: 'electricity',
					electricity_unit: 'kwh',
					electricity_value: electricityValue,
					country,
					state,
				}),
			}
		);

		if (!response.ok) {
			throw new CarbonAPIError(
				`API request failed: ${response.statusText}`,
				response.status
			);
		}

		const data = await response.json();
		return electricityEstimateSchema.parse(data);
	} catch (error) {
		if (error instanceof z.ZodError) {
			throw new CarbonAPIError('Invalid API response format');
		}
		if (error instanceof CarbonAPIError) {
			throw error;
		}
		throw new CarbonAPIError('Failed to calculate emissions');
	}
}

const shippingEstimateSchema = z.object({
	data: z.object({
		id: z.string(),
		type: z.string(),
		attributes: z.object({
			carbon_g: z.number(),
			carbon_lb: z.number(),
			carbon_kg: z.number(),
			carbon_mt: z.number(),
			distance_value: z.string(),
			distance_unit: z.string(),
			weight_value: z.string(),
			weight_unit: z.string(),
			transport_method: z.string(),
			estimated_at: z.string(),
		}),
	}),
});

export type ShippingEstimate = z.infer<typeof shippingEstimateSchema>;

export async function calculateShippingEmissions(
	weight: number,
	weightUnit: string,
	distance: number,
	distanceUnit: string,
	transportMethod: string
): Promise<ShippingEstimate> {
	try {
		const response = await fetch(
			'https://www.carboninterface.com/api/v1/estimates',
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${CARBON_API_KEY}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					type: 'shipping',
					weight_value: weight,
					weight_unit: weightUnit,
					distance_value: distance,
					distance_unit: distanceUnit,
					transport_method: transportMethod,
				}),
			}
		);

		if (!response.ok) {
			throw new CarbonAPIError(
				`API request failed: ${response.statusText}`,
				response.status
			);
		}

		const data = await response.json();
		return shippingEstimateSchema.parse(data);
	} catch (error) {
		if (error instanceof z.ZodError) {
			throw new CarbonAPIError('Invalid API response format');
		}
		if (error instanceof CarbonAPIError) {
			throw error;
		}
		throw new CarbonAPIError('Failed to calculate shipping emissions');
	}
}

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
