import express from "express";
import { authCode, authLink, sendContactEmail } from "../../controllers/emailController.js";

const router = express.Router();

router.post("/", sendContactEmail);
router.get('/auth-url', authLink);
router.get('/auth-code', authCode)

export default router;
