"use client";

import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Carbon Footprint Calculator</h1>
          <p className="text-destructive">Something went wrong!</p>
        </div>
        <Card className="p-6">
          <div className="min-h-[400px] flex flex-col items-center justify-center space-y-4">
            <p className="text-muted-foreground">
              An error occurred while loading the calculator.
            </p>
            <Button onClick={() => reset()}>Try again</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}