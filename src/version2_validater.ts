
import { CommonClick, AddRemoveCart } from './version2_interfaces';

const isValidLocale = (locale: string): boolean => {
    const pattern = /^[a-z]{2}-[A-Z]{2}$/;
    const x = pattern.test(locale);

    return x 
}

const isValidLanguage = (language: string): boolean => { 
    language = language.toLowerCase() 
    const langs = new Set(['english', 'en', 'french', 'fr', 'japanese', 'jp']);

    return langs.has(language);
}


const isValidMoney = (productPrice: string): boolean => {
    const pattern = /^\d+(\.\d{2})?$/;
    return pattern.test(productPrice);

}

const isValidCurrency = (currency: string): boolean => { 
    const currencies = new Set(['USD', 'CAD', 'JPY']);
    const pattern = /^\d+(\.\d{2})?$/;
    return currencies.has(currency);
}

// ///////////

function isCommonClick(obj: any): obj is CommonClick {
    return typeof obj.guestHashedEmail === 'string' &&
           typeof obj.browserUserAgent === 'string' &&
           typeof obj.linkClickUrl === 'string' &&
           typeof obj.linkClickText === 'string' &&
           isValidLocale(obj.locale) === true &&
           isValidLanguage(obj.language) === true;
}



function isCommonCart(obj: any): obj is AddRemoveCart {

    return typeof obj.guestHashedEmail === 'string' &&
           typeof obj.browserUserAgent === 'string' &&
           isValidLocale(obj.locale) === true && 
           isValidLanguage(obj.language) === true &&
           typeof obj.productId === 'string' &&
           typeof obj.productName === 'string' &&
           typeof obj.productSKU === 'string' &&
           typeof obj.productPrice === 'string' &&
           typeof obj.skuQuantity === 'number' &&
           isValidCurrency(obj.currency);
}




export function classifyJsonObject(obj: any): string {
        // console.log( obj )
    if (isCommonClick(obj)) {
        return "CommonClick";
    } else if (isCommonCart(obj)) {
        return "AddRemoveCart";
    } else {
        return "No_Match";
    }
}


