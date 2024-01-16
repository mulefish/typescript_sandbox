var x = require('./data.json');

const events = [
    "app-response",
    "error",
    "general-component-event",
    "page-view",
    "page-products-displayed",
    "product-interaction",
    "purchase",
    "click_event",
    "page_viewed",
    "product_viewed",
    "product_added_to_cart",
    "search_submitted",
    "checkout_contact_info_submitted",
    "cart_viewed",
    "checkout_started",
    "collection_viewed"]

function analyzeJson(jsonObj) {
    function getType(obj) {
        let type = typeof obj;

        if (Array.isArray(obj)) {
            let arrayTypes = obj.map(item => getType(item));
            return arrayTypes.length > 0 ? arrayTypes : 'empty array';
        }

        if (type === 'object' && obj !== null) {
            let nestedType = {};
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    nestedType[key] = getType(obj[key]);
                }
            }
            return nestedType;
        }
        return type;
    }
    return getType(jsonObj);
}


for (let i = 0; i < 10; i++) {
    const key = events[i]
    const obj = x[key]
    console.log(" ... " + key)
    const shape = analyzeJson(obj)
    console.log(JSON.stringify(shape, null, 2))
}
