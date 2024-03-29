// https://api.blablagues.net/?rub=blagues

const header = document.getElementById("header");
const text = document.getElementById("text");

function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      const content = data.data.content; // destructuré data.data.content
      console.log(content);

      header.textContent = content.text_head;
      text.textContent =
        content.text !== "" ? content.text : content.text_hidden;
    });
}

getJoke(); // pour que la function s'exécute au lancement de la page

document.body.addEventListener("click", getJoke);

//-----------
// destructuring
//-----------

// const header = document.getElementById("header");
// const text = document.getElementById("text");

// function getJoke() {
//   fetch("https://api.blablagues.net/?rub=blagues")
//     .then((res) => res.json())
//     .then(({ data }) => { // {}
//       const { content } = data; // data.data destructuring
//       console.log(content);

//       header.textContent = content.text_head;
//       text.textContent =
//         content.text !== "" ? content.text : content.text_hidden;
//     });
// }

// getJoke();

// document.body.addEventListener("click", getJoke);
