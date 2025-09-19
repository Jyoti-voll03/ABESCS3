console.log(isODDUsingTernary(4));
console.log(isODD(3));

function isODD(a) {
    if (a % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

function isODDUsingTernary(a) {
    return a%2 !== 0 ? true : false;
}
//function as expression
let functionAsExpression = function(a) {
    return a%2 !== 0 ? "odd" : "even";
}
//arrow function
let arrowFunction = (a) => {
    return a % 2 !== 0 ? "odd" : "even";
}
console.log(arrowFunction(4));


//immediately invoked function expression (IIFE)
(function iifeFun() {
    console.log("inside IIFE function");
})();