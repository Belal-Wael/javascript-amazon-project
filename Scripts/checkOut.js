import { renderOrderSummary } from "./CheckOut/orderSummary.js";
import { renderPaymentSummary } from "./CheckOut/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
import { cart, loadCart } from "../data/cart.js";
//import  '../data/cart-class.js';
//import '../data/backend-test.js'


 

// ----> 1

// // promise split code into separate steps and then we can wait for one step to finish before going to 
// // the next step
// new Promise((resolve)=>{ // promise take a parameter resolve as a function    
//     loadProducts(()=>{
//         resolve(); // called to control when to go to  the next step
//     });
// }).then(()=>{
    
//     return new Promise((resolve)=>{ // return new promise to use solve to to to the next step
//         loadCart(()=>{
//            resolve();
//         });
//     });
// }).then(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
// });




// -----> 2
// we can run loadProducts and loadCart at the same time "this two promises" using promise.all

Promise.all([
   loadProductsFetch(),

    new Promise((resolve)=>{ // return new promise to use solve to to to the next step
        loadCart(()=>{
           resolve();
        });
    })


]).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});



// -----> 3
async function LoadPage(){
   await loadProductsFetch();
   await new Promise((resolve)=>{ // return new promise to use solve to to to the next step
        loadCart(()=>{
           resolve();
        });
    });
    renderOrderSummary();
    renderPaymentSummary();
}

LoadPage();



// loadProducts(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
// })