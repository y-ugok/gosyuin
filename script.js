// 「data-filter」を持つ要素（ボタン）を全て取得
const filterButtons = document.querySelector(".filter");

// 「data-category」を持つ要素（コンテンツ）をすべて取得
const categoryContents = document.querySelectorAll("[data-category]");

filterButtons.addEventListener("change", categoryFilter);

// ====================== //
const setFillHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

let vw = window.innerWidth;

window.addEventListener("resize", () => {
  if (vw === window.innerWidth) {
    // 画面の横幅にサイズ変動がないので処理を終える
    return;
  }

  // 画面の横幅のサイズ変動があった時のみ高さを再計算する
  vw = window.innerWidth;
  setFillHeight();
});

// 初期化
setFillHeight();
