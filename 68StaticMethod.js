// static method and properties
// can call without object


class Person{
    constructor(first,last,age) {
        this.first =first
        this.last =last
        this.age = age
    }
    static info(){
        return `My name is static`
    }
    static desc="static property"
    get about(){
        return `My name is ${this.first} ${this.last}`
    }
    set about(fullname){
        const [first,last] = fullname.split(" ");
        this.first = first
        this.last = last
    }
}

const user1= new Person("Hamza",'ali',23)

console.log(Person.info())
console.log(Person.desc)