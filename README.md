<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock Paper Scissors Game</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Rock Paper Scissors</h1>
        <div class="logo">
            <img src="rock-paper-scissors-logo.jpg" alt="Rock Paper Scissors Logo">
        </div>
        <div class="choices">
            <button class="choice" data-choice="rock">
                <img src="rock.png" alt="Rock">
            </button>
            <button class="choice" data-choice="paper">
                <img src="paper.png" alt="Paper">
            </button>
            <button class="choice" data-choice="scissors">
                <img src="scissor.png" alt="Scissors">
            </button>
        </div>
        <div class="result">
            <p id="user-choice">Your choice: </p>
            <p id="computer-choice">Computer choice: </p>
            <p id="winner">Winner: </p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
#css
body {
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background: url('background.png') no-repeat center center fixed;
    background-size: cover;
    color: #fff; /* Ensure text is readable on the background */
}

.container {
    text-align: center;
    background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent white background */
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    padding: 20px;
    max-width: 600px;
    width: 100%;
    animation: fadeIn 1s ease-in-out;
}

h1 {
    color: #0044cc;
    font-size: 2.5em;
    margin-bottom: 20px;
    font-weight: bold;
}

.logo img {
    width: 150px;
    margin-bottom: 20px;
}

.choices {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
}

.choice {
    background: none;
    border: none;
    cursor: pointer;
    transition: transform 0.3s, filter 0.3s;
}

.choice img {
    width: 100px;
    height: 100px;
    transition: filter 0.3s, transform 0.3s;
}

.choice:hover img {
    filter: brightness(1.2);
    transform: scale(1.1);
}

.result {
    margin-top: 20px;
}

#user-choice, #computer-choice, #winner {
    font-size: 1.3em;
    margin: 10px 0;
    color: #333;
    font-weight: bold;
}

#user-choice::before,
#computer-choice::before,
#winner::before {
    content: "• ";
    color: #00aaff;
}

#winner {
    color: #333;
}

#winner.win {
    color: #28a745;
    animation: winAnimation 1s ease-in-out;
}

#winner.lose {
    color: #dc3545;
    animation: loseAnimation 1s ease-in-out;
}

#winner.tie {
    color: #ffc107;
    animation: tieAnimation 1s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes winAnimation {
    from {
        color: #28a745;
        transform: scale(1);
    }
    to {
        color: #1e7e34;
        transform: scale(1.2);
    }
}

@keyframes loseAnimation {
    from {
        color: #dc3545;
        transform: scale(1);
    }
    to {
        color: #b52e26;
        transform: scale(1.2);
    }
}

@keyframes tieAnimation {
    from {
        color: #ffc107;
        transform: scale(1);
    }
    to {
        color: #e0a800;
        transform: scale(1.2);
    }
}
#javascript
document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const userChoiceElement = document.getElementById('user-choice');
    const computerChoiceElement = document.getElementById('computer-choice');
    const winnerElement = document.getElementById('winner');

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const userChoice = choice.getAttribute('data-choice');
            const computerChoice = getComputerChoice();
            const winner = determineWinner(userChoice, computerChoice);

            userChoiceElement.textContent = `Your choice: ${userChoice}`;
            computerChoiceElement.textContent = `Computer choice: ${computerChoice}`;
            winnerElement.textContent = `Winner: ${winner}`;

            updateWinnerClass(winner);
        });
    });

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'It\'s a tie!';
        }

        if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'Computer wins!';
        }
    }

    function updateWinnerClass(winner) {
        winnerElement.classList.remove('win', 'lose', 'tie');
        if (winner.includes('win')) {
            winnerElement.classList.add('win');
        } else if (winner.includes('lose')) {
            winnerElement.classList.add('lose');
        } else {
            winnerElement.classList.add('tie');
        }
    }
});
