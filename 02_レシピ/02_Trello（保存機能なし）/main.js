// 共通のカード生成処理
const createCard = function (text) {
    const card = document.createElement("div");
    card.className = "card";
  
    const todo = document.createElement("div");
    todo.className = "todo";
    todo.textContent = text;
    card.append(todo);
  
    const deleteButton = document.createElement("div");
    deleteButton.className = "delete";
    deleteButton.onclick = function () {
      card.remove();
    };
    card.append(deleteButton);
  
    return card;
  };
  
  // 各リストの入力欄とボタンにイベントを設定
  const setupList = function (listContainer) {
    const input = listContainer.querySelector(".input-todo");
    const button = listContainer.querySelector(".input-button");
    const cardsContainer = listContainer.querySelector(".cards-container");
  
    if (!input || !button || !cardsContainer) return;
  
    const addCard = function () {
      const text = input.value.trim();
      if (text === "") return;
      const card = createCard(text);
      cardsContainer.append(card);
      input.value = "";
    };
  
    button.onclick = addCard;
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        addCard();
      }
    });
  };
  
  // ページ読み込み時にすべてのリストにイベントを設定
  document.querySelectorAll(".list-container").forEach(setupList);
  
  // 新しいリストを追加する処理
  const mainContainer = document.getElementById("main-container");
  const addListButton = document.getElementById("add-list-button");
  
  addListButton.onclick = function () {
    const newList = document.createElement("div");
    newList.className = "list-container";
    newList.innerHTML = `
      <div class="list-header">新しいリスト</div>
      <div class="cards-container"></div>
      <div class="list-footer">
        <div class="input-container">
          <input type="text" class="input-todo" />
          <div class="input-button">追加</div>
        </div>
      </div>
    `;
    mainContainer.insertBefore(newList, document.querySelector(".add-list"));
    setupList(newList);
  };
  