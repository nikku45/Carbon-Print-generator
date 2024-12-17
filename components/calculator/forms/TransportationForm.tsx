"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Car, BatteryCharging } from "lucide-react";

interface TransportationFormProps {
  data: {
    hasElectricCar: boolean;
    annualMileage: number;
  };
  onUpdate: (data: any) => void;
}

export default function TransportationForm({ data, onUpdate }: TransportationFormProps) {
  return (
    <div className="space-y-4">
      <Card className="p-4 bg-green-50">
        <div className="flex items-start space-x-4">
          <Car className="w-6 h-6 mt-1 text-green-600" />
          <div>
            <h3 className="font-medium">Transportation Details</h3>
            <p className="text-sm text-muted-foreground">
              Tell us about your vehicle usage to calculate transportation emissions.
            </p>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="electric-car" className="flex items-center gap-2">
            <BatteryCharging className="w-4 h-4 text-green-600" />
            Do you own an electric car?
          </Label>
          <Switch
            id="electric-car"
            checked={data.hasElectricCar}
            onCheckedChange={(checked) => onUpdate({ hasElectricCar: checked })}
            className="data-[state=checked]:bg-green-600"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mileage" className="flex items-center gap-2">
            <Car className="w-4 h-4 text-green-600" />
            Annual Mileage
          </Label>
          <Input
            id="mileage"
            type="number"
            min="0"
            value={data.annualMileage}
            onChange={(e) => onUpdate({ annualMileage: parseFloat(e.target.value) })}
            className="border-green-200 focus:border-green-400 focus:ring-green-400"
          />
        </div>
      </div>
    </div>
  );
}