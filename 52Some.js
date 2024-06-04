// some method
// check every element if any one index is true so it will return true and if all false so return false


const numbers= [2,4,3,8,10]

const ans = numbers.every((num)=>{
    return num % 2 === 0;
})

console.log(ans)


const products=[
    {product:'laptop',price:563},
    {product:'cpu',price:493},
    {product:'led',price:5433},
    {product:'mouse',price:83},
]

const user_product=products.some((num)=>{
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