const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");
const equal = document.getElementById("equal");

// console.log(buttons);
// console.log(result);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.textContent += e.target.id;
  });
});

// console.log(equal);
equal.addEventListener("click", () => {
  //   console.log(equal);
  result.textContent = eval(result.textContent);
});

// console.log(clear);
clear.addEventListener("click", () => {
  result.textContent = "";
});
