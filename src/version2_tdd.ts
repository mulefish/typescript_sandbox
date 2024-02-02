import { classifyJsonObject } from './version2_validater';

function verdict(a: any, b: any, start: number, msg: string) {
    const milsec = new Date().getTime() - start
    let result: string = "FAIL"
    if (JSON.stringify(a) === JSON.stringify(b)) {
        result = "PASS"
    }
    if (milsec > 20) {
        msg = " TOO SLOW"
    }
    console.log(`${result} milsec=${milsec} msg=${msg}`)
}
const jsons = {
    "click": {
        guestHashedEmail: "hashed@example.com",
        browserUserAgent: "Mozilla/5.0",
        linkClickUrl: "https://example.com",
        linkClickText: "Click Here",
        locale: "en-US",
        language: "English"
    },
    "addCart": {
        guestHashedEmail: "example@example.com",
        browserUserAgent: "Mozilla/5.0",
        locale: "en-US",
        language: "English",
        productId: "P123",
        productName: "Product Name",
        productSKU: "SKU123",
        productPrice: "100.00",
        skuQuantity: 1,
        currency: "USD"
    },
    "filtersClick": {
        filterType: "category",
        filterValue: "electronics",
        filterState: "selected",
        guestHashedEmail: "hashed@example.com",
        browserUserAgent: "Mozilla/5.0",
        locale: "en-US",
        language: "English"
    },
    "cartPageView": {
        cartId: "cart123",
        cartType: "standard",
        cartTotalQuantity: 2,
        guestHashedEmail: "hashed@example.com",
        browserUserAgent: "Mozilla/5.0",
        locale: "en-US",
        language: "English",
        pageName: "Cart Page",
        productId: "12345",
        productName: "Widget",
        productSKU: "WIDGET-123",
        productPrice: "100.00",
        skuQuantity: 1,
        currency: "USD"
    },
    'homePageView': {
        guestHashedEmail: "hashed@example.com",
        browserUserAgent: "Mozilla/5.0",
        locale: "en-US",
        language: "English",
        pageName: "Home Page",
        pageUrl: "https://www.example.com"
    },
    'purchase': {
        guestHashedEmail: "hashed@example.com",
        browserUserAgent: "Mozilla/5.0",
        locale: "en-US",
        language: "English",
        orderTaxTotal: "5.00",
        orderShippingTotal: "2.50",
        orderId: "order123",
        orderRevenue: "100.00",
        orderPaymentMethod: "Credit Card",
        orderShippingMethod: "Standard Shipping",
        orderShippingZipPostalCode: "12345",
        orderShippingStateProvince: "NY",
        orderShippingCountry: "USA",
        orderPromoCode: "DISCOUNT10",
        productId: "prod123",
        productName: "Gadget",
        productSKU: "GADG123",
        productPrice: "95.00",
        skuQuantity: 1,
        currency: "USD",
        orderDiscount: "10.00",
        userId: "user123",
        userHashedEmail: "hashed@example.com"
    },
    'searchResultsPageView': {
        guestHashedEmail: "hashed@example.com",
        browserUserAgent: "Mozilla/5.0",
        locale: "en-US",
        language: "English",
        pageName: "Search Results",
        searchTerm: "laptops",
        searchResultsType: "Electronics",
        searchResultsCount: 150
    },
    'searchResultsClick': {
        guestHashedEmail: "hashed@example.com",
        browserUserAgent: "Mozilla/5.0",
        locale: "en-US",
        language: "English",
        searchTerm: "smartphones",
        searchResultsType: "Electronics",
        searchResultsCount: 200
    },
    'isErr': {
        errorType: "404",
        errorMessage: "Page not found",
        errorGuestFacing: "The page you are looking for does not exist.",
        guestHashedEmail: "hashed@example.com",
        browserUserAgent: "Mozilla/5.0",
        locale: "en-US",
        language: "English"
    },
    'isEmailSignupSuccess': {
        guestHashedEmail: "hashed@example.com",
        browserUserAgent: "Mozilla/5.0",
        locale: "en-US",
        language: "English",
        userId: "user123",
        userHashedEmail: "user@example.com"
    },
    'isCartView': {
        cartId: "12345",
        cartType: "regular",
        guestHashedEmail: "hashed@example.com",
        browserUserAgent: "Mozilla/5.0",
        locale: "en-US",
        language: "English",
        productId: "abc123",
        productName: "Laptop",
        productSKU: "LAP12345",
        productPrice: "1000.00",
        skuQuantity: 1,
        currency: "USD"
    },
    'isCartViewWithProductOutOfStock': {
        guestHashedEmail: "hashed@example.com",
        browserUserAgent: "Mozilla/5.0",
        locale: "en-US",
        language: "English",
        productId: "abc123",
        productName: "Laptop",
        productSKU: "LAP12345",
        productPrice: "1000.00",
        skuQuantity: 1,
        currency: "USD",
        productCartOutOfStockStatus: "OutOfStock"
    },
    'isCategoryPageView': {
        categoryName: "Electronics",
        guestHashedEmail: "hashed@example.com",
        browserUserAgent: "Mozilla/5.0",
        locale: "en-US",
        language: "English",
        pageName: "Electronic Devices",
        pageUrl: "https://www.example.com/electronics"
    },
    'isCheckoutPurchaseCompletePageView': {
        guestHashedEmail: "hashed@example.com",
        browserUserAgent: "Mozilla/5.0",
        locale: "en-US",
        language: "English",
        orderTaxTotal: "5.00",
        orderShippingTotal: "2.50",
        pageName: "Purchase Complete",
        productId: "abc123",
        productName: "Laptop",
        productSKU: "LAP12345",
        productPrice: "1000.00",
        skuQuantity: 1,
        currency: "USD"
    },
    "isCommonPageView": {
        guestHashedEmail: "hashed@example.com",
        browserUserAgent: "Mozilla/5.0",
        locale: "en-US",
        language: "English",
        pageName: "Checkout Shipping",
        productId: "12345",
        productName: "Widget",
        productSKU: "WIDGET-123",
        productPrice: "100.00",
        skuQuantity: 1,
        currency: "USD"
    },
    "isComponentImpression": {
        guestHashedEmail: "hashed@example.com",
        browserUserAgent: "Mozilla/5.0",
        locale: "en-US",
        language: "English",
        pageName: "Homepage"
    },
    "isPageView":{
        guestHashedEmail: "hashed@example.com",
        browserUserAgent: "Mozilla/5.0",
        locale: "en-US",
        language: "English",
        pageName: "Home",
        pageUrl: "https://www.example.com",
        campaignIdCID: "Campaign123",
        trafficSourceLastTouchChannel: "Social Media",
        trafficSourceReferrerType: "Direct",
        trafficSourceReferringUrl: "https://twitter.com",
        browserType: "Chrome",
        deviceType: "Desktop",
        userSessionId: "session12345",
        implementationMethod: "Manual",
        siteProperty: "Main Site",
        internalCampaignIdICID: "internalCampaign123"
      }

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

const NO_MATCH = "No_Match"
test_happyPath(jsons["click"], "CommonClick", "CommonClick")
test_CommonClick_sadpath_noLanguage(jsons["click"], NO_MATCH)
test_CommonClick_sadpath_wrongLanguage(jsons['click'], NO_MATCH)
test_happyPath(jsons["addCart"], "AddRemoveCart", "AddRemoveCart")
test_happyPath(jsons['filtersClick'], "FiltersClick", "FiltersClick")
test_happyPath(jsons['homePageView'], "HomePageView", "HomePageView")
test_happyPath(jsons['purchase'], "Purchase", "Purchase")
test_happyPath(jsons['searchResultsClick'], "SearchResultsClick", "SearchResultsClick")
test_happyPath(jsons['searchResultsPageView'], "SearchResultsPageView", "SearchResultsPageView")
test_happyPath(jsons['isErr'], "Err", "Err")
test_happyPath(jsons['isEmailSignupSuccess'], "EmailSignupSuccess", "EmailSignupSuccess")
test_happyPath(jsons['isCartView'], "CartView", "CartView")
test_happyPath(jsons['isCartViewWithProductOutOfStock'], "CartViewWithProductOutOfStock", "CartViewWithProductOutOfStock")
test_happyPath(jsons['isCategoryPageView'], "CategoryPageView", "CategoryPageView")
test_happyPath(jsons['isCommonPageView'], "CommonPageView", "CommonPageView")
test_happyPath(jsons['cartPageView'], "CartPageView", "CartPageView")
test_happyPath(jsons['isCheckoutPurchaseCompletePageView'], "CheckoutPurchaseCompletePageView", "CheckoutPurchaseCompletePageView")

test_happyPath(jsons['isComponentImpression'], "ComponentImpression", "ComponentImpression")



test_happyPath(jsons['isPageView'], "PageView", "PageView")



