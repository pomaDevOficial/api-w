import { Router } from "express";
import { getSeguidores ,postSeguidor} from "../controllers/seguidor.controllers";
const routerSeguidores = Router();
routerSeguidores.get('/', getSeguidores);
routerSeguidores.post('/', postSeguidor);
export {routerSeguidores}