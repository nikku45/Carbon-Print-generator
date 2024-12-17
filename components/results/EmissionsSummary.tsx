"use client";

import { Card } from "@/components/ui/card";
import { Leaf, TreeDeciduous } from "lucide-react";
import { formatEmissionValue } from '@/lib/utils';

interface EmissionsSummaryProps {
  totalEmissions: number;
  treesNeeded: number;
}

export function EmissionsSummary({ totalEmissions, treesNeeded }: EmissionsSummaryProps) {
  return (
    <Card className="p-6 bg-gradient-to-br from-green-50 to-white">
      <div className="flex items-center gap-3 mb-4">
        <Leaf className="w-8 h-8 text-green-600" />
        <h2 className="text-2xl font-bold">Your Carbon Footprint</h2>
      </div>
      <div className="text-4xl font-bold text-green-700 mb-2">
        {formatEmissionValue(totalEmissions)} <span className="text-base font-normal">metric tons CO₂/year</span>
      </div>
      <div className="flex items-center gap-2 text-green-600">
        <TreeDeciduous className="w-5 h-5" />
        <p className="text-muted-foreground">
          Equivalent to planting {treesNeeded.toLocaleString()} trees to offset your annual emissions
        </p>
      </div>
    </Card>
  );
}