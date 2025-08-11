export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    licenseTypes: string[];
    platforms: string[];
    featured?: boolean;
    developer?: string;
    releaseDate?: string;
}

export interface CartItem {
    product: Product;
    licenseType: string;
    platform: string;
    quantity: number;
}