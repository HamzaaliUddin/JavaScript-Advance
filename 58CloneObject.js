// clone object


// memory


const obj={
    key1:"value1",
    key2:"value2",
}
const obj1 = {...obj} //clone 
const obj2 = Object.assign({},obj) //clone but old way
obj['key3']= 'value3'

console.log(obj)
console.log(obj1)
console.log(obj2)