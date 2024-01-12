import { validateProductInteraction } from './dataValidator';



const product_interaction = {
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


  const missingComponentText = {
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


function verdict( a:any, b:any, msg:string ) { 
  if ( JSON.stringify( a ) === JSON.stringify( b )) { 
    console.log( "PASS " + msg  )
  } else { 
    console.log("FAIL " + msg )
  }
}


function happyPath() { 
  const isOk = validateProductInteraction(product_interaction);
  verdict(isOk, true, "happyPath")
}
function sadPath1() { 
  const isOk = validateProductInteraction(missingComponentText);
  verdict(isOk, false, "sadPath1")
}

function runner() { 
  happyPath()
  sadPath1()
}
runner() 

