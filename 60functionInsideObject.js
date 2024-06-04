// create own methods

function personInfo(){
    console.log(`your name is ${this.firstName}`)
}

const obj1 ={
    firstName:"Hamza",
    about:personInfo,
}
const obj2 ={
    firstName:"ali",
    about:personInfo,
}
const obj3 ={
    firstName:"zayan",
    about:personInfo,
}
const obj4 ={
    firstName:"hussain",
    about:personInfo,
}
obj4.about();
obj2.about();