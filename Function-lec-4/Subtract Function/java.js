function sub() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;
  let num4 = document.getElementById("num4").value;
  // parseInt it convert string into integer
  let result=num1-num2-num3-num4;
  document.getElementById("output").innerHTML=result;
}
