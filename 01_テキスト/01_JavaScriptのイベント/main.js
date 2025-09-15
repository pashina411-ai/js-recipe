// イベントが発生する要素を取得する
const button = document.getElementById("button")

const alertMessage = function () {
  alert("クリックしたね")
}

// 関数を登録
button.onclick = alertMessage


const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

document.onkeydown = function (e) {
    console.log(e.key)
  }

inputText.oninput = logValue
inputDate.oninput = logValue