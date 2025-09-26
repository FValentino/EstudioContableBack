import express from "express";
import { sendContactEmail, sendNewsEmail } from "../../controllers/emailController.js";

const router = express.Router();

router.post("/", sendContactEmail);
router.post("/news", sendNewsEmail);

export default router;
