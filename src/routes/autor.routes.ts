import { Router } from "express";
import { getAutores,getAutoresName,getInformacionAutor,postSeguir,getFollowerUsuarioID,putSeguidor,postSeguidorInsert } from "../controllers/autor.controllers";
const routerAutor = Router();
routerAutor.get('/', getAutores)
routerAutor.post('/nombre/:nombre', getAutoresName)
routerAutor.post('/seguir',postSeguir)
routerAutor.get('/followers/:id',getFollowerUsuarioID)
routerAutor.put('/seguir',putSeguidor)
routerAutor.post('/seguir/insert',postSeguidorInsert)
routerAutor.get('/informacion/:id',getInformacionAutor)
export { routerAutor };