const display = document.getElementById("display")
const mainasuButton = document.getElementById("mainasu-button")
const baiButton = document.getElementById("bai-button")

let count = 0

// ボタン要素のonclickハンドラに関数を代入する
mainasuButton.onclick = function () {
  // count を更新
  count -= 1
  // count を表示
  display.textContent = count
}


baiButton.onclick = function () {
    count *= 2
    display.textContent = count
  }