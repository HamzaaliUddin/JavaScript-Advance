// every method
// check every element if any one index is wrong so it will return false else true


const numbers= [2,4,3,8,10]

const ans = numbers.every((num)=>{
    return num % 2 === 0;
})

console.log(ans)


const products=[
    {product:'laptop',price:563},
    {product:'cpu',price:493},
    {product:'led',price:5433},
    {product:'mouse',price:783},
]

const user_product=products.every((num)=>{
    return num.price > 300;
})

if(user_product){
   const total = products.reduce((accu,currentValue)=>{
        return accu + currentValue.price;
    },0)
    console.log(total)
    const perc=30;
    const substract=total * perc / 100
    console.log(total - substract )
}