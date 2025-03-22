export const COUNTRIES = [
	{code: 'IN', name: 'India'},
	{ code: 'US', name: 'United States' },
	{ code: 'CA', name: 'Canada' },
	{ code: 'GB', name: 'United Kingdom' },
	{ code: 'DE', name: 'Germany' },
	{ code: 'FR', name: 'France' },
	{ code: 'ES', name: 'Spain' },
	{ code: 'IT', name: 'Italy' },
	{ code: 'AU', name: 'Australia' },
	{ code: 'JP', name: 'Japan' },
	
] as const;

export const EMISSIONS_FACTORS = {
	transportation: {
		electricCarEmissionsPerMile: 0.2, // Verify with latest EPA data
		carEmissionsPerMile: 0.404, // EPA average
	},
	shopping: {
		emissionsPerDollar: 0.0088, // Verify with latest data
		sustainableReductionFactor: 0.3,
	},
} as const;
