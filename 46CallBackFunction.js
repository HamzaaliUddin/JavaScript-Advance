// call back function 



function myFunc(a){
    console.log(a);
}
myFunc(["abc"])
myFunc({name:"Hamza"})

function myFunc1(name){
    console.log('function one',name)
}

function myFunc2(callback){
    console.log("hi")
    callback("okay");
}

myFunc2(myFunc1)