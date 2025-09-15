const figure = document.getElementById("figure");

// クラスを順番に切り替えるリスト
const shapes = ["square", "circle", "triangle"];
let index = 0;

figure.onclick = function () {
  // 今のクラスを削除
  figure.classList.remove(shapes[index]);

  // 次の図形へ
  index = (index + 1) % shapes.length;

  // 新しいクラスを追加
  figure.classList.add(shapes[index]);
};