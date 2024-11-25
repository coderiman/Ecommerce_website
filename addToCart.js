import { getCardProductFromLS } from "./getCardProduct";
import { updateCartValue } from "./updateCartValue";
getCardProductFromLS();
export const addToCart = (event,id,stock)=>{
   let arrLocalStorageProduct = getCardProductFromLS();
   const currentProdElem = document.querySelector(`#card${id}`);
   //    console.log(currentProdElem);
   let quantity=currentProdElem.querySelector(".productQuantity").innerText;
   quantity = Number(quantity);
   let price = currentProdElem.querySelector(".productPrice").innerText.split(":")[1];
     //    console.log(price);
   price = price.replace("$"," ");
   let existingProd  = arrLocalStorageProduct.find((curProd)=>curProd.id ==id);
   if(existingProd && quantity>1)
   {
    price =price*quantity;
    quantity = existingProd.quantity + quantity;
    let updatedCart = {id,quantity,price};
    updatedCart = arrLocalStorageProduct.map((currProd) => {
      if (currProd.id === id) {
          return updatedCart; // Return the updated product if IDs match
      } else {
          return currProd; // Return the current product otherwise
      }
    
  });
  localStorage.setItem("cartProductLs",JSON.stringify( updatedCart));
   }
   if(existingProd)
   { return false;}

   console.log("existing/or not",existingProd);
   price = price*quantity; 
   let updateCart = {id,quantity,price};
   arrLocalStorageProduct.push(updateCart);
   localStorage.setItem("cartProductLs",JSON.stringify(arrLocalStorageProduct));
   updateCartValue(arrLocalStorageProduct);
}