import { classifyJsonObject } from './version2_validater';

function verdict(a: any, b: any, msg: string) {
    let result: string = "FAIL"
    if (JSON.stringify(a) === JSON.stringify(b)) {
        result = "PASS"
    }
    console.log(`${result} ${msg}`)
}
const jsons = {
    "click" : {
        guestHashedEmail: "hashed@example.com",
        browserUserAgent: "Mozilla/5.0",
        linkClickUrl: "https://example.com",
        linkClickText: "Click Here",
        locale: "en-US",
        language: "English"
    }, 
    "addCart" : {
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

function test_happyPath(candidate:any, expected:string, testedInterface:string) {
    
    const actual = classifyJsonObject(candidate)
    const isOk = actual === expected
    verdict(isOk, true, testedInterface + ": " + actual  + "   "  +expected )
}

function test_CommonClick_sadpath_wrongLanguage(candidate:any, expected:string) {
    const x = JSON.parse(JSON.stringify(candidate));
    x["language"] = "Kittycats"
    const actual = classifyJsonObject(x)
    const isOk = actual === expected
    verdict(isOk, true, "test_CommonClick_sadpath_wrongLanguage: actual=" + actual  + "   expected"  +expected )

}

function test_CommonClick_sadpath_noLanguage(candidate:any, expected:string) {
    const x = JSON.parse(JSON.stringify(candidate));
    x["language"] = "Kittycats"
    const actual = classifyJsonObject(x)
    const isOk = actual === expected
    verdict(isOk, true, "test_CommonClick_sadpath_noLanguage: actual=" + actual  + "   expected"  + expected)
}

const NO_MATCH = "No_Match"
test_happyPath(jsons["click"], "CommonClick", "CommonClick")
test_CommonClick_sadpath_noLanguage(jsons["click"], NO_MATCH)
test_CommonClick_sadpath_wrongLanguage(jsons['click'], NO_MATCH)
test_happyPath(jsons["addCart"], "AddRemoveCart", "AddRemoveCart")
// test_CommonClick_sadpath_wrongLanguage(jsons['click'], NO_MATCH)

