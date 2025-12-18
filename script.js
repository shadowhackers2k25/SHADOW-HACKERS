// Recipe data (acts like a small database)
const recipes = [
  {
    name: "Egg Fried Rice",
    ingredients: ["egg", "rice", "onion"],
    time: "20 minutes",
    cost: "Low",
    tutorial: ["https://www.youtube.com/watch?v=iv1frVobFeQ"],
    imageLink: "https://i.pinimg.com/1200x/18/42/b1/1842b123e9778f6fa135ec3a4b8fad8a.jpg"

  },
  {
    name: "Onion Omelette",
    ingredients: ["egg", "onion"],
    time: "10 minutes",
    cost: "Low",
    tutorial: ["https://www.youtube.com/watch?v=Lr6SwITcROE"],
    imageLink:"https://i.pinimg.com/1200x/88/9a/e8/889ae8aeb0d9533a953e7924a9f08651.jpg"
  },
  {
    name: "Simple Veg Rice",
    ingredients: ["rice", "onion"],
    time: "15 minutes",
    cost: "Low",
    tutorial: ["https://www.youtube.com/watch?v=iFOCkjKD5FA"],
    imageLink:"https://i.pinimg.com/1200x/d1/c6/f8/d1c6f87a8e16e160335020c8bbde4c3c.jpg"
  },
  {
    name: "Boiled Eggs",
    ingredients: ["egg"],
    time: "8 minutes",
    cost: "Very Low",
    tutorial: ["https://www.youtube.com/watch?v=yhOBCmcATnU"],
    imageLink:"https://i.pinimg.com/1200x/32/e5/f7/32e5f7746c1301167314ce9960e6b408.jpg"
  }
  ,
  {
    name: "Chocolate Mug Cake",
    ingredients: ["flour","sugar","cocoa powder","milk"],
    time: "10 minutes",
    cost: "Very Low",
    tutorial: ["https://www.youtube.com/watch?v=2at7z3ZX_lI"],
    imageLink:"https://i.pinimg.com/1200x/72/0b/20/720b20d59deb5cdfba3b161227a568a5.jpg"
  },
  {
  name: "Bread Omelette",
  ingredients: ["bread", "egg"],
  time: "10 minutes",
  cost: "Very Low",
  tutorial: [
    "https://www.youtube.com/watch?v=9yrP1WmUQ3s",
    "https://www.youtube.com/watch?v=rNkHiCMKV9o"
  ],
  imageLink:"https://i.pinimg.com/1200x/58/37/7c/58377c14ee160928d0fc13878019abbf.jpg"
},
{
  name: "Maggi Noodles",
  ingredients: ["maggi"],
  time: "5 minutes",
  cost: "Very Low",
  tutorial: [
    "https://www.youtube.com/watch?v=Qmz2ZaQRK2M",
    "https://www.youtube.com/watch?v=i6fcX2J0eXU"
  ],
  imageLink:"https://i.pinimg.com/736x/6d/41/05/6d41054c9370811cd5481d264f3836f8.jpg"
},
{
  name: "Peanut Butter Sandwich",
  ingredients: ["bread", "peanut butter"],
  time: "5 minutes",
  cost: "Low",
  tutorial: [
    "https://www.youtube.com/watch?v=qPbaShU7Dqc",
    "https://www.youtube.com/watch?v=5JhGR4jo-P0"
  ],
  imageLink:"https://i.pinimg.com/736x/ed/80/19/ed80192ee801abdc7b96e1d6778ddaa2.jpg"
},
{
  name: "Banana Milkshake",
  ingredients: ["banana", "milk", "sugar"],
  time: "5 minutes",
  cost: "Low",
  tutorial: [
    "https://www.youtube.com/watch?v=Ht-4cM4taNo",
    "https://www.youtube.com/watch?v=mGH3VQqZwdk"
  ],
  imageLink:"https://i.pinimg.com/736x/6c/a1/58/6ca1580081dbda867e648e87caf31767.jpg"
},
{
  name: "French Toast",
  ingredients: ["bread", "egg", "milk", "sugar"],
  time: "10 minutes",
  cost: "Very Low",
  tutorial: [
    "https://www.youtube.com/watch?v=Km7KRbKVu88",
    "https://www.youtube.com/watch?v=vPrtNzvDS5M"
  ],
  imageLink:"https://i.pinimg.com/736x/c3/42/8a/c3428ac84166b43ea10cc9c34de2044f.jpg"
},
{
  name: "Poha",
  ingredients: ["poha", "onion"],
  time: "10 minutes",
  cost: "Low",
  tutorial: [
    "https://www.youtube.com/watch?v=pNzxeWcbVtU",
    "https://www.youtube.com/watch?v=A2akRqql_S0"
  ],
  imageLink:"https://i.pinimg.com/736x/a8/a4/9d/a8a49de5fc1a71c4db0cc2b20c30ab3d.jpg"
},
{
  name: "Fruit Chaat",
  ingredients: ["any fruits", "chat masala"],
  time: "5 minutes",
  cost: "Low",
  tutorial: [
    "https://www.youtube.com/watch?v=kM7hIQc6HW0",
    "https://www.youtube.com/watch?v=QkbDGUvX81c"
  ],
  imageLink:"https://i.pinimg.com/1200x/f9/35/c7/f935c730ab9b48168e2d69e460eec713.jpg"
},
{
  name: "Rice with Ghee & Salt",
  ingredients: ["cooked rice", "ghee"],
  time: "5 minutes",
  cost: "Very Low",
  tutorial: [
    "https://www.youtube.com/watch?v=dOrTqBsvLaI",
    "https://www.youtube.com/watch?v=0fsQAbxiNdk"
  ],
  imageLink:"https://i.pinimg.com/736x/ad/fd/cf/adfdcf7d1edb8ae989c3b1eba688892c.jpg"
},
{
  name: "Tea",
  ingredients: ["milk", "tea leaves", "sugar"],
  time: "7 minutes",
  cost: "Very Low",
  tutorial: [
    "https://www.youtube.com/watch?v=0cf4RUMdcnA",
    "https://www.youtube.com/watch?v=xSB1bMDF0Hw"
  ],
  imageLink:"https://i.pinimg.com/1200x/7c/a6/54/7ca65499d4a7d6ee290c2edd656a46f2.jpg"
},
{
  name: "Coffee",
  ingredients: ["milk", "coffee powder", "sugar"],
  time: "5 minutes",
  cost: "Very Low",
  tutorial: [
    "https://www.youtube.com/watch?v=PbKmZwniSF4",
    "https://www.youtube.com/watch?v=eH7UgvJ8zUY"
  ],
  imageLink:"https://i.pinimg.com/1200x/c4/73/7e/c4737e013a673e196416210867f9b1f8.jpg"
},{
  name: "Vegetable Sandwich",
  ingredients: ["bread", "onion", "tomato", "salt", "butter"],
  time: "10 minutes",
  cost: "Low",
  tutorial: [
    "https://www.youtube.com/watch?v=UVVYkuaJlts",
    "https://www.youtube.com/watch?v=eD2GEGjrCjI"
  ],
  imageLink:"https://i.pinimg.com/1200x/31/4d/26/314d268458abfb0b94e9d643cce81a27.jpg"
},
{
  name: "Cheese Toast",
  ingredients: ["bread", "cheese", "butter"],
  time: "8 minutes",
  cost: "Low",
  tutorial: [
    "https://www.youtube.com/watch?v=PcFQnteNwvo&vl=en",
    "https://www.youtube.com/watch?v=HpPeUcFBvBg"
  ],
  imageLink:"https://i.pinimg.com/736x/0d/5e/57/0d5e5795c6982fe728c7665d399bf465.jpg"

},
{
  name: "Masala Omelette",
  ingredients: ["egg", "onion", "salt", "oil"],
  time: "7 minutes",
  cost: "Very Low",
  tutorial: [
    "https://www.youtube.com/watch?v=uhjH7tlM1Jw",
    "https://www.youtube.com/watch?v=419TcV1y0tc"
  ],
  imageLink:"https://i.pinimg.com/1200x/32/bf/92/32bf925e32e50b213fb4c4aac93cdf7f.jpg"
},
{
  name: "Corn Chaat",
  ingredients: ["boiled corn", "salt", "butter"],
  time: "5 minutes",
  cost: "Low",
  tutorial: [
    "https://www.youtube.com/watch?v=oO56X3bWx6A",
    "https://www.youtube.com/watch?v=AMPDjSZJARc"
  ],
  imageLink:"https://i.pinimg.com/736x/20/24/ff/2024ff2425cfb376d31fb78fbe50d0df.jpg"
},
{
  name: "Aloo Fry",
  ingredients: ["potato", "salt", "oil"],
  time: "15 minutes",
  cost: "Very Low",
  tutorial: [
    "https://www.youtube.com/watch?v=UiDDAZcv8bE",
    "https://www.youtube.com/watch?v=DIWp7xFC9Ek"
  ],
  imageLink:"https://i.pinimg.com/1200x/39/ae/8f/39ae8fc99886dfc101780ec351ae362f.jpg"
},{
  name: "Chicken Curry",
  ingredients: ["chicken","onion","tomato","garlic","ginger","spices"],
  time: "40 minutes",
  cost: "Medium",
  tutorial: ["https://www.youtube.com/watch?v=fRPDabc-Oh0"],
  imageLink: "https://i.pinimg.com/736x/cd/f8/37/cdf83760b6f38e6a2dd27a5b09c7ae57.jpg"
},
{
  name: "Spicy Chicken Fry",
  ingredients: ["chicken","chili powder","turmeric","garlic","oil"],
  time: "25 minutes",
  cost: "Low",
  tutorial: ["https://www.youtube.com/watch?v=QruC7OLfsss"],
  imageLink: "https://i.pinimg.com/1200x/cc/1d/3c/cc1d3ce7d2c91ebea0a497b1cec9cfce.jpg"
},
{
  name: "Mutton Kosha",
  ingredients: ["mutton","onion","ginger","garlic","whole spices"],
  time: "60 minutes",
  cost: "High",
  tutorial: ["https://www.youtube.com/watch?v=wv98EdDkgaI"],
  imageLink: "https://i.pinimg.com/736x/e9/a5/92/e9a592bc11a55224937245014387e1d0.jpg"
},
{
  name: "Chicken Tikka",
  ingredients: ["chicken","curd","ginger garlic paste","spices"],
  time: "30 minutes",
  cost: "Medium",
  tutorial: ["https://www.youtube.com/watch?v=vUjXS0seYeo&vl=en"],
  imageLink: "https://i.pinimg.com/1200x/66/d2/cd/66d2cd1642ef44ff621fdc4d9a14fa09.jpg"
},
{
  name: "Egg Chicken Bhurji",
  ingredients: ["chicken","egg","onion","green chili","spices"],
  time: "20 minutes",
  cost: "Low",
  tutorial: ["https://www.youtube.com/watch?v=UbhqyYNal1A"],
  imageLink: "https://i.pinimg.com/736x/2d/02/a9/2d02a9466ab4570eaa1a7b8ea20115b6.jpg"
}



  
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
        .map((link, i) => ` <a class="tutorial-link" href="${link}" target="_blank" rel="noopener noreferrer" aria-label="Watch tutorial ${i+1} for ${recipe.name}">▶ Watch Tutorial${recipe.tutorial.length > 1 ? ' ' + (i+1) : ''}</a>`)
        .join("<br>");

      div.innerHTML = `
        <h3>${recipe.name}</h3>
        <div class="recipe-content">
          <div>
            <p><strong>⏱️ Time:</strong> ${recipe.time}</p>
            <p><strong>🤑 Cost:</strong> <span class="cost-badge cost-${recipe.cost.toLowerCase().replace(' ', '-')}">${recipe.cost}</span></p>
            ${links}
          </div>
          <div>
            <img class="img-placeholder" src="placeholder.jpg" data-src="${recipe.imageLink}"/>
          </div>
        </div>
      `;
      recipeList.appendChild(div);

      // Load the image after adding to DOM
      const img = div.querySelector("img.img-placeholder");
      const realImg = new Image();
      realImg.src = img.dataset.src;

      realImg.onload = () => {
        img.src = realImg.src;
        img.classList.add("loaded");
      };
    }
  });

  if (!found) {
    recipeList.innerHTML = "<p class=\"no-results\">No matching recipe found. Try fewer ingredients.</p>";
  }
}