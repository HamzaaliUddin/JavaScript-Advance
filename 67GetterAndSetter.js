// getter and setter


class Person{
    constructor(first,last,age) {
        this.first =first
        this.last =last
        this.age =age
    }
    // now we can use it like property
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
console.log(user1.about)
// update object    
user1.about= "abbas hussain"
console.log(user1.about)