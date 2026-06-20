import { Link } from 'react-router-dom'

function RecipeCard({ recipe }) {

	return (
		<Link to={`/recipe/${recipe.id}`}>
			<div className="card-container">
				<img src={recipe.image} alt={`picture of ${recipe.title}`} />
				<h3>{recipe.title}</h3>
				<h4>{recipe.category}</h4>
				<p>{recipe.description}</p>
			</div>
		</Link>
	)
}

export default RecipeCard
