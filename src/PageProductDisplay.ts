interface Price {
  amount: number;
  currencyCode: string;
}

interface ProductVariant {
  id: string;
  image: {
    src: string;
  };
  price: Price;
  product: {
    id: string;
    title: string;
    untranslatedTitle: string;
    url: string;
    vendor: string;
    type: string;
  };
  sku: string;
  title: string;
  untranslatedTitle: string;
}

interface ShopifyProductViewed {
  id: string;
  name: string;
  eventSubType: string;
  data: {
    productVariant: ProductVariant;
  };
  clientId: string;
  timestamp: string;
  context: {
    document: {
      location: {
        href: string;
        hash: string;
        host: string;
        hostname: string;
        origin: string;
        pathname: string;
        port: string;
        protocol: string;
        search: string;
      };
      referrer: string;
      characterSet: string;
      title: string;
    };
    navigator: {
      language: string;
      cookieEnabled: boolean;
      languages: string[];
      userAgent: string;
    };
    window: {
      innerHeight: number;
      innerWidth: number;
      outerHeight: number;
      outerWidth: number;
      pageXOffset: number;
      pageYOffset: number;
      location: {
        href: string;
        hash: string;
        host: string;
        hostname: string;
        origin: string;
        pathname: string;
        port: string;
        protocol: string;
        search: string;
      };
      origin: string;
      screen: {
        height: number;
        width: number;
      };
      screenX: number;
      screenY: number;
      scrollX: number;
      scrollY: number;
    };
  };
}

interface ProductDisplay {
  id: string;
  name: string;
  eventSubType: string;
  productId: string;
  price: number;
  sku: string;
}

function fromShopifyProductViewed_toPageProductsDisplayed(thing: ShopifyProductViewed): ProductDisplay { 
  const obj: ProductDisplay = { 
    id: thing.id || "", 
    name: thing.name || "", 
    eventSubType: thing.eventSubType || "", 
    productId: thing.data.productVariant.id || "",
    price: thing.data.productVariant.price.amount || 0,
    sku: thing.data.productVariant.sku || ""
  }
  return obj;    
} 

const shopify_product_viewed: ShopifyProductViewed = {
    "id": "sh-88cb2b9e-231B-4724-73B7-837994107154",
    "name": "product_viewed",
    "eventSubType": "SHOPIFY_EVENT",
    "data": {
        "productVariant": {
            "id": "47331074113812",
            "image": {
                "src": "//lululemon-trove.myshopify.com/cdn/shop/products/udhygjqgh994ikplkrdw.jpg?v=1702492182"
            },
            "price": {
                "amount": 29,
                "currencyCode": "USD"
            },
            "product": {
                "id": "8896125829396",
                "title": "All Tied Up Tank Top - Resale",
                "untranslatedTitle": "All Tied Up Tank Top - Resale",
                "url": "/products/all-tied-up-tank-top-resale_lw1bx7s_27574",
                "vendor": "Lululemon",
                "type": "LW1BX7S"
            },
            "sku": "LW1BX7S_27574_4_Good as new",
            "title": "4 / Good as new",
            "untranslatedTitle": "4 / Good as new"
        }
    },
    "clientId": "df1007bb-d108-4f4b-b09e-c9ac586d263d",
    "timestamp": "2023-12-20T19:54:25.023Z",
    "context": {
        "document": {
            "location": {
                "href": "https://lululemon-trove.myshopify.com/products/all-tied-up-tank-top-resale_lw1bx7s_27574?variant=47331074113812 ",
                "hash": "",
                "host": "http://lululemon-trove.myshopify.com ",
                "hostname": "http://lululemon-trove.myshopify.com ",
                "origin": "https://lululemon-trove.myshopify.com ",
                "pathname": "/products/all-tied-up-tank-top-resale_lw1bx7s_27574",
                "port": "",
                "protocol": "https:",
                "search": "?variant=47331074113812"
            },
            "referrer": "https://lululemon-trove.myshopify.com/ ",
            "characterSet": "UTF-8",
            "title": "All Tied Up Tank Top - Resale – lululemon Like New"
        },
        "navigator": {
            "language": "en-US",
            "cookieEnabled": true,
            "languages": [
                "en-US",
                "en"
            ],
            "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        },
        "window": {
            "innerHeight": 739,
            "innerWidth": 882,
            "outerHeight": 900,
            "outerWidth": 1440,
            "pageXOffset": 0,
            "pageYOffset": 0,
            "location": {
                "href": "https://lululemon-trove.myshopify.com/products/all-tied-up-tank-top-resale_lw1bx7s_27574?variant=47331074113812 ",
                "hash": "",
                "host": "http://lululemon-trove.myshopify.com ",
                "hostname": "http://lululemon-trove.myshopify.com ",
                "origin": "https://lululemon-trove.myshopify.com ",
                "pathname": "/products/all-tied-up-tank-top-resale_lw1bx7s_27574",
                "port": "",
                "protocol": "https:",
                "search": "?variant=47331074113812"
            },
            "origin": "https://lululemon-trove.myshopify.com ",
            "screen": {
                "height": 900,
                "width": 1440
            },
            "screenX": 0,
            "screenY": 0,
            "scrollX": 0,
            "scrollY": 0
        }
    }
};
const x = fromShopifyProductViewed_toPageProductsDisplayed(shopify_product_viewed);
console.log(x);

