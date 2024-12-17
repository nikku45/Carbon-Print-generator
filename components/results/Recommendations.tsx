"use client";

import { Card } from "@/components/ui/card";
import { Leaf } from "lucide-react";
import type { EmissionCategory } from '@/lib/types';

interface RecommendationsProps {
  categories: EmissionCategory[];
  totalEmissions: number;
}

export function Recommendations({ categories, totalEmissions }: RecommendationsProps) {
  return (
    <Card className="p-6 bg-gradient-to-br from-green-50 to-white">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Leaf className="w-5 h-5 text-green-600" />
        Recommendations
      </h3>
      <ul className="space-y-3">
        {categories.map(({ name, value, icon: Icon }) => (
          <li key={name} className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-green-600" />
            <span>
              {value > totalEmissions / 3 
                ? `Consider reducing your ${name.toLowerCase()} footprint`
                : `Great job managing your ${name.toLowerCase()} impact!`}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}