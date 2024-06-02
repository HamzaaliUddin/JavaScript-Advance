// While Loop Array



const item = ['item1','item2','item3']
let i = 0;
const newItem =[];
while (i <= item.length - 1) {
    console.log(item[i])
    newItem.push(item[i])
    i++;
}   
console.log(newItem)