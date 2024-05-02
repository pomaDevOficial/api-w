import { Router } from "express";
import { getListaPublicaciones, postPublicacionLibre,postPublicacionLibro, putPublicacionE } from "../controllers/publicacion.controllers";
const routerPublicacion = Router();
routerPublicacion.post('/',postPublicacionLibre)
routerPublicacion.post('/libro', postPublicacionLibro)
routerPublicacion.get('/lista',getListaPublicaciones)
routerPublicacion.put('/:id', putPublicacionE)
export {routerPublicacion}