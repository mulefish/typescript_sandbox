export const PASS = "PASS"
export const FAIL = "FAIL"
export type Receipt = {
    millisec?:number,
    verdict: boolean;
    receipt: { [key: string]: Rollup };
};


export type Rollup = {
    verdict: boolean, 
    seen: number
};

export interface Price {
    saleWithoutTaxShipping: string;
    regularWithoutTaxShipping: string;
    taxOnly: string;
    isSale: boolean;
    displaySale: string;
    displayRegular: string;
};

export interface Sku {
    price: Price;
    quantity: number;
    size: string;
    sku: string;
};

export interface Product {
    categoryUnifiedId: string;
    unifiedId: string;
    productId: string;
    skuList: Sku[];
};

export interface Name {
    unified: string;
    localized: string;
};

export interface Collection {
    id: string;
    type: string;
    name: Name;
    productList: Product[];
}

export interface Component {
    id?: string;
    type?: string;
    text?: string;
}

export interface CollectionList {
    collectionList: Collection[];
}

export interface ProductInteraction {
    component: Component;
    collectionList: Collection[];
}

export interface CollectionData {
    collectionList: Collection[];
}
