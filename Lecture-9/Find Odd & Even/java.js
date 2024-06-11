const odd = ()=>{

    let input=document.getElementById("input").value;

    if(input % 2==0){
        document.getElementById("output").innerHTML='its an Even number !!';
    }

    else{
        document.getElementById("output").innerHTML='its an Odd number';
    }
}