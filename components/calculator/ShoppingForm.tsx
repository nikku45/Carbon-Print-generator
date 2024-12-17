"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

export default function ShoppingForm({ data, onUpdate }) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="expenditure">Monthly Shopping Expenditure ($)</Label>
        <Input
          id="expenditure"
          type="number"
          min="0"
          value={data.monthlyExpenditure}
          onChange={(e) => onUpdate({ monthlyExpenditure: parseFloat(e.target.value) })}
        />
      </div>

      <div className="space-y-4">
        <Label>Percentage of Sustainable Purchases</Label>
        <Slider
          value={[data.sustainablePurchases]}
          onValueChange={([value]) => onUpdate({ sustainablePurchases: value })}
          max={100}
          step={1}
        />
        <div className="text-sm text-muted-foreground text-center">
          {data.sustainablePurchases}% sustainable
        </div>
      </div>
    </div>
  );
}