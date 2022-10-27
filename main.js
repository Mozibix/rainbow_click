const btn = document.querySelector("#button");

const rainColors = ["red", "blue", "orange", "violent"];

const change = () => {
  document.body.style.background = rainColors[Math.floor(4 * Math.random())];
};

btn.addEventListener("click", change);
