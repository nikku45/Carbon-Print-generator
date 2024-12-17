import Image from "next/image";

export function Header() {
    return (
        <div className="text-center space-y-2">
            <Image
                src="/footprint-calculator-logo.png"
                alt="Carbon Footprint Calculator Logo"
                width={100}
                height={100}
                priority
                className="mx-auto"
                quality={85}
            />
            <h1 className="text-4xl font-bold text-green-800">Carbon Footprint Calculator</h1>
            <p className="text-green-600">
                Calculate your annual CO2 emissions and understand your environmental impact
            </p>
        </div>
    );
} 