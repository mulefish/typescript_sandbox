

export function isValidAddToCart(input: any): boolean {
    return typeof input.guestHashedEmail === 'string' &&
           typeof input.browserUserAgent === 'string' &&
           typeof input.locale === 'string' &&
           typeof input.language === 'string' &&
           typeof input.productId === 'string' &&
           typeof input.productName === 'string' &&
           typeof input.productSKU === 'string' &&
           typeof input.productPrice === 'string' &&
           typeof input.skuQuantity === 'number' &&
           typeof input.currency === 'string';
}