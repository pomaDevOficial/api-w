import { Response, Request } from "express";
import connec from '../database/IConnection.database'
export const getCategorias = async (req:Request, res:Response) => {
    try {
        console.log('categorias')
        const categorias = await connec.categoria.findMany()
        console.log('categorias')
        res.status(200).json(categorias)
    } catch (error) {
        res.status(500).json(error)
    }
}