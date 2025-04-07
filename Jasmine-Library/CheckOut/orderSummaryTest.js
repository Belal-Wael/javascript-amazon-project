import {renderOrderSummary} from '../../Scripts/CheckOut/orderSummary.js';

describe("test Suit: render Order Summary",()=>{
   it('display the cart',()=>{
      document.querySelector(".test-order-summary").innerHTML=`
        <div class="order-summary"></div>
      `;
      renderOrderSummary();
   });
});