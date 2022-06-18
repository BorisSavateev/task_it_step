class User {
    /**
     * @param {string} firstName
     * @param {string} lastName
     * @param {number} age
     */
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
  }
  
  // Sample usage - do not modify
  console.log(new User("Sam", "Blue", 18));
  console.log(new User("Alex", "Green", 25));