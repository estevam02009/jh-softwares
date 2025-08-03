import React, { useState } from "react"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { ProductGrid } from "./components/ProductGrid"
import { products } from './types/Product'

function App() {

  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const handleAddToCart = (product: Product) => {
    // Para adição rápida, use seleções padrão
    const newItem: CartItem = {
      product,
      size: product.size[0],
      color: product.color[0],
      quantity: 1
    }

    const existingItemIndex = cartItems.findIndex(
      item => item.product.id === product.id &&
              item.size === item.size &&
              item.color === item.color
    )

    if (existingItemIndex >= 0) {
      const updatedItems = [...cartItems]
      updatedItems[existingItemIndex].quantity += 1
      setCartItems(updatedItems)
    } else {
      setCartItems([...cartItems, newItem])
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={0} 
        onCartClick={() => setIsCartOpen(true)} 
      />

      <Hero />

      <ProductGrid
        products={products}
        onAddCart={handleAddToCart}
        onQuickView={handleQuickView}
      />
    </div>
  )
}

export default App
