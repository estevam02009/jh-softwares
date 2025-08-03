export const formatWhatsAppOrder = (items: any[], customerInfo?: any) => {
    const businessPhone = '+5584996643325'; // Replace with your business WhatsApp number

    let message = '🛍️ *Novo pedido*\n\n';

    items.forEach((item, index) => {
        message += `${index + 1}. *${item.product.name}*\n`;
        message += `   Size: ${item.size}\n`;
        message += `   Color: ${item.color}\n`;
        message += `   Quantity: ${item.quantity}\n`;
        message += `   Price: R$${item.product.price} each\n\n`;
    });

    const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    message += `💰 *Total: R$${total.toFixed(2)}*\n\n`;
    message += '📞 Please confirm this order and we\'ll get back to you with payment and delivery details!';

    return `https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`;
};

export const getWhatsAppSupportUrl = () => {
    const businessPhone = '+5584996643325'; // Replace with your business WhatsApp number
    const message = '👋 Olá! Tenho uma pergunta sobre este produto. Você poderia me ajudar?';

    return `https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`;
};