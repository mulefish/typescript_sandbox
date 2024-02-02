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
        const pattern = /^d+(.d{2})?$/;
        return pattern.test(productPrice);
    }
const isValidCurrency = (currency: string): boolean => {
        const currencies = new Set(['USD', 'CAD', 'JPY']);
        return currencies.has(currency);
    }

type TypeProduct = {
     productId:string;
     productName:string;
     productSKU:string;
     productPrice:string;
     skuQuantity:number;
     currency:string;
}
type TypePageName = {
     pageName:string;
}
type TypeLocaleLanguage = {
     locale:string;
     language:string;
}
type TypeGuestEmail = {
     guestHashedEmail:string;
     browserUserAgent:string;
}
type TypeCart = {
     cartId:string;
     cartType:string;
}
type TypePageUrl = {
     pageUrl:string;
}
type TypeSearch = {
     searchTerm:string;
     searchResultsType:string;
     searchResultsCount:number;
}
type TypeOrderTotal = {
     orderTaxTotal:string;
     orderShippingTotal:string;
}
type TypeLink = {
     linkClickUrl:string;
     linkClickText:string;
}
type TypeCategoryName = {
     categoryName:string;
}
type TypeCartTotalQuantity = {
     cartTotalQuantity:number;
}
type TypeProductOutOfStock = {
     productCartOutOfStockStatus:string;
}
type TypeProductUniques = {
     orderId:string;
     orderRevenue:string;
     orderPaymentMethod:string;
     orderShippingMethod:string;
     orderShippingZipPostalCode:string;
     orderShippingStateProvince:string;
     orderShippingCountry:string;
     orderPromoCode:string;
     productId:string;
     productName:string;
     productSKU:string;
     productPrice:string;
     skuQuantity:number;
     currency:string;
     orderDiscount:string;
}
type TypeUserId = {
     userId:string;
     userHashedEmail:string;
}
type TypePageViewUniques = {
     campaignIdCID:string;
     trafficSourceLastTouchChannel:string;
     trafficSourceReferrerType:string;
     trafficSourceReferringUrl:string;
     browserType:string;
     deviceType:string;
     userSessionId:string;
     implementationMethod:string;
     siteProperty:string;
     internalCampaignIdICID:string;
}
type TypeErrs = {
     errorType:string;
     errorMessage:string;
     errorGuestFacing:string;
}
type TypeFilterUniques = {
     filterType:string;
     filterValue:string;
     filterState:string;
}
// INTERFACES
export interface ComponentImpression extends TypeGuestEmail, TypeLocaleLanguage, TypePageName {}
export interface CheckoutPurchaseCompletePageView extends TypeGuestEmail, TypeLocaleLanguage, TypeOrderTotal, TypePageName, TypeProduct {}
export interface CategoryPageView extends TypeCategoryName, TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypePageUrl {}
export interface CartViewWithProductOutOfStock extends TypeGuestEmail, TypeLocaleLanguage, TypeProduct, TypeProductOutOfStock {}
export interface CartView extends TypeCart, TypeGuestEmail, TypeLocaleLanguage, TypeProduct {}
export interface CartPageView extends TypeCart, TypeCartTotalQuantity, TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypeProduct {}
export interface EmailSignupSuccess extends TypeGuestEmail, TypeLocaleLanguage, TypeUserId {}
export interface Purchase extends TypeGuestEmail, TypeLocaleLanguage, TypeOrderTotal, TypeProductUniques, TypeUserId {}
export interface Err extends TypeErrs, TypeGuestEmail, TypeLocaleLanguage {}
export interface SearchResultsClick extends TypeGuestEmail, TypeLocaleLanguage, TypeSearch {}
export interface SearchResultsPageView extends TypeGuestEmail, TypeLocaleLanguage, TypeSearch, TypePageName {}
export interface PageView extends TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypePageUrl, TypePageViewUniques {}
export interface HomePageView extends TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypePageUrl {}
export interface FiltersClick extends TypeFilterUniques, TypeGuestEmail, TypeLocaleLanguage {}
export interface CommonPageView extends TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypeProduct {}
export interface CommonClick extends TypeGuestEmail, TypeLink, TypeLocaleLanguage {}
export interface AddRemoveCart extends TypeGuestEmail, TypeLocaleLanguage, TypeProduct {}




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
        else if (isCommonPageView(obj)) {
            return "CommonPageView"
        }
        // else if (isCheckoutShippingPageView(obj)) {
        //     return "CheckoutShippingPageView"
        // }
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
        else if (isPageView(obj)) {
            return "PageView"
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
        // else if (isCommonCart(obj)) {
        //     return "AddRemoveCart";
        // }
        else if (isComponentImpression(obj)) {
            return "ComponentImpression"
        }
        else {
            return "No_Match";
        }
    }
// GUARDS
function isComponentImpression(obj: any): obj is ComponentImpression {
return     'guestHashedEmail' in obj && isValidMoney(obj.guestHashedEmail) &&
    'browserUserAgent' in obj && isValidMoney(obj.browserUserAgent) &&
    'locale' in obj && isValidLocale(obj.locale) &&
    'language' in obj && isValidLanguage(obj.language)  &&
    'pageName' in obj && isValidMoney(obj.pageName);
}

function isCheckoutPurchaseCompletePageView(obj: any): obj is CheckoutPurchaseCompletePageView {
return     'guestHashedEmail' in obj && isValidMoney(obj.guestHashedEmail) &&
    'browserUserAgent' in obj && isValidMoney(obj.browserUserAgent) &&
    'locale' in obj && isValidLocale(obj.locale) &&
    'language' in obj && isValidLanguage(obj.language)  &&
    'orderTaxTotal' in obj && isValidMoney(obj.orderTaxTotal) &&
    'orderShippingTotal' in obj && isValidMoney(obj.orderShippingTotal) &&
    'pageName' in obj && isValidMoney(obj.pageName) &&
    'productId' in obj && isValidMoney(obj.productId) &&
    'productName' in obj && isValidMoney(obj.productName) &&
    'productSKU' in obj && isValidMoney(obj.productSKU) &&
    'productPrice' in obj && isValidMoney(obj.productPrice) &&
    'skuQuantity' in obj && isValidMoney(obj.skuQuantity) &&
    'currency' in obj && isValidMoney(obj.currency);
}

function isCategoryPageView(obj: any): obj is CategoryPageView {
return     'categoryName' in obj && isValidMoney(obj.categoryName) &&
    'guestHashedEmail' in obj && isValidMoney(obj.guestHashedEmail) &&
    'browserUserAgent' in obj && isValidMoney(obj.browserUserAgent) &&
    'locale' in obj && isValidLocale(obj.locale) &&
    'language' in obj && isValidLanguage(obj.language)  &&
    'pageName' in obj && isValidMoney(obj.pageName) &&
    'pageUrl' in obj && isValidMoney(obj.pageUrl);
}

function isCartViewWithProductOutOfStock(obj: any): obj is CartViewWithProductOutOfStock {
return     'guestHashedEmail' in obj && isValidMoney(obj.guestHashedEmail) &&
    'browserUserAgent' in obj && isValidMoney(obj.browserUserAgent) &&
    'locale' in obj && isValidLocale(obj.locale) &&
    'language' in obj && isValidLanguage(obj.language)  &&
    'productId' in obj && isValidMoney(obj.productId) &&
    'productName' in obj && isValidMoney(obj.productName) &&
    'productSKU' in obj && isValidMoney(obj.productSKU) &&
    'productPrice' in obj && isValidMoney(obj.productPrice) &&
    'skuQuantity' in obj && isValidMoney(obj.skuQuantity) &&
    'currency' in obj && isValidMoney(obj.currency) &&
    'productCartOutOfStockStatus' in obj && isValidMoney(obj.productCartOutOfStockStatus);
}

function isCartView(obj: any): obj is CartView {
return     'cartId' in obj && isValidMoney(obj.cartId) &&
    'cartType' in obj && isValidMoney(obj.cartType) &&
    'guestHashedEmail' in obj && isValidMoney(obj.guestHashedEmail) &&
    'browserUserAgent' in obj && isValidMoney(obj.browserUserAgent) &&
    'locale' in obj && isValidLocale(obj.locale) &&
    'language' in obj && isValidLanguage(obj.language)  &&
    'productId' in obj && isValidMoney(obj.productId) &&
    'productName' in obj && isValidMoney(obj.productName) &&
    'productSKU' in obj && isValidMoney(obj.productSKU) &&
    'productPrice' in obj && isValidMoney(obj.productPrice) &&
    'skuQuantity' in obj && isValidMoney(obj.skuQuantity) &&
    'currency' in obj && isValidMoney(obj.currency);
}

function isCartPageView(obj: any): obj is CartPageView {
return     'cartId' in obj && isValidMoney(obj.cartId) &&
    'cartType' in obj && isValidMoney(obj.cartType) &&
    'cartTotalQuantity' in obj && isValidMoney(obj.cartTotalQuantity) &&
    'guestHashedEmail' in obj && isValidMoney(obj.guestHashedEmail) &&
    'browserUserAgent' in obj && isValidMoney(obj.browserUserAgent) &&
    'locale' in obj && isValidLocale(obj.locale) &&
    'language' in obj && isValidLanguage(obj.language)  &&
    'pageName' in obj && isValidMoney(obj.pageName) &&
    'productId' in obj && isValidMoney(obj.productId) &&
    'productName' in obj && isValidMoney(obj.productName) &&
    'productSKU' in obj && isValidMoney(obj.productSKU) &&
    'productPrice' in obj && isValidMoney(obj.productPrice) &&
    'skuQuantity' in obj && isValidMoney(obj.skuQuantity) &&
    'currency' in obj && isValidMoney(obj.currency);
}

function isEmailSignupSuccess(obj: any): obj is EmailSignupSuccess {
return     'guestHashedEmail' in obj && isValidMoney(obj.guestHashedEmail) &&
    'browserUserAgent' in obj && isValidMoney(obj.browserUserAgent) &&
    'locale' in obj && isValidLocale(obj.locale) &&
    'language' in obj && isValidLanguage(obj.language)  &&
    'userId' in obj && isValidMoney(obj.userId) &&
    'userHashedEmail' in obj && isValidMoney(obj.userHashedEmail);
}

function isPurchase(obj: any): obj is Purchase {
return     'guestHashedEmail' in obj && isValidMoney(obj.guestHashedEmail) &&
    'browserUserAgent' in obj && isValidMoney(obj.browserUserAgent) &&
    'locale' in obj && isValidLocale(obj.locale) &&
    'language' in obj && isValidLanguage(obj.language)  &&
    'orderTaxTotal' in obj && isValidMoney(obj.orderTaxTotal) &&
    'orderShippingTotal' in obj && isValidMoney(obj.orderShippingTotal) &&
    'orderId' in obj && isValidMoney(obj.orderId) &&
    'orderRevenue' in obj && isValidMoney(obj.orderRevenue) &&
    'orderPaymentMethod' in obj && isValidMoney(obj.orderPaymentMethod) &&
    'orderShippingMethod' in obj && isValidMoney(obj.orderShippingMethod) &&
    'orderShippingZipPostalCode' in obj && isValidMoney(obj.orderShippingZipPostalCode) &&
    'orderShippingStateProvince' in obj && isValidMoney(obj.orderShippingStateProvince) &&
    'orderShippingCountry' in obj && isValidMoney(obj.orderShippingCountry) &&
    'orderPromoCode' in obj && isValidMoney(obj.orderPromoCode) &&
    'productId' in obj && isValidMoney(obj.productId) &&
    'productName' in obj && isValidMoney(obj.productName) &&
    'productSKU' in obj && isValidMoney(obj.productSKU) &&
    'productPrice' in obj && isValidMoney(obj.productPrice) &&
    'skuQuantity' in obj && isValidMoney(obj.skuQuantity) &&
    'currency' in obj && isValidMoney(obj.currency) &&
    'orderDiscount' in obj && isValidMoney(obj.orderDiscount) &&
    'userId' in obj && isValidMoney(obj.userId) &&
    'userHashedEmail' in obj && isValidMoney(obj.userHashedEmail);
}

function isErr(obj: any): obj is Err {
return     'errorType' in obj && isValidMoney(obj.errorType) &&
    'errorMessage' in obj && isValidMoney(obj.errorMessage) &&
    'errorGuestFacing' in obj && isValidMoney(obj.errorGuestFacing) &&
    'guestHashedEmail' in obj && isValidMoney(obj.guestHashedEmail) &&
    'browserUserAgent' in obj && isValidMoney(obj.browserUserAgent) &&
    'locale' in obj && isValidLocale(obj.locale) &&
    'language' in obj && isValidLanguage(obj.language) ;
}

function isSearchResultsClick(obj: any): obj is SearchResultsClick {
return     'guestHashedEmail' in obj && isValidMoney(obj.guestHashedEmail) &&
    'browserUserAgent' in obj && isValidMoney(obj.browserUserAgent) &&
    'locale' in obj && isValidLocale(obj.locale) &&
    'language' in obj && isValidLanguage(obj.language)  &&
    'searchTerm' in obj && isValidMoney(obj.searchTerm) &&
    'searchResultsType' in obj && isValidMoney(obj.searchResultsType) &&
    'searchResultsCount' in obj && isValidMoney(obj.searchResultsCount);
}

function isSearchResultsPageView(obj: any): obj is SearchResultsPageView {
return     'guestHashedEmail' in obj && isValidMoney(obj.guestHashedEmail) &&
    'browserUserAgent' in obj && isValidMoney(obj.browserUserAgent) &&
    'locale' in obj && isValidLocale(obj.locale) &&
    'language' in obj && isValidLanguage(obj.language)  &&
    'searchTerm' in obj && isValidMoney(obj.searchTerm) &&
    'searchResultsType' in obj && isValidMoney(obj.searchResultsType) &&
    'searchResultsCount' in obj && isValidMoney(obj.searchResultsCount) &&
    'pageName' in obj && isValidMoney(obj.pageName);
}

function isPageView(obj: any): obj is PageView {
return     'guestHashedEmail' in obj && isValidMoney(obj.guestHashedEmail) &&
    'browserUserAgent' in obj && isValidMoney(obj.browserUserAgent) &&
    'locale' in obj && isValidLocale(obj.locale) &&
    'language' in obj && isValidLanguage(obj.language)  &&
    'pageName' in obj && isValidMoney(obj.pageName) &&
    'pageUrl' in obj && isValidMoney(obj.pageUrl) &&
    'campaignIdCID' in obj && isValidMoney(obj.campaignIdCID) &&
    'trafficSourceLastTouchChannel' in obj && isValidMoney(obj.trafficSourceLastTouchChannel) &&
    'trafficSourceReferrerType' in obj && isValidMoney(obj.trafficSourceReferrerType) &&
    'trafficSourceReferringUrl' in obj && isValidMoney(obj.trafficSourceReferringUrl) &&
    'browserType' in obj && isValidMoney(obj.browserType) &&
    'deviceType' in obj && isValidMoney(obj.deviceType) &&
    'userSessionId' in obj && isValidMoney(obj.userSessionId) &&
    'implementationMethod' in obj && isValidMoney(obj.implementationMethod) &&
    'siteProperty' in obj && isValidMoney(obj.siteProperty) &&
    'internalCampaignIdICID' in obj && isValidMoney(obj.internalCampaignIdICID);
}

function isHomePageView(obj: any): obj is HomePageView {
return     'guestHashedEmail' in obj && isValidMoney(obj.guestHashedEmail) &&
    'browserUserAgent' in obj && isValidMoney(obj.browserUserAgent) &&
    'locale' in obj && isValidLocale(obj.locale) &&
    'language' in obj && isValidLanguage(obj.language)  &&
    'pageName' in obj && isValidMoney(obj.pageName) &&
    'pageUrl' in obj && isValidMoney(obj.pageUrl);
}

function isFiltersClick(obj: any): obj is FiltersClick {
return     'filterType' in obj && isValidMoney(obj.filterType) &&
    'filterValue' in obj && isValidMoney(obj.filterValue) &&
    'filterState' in obj && isValidMoney(obj.filterState) &&
    'guestHashedEmail' in obj && isValidMoney(obj.guestHashedEmail) &&
    'browserUserAgent' in obj && isValidMoney(obj.browserUserAgent) &&
    'locale' in obj && isValidLocale(obj.locale) &&
    'language' in obj && isValidLanguage(obj.language) ;
}

function isCommonPageView(obj: any): obj is CommonPageView {
return     'guestHashedEmail' in obj && isValidMoney(obj.guestHashedEmail) &&
    'browserUserAgent' in obj && isValidMoney(obj.browserUserAgent) &&
    'locale' in obj && isValidLocale(obj.locale) &&
    'language' in obj && isValidLanguage(obj.language)  &&
    'pageName' in obj && isValidMoney(obj.pageName) &&
    'productId' in obj && isValidMoney(obj.productId) &&
    'productName' in obj && isValidMoney(obj.productName) &&
    'productSKU' in obj && isValidMoney(obj.productSKU) &&
    'productPrice' in obj && isValidMoney(obj.productPrice) &&
    'skuQuantity' in obj && isValidMoney(obj.skuQuantity) &&
    'currency' in obj && isValidMoney(obj.currency);
}

function isCommonClick(obj: any): obj is CommonClick {
return     'guestHashedEmail' in obj && isValidMoney(obj.guestHashedEmail) &&
    'browserUserAgent' in obj && isValidMoney(obj.browserUserAgent) &&
    'linkClickUrl' in obj && isValidMoney(obj.linkClickUrl) &&
    'linkClickText' in obj && isValidMoney(obj.linkClickText) &&
    'locale' in obj && isValidLocale(obj.locale) &&
    'language' in obj && isValidLanguage(obj.language) ;
}

function isAddRemoveCart(obj: any): obj is AddRemoveCart {
return     'guestHashedEmail' in obj && isValidMoney(obj.guestHashedEmail) &&
    'browserUserAgent' in obj && isValidMoney(obj.browserUserAgent) &&
    'locale' in obj && isValidLocale(obj.locale) &&
    'language' in obj && isValidLanguage(obj.language)  &&
    'productId' in obj && isValidMoney(obj.productId) &&
    'productName' in obj && isValidMoney(obj.productName) &&
    'productSKU' in obj && isValidMoney(obj.productSKU) &&
    'productPrice' in obj && isValidMoney(obj.productPrice) &&
    'skuQuantity' in obj && isValidMoney(obj.skuQuantity) &&
    'currency' in obj && isValidMoney(obj.currency);
}

// TEST DATA
const testData={
  "isComponentImpression": {
    "guestHashedEmail": "String",
    "browserUserAgent": "String",
    "locale": "en-US",
    "language": "Engish",
    "pageName": "String"
  },
  "isCheckoutPurchaseCompletePageView": {
    "guestHashedEmail": "String",
    "browserUserAgent": "String",
    "locale": "en-US",
    "language": "Engish",
    "orderTaxTotal": "102.00",
    "orderShippingTotal": "103.00",
    "pageName": "String",
    "productId": "String",
    "productName": "String",
    "productSKU": "String",
    "productPrice": "101.00",
    "skuQuantity": 1,
    "currency": "USD"
  },
  "isCategoryPageView": {
    "categoryName": "String",
    "guestHashedEmail": "String",
    "browserUserAgent": "String",
    "locale": "en-US",
    "language": "Engish",
    "pageName": "String",
    "pageUrl": "String"
  },
  "isCartViewWithProductOutOfStock": {
    "guestHashedEmail": "String",
    "browserUserAgent": "String",
    "locale": "en-US",
    "language": "Engish",
    "productId": "String",
    "productName": "String",
    "productSKU": "String",
    "productPrice": "101.00",
    "skuQuantity": 1,
    "currency": "USD",
    "productCartOutOfStockStatus": "String"
  },
  "isCartView": {
    "cartId": "String",
    "cartType": "String",
    "guestHashedEmail": "String",
    "browserUserAgent": "String",
    "locale": "en-US",
    "language": "Engish",
    "productId": "String",
    "productName": "String",
    "productSKU": "String",
    "productPrice": "101.00",
    "skuQuantity": 1,
    "currency": "USD"
  },
  "isCartPageView": {
    "cartId": "String",
    "cartType": "String",
    "cartTotalQuantity": 1,
    "guestHashedEmail": "String",
    "browserUserAgent": "String",
    "locale": "en-US",
    "language": "Engish",
    "pageName": "String",
    "productId": "String",
    "productName": "String",
    "productSKU": "String",
    "productPrice": "101.00",
    "skuQuantity": 1,
    "currency": "USD"
  },
  "isEmailSignupSuccess": {
    "guestHashedEmail": "String",
    "browserUserAgent": "String",
    "locale": "en-US",
    "language": "Engish",
    "userId": "String",
    "userHashedEmail": "String"
  },
  "isPurchase": {
    "guestHashedEmail": "String",
    "browserUserAgent": "String",
    "locale": "en-US",
    "language": "Engish",
    "orderTaxTotal": "102.00",
    "orderShippingTotal": "103.00",
    "orderId": "String",
    "orderRevenue": "104.00",
    "orderPaymentMethod": "String",
    "orderShippingMethod": "String",
    "orderShippingZipPostalCode": "String",
    "orderShippingStateProvince": "String",
    "orderShippingCountry": "String",
    "orderPromoCode": "String",
    "productId": "String",
    "productName": "String",
    "productSKU": "String",
    "productPrice": "101.00",
    "skuQuantity": 1,
    "currency": "USD",
    "orderDiscount": "105.00",
    "userId": "String",
    "userHashedEmail": "String"
  },
  "isErr": {
    "errorType": "String",
    "errorMessage": "String",
    "errorGuestFacing": "String",
    "guestHashedEmail": "String",
    "browserUserAgent": "String",
    "locale": "en-US",
    "language": "Engish"
  },
  "isSearchResultsClick": {
    "guestHashedEmail": "String",
    "browserUserAgent": "String",
    "locale": "en-US",
    "language": "Engish",
    "searchTerm": "String",
    "searchResultsType": "String",
    "searchResultsCount": 1
  },
  "isSearchResultsPageView": {
    "guestHashedEmail": "String",
    "browserUserAgent": "String",
    "locale": "en-US",
    "language": "Engish",
    "searchTerm": "String",
    "searchResultsType": "String",
    "searchResultsCount": 1,
    "pageName": "String"
  },
  "isPageView": {
    "guestHashedEmail": "String",
    "browserUserAgent": "String",
    "locale": "en-US",
    "language": "Engish",
    "pageName": "String",
    "pageUrl": "String",
    "campaignIdCID": "String",
    "trafficSourceLastTouchChannel": "String",
    "trafficSourceReferrerType": "String",
    "trafficSourceReferringUrl": "String",
    "browserType": "String",
    "deviceType": "String",
    "userSessionId": "String",
    "implementationMethod": "String",
    "siteProperty": "String",
    "internalCampaignIdICID": "String"
  },
  "isHomePageView": {
    "guestHashedEmail": "String",
    "browserUserAgent": "String",
    "locale": "en-US",
    "language": "Engish",
    "pageName": "String",
    "pageUrl": "String"
  },
  "isFiltersClick": {
    "filterType": "String",
    "filterValue": "String",
    "filterState": "String",
    "guestHashedEmail": "String",
    "browserUserAgent": "String",
    "locale": "en-US",
    "language": "Engish"
  },
  "isCommonPageView": {
    "guestHashedEmail": "String",
    "browserUserAgent": "String",
    "locale": "en-US",
    "language": "Engish",
    "pageName": "String",
    "productId": "String",
    "productName": "String",
    "productSKU": "String",
    "productPrice": "101.00",
    "skuQuantity": 1,
    "currency": "USD"
  },
  "isCommonClick": {
    "guestHashedEmail": "String",
    "browserUserAgent": "String",
    "linkClickUrl": "String",
    "linkClickText": "String",
    "locale": "en-US",
    "language": "Engish"
  },
  "isAddRemoveCart": {
    "guestHashedEmail": "String",
    "browserUserAgent": "String",
    "locale": "en-US",
    "language": "Engish",
    "productId": "String",
    "productName": "String",
    "productSKU": "String",
    "productPrice": "101.00",
    "skuQuantity": 1,
    "currency": "USD"
  }
}

    function verdict(a: any, b: any, start: number, msg: string) {
        const milsec = new Date().getTime() - start
        let result: string = "FAIL"
        if (JSON.stringify(a) === JSON.stringify(b)) {
            result = "PASS"
        }
        if (milsec > 20) {
            msg = " TOO SLOW"
        }
        console.log(result + " milsec=" + milsec + " msg=" + msg)
    }
    
    
    function test_happyPath(candidate: any, expected: string, testedInterface: string) {
        const t1 = new Date().getTime()
        const actual = classifyJsonObject(candidate)
        const isOk = actual === expected
        if (isOk === false) {
            console.log(candidate)
        }
    
        verdict(isOk, true, t1, testedInterface + ": " + actual + "   " + expected)
    }
    
    function test_CommonClick_sadpath_wrongLanguage(candidate: any, expected: string) {
        const t1 = new Date().getTime()
    
        const x = JSON.parse(JSON.stringify(candidate));
        x["language"] = "Kittycats"
        const actual = classifyJsonObject(x)
        const isOk = actual === expected
        verdict(isOk, true, t1, "test_CommonClick_sadpath_wrongLanguage: actual=" + actual + "   expected=" + expected)
    
    }
    
    function test_CommonClick_sadpath_noLanguage(candidate: any, expected: string) {
        const t1 = new Date().getTime()
    
        const x = JSON.parse(JSON.stringify(candidate));
        x["language"] = "Kittycats"
        const actual = classifyJsonObject(x)
        const isOk = actual === expected
        verdict(isOk, true, t1, "test_CommonClick_sadpath_noLanguage: actual=" + actual + "   expected=" + expected)
    }
