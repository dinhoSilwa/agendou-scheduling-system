

import { Router } from "express";
import {createAdmin} from "../controllers/admcontrollers"

const routerAdmin = Router();
routerAdmin.post('/create', createAdmin)

export default routerAdmin