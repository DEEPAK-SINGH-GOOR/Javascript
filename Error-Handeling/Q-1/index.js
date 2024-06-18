// ----------- > USING THROW FUNCTION < ----------
/*
const division = (a, b) => {
    if (a == 0) {
        throw new Error("Invalid division");
    }
    if (b == 0) {
        throw new Error("Invalid division");
    }
    return a / b;
}
console.log(division(1, 0));

console.log("Warning");
*/
// ----------- > USING TRY & CATCH FUNCTION < ----------


function divide(a, b) {
    if (b === 0) {
        throw new Error("Invalid division: divisor cannot be zero");
    }
    return a / b;
}
try {
    console.log(divide(10, 0));
} catch (error) {
   
    console.log("Error:", error.message);
}
console.log("After handling the error, this line can run.");

