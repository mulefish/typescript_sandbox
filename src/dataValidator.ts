
import { Product, Sku, Price, Name, Component, Image, ProductVariant } from './types'

function isProductList(LoO: Product[]): boolean {
  let isOk = true;
  for (let i = 0; i < LoO.length; i++) {
    // LAM 
    isOk &&= LoO[i].hasOwnProperty('categoryUnifiedId') && isString(LoO[i].categoryUnifiedId);
    isOk &&= LoO[i].hasOwnProperty('unifiedId') && isString(LoO[i].unifiedId);
    isOk &&= LoO[i].hasOwnProperty('productId') && isString(LoO[i].productId);
    isOk &&= LoO[i].hasOwnProperty('productId') && Array.isArray(LoO[i].skuList);

  }
  return isOk;
}

function isProduct(obj: Product): boolean {
  let isOk = true
  isOk &&= obj.hasOwnProperty('title') && isString(obj.title);
  isOk &&= obj.hasOwnProperty('vendor') && isString(obj.vendor);
  isOk &&= obj.hasOwnProperty('id') && isString(obj.id);
  isOk &&= obj.hasOwnProperty('untranslatedTitle') && isString(obj.untranslatedTitle);
  isOk &&= obj.hasOwnProperty('url') && isString(obj.url);
  isOk &&= obj.hasOwnProperty('type') && isString(obj.type);
  return isOk;
}



function isName(obj: Name): boolean {
  return obj.hasOwnProperty("unified") && obj.hasOwnProperty("localized");
}

function isSkuList(LoO: Sku[]): boolean {
  let isOk = true;
  for (let i = 0; i < LoO.length; i++) {
    isOk &&= LoO[i].hasOwnProperty('quantity') && isNumber(LoO[i].quantity);
    isOk &&= LoO[i].hasOwnProperty('size');
    isOk &&= LoO[i].hasOwnProperty('sku');
    isOk &&= LoO[i].hasOwnProperty('price') && typeof LoO[i].price === "object";
  }
  return isOk;
}

function isPrice(obj: Price): boolean {
  let isOk1 = true;
  // LAM Version 
  isOk1 &&= obj.hasOwnProperty('saleWithoutTaxShipping') && isString(obj.saleWithoutTaxShipping)
  isOk1 &&= obj.hasOwnProperty('taxOnly') && isString(obj.taxOnly);
  isOk1 &&= obj.hasOwnProperty('displaySale') && isString(obj.displaySale);
  isOk1 &&= obj.hasOwnProperty('displayRegular') && isString(obj.displayRegular);
  isOk1 &&= obj.hasOwnProperty('isSale') && isBoolean(obj.isSale);

  // Shopify version
  let isOk2 = true
  isOk2 &&= obj.hasOwnProperty('amount') && isNumber(obj.amount)
  isOk2 &&= obj.hasOwnProperty('currencyCode') && isString(obj.currencyCode);

  const isOk = isOk1 === true || isOk2 === true
  return isOk;
}


function isProductVariant(obj:ProductVariant): boolean {
  let isOk = true 
  isOk &&= obj.hasOwnProperty('id') && isString(obj.id); 
  isOk &&= obj.hasOwnProperty('image');
  isOk &&= obj.hasOwnProperty('price');
  isOk &&= obj.hasOwnProperty('product');
  isOk &&= obj.hasOwnProperty('sku');
  isOk &&= obj.hasOwnProperty('title');
  isOk &&= obj.hasOwnProperty('untranslatedTitle');

  return isOk 
}

function isComponent(candidate: Component): boolean {
  let isOk = true;
  isOk &&= candidate.hasOwnProperty('id') && typeof candidate.id === "string";
  isOk &&= candidate.hasOwnProperty('type') && typeof candidate.type === "string";
  isOk &&= candidate.hasOwnProperty('text') && typeof candidate.text === "string";
  return isOk;
}
function isCollectionList(candidate: Component): boolean {
  let isOk = true;
  console.log(candidate)
  return isOk;
}



const lookup: Record<string, (arg: any) => boolean> = {
  'productList': isProductList,
  'name': isName,
  'skuList': isSkuList,
  'price': isPrice,
  'component': isComponent,
  'collectionList': isCollectionList,
  'product':isProduct
};

function isNumber(x: any): x is number {
  return typeof x === 'number';
}
function isString(x: any): x is string {
  return typeof x === 'string';
}

function isBoolean(x: any): x is boolean {
  return typeof x === 'boolean';
}

const BASE = "BASE";
type UnfoldResult = Record<string, any>;
function unfold(
  candidate: any,
  parent: string = BASE,
  loop: number,
  results: UnfoldResult
): UnfoldResult {
  loop++;

  if (lookup.hasOwnProperty(parent)) {
    const x = lookup[parent](candidate);
    results[parent] = x;
  }

  if (typeof candidate === 'object' && candidate !== null) {
    for (let child in candidate) {
      if (candidate.hasOwnProperty(child)) {
        if (typeof candidate[child] === 'object') {
          if (parent !== BASE) {
            if (!isNumber(child)) {
              if (lookup.hasOwnProperty(child)) {
                const x = lookup[child](candidate[child]);
                results[child] = x;
              }
            }
          }
          unfold(candidate[child], child, loop, results);
        }
      }
    }
  }
  return results;
}

export function validateThis(theJson: any): Record<string, boolean> {
  const unfoldedResults = unfold(theJson, undefined, 0, []);
  return unfoldedResults;
}
