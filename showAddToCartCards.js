import products from "./api/products.json";
import { fetchQuantityCartLS } from "./fetchQuantityCartLS";
import { getCardProductFromLS } from "./getCardProduct";
import { incrementDecrement } from "./incrementdecrement";
import { removeProductFromCart } from "./removeProductFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";
let cartProducts = getCardProductFromLS();
// console.log(cartProducts);
let filterProducts  = products.filter((currProd)=>{
    return cartProducts.some((currElem)=>currElem.id==currProd.id);
});
console.log(filterProducts);
const cartElement = document.querySelector("#productCartConatiner");
const templateContainer  = document.querySelector("#productcartTemplate");
const showCartProduct = ()=>{
    filterProducts.forEach((curProd)=>{
        const {category,id,images,name,stock,price} = curProd;
        // console.log(category);
        let productClone = document.importNode(templateContainer.content,true);
        // console.dir(productClone);
        const lsActualData = fetchQuantityCartLS(id,price);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src= images;
        productClone.querySelector(".productStock").textContent= stock;
        productClone.querySelector(".productQuantity").textContent= lsActualData.quantity;
        productClone.querySelector(".productPrice").textContent= `Price : ${price*lsActualData.quantity}`;
        productClone.querySelector(".stockElement").addEventListener("click",(event)=>{incrementDecrement(event,id,stock,price)})
        productClone.querySelector('.remove-to-cart-button').addEventListener("click",()=>removeProductFromCart(id));
        cartElement.appendChild(productClone)
    })
}
showCartProduct();
updateCartProductTotal();