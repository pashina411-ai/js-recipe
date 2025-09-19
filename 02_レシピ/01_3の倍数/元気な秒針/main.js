const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0
let id = null

// 無限にカウントする関数
const genkiFunction = function () {
  id = setInterval(function () {
    count += 1
    display.textContent = count

    if (count % 3 === 0) {
      console.log(`${count}!!!!!!!`)
    } else {
      console.log(count)
    }
  }, 1000) // 1秒ごとに実行
}

button.onclick = function () {
  if (id === null) {
    genkiFunction()
    button.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}

