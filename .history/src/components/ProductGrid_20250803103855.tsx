import React, { useState } from "react";
import { ProductCard } from "./ProductCard";
import type { Product } from "../types/Product";

interface ProductGridProps {
    products: Product[]
    onAddCart: (product: Product) => void
    onQuickView: (product: Product) => void
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddCart, onQuickView }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("All")

    const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))]
}