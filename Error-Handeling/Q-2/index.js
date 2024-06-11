
function voting(age) {
    if (age >= 18) {
        throw new Error("You Can Vote :18  Your Age:"+ age);
    }
    else
    {
        throw new Error("Age must be between :18  Your Age:"+ age);
    }
    return age;
}

try {
    console.log(voting(18));
}
catch (error) {
    console.log("Error:", error.message);
}
console.log("After Error Message Can Run : Warning");