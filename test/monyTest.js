// used to test money function  using automated test which mean test by run code in computer.
import { formatCurrency } from "../Scripts/utils/money.js";



console.log('convert Cents into dollars');
// test case 1 (Basic test case)
if(formatCurrency(2059)==='20.59') 
    console.log("test pass");
else 
console.log("test fail");





console.log("work with 0")
// test case 2 (called Edge case) 
if(formatCurrency(0)==='0.00')  // not positive or negative 
    console.log("test pass");
else 
console.log("test fail");



console.log("round up to the nearest cent")
// test case 2 (called Edge case)
if(formatCurrency(2000.5)==='20.01')  // without round result will be 20.00 and this miss match
    console.log("test pass");
else 
console.log("test fail");