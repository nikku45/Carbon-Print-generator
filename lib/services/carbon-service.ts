import {
	calculateElectricityEmissions,
	calculateShippingEmissions,
	type FootprintData,
} from '@/lib/api/carbon-api';

export async function calculateFootprint(data: FootprintData) {
	const [electricityResult, shippingResult] = await Promise.all([
		calculateElectricityEmissions(
			data.electricity.annualConsumption,
			data.household.country,
			data.household.state
		),
		calculateShippingEmissions(
			data.shipping.weight,
			data.shipping.weightUnit,
			data.shipping.distance,
			data.shipping.distanceUnit,
			data.shipping.transportMethod
		),
	]);

	return {
		electricity: electricityResult.data.attributes.carbon_mt,
		shipping:
			shippingResult.data.attributes.carbon_mt *
			data.shipping.packagesPerYear,
	};
}
