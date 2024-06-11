// let num1=1, num2=2, num3=3;

// if(num1>num2)
// {
//     if(num1>num3)
//     {
//         console.log("num1 is Big");
//     }
//     else
//     {
//         console.log("num3 is Big");
//     }
// }
// else
// {
//     if(num2>num3)
//     {
//         console.log("num2 is Big");
//     }
//     else
//     {
//         console.log("num3 is Big");
//     }
// }

let num1=1, num2=2, num3=3;

if(num1>num2 && num1>num3){

    console.log("Num1 is Big");
}
else if(num2>num3){
    console.log("Num2 is Big");
}
else{
    console.log("Num3 is Big");
}