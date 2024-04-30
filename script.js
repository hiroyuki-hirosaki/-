document.addEventListener('DOMContentLoaded', () => {
    let score = 0;
    let timer;
    let timeLeft = 30;
    let currentQuestionIndex = 0;
    const questions = [
        { question: '2次方程式 x^2 + 5x + 6 を因数分解せよ！', answer: 'x^2 + 5x + 6 = (x + 2)(x + 3)' },
        { question: '2次方程式 x^2 + 4x - 5 を因数分解せよ！', answer: 'x^2 + 4x - 5 = (x + 5)(x - 1)' },
        { question: '2次方程式 x^2 - 9 を因数分解せよ！', answer: 'x^2 - 9 = (x + 3)(x - 3)' },
        { question: '2次方程式 x^2 + 8x + 16 を因数分解せよ！', answer: 'x^2 + 8x + 16 = (x + 4)(x + 4)' }
    ];

    document.getElementById('startButton').addEventListener('click', () => {
        document.getElementById('startButton').style.display = 'none';
        document.getElementById('gameSection').style.display = 'block';
        startTimer();
        updateQuestion();
    });

    document.getElementById('answerButton').addEventListener('click', () => {
        checkAnswer();
    });

    document.getElementById('answer').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    });

    function generateQuestion() {
        const { question, answer } = questions[currentQuestionIndex];
        return { question, answer };
    }

    function updateQuestion() {
        const { question } = generateQuestion();
        document.getElementById('question').textContent = question;
    }

    function checkAnswer() {
        const userAnswer = document.getElementById('answer').value.trim();
        const { answer } = generateQuestion();
        if (userAnswer === answer) {
            score++;
            document.getElementById('result').textContent = '正解！';
        } else {
            document.getElementById('result').textContent = '不正解！';
        }
        updateScore();
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            updateQuestion();
        } else {
            endGame();
        }
        document.getElementById('answer').value = '';
    }

    function updateScore() {
        document.getElementById('score').textContent = `スコア: ${score}`;
    }

    function startTimer() {
        timer = setInterval(() => {
            timeLeft--;
            document.getElementById('timer').textContent = `残り時間: ${timeLeft}秒`;
            if (timeLeft === 0) {
                clearInterval(timer);
                endGame();
            }
        }, 1000);
    }

    function endGame() {
        alert(`ゲーム終了！ スコア: ${score}`);
        location.reload();
    }
});
