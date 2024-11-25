const cartContain = document.querySelector("#cartValue");
export const updateCartValue = (cartValue)=>{
    console.log(cartValue.length);
    return (cartContain.innerHTML=`<img src="./cart.svg">${cartValue.length}`)
}