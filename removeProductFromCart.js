import { getCardProductFromLS } from "./getCardProduct";
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart =(id)=>{
    let cartProducts = getCardProductFromLS();
    cartProducts = cartProducts.filter((currprod)=> !(id==currprod.id));
    localStorage.setItem("cartProductLs",JSON.stringify(cartProducts));
    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv)
    {
        removeDiv.remove();
    }
    updateCartValue(cartProducts);
}