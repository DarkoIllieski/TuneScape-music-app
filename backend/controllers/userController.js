import User from "../models/user.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //check if the user exist
    const userExist = await User.findOne({ email });
    if (userExist) return res.status(400).send("User already exist");

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //find the user bu email
    const user = await User.findOne({ email });

    //compate the paswords
    const isMatch = await bcrypt.copmpare(password, user.password);
    if (!isMatch) return res.status(400).send("Invalid password");

    //optionally generate a JWT token here if you are using JWT for authentication

    res.status(200).json({ message: "Logged in successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
