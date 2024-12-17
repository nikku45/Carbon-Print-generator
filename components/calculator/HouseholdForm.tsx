"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const countries = [
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "GB", name: "United Kingdom" },
  { code: "DE", name: "Germany" },
  // Add more countries as needed
];

export default function HouseholdForm({ data, onUpdate }) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="size">Household Size</Label>
        <Input
          id="size"
          type="number"
          min="1"
          value={data.size}
          onChange={(e) => onUpdate({ size: parseInt(e.target.value) })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="country">Country</Label>
        <Select
          value={data.country}
          onValueChange={(value) => onUpdate({ country: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                {country.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}