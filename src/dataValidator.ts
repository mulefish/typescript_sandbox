
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

interface Component {
    id?: string;
    type?: string;
    text?: string;
}

interface ProductInteraction {
    component: Component;
    collectionList: Collection[];
}

function validatePrice(price: Price): boolean {
    return typeof price.saleWithoutTaxShipping === 'string' &&
           typeof price.regularWithoutTaxShipping === 'string';
}

function validateSku(sku: Sku): boolean {
    return validatePrice(sku.price) &&
           typeof sku.quantity === 'number' &&
           typeof sku.size === 'string' &&
           typeof sku.sku === 'string';
}

function validateProduct(product: Product): boolean {
    return typeof product.categoryUnifiedId === 'string' &&
           typeof product.unifiedId === 'string' &&
           typeof product.productId === 'string' &&
           Array.isArray(product.skuList) && product.skuList.every(validateSku);
}

function validateCollection(collection: Collection): boolean {
    return typeof collection.id === 'string' &&
           typeof collection.type === 'string' &&
           typeof collection.name.unified === 'string' &&
           typeof collection.name.localized === 'string' &&
           Array.isArray(collection.productList) && collection.productList.every(validateProduct);
}

function validateComponent(component: Component): boolean {
    return typeof component.id === 'string' &&
           typeof component.type === 'string' &&
           typeof component.text === 'string';
}

export function validateProductInteraction(pi: ProductInteraction): boolean {
    return validateComponent(pi.component) &&
           Array.isArray(pi.collectionList) && pi.collectionList.every(validateCollection);
}


