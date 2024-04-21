// 「data-filter」を持つ要素（ボタン）を全て取得
const filterButtons = document.querySelector(".filter");

// 「data-category」を持つ要素（コンテンツ）をすべて取得
const categoryContents = document.querySelectorAll("[data-category]");

filterButtons.addEventListener("change", categoryFilter);

function categoryFilter() {
  const selectedCategory = filterButtons.value;

  // 全てのコンテンツを非表示にする
  categoryContents.forEach((categoryContent) => {
    categoryContent.classList.remove("is-show");
  });

  // 選択されたカテゴリーに一致するコンテンツを表示する
  if (selectedCategory === "all") {
    categoryContents.forEach((categoryContent) => {
      categoryContent.classList.add("is-show");
    });
  } else {
    const targetContents = document.querySelectorAll(
      '[data-category="' + selectedCategory + '"]'
    );
    targetContents.forEach((targetContent) => {
      targetContent.classList.add("is-show");
    });
  }
}
