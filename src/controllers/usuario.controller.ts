import { Response, Request } from "express";
import conn from '../database/IConnection.database'
import hassh from 'bcrypt'
import jsw from 'jsonwebtoken'
import { match } from "assert";
export const postUsuario = async(req:Request, res:Response)=>{
    try {
        const { nombre, correo, password, apellido } = req.body;
        const [ap, am]= apellido.split(' ');
        const validarCorreo = await conn.usuario.findMany({
            where: { correo }
        })
        console.log(validarCorreo)
        if(validarCorreo.length > 0) return res.status(200).json({msj:'Correo ya existe'})
        const personaI = await conn.persona.create({
            data:{
                nombre,
                apellido_paterno:ap,
                apellido_materno:am
            }    
        })
        const usuarioI = await conn.usuario.create({
            data:{
                correo,
                contrasenia:hassh.hashSync(password, 10),
                id_persona:personaI.id_persona,
                verificacion_email:false,
                id_estado:1
            }
        })
        const imFP = ['imagenes/app-1.jpg', 'imagenes/app-2.jpg', 'imagenes/app-3.jpg', 'imagenes/app-4.jpg', 'imagenes/app-5.jpg'];
        const s = Math.floor(Math.random()* imFP.length)
        const im = imFP[s]
        const autor= await conn.autor.create({
            data:{
                id_usuario:usuarioI.id_usuario,
                nick_name:'Untitled',
                foto_perfil: im,
                foto_portada:'imagenes/app-portada.jpg'
            }
        })
        const token = jsw.sign({username:correo},process.env.SECRET! || 'poma2088', {expiresIn:'1Hour'})

        
        res.status(200).json({token, id:autor.id_autor})
    } catch (error) {
        res.status(500).json(error)
    }
}
export const postUsuarioLogin =async  (req:Request, res:Response)=>{
    const {correo, password}= req.body;

    try {
        const ValidarCorreo = await conn.usuario.findFirst({
            where: { correo }
        })
        if(!ValidarCorreo) return res.status(404).json({msj:'Correo ingreado no corresponde a un correo valido'})
        const validarContraseña = hassh.compareSync(password, ValidarCorreo.contrasenia!);
        if(!validarContraseña) return res.status(404).json({msj:'Contraseña incorrecta'})
        const autor= await conn.autor.findFirst({
            where:{
                id_usuario:ValidarCorreo.id_usuario
            },select:{
                id_autor:true,
            }
        })
        const tokenL = jsw.sign({username:correo},process.env.SECRET!||'poma200',{expiresIn:'1h'})
        res.status(200).json({tokenL,id:autor?.id_autor})
    } catch (error) {
        res.status(500).json(error)
        
    }
}