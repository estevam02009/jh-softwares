export const formatWhatsAppOrder = (items: any[], customerInfo?: any) => {
    const businessPhone = '+5584996643325';

    let message = '🛍️ *Novo pedido*\n\n'

    items.forEach((item, index) => {
        message += `${index + 1}. *${item.product.name}*\n`;
        message += `   Size: ${item.size}\n`;
        message += `   Color: ${item.color}\n`;
        message += `   Quantity: ${item.quantity}\n`;
        message += `   Price: $${item.product.price} each\n\n`;
    });
}