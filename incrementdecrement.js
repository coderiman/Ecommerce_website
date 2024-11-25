import { getCardProductFromLS } from "./getCardProduct";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, stock, price) => {
    const currentCardElement = document.querySelector(`#card${id}`);
    // console.log(currentCardElement);
    const productQuantity = currentCardElement.querySelector(".productQuantity");
    const productPrice = currentCardElement.querySelector(".productPrice");
    let quantity = 1;
    let localStoragePrice = 0;
    let localCartProducts = getCardProductFromLS();
    let existingProduct = localCartProducts.find((currProd) => currProd.id == id);
    if (existingProduct) {
        quantity = existingProduct.quantity;
        localStoragePrice = existingProduct.price;
    } else {
        localStoragePrice = price;
        price = price;
    }
    if (event.target.className == "cartIncrement") {
        if (quantity < 50) {
            quantity = quantity + 1;
        } else if (quantity == stock) {
            quantity = stock;
            localStoragePrice = stock * price;
        }
    }
    if (event.target.className == 'cartDecrement') {
        if (quantity > 1) {
            quantity -= 1;
        }
    }
    localStoragePrice = price * quantity;
    let updatedCart = { id, quantity, price: localStoragePrice };
    updatedCart = localCartProducts.map((currProd) => {
        if (currProd.id === id) {
            return updatedCart; // Return the updated product if IDs match
        } else {
            return currProd; // Return the current product otherwise
        }

    });
    localStorage.setItem("cartProductLs", JSON.stringify(updatedCart));
    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice;
    updateCartProductTotal();
}