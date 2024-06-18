// Query Selctor is most Powerful Selection it use like Css (#) && (.)
const dice = document.querySelector('dice');
// const rollBtn = document.querySelector('#roll');

const rollDice = () => {
    const random = Math.floor(Math.random()*6)+ 1;
    dice.textContent = random;
}

// rollBtn.addEventListener('click', rollDice);
document.querySelector('roll').addEventListener('click', rollDice);
