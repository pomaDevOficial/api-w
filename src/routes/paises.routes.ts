import { Router } from "express";
import { getPaises} from "../controllers/paise.controllers";

const routerPaises = Router();
routerPaises.get('/',getPaises)
export {routerPaises}