// used to test money function  using automated test which mean test by run code in computer.
import { formatCurrency } from "../Scripts/utils/money.js";


// 1 - want to create test suite
describe('test Suite : formatCurrency',()=>{ //describe is a function used to create test suite provided by jasmine library

    // 2 - want to create test case using it function
    it('convert Cents into dollars',()=>{
        // 3 - we want to compare to value to test formatCurrency using expect function and equal function
        expect(formatCurrency(2059)).toEqual('20.59'); 
    });

    it('work with 0',()=>{
        // 3 - we want to compare to value to test formatCurrency using expect function and equal function
        expect(formatCurrency(0)).toEqual('0.00'); 
    });


    it('round up to the nearest cent',()=>{
        // 3 - we want to compare to value to test formatCurrency using expect function and equal function
        expect(formatCurrency(2000.5)).toEqual('20.01'); 
    })
   
});