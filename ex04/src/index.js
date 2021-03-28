    // Only change code below this line

class Pets {
    constructor(name, legs) {
        
        this.name = name;

    }

     walk() {
        
        let numberOfLegs = "Pujdo is walking on 4 legs";
        return numberOfLegs;
    
     }
    }

     class Dog extends Pets {
         constructor(name, legs) {
            super(name)
            this.legs = legs;
         }
     
     bark() {

        let dogSay = "Pujdo says WUF_WUF";
        return dogSay;
     }
    }

    // Only change code above this line

let dog = new Dog("Pujdo", 4);
console.log(dog.walk());
console.log(dog.bark());

module.exports = {
    Pets,
    Dog
}