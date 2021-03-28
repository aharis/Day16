class Person {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getPerson() {
        let personInfo ="Name:{name}, email:{email}, age:{age}";
        return personInfo;
    }
}
console.log(getPerson());
exports.Person = Person;