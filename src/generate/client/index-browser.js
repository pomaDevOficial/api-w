
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
