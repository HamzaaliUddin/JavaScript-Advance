// Spread Object


const obj1 ={
    age:21,
}
const obj2 ={
    name:'ali',
    hobby:['game','coding']
}

const newObj={...obj1,...obj2}
console.log(newObj);
