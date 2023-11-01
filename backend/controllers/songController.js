import express from "express";
import Song from "../models/song";
import multer from "multer";

//Setup storage using multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

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

