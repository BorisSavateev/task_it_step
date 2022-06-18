class Discount {
  constructor() {
    this.amount = 1000;
  }

  applyDiscount() {
    if (Discount.isValid()) {
      this.amount = 500;
    }
  }

  static isValid() {
    return Math.random() <= 0.5; // 50% chance returns true
  }
}

// Sample usage - do not modify
console.log(Discount.isValid()); // true or false

const discount = new Discount;
discount.applyDiscount();

console.log(discount.amount); // either 1000 or 500