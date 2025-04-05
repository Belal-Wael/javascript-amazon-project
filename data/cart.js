export const cart=[
  {
    id:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:2
  },
  {
    id:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:2
  }
];

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
      quantity:1
    });
  }
}