"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export default function ElectricityForm({ data, onUpdate }) {
  return (
    <div className="space-y-6">
      <Card className="p-4 bg-secondary">
        <div className="flex items-start space-x-4">
          <Lightbulb className="w-6 h-6 mt-1" />
          <div>
            <h3 className="font-medium">Energy Consumption Tips</h3>
            <p className="text-sm text-muted-foreground">
              You can find your annual electricity consumption on your utility bills or by contacting your energy provider.
            </p>
          </div>
        </div>
      </Card>

      <div className="space-y-2">
        <Label htmlFor="consumption">Annual Electricity Consumption (kWh)</Label>
        <Input
          id="consumption"
          type="number"
          min="0"
          value={data.annualConsumption}
          onChange={(e) => onUpdate({ annualConsumption: parseFloat(e.target.value) })}
        />
      </div>
    </div>
  );
}