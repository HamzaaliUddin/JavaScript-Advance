// new keyword provide us an an empty object
// new provide by default return and also __proto__
// this is equal = {}



function CreateUser(firstName,age){
    this.firstName =firstName
    this.age =age
}
CreateUser.prototype.about =function(){
    return this.age >= 18;
}

const user1 = new CreateUser("ali",21);
console.log(user1)
console.log(user1.about())

for(let key in user1){
    // console.log(key)
    // if you want only property of function 
    if(user1.hasOwnProperty(key)){
        console.log(key)
    }
        
}