import express from "express";
import { sendContactEmail } from "../../controllers/emailController.js";

const router = express.Router();

router.post("/", sendContactEmail);
router.post("/news", sendContactEmail);

export default router;
