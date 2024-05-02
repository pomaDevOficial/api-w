import { Router } from "express";
import { getEtiqueta} from "../controllers/etiqueta.controllers";

const routerEtiqueta = Router();
routerEtiqueta.get('/',getEtiqueta)
export {routerEtiqueta}