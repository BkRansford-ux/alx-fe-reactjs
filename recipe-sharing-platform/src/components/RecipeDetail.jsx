import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((r) => r.id === parseInt(id));
        setRecipe(found);
      })
      .catch(console.error);
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center mt-20 text-gray-600">
        Loading recipe details...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-block mb-4 text-blue-600 hover:underline"
      >
        ← Back to Home
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            {recipe.title}
          </h2>
          <p className="text-gray-700 mb-4">{recipe.summary}</p>

          {/* Ingredients */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">
              Ingredients
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {recipe.ingredients
                ? recipe.ingredients.map((item, idx) => <li key={idx}>{item}</li>)
                : ["No ingredients listed."]}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-700">
              Instructions
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {recipe.instructions
                ? recipe.instructions.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))
                : ["No instructions provided."]}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
