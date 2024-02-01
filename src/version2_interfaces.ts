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


// uniques

export interface CartPageView extends TypeCart, TypeCartTotalQuantity, TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypeProduct { }
export interface CartView extends TypeCart, TypeGuestEmail, TypeLocaleLanguage, TypeProduct { } 
export interface CartViewWithProductOutOfStock extends TypeGuestEmail, TypeLocaleLanguage, TypeProduct, TypeProductOutOfStock { }
// 
export interface CategoryPageView extends TypeCategoryName, TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypePageUrl { }
export interface CheckoutPurchaseCompletePageView extends TypeGuestEmail, TypeLocaleLanguage, TypeOrderTotal, TypePageName, TypeProduct { }
export interface ComponentImpression extends TypeGuestEmail, TypeLocaleLanguage, TypePageName { }
export interface EmailSignupSuccess extends TypeGuestEmail, TypeLocaleLanguage, TypeUserId { }
export interface Err extends Type, TypeGuestEmail, TypeLocaleLanguage { }
export interface SearchResultsClick extends TypeGuestEmail, TypeLocaleLanguage, TypeSearch { }
export interface SearchResultsPageView extends TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypeSearch { }
export interface Purchase extends TypeGuestEmail, TypeLocaleLanguage, TypeOrderTotal, TypeProductUniques, TypeUserId { }
export interface PageView extends TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypePageUrl, TypePageViewUniques { }
export interface HomePageView extends TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypePageUrl { }
export interface FiltersClick extends TypeFilterUniques, TypeGuestEmail, TypeLocaleLanguage { }


// duplicates
export interface OrderReviewPageView extends TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypeProduct { }
export interface ProductDetailPageView extends TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypeProduct { }
export interface CheckoutPaymentPageView extends TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypeProduct { }
export interface CheckoutShippingPageView extends TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypeProduct { }
//
export interface AddToCart extends TypeGuestEmail, TypeLocaleLanguage, TypeProduct { }
export interface RemoveFromCart extends TypeGuestEmail, TypeLocaleLanguage, TypeProduct { }
//
export interface ExitLinkClick extends TypeGuestEmail, TypeLink, TypeLocaleLanguage { }
export interface FAQClick extends TypeGuestEmail, TypeLink, TypeLocaleLanguage { }
export interface LinkClick extends TypeGuestEmail, TypeLink, TypeLocaleLanguage { }
export interface LiveChatClick extends TypeGuestEmail, TypeLink, TypeLocaleLanguage { }
export interface NavigationLinkClick extends TypeGuestEmail, TypeLink, TypeLocaleLanguage { }
export interface TopBannerClick extends TypeGuestEmail, TypeLink, TypeLocaleLanguage { }




