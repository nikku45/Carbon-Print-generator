import { NextResponse } from 'next/server';
import { type FootprintData } from '@/lib/api/carbon-api';
import { calculateFootprint } from '@/lib/services/carbon-service';

export async function POST(request: Request) {
	
		const data = (await request.json()) as FootprintData;
		const result = await calculateFootprint(data);
		console.log("Calculated Footprint Result:", result); // Log the result
		return NextResponse.json(result);
	
		

}
