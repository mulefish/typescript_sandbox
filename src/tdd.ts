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
  console.log(receipt)
  verdict(receipt.verdict, PASS, "happyPath")
}

function sadPath1() {
  /* This will fail because it missing component text, */

  const json_as_string = JSON.stringify(LAMproductInteraction)
  const brokenJson = JSON.parse(json_as_string)
  delete brokenJson.component.text
  console.log(JSON.stringify(brokenJson, null, 2))

  const receipt: Receipt = validateProductInteraction(brokenJson);
  verdict(receipt.verdict, FAIL, "sadPath1")
}

function runner() {
  happyPath()
  console.log("")
  sadPath1()
}
runner()

