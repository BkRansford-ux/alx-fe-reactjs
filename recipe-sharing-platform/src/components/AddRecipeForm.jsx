import React, { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validation logic
  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Recipe title is required.";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please include at least two ingredients (comma-separated).";
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }
    setErrors({});
    setSubmitted(true);

    // Temporary alert or console output
    console.log("✅ New Recipe Added:", { title, ingredients, steps });

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10 mb-16">
      <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
        Add a New Recipe
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Recipe Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.title ? "border-red-500 ring-red-300" : "border-gray-300 focus:ring-blue-300"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Ingredients (comma-separated)
          </label>
          <textarea
            placeholder="e.g., 2 eggs, 1 cup flour, 1 tsp salt"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="3"
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.ingredients
                ? "border-red-500 ring-red-300"
                : "border-gray-300 focus:ring-blue-300"
            }`}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Preparation Steps
          </label>
          <textarea
            placeholder="Write the preparation steps..."
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="4"
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.steps
                ? "border-red-500 ring-red-300"
                : "border-gray-300 focus:ring-blue-300"
            }`}
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
        >
          Add Recipe
        </button>

        {/* Success Message */}
        {submitted && (
          <p className="text-green-600 text-center font-medium mt-4">
            ✅ Recipe submitted successfully!
          </p>
        )}
      </form>
    </div>
  );
}
