import { Card } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Carbon Footprint Calculator</h1>
          <p className="text-muted-foreground">Loading...</p>
        </div>
        <Card className="p-6">
          <div className="min-h-[400px] flex items-center justify-center">
            <div className="animate-pulse text-muted-foreground">
              Loading calculator...
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}