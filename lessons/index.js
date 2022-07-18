// SELECTEURS
// document.querySelector("").style.background = "yellow";
// const baliseHTML = document.querySelector("h4");

// Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

/* Priorities */
/* <div> > #id > .class > baliseHTML */
/* !important */

//-------------------------------------------
// Mouse Events

const mousemove = document.querySelector(".mousemove");

// console.log(mousemove);

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  // console.log("mouse out !");
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(-2deg)";
});

//-------------------------------------------
// KeyPress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
  const audio = new Audio();
  // audio.src = "./z.mp3";
  audio.src = key + ".mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  // console.log(e);
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }
  if (e.key === "z") ring(e.key);
});

//-------------------------------------------
// scroll event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  // console.log("it works!");
  // console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-50px";
  }
});

//-------------------------------------------
// Form events
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

// console.log(form);

inputName.addEventListener("input", (e) => {
  // console.log(e.target.value);
  pseudo = e.target.value;
  // console.log(pseudo);
});

select.addEventListener("input", (e) => {
  // console.log(e.target.value);
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  // console.log("yes!");
  e.preventDefault();

  // console.log(cgv.checked);

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//-------------------------------------------
// Load event

window.addEventListener("load", () => {
  // console.log("document chargé");
});

//-------------------------------------------
// forEach (pour chacun d'eux)

// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");
// console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    // console.log(e.target);
    e.target.style.transform = "scale(0.7)";
  });
});
