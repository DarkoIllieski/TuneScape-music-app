import React, { useState } from "react";
import axios from "axios";
import "./loginPage.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/users/login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Error during login:", error.response);

      if (error.response && error.response.data) {
        console.error("Error message from server:", error.response.data.message);
      }
    }

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
