// protoType 
// it is free space provide by function



function createUser(firstName,lastName,age,address){
    // here pass  protoType reference
    const user = Object.create(createUser.prototype);
    user.firstName = firstName,
    user.lastName = lastName,
    user.age = age,
    user.address = address
    return user
}
createUser.prototype.about=function(){
    return ` my name is ${this.firstName} and my last name is ${this.lastName}`
}

const user1 = createUser("hamza","ali",21,'Pakistan');
const user2 = createUser("ali","abbas",34,'karachi');


console.log(user1)
console.log(user2)
console.log(user2.about())
// calling __proto__
console.log(user2.__proto__)