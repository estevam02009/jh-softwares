import React from "react";
import { ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {

    const scrollToProducts = () => {
        document.getElementById("products")?.scrollIntoView({
            behavior: "smooth"
        })
    }

    return (
        <section id="home" className="relative bg-gradient-to-br from-purple-600 to-blue-700 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">Bem-vindo à Central Conceito</h1>
                        <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                            Descubra nossa coleção de camisetas confortáveis e de alta qualidade. De peças básicas clássicas a designs modernos,
                            encontre o caimento perfeito para você e expresse seu estilo único.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}