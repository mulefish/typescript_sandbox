export type Product = {
    categoryUnifiedId: string;
    unifiedId: string;
    productId: string;
    skuList: Sku[];
};


export type Sku = {
    quantity: number;
    size: string;
    sku: string;
    price: Price;
};

export type Price = {
    saleWithoutTaxShipping: string;
    taxOnly: string;
    displaySale: string;
    displayRegular: string;
    isSale: boolean;
};

export type Name = {
    unified: string;
    localized: string;
};


export type Component = {
    id: string,
    type: string,
    text: string
};