let strtonum = "123" - 34;
console.log("string to number:", strtonum);
console.log(typeof strtonum);

//number to string
let numtostr = 123 + "34";
console.log("number to string:", numtostr);
console.log(typeof numtostr);

let a = "23" + 23 + (-67) + "67" + true ;
console.log(a);
console.log(typeof a);

//type of null and nan
console.log(typeof null); //undefined while in uppercase (NULL)
console.log(typeof NaN);
console.log(typeof undefined);

console.log("Explicit type conversion:");
console.log(Boolean("221"));
console.log(Boolean());
console.log(Boolean(221));
console.log(Boolean(null));
console.log(Boolean(0));