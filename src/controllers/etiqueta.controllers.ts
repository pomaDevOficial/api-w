import { Response,Request } from "express";
import conn from '../database/IConnection.database'
export const getEtiqueta = async (_req: Request, res: Response)=>{
    try {
        const paises = await conn.etiqueta.findMany()
        res.status(200).json(paises)
    } catch (error) {
        res.status(500).json(error)
    }
}