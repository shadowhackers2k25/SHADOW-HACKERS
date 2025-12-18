// Recipe data (acts like a small database)
const recipes = [
  {
    name: "Egg Fried Rice",
    ingredients: ["egg", "rice", "onion"],
    time: "20 minutes",
    cost: "Low",
    tutorial: ["https://www.youtube.com/watch?v=iv1frVobFeQ"]

  },
  {
    name: "Onion Omelette",
    ingredients: ["egg", "onion"],
    time: "10 minutes",
    cost: "Low",
    tutorial: ["https://www.youtube.com/watch?v=Lr6SwITcROE"]

  },
  {
    name: "Simple Veg Rice",
    ingredients: ["rice", "onion"],
    time: "15 minutes",
    cost: "Low",
    tutorial: ["https://www.youtube.com/watch?v=iFOCkjKD5FA"]
  },
  {
    name: "Boiled Eggs",
    ingredients: ["egg"],
    time: "8 minutes",
    cost: "Very Low",
    tutorial: ["https://www.youtube.com/watch?v=yhOBCmcATnU"]
  }
  ,
  {
    name: "Chocolate Mug Cake",
    ingredients: ["Flour ","Sugar ","Cocoa powder ","Milk "],
    time: "10 minutes",
    cost: "Very Low",
    tutorial: ["https://www.youtube.com/watch?v=YQm0Kk7H8aI"]
  },
  {
  name: "Bread Omelette",
  ingredients: ["Bread", "Egg "],
  time: "10 minutes",
  cost: "Very Low",
  tutorial: [
    "https://www.youtube.com/watch?v=H2lJ8s9X2pU",
    "https://www.youtube.com/watch?v=4zQp1k8GxXg"
  ]
},
{
  name: "Maggi Noodles",
  ingredients: ["Maggi"],
  time: "5 minutes",
  cost: "Very Low",
  tutorial: [
    "https://www.youtube.com/watch?v=6yHnJpZ1z0Q",
    "https://www.youtube.com/watch?v=G3M8yZPq1pA"
  ]
},
{
  name: "Peanut Butter Sandwich",
  ingredients: ["Bread ", "Peanut Butter "],
  time: "5 minutes",
  cost: "Low",
  tutorial: [
    "https://www.youtube.com/watch?v=K4yXkq8FZ0I",
    "https://www.youtube.com/watch?v=3zWZP4R6yQI"
  ]
},
{
  name: "Banana Milkshake",
  ingredients: ["Banana ", "Milk ", "Sugar "],
  time: "5 minutes",
  cost: "Low",
  tutorial: [
    "https://www.youtube.com/watch?v=H3yQ2v6mX7A",
    "https://www.youtube.com/watch?v=z9LkJ0W1s5E"
  ]
},
{
  name: "French Toast",
  ingredients: ["Bread ", "Egg ", "Milk ", "Sugar "],
  time: "10 minutes",
  cost: "Very Low",
  tutorial: [
    "https://www.youtube.com/watch?v=4N7XzP6tH0Y",
    "https://www.youtube.com/watch?v=Y3X7WJ5k8nA"
  ]
},
{
  name: "Poha",
  ingredients: ["Poha", "Onion"],
  time: "10 minutes",
  cost: "Low",
  tutorial: [
    "https://www.youtube.com/watch?v=Z1k4p9XGZ8E",
    "https://www.youtube.com/watch?v=7M8ZL3Kk2ZQ"
  ]
},
{
  name: "Fruit Chaat",
  ingredients: ["Any fruits", "Chat masala"],
  time: "5 minutes",
  cost: "Low",
  tutorial: [
    "https://www.youtube.com/watch?v=K3Z8F9W5P2A",
    "https://www.youtube.com/watch?v=9ZL2H8K4X6E"
  ]
},
{
  name: "Rice with Ghee & Salt",
  ingredients: ["Cooked rice ", "Ghee "],
  time: "5 minutes",
  cost: "Very Low",
  tutorial: [
    "https://www.youtube.com/watch?v=8H4Z5KX2L6A",
    "https://www.youtube.com/watch?v=2L6X8H4Z5KA"
  ]
},
{
  name: "Tea",
  ingredients: ["Milk", "Tea leaves", "Sugar"],
  time: "7 minutes",
  cost: "Very Low",
  tutorial: [
    "https://www.youtube.com/watch?v=8QX3K7LZ5pA",
    "https://www.youtube.com/watch?v=5LZK8QX3p7A"
  ]
},
{
  name: "Coffee",
  ingredients: ["Milk", "Coffee powder", "Sugar"],
  time: "5 minutes",
  cost: "Very Low",
  tutorial: [
    "https://www.youtube.com/watch?v=4LZQK8X3P7A",
    "https://www.youtube.com/watch?v=Z5K8QX3L7PA"
  ]
},{
  name: "Vegetable Sandwich",
  ingredients: ["Bread ", "Onion", "Tomato", "Salt", "Butter"],
  time: "10 minutes",
  cost: "Low",
  tutorial: [
    "https://www.youtube.com/watch?v=1F9KZ6W8H5A",
    "https://www.youtube.com/watch?v=Z5L8K4XH2P9"
  ]
},
{
  name: "Cheese Toast",
  ingredients: ["Bread ", "Cheese ", "Butter"],
  time: "8 minutes",
  cost: "Low",
  tutorial: [
    "https://www.youtube.com/watch?v=9H8KX5LZ4A2",
    "https://www.youtube.com/watch?v=K4ZL9H8X5A2"
  ]
},
{
  name: "Masala Omelette",
  ingredients: ["Egg ", "Onion ", "Salt", "Oil"],
  time: "7 minutes",
  cost: "Very Low",
  tutorial: [
    "https://www.youtube.com/watch?v=8KZL5H9X4A2",
    "https://www.youtube.com/watch?v=H5A2KZL8X9"
  ]
},
{
  name: "Corn Chaat",
  ingredients: ["Boiled corn ", "Salt", "Butter "],
  time: "5 minutes",
  cost: "Low",
  tutorial: [
    "https://www.youtube.com/watch?v=4ZL9K8XH5A2",
    "https://www.youtube.com/watch?v=H8X5KZ4L9A2"
  ]
},
{
  name: "Aloo Fry",
  ingredients: ["Potato ", "Salt", "Oil"],
  time: "15 minutes",
  cost: "Very Low",
  tutorial: [
    "https://www.youtube.com/watch?v=KZ4L9H8X5A2",
    "https://www.youtube.com/watch?v=5A2XH8KZL9"
  ]
},


  
];

// Function runs when button is clicked
function findRecipes() {
  let input = document.getElementById("ingredientsInput").value;

  let userIngredients = input
    .toLowerCase()
    .split(",")
    .map(item => item.trim())
    .filter(item => item !== "");

  let recipeList = document.getElementById("recipeList");
  recipeList.innerHTML = "";

  let found = false;

  recipes.forEach(recipe => {
    let match = recipe.ingredients.every(item =>
      userIngredients.includes(item.trim().toLowerCase())
    );

    if (match) {
      found = true;

      let div = document.createElement("div");
      div.className = "recipe-card";

      let links = recipe.tutorial
        .map(link => `<a href="${link}" target="_blank">▶ Watch Tutorial</a>`)
        .join("<br>");

      div.innerHTML = `
        <h3>${recipe.name}</h3>
        <p><strong>Time:</strong> ${recipe.time}</p>
        <p><strong>Cost:</strong> ${recipe.cost}</p>
        ${links}
      `;

      recipeList.appendChild(div);
    }
  });

  if (!found) {
    recipeList.innerHTML = "<p>No matching recipe found. Try fewer ingredients.</p>";
  }
}