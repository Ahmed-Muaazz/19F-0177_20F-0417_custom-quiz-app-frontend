import React, { useState } from "react";
import "./EmailVerification.css";
const EmailVerification = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="email-verification">
      <h4>Email Verification</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Verify Email</button>
      </form>
    </div>
  );
};

export default EmailVerification;
