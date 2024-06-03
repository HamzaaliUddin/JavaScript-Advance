// var is function scope
// let and const block scope


{
    // can not acces from out side the block {}
    let firstName = "block scope";
    console.log(firstName)

}

{
    // can access out side the block
    var firstName = "function scope";

}
console.log(firstName)

// can access inside the block
const lastName ='ali';

{
    console.log(lastName)
}