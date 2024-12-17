"use client";

import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function InfoCard({ icon: Icon, title, description }: InfoCardProps) {
  return (
    <Card className="p-4 bg-green-50">
      <div className="flex items-start space-x-4">
        <Icon className="w-6 h-6 mt-1 text-green-600" />
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
}