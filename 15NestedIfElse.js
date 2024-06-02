// Nested if else statement



let winning = 3;


let user_guess = +prompt("Guess a number");
console.log(typeof(user_guess),user_guess);


if(user_guess === winning){
    console.log("You are winner!");
}else{
    if(user_guess > winning){
        console.log("high number!!")
    }else{
        console.log("to low");
    }
    
}
