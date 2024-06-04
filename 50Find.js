// Find method array;


const animal =["Cat","Lion","bear","Tiger"]
const id =["Cat","Lion","bear","Tiger"];

const findAnimal =animal.find((name)=>{
    return name === "Lion"
})
console.log(findAnimal)


const matchAnimal = animal.filter((name)=> id.includes(name));