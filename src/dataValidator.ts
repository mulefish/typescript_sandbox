
import { PASS, FAIL, Receipt, Rollup } from './types';

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
let rollup: { [key: string]: Rollup } = {};
function footPrints(bool: boolean, whence: string) {
    if ( rollup.hasOwnProperty(whence)) {
        if ( bool === false ) {
            rollup[whence].verdict = false
        }
        rollup[whence].seen++
    } else {
        rollup[whence] = {
            verdict: bool,
            seen: 1
        };
    }
}

function validatePrice(price: Price): boolean {
    const isOk = typeof price.saleWithoutTaxShipping === 'string' &&
        typeof price.regularWithoutTaxShipping === 'string';
    footPrints(isOk, "validatePrice")
    return isOk
}

function validateSku(sku: Sku): boolean {
    const isOk = validatePrice(sku.price) &&
        typeof sku.quantity === 'number' &&
        typeof sku.size === 'string' &&
        typeof sku.sku === 'string';
    footPrints(isOk, "validateSku")
    return isOk
}

function validateProduct(product: Product): boolean {
    const isOk = typeof product.categoryUnifiedId === 'string' &&
        typeof product.unifiedId === 'string' &&
        typeof product.productId === 'string' &&
        Array.isArray(product.skuList) && product.skuList.every(validateSku);

    footPrints(isOk, "validateProduct")
    return isOk
}

function validateCollection(collection: Collection): boolean {
    const isOk = typeof collection.id === 'string' &&
        typeof collection.type === 'string' &&
        typeof collection.name.unified === 'string' &&
        typeof collection.name.localized === 'string' &&
        Array.isArray(collection.productList) && collection.productList.every(validateProduct);

    footPrints(isOk, "validateCollection")

    return isOk
}

function validateComponent(component: Component): boolean {
    const isOk = typeof component.id === 'string' &&
        typeof component.type === 'string' &&
        typeof component.text === 'string';
    footPrints(isOk, "validateComponent")

    return isOk
}


function resetRollup() { 
    rollup = {};
}

export function validateProductInteraction(pi: ProductInteraction): Receipt {
    resetRollup()
    const isOk = validateComponent(pi.component) &&
        Array.isArray(pi.collectionList) && pi.collectionList.every(validateCollection);

        let finding: Receipt = {
            verdict: isOk,
            receipt: rollup
        };

    return finding;
}


