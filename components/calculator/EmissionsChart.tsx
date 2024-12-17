"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from "@/components/ui/card";
import { formatEmissionValue } from '@/lib/utils';

interface EmissionDataPoint {
  name: string;
  value: number;
  icon: any;
}

interface EmissionsChartProps {
  data: EmissionDataPoint[];
}

export function EmissionsChart({ data }: EmissionsChartProps) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Emissions by Category</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name"
              tick={{ fill: 'hsl(var(--foreground))' }}
            />
            <YAxis
              tick={{ fill: 'hsl(var(--foreground))' }}
              tickFormatter={formatEmissionValue}
            />
            <Tooltip 
              formatter={(value: number) => [`${formatEmissionValue(value)} CO₂`, 'Emissions']}
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Bar
              dataKey="value"
              fill="hsl(var(--primary))"
              name="CO₂ Emissions (metric tons)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}