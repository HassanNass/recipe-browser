import { useParams } from "react-router-dom"
import recipes from "./recipes"

function RecipeDetails() {
	const { id } = useParams();
	const recipe = recipes.find(recipe => recipe.id === Number(id));

	return (
		<div className="recipe-details-container">
			<h2 className="details-header">Recipe Details</h2>
			<div className="recipe-details-card">
				<img src={recipe.image}
					 alt={`picture of ${recipe.title}`}
					 className="recipe-image" 
				/>

				<div className="recipe-info">
					<h1>{recipe.title}</h1>
					<h3>{recipe.category}</h3>
					<p>{recipe.description}</p>

					<div className="recipe-meta">
						<p>
							<strong>Prep Time: </strong>{recipe.prepTime}
						</p>

						<p>
							<strong>Serving: </strong>{recipe.servings}
						</p>

						<p>
							<strong>Difficulty: </strong>{recipe.difficulty}
						</p>
					</div>

					<section className="ingredients-section">
						<h2>Ingredients</h2>

						<ul>
							{recipe.ingredients.map((ingredient, index) => (
								<li key={index}>{ingredient}</li>
							))}
						</ul>
					</section>

					<section className="instructions-section">
						<h2>Instructions</h2>

						<ol>
							{recipe.instructions.map((step, index) => (
								<li key={index}>{step}</li>
							))}
						</ol>
					</section>
				</div>
			</div>
		</div>
	)
}

export default RecipeDetails
