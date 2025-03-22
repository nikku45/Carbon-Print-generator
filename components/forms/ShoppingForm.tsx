"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { ShoppingBag, Leaf } from "lucide-react";

interface ShoppingFormProps {
  data: {
    monthlyExpenditure: number;
    sustainablePurchases: number;
  };
  onUpdate: (data: any) => void;
}

export default function ShoppingForm({ data, onUpdate }: ShoppingFormProps) {
  return (
    <div className="space-y-4">
      <Card className="p-4 bg-green-50">
        <div className="flex items-start space-x-4">
          <ShoppingBag className="w-6 h-6 mt-1 text-green-600" />
          <div>
            <h3 className="font-medium">Monthly Expensses</h3>
            <p className="text-sm text-muted-foreground">
              Tell us about your monthly shopping expenditure on the things like furniture,clothes etc and the percentage of sustainable purchases as
            </p>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="expenditure" className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-green-600" />
            Monthly Shopping Expenditure
          </Label>
          <Input
            id="expenditure"
            type="number"
            min="0"
            value={data.monthlyExpenditure}
            onChange={(e) => onUpdate({ monthlyExpenditure: parseFloat(e.target.value) })}
            className="border-green-200 focus:border-green-400 focus:ring-green-400"
          />
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-green-600" />
            Percentage of Sustainable Purchases
          </Label>
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
    </div>
  );
}