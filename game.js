        const resultsDiv = document.getElementById('results');
        const playerScoreSpan = document.getElementById('playerScore');
        const computerScoreSpan = document.getElementById('computerScore');
        
        let playerScore = 0;
        let computerScore = 0;

        document.getElementById('rock').addEventListener('click', () => playGame('rock'));
        document.getElementById('paper').addEventListener('click', () => playGame('paper'));
        document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

        function getComputerChoice() {
            const choices = ['rock', 'paper', 'scissors'];
            const randomIndex = Math.floor(Math.random() * 3);
            return choices[randomIndex];
        }

        function playGame(playerChoice) {
            const computerChoice = getComputerChoice();
            let result;

            if (playerChoice === computerChoice) {
                result = "It's a tie!";
            } else if (
                (playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'paper' && computerChoice === 'rock') ||
                (playerChoice === 'scissors' && computerChoice === 'paper')
            ) {
                result = "You win!";
                playerScore++;
            } else {
                result = "Computer wins!";
                computerScore++;
            }

            resultsDiv.innerHTML = `
                <p>You chose: <strong>${playerChoice}</strong></p>
                <p>Computer chose: <strong>${computerChoice}</strong></p>
                <p><strong>${result}</strong></p>
            `;

            playerScoreSpan.textContent = playerScore;
            computerScoreSpan.textContent = computerScore;
        }