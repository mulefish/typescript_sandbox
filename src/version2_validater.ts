
import { CommonClick, AddRemoveCart, CommonPageView, FiltersClick, CartPageView } from './version2_interfaces';

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

if (isCartPageView(obj)) {
    return "CartPageView"
} else if (isCheckoutShippingPageView(obj)) {
        return "CommonPageView"
    } else if (isCommonClick(obj)) {
        return "CommonClick";
    } else if (isCommonCart(obj)) {
        return "AddRemoveCart";
    } else if (isFiltersClick(obj)) {
        return "FiltersClick"
    } else {

        return "No_Match";
    }
}

function isCheckoutShippingPageView(obj: any): obj is CommonPageView {
    return 'guestHashedEmail' in obj && typeof obj.guestHashedEmail === 'string' &&
        'browserUserAgent' in obj && typeof obj.browserUserAgent === 'string' &&
        'locale' in obj && isValidLocale(obj.locale) &&
        'language' in obj && isValidLanguage(obj.language) &&
        'pageName' in obj && typeof obj.pageName === 'string' &&
        'productId' in obj && typeof obj.productId === 'string' &&
        'productName' in obj && typeof obj.productName === 'string' &&
        'productSKU' in obj && typeof obj.productSKU === 'string' &&
        'productPrice' in obj && typeof obj.productPrice === 'string' &&
        'skuQuantity' in obj && typeof obj.skuQuantity === 'number' &&
        'currency' in obj && isValidCurrency(obj.currency);
}

function isFiltersClick(obj: any): obj is FiltersClick {
    return 'filterType' in obj && typeof obj.filterType === 'string' &&
        'filterValue' in obj && typeof obj.filterValue === 'string' &&
        'filterState' in obj && typeof obj.filterState === 'string' &&
        'guestHashedEmail' in obj && typeof obj.guestHashedEmail === 'string' &&
        'browserUserAgent' in obj && typeof obj.browserUserAgent === 'string' &&
        'locale' in obj && isValidLocale(obj.locale) &&
        'language' in obj && isValidLanguage(obj.language);
}

function isCartPageView(obj: any): obj is CartPageView {
    return 'cartId' in obj && typeof obj.cartId === 'string' &&
        'cartType' in obj && typeof obj.cartType === 'string' &&
        'cartTotalQuantity' in obj && typeof obj.cartTotalQuantity === 'number' &&
        'guestHashedEmail' in obj && typeof obj.guestHashedEmail === 'string' &&
        'browserUserAgent' in obj && typeof obj.browserUserAgent === 'string' &&
        'locale' in obj && isValidLocale(obj.locale) &&
        'language' in obj && isValidLanguage(obj.language) &&
        'pageName' in obj && typeof obj.pageName === 'string' &&
        'productId' in obj && typeof obj.productId === 'string' &&
        'productName' in obj && typeof obj.productName === 'string' &&
        'productSKU' in obj && typeof obj.productSKU === 'string' &&
        'productPrice' in obj && isValidMoney(obj.productPrice) &&
        'skuQuantity' in obj && typeof obj.skuQuantity === 'number' &&
        'currency' in obj && isValidCurrency(obj.currency);
}


