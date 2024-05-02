import { Response, Request } from "express";
import conn from "../database/IConnection.database";
export const getFavoritos = async(_req:Request, res:Response)=>{
    try {
        // const favoritos = await conn.favoritos.findMany()
        // res.status(200).json(favoritos)
    } catch (error) {
        res.status(500).json(error)
    }
}