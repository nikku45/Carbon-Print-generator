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
		(monthlyExpenditure *
			12 *
			emissionsPerDollar *
			(1 - (sustainablePurchases / 100) * sustainableReductionFactor)) /
		1000
	);
}

export async function calculateShippingEmissions(
	weight: number,
	weightUnit: 'g' | 'lb' | 'kg' | 'mt',
	distance: number,
	distanceUnit: 'km' | 'mi',
	transportMethod: 'ship' | 'train' | 'truck' | 'plane'
): Promise<number> {
	// Call the Carbon Interface API
	const response = await fetch(
		'https://www.carboninterface.com/api/v1/estimates',
		{
			method: 'POST',
			headers: {
				Authorization: `Bearer ${process.env.CARBON_API_KEY}`,
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
		throw new Error('Failed to calculate shipping emissions');
	}

	const data = await response.json();
	return data.data.attributes.carbon_mt;
}
