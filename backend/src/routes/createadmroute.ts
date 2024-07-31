import { Router } from "express";
import { createAdmUser } from "../controllers/admcontrollers";

const router = Router();
router.post('/', createAdmUser)

export default router