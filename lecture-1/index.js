import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";

// Dummy auth status
const isAuthenticated = false; // Change to true to simulate login

// Pages
const Home = () => <h1>Home Page</h1>;
const Signup = () => <h1>Signup Page</h1>;
const Login = () => <h1>Login Page</h1>;
const Contact = () => <h1>Contact Page</h1>;
const Welcome = () => <h1>Welcome to the Dashboard</h1>;

// Private Route Component
const PrivateRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/signup" />;
};

// Navbar
const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        <Link to="/Home">Home</Link>
      </span>
      <span className="navbar-brand mb-0 h1">
        <Link to="/login">Login</Link>
      </span>
      <span className="navbar-brand mb-0 h1">
        <Link to="/signup">Signup</Link>
      </span>
      <span className="navbar-brand mb-0 h1">
        <Link to="/contact">Contact</Link>
      </span>
      <span className="navbar-brand mb-0 h1">
        <Link to="/welcome">Welcome</Link>
      </span>
    </nav>
  );
};

// Main App
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/welcome"
          element={
            <PrivateRoute>
              <Welcome />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
