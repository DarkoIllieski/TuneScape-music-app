import express from "express";
import { registerUser, loginUser, deleteUser, updateUser } from "../controllers/userController.js";
import { validationRules } from '../middlewares/validator.js';

const router = express.Router();

// Register User
router.post("/register", validationRules, registerUser);
// Login User
router.post("/login", loginUser);

router.put("/users/:userId", updateUser);

//de;ete user by id
router.delete("/users/:userId", deleteUser);



export default router;
