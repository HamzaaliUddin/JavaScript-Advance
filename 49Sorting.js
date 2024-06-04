// sorting is mutable change array;


const aplha = ["ali","hussain","abbas","umar","usman"];
aplha.sort();
console.log(aplha)



const num = [1,5,23,8,2,9];
num.sort((a,b)=>{
    return a - b ;
    //  nagtive so a print
    //  postive so b print
});
console.log(num)

const userProduct =[
    {productName:"laptop",price:300},
    {productName:"cpu",price:3020},
    {productName:"computer",price:1300},
]
console.log(userProduct);
const newSorting = userProduct.sort((a,b)=>{
    return a.price - b.price ;
})
console.log(newSorting)