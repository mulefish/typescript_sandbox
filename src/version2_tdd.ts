import { classifyJsonObject } from './version2_validater';

function verdict(a: any, b: any, msg: string) {
    let result: string = "FAIL"
    if (JSON.stringify(a) === JSON.stringify(b)) {
        result = "PASS"
    }
    console.log(`${result} ${msg}`)
}
const jsons = {
    "clickExample" : {
        guestHashedEmail: "hashed@example.com",
        browserUserAgent: "Mozilla/5.0",
        linkClickUrl: "https://example.com",
        linkClickText: "Click Here",
        locale: "en-US",
        language: "English"
    }, 
    "cartExample" : {
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
}

function test_clickExample(candidate:any, expected:string) {
    const actual = classifyJsonObject(candidate)
    const isOK = actual === expected
    verdict(isOK, true, "test_clickExample: " + actual  + "   "  +expected )
}
test_clickExample(jsons["clickExample"], "CommonClick")


