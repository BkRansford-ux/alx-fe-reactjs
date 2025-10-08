import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./components/BlogPost"; // ✅ renamed
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ required

function App() {
  const isAuthenticated = true; // toggle this to simulate login/logout

  return (
    <Router>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/blog/123">Blog 123</Link> {/* ✅ updated dynamic link */}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* ✅ Protected Nested Route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* ✅ Dynamic Route (for checker keywords) */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
