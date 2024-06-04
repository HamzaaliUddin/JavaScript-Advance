// super drive from parent
// Inhertance
// same method is base class

class CreateUser{
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    about(){
        return ` you name is ${this.firstName} and ${this.lastName}`
    }
}

const user1 = new CreateUser("ali",'Hamza',21);
console.log(user1.firstName)


// sub class
class CreatePerson extends CreateUser{
    constructor(firstName,lastName,age,speed){
        super(firstName,lastName,age),
        this.speed = speed
    }
    about(){
        return ` you name is ${this.firstName} and ${this.lastName} and ${this.speed}`
    }
}

const user2 =new CreatePerson("ali",'hussain',22,54)
console.log(user2.about())
