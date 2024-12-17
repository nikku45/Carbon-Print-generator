import { z } from 'zod';

//const CARBON_API_KEY = process.env.CARBON_API_KEY;
// SECURITY ISSUE: API key should not be hardcoded will remove after task is complete
const CARBON_API_KEY = 'FIN7MnfY9U7CQqkG7q6UyQ';
const electricityEstimateSchema = z.object({
	data: z.object({
		id: z.string(),
		type: z.string(),
		attributes: z.object({
			country: z.string().length(2).toLowerCase(),
			state: z.string().nullable(),
			electricity_unit: z.enum(['kwh', 'mwh']),
			electricity_value: z.number().positive(),
			estimated_at: z.string(),
			carbon_g: z.number().nonnegative(),
			carbon_lb: z.number().nonnegative(),
			carbon_kg: z.number().nonnegative(),
			carbon_mt: z.number().nonnegative(),
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

// Keep only essential request validation
const validateElectricityRequest = (
	electricityValue: number,
	country: string,
	state?: string
) => {
	if (electricityValue <= 0) {
		throw new CarbonAPIError('Electricity value must be positive');
	}
	if (country.length !== 2) {
		throw new CarbonAPIError('Country must be a 2-letter code');
	}
};

export async function calculateElectricityEmissions(
	electricityValue: number,
	country: string,
	state?: string
): Promise<ElectricityEstimate> {
	try {
		validateElectricityRequest(electricityValue, country, state);

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
					country: country.toLowerCase(),
					state: state?.toLowerCase(),
				}),
			}
		);

		if (!response.ok) {
			const errorData = await response.json().catch(() => null);
			console.error('API Error Response:', errorData);
			throw new CarbonAPIError(
				`API request failed (${response.status}): ${
					response.statusText
				}. ${errorData ? JSON.stringify(errorData) : ''}`,
				response.status
			);
		}

		const data = await response.json();
		console.debug('API Response:', data); // Help debug schema issues

		try {
			return electricityEstimateSchema.parse(data);
		} catch (e) {
			if (e instanceof z.ZodError) {
				console.error('Validation errors:', e.errors);
				throw new CarbonAPIError(
					`Invalid API response format: ${e.errors
						.map((err) => err.message)
						.join(', ')}`
				);
			}
			throw e;
		}
	} catch (error) {
		if (error instanceof CarbonAPIError) {
			throw error;
		}
		console.error('API Call Error:', error);
		throw new CarbonAPIError(
			`Failed to calculate emissions: ${
				error instanceof Error ? error.message : 'Unknown error'
			}`
		);
	}
}

const shippingEstimateSchema = z.object({
	data: z.object({
		id: z.string(),
		type: z.string(),
		attributes: z.object({
			weight_value: z.number().positive(),
			weight_unit: z.enum(['g', 'lb', 'kg', 'mt']),
			distance_value: z.number().positive(),
			distance_unit: z.enum(['km', 'mi']),
			transport_method: z.enum(['ship', 'train', 'truck', 'plane']),
			estimated_at: z.string(),
			carbon_g: z.number().nonnegative(),
			carbon_lb: z.number().nonnegative(),
			carbon_kg: z.number().nonnegative(),
			carbon_mt: z.number().nonnegative(),
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
					weight_unit: weightUnit.toLowerCase(),
					distance_value: distance,
					distance_unit: distanceUnit.toLowerCase(),
					transport_method: transportMethod.toLowerCase(),
				}),
			}
		);

		if (!response.ok) {
			const errorData = await response.json().catch(() => null);
			console.error('API Error Response:', errorData);
			throw new CarbonAPIError(
				`API request failed (${response.status}): ${
					response.statusText
				}. ${errorData ? JSON.stringify(errorData) : ''}`,
				response.status
			);
		}

		const data = await response.json();
		console.debug('Shipping API Response:', data);

		try {
			return shippingEstimateSchema.parse(data);
		} catch (e) {
			if (e instanceof z.ZodError) {
				console.error('Validation errors:', e.errors);
				throw new CarbonAPIError(
					`Invalid API response format: ${e.errors
						.map((err) => err.message)
						.join(', ')}`
				);
			}
			throw e;
		}
	} catch (error) {
		if (error instanceof CarbonAPIError) {
			throw error;
		}
		console.error('API Call Error:', error);
		throw new CarbonAPIError(
			`Failed to calculate shipping emissions: ${
				error instanceof Error ? error.message : 'Unknown error'
			}`
		);
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

const electricityRequestSchema = z.object({
	type: z.literal('electricity'),
	electricity_unit: z.enum(['kwh', 'mwh']),
	electricity_value: z.number().positive(),
	country: z.string().length(2),
	state: z.string().optional(),
});

const shippingRequestSchema = z.object({
	type: z.literal('shipping'),
	weight_value: z.number().positive(),
	weight_unit: z.enum(['g', 'lb', 'kg', 'mt']),
	distance_value: z.number().positive(),
	distance_unit: z.enum(['km', 'mi']),
	transport_method: z.enum(['ship', 'train', 'truck', 'plane']),
});
