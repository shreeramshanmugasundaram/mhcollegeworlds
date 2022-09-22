import express from "express";
const router = express();
//Importing Function from Controllers for Routes
import userCreate from "../controllers/userCreate.js";
import userLogin from "../controllers/userLogin.js";
import userCollege from "../controllers/userCollege.js";
//Importing Middleware
import auth from "../middleware/auth.js";
//All Routes
router.post("/login", userLogin);
router.post("/create", userCreate);
router.post("/collegelist", auth, userCollege);

export default router;
