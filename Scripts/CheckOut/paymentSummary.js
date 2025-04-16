import { cart } from "../../data/cart.js";
import {getProductById} from "../../data/products.js";
import { deliveryOptions } from "../../data/deliveryOptions.js";
import {formatCurrency} from "../utils/money.js";
import { addOredr } from "../../data/orders.js";

export function renderPaymentSummary() {

     let paymentSummaryContainer=document.querySelector(".payment-summary");
     paymentSummaryContainer.innerHTML="";
    let productPriceCents=0;
    let ShippingCartCents=0;
    cart.forEach(element => {
        const matchedProduct=getProductById(element.id);
        productPriceCents+=matchedProduct.priceCents*element.quantity;

        deliveryOptions.forEach((option)=>{
            if(option.id===element.deliveryOptionId){
               ShippingCartCents+=option.priceCents;
            }
        })
    });
  
     const totalBeforeTaxCents=productPriceCents+ShippingCartCents;
     const totalAfterTaxCents=totalBeforeTaxCents*0.1;
     const totalCents=totalBeforeTaxCents+totalAfterTaxCents;

     console.log(totalBeforeTaxCents);

   const paymentSummaryHtml= `
    <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${cart.length}):</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(ShippingCartCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(totalAfterTaxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary js-payment-btn">
            Place your order
          </button>`;

          paymentSummaryContainer.innerHTML=paymentSummaryHtml;

          document.querySelector(".js-payment-btn").addEventListener("click",async()=>{

           const response= await fetch("http://supersimplebackend.dev/orders",{
                method:"POST",
                headers:{
                  'Content-Type': 'application/json', // what type of data we are sending
                },
                body:JSON.stringify({
                  cart:cart
                })
            });

            const data= await response.json();
            addOredr(data);

            window.location.href='orders.html'
          });
}
