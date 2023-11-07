import express from "express";
import multer from "multer";
import axios from "axios";
import dotenv from "dotenv";
import Song from "../models/song.js";

dotenv.config();

//Setup storage using multer
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

//Upload a song
export const uploadSong = async (req, res) => {
  try {
    const { title, artist, duration } = req.body;

    //Create a new song instance
    const song = new Song({
      title,
      artist,
      duration,
      url: req.file.path, //local path to the uploaded file
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

const LASTFM_API_KEY = process.env.LASTFM_API_KEY;

export const searchTracks = async (req, res) => {
  const query = req.query.track;

  try {
    const response = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=${LASTFM_API_KEY}&format=json`
    );
    if (response.data && response.data.results) {
      res.json(response.data.results);
    } else {
      res.status(400).json({ message: "No track found" });
    }
  } catch (error) {
    console.error("error fetching tracks:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

import Song from "../models/song.js";

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

