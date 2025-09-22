const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

// カード追加の共通処理
const addCard = function () {
  const text = inputElement.value.trim()
  if (text === "") return // 空入力は無視

  // カードを作成して追加
  const card = createCard(text)
  container.append(card)

  // 入力欄を空にする
  inputElement.value = ""
}

// 追加ボタンを押したとき
addButton.onclick = addCard

// 入力欄でEnterキーが押されたとき
inputElement.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addCard()
  }
})

// 共通の処理：テキストからカードを作成する
const createCard = function (text) {
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理
  deleteButton.onclick = function () {
    card.remove()
  }
  card.append(deleteButton)

  return card
}
