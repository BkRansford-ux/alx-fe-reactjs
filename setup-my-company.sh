#!/bin/bash

# Go into project directory
cd my-company || { echo "Project folder not found"; exit 1; }

# Ensure src folder exists
mkdir -p src

# Overwrite App.jsx
cat > src/App.jsx << 'EOF'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        <Navbar />
        <div style={{ minHeight: "80vh", padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
EOF

# Overwrite main.jsx
cat > src/main.jsx << 'EOF'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOF

# Create Navbar.jsx
cat > src/Navbar.jsx << 'EOF'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#333",
        padding: "10px",
        display: "flex",
        gap: "15px",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
      <Link to="/services" style={{ color: "white", textDecoration: "none" }}>Services</Link>
      <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
EOF

# Create Home.jsx
cat > src/Home.jsx << 'EOF'
function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Our Company</h1>
      <p>We are dedicated to delivering excellence in all our services.</p>
    </div>
  );
}

export default Home;
EOF

# Create About.jsx
cat > src/About.jsx << 'EOF'
function About() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>About Us</h1>
      <p>
        Our company has been providing top-notch services since 1990. 
        We specialize in technology, marketing, and consultancy.
      </p>
    </div>
  );
}

export default About;
EOF

# Create Services.jsx
cat > src/Services.jsx << 'EOF'
function Services() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Services</h1>
      <ul>
        <li>Technology Consulting</li>
        <li>Market Analysis</li>
        <li>Product Development</li>
      </ul>
    </div>
  );
}

export default Services;
EOF

# Create Contact.jsx
cat > src/Contact.jsx << 'EOF'
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0" }}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
EOF

# Create Footer.jsx
cat > src/Footer.jsx << 'EOF'
function Footer() {
  return (
    <footer
      style={{
        background: "#333",
        color: "white",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
EOF

echo "✅ All files created successfully!"
