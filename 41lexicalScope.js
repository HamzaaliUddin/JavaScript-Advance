// Lexical Scope 


const myVar ="value 1"
function myApp(){
    // const myVar = "value 1";

    function myFunc(){
        // const myVar = "value 2";
        console.log("inside function",myVar)
    }
    console.log(myVar);
    myFunc();

}
myApp();