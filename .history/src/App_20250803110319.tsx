import React, { useState } from "react"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { ProductGrid } from "./components/ProductGrid"
import { products } from './data/product'
import type { Product, CartItem } from "./types/Product"
import { ProductModal } from "./components/ProductModal"

function App() {

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

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

  const handleAddToCartFromModal = (item: CartItem) => {
    const existingItemIndex = cartItems.findIndex(
      cartItem => cartItem.product.id === item.product.id &&
        cartItem.size === item.size &&
        cartItem.color === item.color
    );

    if (existingItemIndex >= 0) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += item.quantity;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = quantity;
    setCartItems(updatedItems);
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

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

      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onAddToCart={handleAddToCartFromModal}
      />
    </div>
  )
}

export default App
