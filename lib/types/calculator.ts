import { EmissionCategory } from './forms';

// Calculator step types
export type StepKey =
	| 'HOUSEHOLD'
	| 'ELECTRICITY'
	| 'SHIPPING'
	| 'TRANSPORTATION'
	| 'SHOPPING'
	| 'RESULTS';
export type StepValue = 0 | 1 | 2 | 3 | 4 | 5;

// Component props types
export interface StepIndicatorProps {
	steps: readonly string[];
	currentStep: number;
	progress: number;
}

export interface NavigationButtonsProps {
	onBack: () => void;
	onNext: () => void;
	isFirstStep: boolean;
	isLastStep: boolean;
}

export interface ResultsProps {
	totalEmissions: number;
	treesNeeded: number;
	categories: EmissionCategory[];
}

// Chart types
export interface ChartDataPoint {
	name: string;
	value: number;
}

export interface EmissionsChartProps {
	data: ChartDataPoint[];
}
