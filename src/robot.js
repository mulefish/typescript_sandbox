// Running typescript is NICE! ( Error free! TypeChecking! )
// Writing typescript is NO FUN!
// BOILER PLATE 

///////////// END BOILERPLATE ///

const STRING = "string"
const NUMBER = "number"

const types = {
    TypeProduct: {
        productId: STRING,
        productName: STRING,
        productSKU: STRING,
        productPrice: STRING,
        skuQuantity: NUMBER,
        currency: STRING
    },
    TypePageName: {
        pageName: STRING
    },
    TypeLocaleLanguage: {
        locale: STRING,
        language: STRING
    },
    TypeGuestEmail: {
        guestHashedEmail: STRING,
        browserUserAgent: STRING
    },
    TypeCart: {
        cartId: STRING,
        cartType: STRING
    },
    TypePageUrl: {
        pageUrl: STRING
    },
    TypeSearch: {
        searchTerm: STRING,
        searchResultsType: STRING,
        searchResultsCount: NUMBER
    },
    TypeOrderTotal: {
        orderTaxTotal: STRING,
        orderShippingTotal: STRING
    },
    TypeLink: {
        linkClickUrl: STRING,
        linkClickText: STRING
    },

    TypeCategoryName: {
        categoryName: STRING
    },
    TypeCartTotalQuantity: {
        cartTotalQuantity: NUMBER
    },

    TypeProductOutOfStock: {
        productCartOutOfStockStatus: STRING
    },

    TypeProductUniques: {
        orderId: STRING,
        orderRevenue: STRING,
        orderPaymentMethod: STRING,
        orderShippingMethod: STRING,
        orderShippingZipPostalCode: STRING,
        orderShippingStateProvince: STRING,
        orderShippingCountry: STRING,
        orderPromoCode: STRING,
        productId: STRING,
        productName: STRING,
        productSKU: STRING,
        productPrice: STRING,
        skuQuantity: NUMBER,
        currency: STRING,
        orderDiscount: STRING
    },
    TypeUserId: {
        userId: STRING,
        userHashedEmail: STRING
    },

    TypePageViewUniques: {
        campaignIdCID: STRING,
        trafficSourceLastTouchChannel: STRING,
        trafficSourceReferrerType: STRING,
        trafficSourceReferringUrl: STRING,
        browserType: STRING,
        deviceType: STRING,
        userSessionId: STRING,
        implementationMethod: STRING,
        siteProperty: STRING,
        internalCampaignIdICID: STRING
    },
    TypeErrs: {
        errorType: STRING,
        errorMessage: STRING,
        errorGuestFacing: STRING
    },

    TypeFilterUniques: {
        filterType: STRING,
        filterValue: STRING,
        filterState: STRING
    }
}

const interfaces = {
    ComponentImpression: ["TypeGuestEmail", "TypeLocaleLanguage", "TypePageName"],
    CheckoutPurchaseCompletePageView: ["TypeGuestEmail", "TypeLocaleLanguage", "TypeOrderTotal", "TypePageName", "TypeProduct"],
    CategoryPageView: ["TypeCategoryName", "TypeGuestEmail", "TypeLocaleLanguage", "TypePageName", "TypePageUrl"],
    CartViewWithProductOutOfStock: ["TypeGuestEmail", "TypeLocaleLanguage", "TypeProduct", "TypeProductOutOfStock"],
    CartView: ["TypeCart", "TypeGuestEmail", "TypeLocaleLanguage", "TypeProduct"],
    CartPageView: ["TypeCart", "TypeCartTotalQuantity", "TypeGuestEmail", "TypeLocaleLanguage", "TypePageName", "TypeProduct"],
    EmailSignupSuccess: ["TypeGuestEmail", "TypeLocaleLanguage", "TypeUserId"],
    Purchase: ["TypeGuestEmail", "TypeLocaleLanguage", "TypeOrderTotal", "TypeProductUniques", "TypeUserId"],
    Err: ["TypeErrs", "TypeGuestEmail", "TypeLocaleLanguage"],
    SearchResultsClick: ["TypeGuestEmail", "TypeLocaleLanguage", "TypeSearch"],
    SearchResultsPageView: ["TypeGuestEmail", "TypeLocaleLanguage", "TypeSearch", "TypePageName"],
    PageView: ["TypeGuestEmail", "TypeLocaleLanguage", "TypePageName", "TypePageUrl", "TypePageViewUniques"],
    HomePageView: ["TypeGuestEmail", "TypeLocaleLanguage", "TypePageName", "TypePageUrl"],
    CartPageView: ["TypeCart", "TypeCartTotalQuantity", "TypeGuestEmail", "TypeLocaleLanguage", "TypePageName", "TypeProduct"],
    FiltersClick: ["TypeFilterUniques", "TypeGuestEmail", "TypeLocaleLanguage"],
    CommonPageView: ["TypeGuestEmail", "TypeLocaleLanguage", "TypePageName", "TypeProduct"],
    //interface OrderReviewPageView extends TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypeProduct { }
    //interface ProductDetailPageView extends TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypeProduct { }
    //interface CheckoutPaymentPageView extends TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypeProduct { }
    //interface CheckoutShippingPageView extends TypeGuestEmail, TypeLocaleLanguage, TypePageName, TypeProduct { }
    CommonClick: ["TypeGuestEmail", "TypeLink", "TypeLocaleLanguage"],
    //interface ExitLinkClick extends TypeGuestEmail, TypeLink, TypeLocaleLanguage { }
    //interface FAQClick extends TypeGuestEmail, TypeLink, TypeLocaleLanguage { }
    //interface LinkClick extends TypeGuestEmail, TypeLink, TypeLocaleLanguage { }
    //interface LiveChatClick extends TypeGuestEmail, TypeLink, TypeLocaleLanguage { }
    //interface NavigationLinkClick extends TypeGuestEmail, TypeLink, TypeLocaleLanguage { }
    //interface TopBannerClick extends TypeGuestEmail, TypeLink, TypeLocaleLanguage { }
    AddRemoveCart: ["TypeGuestEmail", "TypeLocaleLanguage", "TypeProduct"]
    //interface AddToCart extends TypeGuestEmail, TypeLocaleLanguage, TypeProduct { }
    //interface RemoveFromCart extends TypeGuestEmail, TypeLocaleLanguage, TypeProduct { }
}
let everything = ""
function log(msg) {
    everything += msg + "\n"
    console.log(msg)
}

function makeValidators() {
    let v = `const isValidLocale = (locale: string): boolean => {
        const pattern = /^[a-z]{2}-[A-Z]{2}$/;
        const x = pattern.test(locale);
        return x
    }`
    v += "\n"
    v += `const isValidLanguage = (language: string): boolean => {
        language = language.toLowerCase()
        const langs = new Set(['english', 'en', 'french', 'fr', 'japanese', 'jp']);
    
        return langs.has(language);
    }`
    v += "\n"
    v += `const isValidMoney = (productPrice: string): boolean => {
        const pattern = /^\d+(\.\d{2})?$/;
        return pattern.test(productPrice);
    }`
    v += "\n"
    v += `const isValidCurrency = (currency: string): boolean => {
        const currencies = new Set(['USD', 'CAD', 'JPY']);
        return currencies.has(currency);
    }`
    v += "\n"
    log(v)
}

function makeTypes() {

    for (let type in types) {
        log(`type ${type} = {`)
        for (let k in types[type]) {
            const v = types[type][k]
            log(`     ${k}:${v};`)
        }
        log('}')
    }

}

function makeInterfaces() {
    log("// INTERFACES")
    for (let interface in interfaces) {
        const myTypes = interfaces[interface].join(", ")
        const x = `export interface ${interface} extends ${myTypes} {}`
        log(x)

    }
    log("\n\n")
}


function makeTheBrains() {
    const theDecider = `
    export function classifyJsonObject(obj: any): string {
        // NOTE: The order of testing MATTERS!
        if (isPurchase(obj)) {
            return "Purchase"
        }
        else if (isCartPageView(obj)) {
            return "CartPageView"
        }
        else if (isCheckoutPurchaseCompletePageView(obj)) {
            return "CheckoutPurchaseCompletePageView"
        }
        else if (isCommonPageView(obj)) {
            return "CommonPageView"
        }
        // else if (isCheckoutShippingPageView(obj)) {
        //     return "CheckoutShippingPageView"
        // }
        else if (isEmailSignupSuccess(obj)) {
            return "EmailSignupSuccess"
        } else if (isSearchResultsPageView(obj)) {
            return "SearchResultsPageView"
        }
        else if (isErr(obj)) {
            return "Err"
        }
        else if (isSearchResultsClick(obj)) {
            return "SearchResultsClick"
        }

        else if (isFiltersClick(obj)) {
            return "FiltersClick"
        }
        else if (isCartViewWithProductOutOfStock(obj)) {
            return "CartViewWithProductOutOfStock"
        }
        else if (isCategoryPageView(obj)) {
            return "CategoryPageView"
        }
        else if (isPageView(obj)) {
            return "PageView"
        }
        else if (isCartView(obj)) {
            return "CartView"
        }
        else if (isHomePageView(obj)) {
            return "HomePageView"
        }
        else if (isCommonClick(obj)) {
            return "CommonClick";
        }
        // else if (isCommonCart(obj)) {
        //     return "AddRemoveCart";
        // }
        else if (isComponentImpression(obj)) {
            return "ComponentImpression"
        }
        else {
            return "No_Match";
        }
    }`
    log(theDecider)
}

function makeTheGuards() {
    log("// GUARDS")

    for (let interface in interfaces) {
        const funcName = `is${interface}`
        const typesArray = interfaces[interface]
        const functionDeclareLine = `function ${funcName}(obj: any): obj is ${interface} {`
        log(functionDeclareLine)

        // Needed later on the decided whether to emit a && or a ;
        let n = 0
        typesArray.forEach((thing) => {
            const myTypes = types[thing]
            n += Object.keys(myTypes).length
        })

        let loop = 0
        let accumulator = "return "

        typesArray.forEach((thing) => {
            const myTypes = types[thing]
            const pad = "    "
            for (let k in myTypes) {
                let x = pad
                if (k === "locale") {
                    x += `'locale' in obj && isValidLocale(obj.locale)`
                } else if (k === "language") {
                    x += `'language' in obj && isValidLanguage(obj.language) `
                } else if (k === "productPrice" || "orderTaxTotal" || "orderShippingTotal" || "orderRevenue" || "orderDiscount") {
                    x += `'${k}' in obj && isValidMoney(obj.${k})`
                } else if (k === "currency") {
                    x += `'${k}' in obj && isValidCurrency(obj.${k})`
                } else {
                    x += `'${k}' in obj && typeof obj.${k} === '${myTypes[k]}'`
                }
                if (loop < n - 1) {
                    x += ` &&\n`
                } else {
                    x += `;`
                }
                accumulator += x
                loop++
            }
        })
        log(accumulator)
        log("}\n")
    }
}

function makeTestData() { 


    log("// TEST DATA")
    let tests = {} 
    for (let interface in interfaces) {
        const dataName = "is" + interface 
        tests[dataName] = {} 
        const typesArray = interfaces[interface]
        typesArray.forEach((thing) => {
            const myTypes = types[thing]
            for (let k in myTypes) {
                const v = myTypes[k]
                if ( k === "locale") {
                    tests[dataName][k]="en-US"
                } else if ( k === "language") {
                    tests[dataName][k]="Engish"
                } else if ( k === "productPrice" ) { 
                                                // } || "orderTaxTotal" || "orderShippingTotal" || "orderRevenue" || "orderDiscount") {
                    tests[dataName][k]="101.00"
                } else if ( k === "orderTaxTotal") {
                    tests[dataName][k]="102.00"
                } else if ( k === "orderShippingTotal") {
                    tests[dataName][k]="103.00"
                } else if ( k === "orderRevenue") {
                    tests[dataName][k]="104.00"
                } else if ( k === "orderDiscount") {
                    tests[dataName][k]="105.00"
                } else if ( k === "currency") {
                    tests[dataName][k]="USD"
                } else if ( k.includes("Quantity") || k === "searchResultsCount" ) {
                    tests[dataName][k]=1
                } else if ( v === STRING) {
                    tests[dataName][k]="String"
                } else {
                    tests[dataName][k]="?afakfklaldfkaffl " +k 
                }
            }
        })
    }
    log( "const testData=" + JSON.stringify( tests, null, 2 ) )


    const actualTests = `
    function verdict(a: any, b: any, start: number, msg: string) {
        const milsec = new Date().getTime() - start
        let result: string = "FAIL"
        if (JSON.stringify(a) === JSON.stringify(b)) {
            result = "PASS"
        }
        if (milsec > 20) {
            msg = " TOO SLOW"
        }
        console.log(result + " milsec=" + milsec + " msg=" + msg)
    }
    
    
    function test_happyPath(candidate: any, expected: string, testedInterface: string) {
        const t1 = new Date().getTime()
        const actual = classifyJsonObject(candidate)
        const isOk = actual === expected
        if (isOk === false) {
            console.log(candidate)
        }
    
        verdict(isOk, true, t1, testedInterface + ": " + actual + "   " + expected)
    }
    
    function test_CommonClick_sadpath_wrongLanguage(candidate: any, expected: string) {
        const t1 = new Date().getTime()
    
        const x = JSON.parse(JSON.stringify(candidate));
        x["language"] = "Kittycats"
        const actual = classifyJsonObject(x)
        const isOk = actual === expected
        verdict(isOk, true, t1, "test_CommonClick_sadpath_wrongLanguage: actual=" + actual + "   expected=" + expected)
    
    }
    
    function test_CommonClick_sadpath_noLanguage(candidate: any, expected: string) {
        const t1 = new Date().getTime()
    
        const x = JSON.parse(JSON.stringify(candidate));
        x["language"] = "Kittycats"
        const actual = classifyJsonObject(x)
        const isOk = actual === expected
        verdict(isOk, true, t1, "test_CommonClick_sadpath_noLanguage: actual=" + actual + "   expected=" + expected)
    }`
    log(actualTests)

}

function main() {

    makeValidators() // things like money is formatted OK?
    makeTypes() // typescript needs types!
    makeInterfaces() // interfaces are objects? Merge types into one thing, anyhow.
    makeTheBrains() // This is tricky part
    makeTheGuards() // This is a pretty part of typescript
    makeTestData() // Test data is grist for logic

    const fs = require('fs').promises;
    async function writeToFile(filename, content) {
        try {
            const fileHandle = await fs.open(filename, 'w');
            await fs.writeFile(fileHandle, content);
            await fileHandle.close();
            console.log('File written and closed successfully.');
        } catch (error) {
            console.error('Error writing to file:', error);
        }
    }
    writeToFile("version3_interfaces.ts", everything)

    console.log("// *********** WROTE TO version3_interfaces.ts ******************** ")

}

main()