export const COUNTRIES = [
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "GB", name: "United Kingdom" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "ES", name: "Spain" },
  { code: "IT", name: "Italy" },
  { code: "AU", name: "Australia" },
  { code: "JP", name: "Japan" },
] as const;

export const EMISSIONS_FACTORS = {
  transportation: {
    carEmissionsPerMile: 0.404, // kg CO2 per mile
    electricCarEmissionsPerMile: 0.1, // kg CO2 per mile
  },
  shopping: {
    emissionsPerDollar: 0.1, // kg CO2 per dollar
    sustainableReductionFactor: 0.4, // 40% reduction for sustainable purchases
  },
};