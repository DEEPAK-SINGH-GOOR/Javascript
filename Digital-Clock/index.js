const hour = document.getElementById('hour');

const minute = document.getElementById('minute');

const second = document.getElementById('second');

/// Changes
const you = document.getElementById('you');

let monthName=[
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]
const clock = setInterval(() => { 
    let currentDate = new Date();
    let d = currentDate.getDate();
    let m = currentDate.getMonth();
    let y = currentDate.getFullYear();
    let h = currentDate.getHours();
    let min = currentDate.getMinutes();
    let sec = currentDate.getSeconds();

    you.innerHTML = `${d} ${monthName[m]} ${y}`;
    hour.innerHTML = h;
    minute.innerHTML = min;
    second.innerHTML = sec;

    if (h > 12) {
        hour.innerHTML = h - 12;
    }
});
