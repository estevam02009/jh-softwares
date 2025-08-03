import React from "react";
import { ShoppingCart, MessageCircle, Search } from "lucide-react";
import { getWhatsAppSupportUrl } from "../utils/whatsapp";

interface HeaderProps {
    cartItemsCount: number;
    onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick }) => {
    return (
        <header className="bg-white shadow-sm sticky top0 z-0"></header>
    )
}