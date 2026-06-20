import recipes from "./recipes"
import RecipeCard from "./RecipeCard"
import { useState } from "react"

function Home() {
	const [selectedCategory, setSelectedCategory] = useState("All");

	function handleCategoryChange(category) {
		setSelectedCategory(category)
	}

	const filteredRecipes = selectedCategory === "All"
		? recipes
		: recipes.filter(recipe => recipe.category === selectedCategory)

	return (
		<div className="home-container">
			<h1>Home</h1>
			<button className="btn-all" onClick={() => handleCategoryChange("All")}>All</button>
			<button className="btn-breakfast" onClick={() => handleCategoryChange("Breakfast")}>Breakfast</button>
			<button className="btn-lunch" onClick={() => handleCategoryChange("Lunch")}>Lunch</button>
			<button className="btn-dessert" onClick={() => handleCategoryChange("Dessert")}>Dessert</button>
			<ul>
				{filteredRecipes.map((recipe, id) => (
					<RecipeCard recipe={recipe} key={recipe.id} />
				))}
			</ul>
		</div>
	)
}

export default Home
