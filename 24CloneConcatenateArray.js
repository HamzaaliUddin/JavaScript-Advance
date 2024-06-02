// Clone array


let item1 = ["item1","item2","item3"];
let item2 = item1.slice(0).concat(["item4","item5"]);

item1.push("item4")


console.log(item1)
console.log(item2)


// Concatenate array


let item3 = ["item1","item2","item3"];
let item4 = [].concat(item3);

item3.push("item4")


console.log(item3)
console.log(item4)

// new way 

let item5 = ["item1","item2","item3"];
let item6 = [...item5,"item4","item5"];

item5.push("item4")

console.log(item5)
console.log(item6)