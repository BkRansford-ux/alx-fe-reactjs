import React from "react";
import { FaUtensils } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row items-center justify-between py-6 px-6 bg-white shadow-sm">
          <Link to="/" className="flex items-center gap-3">
            <FaUtensils className="text-4xl text-blue-500" />
            <h1 className="text-3xl font-bold text-blue-600">
              Recipe Sharing Platform
            </h1>
          </Link>

          {/* Simple Navigation */}
          <nav className="flex gap-4 mt-3 sm:mt-0">
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Home
            </Link>
            <Link
              to="/add-recipe"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Add Recipe
            </Link>
          </nav>
        </header>

        {/* Page Routes */}
        <main className="px-4 sm:px-8 md:px-16 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipeForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
