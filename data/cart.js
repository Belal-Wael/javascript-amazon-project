export const cart=[];

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