import express from "express";
import multer from "multer";
import axios from "axios";
import dotenv from "dotenv";
import Song from "../models/song.js";

dotenv.config();

const DEEZER_API_URL = "https://api.deezer.com/search";

export const searchTracks = async (req, res) => {
  console.log("Request received on /api/songs/search");
  const query = req.query.track;

  try {
    const response = await axios.get(`${DEEZER_API_URL}/track?q=${query}`);
    console.log("Deezer API Response:", response.data);

    if (response.data && response.data.data) {
      const tracks = response.data.data.map((track) => ({
        id: track.id,
        name: track.title,
        artist: track.artist.name,
      }));
      console.log("Mapped Tracks:", tracks);
      res.json(tracks);
    } else {
      console.log("No tracks found");
      res.status(400).json({ message: "No track found" });
    }
  } catch (error) {
    console.error("Error fetching tracks:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

export const uploadSong = async (req, res) => {
  try {
    const { title, artist, duration } = req.body;


    const song = new Song({
      title,
      artist,
      duration,
      url: req.file.path, 
    });

    await sessionStorage.save();
    res.status(201).json({ message: "Song uploaded successfully", song });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Get all songs

export const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).json(songs);
  } catch {
    res.status(500).send(error.message);
  }
};

export const deleteSong = async (req, res) => {
  const { songId } = req.params;

  try {
    // Find the song by ID and delete it
    const deletedSong = await Song.findByIdAndDelete(songId);

    if (deletedSong) {
      res.status(200).json({ message: "Song deleted successfully" });
    } else {
      res.status(404).json({ message: "Song not found" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getSongById = async (req, res) => {
  try {
    const { songId } = req.params;
    const song = await Song.findById(songId);
    if (!song) {
      res.status(404).json({ message: "Song not found" });
    } 
    res.status(200).json(song);
  }catch (error) {
    res.status(500).send(error.message);
  } 

}

