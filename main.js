const squareContainer = document.querySelector(".square_container");

const colors = [
  "blue",
  "red",
  "yellow",
  "purple",
  "orange",
  "green",
  "white",
  "lightpink",
  "lightblue",
  "lightgreen",
  "lavender",
  "peachpuff",
];

squareContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("square")) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    event.target.style.backgroundColor = randomColor;
    event.target.style.boxShadow = "2px 2px 5px rgba(0,0,0,0.5)";
  }
});
