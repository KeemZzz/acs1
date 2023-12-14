function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playCraps() {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const sum = dice1 + dice2;

    const resultElement = document.getElementById('results');
    resultElement.innerHTML = `
        <p>The first dice landed on: ${dice1}</p>
        <p>The second dice landed on: ${dice2}</p>
        <p>The sum of the dice is: ${sum}</p>
    `;

    if (sum === 7 || sum === 11) {
        resultElement.innerHTML += "<p>Loser!!!</p>";
    } else if (dice1 === dice2 && dice2 % 2 === 0) {
        resultElement.innerHTML += "<p>How lucky! You win!</p>";
    } else {
        resultElement.innerHTML += "<p>You Pushed</p>";
    }
}
