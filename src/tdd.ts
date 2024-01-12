import { PASS, FAIL, Receipt } from './types';
import { validateProductInteraction } from './dataValidator';



const LAMproductInteraction = {
  "component": {
    "id": "string",
    "type": "string",
    "text": "string"
  },
  "collectionList": [
    {
      "id": "pdp-recs-vertical-product-image",
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


const LAMmissingComponentText = {
  "component": {
    "id": "string",
    "type": "See? No text entry!",
  },
  "collectionList": [
    {
      "id": "pdp-recs-vertical-product-image",
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


function happyPath() {
  const receipt: Receipt = validateProductInteraction(LAMproductInteraction);
  // console.log(receipt)
  verdict(receipt.verdict, true, "happyPath")
}

function sadPath1() {
  /* This will fail because it missing component text, */

  const json_as_string = JSON.stringify(LAMproductInteraction)
  const brokenJson = JSON.parse(json_as_string)
  delete brokenJson.component.text
  const receipt: Receipt = validateProductInteraction(brokenJson);
  // console.log(receipt)
  verdict(receipt.verdict, false, "sadPath1")
}



function happyPath_timeIt() {
  const t1 = new Date().getTime() 
  const receipt: Receipt = validateProductInteraction(LAMproductInteraction);
  const t2 = new Date().getTime() 
  const milliseconds = t2 - t1 
  receipt.millisec = milliseconds
  // console.log( receipt)
  const isOk = receipt.verdict === true &&  receipt.millisec < 10
  verdict(receipt.verdict, true, "happyPath_timeIt")
}



function runner() {
  happyPath()
  sadPath1()
  happyPath_timeIt() 
}
runner()

