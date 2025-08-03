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
            <div className="relative aspect-square overflow-hidden bg-gray-50"></div>
        </div>
    )
}