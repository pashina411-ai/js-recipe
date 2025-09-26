const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

// localStorageから読み込み（初期値は空の配列）
let list = JSON.parse(localStorage.getItem("list") || "[]")

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

  deleteButton.onclick = function () {
    // 配列から削除
    let index = list.indexOf(text)
    if (index !== -1) {
      list.splice(index, 1)
    }
    // localStorageを更新
    localStorage.setItem("list", JSON.stringify(list))
    // カードを削除
    card.remove()
  }
  card.append(deleteButton)

  return card
}

// 追加ボタンを押したとき
addButton.onclick = function () {
  const text = inputElement.value.trim()
  if (!text) return

  // 配列に追加
  list.push(text)
  // localStorageに保存
  localStorage.setItem("list", JSON.stringify(list))

  // カードを追加
  const card = createCard(text)
  container.append(card)

  inputElement.value = ""
}

// ページ読み込み時に復元
const fragment = document.createDocumentFragment()
for (const text of list) {
  const card = createCard(text)
  fragment.append(card)
}
container.append(fragment)
