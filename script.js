const elDiceOne = document.getElementById("dice1");
const elDiceTwo = document.getElementById("dice2");
const elOutput = document.getElementById("roll");

elOutput.onclick = function() { rollDice();};


function rollDice() {
const diceOne = Math.floor((Math.random() * 6) + 1);
const diceTwo = Math.floor((Math.random() * 6) + 1);
}

console.log(diceOne + "" + diceTwo);

for (let i=1; i<=6; i++) {
    elDiceOne.classList.remove('show-' +i);
    if (diceOne === i) {
    elDiceOne.classList.add('show-' +i)
    }
}

for(let k; k<= 6; k++) {
    elDiceTwo.classList.remove('show-' +k);
    if (diceTwo === k) {
    elDiceTwo.classList.add('show-' +k)

    }
    setTimoOut(rollDice(), 1000 );
}