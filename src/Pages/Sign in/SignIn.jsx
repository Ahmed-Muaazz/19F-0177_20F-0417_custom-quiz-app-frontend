import React, { useState } from "react";
import "./SignIn.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import { NavLink } from "react-router-dom";
import axios from "axios";
const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const { emailOrPhone, password } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate the form data here

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3004/api/signin",
        data
      );
      setLoading(false);

      if (response.data.success) {
        toast.success("Signin successful");
        // Navigate to the home page or dashboard
      } else {
        toast.error("Signin failed");
      }
    } catch (error) {
      setLoading(false);
      toast.error("An error occurred");
    }
  };
  return (
    <>
      <div className="flex_column sign-up-container">
        <h4>Sign In</h4>
        <form className="signin_form">
          <div className="signin_form_div">
            <div className="form_input_signin">
              <label className="required-field">
                Email <span>*</span>
              </label>
              <input
                type="text"
                id="emailOrPhone"
                name="emailOrPhone"
                value={emailOrPhone}
                placeholder="Enter your email"
                onChange={onChange}
              />
            </div>
            <div className="form_input_signin">
              <label className="required-field">
                Password <span>*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={onChange}
              />
            </div>
          </div>
          <div>
            <button type="submit" onClick={onSubmit} className="btn">
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
          <div className="linkTagDiv">
            <p>
              Don't have an account?{" "}
              <NavLink className="linkTag" to="/signup">
                Sign up!
              </NavLink>
            </p>
            <p>
              Forgotton your password?{" "}
              <NavLink className="linkTag" to="/forgot-password">
                Forgot Password?
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
