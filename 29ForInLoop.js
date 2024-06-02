// for in loop an array  it provide us index

const items = ['item1','item2','item3']

const newItems=[];

for(let index in items){
    console.log(index)
    newItems.push(items[index].toUpperCase())
}
console.log("newItems",newItems)