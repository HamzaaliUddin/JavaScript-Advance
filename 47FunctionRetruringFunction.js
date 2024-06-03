// function retruning function 


function myFunc(){
    return {name:"haza"}
}
console.log(myFunc());

// FRF
function hello(){
    return function(){
     return "done"
    }();  
}

console.log(hello())