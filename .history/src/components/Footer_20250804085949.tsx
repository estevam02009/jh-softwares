import React from 'react';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { getWhatsAppSupportUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">TeeShop</h3>
                        <p className="text-gray-300 mb-6">
                            Premium quality t-shirts for every style and occasion.
                            We're committed to providing comfortable, durable, and stylish apparel.
                        </p>
                        <a
                            href={getWhatsAppSupportUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors inline-flex items-center"
                        >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Chat with Us
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Categories</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-white transition-colors">Basic Tees</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Graphic Tees</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Athletic Wear</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Premium Collection</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-center">
                                <Phone className="w-4 h-4 mr-2" />
                                <span>+55 (84) 996643325</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-4 h-4 mr-2" />
                                <span>info@centralconceito.com</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span>123 Fashion St, Style City</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Central Conceito. All rights reserved. Made with ❤️ for SmartCode.</p>
                </div>
            </div>
        </footer>
    );
};