import bcrypt from "bcryptjs";
import User from "../models/user.js";

export const registerUser = async (req, res) => {
  try {
    console.log("Received registration request:", req.body);

    const { username, email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      console.log("User already exists:", userExist);
      return res.status(400).send("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();
    console.log("User registered successfully:", user);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).send(error.message);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Received login request with email:", email);

    const user = await User.findOne({ email });
    console.log("User found:", user);
    if (!user) {
      return res.status(404).send("User not found");
    }

    // const isMatch = await bcrypt.compare("123", user.password);
    const storedHash = "$2a$10$b1738E6LbLzv5dWgUfn8i.Xc91o.joeH62aOzHxSDEHryaxPBguWm";
    const providedPassword = "123";
    const isMatch = await bcrypt.compare(password, user.password);
    // const isMatch = password === user.password;
    console.log("isMatch:", isMatch);
    console.log("Stored Hashed Password:", user ? user.password : null);
    console.log("Provided Password:", password);
    console.log("Manually Compare:", storedHash === bcrypt.hashSync(providedPassword, 10));
    if (isMatch) {
      return res.status(200).json({ message: "Logged in successfully" });
    } else {
      return res.status(400).send("Invalid password");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(userId);

    if (deletedUser) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateUser = async (req, res) => {
  const { userId } = req.params;
  const updatedUserData = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, {
      new: true,
    });

    if (updatedUser) {
      res
        .status(200)
        .json({ message: "User updated successfully", user: updatedUser });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
