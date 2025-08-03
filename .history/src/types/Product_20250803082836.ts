export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    sizes: string[];
    colors: string[];
    featured?: boolean;
}

export interface CartItem {
    product: Product;
    size: string;
    color: string;
    quantity: number;
}