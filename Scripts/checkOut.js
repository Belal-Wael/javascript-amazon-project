import { renderOrderSummary } from "./CheckOut/orderSummary.js";
import { renderPaymentSummary } from "./CheckOut/paymentSummary.js";
import { loadProducts } from "../data/products.js";
//import  '../data/cart-class.js';
//import '../data/backend-test.js'

loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})