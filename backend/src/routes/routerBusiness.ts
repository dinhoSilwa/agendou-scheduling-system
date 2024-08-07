import { Router } from "express";
import { createBusiness } from "../controllers/admcontrollers";

const routerBusiness = Router();
routerBusiness.post('/create', createBusiness)

export default routerBusiness