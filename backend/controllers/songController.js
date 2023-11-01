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

const upload = multer({ storage: storage });

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

//Use multer middleware for file handling
router.post("/upload", upload.single("songFile"), uploadSong);
