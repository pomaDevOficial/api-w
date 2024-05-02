import { Request,Response } from "express";
import connec from '../database/IConnection.database'
// import {PrismaClient} from '@prisma/client'
// const connec = new PrismaClient()

export const getAutores = async (req: Request, res: Response)=>{
    try {
        const autores = await connec.autor.findMany({
            select:{
                usuario:{
                    
                    select:{
                        id_usuario:true,
                        persona:{
                            select:{
                                nombre:true
                            }
                        }
                    }
                }
            }
        })
        res.status(200).json(autores)
    } catch (error) {
        res.status(500).json(error)
    }

}
export const getAutoresName = async (req:Request, res:Response)=>{
    const {nombre}= req.params;
    const {id_a}= req.body;
    try {
        const au= await connec.autor.findMany({
            where:{
                usuario:{
                    persona:{
                        nombre:{
                            contains:nombre
                        }
                    }
                }
            },
            select:{
                id_autor:true,
                usuario:{
                    select:{
                        persona:{
                            select:{
                                nombre:true
                            }
                        }
                    }
                }
            }
        })
        const listSeguidore = await connec.seguido.findMany({
            where:{
                id_user_seguido:parseInt(id_a)
                
            },
            select:{
                id_user_seguidor:true,
                id_seguimiento:true
            }
        })
        console.log(req.body)
        console.log(listSeguidore)
        res.status(200).json({au, listSeguidore})
    } catch (error) {
        res.status(500).json(error)
    }
}
export const putSeguidor= async (req:Request, res:Response)=>{
    const {id_user_seguido, id_user_seguidor,id_seguimiento}= req.body;
    try {
        const s = await connec.seguido.updateMany({
            
            data:{
                id_seguimiento:parseInt(id_seguimiento)
            },where:{
                id_user_seguido:parseInt(id_user_seguido),
                id_user_seguidor:parseInt(id_user_seguidor)
            }

        })
        const aSeguidorList = await connec.seguido.findMany({
            where:{
                id_user_seguido:parseInt(id_user_seguido)
            },
            select:{
                id_user_seguidor:true,
                id_seguimiento:true
            }
        })
        console.log(s);
        res.status(200).json({msj:'Actualizado',aSeguidorList})

    } catch (error) {
        res.status(500).json(error)
    }

}
export const postSeguir = async (req:Request, res:Response)=>{
    const {id,usuarioId,id_s}= req.body;
    console.log(req.body);
    try {
        const vFollower = await connec.seguido.findMany({
           
            where:{
                id_user_seguidor:id,
                id_user_seguido:parseInt(usuarioId)
            },select:{
                id_seguimiento:true,
                id_seguido:true    
            }
        })
        console.log(vFollower);
        const Foll = vFollower.length > 0
        if(!Foll){
            console.log("insert")
            const follower = await connec.seguido.create({
                data:{
                    id_user_seguidor:id,
                    id_user_seguido:parseInt(usuarioId),
                    id_seguimiento:id_s
                }
            })
          return  res.status(200).json(follower)
        }
        console.log('aptualizar')
        let ds = vFollower.map(a => a.id_seguimiento)
        console.log(ds)
        const newIdSeguimiento = ds.includes(1) ? 2 : 1;
        console.log(newIdSeguimiento)

        const vUpdate = await connec.seguido.updateMany({
                where: {
                    id_user_seguidor: id,
                    id_user_seguido: parseInt(usuarioId)
                },
                data: {
                    id_seguimiento: newIdSeguimiento
                }
            });
            // console.log(vFollower)
        const ms = (ds.includes(1)? 'Siguendo la cuenta':'Dejando se seguir')
        return res.status(200).json({ msj:ms });
        
        
    } catch (error) {
        res.status(500).json(error)
    }
}
export const postSeguidorInsert = async (req: Request, res:Response) => {
    const {id_user_seguidor,id_seguimiento,id_user_seguido} = req.body;
    try {
        await connec.seguido.create({
            data:{
                id_user_seguidor:parseInt(id_user_seguidor),
                id_user_seguido:parseInt(id_user_seguido),
                id_seguimiento:parseInt(id_seguimiento)
            }
        })
        const list = await connec.seguido.findMany({
            where:{
                id_user_seguido:parseInt(id_user_seguido)
            },
            select:{
                id_user_seguidor:true,
                id_seguimiento:true
            }
        })
        res.status(200).json(list)
    } catch (error) {
        res.status(500).json(error)
        
    }
}
export const getFollowerUsuarioID = async (req:Request, res:Response)=>{
    const {id} =req.params;
    try {
        const listSeguidore = await connec.seguido.findMany({
            where:{
                id_user_seguido:parseInt(id)
                
            },
            select:{
                id_user_seguidor:true,
                id_seguimiento:true
            }
        })
        console.log(listSeguidore)
        res.status(200).json(listSeguidore)
    } catch (error) {
        res.status(500).json(error)
        
    }
}
export const getInformacionAutor = async (req:Request, res:Response) => {
    const {id} = req.params;
    try {
        const autor = await connec.autor.findFirst({
            where:{
                id_autor:parseInt(id)
            },
            select:{
                id_autor:true,
                foto_perfil:true,
                foto_portada:true,
                nick_name:true,
                usuario:{
                    select:{
                        id_usuario:true,
                        persona:{
                            select:{
                                nombre:true,
                                apellido_paterno:true,
                                apellido_materno:true
                            }
                        }
                    }
                }
            }
        })
        res.status(200).json(autor)
    } catch (error) {
        res.status(500).json(error)
    }
}