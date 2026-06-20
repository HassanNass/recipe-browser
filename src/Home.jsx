import recipes from "./recipes"
import RecipeCard from "./RecipeCard"

function Home() {
	return (
		<div className="home-container">
			<h1>Home</h1>
			<ul>
				{recipes.map((recipe, id) => (
					<RecipeCard recipe={recipe} key={recipe.id} />
				))}
			</ul>
		</div>
	)
}

export default Home
