import type { Product } from '../types/Product';

export const products: Product[] = [
    {
        id: '1',
        name: 'Classic Cotton Tee',
        price: 25.99,
        description: 'Premium 100% cotton t-shirt with a comfortable fit. Perfect for everyday wear.',
        image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Basic',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Black', 'White', 'Navy', 'Gray'],
        featured: true
    },
    {
        id: '2',
        name: 'Vintage Graphic Tee',
        price: 32.99,
        description: 'Retro-inspired design with vintage graphics. Soft fabric with a relaxed fit.',
        image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Graphic',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'White', 'Charcoal'],
        featured: true
    },
    {
        id: '3',
        name: 'Performance Sport Tee',
        price: 29.99,
        description: 'Moisture-wicking athletic t-shirt perfect for workouts and active lifestyle.',
        image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Athletic',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Black', 'Navy', 'Royal Blue', 'Red'],
        featured: false
    },
    {
        id: '4',
        name: 'Premium V-Neck',
        price: 27.99,
        description: 'Elegant v-neck design with superior comfort and style. Made from premium cotton blend.',
        image: 'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Premium',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['White', 'Black', 'Gray', 'Navy'],
        featured: true
    },
    {
        id: '5',
        name: 'Streetwear Essential',
        price: 34.99,
        description: 'Urban-inspired design with modern cuts. Perfect for street fashion enthusiasts.',
        image: 'https://images.pexels.com/photos/8532618/pexels-photo-8532618.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Streetwear',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'White', 'Olive', 'Burgundy'],
        featured: false
    },
    {
        id: '6',
        name: 'Eco-Friendly Organic Tee',
        price: 31.99,
        description: 'Sustainably made from 100% organic cotton. Soft, comfortable, and environmentally conscious.',
        image: 'https://images.pexels.com/photos/8532615/pexels-photo-8532615.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Eco',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Natural', 'Forest Green', 'Earth Brown'],
        featured: true
    }
];