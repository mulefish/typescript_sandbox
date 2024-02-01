type TypeProduct = {
    productId: string;
    productName: string;
    productSKU: string;
    productPrice: string;
    skuQuantity: number;
    currency: string;
};

type TypeLocaleLanguage = {
    locale: string;
    language: string;
};

type TypeCart = {
    cartId: string;
    cartType: string;
};

type TypeGuestEmail = {
    guestHashedEmail: string;
    browserUserAgent: string;
};

type TypePageName = {
    pageName: string;
};

type TypePageUrl = {
    pageUrl: string;
};

type TypeSearch = {
    searchTerm: string;
    searchResultsType: string;
    searchResultsCount: number;
};

type TypeOrderTotal = {
    orderTaxTotal: number;
    orderShippingTotal: number;
};

type TypeLink = {
    linkClickUrl: string;
    linkClickText: string;
};

type TypeCategoryName = {
    categoryName: string;
};

type TypeCartTotalQuantity = {
    cartTotalQuantity: number;
};

type TypeProductOutOfStock = {
    productCartOutOfStockStatus: string;
};

type TypeProductUniques = {
    orderId: string;
    orderRevenue: string;
    orderPaymentMethod: string;
    orderShippingMethod: string;
    orderShippingZipPostalCode: string;
    orderShippingStateProvince: string;
    orderShippingCountry: string;
    orderPromoCode: string;
    productId: string;
    productName: string;
    productSKU: string;
    productPrice: string;
    skuQuantity: number;
    currency: string;
    orderDiscount: string;
};

type TypeUserId = {
    userId: string;
    userHashedEmail: string;
};

type TypePageViewUniques = {
    campaignIdCID: string;
    trafficSourceLastTouchChannel: string;
    trafficSourceReferrerType: string;
    trafficSourceReferringUrl: string;
    browserType: string;
    deviceType: string;
    userSessionId: string;
    implementationMethod: string;
    siteProperty: string;
    internalCampaignIdICID: string;
};

type Type = {
    errorType: string;
    errorMessage: string;
    errorGuestFacing: string;
};

type TypeFilterUniques = {
    filterType: string;
    filterValue: string;
    filterState: string;
};

// p0
export interface AddToCart extends TypeProduct, TypeLocaleLanguage, TypeGuestEmail { }
export interface CartPageView extends TypeProduct, TypeLocaleLanguage, TypeCart, TypeGuestEmail, TypeCartTotalQuantity, TypePageName { }
export interface CartView extends TypeProduct, TypeLocaleLanguage, TypeCart, TypeGuestEmail { }
export interface CartViewWithProductOutOfStock extends TypeProduct, TypeLocaleLanguage, TypeGuestEmail, TypeProductOutOfStock { }
export interface CategoryPageView extends TypeLocaleLanguage, TypePageName, TypePageUrl, TypeCategoryName, TypeGuestEmail { }
export interface CheckoutPaymentPageView extends TypeProduct, TypeLocaleLanguage, TypePageName, TypeGuestEmail { }
export interface CheckoutPurchaseCompletePageView extends TypeProduct, TypeLocaleLanguage, TypeOrderTotal, TypePageName, TypeGuestEmail { }
export interface CheckoutShippingPageView extends TypeProduct, TypeLocaleLanguage, TypePageName, TypeGuestEmail { }
export interface ExitLinkClick extends TypeLocaleLanguage, TypeLink, TypeGuestEmail { }
export interface HomePageView extends TypeLocaleLanguage, TypePageName, TypePageUrl, TypeGuestEmail { }
export interface OrderReviewPageView extends TypeProduct, TypeLocaleLanguage, TypePageName, TypeGuestEmail { }
export interface PageView extends TypeLocaleLanguage, TypePageName, TypePageUrl, TypeGuestEmail, TypePageViewUniques { }
export interface ProductDetailPageView extends TypeProduct, TypeLocaleLanguage, TypePageName, TypeGuestEmail { }
export interface Purchase extends TypeLocaleLanguage, TypeGuestEmail, TypeOrderTotal, TypeProductUniques, TypeUserId { }
export interface RemoveFromCart extends TypeProduct, TypeLocaleLanguage, TypeGuestEmail { }
export interface SearchResultsPageView extends TypeLocaleLanguage, TypeSearch, TypePageName, TypeGuestEmail { }
// p1 
export interface Err extends Type, TypeLocaleLanguage, TypeGuestEmail { }
export interface SearchResultsClick extends TypeSearch, TypeLocaleLanguage, TypeGuestEmail { }
// p2
export interface ComponentImpression extends TypePageName, TypeLocaleLanguage, TypeGuestEmail { }
export interface EmailSignupSuccess extends TypeUserId, TypeLocaleLanguage, TypeGuestEmail { }
export interface FAQClick extends TypeLink, TypeLocaleLanguage, TypeGuestEmail { }
export interface FiltersClick extends TypeFilterUniques, TypeLocaleLanguage, TypeGuestEmail { }
export interface LinkClick extends TypeLink, TypeLocaleLanguage, TypeGuestEmail { }
export interface LiveChatClick extends TypeLink, TypeLocaleLanguage, TypeGuestEmail { }
export interface NavigationLinkClick extends TypeLink, TypeLocaleLanguage, TypeGuestEmail { }
export interface TopBannerClick extends TypeLink, TypeLocaleLanguage, TypeGuestEmail { }
