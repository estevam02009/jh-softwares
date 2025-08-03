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
        <div>
            
        </div>
    )
}