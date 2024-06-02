// for of loop in array 

const items = ['item1','item2','item3']

const newItems=[];
for(let item of items){
    console.log(item)
    newItems.push(item.toUpperCase())
}
console.log("newItems",newItems)