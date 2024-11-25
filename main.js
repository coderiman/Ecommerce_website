import './style.css'
import products from "./api/products.json"
import {showProductContainer} from "./homeProductCard"
console.log(products)
showProductContainer(products);