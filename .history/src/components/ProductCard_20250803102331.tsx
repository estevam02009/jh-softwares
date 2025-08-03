import React from "react"
import { Plus, Heart } from "lucide-react"
import type { Product } from "../types/Product"

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
                    className="absolute top-3 right-3 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100"
                >
                    <Heart className="w-4 h-4 text-gray-600" />
                </button>

                {/* Featured badge */}
                {product.featured && (
                    <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Destaques
                    </div>
                )}
            </div>

            <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {product.name}
                    </h3>
                    <span className="text-xl font-bold text-gray-600">
                        {product.price.toFixed(2)}
                    </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                <div className="flex space-x-1">
                    {product.colors.slice(0, 4).map((color, index) => (
                        <div
                            key={index}
                            className={`w-4 h-4 rounded-full border-2 border-gray-200 ${
                                color === 'Preta' ? 'bg-black' :
                                color === 'Branco' ? 'bg-white' :
                                color === 'Azul' ? 'bg-blue-900' :
                                color === 'Cinza' ? 'bg-gray-900' :
                                color === 'Azul Royal' ? 'bg-blue-600' :
                                color === 'Vermelho' ? 'bg-red-500' :
                                color === 'Verde Oliva' ? 'bg-green-700' :
                                color === 'Borgonha' ? 'bg-red-800' :
                                color === 'Natural' ? 'bg-yellow-100' :
                                color === 'Verde Floresta' ? 'bg-green-800' :
                                color === 'Marrom Terra' ? 'bg-yellow-800' :
                                'bg-gray-300'
                            }`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    )
}