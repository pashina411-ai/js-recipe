const aInput = document.getElementById("a");
const bInput = document.getElementById("b");
const resultEl = document.getElementById("result");

// 各ボタンを取得
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

// 共通で使う計算処理
function getValues() {
  const a = parseFloat(aInput.value) || 0;
  const b = parseFloat(bInput.value) || 0;
  return { a, b };
}

// 足し算
addBtn.onclick = function () {
  const { a, b } = getValues();
  resultEl.textContent = "結果：" + (a + b);
};

// 引き算
subtractBtn.onclick = function () {
  const { a, b } = getValues();
  resultEl.textContent = "結果：" + (a - b);
};

// 掛け算
multiplyBtn.onclick = function () {
  const { a, b } = getValues();
  resultEl.textContent = "結果：" + (a * b);
};

// 割り算
divideBtn.onclick = function () {
  const { a, b } = getValues();
  if (b === 0) {
    resultEl.textContent = "エラー：0で割れません";
  } else {
    resultEl.textContent = "結果：" + (a / b);
  }
};
