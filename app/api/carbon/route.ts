import { NextResponse } from 'next/server';
import { type FootprintData } from '@/lib/api/carbon-api';
import { calculateFootprint } from '@/lib/services/carbon-service';

export async function POST(request: Request) {
	try {
		const data = (await request.json()) as FootprintData;
		const result = await calculateFootprint(data);
		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.json(
			{ error: 'Failed to calculate emissions' },
			{ status: 500 }
		);
	}
}
