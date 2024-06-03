// Function


function wishHappyBirthday() {
    console.log("happy birthday to you.....")
}

wishHappyBirthday();
wishHappyBirthday();

function returnSum() {
   return 2 + 4;
}

console.log(returnSum());

// create useable function 
// pass argument and get parameter

function sumTwoNum(sum1,sum2) {
    return sum1 +sum2;
}
console.log(sumTwoNum(2,10))

function findTarget(array,target) {
    for(let i = 0; i<=array.length; i ++){
        if(array[i]=== target){
            return array[i];
        }
    }
    return -1 ;

}

const arr=[1,3,4,6,10];
console.log(findTarget(arr,10))

// no value found so false 
console.log(findTarget(arr,15))