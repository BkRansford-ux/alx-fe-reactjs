import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then(setRecipes)
      .catch(() => {
        setRecipes([
          {
            id: 1,
            title: "Spaghetti Carbonara",
            summary:
              "A classic Italian pasta dish with eggs, cheese, bacon, and black pepper.",
            image: "https://via.placeholder.com/400x250",
          },
          {
            id: 2,
            title: "Chicken Tikka Masala",
            summary:
              "Chunks of grilled chicken cooked in a creamy tomato based gravy.",
            image: "https://via.placeholder.com/400x250",
          },
          {
            id: 3,
            title: "Avocado Toast Deluxe",
            summary:
              "Crispy sourdough topped with smashed avocado, eggs, and chili flakes.",
            image: "https://via.placeholder.com/400x250",
          },
        ]);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center md:text-left">
        Featured Recipes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-transform transform hover:-translate-y-2"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                {recipe.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                {recipe.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
