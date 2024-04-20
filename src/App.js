import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/Sign up/SignUp";
import SignIn from "./Pages/Sign in/SignIn";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import EmailVerification from "./Pages/EmailVerification/EmailVerification";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/emailVerification" element={<EmailVerification />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
