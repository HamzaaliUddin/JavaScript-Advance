// Function inside function 




const functionInsideFunction =(add1,add2)=>{

    const addTwo = ()=>{
        return add1+add2
    }
    const subTwo = ()=>{
        return add1-add2
    }

    console.log(addTwo());
    console.log(subTwo());
}

functionInsideFunction(2,3)