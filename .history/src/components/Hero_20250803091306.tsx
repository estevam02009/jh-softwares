import React from "react";
import { ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
    return (
        <div className="bg-gray-100">
            <div className="min-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-gray-800">Central de Conceito</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}