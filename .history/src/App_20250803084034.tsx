import React from "react"
import { Header } from "./components/Header"

function App() {

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={0} 
        onCartClick={() => {}} 
      />
    </div>
  )
}

export default App
