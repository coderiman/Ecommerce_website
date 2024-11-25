import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector("#productContainer");
const productTemplate =  document.querySelector("#productTemplate");
export const showProductContainer = (products)=>{
    if(!products)
    {
        return false;
    }
    products.forEach((currElem)=>{
        const {brand,category,description,id,images,name,price,stock} = currElem;
        const productClone = document.importNode(productTemplate.content,true);
        productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src= images;
        productClone.querySelector(".productStock").textContent= stock;
        productClone.querySelector(".productPrice").textContent= `Price : ${price}`;
        productClone.querySelector(".productActualPrice").textContent= `Actual Price:$${price*1.2}`;
        productClone.querySelector(".stockElement").addEventListener("click",(event)=>{homeQuantityToggle(event,id,stock);});
        productClone.querySelector(".add-to-card-button").addEventListener("click",(event)=>{addToCart(event,id,stock)});
        productContainer.append(productClone);

    })
}