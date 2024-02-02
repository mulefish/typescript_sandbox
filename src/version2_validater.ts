
import {
    CommonClick,
    AddRemoveCart,
    CommonPageView,
    FiltersClick,
    CartPageView,
    HomePageView,
    PageView,
    Purchase,
    SearchResultsPageView,
    SearchResultsClick,
    Err,
    EmailSignupSuccess,
    CartView,
    CartViewWithProductOutOfStock,
    CategoryPageView,
    CheckoutPurchaseCompletePageView,
} from './version2_interfaces';

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
    // NOTE: The order of testing MATTERS!
    if (isPurchase(obj)) {
        return "Purchase"
    }
    else if (isCartPageView(obj)) {
        return "CartPageView"
    }
    else if (isCheckoutPurchaseCompletePageView(obj)) {
        return "CheckoutPurchaseCompletePageView"
    }
    else if ( isCommonPageView(obj)) { 
        return "CommonPageView"
    }
    else if (isCheckoutShippingPageView(obj)) {
        return "CheckoutShippingPageView"
    }
    else if (isEmailSignupSuccess(obj)) {
        return "EmailSignupSuccess"
    } else if (isSearchResultsPageView(obj)) {
        return "SearchResultsPageView"
    }
    else if (isErr(obj)) {
        return "Err"
    }
    else if (isSearchResultsClick(obj)) {
        return "SearchResultsClick"
    }

    else if (isFiltersClick(obj)) {
        return "FiltersClick"
    }



    else if (isCartViewWithProductOutOfStock(obj)) {
        return "CartViewWithProductOutOfStock"
    }
    else if (isCategoryPageView(obj)) {
        return "CategoryPageView"
    }
    else if (isCartView(obj)) {
        return "CartView"
    }
    else if (isHomePageView(obj)) {
        return "HomePageView"
    }
    else if (isCommonClick(obj)) {
        return "CommonClick";
    }
    else if (isCommonCart(obj)) {
        return "AddRemoveCart";
    }
    else {
        return "No_Match";
    }
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




function isHomePageView(obj: any): obj is HomePageView {
    return 'guestHashedEmail' in obj && typeof obj.guestHashedEmail === 'string' &&
        'browserUserAgent' in obj && typeof obj.browserUserAgent === 'string' &&
        'locale' in obj && isValidLocale(obj.locale) &&
        'language' in obj && isValidLanguage(obj.language) &&
        'pageName' in obj && typeof obj.pageName === 'string' &&
        'pageUrl' in obj && typeof obj.pageUrl === 'string';
}
/*
function isPageView(obj: any): obj is PageView {
    return 'guestHashedEmail' in obj && typeof obj.guestHashedEmail === 'string' &&
        'browserUserAgent' in obj && typeof obj.browserUserAgent === 'string' &&
        'locale' in obj && isValidLocale(obj.locale) &&
        'language' in obj && isValidLanguage(obj.language) &&
        'pageName' in obj && typeof obj.pageName === 'string' &&
        'pageUrl' in obj && typeof obj.pageUrl === 'string' &&
        'campaignIdCID' in obj && typeof obj.campaignIdCID === 'string' &&
        'trafficSourceLastTouchChannel' in obj && typeof obj.trafficSourceLastTouchChannel === 'string' &&
        'trafficSourceReferrerType' in obj && typeof obj.trafficSourceReferrerType === 'string' &&
        'trafficSourceReferringUrl' in obj && typeof obj.trafficSourceReferringUrl === 'string' &&
        'browserType' in obj && typeof obj.browserType === 'string' &&
        'deviceType' in obj && typeof obj.deviceType === 'string' &&
        'userSessionId' in obj && typeof obj.userSessionId === 'string' &&
        'implementationMethod' in obj && typeof obj.implementationMethod === 'string' &&
        'siteProperty' in obj && typeof obj.siteProperty === 'string' &&
        'internalCampaignIdICID' in obj && typeof obj.internalCampaignIdICID === 'string';
}
*/ 

function isCommonPageView(obj: any): obj is CommonPageView {
    return 'guestHashedEmail' in obj && typeof obj.guestHashedEmail === 'string' &&
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



function isPurchase(obj: any): obj is Purchase {
    return 'guestHashedEmail' in obj && typeof obj.guestHashedEmail === 'string' &&
        'browserUserAgent' in obj && typeof obj.browserUserAgent === 'string' &&
        'locale' in obj && isValidLocale(obj.locale) &&
        'language' in obj && isValidLanguage(obj.language) &&
        'orderTaxTotal' in obj && isValidMoney(obj.orderTaxTotal) &&
        'orderShippingTotal' in obj && isValidMoney(obj.orderShippingTotal) &&
        'orderId' in obj && typeof obj.orderId === 'string' &&
        'orderRevenue' in obj && typeof isValidMoney(obj.orderRevenue) &&
        'orderPaymentMethod' in obj && typeof obj.orderPaymentMethod === 'string' &&
        'orderShippingMethod' in obj && typeof obj.orderShippingMethod === 'string' &&
        'orderShippingZipPostalCode' in obj && typeof obj.orderShippingZipPostalCode === 'string' &&
        'orderShippingStateProvince' in obj && typeof obj.orderShippingStateProvince === 'string' &&
        'orderShippingCountry' in obj && typeof obj.orderShippingCountry === 'string' &&
        'orderPromoCode' in obj && typeof obj.orderPromoCode === 'string' &&
        'productId' in obj && typeof obj.productId === 'string' &&
        'productName' in obj && typeof obj.productName === 'string' &&
        'productSKU' in obj && typeof obj.productSKU === 'string' &&
        'productPrice' in obj && isValidMoney(obj.productPrice) &&
        'skuQuantity' in obj && typeof obj.skuQuantity === 'number' &&
        'currency' in obj && typeof obj.currency === 'string' &&
        'orderDiscount' in obj && isValidMoney(obj.orderDiscount) &&
        'userId' in obj && typeof obj.userId === 'string' &&
        'userHashedEmail' in obj && typeof obj.userHashedEmail === 'string';
}


function isSearchResultsPageView(obj: any): obj is SearchResultsPageView {
    return 'guestHashedEmail' in obj && typeof obj.guestHashedEmail === 'string' &&
        'browserUserAgent' in obj && typeof obj.browserUserAgent === 'string' &&
        'locale' in obj && isValidLocale(obj.locale) &&
        'language' in obj && isValidLanguage(obj.language) &&
        'pageName' in obj && typeof obj.pageName === 'string' &&
        'searchTerm' in obj && typeof obj.searchTerm === 'string' &&
        'searchResultsType' in obj && typeof obj.searchResultsType === 'string' &&
        'searchResultsCount' in obj && typeof obj.searchResultsCount === 'number';
}


function isSearchResultsClick(obj: any): obj is SearchResultsClick {
    return 'guestHashedEmail' in obj && typeof obj.guestHashedEmail === 'string' &&
        'browserUserAgent' in obj && typeof obj.browserUserAgent === 'string' &&
        'locale' in obj && isValidLocale(obj.locale) &&
        'language' in obj && isValidLanguage(obj.language) &&
        'searchTerm' in obj && typeof obj.searchTerm === 'string' &&
        'searchResultsType' in obj && typeof obj.searchResultsType === 'string' &&
        'searchResultsCount' in obj && typeof obj.searchResultsCount === 'number';
}


function isErr(obj: any): obj is Err {
    return 'errorType' in obj && typeof obj.errorType === 'string' &&
        'errorMessage' in obj && typeof obj.errorMessage === 'string' &&
        'errorGuestFacing' in obj && typeof obj.errorGuestFacing === 'string' &&
        'guestHashedEmail' in obj && typeof obj.guestHashedEmail === 'string' &&
        'browserUserAgent' in obj && typeof obj.browserUserAgent === 'string' &&
        'locale' in obj && isValidLocale(obj.locale) &&
        'language' in obj && isValidLanguage(obj.language);
}

function isEmailSignupSuccess(obj: any): obj is EmailSignupSuccess {
    return 'guestHashedEmail' in obj && typeof obj.guestHashedEmail === 'string' &&
        'browserUserAgent' in obj && typeof obj.browserUserAgent === 'string' &&
        'locale' in obj && isValidLocale(obj.locale) &&
        'language' in obj && isValidLanguage(obj.language) &&
        'userId' in obj && typeof obj.userId === 'string' &&
        'userHashedEmail' in obj && typeof obj.userHashedEmail === 'string';
}

function isCartView(obj: any): obj is CartView {
    return 'cartId' in obj && typeof obj.cartId === 'string' &&
        'cartType' in obj && typeof obj.cartType === 'string' &&
        'guestHashedEmail' in obj && typeof obj.guestHashedEmail === 'string' &&
        'browserUserAgent' in obj && typeof obj.browserUserAgent === 'string' &&
        'locale' in obj && isValidLocale(obj.locale) &&
        'language' in obj && isValidLanguage(obj.language) &&
        'productId' in obj && typeof obj.productId === 'string' &&
        'productName' in obj && typeof obj.productName === 'string' &&
        'productSKU' in obj && typeof obj.productSKU === 'string' &&
        'productPrice' in obj && isValidMoney(obj.productPrice) &&
        'skuQuantity' in obj && typeof obj.skuQuantity === 'number' &&
        'currency' in obj && isValidCurrency(obj.currency);
}


function isCartViewWithProductOutOfStock(obj: any): obj is CartViewWithProductOutOfStock {
    return 'guestHashedEmail' in obj && typeof obj.guestHashedEmail === 'string' &&
        'browserUserAgent' in obj && typeof obj.browserUserAgent === 'string' &&
        'locale' in obj && isValidLocale(obj.locale) &&
        'language' in obj && isValidLanguage(obj.language) &&
        'productId' in obj && typeof obj.productId === 'string' &&
        'productName' in obj && typeof obj.productName === 'string' &&
        'productSKU' in obj && typeof obj.productSKU === 'string' &&
        'productPrice' in obj && isValidMoney(obj.productPrice) &&
        'skuQuantity' in obj && typeof obj.skuQuantity === 'number' &&
        'currency' in obj && typeof isValidCurrency(obj.currency) &&
        'productCartOutOfStockStatus' in obj && typeof obj.productCartOutOfStockStatus === 'string';
}

function isCategoryPageView(obj: any): obj is CategoryPageView {
    return 'categoryName' in obj && typeof obj.categoryName === 'string' &&
        'guestHashedEmail' in obj && typeof obj.guestHashedEmail === 'string' &&
        'browserUserAgent' in obj && typeof obj.browserUserAgent === 'string' &&
        'locale' in obj && isValidLocale(obj.locale) &&
        'language' in obj && isValidLanguage(obj.language) &&
        'pageName' in obj && typeof obj.pageName === 'string' &&
        'pageUrl' in obj && typeof obj.pageUrl === 'string';
}


function isCheckoutShippingPageView(obj: any): obj is CheckoutPurchaseCompletePageView {
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


function isCheckoutPurchaseCompletePageView(obj: any): obj is CheckoutPurchaseCompletePageView {
    return 'guestHashedEmail' in obj && typeof obj.guestHashedEmail === 'string' &&
        'browserUserAgent' in obj && typeof obj.browserUserAgent === 'string' &&
        'locale' in obj && isValidLocale(obj.locale) &&
        'language' in obj && isValidLanguage(obj.language) &&
        'orderTaxTotal' in obj && isValidMoney(obj.orderTaxTotal) &&
        'orderShippingTotal' in obj && isValidMoney(obj.orderShippingTotal) &&

        'pageName' in obj && typeof obj.pageName === 'string' &&

        'productId' in obj && typeof obj.productId === 'string' &&


        'productName' in obj && typeof obj.productName === 'string' &&
        'productSKU' in obj && typeof obj.productSKU === 'string' &&

        'productPrice' in obj && isValidMoney(obj.productPrice) &&
        'skuQuantity' in obj && typeof obj.skuQuantity === 'number' &&
        'currency' in obj && typeof obj.currency === 'string';
}