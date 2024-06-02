// Array Destructuring

const myArray = ['item1','item2']

const [item1,item2] = myArray;
console.log(item1,item2)

const newArray = ['item1','item2','item3']

// Rest value are store in spread ...item4
const [item3,...item4] = newArray;
console.log(item3,item4)

const itemArray = ['item1','item2','item3']

const [item5,,item6] = itemArray;
console.log(item5,item6)


const itemsArray = ['item1','item2','item3','item4']

const [item7,item8] = [itemsArray.slice(0,2),itemsArray.slice(2,4)];
console.log(item7,item8)