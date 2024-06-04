//  Array Methods


// forEach
// it does not provide new array
const num =[1,2,3,4,5];

num.forEach((number,index)=>{
    console.log(`${index} = ${number * 2}`)
})

const users=[
    {name:"Hamza",age:21,hobbies:'coding'},
    {name:"ali",age:21,hobbies:'coding'},
    {name:"Hussain",age:21,hobbies:'coding'},
    {name:"abbas",age:21,hobbies:'cricket'},
    {name:"komail",age:21,hobbies:'football'},
]

// invalide
    // const newForEach=users.forEach((user,index)=>{
    //     return user.name
    // })
    // console.log(newForEach) 


users.forEach((user,index)=>{
    console.log(user.name)
})

// map Method 
// return new array

const items=[1,2,3,4,5,6]

const newMapArray=items.map((item,index)=>{
    return item * index
})
console.log(items)
console.log(newMapArray)


// Filter Method


const array = [
    {name:"Hamza",age:21,hobbies:'coding',userId:1},
    {name:"ali",age:21,hobbies:'coding',userId:2},
    {name:"Hussain",age:21,hobbies:'coding',userId:3},
    {name:"abbas",age:21,hobbies:'cricket',userId:4},
    {name:"komail",age:21,hobbies:'football',userId:5},
];

const newArrayFilter=array.filter((id)=>{
    return id.userId === 4
})
newArrayFilter.map((item)=>{
    console.log(item.hobbies)
});


const arrayReduce =[
    {name:"Hamza",age:21,hobbies:'coding',price:115},
    {name:"abbas",age:21,hobbies:'cricket',price:4749},
    {name:"komail",age:21,hobbies:'football',price:524},
]

const reducePrice =arrayReduce.reduce((accu,currentValue)=>{
    return accu + currentValue.price
},0)
console.log(`total = ${reducePrice}`)