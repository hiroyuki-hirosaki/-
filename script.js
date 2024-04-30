document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('startButton').addEventListener('click', () => {
        document.getElementById('startButton').style.display = 'none';
        document.getElementById('gameSection').style.display = 'block';
        startTimer();
        updateQuestion();
    });

    document.getElementById('answer').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    });
});

let score = 0;
let timer;
let timeLeft = 1200;

function generateQuestion() {
    const questions = [
        { question: 'x^2 + 5x + 6 を因数分解せよ！', answer: '2,3' },
        { question: 'x^2 + 4x - 5 を因数分解せよ！', answer: '-1,5' },
        { question: 'x^2 - 9 を因数分解せよ！', answer: '-3,3' },
        { question: 'x^2 + 8x + 16 を因数分解せよ！', answer: '4' }
    ];
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
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
        document.getElementById('score').textContent = `スコア: ${score}`;
    } else {
        document.getElementById('result').textContent = '不正解！';
    }
    updateQuestion();
    document.getElementById('answer').value = '';
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `残り時間: ${timeLeft}秒`;
        if (timeLeft === 0) {
            clearInterval(timer);
            alert(`ゲーム終了！ スコア: ${score}`);
            location.reload();
        }
    }, 1000);
}
