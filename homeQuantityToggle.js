export const homeQuantityToggle = (event,id,stock)=>{
    const currentCardElement= document.querySelector(`#card${id}`);
    // console.log(currentCardElement);
    const productQuantity = currentCardElement.querySelector(".productQuantity");
    // console.log(productQuantity);
    let quantity = parseInt(productQuantity.getAttribute("data-quantity"))||1;
    console.log(stock);
    console.log(quantity);
    if(event.target.className=="cartIncrement")
    {
        if(quantity<50)
        {
            quantity=quantity+1;
        }else if(quantity==stock)
        {
            quantity = stock;
        }
    }
    if(event.target.className=='cartDecrement')
    {
        if(quantity>1)
        {
            quantity-=1;
        }
    }
    productQuantity.innerText = quantity;
    productQuantity.setAttribute("data-quantity",quantity.toString());
    return quantity;

};