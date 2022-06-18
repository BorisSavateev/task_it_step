class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  canVote() {
    return this.age >= 18  
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Admin extends User {
  updateConfig() {
    return `Config updated`;
  }   
  getFullName() {
    return `${this.firstName} ${this.lastName} [admin]`;
  }

}


// Sample usage - do not modify
const user = new User("Sam", "Green", 17);
console.log(user.canVote()); // false
console.log(user.getFullName()); // "Sam Green"

const admin = new Admin("Alex", "Blue", 20);
console.log(admin.canVote()); // true
console.log(admin.getFullName()); // "Alex Blue [admin]"
console.log(admin.updateConfig()); // "Config updated"