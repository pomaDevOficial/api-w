import { Router } from "express";
import { getGeneros} from "../controllers/genero.controllers";

const routerGenero = Router();
routerGenero.get('/',getGeneros)
export {routerGenero}