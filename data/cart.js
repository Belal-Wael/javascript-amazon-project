export let cart=JSON.parse(localStorage.getItem('cart')); // because local storage save only strings

if(!cart){
  cart=[
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


function addCartToLocalStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(ProductId){
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

export function removeFromCart(ProductId){
   
   let newCart=[];
   cart.forEach((item)=>{
        if(item.id!==ProductId){
          newCart.push(item);       
        }
   });

  cart=newCart;
  addCartToLocalStorage();
}

export function updateOptionId(optionId,ProductId){
   cart.forEach((item)=>{
     if(item.id===ProductId){
       item.deliveryOptionId=optionId;
       addCartToLocalStorage();
     }
   })
}