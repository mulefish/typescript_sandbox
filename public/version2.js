
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

const getSelectLamEvent = () => {
    const selectElement = document.getElementById("event_select");
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const x = selectedOption.text
    return x
}

function changeEvent() {

    const x = getSelectLamEvent()
    document.getElementById("feedBack").innerHTML = "event " + x
        const small = jsons[x]
        const small_str = JSON.stringify(small, null, 2)
        document.getElementById("tdr_area").value = small_str
}

function createSelectList() {
    let html = '<select onchange="changeEvent()" id="event_select"><option>Pick something!!</option>'
    for ( let k in jsons ) {
        html += "<option>" + k + "</option>"
    }
    html += "</select>"
    document.getElementById("selecter").innerHTML = html
}