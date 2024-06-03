// Object Destructurning


const band ={
    bandName :"led zepplin",
    famousSong:"star",
    computer:'example',
    xp:'Xp'
}

let {bandName,famousSong,...spreadProps}=band;
console.log(bandName,famousSong,spreadProps)