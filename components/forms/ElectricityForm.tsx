"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Lightbulb, Zap } from "lucide-react";

interface ElectricityFormProps {
  data: {
    annualConsumption: number;
  };
  onUpdate: (data: Partial<{ annualConsumption: number }>) => void;
}

export default function ElectricityForm({ data, onUpdate }: ElectricityFormProps) {
  const inputValue = isNaN(data.annualConsumption) ? '' : data.annualConsumption;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onUpdate({
      annualConsumption: value === '' ? 0 : parseFloat(value)
    });
  };

  return (
    <div className="space-y-4">
      <Card className="p-4 bg-green-50">
        <div className="flex items-start space-x-4">
          <Lightbulb className="w-6 h-6 mt-1 text-green-600" />
          <div>
            <h3 className="font-medium">Energy Consumption</h3>
            <p className="text-sm text-muted-foreground">
              You can find your annual electricity consumption on your utility bills or by contacting your energy provider.
            </p>
          </div>
        </div>
      </Card>

      <div className="space-y-2">
        <Label htmlFor="consumption" className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-green-600" />
          Annual Electricity Consumption (kWh)
        </Label>
        <Input
          id="consumption"
          type="number"
          min="0"
          value={inputValue}
          onChange={handleChange}
          className="border-green-200 focus:border-green-400 focus:ring-green-400"
        />
      </div>
    </div>
  );
}