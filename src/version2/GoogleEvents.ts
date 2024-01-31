

type TypeProduct = {
    "Product ID": string;
    "Product Name": string;
    "Product SKU": string;
    "Product Price": string;
    "SKU Quantity": number;
    "Currency": string;
};

type TypeLocaleLanguage = {
    "Locale": string;
    "Language": string;
};

type TypeCart = {
    "Cart ID": string;
    "Cart Type": string;
};

type TypeGuestEmail = {
    "Guest Hashed Email": string;
    "Browser User Agent": string;
};

type TypePageName = {
    "Page Name": string;
};

type TypePageUrl = {
    "Page URL": string;
};

type TypeSearch = {
    "Search Term": string;
    "Search Results Type": string;
    "Search Results Count": number;
};

type TypeOrderTotal = {
    "Order Tax Total": number;
    "Order Shipping Total": number;
};

type TypeLink = {
    "Link Click URL": string;
    "Link Click Text": string;
};

type TypeCategoryName = {
    "Category Name": string;
};

type TypeCartTotalQuantity = {
    "Cart Total Quantity": number;
};

type TypeProductOutOfStock = {
    "Product Cart Out of Stock Status": string;
};

type TypeProductUniques = {
    "Order ID": string;
    "Order Revenue": string;
    "Order Payment Method": string;
    "Order Shipping Method": string;
    "Order Shipping Zip / Postal Code": string;
    "Order Shipping State / Province": string;
    "Order Shipping Country": string;
    "User ID": string;
    "Order Promo Code": string;
    "Product ID": string;
    "Product Name": string;
    "Product SKU": string;
    "Product Price": string;
    "SKU Quantity": number;
    "Currency": string;
    "User Hashed Email": string;
    "Order Discount": string;
};

type TypePageViewUniques = {
    "Campaign ID (CID)": string;
    "Traffic Source Last Touch Channel": string;
    "Traffic Source Referrer Type": string;
    "Traffic Source Referring URL": string;
    "Browser Type": string;
    "Device Type": string;
    "User Session ID": string;
    "Implementation Method": string;
    "Site Property": string;
    "Internal Campaign ID (ICID)": string;
};

type start = {
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
