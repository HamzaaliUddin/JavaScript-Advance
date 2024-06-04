// splide start,delete,insert


const myArray = ['item1','item2','item3','item4'];

const deleteItem = myArray.splice(1,2,{name:"Hamza"})
console.log(`delected item = ${deleteItem}`)
console.log(myArray)