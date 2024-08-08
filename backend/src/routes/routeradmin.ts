
import { Router } from "express";
import {createAdmin} from "../controllers/admcontrollers"

const routerAdmin = Router();
routerAdmin.post('/create', createAdmin)
routerAdmin.get('/admin')

export default routerAdmin