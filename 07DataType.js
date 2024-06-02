// Type of operator

// Data Type (primitive Data Type)
// String,number,boolean,undefind,null,BigInt

    let age = 21;
    let first_name = +"21";
    console.log(typeof(age),typeof(first_name))

// convert num to string 
//  21 -> "21"
    age = age + "";
    console.log(typeof(age));
// OR 
    age = String(age);
    console.log(typeof(age));

// convert string to num 
// "21" -> 21
    first_name = +"21";
    console.log(typeof(first_name));
// OR 
    first_name = Number(first_name);
    console.log(typeof(first_name));