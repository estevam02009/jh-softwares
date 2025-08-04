import type { Product } from '../types/Product';

export const products: Product[] = [
    {
        id: '1',
        name: 'Camiseta de algodão clássica',
        price: 25.99,
        description: 'Camiseta de algodão clássica com fit confortável. Perfeita para vestir diariamente.',
        image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Basica',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Preta', 'Branca', 'Cinza', 'Azul'],
        featured: true
    },
    {
        id: '2',
        name: 'Camiseta gráfica vintage',
        price: 32.99,
        description: 'Design de inspiração retrô com estampas vintage. Tecido macio e caimento soltinho.',
        image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Gráfica',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Preta', 'Branca', 'Cinza'],
        featured: true
    },
    {
        id: '3',
        name: 'Camiseta de performance',
        price: 29.99,
        description: 'Camiseta de performance com tecido macio e caimento soltinho. Perfeita para treino e estilo ativo.',
        image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Atleta',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Preta', 'Branca', 'Cinza'],   
        featured: false
    },
    {
        id: '4',
        name: 'Camiseta premium V-neck',
        price: 27.99,
        description: 'Elegante design V-neck com conforto e estilo superior. Feito de tecido premium.',
        image: 'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Premium',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Preta', 'Branca', 'Cinza', 'Azul'],   
        featured: true
    },
    {
        id: '5',
        name: 'Camiseta streetwear',
        price: 34.99,
        description: 'Design urbano com cortes modernos. Perfeita para amantes de moda urbana.',
        image: 'https://images.pexels.com/photos/8532618/pexels-photo-8532618.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Streetwear',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Preta', 'Branca', 'Cinza', 'Azul'],
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