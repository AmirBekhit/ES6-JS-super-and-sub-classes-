class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `hi , this is ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, memberShip) {
    super(firstName, lastName);
    this.phone = phone;
    this.membership = memberShip;
  }
  // static method
  static shoutHello() {
    return "HELLO!";
  }
}

const pers1 = new Person("Arthur", "Morgan");
console.log(pers1);
const cust1 = new Customer("Madonna", "Johnson", "765-432", "Standard");
console.log(cust1);
console.log(pers1.greeting());
console.log(cust1.greeting());
console.log(Customer.shoutHello());
console.log(Person.shoutHello());
