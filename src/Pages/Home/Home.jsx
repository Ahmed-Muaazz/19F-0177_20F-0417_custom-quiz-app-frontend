import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h3>Welcome to Custom Quiz App</h3>
      </header>
      <main className="home-main">
        <p>This is a platform where you can design and attempt quizzes.</p>
        <p>Get started by signing up or logging in!</p>
        <p>Enjoy a variety of quizzes and challenge your knowledge!</p>{" "}
        {/* New paragraph */}
        <div className="home-cta">
          <button className="cta-signup">Sign Up</button>
          <button className="cta-login">Log In</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
