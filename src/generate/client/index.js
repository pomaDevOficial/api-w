
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.12.1
 * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
 */
Prisma.prismaVersion = {
  client: "5.12.1",
  engine: "473ed3124229e22d881cb7addf559799debae1ab"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CategoriaScalarFieldEnum = {
  id_categoria: 'id_categoria',
  descripcion: 'descripcion'
};

exports.Prisma.EtiquetaScalarFieldEnum = {
  id_etiqueta: 'id_etiqueta',
  nombre: 'nombre'
};

exports.Prisma.GeneroScalarFieldEnum = {
  id_genero: 'id_genero',
  id_categoria: 'id_categoria',
  nombre: 'nombre'
};

exports.Prisma.PersonaScalarFieldEnum = {
  id_persona: 'id_persona',
  nombre: 'nombre',
  apellido_paterno: 'apellido_paterno',
  apellido_materno: 'apellido_materno'
};

exports.Prisma.UsuarioScalarFieldEnum = {
  id_usuario: 'id_usuario',
  id_persona: 'id_persona',
  correo: 'correo',
  contrasenia: 'contrasenia',
  verificacion_email: 'verificacion_email',
  id_estado: 'id_estado'
};

exports.Prisma.AutorScalarFieldEnum = {
  id_autor: 'id_autor',
  id_pais: 'id_pais',
  id_usuario: 'id_usuario',
  nick_name: 'nick_name',
  ocupacion: 'ocupacion',
  descripcion: 'descripcion',
  foto_perfil: 'foto_perfil',
  foto_portada: 'foto_portada'
};

exports.Prisma.PaisScalarFieldEnum = {
  id_pais: 'id_pais',
  nombre: 'nombre',
  code: 'code'
};

exports.Prisma.SeguidoScalarFieldEnum = {
  id_seguido: 'id_seguido',
  id_user_seguidor: 'id_user_seguidor',
  id_user_seguido: 'id_user_seguido',
  id_seguimiento: 'id_seguimiento',
  fecha_seguimiento: 'fecha_seguimiento'
};

exports.Prisma.Tipo_seguimientoScalarFieldEnum = {
  id_seguimiento: 'id_seguimiento',
  descripcion: 'descripcion'
};

exports.Prisma.ReaccionScalarFieldEnum = {
  id_reaccion: 'id_reaccion',
  id_capitulo: 'id_capitulo',
  id_publicacion_l: 'id_publicacion_l',
  id_editorial: 'id_editorial',
  id_autor_reaccion: 'id_autor_reaccion',
  fecha: 'fecha'
};

exports.Prisma.Cap_pl_lnScalarFieldEnum = {
  id_cap_pl: 'id_cap_pl',
  id_editorial_pl: 'id_editorial_pl',
  id_pl_ln: 'id_pl_ln',
  nro_capitulo: 'nro_capitulo',
  nombre_capitulo: 'nombre_capitulo',
  contenido: 'contenido'
};

exports.Prisma.EditorialScalarFieldEnum = {
  id_editorial_pl: 'id_editorial_pl',
  id_autor: 'id_autor',
  fecha_registro: 'fecha_registro',
  id_estado: 'id_estado'
};

exports.Prisma.Pl_libreScalarFieldEnum = {
  id_pl_libre: 'id_pl_libre',
  id_categoria: 'id_categoria',
  id_editorial_pl: 'id_editorial_pl',
  id_etiqueta: 'id_etiqueta',
  contenido: 'contenido'
};

exports.Prisma.Pl_nlScalarFieldEnum = {
  id_pl_ln: 'id_pl_ln',
  titulo: 'titulo',
  id_genero: 'id_genero',
  id_categoria: 'id_categoria',
  descripcion: 'descripcion',
  estado: 'estado'
};

exports.Prisma.ComentarioScalarFieldEnum = {
  id_comentario: 'id_comentario',
  id_autor: 'id_autor',
  id_editorial: 'id_editorial',
  fecha_registro: 'fecha_registro',
  contenido: 'contenido',
  id_estado: 'id_estado'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  categoria: 'categoria',
  etiqueta: 'etiqueta',
  genero: 'genero',
  persona: 'persona',
  usuario: 'usuario',
  autor: 'autor',
  pais: 'pais',
  seguido: 'seguido',
  tipo_seguimiento: 'tipo_seguimiento',
  reaccion: 'reaccion',
  cap_pl_ln: 'cap_pl_ln',
  editorial: 'editorial',
  pl_libre: 'pl_libre',
  pl_nl: 'pl_nl',
  comentario: 'comentario'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "E:\\b-app-prisma\\src\\generate\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-1.0.x"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.12.1",
  "engineVersion": "473ed3124229e22d881cb7addf559799debae1ab",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generate/client/\"\n  binaryTargets = [\"native\", \"debian-openssl-1.0.x\"]\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel categoria {\n  id_categoria Int        @id @default(autoincrement())\n  descripcion  String?    @db.VarChar(100)\n  genero       genero[]\n  pl_libre     pl_libre[]\n  pl_nl        pl_nl[]\n}\n\nmodel etiqueta {\n  id_etiqueta Int        @id @default(autoincrement())\n  nombre      String?    @db.VarChar(50)\n  pl_libre    pl_libre[]\n}\n\nmodel genero {\n  id_genero    Int        @id @default(autoincrement())\n  id_categoria Int?\n  nombre       String?    @db.VarChar(60)\n  categoria    categoria? @relation(fields: [id_categoria], references: [id_categoria], onDelete: Restrict, onUpdate: Restrict, map: \"genero_ibfk_1\")\n  pl_nl        pl_nl[]\n\n  @@index([id_categoria], map: \"id_categoria\")\n}\n\nmodel persona {\n  id_persona       Int       @id @default(autoincrement())\n  nombre           String?   @db.VarChar(50)\n  apellido_paterno String?   @db.VarChar(20)\n  apellido_materno String?   @db.VarChar(20)\n  usuario          usuario[]\n}\n\nmodel usuario {\n  id_usuario                                Int       @id @default(autoincrement())\n  id_persona                                Int?\n  correo                                    String?   @db.VarChar(30)\n  contrasenia                               String?   @db.VarChar(255)\n  verificacion_email                        Boolean?\n  id_estado                                 Int?\n  autor                                     autor[]\n  seguido_seguido_id_user_seguidorTousuario seguido[] @relation(\"seguido_id_user_seguidorTousuario\")\n  seguido_seguido_id_user_seguidoTousuario  seguido[] @relation(\"seguido_id_user_seguidoTousuario\")\n  persona                                   persona?  @relation(fields: [id_persona], references: [id_persona], onDelete: Restrict, onUpdate: Restrict, map: \"usuario_ibfk_1\")\n\n  @@index([id_persona], map: \"id_persona\")\n}\n\nmodel autor {\n  id_autor     Int          @id @default(autoincrement())\n  id_pais      Int?\n  id_usuario   Int?\n  nick_name    String?      @db.VarChar(50)\n  ocupacion    String?      @db.VarChar(100)\n  descripcion  String?      @db.Text\n  foto_perfil  String?      @db.VarChar(100)\n  foto_portada String?      @db.VarChar(100)\n  usuario      usuario?     @relation(fields: [id_usuario], references: [id_usuario], onDelete: Restrict, onUpdate: Restrict, map: \"autor_ibfk_1\")\n  pais         pais?        @relation(fields: [id_pais], references: [id_pais], onDelete: Restrict, onUpdate: Restrict, map: \"autor_ibfk_2\")\n  comentario   comentario[]\n  editorial    editorial[]\n  reaccion     reaccion[]\n\n  @@index([id_pais], map: \"id_pais\")\n  @@index([id_usuario], map: \"id_usuario\")\n}\n\nmodel pais {\n  id_pais Int     @id @default(autoincrement())\n  nombre  String? @db.VarChar(80)\n  code    String? @db.VarChar(4)\n  autor   autor[]\n}\n\nmodel seguido {\n  id_seguido                                Int               @id @default(autoincrement())\n  id_user_seguidor                          Int?\n  id_user_seguido                           Int?\n  id_seguimiento                            Int?\n  fecha_seguimiento                         DateTime?         @db.DateTime(0)\n  usuario_seguido_id_user_seguidorTousuario usuario?          @relation(\"seguido_id_user_seguidorTousuario\", fields: [id_user_seguidor], references: [id_usuario], onDelete: Restrict, onUpdate: Restrict, map: \"seguido_ibfk_1\")\n  usuario_seguido_id_user_seguidoTousuario  usuario?          @relation(\"seguido_id_user_seguidoTousuario\", fields: [id_user_seguido], references: [id_usuario], onDelete: Restrict, onUpdate: Restrict, map: \"seguido_ibfk_2\")\n  tipo_seguimiento                          tipo_seguimiento? @relation(fields: [id_seguimiento], references: [id_seguimiento], onDelete: Restrict, onUpdate: Restrict, map: \"seguido_ibfk_3\")\n\n  @@index([id_seguimiento], map: \"id_seguimiento\")\n  @@index([id_user_seguido], map: \"id_user_seguido\")\n  @@index([id_user_seguidor], map: \"id_user_seguidor\")\n}\n\nmodel tipo_seguimiento {\n  id_seguimiento Int       @id @default(autoincrement())\n  descripcion    String?   @db.VarChar(15)\n  seguido        seguido[]\n}\n\nmodel reaccion {\n  id_reaccion       Int       @id @default(autoincrement())\n  id_capitulo       Int?\n  id_publicacion_l  Int?\n  id_editorial      Int?\n  id_autor_reaccion Int?\n  fecha             DateTime? @db.DateTime(0)\n  autor             autor?    @relation(fields: [id_autor_reaccion], references: [id_autor], onDelete: Restrict, onUpdate: Restrict, map: \"reaccion_ibfk_3\")\n\n  @@index([id_autor_reaccion], map: \"id_autor_reaccion\")\n  @@index([id_capitulo], map: \"id_capitulo\")\n  @@index([id_editorial], map: \"id_editorial\")\n  @@index([id_publicacion_l], map: \"id_publicacion_l\")\n}\n\nmodel cap_pl_ln {\n  id_cap_pl       Int        @id @default(autoincrement())\n  id_editorial_pl Int?\n  id_pl_ln        Int?\n  nro_capitulo    String?    @db.VarChar(100)\n  nombre_capitulo String?    @db.VarChar(200)\n  contenido       String?    @db.Text\n  pl_nl           pl_nl?     @relation(fields: [id_pl_ln], references: [id_pl_ln], onDelete: Restrict, onUpdate: Restrict, map: \"cap_pl_ln_ibfk_1\")\n  editorial       editorial? @relation(fields: [id_editorial_pl], references: [id_editorial_pl], onDelete: Restrict, onUpdate: Restrict, map: \"cap_pl_ln_ibfk_2\")\n\n  @@index([id_editorial_pl], map: \"id_editorial_pl\")\n  @@index([id_pl_ln], map: \"id_pl_ln\")\n}\n\nmodel editorial {\n  id_editorial_pl Int          @id @default(autoincrement())\n  id_autor        Int?\n  fecha_registro  DateTime?    @db.DateTime(0)\n  id_estado       Int\n  cap_pl_ln       cap_pl_ln[]\n  comentario      comentario[]\n  autor           autor?       @relation(fields: [id_autor], references: [id_autor], onDelete: Restrict, onUpdate: Restrict, map: \"editorial_ibfk_1\")\n  pl_libre        pl_libre[]\n\n  @@index([id_autor], map: \"id_autor\")\n}\n\nmodel pl_libre {\n  id_pl_libre     Int        @id @default(autoincrement())\n  id_categoria    Int?\n  id_editorial_pl Int?\n  id_etiqueta     Int?\n  contenido       String?    @db.Text\n  categoria       categoria? @relation(fields: [id_categoria], references: [id_categoria], onDelete: Restrict, onUpdate: Restrict, map: \"pl_libre_ibfk_1\")\n  editorial       editorial? @relation(fields: [id_editorial_pl], references: [id_editorial_pl], onDelete: Restrict, onUpdate: Restrict, map: \"pl_libre_ibfk_2\")\n  etiqueta        etiqueta?  @relation(fields: [id_etiqueta], references: [id_etiqueta], onDelete: Restrict, onUpdate: Restrict, map: \"pl_libre_ibfk_3\")\n\n  @@index([id_categoria], map: \"id_categoria\")\n  @@index([id_editorial_pl], map: \"id_editorial_pl\")\n  @@index([id_etiqueta], map: \"id_etiqueta\")\n}\n\nmodel pl_nl {\n  id_pl_ln     Int         @id @default(autoincrement())\n  titulo       String?     @db.VarChar(200)\n  id_genero    Int?\n  id_categoria Int?\n  descripcion  String?     @db.Text\n  estado       String      @db.VarChar(50)\n  cap_pl_ln    cap_pl_ln[]\n  genero       genero?     @relation(fields: [id_genero], references: [id_genero], onDelete: Restrict, onUpdate: Restrict, map: \"pl_nl_ibfk_1\")\n  categoria    categoria?  @relation(fields: [id_categoria], references: [id_categoria], onDelete: Restrict, onUpdate: Restrict, map: \"pl_nl_ibfk_2\")\n\n  @@index([id_categoria], map: \"id_categoria\")\n  @@index([id_genero], map: \"id_genero\")\n}\n\nmodel comentario {\n  id_comentario  Int        @id @default(autoincrement())\n  id_autor       Int?\n  id_editorial   Int?\n  fecha_registro DateTime?  @db.DateTime(0)\n  contenido      String?    @db.Text\n  id_estado      Int?\n  autor          autor?     @relation(fields: [id_autor], references: [id_autor], onDelete: Restrict, onUpdate: Restrict, map: \"comentario_ibfk_1\")\n  editorial      editorial? @relation(fields: [id_editorial], references: [id_editorial_pl], onDelete: Restrict, onUpdate: Restrict, map: \"comentario_ibfk_2\")\n\n  @@index([id_autor], map: \"id_autor\")\n  @@index([id_editorial], map: \"id_editorial\")\n}\n",
  "inlineSchemaHash": "ca0884dadac01294cab2a7be1c276ed5f381c166ae3a35733627394e31fdb905",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generate/client",
    "generate/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"categoria\":{\"dbName\":null,\"fields\":[{\"name\":\"id_categoria\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genero\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"genero\",\"relationName\":\"categoriaTogenero\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pl_libre\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pl_libre\",\"relationName\":\"categoriaTopl_libre\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pl_nl\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pl_nl\",\"relationName\":\"categoriaTopl_nl\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"etiqueta\":{\"dbName\":null,\"fields\":[{\"name\":\"id_etiqueta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pl_libre\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pl_libre\",\"relationName\":\"etiquetaTopl_libre\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"genero\":{\"dbName\":null,\"fields\":[{\"name\":\"id_genero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_categoria\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoria\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"categoria\",\"relationName\":\"categoriaTogenero\",\"relationFromFields\":[\"id_categoria\"],\"relationToFields\":[\"id_categoria\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pl_nl\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pl_nl\",\"relationName\":\"generoTopl_nl\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"persona\":{\"dbName\":null,\"fields\":[{\"name\":\"id_persona\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apellido_paterno\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apellido_materno\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"personaTousuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"usuario\":{\"dbName\":null,\"fields\":[{\"name\":\"id_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_persona\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contrasenia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verificacion_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"autor\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"autor\",\"relationName\":\"autorTousuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seguido_seguido_id_user_seguidorTousuario\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"seguido\",\"relationName\":\"seguido_id_user_seguidorTousuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seguido_seguido_id_user_seguidoTousuario\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"seguido\",\"relationName\":\"seguido_id_user_seguidoTousuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"persona\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"persona\",\"relationName\":\"personaTousuario\",\"relationFromFields\":[\"id_persona\"],\"relationToFields\":[\"id_persona\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"autor\":{\"dbName\":null,\"fields\":[{\"name\":\"id_autor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pais\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nick_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ocupacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"foto_perfil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"foto_portada\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"autorTousuario\",\"relationFromFields\":[\"id_usuario\"],\"relationToFields\":[\"id_usuario\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pais\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pais\",\"relationName\":\"autorTopais\",\"relationFromFields\":[\"id_pais\"],\"relationToFields\":[\"id_pais\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comentario\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"comentario\",\"relationName\":\"autorTocomentario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editorial\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"editorial\",\"relationName\":\"autorToeditorial\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reaccion\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reaccion\",\"relationName\":\"autorToreaccion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pais\":{\"dbName\":null,\"fields\":[{\"name\":\"id_pais\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"autor\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"autor\",\"relationName\":\"autorTopais\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"seguido\":{\"dbName\":null,\"fields\":[{\"name\":\"id_seguido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_user_seguidor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_user_seguido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_seguimiento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_seguimiento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_seguido_id_user_seguidorTousuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"seguido_id_user_seguidorTousuario\",\"relationFromFields\":[\"id_user_seguidor\"],\"relationToFields\":[\"id_usuario\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_seguido_id_user_seguidoTousuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"seguido_id_user_seguidoTousuario\",\"relationFromFields\":[\"id_user_seguido\"],\"relationToFields\":[\"id_usuario\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_seguimiento\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tipo_seguimiento\",\"relationName\":\"seguidoTotipo_seguimiento\",\"relationFromFields\":[\"id_seguimiento\"],\"relationToFields\":[\"id_seguimiento\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tipo_seguimiento\":{\"dbName\":null,\"fields\":[{\"name\":\"id_seguimiento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seguido\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"seguido\",\"relationName\":\"seguidoTotipo_seguimiento\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"reaccion\":{\"dbName\":null,\"fields\":[{\"name\":\"id_reaccion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_capitulo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_publicacion_l\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_editorial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_autor_reaccion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"autor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"autor\",\"relationName\":\"autorToreaccion\",\"relationFromFields\":[\"id_autor_reaccion\"],\"relationToFields\":[\"id_autor\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"cap_pl_ln\":{\"dbName\":null,\"fields\":[{\"name\":\"id_cap_pl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_editorial_pl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pl_ln\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nro_capitulo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre_capitulo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contenido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pl_nl\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pl_nl\",\"relationName\":\"cap_pl_lnTopl_nl\",\"relationFromFields\":[\"id_pl_ln\"],\"relationToFields\":[\"id_pl_ln\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editorial\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"editorial\",\"relationName\":\"cap_pl_lnToeditorial\",\"relationFromFields\":[\"id_editorial_pl\"],\"relationToFields\":[\"id_editorial_pl\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"editorial\":{\"dbName\":null,\"fields\":[{\"name\":\"id_editorial_pl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_autor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_registro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cap_pl_ln\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cap_pl_ln\",\"relationName\":\"cap_pl_lnToeditorial\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comentario\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"comentario\",\"relationName\":\"comentarioToeditorial\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"autor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"autor\",\"relationName\":\"autorToeditorial\",\"relationFromFields\":[\"id_autor\"],\"relationToFields\":[\"id_autor\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pl_libre\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pl_libre\",\"relationName\":\"editorialTopl_libre\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pl_libre\":{\"dbName\":null,\"fields\":[{\"name\":\"id_pl_libre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_categoria\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_editorial_pl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_etiqueta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contenido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoria\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"categoria\",\"relationName\":\"categoriaTopl_libre\",\"relationFromFields\":[\"id_categoria\"],\"relationToFields\":[\"id_categoria\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editorial\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"editorial\",\"relationName\":\"editorialTopl_libre\",\"relationFromFields\":[\"id_editorial_pl\"],\"relationToFields\":[\"id_editorial_pl\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etiqueta\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"etiqueta\",\"relationName\":\"etiquetaTopl_libre\",\"relationFromFields\":[\"id_etiqueta\"],\"relationToFields\":[\"id_etiqueta\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pl_nl\":{\"dbName\":null,\"fields\":[{\"name\":\"id_pl_ln\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titulo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_genero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_categoria\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cap_pl_ln\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cap_pl_ln\",\"relationName\":\"cap_pl_lnTopl_nl\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genero\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"genero\",\"relationName\":\"generoTopl_nl\",\"relationFromFields\":[\"id_genero\"],\"relationToFields\":[\"id_genero\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoria\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"categoria\",\"relationName\":\"categoriaTopl_nl\",\"relationFromFields\":[\"id_categoria\"],\"relationToFields\":[\"id_categoria\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"comentario\":{\"dbName\":null,\"fields\":[{\"name\":\"id_comentario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_autor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_editorial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_registro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contenido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"autor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"autor\",\"relationName\":\"autorTocomentario\",\"relationFromFields\":[\"id_autor\"],\"relationToFields\":[\"id_autor\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editorial\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"editorial\",\"relationName\":\"comentarioToeditorial\",\"relationFromFields\":[\"id_editorial\"],\"relationToFields\":[\"id_editorial_pl\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/generate/client/query_engine-windows.dll.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-1.0.x.so.node");
path.join(process.cwd(), "src/generate/client/libquery_engine-debian-openssl-1.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generate/client/schema.prisma")
