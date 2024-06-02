// trim()
// toUpperCase()
// toLowerCase()
// slice (start index 0,end index (last previous) )

// string is immutable that's way we can not chagne it but we can store it into new let keyword or any other varaible 

let firstName = "   trim method to remove space from right side to left side    ";
console.log(firstName,firstName.length)
const removeSpace = firstName.trim();
console.log(removeSpace,removeSpace.length)

let lastName = "uppercase all words";
console.log(lastName)
const upperCase =lastName.toUpperCase();
console.log(upperCase)

let first_last = "lowercase all words";
console.log(first_last)
const lowerCase = first_last.toLowerCase();
console.log(lowerCase)

let slice_index ="sliceIndex";
console.log(slice_index);
let sliceIndex=slice_index.slice(0,4); //slic
console.log(sliceIndex) 
