import { Response, Request } from "express";
import conn from '../database/IConnection.database'
// import { seguidor } from '../generate/client/index';

export const getSeguidores = async (req: Request, res: Response)=>{
    try {
        
    } catch (error) {
        res.status(500).json(error)
    }
}
export const postSeguidor = async (req: Request,res: Response) => {
    try {
       

        
    } catch (error) {
        res.status(500).json(error)
    }
}