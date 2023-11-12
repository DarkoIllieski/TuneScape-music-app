import express from "express";
import multer from "multer";
import { getAllSongs, searchTracks, uploadSong, getSongById, deleteSong } from "../controllers/songController.js";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer ({ storage: storage });

router.post("/upload", upload.single('songFile'), uploadSong)


router.get('/search', searchTracks)
router.get('/:songId', getSongById);
router.get("/", (req, res) => {
    console.log("Request to /songs received");
    getAllSongs(req, res);
  });
  

router.delete("/:id", deleteSong);


export default router