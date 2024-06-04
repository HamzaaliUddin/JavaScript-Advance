// Set method
// no dupilcated 
// set is iterales
// no index and not store in order
// can not use length

const newSet= new Set();
const myArray = [1,2,3,4,5,6,62,3,32,6,1,32,7,43].sort((a,b)=>{
    return a - b;
})
for(let arr of myArray){
    newSet.add(arr);
}

console.log(newSet)