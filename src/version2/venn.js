

const start = {
    add_to_cart:                            ["Product ID", "Product Name", "Product SKU", "Product Price", "SKU Quantity", "Currency", "Locale", "Language", "Guest Hashed Email", "Browser User Agent"],
    cart_page_view:                         ["Product ID", "Product Name", "Product SKU", "Product Price", "SKU Quantity", "Currency", "Cart Type", " Cart ID", "Cart Total Quantity", "Page Name", "Locale", "Language", "Guest Hashed Email", "Browser User Agent"],
    cart_view:                              ["Product ID", "Product Name", "Product SKU", "Product Price", "SKU Quantity", "Currency", "Cart ID", "Cart Type", "Locale", "Language", "Guest Hashed Email", "Browser User Agent"],
    cart_view_with_product_out_of_stock:    ["Product ID", "Product Name", "Product SKU", "Product Price", "SKU Quantity", "Currency", "Product Cart Out of Stock Status", "Locale", "Language", "Guest Hashed Email", "Browser User Agent"],
    order_review_page_view:                 ["Product ID", "Product Name", "Product SKU", "Product Price", "SKU Quantity", "Currency", "Page Name", "Locale", "Language", "Guest Hashed Email", "Browser User Agent"],
    product_detail_page_view:               ["Product ID", "Product Name", "Product SKU", "Product Price", "SKU Quantity", "Currency", "Page Name", "Locale", "Language", "Guest Hashed Email", "Browser User Agent"],
    remove_from_cart:                       ["Product ID", "Product Name", "Product SKU", "Product Price", "SKU Quantity", "Currency", "Locale", "Language", "Guest Hashed Email", "Browser User Agent"],
    checkout_payment_page_view:             ["Product ID", "Product Name", "Product SKU", "Product Price", "SKU Quantity", "Currency", "Page Name", "Locale", "Language", "Guest Hashed Email", "Browser User Agent"],
    checkout_purchase_complete_page_view:   ["Product ID", "Product Name", "Product SKU", "Product Price", "SKU Quantity", "Currency", "Order Tax Total", "Order Shipping Total", "Page Name", "Locale", "Language", "Guest Hashed Email", "Browser User Agent"],
    checkout_shipping_page_view:            ["Product ID", "Product Name", "Product SKU", "Product Price", "SKU Quantity", "Currency", "Page Name", "Locale", "Language", "Guest Hashed Email", "Browser User Agent"],
   category_page_view: ["Page Name", "Page URL", "Category Name", "Locale", "Language", "Guest Hashed Email", "Browser User Agent"],
    exit_link_click: ["Link Click URL", "Link Click Text", "Locale", "Language", "Guest Hashed Email", "Browser User Agent"],
    home_page_view: ["Page Name", "Page URL", "Locale", "Language", "Guest Hashed Email", "Browser User Agent"],
    page_view: ["Page Name", "Page URL", "Campaign ID (CID)", "Traffic Source Last Touch Channel", "Traffic Source Referrer Type", "Traffic Source Referring URL", "Browser Type", "Device Type", "User Session ID", "Implementation Method", "Site Property", "Internal Campaign ID (ICID)", "Locale", "Language", "Guest Hashed Email", "Browser User Agent"],
    purchase: ["Order ID", "Order Revenue", "Order Payment Method", "Order Shipping Method", "Order Shipping Zip / Postal Code", "Order Shipping State / Province", "Order Shipping Country", "User ID", "Order Promo Code", 
                                             "Product ID", "Product Name", "Product SKU", "Product Price", "SKU Quantity", "Currency", "User Hashed Email", "Order Tax Total", "Order Shipping Total", "Locale", "Language", "Guest Hashed Email", "Browser User Agent", "Order Discount"],
    search_results_page_view: ["Search Term", "Search Results Type", "Search Results Count", "Page Name", "Locale", "Language", "Guest Hashed Email", "Browser User Agent"]

}

function getSeen(HoL) {
    let seen = {}
    for (k in HoL) {
        const ary = HoL[k]
        ary.forEach((item, i) => {
            if (seen.hasOwnProperty(item)) {
                seen[item]++
            } else {
                seen[item] = 1
            }
        })
    }

    let keys = Object.keys(seen)
    console.log( keys )
    keys.forEach((key, i)=> { 
        const v = seen[key]
        console.log( i, v, key  )
    })
}

getSeen(start)





