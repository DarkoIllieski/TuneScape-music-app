import React from 'react'
import { useState } from 'react'
import './loginPage.css'    
import axios from 'axios';    

import axios from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
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
      const response = await axios.post("http://localhost:5000/login", {
        username: formData.username,
        password: formData.password,
      });
      console.log("Login successful:", response.data);

    } catch (error) {
      console.error("Error during login:", error.response.data);
    }

    setFormData({
      username: "",
      password: "",
    });
  };
    return (
      <div>
    
      </div>
    );
  };
  
  export default loginPage;