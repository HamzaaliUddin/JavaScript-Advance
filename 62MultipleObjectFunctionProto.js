// Mutliple Object using function
// function use like object

const userMethod ={
    about: function(){
        console.log(`My name is ${this.firstName}`)
        return `my Name is ${this.firstName}`
    },
    party: function(){
        return 'Party Data has been extened'    
    }
}

function createUser(firstName,lastName,age,address){
    // __proto__
    const user = Object.create(userMethod);
    user.firstName = firstName,
    user.lastName = lastName,
    user.age = age,
    user.address = address
    return user
}

const user1 = createUser("hamza","ali",21,'Pakistan');
const user2 = createUser("ali","abbas",34,'karachi');

console.log(user1)
console.log(user2)
console.log(user2.party())
// calling __proto__
console.log(user2.__proto__)