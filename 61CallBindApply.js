// call means borrow something inside other function without clone 
function hell(){
    console.log("call")
}
hell.call();


const user1={
    name:'example',
    age:34,
    about:function(hobbie){
        console.log(`Your name is ${this.name} and your age is ${this.age} your hobbies is ${hobbie}`)
    }
}

const user2={
    name:'user2',
    age:44,
}


user1.about.call(user2,"coding"); //borrow about functin from user 1 for user2

