
class Cart{
    cartItems;
    #localStorageKey;  // add # to make it private

    // constructor
    constructor(localStorageKey){
        this.#localStorageKey=localStorageKey;
         this.#loadFromLocalStorage();
    }
    
   #loadFromLocalStorage(){
    this.cartItems=JSON.parse(localStorage.getItem(this.#localStorageKey));
      
    if(!this.cartItems){
      this.cartItems=[
        {
          id:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity:2,
          deliveryOptionId:'1'
        },
        {
          id:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity:2,
          deliveryOptionId:'2'
        }
      ];
    }
   }

   addCartToLocalStorage(){
    localStorage.setItem(this.#localStorageKey,JSON.stringify(cart));
  }
  
  addToCart(ProductId){
    let matchingItem;
    cart.forEach((item)=>{
      if(item.id===ProductId){
        matchingItem=item; 
      }
    });
    if(matchingItem){
      matchingItem.quantity+=1;
    }
    else{
      cart.push({
        id:ProductId,
        quantity:1,
        deliveryOptionId:'1'
      });
    }
    addCartToLocalStorage();
  }
  

  removeFromCart(ProductId){
     
    let newCart=[];
    cart.forEach((item)=>{
         if(item.id!==ProductId){
           newCart.push(item);       
         }
    });
  
   cart=newCart;
   addCartToLocalStorage();
  }
  

  updateOptionId(optionId,ProductId){
    cart.forEach((item)=>{
      if(item.id===ProductId){
        item.deliveryOptionId=optionId;
        addCartToLocalStorage();
      }
    })
  }

}

  
  
  
// create new object from a class

let cart=new Cart('cart-oop');

// create another object from a class

let cart2=new Cart('cart-oop2');


// replace with constructor
// cart.localStorageKey='cart-oop';
// cart2.localStorageKey='cart-oop2';

// cart.loadFromLocalStorage();
// cart2.loadFromLocalStorage();

console.log(cart);
console.log(cart2);
  
  
  
  
  