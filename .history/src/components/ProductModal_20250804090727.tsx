import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingCart, MessageCircle } from 'lucide-react';
import type { Product, CartItem } from '../types/Product';

interface ProductModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
    onAddToCart: (item: Omit<CartItem, 'product'> & { product: Product }) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose, onAddToCart }) => {
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [quantity, setQuantity] = useState(1);

    if (!isOpen || !product) return null;

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            alert('Selecione o tamanho e a cor');
            return;
        }

        onAddToCart({
            product,
            size: selectedSize,
            color: selectedColor,
            quantity
        });

        onClose();
    };

    const handleWhatsAppOrder = () => {
        if (!selectedSize || !selectedColor) {
            alert('Selecione o tamanho e a cor');
            return;
        }

        const businessPhone = '+5584996643325';
        const message = `🛍️ Olá! Gostaria de encomendar:\n\n*${product.name}*\nSize: ${selectedSize}\nColor: ${selectedColor}\nQuantity: ${quantity}\nPrice: $${product.price}\n\nCould you please help me with the order?`;

        window.open(`https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                    {/* Product Image */}
                    <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-3xl font-bold text-blue-600">R${product.price}</span>
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                    {product.category}
                                </span>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{product.description}</p>
                        </div>

                        {/* Size Selection */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-3">Tamanho</label>
                            <div className="flex flex-wrap gap-2">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 border rounded-lg font-medium transition-all ${selectedSize === size
                                                ? 'border-blue-600 bg-blue-600 text-white'
                                                : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Color Selection */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-3">Cor</label>
                            <div className="flex flex-wrap gap-3">
                                {product.colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`flex items-center space-x-2 px-4 py-2 border rounded-lg transition-all ${selectedColor === color
                                                ? 'border-blue-600 bg-blue-50'
                                                : 'border-gray-300 hover:border-gray-400'
                                            }`}
                                    >
                                        <div
                                            className={`w-4 h-4 rounded-full border ${color === 'Black' ? 'bg-black' :
                                                    color === 'White' ? 'bg-white border-gray-400' :
                                                        color === 'Azul' ? 'bg-blue-900' :
                                                            color === 'Cinza' ? 'bg-gray-500' :
                                                                color === 'Carvão' ? 'bg-gray-700' :
                                                                    color === 'Azul Royal' ? 'bg-blue-600' :
                                                                        color === 'Vermelho' ? 'bg-red-500' :
                                                                            color === 'Oliva' ? 'bg-green-700' :
                                                                                color === 'Borgonha' ? 'bg-red-800' :
                                                                                    color === 'Natural' ? 'bg-yellow-100 border-gray-400' :
                                                                                        color === 'Verde Floresta' ? 'bg-green-800' :
                                                                                            color === 'Marrom Terra' ? 'bg-yellow-800' :
                                                                                                color === 'Preta' ? 'bg-black' :
                                                                                                'bg-gray-300'
                                                }`}
                                        />
                                        <span className="text-sm font-medium">{color}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-3">Quantidade</label>
                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                            <button
                                onClick={handleAddToCart}
                                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                            >
                                <ShoppingCart className="w-5 h-5 mr-2" />
                                Adicionar ao Carrinho
                            </button>

                            <button
                                onClick={handleWhatsAppOrder}
                                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Comprar pelo WhatsApp
                            </button>
                        </div>

                        <div className="border-t pt-6">
                            <h4 className="font-semibold text-gray-900 mb-2">Características do Produto</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Material de alta qualidade</li>
                                <li>• Confortável e durável</li>
                                <li>• Lavavel a máquina</li>
                                <li>• Disponível em vários tamanhos e cores</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};