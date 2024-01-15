export type Product = {
    categoryUnifiedId?: string;
    unifiedId?: string;
    productId?: string;
    skuList?: Sku[];
    id?:string;
    title?:string;
    vendor?:string;
    untranslatedTitle?:string;
    url?:string;
    type?:string;
};


export type Sku = {
    quantity: number;
    size: string;
    sku: string;
    price: Price;
};

export type Price = {
    saleWithoutTaxShipping?: string;
    taxOnly?: string;
    displaySale?: string;
    displayRegular?: string;
    isSale?: boolean;
    amount?: number;
    currencyCode?: string;
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
export type Image = {
    src:string
}
export type ProductVariant = {
    id:string,
    image:Image,
    price:Price,
    product:Product,
    sku:string, 
    title:string, 
    untranslatedTitle:string
}