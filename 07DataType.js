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



    let undefined_name; //undefined we can not use with const 
    console.log(undefined_name,typeof(undefined_name));

    const null_name=null;  
    console.log(null_name,typeof(null_name));



    // We can not add with different Data TYpe like integer + bigInt it is wrong
    // let BigInt_num = BigInt(1239007199254740991);
    //  OR
    let BigInt_num = 1239007199254740324234254353534524991n;
    console.log(BigInt_num,Number.MAX_SAFE_INTEGER);