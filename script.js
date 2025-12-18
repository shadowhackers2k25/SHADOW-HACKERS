// Recipe data (acts like a small database)
const recipes = [
  {
    name: "Egg Fried Rice",
    ingredients: ["egg", "rice", "onion"],
    time: "20 minutes",
    cost: "Low",
    tutorial: "https://www.youtube.com/watch?v=iv1frVobFeQ"

  },
  {
    name: "Onion Omelette",
    ingredients: ["egg", "onion"],
    time: "10 minutes",
    cost: "Low",
    tutorial: "https://www.youtube.com/watch?v=Lr6SwITcROE"

  },
  {
    name: "Simple Veg Rice",
    ingredients: ["rice", "onion"],
    time: "15 minutes",
    cost: "Low",
    tutorial: "https://www.youtube.com/watch?v=iFOCkjKD5FA"
  },
  {
    name: "Boiled Eggs",
    ingredients: ["egg"],
    time: "8 minutes",
    cost: "Very Low",
    tutorial: "https://www.youtube.com/watch?v=yhOBCmcATnU"
  }
  
];

// Function runs when button is clicked
function findRecipes() {

  // Get user input
  let input = document.getElementById("ingredientsInput").value;

  // Convert input into array
  let userIngredients = input.toLowerCase().split(",").map(item => item.trim()).filter(item => item !== "")

  let recipeList = document.getElementById("recipeList");
  recipeList.innerHTML = ""; // Clear old results

  let found = false;

  // Check each recipe
  recipes.forEach(recipe => {

    // Check if recipe ingredients match user ingredients
    let match =
    recipe.ingredients.length === userIngredients.length &&
    recipe.ingredients.every(item =>
        userIngredients.includes(item)
    );


    if (match) {
      found = true;

      // Create recipe card
      let div = document.createElement("div");
      div.className = "recipe-card";

      div.innerHTML = `
    <h3>${recipe.name}</h3>
    <p><strong>Time:</strong> ${recipe.time}</p>
    <p><strong>Cost:</strong> ${recipe.cost}</p>
    <a href="${recipe.tutorial}" target="_blank">
        ▶ Watch Tutorial
    </a>
    `;


      recipeList.appendChild(div);
    }
  });

  // If no recipe found
  if (!found) {
    recipeList.innerHTML = "<p>No matching recipe found. Try fewer ingredients.</p>";
  }
}
