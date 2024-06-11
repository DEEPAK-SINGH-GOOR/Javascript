let min1 =5;
let sec = 59;

let id = setInterval(() => {
    sec = sec -1;
    if (sec === 0) 
        {
            min1 =min1 - 1;
            sec = 59
        }
    else if (sec <= 0 && min1 <= 0) {
        clearInterval(id);
    }  
    // Changes
    // const clock1 = document.getElementById("clock1");
    clock1.innerHTML = `${min1}:${sec}`; 
}, 1000);

