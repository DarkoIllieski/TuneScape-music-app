import React, { useState, useEffect } from "react";
import axios from "axios";
import "./profilePage.css";

const ProfilePage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users/favorites");
        setFavorites(response.data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, []); 

  return (
    <div className="profile-container">
    </div>
  );
};

export default ProfilePage;
