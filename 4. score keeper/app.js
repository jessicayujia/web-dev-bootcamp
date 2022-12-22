const player1 = {
    score: 0,
    button: document.querySelector('#button1'),
    display: document.querySelector('#display1')
}

const player2 = {
    score: 0,
    button: document.querySelector('#button2'),
    display: document.querySelector('#display2')
}

const resetButton = document.querySelector('#resetButton');
const playToSelect = document.querySelector('#playTo');
let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        player.display.textContent = player.score;
    }
    if (player.score === winningScore) {
        isGameOver = true;
        player.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
}

player1.button.addEventListener('click', function () {
    updateScore(player1, player2);
})

player2.button.addEventListener('click', function () {
    updateScore(player2, player1);
})

function reset() {
    isGameOver = false;
    for (let player of [player1, player2]) {
        player.score = 0;
        player.display.textContent = player.score;
        player.display.classList.remove('has-text-success', 'has-text-danger');
        player.button.disabled = false;
    }
}

resetButton.addEventListener('click', reset)

playToSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})