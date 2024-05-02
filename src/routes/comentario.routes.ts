import {Router} from 'express'
import { DeleteComentario, postComentario } from '../controllers/comentario.controllers';

const routerComentario =Router();

// routerComentario.get('/', );
routerComentario.post('/', postComentario)
routerComentario.put('/:id', DeleteComentario)
// routerComentario.delete('',)
export {routerComentario}