import User from "../models/user";

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //check if the user exist
    const userExist = await User.findOne({ email });
    if (userExist) return res.status(400).send("User already exist");

    const user = new User({
      username,
      email,
      password,
    });

    await user.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export default { registerUser };
