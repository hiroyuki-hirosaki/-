// 解答をチェックする関数
function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    const { answer, equation } = generateRandomQuadraticEquation(); // 解答と方程式を取得

    // 解答の順序を入れ替えても成り立つ場合を考慮
    const userAnswerReversed = userAnswer.replace(/\(([^)]+)\)\(([^)]+)\)/, '($2)($1)');
    const userAnswerCorrect = userAnswer === answer || userAnswerReversed === answer;

    if (userAnswerCorrect) {
        // 正解の処理
        score++;
        document.getElementById('scoreValue').textContent = score;
        if (score === 10) {
            // ゲームクリアの処理
            endGame();
        } else {
            // 次の問題を表示
            document.getElementById('result').textContent = '正解！';
            const { equation: nextEquation } = generateRandomQuadraticEquation();
            document.getElementById('question').textContent = nextEquation;
            document.getElementById('answer').value = ''; // 解答欄をクリア
        }
    } else {
        // 不正解の処理
        document.getElementById('result').textContent = '不正解！';
        incorrectQuestions.push(equation); // 間違えた問題を配列に追加
        updateIncorrectList(); // 間違えた問題一覧を更新

        // 次の問題を表示して処理を続行する
        const { equation: nextEquation } = generateRandomQuadraticEquation();
        document.getElementById('question').textContent = nextEquation;
        document.getElementById('answer').value = ''; // 解答欄をクリア
    }
}

// ゲーム終了の処理
function endGame() {
    document.getElementById('clearMessage').style.display = 'block'; // クリアメッセージを表示
    document.getElementById('gameSection').style.display = 'none'; // ゲームセクションを非表示にする
    document.querySelector('.listContainer').style.display = 'flex'; // 正答表と間違えた問題一覧を表示
    updateCorrectList(); // 正答表を更新
    updateIncorrectList(); // 間違えた問題一覧を更新
}
