import Image from "next/image";
import { motion } from "framer-motion";

export function Header() {
    return (
        <div className="text-center space-y-4">
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Image
                    src="/footprint-calculator-logo.png"
                    alt="Carbon Footprint Calculator Logo"
                    width={120}
                    height={120}
                    priority
                    className="mx-auto drop-shadow-xl"
                    quality={90}
                />
            </motion.div>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="space-y-2"
            >
                <h1 className="text-4xl md:text-5xl font-cal bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 animated-gradient">
                    Carbon Footprint Calculator
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Calculate your annual CO2 emissions and understand your environmental impact
                </p>
            </motion.div>
        </div>
    );
} 