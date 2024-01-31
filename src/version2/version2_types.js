


const TypeProduct = {
    "Product ID": "abc",
    "Product Name": "abc",
    "Product SKU": "abc",
    "Product Price": "abc",
    "SKU Quantity": "number",
    "Currency": "abc"
};
const TypeLocaleLanguage = {
    "Locale": "abc",
    "Language": "abc"
}

const TypeCart = {
    "Cart ID": "abc",
    "Cart Type": "abc"
}

const TypeGuestEmail = {
    "Guest Hashed Email": "abc",
    "Browser User Agent": "abc"
}

const TypePageName = {
    "Page Name": "abc"
}
const TypePageUrl = {
    "Page URL": "abc"
}
const TypeSearch = {
    "Search Term": "abc",
    "Search Results Type": "abc",
    "Search Results Count": "number"
}
const TypeOrderTotal = {
    "Order Tax Total": "number",
    "Order Shipping Total": "number"
}
const TypeLink = {
    "Link Click URL": "abc",
    "Link Click Text": "abc"
}
const TypeCategoryName = {
    "Category Name": "abc"
}
const TypeCartTotalQuantity = {
    "Cart Total Quantity": "number"
}
const TypeProductOutOfStock = {
    "Product Cart Out of Stock Status": "abc"
}

const TypeProductUniques = {

    "Order ID": "abc",
    "Order Revenue": "abc",
    "Order Payment Method": "abc",
    "Order Shipping Method": "abc",
    "Order Shipping Zip / Postal Code": "abc",
    "Order Shipping State / Province": "abc",
    "Order Shipping Country": "abc",
    "User ID": "abc",
    "Order Promo Code": "abc",
    "Product ID": "abc",
    "Product Name": "abc",
    "Product SKU": "abc",
    "Product Price": "abc",
    "SKU Quantity": "number",
    "Currency": "abc",
    "User Hashed Email": "abc",
    "Order Discount": "money",
}

const TypePageViewUniques = {
    "Campaign ID (CID)": "string",
    "Traffic Source Last Touch Channel": "string",
    "Traffic Source Referrer Type": "string",
    "Traffic Source Referring URL": "string",
    "Browser Type": "string",
    "Device Type": "string",
    "User Session ID": "string",
    "Implementation Method": "string",
    "Site Property": "string",
    "Internal Campaign ID (ICID)": "string"
}



const start = {
    add_to_cart: [TypeProduct, TypeLocaleLanguage, TypeGuestEmail],
    cart_page_view: [TypeProduct, TypeLocaleLanguage, TypeCart, TypeGuestEmail, TypeCartTotalQuantity, TypePageName],
    cart_view: [TypeProduct, TypeLocaleLanguage, TypeCart, TypeGuestEmail],
    cart_view_with_product_out_of_stock: [TypeProduct, TypeLocaleLanguage, TypeGuestEmail, TypeProductOutOfStock],
    category_page_view: [TypeLocaleLanguage, TypePageName, TypePageUrl, TypeCategoryName, TypeGuestEmail],
    checkout_payment_page_view: [TypeProduct, TypeLocaleLanguage, TypePageName, TypeGuestEmail],
    checkout_purchase_complete_page_view: [TypeProduct, TypeLocaleLanguage, TypeOrderTotal, TypePageName, TypeGuestEmail],
    checkout_shipping_page_view: [TypeProduct, TypeLocaleLanguage, TypePageName, TypeGuestEmail],
    exit_link_click: [TypeLocaleLanguage, TypeLink, TypeGuestEmail], 
    home_page_view: [TypeLocaleLanguage, TypePageName, TypePageUrl, TypeGuestEmail],
    order_review_page_view: [TypeProduct, TypeLocaleLanguage, TypePageName, TypeGuestEmail],
    page_view: [TypeLocaleLanguage, TypePageName, TypePageUrl, TypeGuestEmail, TypePageViewUniques],
    product_detail_page_view: [TypeProduct, TypeLocaleLanguage, TypePageName, TypeGuestEmail],
    purchase: [TypeLocaleLanguage, TypeGuestEmail, TypeOrderTotal, TypeProductUniques],
    remove_from_cart: [TypeProduct, TypeLocaleLanguage, TypeGuestEmail],
    search_results_page_view: [TypeLocaleLanguage, TypeSearch, TypePageName, TypeGuestEmail],

}



