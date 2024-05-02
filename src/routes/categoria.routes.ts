import { Router } from "express";
import {getCategorias} from '../controllers/categoria.controllers'

const routerCategoria = Router();
routerCategoria.get('/',getCategorias );
export {routerCategoria}