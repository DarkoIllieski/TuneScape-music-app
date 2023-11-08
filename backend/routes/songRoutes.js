import express from "express";
import multer from "multer";
import { getAllSongs, searchTracks, uploadSong, getSongById } from "../controllers/songController.js";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer ({ storage: storage });

router.post("/upload", upload.single('songFile'), uploadSong)

router.get("/songs", getAllSongs)
router.get('/search', searchTracks)
router.get('/:songId', getSongById);

//delete song by id
router.delete("//songs/:id", deleteSong);


export default router