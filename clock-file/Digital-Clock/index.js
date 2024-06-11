const hour = document.getElementById('hour')

const minute = document.getElementById('minute')

const second = document.getElementById('second')

/// Changes
const you = document.getElementById('you')

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
const clock = setInterval(()=> { 
    let hi = new Date()
    let d = hi.getDate()
    let m = hi.getMonth()
    let y = hi.getFullYear()
    let h = hi.getHours()
    let min = hi.getMinutes()
    let sec = hi.getSeconds()

    you.innerHTML = `${d} ${monthName[m]} ${y} `
    hour.textContent = h
    minute.textContent = min
    second.textContent = sec
    if (h > 12) {
        hour.textContent = h - 12
    }
})