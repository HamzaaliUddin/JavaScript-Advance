// Object reference Data Type
// object store key and value
// object don't have index

// create object 

const person ={
    name:"Hamza",
    age:21,
    hobby:['coding','play game']
}

// access value 
console.log(person)
console.log(person.name)
console.log(person["age"])
console.log(person.hobby)
console.log(person.hobby[0])

// add key and value in object

person.gender = "Male"
person["collage"]='example Collage'

const key ="eamil"

person[key]= "exmapl@gmail.com"
console.log(person)