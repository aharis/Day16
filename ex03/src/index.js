// Only change code below this line
class Person {
    constructor(Person) {
        this._Person = Person;
    }

    static display() {
        console.log("Static method is invoked from Person class");
    }
     static show() {
        display();
    }
   // return display;
}
// Only change code above this line
var message = new Person();
message.show();
module.exports = Person;