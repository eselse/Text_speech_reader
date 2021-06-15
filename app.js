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

  box.addEventListener("click", () => {
    setTextMessage(text);
    speakText();

    // Add active effect
    box.classList.add("active");
    setTimeout(() => box.classList.remove("active"), 800);
  });

  main.appendChild(box);
}

// Init speech synth
const message = new SpeechSynthesisUtterance();

// Store voices
let voices = [];

function getVoices() {
  voices = window.speechSynthesis.getVoices();

  voices.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  });
}

// Set text
function setTextMessage(text) {
  message.text = text;
}

// Speak text
function speakText() {
  speechSynthesis.speak(message);
}

// Set voice
function setVoice(e) {
  message.voice = voice.find((voice) => voice.name === e.target.value);
}

// Event listeners ===============================================================
// Voices changed
speechSynthesis.addEventListener("voiceschanged", () => {
  const voices = speechSynthesis.getVoices();
});

// Toggle text box
toggleBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.toggle("show")
);

// Close button
closeBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.remove("show")
);

// Change voice
voicesSelect.addEventListener("change", setVoice);

// Read text button
readBtn.addEventListener('click', () => {
  setTextMessage(textArea.value)
  speakText()
});

getVoices();
