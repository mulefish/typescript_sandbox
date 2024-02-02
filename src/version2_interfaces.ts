
type TypeProduct = {
    productId: string;
    productName: string;
    productSKU: string;
    productPrice: string;
    skuQuantity: number;
    currency: string;
};

type TypePageName = {
    pageName: string;
};


type TypeLocaleLanguage = {
    locale: string;
    language: string;
};

type TypeGuestEmail = {
    guestHashedEmail: string;
    browserUserAgent: string;
};


type TypeCart = {
    cartId: string;
    cartType: string;
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
    orderTaxTotal: string;
    orderShippingTotal: string;
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

export interface CheckoutPurchaseCompletePageView extends TypeGuestEmail, TypeLocaleLanguage, TypeOrderTotal, TypePageName, TypeProduct { }
export interface ComponentImpression extends TypeGuestEmail, TypeLocaleLanguage, TypePageName { }


//
export interface CategoryPageView extends TypeCategoryName, TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypePageUrl { }
export interface CartViewWithProductOutOfStock extends TypeGuestEmail, TypeLocaleLanguage, TypeProduct, TypeProductOutOfStock { }
export interface CartView extends TypeCart, TypeGuestEmail, TypeLocaleLanguage, TypeProduct { } 
export interface CartPageView extends TypeCart, TypeCartTotalQuantity, TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypeProduct { }
export interface EmailSignupSuccess extends TypeGuestEmail, TypeLocaleLanguage, TypeUserId { }
export interface Purchase extends           TypeGuestEmail, TypeLocaleLanguage, TypeOrderTotal, TypeProductUniques, TypeUserId { }
export interface Err extends Type, TypeGuestEmail, TypeLocaleLanguage { }
export interface SearchResultsClick    extends TypeGuestEmail, TypeLocaleLanguage, TypeSearch { }
export interface SearchResultsPageView extends TypeGuestEmail, TypeLocaleLanguage, TypeSearch, TypePageName{ }
export interface PageView extends TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypePageUrl, TypePageViewUniques { }
export interface HomePageView extends TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypePageUrl { }
export interface CartPageView extends TypeCart, TypeCartTotalQuantity, TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypeProduct { }
export interface FiltersClick extends TypeFilterUniques, TypeGuestEmail, TypeLocaleLanguage { }



export interface CommonPageView extends TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypeProduct { }

interface OrderReviewPageView extends       TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypeProduct { }
interface ProductDetailPageView extends     TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypeProduct { }
interface CheckoutPaymentPageView  extends  TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypeProduct { }
interface CheckoutShippingPageView  extends TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypeProduct { }


// 




export interface CommonClick  extends TypeGuestEmail, TypeLink, TypeLocaleLanguage { }
interface ExitLinkClick       extends TypeGuestEmail, TypeLink, TypeLocaleLanguage { }
interface FAQClick            extends TypeGuestEmail, TypeLink, TypeLocaleLanguage { }
interface LinkClick           extends TypeGuestEmail, TypeLink, TypeLocaleLanguage { }
interface LiveChatClick       extends TypeGuestEmail, TypeLink, TypeLocaleLanguage { }
interface NavigationLinkClick extends TypeGuestEmail, TypeLink, TypeLocaleLanguage { }
interface TopBannerClick      extends TypeGuestEmail, TypeLink, TypeLocaleLanguage { }



// AddRemoveCart
export interface AddRemoveCart extends TypeGuestEmail, TypeLocaleLanguage, TypeProduct { }
interface AddToCart                 extends TypeGuestEmail, TypeLocaleLanguage, TypeProduct { }
interface RemoveFromCart            extends TypeGuestEmail, TypeLocaleLanguage, TypeProduct { }


