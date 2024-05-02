import { Router } from "express";
import { postUsuario ,postUsuarioLogin} from "../controllers/usuario.controller";

const routerUsuario = Router()
routerUsuario.post('/',postUsuario )
routerUsuario.post('/login',postUsuarioLogin)
export {routerUsuario}