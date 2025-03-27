// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddBookForm from "./AddBookForm";
import "./App.css"; // Import global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBookForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
