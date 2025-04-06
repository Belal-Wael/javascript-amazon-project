import {cart , removeFromCart , updateOptionId} from "../data/cart.js";
import {products} from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js"; // dayjs Library
import {deliveryOptions} from "../data/deliveryOptions.js"




let cartItemsContainer=document.querySelector(".checkout-grid .order-summary");

let cartItems;
let countOptions=1;
cart.forEach(element => {

    let ProductId=element.id;
    let matchedProduct;
    products.forEach(product => {
        if(ProductId===product.id){
            matchedProduct=product;
        }
    });

    const deliverOptionID=element.deliveryOptionId;
    const matchedOption=deliveryOptions.find(option=>option.id===deliverOptionID);
    const deliveryDays=matchedOption.deliveryDays;
    const deliveryDate=dayjs().add(deliveryDays,'days').format('dddd,MMMM D')
    
    cartItemsContainer.innerHTML+=` <div class="cart-item-container js-cart-item-container-${matchedProduct.id}">
    <div class="delivery-date">
      Delivery date: ${deliveryDate}
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="${matchedProduct.image}">

      <div class="cart-item-details">
        <div class="product-name">
          ${matchedProduct.name}
        </div>
        <div class="product-price">
          $${formatCurrency(matchedProduct.priceCents)}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label">${element.quantity}</span>
          </span>
          <span class="update-quantity-link link-primary">
            Update
          </span>
          <span class="delete-quantity-link link-primary delete-option-order" data-product-id="${matchedProduct.id}"}>
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options ">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
         ${deliveryOptionHtml(countOptions,element)}
      </div>
    </div>
  </div>`

  countOptions++;
});

 function deliveryOptionHtml(countOptions,cartItem){
   let html=``;
  deliveryOptions.forEach((option)=>{
    const today=dayjs();
    const deliverOptions=dayjs().add(option.deliveryDays,"days");
    const deliveryFormat=deliverOptions.format('dddd,MMMM D');

    const Price=option.priceCents===0?'Free':`${formatCurrency(option.priceCents)} -`;
    const isChecked=option.id===cartItem.deliveryOptionId ? "checked" : "";

    html+= `
     <div class="delivery-option">
          <input type="radio"
            ${isChecked}
            class="delivery-option-input js-delivery-option-input"
            name="delivery-option-${countOptions}"
            data-delivery-option-id="${option.id}"
            data-product-id="${cartItem.id}"
            >
          <div>
            <div class="delivery-option-date">
            ${deliveryFormat}
            </div>
            <div class="delivery-option-price">
              $${Price} Shipping
            </div>
          </div>
        </div>
    `;
  });
  return html;
 }

 document.querySelectorAll(".js-delivery-option-input").forEach((input)=>{
   input.addEventListener("click",()=>{
      const optionId=input.dataset.deliveryOptionId;
      const productId=input.dataset.productId;
      updateOptionId(optionId,productId);
      //deliveryOptionHtml(countOptions,element)
   })
 })

document.querySelectorAll(".delete-option-order").forEach((btn)=>{
    btn.addEventListener("click",()=>{
      let productId=btn.dataset.productId;
      removeFromCart(productId);
      document.querySelector(`.js-cart-item-container-${productId}`).remove(); // add Element from dom to update the dom after delete from cart.
    });
})