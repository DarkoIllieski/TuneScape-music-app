import React from 'react';

const SongList = ({ songs }) => {
  const handlePlay = (song) => {
    console.log(`Playing: ${song.title} - ${song.artist}`);
  };

  const handleDelete = (songId) => {
    console.log(`Deleting song with ID: ${songId}`);
  };

  const handleBuy = (song) => {
    console.log(`Buying: ${song.title} - ${song.artist}`);
  };

  const handleAddToFavorites = (song) => {
    console.log(`Adding to favorites: ${song.title} - ${song.artist}`);
  };

  return (
    <div className="song-list">
      <h2>Song List</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <div>
              <strong>{song.title}</strong> - {song.artist}
            </div>
            <button onClick={() => handlePlay(song)}>Play</button>
            <button onClick={() => handleDelete(song.id)}>Delete</button>
            <button onClick={() => handleBuy(song)}>Buy</button>
            <button onClick={() => handleAddToFavorites(song)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
