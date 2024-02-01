import { isValidAddToCart } from './version2_validater';
import {
    AddToCart,
    CartPageView,
    CartView,
    CartViewWithProductOutOfStock,
    CategoryPageView,
    CheckoutPaymentPageView,
    CheckoutPurchaseCompletePageView,
    CheckoutShippingPageView,
    ExitLinkClick,
    HomePageView,
    OrderReviewPageView,
    PageView,
    ProductDetailPageView,
    Purchase,
    RemoveFromCart,
    SearchResultsPageView,
    Err,
    SearchResultsClick,
    ComponentImpression,
    EmailSignupSuccess,
    FAQClick,
    FiltersClick,
    LinkClick,
    LiveChatClick,
    NavigationLinkClick,
    TopBannerClick
}
    from './version2_interfaces';

function verdict(a: any, b: any, msg: string) {
    let result: string = "FAIL"
    if (JSON.stringify(a) === JSON.stringify(b)) {
        result = "PASS"
    }
    console.log(`${result} ${msg}`)
}



    function test_allInterfaces(): { [key: string]: any } {
    

    try {
        const addToCart_Json: AddToCart = {
            // TypeProduct properties
            productId: "112233",
            productName: "High-Quality Headphones",
            productSKU: "HQH-789",
            productPrice: "150.00",
            skuQuantity: 1,
            currency: "USD",

            // TypeLocaleLanguage properties
            locale: "en-US",
            language: "English",

            // TypeGuestEmail properties
            guestHashedEmail: "uniquehashedemail@example.com",
            browserUserAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like"
        };

        const cartPageView_Json: CartPageView = {
            // TypeProduct properties
            productId: "98765",
            productName: "Super Widget",
            productSKU: "SW-456",
            productPrice: "49.99",
            skuQuantity: 1,
            currency: "USD",

            // TypeLocaleLanguage properties
            locale: "en-GB",
            language: "English",

            // TypeCart properties
            cartId: "cart-54321",
            cartType: "Online",

            // TypeGuestEmail properties
            guestHashedEmail: "anotherhashedemail@example.com",
            browserUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15",

            // TypeCartTotalQuantity properties
            cartTotalQuantity: 3,

            // TypePageName properties
            pageName: "Cart Page"
        };

        const cartViewInstance_Json: CartView = {
            // TypeProduct properties
            productId: "12345",
            productName: "Awesome Gadget",
            productSKU: "AG-123",
            productPrice: "99.99",
            skuQuantity: 2,
            currency: "USD",

            // TypeLocaleLanguage properties
            locale: "en-US",
            language: "English",

            // TypeCart properties
            cartId: "cart-67890",
            cartType: "Standard",

            // TypeGuestEmail properties
            guestHashedEmail: "hashedemail@example.com",
            browserUserAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
        };

        const cartViewWithProductOutOfStock_Json: CartViewWithProductOutOfStock = {
            // TypeProduct properties
            productId: "445566",
            productName: "Ergonomic Keyboard",
            productSKU: "ERG-101",
            productPrice: "80.00",
            skuQuantity: 1,
            currency: "USD",

            // TypeLocaleLanguage properties
            locale: "fr-FR",
            language: "French",

            // TypeGuestEmail properties
            guestHashedEmail: "securehashedemail@example.com",
            browserUserAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",

            // TypeProductOutOfStock properties
            productCartOutOfStockStatus: "OutOfStock"
        };

        const categoryPageView_Json: CategoryPageView = {
            // TypeLocaleLanguage properties
            locale: "en-US",
            language: "English",

            // TypePageName properties
            pageName: "Electronics",

            // TypePageUrl properties
            pageUrl: "https://www.examplestore.com/electronics",

            // TypeCategoryName properties
            categoryName: "Electronics",

            // TypeGuestEmail properties
            guestHashedEmail: "uniquehashedemail@example.com",
            browserUserAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        };
        const checkoutPaymentPageView_Json: CheckoutPaymentPageView = {
            // TypeProduct properties
            productId: "78910",
            productName: "Smartwatch Fitness Tracker",
            productSKU: "SFT-202",
            productPrice: "199.99",
            skuQuantity: 1,
            currency: "USD",

            // TypeLocaleLanguage properties
            locale: "en-US",
            language: "English",

            // TypePageName properties
            pageName: "Checkout - Payment",

            // TypeGuestEmail properties
            guestHashedEmail: "encryptedemail@example.com",
            browserUserAgent: "Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36"
        };

        const checkoutPurchaseCompletePageView_Json: CheckoutPurchaseCompletePageView = {
            // TypeProduct properties
            productId: "32109",
            productName: "Wireless Earbuds",
            productSKU: "WEB-303",
            productPrice: "120.00",
            skuQuantity: 2,
            currency: "USD",

            // TypeLocaleLanguage properties
            locale: "en-CA",
            language: "English",

            // TypeOrderTotal properties
            orderTaxTotal: 10.00,
            orderShippingTotal: 5.00,

            // TypePageName properties
            pageName: "Checkout - Purchase Complete",

            // TypeGuestEmail properties
            guestHashedEmail: "secureemailhash@example.com",
            browserUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36"
        };

        const checkoutShippingPageView_Json: CheckoutShippingPageView = {
            productId: "65432",
            productName: "Bluetooth Speaker",
            productSKU: "BTS-404",
            productPrice: "70.00",
            skuQuantity: 1,
            currency: "USD",
            locale: "en-US",
            language: "English",
            pageName: "Checkout - Shipping",
            guestHashedEmail: "useremailhash@example.com",
            browserUserAgent: "user-agent-string"
        };

        const exitLinkClick_Json: ExitLinkClick = {
            locale: "en-US",
            language: "English",
            linkClickUrl: "https://externalwebsite.com",
            linkClickText: "Visit our partner",
            guestHashedEmail: "useremailhash@example.com",
            browserUserAgent: "user-agent-string"
        };

        const homePageView_Json: HomePageView = {
            locale: "en-US",
            language: "English",
            pageName: "Home",
            pageUrl: "https://www.examplestore.com",
            guestHashedEmail: "useremailhash@example.com",
            browserUserAgent: "user-agent-string"
        };

        const orderReviewPageView_Json: OrderReviewPageView = {
            productId: "98765",
            productName: "Gaming Mouse",
            productSKU: "GM-508",
            productPrice: "59.99",
            skuQuantity: 1,
            currency: "USD",
            locale: "en-US",
            language: "English",
            pageName: "Checkout - Review Order",
            guestHashedEmail: "useremailhash@example.com",
            browserUserAgent: "user-agent-string"
        };

        const pageView_Json: PageView = {
            locale: "en-US",
            language: "English",
            pageName: "About Us",
            pageUrl: "https://www.examplestore.com/about",
            guestHashedEmail: "useremailhash@example.com",
            browserUserAgent: "user-agent-string",
            campaignIdCID: "CID123",
            trafficSourceLastTouchChannel: "Social Media",
            trafficSourceReferrerType: "Direct",
            trafficSourceReferringUrl: "https://twitter.com",
            browserType: "Chrome",
            deviceType: "Desktop",
            userSessionId: "session123",
            implementationMethod: "JavaScript",
            siteProperty: "Main Site",
            internalCampaignIdICID: "ICID456"
        };

        const productDetailPageView_Json: ProductDetailPageView = {
            productId: "123456",
            productName: "LED Desk Lamp",
            productSKU: "LDL-789",
            productPrice: "45.00",
            skuQuantity: 1,
            currency: "USD",
            locale: "en-US",
            language: "English",
            pageName: "Product Detail - LED Desk Lamp",
            guestHashedEmail: "useremailhash@example.com",
            browserUserAgent: "user-agent-string"
        };

        const purchase_Json: Purchase = {
            // TypeLocaleLanguage properties
            locale: "en-US",
            language: "English",

            // TypeGuestEmail properties
            guestHashedEmail: "encryptedemail@example.com",
            browserUserAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",

            // TypeOrderTotal properties
            orderTaxTotal: 15.00,
            orderShippingTotal: 5.00,

            // TypeProductUniques properties
            orderId: "order123456",
            orderRevenue: "220.00",
            orderPaymentMethod: "Credit Card",
            orderShippingMethod: "Express Delivery",
            orderShippingZipPostalCode: "90001",
            orderShippingStateProvince: "CA",
            orderShippingCountry: "USA",
            orderPromoCode: "NEWYEAR2023",
            productId: "987654",
            productName: "Smart Fitness Watch",
            productSKU: "SFW-321",
            productPrice: "200.00",
            skuQuantity: 1,
            currency: "USD",
            orderDiscount: "20.00",

            // TypeUserId properties
            userId: "user12345",
            userHashedEmail: "userencryptedemail@example.com"
        };



        const removeFromCart_Json: RemoveFromCart = {
            productId: "654321",
            productName: "Wireless Mouse",
            productSKU: "WM-222",
            productPrice: "25.00",
            skuQuantity: 1,
            currency: "USD",
            locale: "en-US",
            language: "English",
            guestHashedEmail: "useremailhash@example.com",
            browserUserAgent: "user-agent-string"
        };

        const searchResultsPageView_Json: SearchResultsPageView = {
            // TypeLocaleLanguage properties
            locale: "en-US",
            language: "English",

            // TypeSearch properties
            searchTerm: "wireless headphones",
            searchResultsType: "Product",
            searchResultsCount: 25,

            // TypePageName properties
            pageName: "Search Results",

            // TypeGuestEmail properties
            guestHashedEmail: "hashedemail@example.com",
            browserUserAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36"
        };


        const err_Json: Err = {
            // Type properties for error handling
            errorType: "404 NotFound",
            errorMessage: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
            errorGuestFacing: "Oops! We can't seem to find the page you're looking for.",

            // TypeLocaleLanguage properties
            locale: "en-US",
            language: "English",

            // TypeGuestEmail properties
            guestHashedEmail: "userhash@example.com",
            browserUserAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
        };

        const searchResultsClick_Json: SearchResultsClick = {
            // TypeSearch properties
            searchTerm: "eco-friendly water bottles",
            searchResultsType: "Product",
            searchResultsCount: 6,

            // Assuming the user clicked on a result that was part of a list of 50,
            // but we don't capture the specific result's count in this click.

            // TypeLocaleLanguage properties
            locale: "en-GB",
            language: "English",

            // TypeGuestEmail properties
            guestHashedEmail: "uniqueuserhash@example.com",
            browserUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36"
        };

        const componentImpression_Json: ComponentImpression = {
            // TypePageName properties
            pageName: "Homepage - Featured Products",

            // TypeLocaleLanguage properties
            locale: "en-US",
            language: "English",

            // TypeGuestEmail properties
            guestHashedEmail: "uniquehash@example.com",
            browserUserAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
        };


        const emailSignupSuccess_Json: EmailSignupSuccess = {
            // TypeUserId properties
            userId: "user123456",
            userHashedEmail: "hashedemailsignup@example.com",

            // TypeLocaleLanguage properties
            locale: "en-US",
            language: "English",

            // TypeGuestEmail properties
            guestHashedEmail: "hashedemailsignup@example.com",
            browserUserAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3"

        }

        const faqClick_Json: FAQClick = {
            // TypeLink properties
            linkClickUrl: "https://www.example.com/faq",
            linkClickText: "Frequently Asked Questions",

            // TypeLocaleLanguage properties
            locale: "en-US",
            language: "English",

            // TypeGuestEmail properties
            guestHashedEmail: "userhash@example.com",
            browserUserAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; "
        };

        const filtersClick_Json: FiltersClick = {
            // TypeFilterUniques properties
            filterType: "Brand",
            filterValue: "Acme Corp",
            filterState: "Selected",

            // TypeLocaleLanguage properties
            locale: "en-US",
            language: "English",

            // TypeGuestEmail properties
            guestHashedEmail: "userfilterclick@example.com",
            browserUserAgent: "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)"
        };


        const linkClick_Json: LinkClick = {
            // TypeLink properties
            linkClickUrl: "https://www.example.com/about-us",
            linkClickText: "About Us",

            // TypeLocaleLanguage properties
            locale: "en-US",
            language: "English",

            // TypeGuestEmail properties
            guestHashedEmail: "userlinkclick@example.com",
            browserUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36"
        };

        const liveChatClick_Json: LiveChatClick = {
            // TypeLink properties
            linkClickUrl: "https://www.example.com/live-chat",
            linkClickText: "Chat with Support",

            // TypeLocaleLanguage properties
            locale: "en-US",
            language: "English",

            // TypeGuestEmail properties
            guestHashedEmail: "userlivechatclick@example.com",
            browserUserAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36"
        };

        const navigationLinkClick_Json: NavigationLinkClick = {
            // TypeLink properties
            linkClickUrl: "https://www.example.com/products",
            linkClickText: "Our Products",

            // TypeLocaleLanguage properties
            locale: "en-US",
            language: "English",

            // TypeGuestEmail properties
            guestHashedEmail: "usernavlinkclick@example.com",
            browserUserAgent: "Mozilla/5.0 (Linux; Android 9; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.92 Mobile Safari/537.36"
        };

        const topBannerClick_Json: TopBannerClick = {
            // TypeLink properties
            linkClickUrl: "https://www.example.com/special-offer",
            linkClickText: "Special Offer",

            // TypeLocaleLanguage properties
            locale: "en-US",
            language: "English",

            // TypeGuestEmail properties
            guestHashedEmail: "usertopbannerclick@example.com",
            browserUserAgent: "Mozilla/5.0 (iPad; CPU OS 13_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.1 Mobile/15E148 Safari/604.1"
        };

        const goodObjects: { [key: string]: any } = {};
        goodObjects['addToCart'] = addToCart_Json
        goodObjects['cartPageView'] = cartPageView_Json
        goodObjects['cartViewInstance'] = cartViewInstance_Json
        goodObjects['cartViewWithProductOutOfStock'] = cartViewWithProductOutOfStock_Json
        goodObjects['categoryPageView'] = categoryPageView_Json
        goodObjects['checkoutPaymentPageView'] = checkoutPaymentPageView_Json
        goodObjects['checkoutPurchaseCompletePageView'] = checkoutPurchaseCompletePageView_Json
        goodObjects['checkoutShippingPageView'] = checkoutShippingPageView_Json
        goodObjects['exitLinkClick'] = exitLinkClick_Json
        goodObjects['homePageView'] = homePageView_Json
        goodObjects['orderReviewPageView'] = orderReviewPageView_Json
        goodObjects['pageView'] = pageView_Json
        goodObjects['productDetailPageView'] = productDetailPageView_Json
        goodObjects['purchase'] = purchase_Json
        goodObjects['removeFromCart'] = removeFromCart_Json
        goodObjects['searchResultsPageView'] = searchResultsPageView_Json
        goodObjects['err'] = err_Json
        goodObjects['searchResultsClick'] = searchResultsClick_Json
        goodObjects['componentImpression'] = componentImpression_Json
        goodObjects['emailSignupSuccess'] = emailSignupSuccess_Json
        goodObjects['faqClick'] = faqClick_Json
        goodObjects['filtersClick'] = filtersClick_Json
        goodObjects['linkClick'] = linkClick_Json
        goodObjects['liveChatClick'] = liveChatClick_Json
        goodObjects['navigationLinkClick'] = navigationLinkClick_Json
        goodObjects['topBannerClick'] = topBannerClick_Json

        for (let k in goodObjects) {
            console.log(k)
        }
        verdict(true, true, "test_allInterfaces")
        return goodObjects
    } catch (boom) {
        verdict(true, false, "test_allInterfaces")
        return {}
    }


}

function test_addToCart(candidate: any) {
    for ( let k in candidate) {
    //     console.log( k )
    }
}

const objectJsonMap = test_allInterfaces()
test_addToCart(objectJsonMap["addToCart"])



