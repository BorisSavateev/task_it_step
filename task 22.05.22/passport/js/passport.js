/* passport.js */

export default class Passport {
    /**
     * @param {string} firstName
     * @param {string} lastName
     */
      constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
      }

    getFirstName(){
        return this.firstName.toLowerCase();
    }

      
    getLastName(){
        return this.lastName.toUpperCase();
    }
    
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    
    getInitials(){
        return `${this.firstName[0]}.${this.lastName[0]}.`;
    }
    
    getIsValidName(){
        return /[a-zA-Z]/.test(this.firstName) && /[a-zA-Z]/.test(this.lastName) && this.lastName[this.lastName.length - 1] !== `.` ? `Yes` : `No`;
    }

  }

