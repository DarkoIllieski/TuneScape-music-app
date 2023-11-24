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
      <h2>Profile</h2>

      {favorites.length === 0 ? (
        <p>No favorite songs yet.</p>
      ) : (
        <div>
          <h3>Favorites Playlist</h3>
          <ul>
            {favorites.map((song) => (
              <li key={song.id}>{song.title} - {song.artist}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;