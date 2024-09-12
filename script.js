const box = document.querySelector(".box");
const all = document.querySelector(".all");
const off = document.querySelector(".off");

for (let i = 0; i < 1000; i++) {
  const boxItem = document.createElement("div");

  boxItem.classList.add("box-item");

  boxItem.addEventListener("mouseover", () => {
    setColor(boxItem);
  });

  boxItem.addEventListener("mouseleave", () => {
    setTimeout(() => {
      removeColor(boxItem);
    }, 500);
  });

  all.addEventListener("click", () => {
    setColor(boxItem);
  });

  off.addEventListener("click", () => {
    removeColor(boxItem);
  });

  box.append(boxItem);
}
function getRandomColor() {
  const colors = [
    "red",
    "green",
    "yellow",
    "blue",
    "purple",
    "gray",
    "lime",
    "aqua",
    "blueviolet",
    "chartreuse",
    "brown",
    "chocolate",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

function setColor(element) {
  const randomColor = getRandomColor();

  element.style.background = randomColor;
  element.style.boxShadow = `0 0 10px ${randomColor}`;
    
}

function removeColor(element) {
    element.style.background = "#464646"
    element.style.boxShadow = "none"
}