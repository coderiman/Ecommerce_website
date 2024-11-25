import { getCardProductFromLS } from "./getCardProduct"

export const fetchQuantityCartLS = (id,price)=>{
    let cartProducts = getCardProductFromLS();
    // console.log("id:",id);
    let existingProduct = cartProducts.find((curProd)=>curProd.id==id);
    let quantity = 1;
    // console.log(existingProduct);
    if(existingProduct)
    {
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }
    // console.log(price,quantity);
    return {price,quantity};
}