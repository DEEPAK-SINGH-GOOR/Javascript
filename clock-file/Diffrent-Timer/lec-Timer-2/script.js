document.getElementById('btn').addEventListener('click', () => {
    let hour = document.getElementById('hour').value
    let minute = document.getElementById('minute').value
    let sec = document.getElementById('sec').value

    // const clock2 = document.getElementById('clock2');

    const id = setInterval(() => 
    {
        if (sec > 0) 
        {
            sec -= 1;
        } 
        else if (minute > 0) 
        {
            minute -= 1;
            sec = 59;
        } else if (hour > 0) 
        {
            hour -= 1;
            minute = 59;
            sec = 59;
        } else 
        {
            clearInterval(id);
            alert("Timeout");
        }

        clock2.innerHTML = `${hour}:${minute}:${sec}`;
    }, 1000);
});

