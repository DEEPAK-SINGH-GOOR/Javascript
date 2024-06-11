let str="red and white"
let count=0;
//When don't know About Length use str.length 
for(let i=0;i<str.length;i++)
{
    if(str[i]=="a" ||str[i]=="e" ||str[i]=="i" ||str[i]=="o" ||str[i]=="u" )
    {
        count++;
    }
}
console.log(count);