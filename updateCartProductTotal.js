import { getCardProductFromLS } from "./getCardProduct"

export const updateCartProductTotal = ()=>{
    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFindTaotal");
    let localCartProducts = getCardProductFromLS();
    let initialValue = 0;
    let totalProductPrice =  localCartProducts.reduce((accum,curElem)=>{
        console.log(curElem);
        let productPrice = parseInt(curElem.price) || 0;
        return accum +productPrice;
    },initialValue)
    console.log(totalProductPrice);
    productSubTotal.innerText = totalProductPrice;
    productFinalTotal.innerText = totalProductPrice + 50;
}