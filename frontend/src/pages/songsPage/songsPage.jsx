import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongList from '../../components/songList/songList';

const SongsPage = () => {
  const [songs, setSongs] = useState([]);
  const [lastFmTracks, setLastFmTracks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/songs');
        setSongs(response.data);
        console.log('Fetched songs:', response.data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };
    
    fetchSongs();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/songs/search?track=${searchQuery}`);
      console.log('Searched tracks:', response.data);
      setLastFmTracks(response.data);
    } catch (error) {
      console.error('Error searching tracks:', error);
    }
  };

  return (
    <div>
      {/* <h1>Songs Page</h1> */}
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search Tracks</button>
      </div>
      {lastFmTracks.length > 0 && (
        <div>
          <h2>Last.fm Tracks</h2>
          <ul>
            {lastFmTracks.map((track) => (
              <li key={track.id}>{track.name} by {track.artist}</li>
            ))}
          </ul>
        </div>
      )}
      <SongList songs={songs} />
    </div>
  );
};

export default SongsPage;
