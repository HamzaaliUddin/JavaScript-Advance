// call back

function hello(first,sec,callbackFirst,callbackSec){
    console.log(first)
    console.log(sec)
    callbackFirst();
    callbackSec();
}

hello(2,4,()=>{
    console.log('first Callback');
},()=>{
    console.log('second Callback')
});