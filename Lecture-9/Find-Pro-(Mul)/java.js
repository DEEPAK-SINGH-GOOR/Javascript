
const sum=()=>{
    let num1=document.getElementById("num1").value
    let num2=document.getElementById("num2").value
    let num3=document.getElementById("num3").value
    let num4=document.getElementById("num4").value
    let num5=document.getElementById("num5").value

    // TOTAL
    let total=Number(num1)+Number(num2)+Number(num3)+Number(num4)+Number(num5);
    document.getElementById("output").innerHTML=total
}