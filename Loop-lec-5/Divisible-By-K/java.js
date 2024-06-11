const divisible=()=>{
    let num = document.getElementById("num").value
    let k = document.getElementById("k").value

    for(let i=1;i<=num;i++)
    {
        if(i%k==0){
            console.log(i);
        }
    }
}