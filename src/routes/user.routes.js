import express from "express";
import userValidator from "../validators/user.validator.js";
import {
  userCreate,
  updateUser,
  deleteUser,
  loginUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/createUser", userValidator, userCreate);
router.put("/updateUser/:id", userValidator, updateUser);
router.delete("/deleteUser/:id", userValidator, deleteUser);
router.post("/login", loginUser);

export default router;
