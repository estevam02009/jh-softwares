import React, { useState } from "react"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { ProductGrid } from "./components/ProductGrid"

function App() {

  // const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

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
