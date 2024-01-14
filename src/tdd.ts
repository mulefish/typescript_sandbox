import { validateThis } from './dataValidator';

const LAM_product_interaction = {
  "component": {
    "id": "string",
    "type": "string",
    "text": "string"
  },
  "collectionList": [
    {
      "id": "dinosaur-recs-vertical-product-image",
      "type": "recommender",
      "name": {
        "unified": "you-may-like",
        "localized": "You may like"
      },
      "productList": [
        {
          "categoryUnifiedId": "somecategoryUnifiedId",
          "unifiedId": "someunifiedId",
          "productId": "abc123",
          "skuList": [
            {
              "price": {
                "saleWithoutTaxShipping": "",
                "regularWithoutTaxShipping": "",
                "taxOnly": "",
                "isSale": false,
                "displaySale": "",
                "displayRegular": ""
              },
              "quantity": -1,
              "size": "small",
              "sku": "sku123"
            }
          ]
        }
      ]
    }
  ]
}

const page_products_displayed = {
  "collectionList": [
    {
      "id": "dinosaur-recs-vertical-product-image",
      "type": "recommender",
      "name": {
        "unified": "you-may-like",
        "localized": "You may like"
      },
      "productList": [
        {
          "categoryUnifiedId": "somecategoryUnifiedId",
          "unifiedId": "someunifiedId",
          "productId": "abc123",
          "skuList": [
            {
              "price": {
                "saleWithoutTaxShipping": "",
                "regularWithoutTaxShipping": "",
                "taxOnly": "",
                "isSale": false,
                "displaySale": "",
                "displayRegular": ""
              },
              "quantity": -1,
              "size": "small",
              "sku": "sku123"
            }
          ]
        }
      ]
    }
  ]
}
function verdict(a: any, b: any, msg: string) {
  if (JSON.stringify(a) === JSON.stringify(b)) {
    console.log(`PASS ${msg}`)
  } else {
    console.log(`FAIL ${msg}`)
  }
}


async function happyPath_productInteraction() {
  const t1:number = new Date().getTime() 
  const x:Record<string, boolean> = validateThis( LAM_product_interaction )
  const milliseconds:number = new Date().getTime() - t1 
  let isOk:boolean = true 
  let count:number = 0 
  for ( let k in x) {
    isOk &&= x[k]
    count++
  }
  isOk &&= milliseconds < 10 

  verdict(isOk, true, "happyPath_productInteraction has " + count + " members and took " + milliseconds + " millisecond")
}
function test() { 

  const x = validateThis({}) 
  console.log(x)

}

function runner() {
  happyPath_productInteraction()

}
runner()

 
