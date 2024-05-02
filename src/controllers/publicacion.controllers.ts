import { Response,Request } from "express";
import conn from '../database/IConnection.database'
export const postPublicacionLibre = async(req:Request, res: Response)=>{
    const {id_autor,id_categoria,id_etiqueta,contenido} = req.body
    try {
        console.log(req.body)
        const pLE = await conn.editorial.create({
            data:{
                id_autor: parseInt(id_autor),
                fecha_registro: new Date(),
                id_estado: 1
            }
        })
        const pLL = await conn.pl_libre.create({
            data:{
                id_editorial_pl: pLE.id_editorial_pl,
                id_etiqueta,
                contenido,
                id_categoria
            }
        })
        res.status(200).json({msj:'Publicacion libre publicado'})
    } catch (error) {
        res.status(500).json({msj:'Error al crear publicacion'})
    }
}
export const getListaPublicaciones = async(_req: Request, res: Response)=>{
    try {
        const publicaciones = await conn.editorial.findMany({
            where:{
                id_estado:1
            },
            orderBy:{
                fecha_registro:'desc'
            },
           select:{
            id_editorial_pl:true,
            id_autor:true,
            autor:{
                select:{
                    foto_perfil:true,
                    foto_portada:true,
                    usuario:{
                        select:{
                            persona:{
                                select:{
                                    nombre:true,
                                    apellido_paterno:true
                                }
                            }
                        }
                    }
                }
            },
            fecha_registro:true,
            comentario:{
                where:{
                    id_estado:1,
                },
                orderBy:{
                    id_comentario:'desc'
                },
                select:{
                    fecha_registro:true,
                    contenido:true,
                    id_autor:true,
                    id_comentario:true,
                    autor:{
                        select:{
                            foto_perfil:true,
                            usuario:{
                                select:{
                                    persona:{
                                        select:{
                                            nombre:true,
                                            apellido_paterno:true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, 
            pl_libre:{
                
                select:{
                    contenido:true,
                    categoria:{
                        select:{
                            descripcion:true
                        }
                    },
                    etiqueta:{
                        select:{
                            nombre:true,
                            id_etiqueta:true
                        }
                    }
                }
            },cap_pl_ln:{
                select:{
                    
                    id_editorial_pl:true,
                    contenido:true,
                    nombre_capitulo:true,
                    nro_capitulo:true,
                    pl_nl:{
                        select:{
                            titulo:true,
                            descripcion:true,
                            genero:{
                                select:{
                                    nombre:true,
                                    id_genero:true,
                                }
                            },
                            categoria:{
                                select:{
                                    descripcion:true
                                }
                            }
                        }
                    }
                }
            }

           }
        })
        res.status(200).json(publicaciones)
    } catch (error) {
        res.status(500).json(error)   
    }
}
export const postPublicacionLibro = async (req:Request, res:Response) => { 
    const {id_autor,id_categoria,id_genero,contenido,descripcion,titulo,nro_capitulo,nombre_capitulo} = req.body;
    console.log(req.body)
    try {
        const plEdR = await conn.editorial.create({
            data:{
                id_autor: parseInt(id_autor),
                fecha_registro: new Date(),
                id_estado: 1
            }
        })
        const plLibroR = await conn.pl_nl.create({
            data:{
                id_categoria,
                id_genero,
                titulo,
                descripcion,
                estado:'publicado'
            }
        })
        const capituloR = await conn.cap_pl_ln.create({
            data:{
                id_editorial_pl: plEdR.id_editorial_pl,
                id_pl_ln: plLibroR.id_pl_ln,
                nro_capitulo,
                nombre_capitulo,
                contenido
            }
        })
        res.status(200).json({msj:'Se registro el libro'})
    } catch (error) {
        res.status(500).json({msj:'Error en servidor'})
    }

}
export const putPublicacionE = async (req:Request,res:Response) => {
    const {id}= req.params
    const {id_estado}= req.body;
    try {
        const putC = await  conn.editorial.updateMany({
            where:{
                id_editorial_pl:parseInt(id)
            },
            data:{
                id_estado
            }
        })
        res.status(200).json('Elimincion de la publicacion')
    } catch (error) {
        res.status(500).json(error)
    }
}