
import React from 'react';

const SongList = ({ songs }) => {
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
