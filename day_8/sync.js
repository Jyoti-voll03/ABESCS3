console.log("start");

// const syncfun = () => {

// }
const waitForSomeTime = (ms) => { 
    const start = Date.now();
    while (Date.now() - start < ms) {
        //do nothing
    }
}

const syncUsingTimer = () => {
    waitForSomeTime(4000);
    console.log("Wait has been completed");
}
// syncUsingTimer();
// console.log("end");

const asyncUsingTimer = () => {
    setTimeout(() => {
        console.log("Inside Timeout");
    }, 4000);
}
console.log("Start");
syncUsingTimer();
asyncUsingTimer();
console.log("End");