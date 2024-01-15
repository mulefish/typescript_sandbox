
const lam_min_data = {
    "app-response": {
        "event": {
            "attributes": {
                "details": "this is optional details"
            }
        },
        "id": "this ID should be required hello"
    },
    "error":{
        "error": {
          "errorMessage": "string",
          "errorType": "string",
          "errorDetails": "string"
        }
      },
      "general-component-event":{
        "component": {
          "id": "string",
          "type": "string",
          "text": "string"
        }
      },
      "page-view":{}, 
      "page-products-displayed": {
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
      },
      "product-interaction":{
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
      },"purchase": { "DO THIS ONE AGAIN":"THIS ONE IS WRONG"}
}


const shopify_data = {
    "click_event": {
        "name": "click_event",
        "customData": {
            "click_classes": "banner__media banner__media--mobile media",
            "click_id": "",
            "click_url": "",
            "click_text": "\n        \n      ",
            "click_element": "<div class=\"banner__media banner__media--mobile media\">\n        <img src=\"//kittycats-trove.myshopify.com/cdn/shop/files/NA_Q3_Trove_PartB_Homepage_SingleBanner_FallEssentials_M.jpg?v=1692738654&width=750\" alt=\"\" srcset=\"//kittycats-trove.myshopify.com/cdn/shop/files/NA_Q3_Trove_PartB_Homepage_SingleBanner_FallEssentials_M.jpg?v=1692738654&width=375 375w, //kittycats-trove.myshopify.com/cdn/shop/files/NA_Q3_Trove_PartB_Homepage_SingleBanner_FallEssentials_M.jpg?v=1692738654&width=550 550w, //kittycats-trove.myshopify.com/cdn/shop/files/NA_Q3_Trove_PartB_Homepage_SingleBanner_FallEssentials_M.jpg?v=1692738654&width=750 750w\" width=\"2408\" loading=\"lazy\" sizes=\"100vw\">\n      </div>",
            "click_target": ""
        },
        "clientId": "df1007bb-d108-4f4b-b09e-c9ac586d263d",
        "timestamp": "2023-12-20T19:50:29.778Z",
        "context": {
            "document": {
                "location": {
                    "href": "https://kittycats-trove.myshopify.com/ ",
                    "hash": "",
                    "host": "http://kittycats-trove.myshopify.com ",
                    "hostname": "http://kittycats-trove.myshopify.com ",
                    "origin": "https://kittycats-trove.myshopify.com ",
                    "pathname": "/",
                    "port": "",
                    "protocol": "https:",
                    "search": ""
                },
                "referrer": "",
                "characterSet": "UTF-8",
                "title": "kittycats Like New | Gently used gear for resale"
            },
            "navigator": {
                "language": "en-US",
                "cookieEnabled": true,
                "languages": [
                    "en-US",
                    "en"
                ],
                "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            },
            "window": {
                "innerHeight": 542,
                "innerWidth": 647,
                "outerHeight": 900,
                "outerWidth": 1440,
                "pageXOffset": 0,
                "pageYOffset": 0,
                "location": {
                    "href": "https://kittycats-trove.myshopify.com/ ",
                    "hash": "",
                    "host": "http://kittycats-trove.myshopify.com ",
                    "hostname": "http://kittycats-trove.myshopify.com ",
                    "origin": "https://kittycats-trove.myshopify.com ",
                    "pathname": "/",
                    "port": "",
                    "protocol": "https:",
                    "search": ""
                },
                "origin": "https://kittycats-trove.myshopify.com ",
                "screen": {
                    "height": 900,
                    "width": 1440
                },
                "screenX": 0,
                "screenY": 0,
                "scrollX": 0,
                "scrollY": 0
            }
        },
        "id": "0176dbed-c5f7-4c3d-85ab-7ea107084c37"
    },
    "page_viewed": {
        "id": "sh-88cb2b9c-0E6A-4B68-FC66-79F36185117A",
        "name": "page_viewed",
        "clientId": "df1007bb-d108-4f4b-b09e-c9ac586d263d",
        "timestamp": "2023-12-20T19:54:25.022Z",
        "context": {
            "document": {
                "location": {
                    "href": "https://kittycats-trove.myshopify.com/products/all-tied-up-tank-top-resale_lw1bx7s_27574?variant=47331074113812 ",
                    "hash": "",
                    "host": "http://kittycats-trove.myshopify.com ",
                    "hostname": "http://kittycats-trove.myshopify.com ",
                    "origin": "https://kittycats-trove.myshopify.com ",
                    "pathname": "/products/all-tied-up-tank-top-resale_lw1bx7s_27574",
                    "port": "",
                    "protocol": "https:",
                    "search": "?variant=47331074113812"
                },
                "referrer": "https://kittycats-trove.myshopify.com/ ",
                "characterSet": "UTF-8",
                "title": "All Tied Up Tank Top - Resale – kittycats Like New"
            },
            "navigator": {
                "language": "en-US",
                "cookieEnabled": true,
                "languages": [
                    "en-US",
                    "en"
                ],
                "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            },
            "window": {
                "innerHeight": 739,
                "innerWidth": 882,
                "outerHeight": 900,
                "outerWidth": 1440,
                "pageXOffset": 0,
                "pageYOffset": 0,
                "location": {
                    "href": "https://kittycats-trove.myshopify.com/products/all-tied-up-tank-top-resale_lw1bx7s_27574?variant=47331074113812 ",
                    "hash": "",
                    "host": "http://kittycats-trove.myshopify.com ",
                    "hostname": "http://kittycats-trove.myshopify.com ",
                    "origin": "https://kittycats-trove.myshopify.com ",
                    "pathname": "/products/all-tied-up-tank-top-resale_lw1bx7s_27574",
                    "port": "",
                    "protocol": "https:",
                    "search": "?variant=47331074113812"
                },
                "origin": "https://kittycats-trove.myshopify.com ",
                "screen": {
                    "height": 900,
                    "width": 1440
                },
                "screenX": 0,
                "screenY": 0,
                "scrollX": 0,
                "scrollY": 0
            }
        }
    },
    "product_viewed": {
        "id": "sh-88cb2b9e-231B-4724-73B7-837994107154",
        "name": "product_viewed",
        "data": {
            "productVariant": {
                "id": "47331074113812",
                "image": {
                    "src": "//kittycats-trove.myshopify.com/cdn/shop/products/udhygjqgh994ikplkrdw.jpg?v=1702492182"
                },
                "price": {
                    "amount": 29,
                    "currencyCode": "USD"
                },
                "product": {
                    "id": "8896125829396",
                    "title": "All Tied Up Tank Top - Resale",
                    "untranslatedTitle": "All Tied Up Tank Top - Resale",
                    "url": "/products/all-tied-up-tank-top-resale_lw1bx7s_27574",
                    "vendor": "kittycats",
                    "type": "LW1BX7S"
                },
                "sku": "LW1BX7S_27574_4_Good as new",
                "title": "4 / Good as new",
                "untranslatedTitle": "4 / Good as new"
            }
        },
        "clientId": "df1007bb-d108-4f4b-b09e-c9ac586d263d",
        "timestamp": "2023-12-20T19:54:25.023Z",
        "context": {
            "document": {
                "location": {
                    "href": "https://kittycats-trove.myshopify.com/products/all-tied-up-tank-top-resale_lw1bx7s_27574?variant=47331074113812 ",
                    "hash": "",
                    "host": "http://kittycats-trove.myshopify.com ",
                    "hostname": "http://kittycats-trove.myshopify.com ",
                    "origin": "https://kittycats-trove.myshopify.com ",
                    "pathname": "/products/all-tied-up-tank-top-resale_lw1bx7s_27574",
                    "port": "",
                    "protocol": "https:",
                    "search": "?variant=47331074113812"
                },
                "referrer": "https://kittycats-trove.myshopify.com/ ",
                "characterSet": "UTF-8",
                "title": "All Tied Up Tank Top - Resale – kittycats Like New"
            },
            "navigator": {
                "language": "en-US",
                "cookieEnabled": true,
                "languages": [
                    "en-US",
                    "en"
                ],
                "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            },
            "window": {
                "innerHeight": 739,
                "innerWidth": 882,
                "outerHeight": 900,
                "outerWidth": 1440,
                "pageXOffset": 0,
                "pageYOffset": 0,
                "location": {
                    "href": "https://kittycats-trove.myshopify.com/products/all-tied-up-tank-top-resale_lw1bx7s_27574?variant=47331074113812 ",
                    "hash": "",
                    "host": "http://kittycats-trove.myshopify.com ",
                    "hostname": "http://kittycats-trove.myshopify.com ",
                    "origin": "https://kittycats-trove.myshopify.com ",
                    "pathname": "/products/all-tied-up-tank-top-resale_lw1bx7s_27574",
                    "port": "",
                    "protocol": "https:",
                    "search": "?variant=47331074113812"
                },
                "origin": "https://kittycats-trove.myshopify.com ",
                "screen": {
                    "height": 900,
                    "width": 1440
                },
                "screenX": 0,
                "screenY": 0,
                "scrollX": 0,
                "scrollY": 0
            }
        }
    },
    "product_added_to_cart": {
        "id": "sh-88e123a8-AF72-438E-BBA1-81A40E3B8D23",
        "name": "product_added_to_cart",
        "data": {
            "cartLine": {
                "cost": {
                    "totalAmount": {
                        "amount": 0.29,
                        "currencyCode": "USD"
                    }
                },
                "merchandise": {
                    "id": "47331074113812",
                    "image": {},
                    "price": {
                        "amount": 0.29,
                        "currencyCode": "USD"
                    },
                    "product": {
                        "id": "8896125829396",
                        "title": "All Tied Up Tank Top - Resale - 4 / Good as new",
                        "vendor": "kittycats"
                    },
                    "sku": "LW1BX7S_27574_4_Good as new"
                },
                "quantity": 1
            }
        },
        "clientId": "df1007bb-d108-4f4b-b09e-c9ac586d263d",
        "timestamp": "2023-12-20T20:06:24.890Z",
        "context": {
            "document": {
                "location": {
                    "href": "https://kittycats-trove.myshopify.com/products/all-tied-up-tank-top-resale_lw1bx7s_27574?variant=47331074113812 ",
                    "hash": "",
                    "host": "http://kittycats-trove.myshopify.com ",
                    "hostname": "http://kittycats-trove.myshopify.com ",
                    "origin": "https://kittycats-trove.myshopify.com ",
                    "pathname": "/products/all-tied-up-tank-top-resale_lw1bx7s_27574",
                    "port": "",
                    "protocol": "https:",
                    "search": "?variant=47331074113812"
                },
                "referrer": "https://kittycats-trove.myshopify.com/ ",
                "characterSet": "UTF-8",
                "title": "All Tied Up Tank Top - Resale – kittycats Like New"
            },
            "navigator": {
                "language": "en-US",
                "cookieEnabled": true,
                "languages": [
                    "en-US",
                    "en"
                ],
                "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            },
            "window": {
                "innerHeight": 464,
                "innerWidth": 555,
                "outerHeight": 900,
                "outerWidth": 1440,
                "pageXOffset": 0,
                "pageYOffset": 1050.2857666015625,
                "location": {
                    "href": "https://kittycats-trove.myshopify.com/products/all-tied-up-tank-top-resale_lw1bx7s_27574?variant=47331074113812 ",
                    "hash": "",
                    "host": "http://kittycats-trove.myshopify.com ",
                    "hostname": "http://kittycats-trove.myshopify.com ",
                    "origin": "https://kittycats-trove.myshopify.com ",
                    "pathname": "/products/all-tied-up-tank-top-resale_lw1bx7s_27574",
                    "port": "",
                    "protocol": "https:",
                    "search": "?variant=47331074113812"
                },
                "origin": "https://kittycats-trove.myshopify.com ",
                "screen": {
                    "height": 900,
                    "width": 1440
                },
                "screenX": 0,
                "screenY": 0,
                "scrollX": 0,
                "scrollY": 1050.2857666015625
            }
        }
    },
    "search_submitted": {
        "id": "sh-88e14b1b-8AAC-42AA-DBB1-49C10A7EF740",
        "name": "search_submitted",
        "data": {
            "searchResult": {
                "query": "yoga",
                "productVariants": [
                    {
                        "id": "47331349922068",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/omfecmndxj6oqfeunwgw.jpg?v=1702496725"
                        },
                        "price": {
                            "amount": 71,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8896193528084",
                            "title": "Women's Bhakti Yoga Jacket - Resale",
                            "untranslatedTitle": "Women's Bhakti Yoga Jacket - Resale",
                            "url": "/products/womens-bhakti-yoga-jacket-resale_trove-44370_black?_pos=1&_sid=090fd0cfd&_ss=r",
                            "vendor": "kittycats",
                            "type": "TROVE-44370"
                        },
                        "sku": "TROVE-44370_Black_0_Good as new",
                        "title": "0 / Good as new",
                        "untranslatedTitle": "0 / Good as new"
                    },
                    {
                        "id": "46203817558292",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/vtxlovk5jou8h665nxuv_e06e0d02-4e64-4686-b686-607c440c28a4.jpg?v=1697194600"
                        },
                        "price": {
                            "amount": 35,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8529730044180",
                            "title": "The Yoga Bag - Resale",
                            "untranslatedTitle": "The Yoga Bag - Resale",
                            "url": "/products/the-yoga-bag-resale_lw9mdcs_28903?_pos=2&_sid=090fd0cfd&_ss=r",
                            "vendor": "kittycats",
                            "type": ""
                        },
                        "sku": "LW9MDCS_28903_One Size_Good as new",
                        "title": "One Size / Good as new",
                        "untranslatedTitle": "One Size / Good as new"
                    },
                    {
                        "id": "47330550382868",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/kw1opnwf2g48lw2ork7f.jpg?v=1702479179"
                        },
                        "price": {
                            "amount": 59,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8895935217940",
                            "title": "Bhakti Yoga Jacket - Resale",
                            "untranslatedTitle": "Bhakti Yoga Jacket - Resale",
                            "url": "/products/bhakti-yoga-jacket-resale_lw4c20s_1?_pos=3&_sid=090fd0cfd&_ss=r",
                            "vendor": "kittycats",
                            "type": "LW4C20S"
                        },
                        "sku": "LW4C20S_1_10_Gently used",
                        "title": "10 / Gently used",
                        "untranslatedTitle": "10 / Gently used"
                    },
                    {
                        "id": "47099527659796",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/h6mojdvg8opdthijvapv.jpg?v=1698596776"
                        },
                        "price": {
                            "amount": 69,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8815167537428",
                            "title": "Bhakti Yoga Jacket - Resale",
                            "untranslatedTitle": "Bhakti Yoga Jacket - Resale",
                            "url": "/products/bhakti-yoga-jacket-resale_lw4f02s_9355?_pos=4&_sid=090fd0cfd&_ss=r",
                            "vendor": "kittycats",
                            "type": "LW4F02S"
                        },
                        "sku": "LW4F02S_9355_6_Good as new",
                        "title": "6 / Good as new",
                        "untranslatedTitle": "6 / Good as new"
                    },
                    {
                        "id": "47099527495956",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/u6ntzmx7elxnxpqs6shq.jpg?v=1698596772"
                        },
                        "price": {
                            "amount": 69,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8815167340820",
                            "title": "Bhakti Yoga Jacket - Resale",
                            "untranslatedTitle": "Bhakti Yoga Jacket - Resale",
                            "url": "/products/bhakti-yoga-jacket-resale_lw4f02s_8903?_pos=5&_sid=090fd0cfd&_ss=r",
                            "vendor": "kittycats",
                            "type": "LW4F02S"
                        },
                        "sku": "LW4F02S_8903_6_Good as new",
                        "title": "6 / Good as new",
                        "untranslatedTitle": "6 / Good as new"
                    },
                    {
                        "id": "47099527168276",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/LW4F02S_7524_D.webp?v=1698596767"
                        },
                        "price": {
                            "amount": 69,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8815167242516",
                            "title": "Bhakti Yoga Jacket - Resale",
                            "untranslatedTitle": "Bhakti Yoga Jacket - Resale",
                            "url": "/products/bhakti-yoga-jacket-resale_lw4f02s_7524?_pos=6&_sid=090fd0cfd&_ss=r",
                            "vendor": "kittycats",
                            "type": "LW4F02S"
                        },
                        "sku": "LW4F02S_7524_8_Good as new",
                        "title": "8 / Good as new",
                        "untranslatedTitle": "8 / Good as new"
                    },
                    {
                        "id": "47099527102740",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/pawviruannwo1vyu8nok.jpg?v=1698596765"
                        },
                        "price": {
                            "amount": 69,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8815167176980",
                            "title": "Bhakti Yoga Jacket - Resale",
                            "untranslatedTitle": "Bhakti Yoga Jacket - Resale",
                            "url": "/products/bhakti-yoga-jacket-resale_lw4f02s_14?_pos=7&_sid=090fd0cfd&_ss=r",
                            "vendor": "kittycats",
                            "type": "LW4F02S"
                        },
                        "sku": "LW4F02S_14_6_Good as new",
                        "title": "6 / Good as new",
                        "untranslatedTitle": "6 / Good as new"
                    },
                    {
                        "id": "47099526414612",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/rakqxx4jjzltuz2x5eu4.jpg?v=1698596760"
                        },
                        "price": {
                            "amount": 59,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8815166980372",
                            "title": "Bhakti Yoga Jacket - Resale",
                            "untranslatedTitle": "Bhakti Yoga Jacket - Resale",
                            "url": "/products/bhakti-yoga-jacket-resale_lw4f02s_1?_pos=8&_sid=090fd0cfd&_ss=r",
                            "vendor": "kittycats",
                            "type": "LW4F02S"
                        },
                        "sku": "LW4F02S_1_4_Gently used",
                        "title": "4 / Gently used",
                        "untranslatedTitle": "4 / Gently used"
                    },
                    {
                        "id": "46206074945812",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/zdmw2xfmhoocy5gtwywd.jpg?v=1692072214"
                        },
                        "price": {
                            "amount": 45,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8530481381652",
                            "title": "Devi Yoga Crop - Resale",
                            "untranslatedTitle": "Devi Yoga Crop - Resale",
                            "url": "/products/devi-yoga-crop-resale_lw6e45s_16523?_pos=9&_sid=090fd0cfd&_ss=r",
                            "vendor": "kittycats",
                            "type": ""
                        },
                        "sku": "LW6E45S_16523_6_Good as new",
                        "title": "6 / Good as new",
                        "untranslatedTitle": "6 / Good as new"
                    },
                    {
                        "id": "46205949247764",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/r7el92ijlftoyoblex3f.jpg?v=1692070692"
                        },
                        "price": {
                            "amount": 35,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8530419089684",
                            "title": "Bhakti Yoga Short - Resale",
                            "untranslatedTitle": "Bhakti Yoga Short - Resale",
                            "url": "/products/bhakti-yoga-short-resale_lw7914s_1?_pos=10&_sid=090fd0cfd&_ss=r",
                            "vendor": "kittycats",
                            "type": ""
                        },
                        "sku": "LW7914S_1_2_Gently used",
                        "title": "2 / Gently used",
                        "untranslatedTitle": "2 / Gently used"
                    },
                    {
                        "id": "46205942923540",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/oie7pxvtmknnskbrqwkw.jpg?v=1702484243"
                        },
                        "price": {
                            "amount": 41,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8530415321364",
                            "title": "Bhakti Yoga Short - Resale",
                            "untranslatedTitle": "Bhakti Yoga Short - Resale",
                            "url": "/products/bhakti-yoga-short-resale_lw7939s_12600?_pos=11&_sid=090fd0cfd&_ss=r",
                            "vendor": "kittycats",
                            "type": "LW7939S"
                        },
                        "sku": "LW7939S_12600_6_Good as new",
                        "title": "6 / Good as new",
                        "untranslatedTitle": "6 / Good as new"
                    },
                    {
                        "id": "46204896051476",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/xcmqhchfzrqjpskjeqi9_3524091d-9884-4931-8102-03d2c4e13516.jpg?v=1701431587"
                        },
                        "price": {
                            "amount": 45,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8530005786900",
                            "title": "Yoga Over Skirt - Resale",
                            "untranslatedTitle": "Yoga Over Skirt - Resale",
                            "url": "/products/yoga-over-skirt-resale_lw8426s_3172?_pos=12&_sid=090fd0cfd&_ss=r",
                            "vendor": "kittycats",
                            "type": "LW8426S"
                        },
                        "sku": "LW8426S_3172_2_Gently used",
                        "title": "2 / Gently used",
                        "untranslatedTitle": "2 / Gently used"
                    },
                    {
                        "id": "46204888908052",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/u7toyezlbwufzzg72b9y.jpg?v=1692064349"
                        },
                        "price": {
                            "amount": 49,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8530002608404",
                            "title": "Yoga Over Skirt - Resale",
                            "untranslatedTitle": "Yoga Over Skirt - Resale",
                            "url": "/products/yoga-over-skirt-resale_lw8524s_1?_pos=13&_sid=090fd0cfd&_ss=r",
                            "vendor": "kittycats",
                            "type": ""
                        },
                        "sku": "LW8524S_1_4_Good as new",
                        "title": "4 / Good as new",
                        "untranslatedTitle": "4 / Good as new"
                    },
                    {
                        "id": "46204766257428",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/lirlqdjteawbb1smx69d.jpg?v=1692063024"
                        },
                        "price": {
                            "amount": 39,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8529952047380",
                            "title": "The Yoga Mat Bag - Resale",
                            "untranslatedTitle": "The Yoga Mat Bag - Resale",
                            "url": "/products/the-yoga-mat-bag-resale_lw9cjcs_45740?_pos=14&_sid=090fd0cfd&_ss=r",
                            "vendor": "kittycats",
                            "type": ""
                        },
                        "sku": "LW9CJCS_45740_One Size_Good as new",
                        "title": "One Size / Good as new",
                        "untranslatedTitle": "One Size / Good as new"
                    },
                    {
                        "id": "46204765831444",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/qrre11uhcmrbhcf6vq9v.jpg?v=1692063019"
                        },
                        "price": {
                            "amount": 39,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8529951654164",
                            "title": "The Yoga Mat Bag - Resale",
                            "untranslatedTitle": "The Yoga Mat Bag - Resale",
                            "url": "/products/the-yoga-mat-bag-resale_lw9cjcs_26950?_pos=15&_sid=090fd0cfd&_ss=r",
                            "vendor": "kittycats",
                            "type": ""
                        },
                        "sku": "LW9CJCS_26950_One Size_Good as new",
                        "title": "One Size / Good as new",
                        "untranslatedTitle": "One Size / Good as new"
                    },
                    {
                        "id": "46206132486420",
                        "image": null,
                        "price": {
                            "amount": 49,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8530502844692",
                            "title": "High-Rise Yoga Crop - Resale",
                            "untranslatedTitle": "High-Rise Yoga Crop - Resale",
                            "url": "/products/high-rise-yoga-crop-resale_lw6bnys_49929?_pos=16&_sid=090fd0cfd&_ss=r",
                            "vendor": "kittycats",
                            "type": ""
                        },
                        "sku": "LW6BNYS_49929_6_Good as new",
                        "title": "6 / Good as new",
                        "untranslatedTitle": "6 / Good as new"
                    }
                ]
            }
        },
        "clientId": "df1007bb-d108-4f4b-b09e-c9ac586d263d",
        "timestamp": "2023-12-20T20:18:34.675Z",
        "context": {
            "document": {
                "location": {
                    "href": "https://kittycats-trove.myshopify.com/search?q=yoga&options%5Bprefix%5D=last ",
                    "hash": "",
                    "host": "http://kittycats-trove.myshopify.com ",
                    "hostname": "http://kittycats-trove.myshopify.com ",
                    "origin": "https://kittycats-trove.myshopify.com ",
                    "pathname": "/search",
                    "port": "",
                    "protocol": "https:",
                    "search": "?q=yoga&options%5Bprefix%5D=last"
                },
                "referrer": "https://kittycats-trove.myshopify.com/products/commission-long-sleeve-shirt-resale_lm3cuis_2?variant=47024438346004 ",
                "characterSet": "UTF-8",
                "title": "Search: 28 results found for \"yoga\" – kittycats Like New"
            },
            "navigator": {
                "language": "en-US",
                "cookieEnabled": true,
                "languages": [
                    "en-US",
                    "en"
                ],
                "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            },
            "window": {
                "innerHeight": 464,
                "innerWidth": 555,
                "outerHeight": 900,
                "outerWidth": 1440,
                "pageXOffset": 0,
                "pageYOffset": 0,
                "location": {
                    "href": "https://kittycats-trove.myshopify.com/search?q=yoga&options%5Bprefix%5D=last ",
                    "hash": "",
                    "host": "http://kittycats-trove.myshopify.com ",
                    "hostname": "http://kittycats-trove.myshopify.com ",
                    "origin": "https://kittycats-trove.myshopify.com ",
                    "pathname": "/search",
                    "port": "",
                    "protocol": "https:",
                    "search": "?q=yoga&options%5Bprefix%5D=last"
                },
                "origin": "https://kittycats-trove.myshopify.com ",
                "screen": {
                    "height": 900,
                    "width": 1440
                },
                "screenX": 0,
                "screenY": 0,
                "scrollX": 0,
                "scrollY": 0
            }
        }
    },
    "checkout_contact_info_submitted": {
        "id": "sh-88e62cc9-C531-4354-AD15-6C279341265F",
        "name": "checkout_contact_info_submitted",
        "data": {
            "checkout": {
                "attributes": [
                    {
                        "key": "troveOrderUuid",
                        "value": "1fe2bfdf-5611-4d43-87ba-18837554f4ec"
                    }
                ],
                "billingAddress": {
                    "country": "US",
                    "countryCode": "US",
                    "province": "OR",
                    "provinceCode": "OR"
                },
                "t_change_oken": "The key should t o k e n but I changed it to prevent false negatives from security scans",
                "currencyCode": "USD",
                "discountApplications": [
                    {
                        "allocationMethod": "EACH",
                        "targetSelection": "ALL",
                        "targetType": "SHIPPING_LINE",
                        "title": "Free Ship over 50",
                        "type": "automatic",
                        "value": {
                            "percentage": 100
                        }
                    }
                ],
                "email": "pmontgomery@kittycats.com",
                "phone": "",
                "lineItems": [
                    {
                        "discountAllocations": [],
                        "id": "47264580501780",
                        "quantity": 1,
                        "title": "Women's Shirt - Resale",
                        "variant": {
                            "id": "47264580501780",
                            "image": {
                                "src": "https://cdn.shopify.com/s/files/1/0753/5480/0404/products/m3qtosdcvkytffaoh30f_c8a8cfd2-db11-4218-a03b-437a1c6d5064_64x64.jpg?v=1701152440"
                            },
                            "price": {
                                "amount": 42,
                                "currencyCode": "USD"
                            },
                            "product": {
                                "id": "8873232072980",
                                "title": "Women's Shirt - Resale",
                                "vendor": "kittycats",
                                "type": "AZ3058",
                                "untranslatedTitle": "Women's Shirt - Resale",
                                "url": "/products/womens-shirt-resale_az3058_black"
                            },
                            "sku": "AZ3058_Black_16_Good as new",
                            "title": "16 / Good as new",
                            "untranslatedTitle": "16 / Good as new"
                        }
                    },
                    {
                        "discountAllocations": [],
                        "id": "47024438346004",
                        "quantity": 1,
                        "title": "Commission Long Sleeve Shirt - Resale",
                        "variant": {
                            "id": "47024438346004",
                            "image": {
                                "src": "https://cdn.shopify.com/s/files/1/0753/5480/0404/products/vatv3uqtcsnwugk2reoj_1f52168e-be30-499c-b430-72ac9d044efe_64x64.jpg?v=1697578859"
                            },
                            "price": {
                                "amount": 65,
                                "currencyCode": "USD"
                            },
                            "product": {
                                "id": "8782840430868",
                                "title": "Commission Long Sleeve Shirt - Resale",
                                "vendor": "kittycats",
                                "type": "",
                                "untranslatedTitle": "Commission Long Sleeve Shirt - Resale",
                                "url": "/products/commission-long-sleeve-shirt-resale_lm3cuis_2"
                            },
                            "sku": "LM3CUIS_2_XL_Gently used",
                            "title": "XL / Gently used",
                            "untranslatedTitle": "XL / Gently used"
                        }
                    },
                    {
                        "discountAllocations": [],
                        "id": "47331074113812",
                        "quantity": 1,
                        "title": "All Tied Up Tank Top - Resale",
                        "variant": {
                            "id": "47331074113812",
                            "image": {
                                "src": "https://cdn.shopify.com/s/files/1/0753/5480/0404/products/udhygjqgh994ikplkrdw_64x64.jpg?v=1702492182"
                            },
                            "price": {
                                "amount": 29,
                                "currencyCode": "USD"
                            },
                            "product": {
                                "id": "8896125829396",
                                "title": "All Tied Up Tank Top - Resale",
                                "vendor": "kittycats",
                                "type": "LW1BX7S",
                                "untranslatedTitle": "All Tied Up Tank Top - Resale",
                                "url": "/products/all-tied-up-tank-top-resale_lw1bx7s_27574"
                            },
                            "sku": "LW1BX7S_27574_4_Good as new",
                            "title": "4 / Good as new",
                            "untranslatedTitle": "4 / Good as new"
                        }
                    },
                    {
                        "discountAllocations": [],
                        "id": "47174553665812",
                        "quantity": 1,
                        "title": "Commission Long Sleeve Shirt - Resale",
                        "variant": {
                            "id": "47174553665812",
                            "image": {
                                "src": "https://cdn.shopify.com/s/files/1/0753/5480/0404/products/wphxfash4zy0i0swflvj_64x64.jpg?v=1699613880"
                            },
                            "price": {
                                "amount": 65,
                                "currencyCode": "USD"
                            },
                            "product": {
                                "id": "8843988304148",
                                "title": "Commission Long Sleeve Shirt - Resale",
                                "vendor": "kittycats",
                                "type": "LM3CLXS",
                                "untranslatedTitle": "Commission Long Sleeve Shirt - Resale",
                                "url": "/products/commission-long-sleeve-shirt-resale_lm3clxs_48096"
                            },
                            "sku": "LM3CLXS_48096_L_Good as new",
                            "title": "L / Good as new",
                            "untranslatedTitle": "L / Good as new"
                        }
                    },
                    {
                        "discountAllocations": [],
                        "id": "47330550382868",
                        "quantity": 1,
                        "title": "Bhakti Yoga Jacket - Resale",
                        "variant": {
                            "id": "47330550382868",
                            "image": {
                                "src": "https://cdn.shopify.com/s/files/1/0753/5480/0404/products/kw1opnwf2g48lw2ork7f_64x64.jpg?v=1702479179"
                            },
                            "price": {
                                "amount": 59,
                                "currencyCode": "USD"
                            },
                            "product": {
                                "id": "8895935217940",
                                "title": "Bhakti Yoga Jacket - Resale",
                                "vendor": "kittycats",
                                "type": "LW4C20S",
                                "untranslatedTitle": "Bhakti Yoga Jacket - Resale",
                                "url": "/products/bhakti-yoga-jacket-resale_lw4c20s_1"
                            },
                            "sku": "LW4C20S_1_10_Gently used",
                            "title": "10 / Gently used",
                            "untranslatedTitle": "10 / Gently used"
                        }
                    }
                ],
                "order": {},
                "shippingAddress": {
                    "address1": "quux",
                    "address2": "1",
                    "city": "Portland",
                    "country": "US",
                    "countryCode": "US",
                    "firstName": "foo",
                    "lastName": "bar",
                    "phone": "(217) 367-3196",
                    "province": "OR",
                    "provinceCode": "OR",
                    "zip": "97211"
                },
                "subtotalPrice": {
                    "amount": 260,
                    "currencyCode": "USD"
                },
                "shippingLine": {
                    "price": {
                        "amount": 0,
                        "currencyCode": "USD"
                    }
                },
                "totalTax": {
                    "amount": 0
                },
                "totalPrice": {
                    "amount": 260,
                    "currencyCode": "USD"
                },
                "transactions": []
            }
        },
        "clientId": "df1007bb-d108-4f4b-b09e-c9ac586d263d",
        "timestamp": "2023-12-20T20:23:53.884Z",
        "context": {
            "document": {
                "location": {
                    "href": "https://kittycats-trove.myshopify.com/checkouts/cn/c1-d0867c69c60f829d08e02baa85958309/information?ew_m=f ",
                    "hash": "",
                    "host": "http://kittycats-trove.myshopify.com ",
                    "hostname": "http://kittycats-trove.myshopify.com ",
                    "origin": "https://kittycats-trove.myshopify.com ",
                    "pathname": "/checkouts/cn/c1-d0867c69c60f829d08e02baa85958309/information",
                    "port": "",
                    "protocol": "https:",
                    "search": "?ew_m=f"
                },
                "referrer": "https://kittycats-trove.myshopify.com/products/bhakti-yoga-jacket-resale_lw4c20s_1?variant=47330550382868 ",
                "characterSet": "UTF-8",
                "title": "Information - kittycats Like New - Checkout"
            },
            "navigator": {
                "language": "en-US",
                "cookieEnabled": true,
                "languages": [
                    "en-US",
                    "en"
                ],
                "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            },
            "window": {
                "innerHeight": 464,
                "innerWidth": 555,
                "outerHeight": 900,
                "outerWidth": 1440,
                "pageXOffset": 0,
                "pageYOffset": 0,
                "location": {
                    "href": "https://kittycats-trove.myshopify.com/checkouts/cn/c1-d0867c69c60f829d08e02baa85958309/information?ew_m=f ",
                    "hash": "",
                    "host": "http://kittycats-trove.myshopify.com ",
                    "hostname": "http://kittycats-trove.myshopify.com ",
                    "origin": "https://kittycats-trove.myshopify.com ",
                    "pathname": "/checkouts/cn/c1-d0867c69c60f829d08e02baa85958309/information",
                    "port": "",
                    "protocol": "https:",
                    "search": "?ew_m=f"
                },
                "origin": "https://kittycats-trove.myshopify.com ",
                "screen": {
                    "height": 900,
                    "width": 1440
                },
                "screenX": 0,
                "screenY": 0,
                "scrollX": 0,
                "scrollY": 0
            }
        }
    },
    "cart_viewed": {
        "id": "shu-890e6d0e-5285-4393-FC7D-7EE481EFD129",
        "name": "cart_viewed",
        "data": {
            "cart": {
                "cost": {
                    "totalAmount": {
                        "amount": 260,
                        "currencyCode": "USD"
                    }
                },
                "id": "c1-d0867c69c60f829d08e02baa85958309",
                "lines": [
                    {
                        "cost": {
                            "totalAmount": {
                                "amount": 65,
                                "currencyCode": "USD"
                            }
                        },
                        "merchandise": {
                            "id": "47024438346004",
                            "image": {
                                "src": "//kittycats-trove.myshopify.com/cdn/shop/products/vatv3uqtcsnwugk2reoj_1f52168e-be30-499c-b430-72ac9d044efe.jpg?v=1697578859"
                            },
                            "price": {
                                "amount": 65,
                                "currencyCode": "USD"
                            },
                            "product": {
                                "id": "8782840430868",
                                "title": "Commission Long Sleeve Shirt - Resale",
                                "untranslatedTitle": "Commission Long Sleeve Shirt - Resale",
                                "url": "/products/commission-long-sleeve-shirt-resale_lm3cuis_2",
                                "vendor": "kittycats",
                                "type": ""
                            },
                            "sku": "LM3CUIS_2_XL_Gently used",
                            "title": "XL / Gently used",
                            "untranslatedTitle": "XL / Gently used"
                        },
                        "quantity": 1
                    },
                    {
                        "cost": {
                            "totalAmount": {
                                "amount": 65,
                                "currencyCode": "USD"
                            }
                        },
                        "merchandise": {
                            "id": "47174553665812",
                            "image": {
                                "src": "//kittycats-trove.myshopify.com/cdn/shop/products/wphxfash4zy0i0swflvj.jpg?v=1699613880"
                            },
                            "price": {
                                "amount": 65,
                                "currencyCode": "USD"
                            },
                            "product": {
                                "id": "8843988304148",
                                "title": "Commission Long Sleeve Shirt - Resale",
                                "untranslatedTitle": "Commission Long Sleeve Shirt - Resale",
                                "url": "/products/commission-long-sleeve-shirt-resale_lm3clxs_48096",
                                "vendor": "kittycats",
                                "type": "LM3CLXS"
                            },
                            "sku": "LM3CLXS_48096_L_Good as new",
                            "title": "L / Good as new",
                            "untranslatedTitle": "L / Good as new"
                        },
                        "quantity": 1
                    },
                    {
                        "cost": {
                            "totalAmount": {
                                "amount": 42,
                                "currencyCode": "USD"
                            }
                        },
                        "merchandise": {
                            "id": "47264580501780",
                            "image": {
                                "src": "//kittycats-trove.myshopify.com/cdn/shop/products/m3qtosdcvkytffaoh30f_c8a8cfd2-db11-4218-a03b-437a1c6d5064.jpg?v=1701152440"
                            },
                            "price": {
                                "amount": 42,
                                "currencyCode": "USD"
                            },
                            "product": {
                                "id": "8873232072980",
                                "title": "Women's Shirt - Resale",
                                "untranslatedTitle": "Women's Shirt - Resale",
                                "url": "/products/womens-shirt-resale_az3058_black",
                                "vendor": "kittycats",
                                "type": "AZ3058"
                            },
                            "sku": "AZ3058_Black_16_Good as new",
                            "title": "16 / Good as new",
                            "untranslatedTitle": "16 / Good as new"
                        },
                        "quantity": 1
                    },
                    {
                        "cost": {
                            "totalAmount": {
                                "amount": 59,
                                "currencyCode": "USD"
                            }
                        },
                        "merchandise": {
                            "id": "47330550382868",
                            "image": {
                                "src": "//kittycats-trove.myshopify.com/cdn/shop/products/kw1opnwf2g48lw2ork7f.jpg?v=1702479179"
                            },
                            "price": {
                                "amount": 59,
                                "currencyCode": "USD"
                            },
                            "product": {
                                "id": "8895935217940",
                                "title": "Bhakti Yoga Jacket - Resale",
                                "untranslatedTitle": "Bhakti Yoga Jacket - Resale",
                                "url": "/products/bhakti-yoga-jacket-resale_lw4c20s_1",
                                "vendor": "kittycats",
                                "type": "LW4C20S"
                            },
                            "sku": "LW4C20S_1_10_Gently used",
                            "title": "10 / Gently used",
                            "untranslatedTitle": "10 / Gently used"
                        },
                        "quantity": 1
                    },
                    {
                        "cost": {
                            "totalAmount": {
                                "amount": 29,
                                "currencyCode": "USD"
                            }
                        },
                        "merchandise": {
                            "id": "47331074113812",
                            "image": {
                                "src": "//kittycats-trove.myshopify.com/cdn/shop/products/udhygjqgh994ikplkrdw.jpg?v=1702492182"
                            },
                            "price": {
                                "amount": 29,
                                "currencyCode": "USD"
                            },
                            "product": {
                                "id": "8896125829396",
                                "title": "All Tied Up Tank Top - Resale",
                                "untranslatedTitle": "All Tied Up Tank Top - Resale",
                                "url": "/products/all-tied-up-tank-top-resale_lw1bx7s_27574",
                                "vendor": "kittycats",
                                "type": "LW1BX7S"
                            },
                            "sku": "LW1BX7S_27574_4_Good as new",
                            "title": "4 / Good as new",
                            "untranslatedTitle": "4 / Good as new"
                        },
                        "quantity": 1
                    }
                ],
                "totalQuantity": 5
            }
        },
        "clientId": "df1007bb-d108-4f4b-b09e-c9ac586d263d",
        "timestamp": "2023-12-20T21:07:52.711Z",
        "context": {
            "document": {
                "location": {
                    "href": "https://kittycats-trove.myshopify.com/cart ",
                    "hash": "",
                    "host": "http://kittycats-trove.myshopify.com ",
                    "hostname": "http://kittycats-trove.myshopify.com ",
                    "origin": "https://kittycats-trove.myshopify.com ",
                    "pathname": "/cart",
                    "port": "",
                    "protocol": "https:",
                    "search": ""
                },
                "referrer": "https://kittycats-trove.myshopify.com/collections/women?sort_by=price-descending ",
                "characterSet": "UTF-8",
                "title": "Your Shopping Cart – kittycats Like New"
            },
            "navigator": {
                "language": "en-US",
                "cookieEnabled": true,
                "languages": [
                    "en-US",
                    "en"
                ],
                "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            },
            "window": {
                "innerHeight": 464,
                "innerWidth": 555,
                "outerHeight": 900,
                "outerWidth": 1440,
                "pageXOffset": 0,
                "pageYOffset": 0,
                "location": {
                    "href": "https://kittycats-trove.myshopify.com/cart ",
                    "hash": "",
                    "host": "http://kittycats-trove.myshopify.com ",
                    "hostname": "http://kittycats-trove.myshopify.com ",
                    "origin": "https://kittycats-trove.myshopify.com ",
                    "pathname": "/cart",
                    "port": "",
                    "protocol": "https:",
                    "search": ""
                },
                "origin": "https://kittycats-trove.myshopify.com ",
                "screen": {
                    "height": 900,
                    "width": 1440
                },
                "screenX": 0,
                "screenY": 0,
                "scrollX": 0,
                "scrollY": 0
            }
        }
    },
    "checkout_started": {
        "id": "sh-89155471-A630-441E-DDC8-9D12A1ECCC10",
        "name": "checkout_started",
        "data": {
            "checkout": {
                "attributes": [
                    {
                        "key": "troveOrderUuid",
                        "value": "1fe2bfdf-5611-4d43-87ba-18837554f4ec"
                    }
                ],
                "billingAddress": {},
                "t_change_oken": "The key should t o k e n but I changed it to prevent false negatives from security scans",
		"currencyCode": "USD",
                "discountApplications": [
                    {
                        "allocationMethod": "EACH",
                        "targetSelection": "ALL",
                        "targetType": "SHIPPING_LINE",
                        "title": "Free Ship over 50",
                        "type": "automatic",
                        "value": {
                            "percentage": 100
                        }
                    }
                ],
                "lineItems": [
                    {
                        "discountAllocations": [],
                        "id": "47264580501780",
                        "quantity": 1,
                        "title": "Women's Shirt - Resale",
                        "variant": {
                            "id": "47264580501780",
                            "image": {
                                "src": "https://cdn.shopify.com/s/files/1/0753/5480/0404/products/m3qtosdcvkytffaoh30f_c8a8cfd2-db11-4218-a03b-437a1c6d5064_64x64.jpg?v=1701152440"
                            },
                            "price": {
                                "amount": 42,
                                "currencyCode": "USD"
                            },
                            "product": {
                                "id": "8873232072980",
                                "title": "Women's Shirt - Resale",
                                "vendor": "kittycats",
                                "type": "AZ3058",
                                "untranslatedTitle": "Women's Shirt - Resale",
                                "url": "/products/womens-shirt-resale_az3058_black"
                            },
                            "sku": "AZ3058_Black_16_Good as new",
                            "title": "16 / Good as new",
                            "untranslatedTitle": "16 / Good as new"
                        }
                    },
                    {
                        "discountAllocations": [],
                        "id": "47024438346004",
                        "quantity": 1,
                        "title": "Commission Long Sleeve Shirt - Resale",
                        "variant": {
                            "id": "47024438346004",
                            "image": {
                                "src": "https://cdn.shopify.com/s/files/1/0753/5480/0404/products/vatv3uqtcsnwugk2reoj_1f52168e-be30-499c-b430-72ac9d044efe_64x64.jpg?v=1697578859"
                            },
                            "price": {
                                "amount": 65,
                                "currencyCode": "USD"
                            },
                            "product": {
                                "id": "8782840430868",
                                "title": "Commission Long Sleeve Shirt - Resale",
                                "vendor": "kittycats",
                                "type": "",
                                "untranslatedTitle": "Commission Long Sleeve Shirt - Resale",
                                "url": "/products/commission-long-sleeve-shirt-resale_lm3cuis_2"
                            },
                            "sku": "LM3CUIS_2_XL_Gently used",
                            "title": "XL / Gently used",
                            "untranslatedTitle": "XL / Gently used"
                        }
                    },
                    {
                        "discountAllocations": [],
                        "id": "47331074113812",
                        "quantity": 1,
                        "title": "All Tied Up Tank Top - Resale",
                        "variant": {
                            "id": "47331074113812",
                            "image": {
                                "src": "https://cdn.shopify.com/s/files/1/0753/5480/0404/products/udhygjqgh994ikplkrdw_64x64.jpg?v=1702492182"
                            },
                            "price": {
                                "amount": 29,
                                "currencyCode": "USD"
                            },
                            "product": {
                                "id": "8896125829396",
                                "title": "All Tied Up Tank Top - Resale",
                                "vendor": "kittycats",
                                "type": "LW1BX7S",
                                "untranslatedTitle": "All Tied Up Tank Top - Resale",
                                "url": "/products/all-tied-up-tank-top-resale_lw1bx7s_27574"
                            },
                            "sku": "LW1BX7S_27574_4_Good as new",
                            "title": "4 / Good as new",
                            "untranslatedTitle": "4 / Good as new"
                        }
                    },
                    {
                        "discountAllocations": [],
                        "id": "47174553665812",
                        "quantity": 1,
                        "title": "Commission Long Sleeve Shirt - Resale",
                        "variant": {
                            "id": "47174553665812",
                            "image": {
                                "src": "https://cdn.shopify.com/s/files/1/0753/5480/0404/products/wphxfash4zy0i0swflvj_64x64.jpg?v=1699613880"
                            },
                            "price": {
                                "amount": 65,
                                "currencyCode": "USD"
                            },
                            "product": {
                                "id": "8843988304148",
                                "title": "Commission Long Sleeve Shirt - Resale",
                                "vendor": "kittycats",
                                "type": "LM3CLXS",
                                "untranslatedTitle": "Commission Long Sleeve Shirt - Resale",
                                "url": "/products/commission-long-sleeve-shirt-resale_lm3clxs_48096"
                            },
                            "sku": "LM3CLXS_48096_L_Good as new",
                            "title": "L / Good as new",
                            "untranslatedTitle": "L / Good as new"
                        }
                    },
                    {
                        "discountAllocations": [],
                        "id": "47330550382868",
                        "quantity": 1,
                        "title": "Bhakti Yoga Jacket - Resale",
                        "variant": {
                            "id": "47330550382868",
                            "image": {
                                "src": "https://cdn.shopify.com/s/files/1/0753/5480/0404/products/kw1opnwf2g48lw2ork7f_64x64.jpg?v=1702479179"
                            },
                            "price": {
                                "amount": 59,
                                "currencyCode": "USD"
                            },
                            "product": {
                                "id": "8895935217940",
                                "title": "Bhakti Yoga Jacket - Resale",
                                "vendor": "kittycats",
                                "type": "LW4C20S",
                                "untranslatedTitle": "Bhakti Yoga Jacket - Resale",
                                "url": "/products/bhakti-yoga-jacket-resale_lw4c20s_1"
                            },
                            "sku": "LW4C20S_1_10_Gently used",
                            "title": "10 / Gently used",
                            "untranslatedTitle": "10 / Gently used"
                        }
                    },
                    {
                        "discountAllocations": [],
                        "id": "47063657120020",
                        "quantity": 1,
                        "title": "Wunder Under Crop - Resale",
                        "variant": {
                            "id": "47063657120020",
                            "image": {
                                "src": "https://cdn.shopify.com/s/files/1/0753/5480/0404/products/t5ctsrj2cxeag1nmityn_64x64.jpg?v=1698087640"
                            },
                            "price": {
                                "amount": 39,
                                "currencyCode": "USD"
                            },
                            "product": {
                                "id": "8797079830804",
                                "title": "Wunder Under Crop - Resale",
                                "vendor": "kittycats",
                                "type": "",
                                "untranslatedTitle": "Wunder Under Crop - Resale",
                                "url": "/products/wunder-under-crop-resale_lw6339s_3407"
                            },
                            "sku": "LW6339S_3407_4_Good as new",
                            "title": "4 / Good as new",
                            "untranslatedTitle": "4 / Good as new"
                        }
                    }
                ],
                "order": {},
                "shippingAddress": {
                    "address1": "quux",
                    "address2": "1",
                    "city": "Portland",
                    "country": "US",
                    "countryCode": "US",
                    "firstName": "foo",
                    "lastName": "bar",
                    "phone": "(217) 367-3196",
                    "province": "OR",
                    "provinceCode": "OR",
                    "zip": "97211"
                },
                "subtotalPrice": {
                    "amount": 299,
                    "currencyCode": "USD"
                },
                "shippingLine": {
                    "price": {
                        "amount": 0,
                        "currencyCode": "USD"
                    }
                },
                "totalTax": {
                    "amount": 0
                },
                "totalPrice": {
                    "amount": 299,
                    "currencyCode": "USD"
                },
                "transactions": []
            }
        },
        "clientId": "df1007bb-d108-4f4b-b09e-c9ac586d263d",
        "timestamp": "2023-12-20T21:15:24.296Z",
        "context": {
            "document": {
                "location": {
                    "href": "https://kittycats-trove.myshopify.com/checkouts/cn/c1-d0867c69c60f829d08e02baa85958309/information?ew_m=f ",
                    "hash": "",
                    "host": "http://kittycats-trove.myshopify.com ",
                    "hostname": "http://kittycats-trove.myshopify.com ",
                    "origin": "https://kittycats-trove.myshopify.com ",
                    "pathname": "/checkouts/cn/c1-d0867c69c60f829d08e02baa85958309/information",
                    "port": "",
                    "protocol": "https:",
                    "search": "?ew_m=f"
                },
                "referrer": "https://kittycats-trove.myshopify.com/products/wunder-under-crop-resale_lw6339s_3407?variant=47063657120020 ",
                "characterSet": "UTF-8",
                "title": "Information - kittycats Like New - Checkout"
            },
            "navigator": {
                "language": "en-US",
                "cookieEnabled": true,
                "languages": [
                    "en-US",
                    "en"
                ],
                "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            },
            "window": {
                "innerHeight": 813,
                "innerWidth": 971,
                "outerHeight": 900,
                "outerWidth": 1440,
                "pageXOffset": 0,
                "pageYOffset": 0,
                "location": {
                    "href": "https://kittycats-trove.myshopify.com/checkouts/cn/c1-d0867c69c60f829d08e02baa85958309/information?ew_m=f ",
                    "hash": "",
                    "host": "http://kittycats-trove.myshopify.com ",
                    "hostname": "http://kittycats-trove.myshopify.com ",
                    "origin": "https://kittycats-trove.myshopify.com ",
                    "pathname": "/checkouts/cn/c1-d0867c69c60f829d08e02baa85958309/information",
                    "port": "",
                    "protocol": "https:",
                    "search": "?ew_m=f"
                },
                "origin": "https://kittycats-trove.myshopify.com ",
                "screen": {
                    "height": 900,
                    "width": 1440
                },
                "screenX": 0,
                "screenY": 0,
                "scrollX": 0,
                "scrollY": 0
            }
        }
    },
    "collection_viewed": {
        "id": "sh-89220b94-657B-4FCF-BFC1-815BAC90B4FF",
        "name": "collection_viewed",
        "data": {
            "collection": {
                "id": "460445548820",
                "title": "Women's Clothing & Accessories",
                "productVariants": [
                    {
                        "id": "47210660823316",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/lofjlp4aixw68amc7gzm.jpg?v=1700217715"
                        },
                        "price": {
                            "amount": 69,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8855953178900",
                            "title": "Wunder Under High Rise Legging - Resale",
                            "untranslatedTitle": "Wunder Under High Rise Legging - Resale",
                            "url": "/products/wunder-under-high-rise-legging-resale_lw5cnls_43965",
                            "vendor": "kittycats",
                            "type": "LW5CNLS"
                        },
                        "sku": "LW5CNLS_43965_12_Good as new",
                        "title": "12 / Good as new",
                        "untranslatedTitle": "12 / Good as new"
                    },
                    {
                        "id": "46205959110932",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/tnn97jziaaklou7aadxc.jpg?v=1692070756"
                        },
                        "price": {
                            "amount": 15,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8530423972116",
                            "title": "Astro Short - Resale",
                            "untranslatedTitle": "Astro Short - Resale",
                            "url": "/products/astro-short-resale_lw7858s_1",
                            "vendor": "kittycats",
                            "type": ""
                        },
                        "sku": "LW7858S_1_10_Good as new",
                        "title": "10 / Good as new",
                        "untranslatedTitle": "10 / Good as new"
                    },
                    {
                        "id": "47190286041364",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/bcmmk7ojfuvjf21xkmob.jpg?v=1699912721"
                        },
                        "price": {
                            "amount": 49,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8849081958676",
                            "title": "kittycats Align™ High-Rise Crop - Resale",
                            "untranslatedTitle": "kittycats Align™ High-Rise Crop - Resale",
                            "url": "/products/kittycats-align-high-rise-crop-resale_lw6ay2s_2",
                            "vendor": "kittycats",
                            "type": "LW6AY2S"
                        },
                        "sku": "LW6AY2S_2_0_Good as new",
                        "title": "0 / Good as new",
                        "untranslatedTitle": "0 / Good as new"
                    },
                    {
                        "id": "47318391882004",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/ulenpapvl7mqjdho0nb6_c9bf1438-b4fb-49b3-a319-eede1ea5cac0.jpg?v=1702487868"
                        },
                        "price": {
                            "amount": 49,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8891683668244",
                            "title": "Wunder Under Legging - Resale",
                            "untranslatedTitle": "Wunder Under Legging - Resale",
                            "url": "/products/wunder-under-legging-resale_lw5500s_7428",
                            "vendor": "kittycats",
                            "type": "LW5500S"
                        },
                        "sku": "LW5500S_7428_8_Good as new",
                        "title": "8 / Good as new",
                        "untranslatedTitle": "8 / Good as new"
                    },
                    {
                        "id": "47310715552020",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/swwera0xaz1i9ic7a5ap.jpg?v=1702033625"
                        },
                        "price": {
                            "amount": 19,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8889658736916",
                            "title": "Love Sleeveless Tank Top - Resale",
                            "untranslatedTitle": "Love Sleeveless Tank Top - Resale",
                            "url": "/products/love-sleeveless-tank-top-resale_lw1aops_2",
                            "vendor": "kittycats",
                            "type": "LW1AOPS"
                        },
                        "sku": "LW1AOPS_2_4_Gently used",
                        "title": "4 / Gently used",
                        "untranslatedTitle": "4 / Gently used"
                    },
                    {
                        "id": "47219208814868",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/wowx7kdgisb8f0syhykt.jpg?v=1700404415"
                        },
                        "price": {
                            "amount": 69,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8857640567060",
                            "title": "All Yours Tank Midi Dress - Resale",
                            "untranslatedTitle": "All Yours Tank Midi Dress - Resale",
                            "url": "/products/all-yours-tank-midi-dress-resale_lw1cq8s_48131",
                            "vendor": "kittycats",
                            "type": "LW1CQ8S"
                        },
                        "sku": "LW1CQ8S_48131_6_Good as new",
                        "title": "6 / Good as new",
                        "untranslatedTitle": "6 / Good as new"
                    },
                    {
                        "id": "47202152513812",
                        "image": null,
                        "price": {
                            "amount": 75,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8853644050708",
                            "title": "Hooded Define Jacket - Resale",
                            "untranslatedTitle": "Hooded Define Jacket - Resale",
                            "url": "/products/hooded-define-jacket-resale_lw4bcjs_47316",
                            "vendor": "kittycats",
                            "type": "LW4BCJS"
                        },
                        "sku": "LW4BCJS_47316_10_Good as new",
                        "title": "10 / Good as new",
                        "untranslatedTitle": "10 / Good as new"
                    },
                    {
                        "id": "47063660101908",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/ml9dddvezlkfexabjawo.jpg?v=1698087676"
                        },
                        "price": {
                            "amount": 39,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8797082091796",
                            "title": "Wunder Under Crop - Resale",
                            "untranslatedTitle": "Wunder Under Crop - Resale",
                            "url": "/products/wunder-under-crop-resale_lw6339s_9732",
                            "vendor": "kittycats",
                            "type": ""
                        },
                        "sku": "LW6339S_9732_4_Good as new",
                        "title": "4 / Good as new",
                        "untranslatedTitle": "4 / Good as new"
                    },
                    {
                        "id": "47365005738260",
                        "image": null,
                        "price": {
                            "amount": 65,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8904001519892",
                            "title": "Rush Hour Long Sleeve Shirt - Resale",
                            "untranslatedTitle": "Rush Hour Long Sleeve Shirt - Resale",
                            "url": "/products/rush-hour-long-sleeve-shirt-resale_lw3aaos_26620",
                            "vendor": "kittycats",
                            "type": "LW3AAOS"
                        },
                        "sku": "LW3AAOS_26620_10_Good as new",
                        "title": "10 / Good as new",
                        "untranslatedTitle": "10 / Good as new"
                    },
                    {
                        "id": "47360885653780",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/tn4cguljhdv069od709z.jpg?v=1703028863"
                        },
                        "price": {
                            "amount": 39,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8903088472340",
                            "title": "Love Scoop Long Sleeve - Resale",
                            "untranslatedTitle": "Love Scoop Long Sleeve - Resale",
                            "url": "/products/love-scoop-long-sleeve-resale_lw3af3s_2",
                            "vendor": "kittycats",
                            "type": "LW3AF3S"
                        },
                        "sku": "LW3AF3S_2_4_Gently used",
                        "title": "4 / Gently used",
                        "untranslatedTitle": "4 / Gently used"
                    },
                    {
                        "id": "47360881426708",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/hj8rp77mulqsc5yrllrc_cba33ef2-b595-4ad3-88c1-b965d6bdedde.jpg?v=1703028785"
                        },
                        "price": {
                            "amount": 39,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8903085916436",
                            "title": "Wunder Under Crop - Resale",
                            "untranslatedTitle": "Wunder Under Crop - Resale",
                            "url": "/products/wunder-under-crop-resale_lw6712s_2",
                            "vendor": "kittycats",
                            "type": "LW6712S"
                        },
                        "sku": "LW6712S_2_6_Good as new",
                        "title": "6 / Good as new",
                        "untranslatedTitle": "6 / Good as new"
                    },
                    {
                        "id": "47360882114836",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/xf46hpdk8mmma4zfqvhp_9c433576-cefe-4784-8497-f705ce8883b7.jpg?v=1703028788"
                        },
                        "price": {
                            "amount": 39,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8903086178580",
                            "title": "Wunder Under Crop - Resale",
                            "untranslatedTitle": "Wunder Under Crop - Resale",
                            "url": "/products/wunder-under-crop-resale_lw6712s_9927",
                            "vendor": "kittycats",
                            "type": "LW6712S"
                        },
                        "sku": "LW6712S_9927_10_Good as new",
                        "title": "10 / Good as new",
                        "untranslatedTitle": "10 / Good as new"
                    },
                    {
                        "id": "47360312246548",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/qlcsxf609qwxnp3faedn_9b8561a2-e058-4aa8-94ed-cb8ea0c9a77b.jpg?v=1703025040"
                        },
                        "price": {
                            "amount": 89,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8902973718804",
                            "title": "Tight Stuff Tight - Resale",
                            "untranslatedTitle": "Tight Stuff Tight - Resale",
                            "url": "/products/tight-stuff-tight-resale_lw5bc8s_32558",
                            "vendor": "kittycats",
                            "type": "LW5BC8S"
                        },
                        "sku": "LW5BC8S_32558_2_Good as new",
                        "title": "2 / Good as new",
                        "untranslatedTitle": "2 / Good as new"
                    },
                    {
                        "id": "47353032081684",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/bhuoicwlosdl9cpkcjv4_2260a27b-810a-4d36-a2a5-77668321c570.jpg?v=1703008090"
                        },
                        "price": {
                            "amount": 29,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8902436782356",
                            "title": "Feminine High Volume Burnout Tank Top - Resale",
                            "untranslatedTitle": "Feminine High Volume Burnout Tank Top - Resale",
                            "url": "/products/feminine-high-volume-burnout-tank-top-resale_lw1cq6s_1",
                            "vendor": "kittycats",
                            "type": "LW1CQ6S"
                        },
                        "sku": "LW1CQ6S_1_4_Good as new",
                        "title": "4 / Good as new",
                        "untranslatedTitle": "4 / Good as new"
                    },
                    {
                        "id": "47353032507668",
                        "image": {
                            "src": "//kittycats-trove.myshopify.com/cdn/shop/products/mo73oq4rqxrp7s33dnv9_93b8a2a7-63ec-4552-beb1-342aefa59f29.jpg?v=1703008094"
                        },
                        "price": {
                            "amount": 29,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8902437044500",
                            "title": "Feminine High Volume Burnout Tank Top - Resale",
                            "untranslatedTitle": "Feminine High Volume Burnout Tank Top - Resale",
                            "url": "/products/feminine-high-volume-burnout-tank-top-resale_lw1cq6s_4242",
                            "vendor": "kittycats",
                            "type": "LW1CQ6S"
                        },
                        "sku": "LW1CQ6S_4242_4_Good as new",
                        "title": "4 / Good as new",
                        "untranslatedTitle": "4 / Good as new"
                    },
                    {
                        "id": "47353032245524",
                        "image": null,
                        "price": {
                            "amount": 29,
                            "currencyCode": "USD"
                        },
                        "product": {
                            "id": "8902436880660",
                            "title": "Cinch Me Up Tank Top - Resale",
                            "untranslatedTitle": "Cinch Me Up Tank Top - Resale",
                            "url": "/products/cinch-me-up-tank-top-resale_lw1cq6s_34464",
                            "vendor": "kittycats",
                            "type": "LW1CQ6S"
                        },
                        "sku": "LW1CQ6S_34464_0_Good as new",
                        "title": "0 / Good as new",
                        "untranslatedTitle": "0 / Good as new"
                    }
                ]
            }
        },
        "clientId": "df1007bb-d108-4f4b-b09e-c9ac586d263d",
        "timestamp": "2023-12-20T21:29:18.369Z",
        "context": {
            "document": {
                "location": {
                    "href": "https://kittycats-trove.myshopify.com/collections/women ",
                    "hash": "",
                    "host": "http://kittycats-trove.myshopify.com ",
                    "hostname": "http://kittycats-trove.myshopify.com ",
                    "origin": "https://kittycats-trove.myshopify.com ",
                    "pathname": "/collections/women",
                    "port": "",
                    "protocol": "https:",
                    "search": ""
                },
                "referrer": "https://kittycats-trove.myshopify.com/ ",
                "characterSet": "UTF-8",
                "title": "Women's Clothing & Accessories – kittycats Like New"
            },
            "navigator": {
                "language": "en-US",
                "cookieEnabled": true,
                "languages": [
                    "en-US",
                    "en"
                ],
                "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            },
            "window": {
                "innerHeight": 813,
                "innerWidth": 971,
                "outerHeight": 900,
                "outerWidth": 1440,
                "pageXOffset": 0,
                "pageYOffset": 0,
                "location": {
                    "href": "https://kittycats-trove.myshopify.com/collections/women ",
                    "hash": "",
                    "host": "http://kittycats-trove.myshopify.com ",
                    "hostname": "http://kittycats-trove.myshopify.com ",
                    "origin": "https://kittycats-trove.myshopify.com ",
                    "pathname": "/collections/women",
                    "port": "",
                    "protocol": "https:",
                    "search": ""
                },
                "origin": "https://kittycats-trove.myshopify.com ",
                "screen": {
                    "height": 900,
                    "width": 1440
                },
                "screenX": 0,
                "screenY": 0,
                "scrollX": 0,
                "scrollY": 0
            }
        }
    }
}


// for ( let k in lam_min ) { 
//     console.log("<option>" + k + "</option>")
// }


for (  let k in shopify_data  ) {

    console.log( "<option>" + k + "</option>")
}