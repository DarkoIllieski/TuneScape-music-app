import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  price: { type: String, required: true },
  duration: { type: Number },
  url: { type: String, required: true },
  converIMgae: { type: String },
});

const Song = mongoose.model("Song", songShema);

export default Song;
