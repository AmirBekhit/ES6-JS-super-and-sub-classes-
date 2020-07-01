class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `hi , this is ${this.firstName} ${this.lastName}`;
  }
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  getsMarried(newLastName) {
    this.lastName = newLastName;
  }
  // Static Method
  static addNumbers(a, b) {
    return a + b;
  }
}

const per1 = new Person("Amanda", "Smith", "12-12-1970");
per1.getsMarried("Thomas");
console.log(per1);
// console.log(per1.addNumbers(3, 4));
console.log(Person.addNumbers(3, 4));

// console.log(per1.greeting());
// console.log(per1.calculateAge());
