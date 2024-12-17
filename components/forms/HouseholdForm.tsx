"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Home, Users } from "lucide-react";
import { COUNTRIES } from "@/lib/constants";
import { InfoCard } from "@/components/InfoCard";
import type { FormData, HouseholdData } from "@/lib/types/forms";

export default function HouseholdForm({ data, onUpdate }: FormData<HouseholdData>) {
  return (
    <div className="space-y-4">
      <InfoCard
        icon={Home}
        title="Household Information"
        description="Tell us about your household to help calculate your carbon footprint."
      />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="size" className="flex items-center gap-2">
            <Users className="w-4 h-4 text-green-600" />
            Household Size
          </Label>
          <Input
            id="size"
            type="number"
            min="1"
            value={data.size}
            onChange={(e) => onUpdate({ size: parseInt(e.target.value) })}
            className="border-green-200 focus:border-green-400 focus:ring-green-400"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="country" className="flex items-center gap-2">
            <Home className="w-4 h-4 text-green-600" />
            Country
          </Label>
          <Select
            value={data.country}
            onValueChange={(value) => onUpdate({ country: value })}
          >
            <SelectTrigger className="border-green-200 focus:border-green-400 focus:ring-green-400">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              {COUNTRIES.map((country) => (
                <SelectItem key={country.code} value={country.code}>
                  {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}