import {addToCart,cart} from '../../data/cart.js'

describe('test suite : addToCart',()=>{
    it("Add an existing item to the cart", () => {
        //addToCart();
    });

    
    it("Add a new item to the cart", () => {

      // use mock function
      // which means use fake function similar to your function
      // in this case we want fake function similar to localStorage  
      // create first mock using spyON
   
      spyOn(localStorage, 'setItem');


      // make a fake version from localStorage
      spyOn(localStorage, 'getItem').and.callFake(()=>{
          return JSON.stringify([]); // to return empty array as string
      });

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(2);

        expect(localStorage.setItem).toHaveBeenCalledTimes(1); //to check if setItem called once or not
        expect(cart[0].id).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    });
});