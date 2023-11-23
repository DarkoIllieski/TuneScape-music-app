import React, { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
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
      const response = await axios.post("http://localhost:5000/users/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      console.log("Registration successful:", response.data);
    
    } catch (error) {
      console.error("Error during registration:", error.response.data.message);
    }

    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

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

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
