const recipes = [
  {
    id: 1,
    title: "Pancakes",
    category: "Breakfast",
    image: "https://placehold.co/400x300?text=Pancakes",
    description: "Fluffy homemade pancakes served with syrup and fruit.",
    ingredients: [
      "2 cups flour",
      "2 tbsp sugar",
      "2 tsp baking powder",
      "2 eggs",
      "1½ cups milk",
      "2 tbsp melted butter"
    ],
    instructions: [
      "Mix the dry ingredients in a bowl.",
      "Whisk the eggs, milk, and melted butter together.",
      "Combine the wet and dry ingredients.",
      "Heat a pan over medium heat.",
      "Pour batter onto the pan and cook until golden on both sides."
    ],
    prepTime: "20 minutes",
    servings: 4,
    difficulty: "Easy"
  },
  {
    id: 2,
    title: "Avocado Toast",
    category: "Breakfast",
    image: "https://placehold.co/400x300?text=Avocado+Toast",
    description: "Toasted bread topped with creamy avocado and seasonings.",
    ingredients: [
      "2 slices bread",
      "1 avocado",
      "Salt",
      "Black pepper",
      "Lemon juice"
    ],
    instructions: [
      "Toast the bread slices.",
      "Mash the avocado with lemon juice, salt, and pepper.",
      "Spread the avocado mixture onto the toast.",
      "Serve immediately."
    ],
    prepTime: "10 minutes",
    servings: 2,
    difficulty: "Easy"
  },
  {
    id: 3,
    title: "Chicken Caesar Salad",
    category: "Lunch",
    image: "https://placehold.co/400x300?text=Caesar+Salad",
    description: "Fresh romaine lettuce with grilled chicken and Caesar dressing.",
    ingredients: [
      "2 chicken breasts",
      "1 romaine lettuce",
      "Croutons",
      "Parmesan cheese",
      "Caesar dressing"
    ],
    instructions: [
      "Grill the chicken until fully cooked.",
      "Chop the lettuce and place it in a bowl.",
      "Slice the chicken.",
      "Add croutons, cheese, and dressing.",
      "Toss and serve."
    ],
    prepTime: "25 minutes",
    servings: 2,
    difficulty: "Medium"
  },
  {
    id: 4,
    title: "Vegetable Pasta",
    category: "Lunch",
    image: "https://placehold.co/400x300?text=Vegetable+Pasta",
    description: "Pasta tossed with colorful vegetables and garlic sauce.",
    ingredients: [
      "250g pasta",
      "1 zucchini",
      "1 bell pepper",
      "2 cloves garlic",
      "Olive oil",
      "Parmesan cheese"
    ],
    instructions: [
      "Cook the pasta according to package instructions.",
      "Sauté the vegetables and garlic in olive oil.",
      "Add the cooked pasta to the pan.",
      "Mix everything together.",
      "Top with Parmesan cheese and serve."
    ],
    prepTime: "30 minutes",
    servings: 4,
    difficulty: "Medium"
  },
  {
    id: 5,
    title: "Chocolate Brownies",
    category: "Dessert",
    image: "https://placehold.co/400x300?text=Brownies",
    description: "Rich and fudgy chocolate brownies with a soft center.",
    ingredients: [
      "1 cup butter",
      "2 cups sugar",
      "4 eggs",
      "1 cup cocoa powder",
      "1 cup flour"
    ],
    instructions: [
      "Preheat the oven to 175°C.",
      "Mix the melted butter and sugar.",
      "Add the eggs and cocoa powder.",
      "Stir in the flour.",
      "Bake for 30 minutes."
    ],
    prepTime: "45 minutes",
    servings: 8,
    difficulty: "Medium"
  },
  {
    id: 6,
    title: "Fruit Parfait",
    category: "Dessert",
    image: "https://placehold.co/400x300?text=Fruit+Parfait",
    description: "Layers of yogurt, granola, and fresh fruit.",
    ingredients: [
      "2 cups yogurt",
      "1 cup granola",
      "1 cup strawberries",
      "1 banana",
      "Honey"
    ],
    instructions: [
      "Slice the fruit.",
      "Add a layer of yogurt to a glass.",
      "Add granola and fruit.",
      "Repeat the layers.",
      "Drizzle with honey before serving."
    ],
    prepTime: "15 minutes",
    servings: 2,
    difficulty: "Easy"
  }
];

export default recipes
