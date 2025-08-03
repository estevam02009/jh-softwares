import React from "react"
import { Plus, Heart } from "lucide-react"
import { Product } from "../types/Product"

interface ProductCardProps {
    product: Product
    onAddCart: (product: Product) => void
    onQuickView: (product: Product) => void
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddCart, onQuickView }) => {
    return (
        <div className="group bg-white rounde-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="relative aspect-square overflow-hidden bg-gray-50">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Ações de sobreposição */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-3">
                        <button
                            onClick={() => onAddCart(product)}
                            className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center"
                        >
                            <Plus className="w-4 h-4 mr-1" />
                            Adicionar ao carrinho
                        </button>
                    </div>
                </div> 

                {/* Botão de lista de desejos */}
                <button
                    className="absolute top-3 right-3 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100"
                >
                    <Heart className="w-4 h-4 text-gray-600" />
                </button>
            </div>
        </div>
    )
}