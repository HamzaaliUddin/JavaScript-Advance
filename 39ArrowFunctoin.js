// arrow function that is important 



const isEven = num=> num % 2 === 0;


console.log(isEven(3));



const arrayTarget=(array,target)=>{
    for(let i = 0; i <= array.length ; i++){
        if(array[i] === target){
            return array[i];
        }
    }
    return -1
}

const arr = [1,3,5,7,2];
console.log(arrayTarget(arr,2));