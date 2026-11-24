import { Router } from "express";
import {
    showCurriculum,
    receiveContact,
} from "../controllers/curriculum.controller.js";

const router = Router();

router.get("/", showCurriculum);
router.post("/contacto", receiveContact);

export default router;
