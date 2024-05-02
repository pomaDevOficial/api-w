import { Response, Request } from "express";
import connec from '../database/IConnection.database'
export const getGeneros = async (req:Request, res:Response) => {
    try {
        console.log('categorias')
        const categorias = await connec.genero.findMany()
        // console.log('categorias')
        res.status(200).json(categorias)
    } catch (error) {
        res.status(500).json(error)
    }
}
