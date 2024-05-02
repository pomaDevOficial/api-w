import { Request,Response } from "express";
import conn from '../database/IConnection.database'
import { json } from "stream/consumers";
export const postComentario = async (req:Request, res:Response)=>{
    const {id_autor, id_editorial, contenido} = req.body;
    try {
            const cI = await conn.comentario.create({
                data:{
                    id_autor:parseInt(id_autor),
                    id_editorial:parseInt(id_editorial),
                    fecha_registro:new Date(),
                    contenido:contenido,
                    id_estado:1,
                }
            })
            res.status(200).json({
                ok:true,
                comentario:cI
            })
    } catch (error) {
        res.status(500).json(error)
    }
}
export const DeleteComentario = async (req:Request, res:Response)=>{
    const {id}= req.params;
    const {id_estado}= req.body
    try {
        const putC = await  conn.comentario.updateMany({
            where:{
                id_comentario:parseInt(id)
            },
            data:{
                id_estado
            }
        })
        res.status(200).json('correcto')

    } catch (error) {
        res.status(500).json(error)
    }

}