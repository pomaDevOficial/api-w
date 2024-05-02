import express from 'express';
import morgan from 'morgan'
import cors from 'cors'
import path from 'path';
// import sharp from 'sharp'
// import { etiqueta } from '../../dist/generate/client/index';
import {routerCategoria,
    routerUsuario,
    routerPersona, 
    routerSeguidores, 
    routerPaises,
    routerEtiqueta,
    routerAutor,
    routerGenero,
    routerComentario,
    routerPublicacion} from './base.routes'
export class App{
    public app:express.Application;
    public api= '/api/v1/';
    public puerto:string;
    public imagesFolder = path.join(__dirname, '../public/imagenes');
    public rutaApi= {
        usuario: this.api +"usuario",
        autor: this.api +"autor",
        pais: this.api +"pais", 
        publicacion: this.api +"publicacion",
        comentario: this.api +"comentario",
        seguidores: this.api +"seguidores", 
        persona:this.api +"persona",
        categoria: this.api +"categoria",
        etiqueta:this.api +"etiqueta",
        genero: this.api +"genero",
        favoritos: this.api +"favoritos",
        imagenes:'/imagenes',
    }
    constructor(){
        this.app=express();
        this.puerto = process.env.PORT!;
        this.middlewares();
        this.routes();
    }
    static init(){ 
        return new App();
    }
    Start(calbak:Function){
        this.app.listen(this.puerto,()=>{
            console.log(`Servidor Express en ejecución en el puerto  http://localhost:${this.puerto}`);
            calbak();
        });
    }
    middlewares(){
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use((_req, res, next)=>{  
            res.setHeader('Cache-Control', 'no-store')    
            res.header("Access-Control-Allow-Origin", "*"); // Permitir solicitudes desde cualquier origen
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            next() 
        })
        // this.app.use(this.rutaApi.imagenes, (req, res, next)=>{
        //     const rutaImagen = `${this.imagesFolder}${req.url}`
        //     sharp(rutaImagen)
        //     .resize(800)
        //     .toBuffer((err,buffer)=>{
        //         if(err){
        //             return next()
        //         }
        //         res.setHeader('Content-Type', 'image/jpeg')
        //         res.send(buffer)
        //     })
        // })
    }
    routes(){
        this.app.use(this.rutaApi.imagenes, express.static(this.imagesFolder))
        this.app.use(this.rutaApi.autor,routerAutor);
        this.app.use(this.rutaApi.pais, routerPaises)
        this.app.use(this.rutaApi.genero,routerGenero);
        this.app.use(this.rutaApi.usuario,routerUsuario); 
        this.app.use(this.rutaApi.persona,routerPersona);
        this.app.use(this.rutaApi.etiqueta,routerEtiqueta)
        this.app.use(this.rutaApi.categoria,routerCategoria);
        this.app.use(this.rutaApi.seguidores,routerSeguidores);
        this.app.use(this.rutaApi.comentario, routerComentario);
        this.app.use(this.rutaApi.publicacion,routerPublicacion);
    }
}

