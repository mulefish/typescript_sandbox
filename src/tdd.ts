import { isValidData } from './dataValidator';

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

isValidData(product_interaction)