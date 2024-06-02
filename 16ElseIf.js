// if ,else if ,else if ,else

let winnerNumber = 10;

let user_num = +prompt("Guess the number");


if(user_num === winnerNumber){
    console.log("You are winner");
}else if(user_num > winnerNumber){
    console.log("guess number is high");
}else{
    console.log("guess the number low")
}