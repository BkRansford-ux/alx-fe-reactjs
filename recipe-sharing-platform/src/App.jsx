import React from "react";
import { FaUtensils } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Header Section */}
        <header className="flex items-center justify-center py-8 bg-white shadow-sm">
          <h1 className="text-4xl font-bold text-blue-600 flex items-center gap-3">
            <FaUtensils className="text-5xl text-blue-500" />
            Recipe Sharing Platform
          </h1>
        </header>

        {/* Page Routes */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
