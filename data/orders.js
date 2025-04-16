export const orders=JSON.parse(localStorage.getItem('orders'))||[];

export function addOredr(order){
    orders.unshift(order);
    saveToLocalstorage();
}

function saveToLocalstorage(){
    localStorage.setItem('orders',JSON.stringify(orders));
}