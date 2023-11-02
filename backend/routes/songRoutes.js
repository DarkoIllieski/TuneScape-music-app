import express from "express";
import { uploadSong } from "../controllers/songController";
import multer from "multer";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer ({ storage: storage });

router.post("/upload", upload.single('songFile'), uploadSong)

router.get("/songs", getAllSongs)
router.get('/search', searchTracks)

export default router