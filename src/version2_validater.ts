
export function cartValidation(input: any): number {
    // For AddToCart and RemoveFromCart
    return isCartValid(input)
} 

/**
 * The following funcs will recive aJSON object a validate against a schema.
 * 
 * @param {object} input - The JSON object to be validated.
 * @returns {number} - The function returns:
 *                     - `0` if the input perfectly matches the AddToCart schema.
 *                     - `-1` if the input fails to match the schema due to missing or incorrect type properties.
 *                     - A positive integer representing the count of additional, unnecessary properties if the input matches the schema but includes extra properties.
 * NOTE: The func isValidAddToCart will have comments in it; The other funcs I will not include any comments. 
 */ 
function isCartValid(input: any): number {
    const requiredProps: { [key: string]: 'string' | 'number' } = {
        guestHashedEmail: 'string',
        browserUserAgent: 'string',
        locale: 'string',
        language: 'string',
        productId: 'string',
        productName: 'string',
        productSKU: 'string',
        productPrice: 'string',
        skuQuantity: 'number',
        currency: 'string'
    };

    let extraPropsCount = 0;
    let missingOrIncorrectTypeCount = 0;

    // Check for missing or incorrect type properties
    for (const key in requiredProps) {
        if (!input.hasOwnProperty(key) || typeof input[key] !== requiredProps[key]) {
            missingOrIncorrectTypeCount++;
        }
    }
    // Check for extra properties
    for (const key in input) {
        if (!requiredProps.hasOwnProperty(key)) {
            extraPropsCount++;
        }
    }

    if (missingOrIncorrectTypeCount > 0) {
        return -1; // Missing or incorrect type for at least one required property
    } else {
        return extraPropsCount; // Number of extra properties
    }
}

export function isValidCartPageView(input: any): number {
    const requiredProps: { [key: string]: 'string' | 'number' } = {
        productId: 'string',
        productName: 'string',
        cartId: 'string',
        cartType: 'string',
        guestHashedEmail: 'string',
        browserUserAgent: 'string',
        locale: 'string',
        language: 'string',
        pageName: 'string',
        productSKU: 'string',
        productPrice: 'string',
        skuQuantity: 'number',
        currency: 'string',
        cartTotalQuantity:'number'
    };
    let extraPropsCount = 0;
    let missingOrIncorrectTypeCount = 0;
    for (const key in requiredProps) {
        if (!input.hasOwnProperty(key) || typeof input[key] !== requiredProps[key]) {
            missingOrIncorrectTypeCount++;
        }
    }
    for (const key in input) {
        if (!requiredProps.hasOwnProperty(key)) {
            extraPropsCount++;
        }
    }

    if (missingOrIncorrectTypeCount > 0) {
        return -1;
    } else {
        return extraPropsCount;
    }
}

export function isCartViewValidation(input: any): number {
    const requiredProps: { [key: string]: 'string' | 'number' } = {

    
    productId: 'string',
    productName: 'string',
    productSKU: 'string',
    productPrice: 'string',
    skuQuantity: 'number',
    currency: 'string',
    locale: 'string',
    language: 'string',
    cartId: 'string',
    cartType: 'string',
    guestHashedEmail: 'string',
    browserUserAgent: 'string'
  
    }

    let extraPropsCount = 0;
    let missingOrIncorrectTypeCount = 0;
    for (const key in requiredProps) {
        if (!input.hasOwnProperty(key) || typeof input[key] !== requiredProps[key]) {
            missingOrIncorrectTypeCount++;
        }
    }
    for (const key in input) {
        if (!requiredProps.hasOwnProperty(key)) {
            extraPropsCount++;
        }
    }

    if (missingOrIncorrectTypeCount > 0) {
        return -1;
    } else {
        return extraPropsCount;
    }
}



export function isCartViewWithProductOutOfStockValidation(input: any): number {



    const requiredProps: { [key: string]: 'string' | 'number' } = {
    
        productId: 'string',
        productName: 'string',
        productSKU: 'string',
        productPrice: 'string',
        skuQuantity: 'number',
        currency: 'string',
        locale: 'string',
        language: 'string',
        guestHashedEmail: 'string',
        browserUserAgent: 'string',
        productCartOutOfStockStatus: 'string'  
    }

    let extraPropsCount = 0;
    let missingOrIncorrectTypeCount = 0;
    for (const key in requiredProps) {
        if (!input.hasOwnProperty(key) || typeof input[key] !== requiredProps[key]) {
            missingOrIncorrectTypeCount++;
        }
    }
    for (const key in input) {
        if (!requiredProps.hasOwnProperty(key)) {
            extraPropsCount++;
        }
    }

    if (missingOrIncorrectTypeCount > 0) {
        return -1;
    } else {
        return extraPropsCount;
    }
}


export function isCategoryPageView(input: any): number {
    const requiredProps: { [key: string]: 'string' | 'number' } = {
    
        locale: 'string',
        language: 'string',
        pageName: 'string',
        pageUrl: 'string',
        categoryName: 'string',
        guestHashedEmail: 'string',
        browserUserAgent: 'string'
    }

    let extraPropsCount = 0;
    let missingOrIncorrectTypeCount = 0;
    for (const key in requiredProps) {
        if (!input.hasOwnProperty(key) || typeof input[key] !== requiredProps[key]) {
            missingOrIncorrectTypeCount++;
        }
    }
    for (const key in input) {
        if (!requiredProps.hasOwnProperty(key)) {
            extraPropsCount++;
        }
    }

    if (missingOrIncorrectTypeCount > 0) {
        return -1;
    } else {
        return extraPropsCount;
    }
}

