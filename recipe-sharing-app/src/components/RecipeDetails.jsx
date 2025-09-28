import { useRecipeStore } from './recipeStore';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(recipeId))
  );

  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  if (!recipe) return <p>Recipe not found.</p>;

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {isFavorite ? (
        <button onClick={() => removeFavorite(recipe.id)}>
          Remove from Favorites
        </button>
      ) : (
        <button onClick={() => addFavorite(recipe.id)}>
          Add to Favorites
        </button>
      )}
    </div>
  );
};

export default RecipeDetails;
