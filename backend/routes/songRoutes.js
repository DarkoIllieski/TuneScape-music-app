import express from "express";
import { uploadSong } from "../controllers/songController";
import multer from "multer";
import { getAllSongs, searchTracks, uploadSong } from "../controllers/songController.js";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer ({ storage: storage });

router.post("/upload", upload.single('songFile'), uploadSong)

router.get("/songs", getAllSongs)
router.get('/search', searchTracks)

//delete song by id
router.delete("//songs/:id", deleteSong);


export default router