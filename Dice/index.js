// Query Selctor is most Powerful Selection it use like Css (#) && (.)
const dice = document.getElementById('dice');
// const rollBtn = document.querySelector('#roll');

const rollDice = () => {
    const random = Math.floor(Math.random()*6)+ 1;
    dice.textContent = random;
}

// rollBtn.addEventListener('click', rollDice);
document.getElementById('roll').addEventListener('click', rollDice);



