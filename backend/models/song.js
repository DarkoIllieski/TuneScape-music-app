import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  price: { type: String, required: true },
});

const Song = mongoose.model("Song", songShema);

export default Song;
