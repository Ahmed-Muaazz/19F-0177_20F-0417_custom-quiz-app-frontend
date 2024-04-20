import React, { useState } from "react";
import "./SignUp.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("");

  const [data, setData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const { name, emailOrPhone, password, confirmPassword } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onRoleChange = (e) => {
    setRole(e.target.value);
    setData({ ...data, role: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate the form data here

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3004/api/signup",
        data
      );
      setLoading(false);

      if (response.data.success) {
        toast.success("Signup successful");
        navigate("/signin");
      } else {
        toast.error("Signup failed");
      }
    } catch (error) {
      setLoading(false);
      toast.error("An error occurred");
    }
  };
  return (
    <div className="box_shadow flex_column sign-up-container">
      <h4>Sign Up</h4>
      <form className="flex_column sign-up-form">
        <div className="form_input_div form_input_signup">
          <label className="required-field">
            Role <span>*</span>
          </label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={onRoleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </div>
        {role && (
          <>
            <div className="form_input_div form_input_signup">
              <label className="required-field">
                Name <span>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="Enter your name"
                onChange={onChange}
              />
            </div>
            <div className="form_input_div form_input_signup">
              <label className="required-field">
                Email <span>*</span>
              </label>
              <input
                type="email"
                id="emailOrPhone"
                name="emailOrPhone"
                value={emailOrPhone}
                placeholder="Enter your email"
                onChange={onChange}
              />
            </div>
            <div className="form_input_div form_input_signup">
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
            <div className="form_input_div form_input_signup">
              <label className="required-field">
                Confirm Password <span>*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Confirm your password"
                onChange={onChange}
              />
            </div>
          </>
        )}
        <div>
          <button type="submit" onClick={onSubmit} className="btn">
            Sign Up
          </button>
        </div>
        <p>
          Already a member?{" "}
          <NavLink className="linkTag" to="/signIn">
            Sign in!
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
