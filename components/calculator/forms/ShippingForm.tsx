"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Package, Truck } from "lucide-react";

const WEIGHT_UNITS = [
    { value: 'g', label: 'Grams (g)' },
    { value: 'lb', label: 'Pounds (lb)' },
    { value: 'kg', label: 'Kilograms (kg)' },
    { value: 'mt', label: 'Metric Tonnes (mt)' },
];

const DISTANCE_UNITS = [
    { value: 'km', label: 'Kilometers (km)' },
    { value: 'mi', label: 'Miles (mi)' },
];

const TRANSPORT_METHODS = [
    { value: 'truck', label: 'Truck' },
    { value: 'ship', label: 'Ship' },
    { value: 'train', label: 'Train' },
    { value: 'plane', label: 'Plane' },
];

interface ShippingData {
    packagesPerYear: number;
    weight: number;
    weightUnit: string;
    distance: number;
    distanceUnit: string;
    transportMethod: string;
}

interface ShippingFormProps {
    data: ShippingData;
    onUpdate: (data: Partial<ShippingData>) => void;
}

export default function ShippingForm({ data, onUpdate }: ShippingFormProps) {
    return (
        <div className="space-y-4">
            <Card className="p-4 bg-green-50">
                <div className="flex items-start space-x-4">
                    <Package className="w-6 h-6 mt-1 text-green-600" />
                    <div>
                        <h3 className="font-medium">Shipping Information</h3>
                        <p className="text-sm text-muted-foreground">
                            Tell us about your shipping habits to calculate the associated emissions.
                        </p>
                    </div>
                </div>
            </Card>

            <div className="grid gap-4">
                <div className="space-y-2">
                    <Label htmlFor="packagesPerYear">Packages Per Year</Label>
                    <Input
                        id="packagesPerYear"
                        type="number"
                        min="1"
                        value={data.packagesPerYear}
                        onChange={(e) => onUpdate({ packagesPerYear: parseInt(e.target.value) })}
                        className="border-green-200 focus:border-green-400 focus:ring-green-400"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="weight">Average Package Weight</Label>
                        <Input
                            id="weight"
                            type="number"
                            min="0.1"
                            step="0.1"
                            value={data.weight}
                            onChange={(e) => onUpdate({ weight: parseFloat(e.target.value) })}
                            className="border-green-200 focus:border-green-400 focus:ring-green-400"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="weightUnit">Weight Unit</Label>
                        <Select
                            value={data.weightUnit}
                            onValueChange={(value) => onUpdate({ weightUnit: value })}
                        >
                            <SelectTrigger className="border-green-200 focus:border-green-400 focus:ring-green-400">
                                <SelectValue placeholder="Select unit" />
                            </SelectTrigger>
                            <SelectContent>
                                {WEIGHT_UNITS.map((unit) => (
                                    <SelectItem key={unit.value} value={unit.value}>
                                        {unit.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="distance">Average Shipping Distance</Label>
                        <Input
                            id="distance"
                            type="number"
                            min="1"
                            value={data.distance}
                            onChange={(e) => onUpdate({ distance: parseFloat(e.target.value) })}
                            className="border-green-200 focus:border-green-400 focus:ring-green-400"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="distanceUnit">Distance Unit</Label>
                        <Select
                            value={data.distanceUnit}
                            onValueChange={(value) => onUpdate({ distanceUnit: value })}
                        >
                            <SelectTrigger className="border-green-200 focus:border-green-400 focus:ring-green-400">
                                <SelectValue placeholder="Select unit" />
                            </SelectTrigger>
                            <SelectContent>
                                {DISTANCE_UNITS.map((unit) => (
                                    <SelectItem key={unit.value} value={unit.value}>
                                        {unit.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="transportMethod" className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-green-600" />
                        Transport Method
                    </Label>
                    <Select
                        value={data.transportMethod}
                        onValueChange={(value) => onUpdate({ transportMethod: value })}
                    >
                        <SelectTrigger className="border-green-200 focus:border-green-400 focus:ring-green-400">
                            <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                            {TRANSPORT_METHODS.map((method) => (
                                <SelectItem key={method.value} value={method.value}>
                                    {method.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
} 