import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"; // Import Login component
import SignUp from "./pages/SignUp/SignUp"; // Import SignUp component
import Modal from "react-modal"; // Import React Modal

Modal.setAppElement("#root"); // Set app element for accessibility

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

const App = () => {
  return (
    <div>
      <RoutesComponent />
    </div>
  );
};

export default App;
