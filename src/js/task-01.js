const categoryEl = document.querySelector("#categories");
const el = categoryEl.children;

console.log(`Number of categories: ${el.length}`);

[...el].forEach((item) => {
  console.dir(`Category: ${item.firstElementChild.textContent}`);
  console.dir(`Elements: ${item.lastElementChild.children.length}`);
});
