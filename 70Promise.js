// new Promise



function createPromise(){
    const arr =['hamza','ali','hussain']
 return new Promise((resolve,reject)=>{
    if(arr.includes("hamzaa") && arr.includes("ali")){
        resolve("won")
    }else{
        reject("lose");
    }
})}
createPromise().then((value)=>{
    console.log('message',value)
}).catch((err)=>{
    console.log(`error: ${err}`)
})