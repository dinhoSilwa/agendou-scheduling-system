
import { Router } from "express";
import {createAdmin, getAdmin} from "../controllers/admcontrollers"

const routerAdmin = Router();
routerAdmin.post('/create', createAdmin)
routerAdmin.post('/getadimin', getAdmin)

export default routerAdmin