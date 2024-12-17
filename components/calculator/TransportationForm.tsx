"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export default function TransportationForm({ data, onUpdate }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Label htmlFor="electric-car">Do you own an electric car?</Label>
        <Switch
          id="electric-car"
          checked={data.hasElectricCar}
          onCheckedChange={(checked) => onUpdate({ hasElectricCar: checked })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mileage">Annual Mileage</Label>
        <Input
          id="mileage"
          type="number"
          min="0"
          value={data.annualMileage}
          onChange={(e) => onUpdate({ annualMileage: parseFloat(e.target.value) })}
        />
      </div>
    </div>
  );
}