interface TotalAmount {
    amount: number;
    currencyCode: string;
}

interface Product {
    id: string;
    title: string;
    vendor: string;
}

interface Merchandise {
    id: string;
    image: object;
    price: TotalAmount;
    product: Product;
    sku: string;
}

interface CartLine {
    cost: {
        totalAmount: TotalAmount;
    };
    merchandise: Merchandise;
    quantity: number;
}

interface ShopifyData {
    cartLine: CartLine;
}

interface ShopifyEvent {
    id: string;
    name: string;
    eventSubType: string;
    data: ShopifyData;
    clientId: string;
    timestamp: string;
    context: object;
}

interface LamProductInteraction {
    id: string;
    name: string;
    productId: string;
    productTitle: string;
    productVendor: string;
    quantity: number;
    priceAmount: number;
}

function fromShopifyProductAdded_toLamProductInteraction(shopify: ShopifyEvent): LamProductInteraction {
    return {
        id: shopify.id || "",
        name: shopify.name || "",
        productId: shopify.data.cartLine.merchandise.product.id || "",
        productTitle: shopify.data.cartLine.merchandise.product.title || "",
        productVendor: shopify.data.cartLine.merchandise.product.vendor || "",
        quantity: shopify.data.cartLine.quantity || 0,
        priceAmount: shopify.data.cartLine.cost.totalAmount.amount || 0
    };
}

const product_add_to_cart: ShopifyEvent = {
    "id": "sh-88e123a8-AF72-438E-BBA1-81A40E3B8D23",
    "name": "product_added_to_cart",
    "eventSubType": "SHOPIFY_EVENT",
    "data": {
        "cartLine": {
            "cost": {
                "totalAmount": {
                    "amount": 0.29,
                    "currencyCode": "USD"
                }
            },
            "merchandise": {
                "id": "47331074113812",
                "image": {},
                "price": {
                    "amount": 0.29,
                    "currencyCode": "USD"
                },
                "product": {
                    "id": "8896125829396",
                    "title": "All Tied Up Tank Top - Resale - 4 / Good as new",
                    "vendor": "Lululemon"
                },
                "sku": "LW1BX7S_27574_4_Good as new"
            },
            "quantity": 1
        }
    },
    "clientId": "df1007bb-d108-4f4b-b09e-c9ac586d263d",
    "timestamp": "2023-12-20T20:06:24.890Z",
    "context": {
    }
};

const obj: LamProductInteraction = fromShopifyProductAdded_toLamProductInteraction(product_add_to_cart);
console.log(obj);

