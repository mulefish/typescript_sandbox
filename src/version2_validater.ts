
import { CommonClick, CommonCart
} from './version2_interfaces';

function isValidLocale(locale: string): boolean {
    const pattern = /^[a-z]{2}-[A-Z]{2}$/;
    const x = pattern.test(locale);
    return x 
}


function isCommonClick(obj: any): obj is CommonClick {
    return typeof obj.guestHashedEmail === 'string' &&
           typeof obj.browserUserAgent === 'string' &&
           typeof obj.linkClickUrl === 'string' &&
           typeof obj.linkClickText === 'string' &&
           isValidLocale(obj.locale) === true &&
           typeof obj.language === 'string';
}

function isCommonCart(obj: any): obj is CommonCart {
    return typeof obj.guestHashedEmail === 'string' &&
           typeof obj.browserUserAgent === 'string' &&
           typeof obj.locale === 'string' &&
           typeof obj.language === 'string' &&
           typeof obj.productId === 'string' &&
           typeof obj.productName === 'string' &&
           typeof obj.productSKU === 'string' &&
           typeof obj.productPrice === 'string' &&
           typeof obj.skuQuantity === 'number' &&
           typeof obj.currency === 'string';
}



// const noise = {
//     guestHashedEmail: "example@example.com",
//     browserUserAgent: "Mozilla/5.0",
//     locale: "en-US",
//     productId: "P123",
//     productName: "Product Name",
//     productSKU: "SKU123",
//     productPrice: "100.00",
//     skuQuantity: 1,
//     currency: "USD"
// };

// export function classifyJsonObject(obj: any): "CommonClick" | "CommonCart" | "Neither" {
//     console.log( obj )
    
//     if (isCommonClick(obj)) {
//         console.log("isCommonClick")
//         return "CommonClick";
//     } else if (isCommonCart(obj)) {
//         console.log("isCommonCart")
//         return "CommonCart";
//     } else {
//         console.log("neither")
//         return "Neither";
//     }
// }


export function classifyJsonObject(obj: any): string {
    console.log( obj )
    
    if (isCommonClick(obj)) {
        console.log("CommonClick")
        return "CommonClick";
    } else if (isCommonCart(obj)) {
        console.log("CommonCart")
        return "CommonCart";
    } else {
        console.log("neither")
        return "Neither";
    }
}


