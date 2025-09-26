const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choicesContainer = document.getElementById("choices-container")
const feedback = document.getElementById("feedback")

// クイズの内容
const quiz = {
  text: "GSDC何位でしょう？",
  image: "IMG_3712.jpg",
  choices: [
    { text: "1位", feedback: "正解！圧勝したよ！" },
    { text: "2位", feedback: "残念！2位はゆうきだよ" },
    { text: "3位", feedback: "残念！3位はひなただよ！" },
    { text: "デザイン賞", feedback: "正解！ベストビデオエディター賞もとったよ！" },
  ],
}

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢を一旦クリア
  choicesContainer.innerHTML = ""

  // 選択肢（ボタン）を quiz.choices の数だけ追加
  quiz.choices.forEach((choice, index) => {
    const button = document.createElement("button")
    button.textContent = choice.text
    button.onclick = () => {
      choose(index)
    }
    choicesContainer.append(button)
  })
}

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

// クイズを表示
reloadQuiz()
