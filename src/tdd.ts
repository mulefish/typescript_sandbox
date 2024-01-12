import { PASS, FAIL, Receipt } from './types';
import { validateProductInteraction } from './dataValidator';



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
    console.log(`${PASS} ${msg}`)
  } else {
    console.log(`${FAIL} ${msg}`)
  }
}


function happyPath_productInteraction() {
  const receipt: Receipt = validateProductInteraction(LAM_product_interaction);
  // console.log(receipt)
  verdict(receipt.verdict, true, "happyPath_productInteraction")
}

function sadPath_productInteraction() {
  /* This will fail because it missing component text, */

  const json_as_string = JSON.stringify(LAM_product_interaction)
  const brokenJson = JSON.parse(json_as_string)
  delete brokenJson.component.text
  const receipt: Receipt = validateProductInteraction(brokenJson);
  // console.log(receipt)
  verdict(receipt.verdict, false, "sadPath_productInteraction")
}



function happyPath_productInteraction_timeIt() {
  /* Better to quick! */ 
  const t1 = new Date().getTime() 
  const receipt: Receipt = validateProductInteraction(LAM_product_interaction);
  const t2 = new Date().getTime() 
  const milliseconds = t2 - t1 
  receipt.millisec = milliseconds
  const isOk = receipt.verdict === true &&  receipt.millisec < 10
  verdict(receipt.verdict, true, "happyPath_productInteraction_timeIt " + receipt.millisec)
}



function runner() {
  happyPath_productInteraction()
  sadPath_productInteraction()
  happyPath_productInteraction_timeIt() 
}
runner()

 