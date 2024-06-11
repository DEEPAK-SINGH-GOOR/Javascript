const div=()=>{

    let input=document.getElementById("input").value

    if(input%3==0){
        document.getElementById("output").innerHTML='Yes !!'
    }

    else{
        document.getElementById("output").innerHTML='No !!'
    }
}