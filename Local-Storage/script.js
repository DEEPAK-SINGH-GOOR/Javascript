let key = prompt("Enter key you want to state");// prompt is use for popup
let value = prompt("Enter value you want to City ");// prompt is use for popup

localStorage.setItem(key,value);// localStorage to storage object
console.log(`the value at ${key} is ${localStorage.getItem(key)}`);


/*
    let state = prompt ("Enter Your C  State");
    let city = prompt ("Enter Your City");

    localstorage.setItem(key,state);

    console.log(localStorage.getItem(key)
*/ 


