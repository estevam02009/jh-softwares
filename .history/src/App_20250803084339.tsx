import React, { useState } from "react"
import { Header } from "./components/Header"

function App() {

  // const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={0} 
        onCartClick={() => setIsCartOpen(true)} 
      />
    </div>
  )
}

export default App
