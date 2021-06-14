// Define the constants =======================================================
const main = document.querySelector("main");
const voicesSelect = document.getElementById("voices");
const textArea = document.getElementById("text");
const readBtn = document.getElementById("read");
const toggleBtn = document.getElementById("toggle");
const closeBtn = document.getElementById("close");

const data = [
  { image: "./img/drink.jpg", text: "i'm Thirsty" },
  { image: "./img/angry.jpg", text: "i'm Angry" },
  { image: "./img/food.jpg", text: "i'm Hungry" },
  { image: "./img/grandma.jpg", text: "i Want To Go To Grandmas" },
  { image: "./img/happy.jpg", text: "i'm Happy" },
  { image: "./img/home.jpg", text: "i Want To Go Home" },
  { image: "./img/hurt.jpg", text: "i'm Hurt" },
  { image: "./img/outside.jpg", text: "i Want To Go Outside" },
  { image: "./img/sad.jpg", text: "i'm Sad" },
  { image: "./img/scared.jpg", text: "i'm Scared" },
  { image: "./img/school.jpg", text: "i Want To Go To School" },
  { image: "./img/tired.jpg", text: "i'm Tired" },
];

data.forEach(createBox);

// Define the functions ========================================================
// Create speech boxes
function createBox(item) {
  const box = document.createElement("div");
  const { image, text } = item;

  box.classList.add("box");
  box.innerHTML = `
    <img src="${image}" alt="${text}">
    <p class="info">${text}</p>
  `;

  // @todo - speak event

  main.appendChild(box);
}
