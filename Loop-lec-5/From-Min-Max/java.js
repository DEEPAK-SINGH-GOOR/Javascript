const minMax=()=>{
    let max = document.getElementById("input").value
    let min = document.getElementById("input2").value


    for(let i = max; i >= min; i--) {
        console.log(i);
    }
}