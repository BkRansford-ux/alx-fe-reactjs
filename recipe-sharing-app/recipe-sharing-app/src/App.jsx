import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useParams } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Home</Link> | <Link to="/add">Add Recipe</Link> |{' '}
        <Link to="/favorites">Favorites</Link> |{' '}
        <Link to="/recommendations">Recommendations</Link>
      </nav>

      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/recommendations" element={<RecommendationsList />} />
        <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </Router>
  );
}

function RecipeDetailsWrapper() {
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
}

export default App;
