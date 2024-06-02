// Array Methods 



// array is mutable so it can be change 

let fruits = ["apple","mango","grapes"];
console.log(fruits)

// push pop

    fruits.push("mango"); //add last index of array
    console.log(fruits)

    let removePop=fruits.pop();//remove last index of array
    console.log(`this fruits has remove from array ${removePop}`)
    console.log(fruits)

// shift unshift
    fruits.shift("mango"); //add in start of the index an array
    console.log(fruits)

    fruits.unshift(); //remove index in start of an array
    console.log(fruits)