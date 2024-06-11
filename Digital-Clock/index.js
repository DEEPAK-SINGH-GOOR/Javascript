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
    let toyou = new Date()
    let d = toyou.getDate()
    let m = toyou.getMonth()
    let y = toyou.getFullYear()
    let h = toyou.getHours()
    let min = toyou.getMinutes()
    let sec = toyou.getSeconds()

    you.innerHTML = `${d} ${monthName[m]} ${y} `
    hour.textContent = h
    minute.textContent = min
    second.textContent = sec
    if (h > 12) {
        hour.textContent = h - 12
    }
})