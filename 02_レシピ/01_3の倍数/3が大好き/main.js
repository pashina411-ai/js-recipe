const genkiFunction = function (number) {
    for (let n = 1; n <= number; n++) {
      // n が3の倍数 または 文字列に '3' が含まれている場合
      if (n % 3 === 0 || n.toString().includes("3")) {
        console.log(`${n}!!!!!!!`)
      } else {
        console.log(n)
      }
    }
  }
  
  // 1〜100までチェック
  genkiFunction(100)