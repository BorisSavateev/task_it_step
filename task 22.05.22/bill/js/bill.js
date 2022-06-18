/* bill.js */

export default class Bill {
    constructor() {
        this.amounts = [];
    }
  
    /** @param {string} amountStr */
    addAmount(amountStr) {
        amountStr = Number.parseInt(amountStr, 10);
        this.amounts.push(amountStr);
        return this.amounts;
    }
      
    getCount(){
        return this.amounts.length;
    }

    getTotal (){
        return this.amounts.reduce(function (total, current){
            return total + current;
        })
    } 
    getAverage (){
        return this.getTotal () / this.getCount();
    }   
  }