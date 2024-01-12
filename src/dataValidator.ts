interface Component {
    id: string;
    type: string;
    text: string;
}

interface Price {
    saleWithoutTaxShipping: string;
    regularWithoutTaxShipping: string;
    taxOnly: string;
    isSale: boolean;
    displaySale: string;
    displayRegular: string;
}

interface Sku {
    price: Price;
    quantity: number;
    size: string;
    sku: string;
}

interface Product {
    categoryUnifiedId: string;
    unifiedId: string;
    productId: string;
    skuList: Sku[];
}

interface Collection {
    id: string;
    type: string;
    name: {
        unified: string;
        localized: string;
    };
    productList: Product[];
}

interface Data {
    component: Component;
    collectionList: Collection[];
}

export function isValidComponent(component: any): component is Component {
    return component && typeof component.id === 'string' && typeof component.type === 'string' && typeof component.text === 'string';
}

export function isValidPrice(price: any): price is Price {
    // Add specific validation for each field in the Price interface
    return price && typeof price.isSale === 'boolean';
}

export function isValidSku(sku: any): sku is Sku {
    return sku && isValidPrice(sku.price) && typeof sku.quantity === 'number';
}

export function isValidProduct(product: any): product is Product {
    return product && Array.isArray(product.skuList) && product.skuList.every(isValidSku);
}

export function isValidCollection(collection: any): collection is Collection {
    return collection && Array.isArray(collection.productList) && collection.productList.every(isValidProduct);
}


function validateComponent(component: any): { isValid: boolean; errors: string[] } {
    let errors: string[] = [];

    if (!component) errors.push("Component is missing");
    if (typeof component.id !== 'string') errors.push("Invalid or missing component.id");
    if (typeof component.type !== 'string') errors.push("Invalid or missing component.type");
    if (typeof component.text !== 'string') errors.push("Invalid or missing component.text");

    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

//export function isValidData(data: any): data is Data {
//    return data && isValidComponent(data.component) && Array.isArray(data.collectionList) && data.collectionList.every(isValidCollection);
//}
export function isValidData(data: any): { isValid: boolean; errors: string[] } {
    let errors: string[] = [];

    const componentValidation = validateComponent(data.component);
    if (!componentValidation.isValid) {
        errors = errors.concat(componentValidation.errors.map(e => `Component: ${e}`));
    }

    // ... (Other validations for Collection, Price, etc.)

    return {
        isValid: errors.length === 0,
        errors: errors
    };
}
