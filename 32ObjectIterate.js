// iterate Object


const person ={
    name:"Hamza",
    age:21,
    hobby:['coding','play game']
}

// for in loop
// objects.keys


for(let key in person){
    console.log(`${key} : ${person[key]}`)
}
console.log(Array.isArray(person))

for(let key of Object.keys(person)){
    console.log(`${key} : ${person[key]}`)
}