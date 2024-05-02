import { Response,Request } from "express";
import conn from '../database/IConnection.database'
export const getPaises = async (req: Request, res: Response)=>{
    try {
        const paises = await conn.pais.findMany()
        res.status(200).json(paises)
    } catch (error) {
        res.status(500).json(error)
    }
}