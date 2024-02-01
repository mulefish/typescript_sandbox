
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

function testAllInterfaces() {
    const addToCartExample: AddToCart = {
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
        browserUserAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
    };
    
    const cartPageViewExample: CartPageView = {
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
    
    const cartViewInstance: CartView = {
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
    
    const cartViewWithProductOutOfStockExample: CartViewWithProductOutOfStock = {
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
    
    console.log(addToCartExample)
    console.log(cartPageViewExample)
    console.log(cartViewInstance)
    console.log(cartViewWithProductOutOfStockExample)

}

testAllInterfaces() 