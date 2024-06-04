// Map

// we can keep any type of key in Map  like array string number
// for of loop can apply on Map but on object we can not apply
// store key value pair

const person = new Map();

person.set("name","Ali");
person.set(1,"one");
person.set("collage","second year")

console.log(person)
// for of loop can use


for(let [key,value] of person){
    console.log(`${key} => ${value}`)
}


const person1 ={
    id:1,
    'firstName':'ali',
}

const extraInfo =new Map();

extraInfo.set(person1,{age:21,'hobbies':'coding'});
console.log(extraInfo)

console.log(extraInfo.get(person1).age)