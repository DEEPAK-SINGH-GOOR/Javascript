const Evensum=()=>
{
    let input = document.getElementById("input").value
    let sum=0;
    for(let i=0;i<=input;i++)
    {
        if(i%2==0)
        {
            console.log(i);
            sum+=i;
        }
    }
    console.log("Sum Of Even Number:",sum);
}