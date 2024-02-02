
const jsons = {
    "CommonClick": {
        interfaces: ["ExitLinkClick", "FAQClick", "LinkClick", "LiveChatClick", "NavigationLinkClick", "TopBannerClick"],
        extends: "extends TypeGuestEmail, TypeLink, TypeLocaleLanguage { }",
        payload: {
            guestHashedEmail: "hashed@example.com",
            browserUserAgent: "Mozilla/5.0",
            linkClickUrl: "https://example.com",
            linkClickText: "Click Here",
            locale: "en-US",
            language: "English"
        }
    },
    "AddRemoveCart": {
        interfaces: ["AddToCart", "RemoveFromCart"],
        extends: "extends TypeGuestEmail, TypeLocaleLanguage, TypeProduct { }",
        payload: {
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
        }
    },
    "FiltersClick": {
        interfaces: ["FiltersClick"],
        extends: "extends TypeFilterUniques, TypeGuestEmail, TypeLocaleLanguage { }",
        payload: {
            filterType: "category",
            filterValue: "electronics",
            filterState: "selected",
            guestHashedEmail: "hashed@example.com",
            browserUserAgent: "Mozilla/5.0",
            locale: "en-US",
            language: "English"
        }
    },
    "CartPageView": {
        interfaces: ["CartPageView"],
        extends: "extends TypeCart, TypeCartTotalQuantity, TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypeProduct { }",
        payload: {

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
        }
    },
    'HomePageView': {
        interfaces: ["HomePageView"],
        extends: "extends TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypePageUrl { }",

        payload: {

            guestHashedEmail: "hashed@example.com",
            browserUserAgent: "Mozilla/5.0",
            locale: "en-US",
            language: "English",
            pageName: "Home Page",
            pageUrl: "https://www.example.com"
        }
    },
    "Purchase": {
        interfaces: ["Purchase"],
        extends: "extends TypeGuestEmail, TypeLocaleLanguage, TypeOrderTotal, TypeProductUniques, TypeUserId { }",
        payload: {
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
        }
    },
    'SearchResultsPageView': {
        interfaces: ["SearchResultsPageView"],
        extends: "extends TypeGuestEmail, TypeLocaleLanguage, TypeSearch, TypePageName { }",
        payload: {

            guestHashedEmail: "hashed@example.com",
            browserUserAgent: "Mozilla/5.0",
            locale: "en-US",
            language: "English",
            pageName: "Search Results",
            searchTerm: "laptops",
            searchResultsType: "Electronics",
            searchResultsCount: 150
        }
    },
    'SearchResultsClick': {
        interfaces: ["SearchResultsClick"],
        extends: "extends TypeGuestEmail, TypeLocaleLanguage, TypeSearch { }",

        payload: {

            guestHashedEmail: "hashed@example.com",
            browserUserAgent: "Mozilla/5.0",
            locale: "en-US",
            language: "English",
            searchTerm: "smartphones",
            searchResultsType: "Electronics",
            searchResultsCount: 200
        }
    },
    'Err': {
        interfaces: ["Err"],
        extends: "extends Type, TypeGuestEmail, TypeLocaleLanguage { }",

        payload: {

            errorType: "404",
            errorMessage: "Page not found",
            errorGuestFacing: "The page you are looking for does not exist.",
            guestHashedEmail: "hashed@example.com",
            browserUserAgent: "Mozilla/5.0",
            locale: "en-US",
            language: "English"
        }
    },

    'EmailSignupSuccess': {
        interfaces: ["EmailSignupSuccess"],
        extends: "extends TypeGuestEmail, TypeLocaleLanguage, TypeUserId { }",

        payload: {

            guestHashedEmail: "hashed@example.com",
            browserUserAgent: "Mozilla/5.0",
            locale: "en-US",
            language: "English",
            userId: "user123",
            userHashedEmail: "user@example.com"
        }
    },
    'CartView': {
        interfaces: ["CartView"],
        extends: "extends TypeCart, TypeGuestEmail, TypeLocaleLanguage, TypeProduct { }",
        payload: {

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
        }
    },

    'CartViewWithProductOutOfStock': {

        interfaces: ["CartViewWithProductOutOfStock"],
        extends: "extends TypeGuestEmail, TypeLocaleLanguage, TypeProduct, TypeProductOutOfStock { }",

        payload: {

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
        }
    },
    'CategoryPageView': {
        interfaces: ["CategoryPageView"],
        extends: "extends TypeCategoryName, TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypePageUrl { }",

        payload: {

            categoryName: "Electronics",
            guestHashedEmail: "hashed@example.com",
            browserUserAgent: "Mozilla/5.0",
            locale: "en-US",
            language: "English",
            pageName: "Electronic Devices",
            pageUrl: "https://www.example.com/electronics"
        }
    },
    'CheckoutPurchaseCompletePageView': {
        interfaces: ["CheckoutPurchaseCompletePageView"],
        extends: "extends TypeGuestEmail, TypeLocaleLanguage, TypeOrderTotal, TypePageName, TypeProduct { }",
        payload: {

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
        }
    },
    "CommonPageView": {
        interfaces: ["OrderReviewPageView, ProductDetailPageView,CheckoutPaymentPageView,CheckoutShippingPageView"],
        extends: "extends TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypeProduct { }",
        payload: {
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
        }
    },
    "ComponentImpression": {
        interfaces: ["ComponentImpression"],
        extends: "extends TypeGuestEmail, TypeLocaleLanguage, TypePageName { }",

        payload: {

            guestHashedEmail: "hashed@example.com",
            browserUserAgent: "Mozilla/5.0",
            locale: "en-US",
            language: "English",
            pageName: "Homepage"
        }
    },

    "PageView": {
        interfaces: ["PageView"],
        extends: "extends TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypePageUrl, TypePageViewUniques { }",

        payload: {

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
}

const getSelectLamEvent = () => {
    const selectElement = document.getElementById("event_select");
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const x = selectedOption.text
    return x
}

function changeEvent() {
    const x = getSelectLamEvent()
    doit(x)
}
function doit(x) {
    document.getElementById("resultViewer").innerHTML = ""
    document.getElementById("tdr_area").value = ""
    document.getElementById("interfaces").innerHTML = ""
    document.getElementById("extends").innerHTML = ""
    document.getElementById("milliseconds").innerHTML = ""
    document.getElementById("shouldBe").innerHTML = ""

    if (jsons.hasOwnProperty(x)) {
        document.getElementById("feedBack").innerHTML = "event " + x
        const payload = jsons[x].payload
        const payload_as_string = JSON.stringify(payload, null, 2)
        document.getElementById("tdr_area").value = payload_as_string
        document.getElementById("interfaces").innerHTML = jsons[x].interfaces
        document.getElementById("extends").innerHTML = jsons[x].extends
        document.getElementById("shouldBe").innerHTML = x

        verify()
    }
}

function createSelectList() {
    let html = '<select onchange="changeEvent()" id="event_select"><option>Pick something</option>'
    let keys = Object.keys(jsons)
    keys.sort()
    // for (let k in jsons) {
    keys.forEach((k) => {
        html += "<option>" + k + "</option>"
    })
    html += "</select>"
    document.getElementById("selecter").innerHTML = html
}


// Function to pause for a given time
function pause(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function cycle() {

    let keys = Object.keys(jsons)
    for ( let i = 0 ; i < keys.length; i++ ) {
        console.log( i + " of " + keys.length)
        const k = keys[i]
        doit(k)
        await pause(1000);
    }
}
