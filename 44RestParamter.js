// Rest Parameters



const numbers=(a,...b)=>{
    console.log(a);
    console.log(b);
}
// numbers(1,5,3,7,9)


const addNumber=(...num)=>{
    let total = 0;

    for(let nm of num){
        total += nm
    }
    console.log(total)

}
addNumber(1,2,3,4,5,6,7,8,9,10)