// Class like function object
// Inhertance


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
    info(){
        return ` you name is ${this.firstName} and ${this.lastName}`
    }
}

const user2 =new CreatePerson("ali",'hussain',22)
console.log(user2.info())
