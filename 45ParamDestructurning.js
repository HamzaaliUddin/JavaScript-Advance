// param Destructurning




const obj ={
    name :'Hamza',
    age:21,
}

    // function objFunc(obj){
    //     console.log(obj.name);
    // }


    
// Destructruning
    function objFunc({name,age}){
        console.log(name);
        console.log(age)
    }

objFunc(obj);