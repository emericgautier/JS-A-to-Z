// https://www.themealdb.com/api/json/v1/1/search.php?s=tomato

// ReadableStream => faire appel à la methode json pour être lisible en js : res.json
// on se ballade dans un objet avec un point : data.meals or data.meals[0]

let meals = [];

async function fetchMeals() {
  await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=duck")
    .then((res) => res.json())
    .then((data) => (meals = data.meals));

  console.log(meals);
}

fetchMeals();
