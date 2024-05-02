
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model categoria
 * 
 */
export type categoria = $Result.DefaultSelection<Prisma.$categoriaPayload>
/**
 * Model etiqueta
 * 
 */
export type etiqueta = $Result.DefaultSelection<Prisma.$etiquetaPayload>
/**
 * Model genero
 * 
 */
export type genero = $Result.DefaultSelection<Prisma.$generoPayload>
/**
 * Model persona
 * 
 */
export type persona = $Result.DefaultSelection<Prisma.$personaPayload>
/**
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>
/**
 * Model autor
 * 
 */
export type autor = $Result.DefaultSelection<Prisma.$autorPayload>
/**
 * Model pais
 * 
 */
export type pais = $Result.DefaultSelection<Prisma.$paisPayload>
/**
 * Model seguido
 * 
 */
export type seguido = $Result.DefaultSelection<Prisma.$seguidoPayload>
/**
 * Model tipo_seguimiento
 * 
 */
export type tipo_seguimiento = $Result.DefaultSelection<Prisma.$tipo_seguimientoPayload>
/**
 * Model reaccion
 * 
 */
export type reaccion = $Result.DefaultSelection<Prisma.$reaccionPayload>
/**
 * Model cap_pl_ln
 * 
 */
export type cap_pl_ln = $Result.DefaultSelection<Prisma.$cap_pl_lnPayload>
/**
 * Model editorial
 * 
 */
export type editorial = $Result.DefaultSelection<Prisma.$editorialPayload>
/**
 * Model pl_libre
 * 
 */
export type pl_libre = $Result.DefaultSelection<Prisma.$pl_librePayload>
/**
 * Model pl_nl
 * 
 */
export type pl_nl = $Result.DefaultSelection<Prisma.$pl_nlPayload>
/**
 * Model comentario
 * 
 */
export type comentario = $Result.DefaultSelection<Prisma.$comentarioPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categorias
 * const categorias = await prisma.categoria.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categorias
   * const categorias = await prisma.categoria.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.categoria`: Exposes CRUD operations for the **categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.categoriaDelegate<ExtArgs>;

  /**
   * `prisma.etiqueta`: Exposes CRUD operations for the **etiqueta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Etiquetas
    * const etiquetas = await prisma.etiqueta.findMany()
    * ```
    */
  get etiqueta(): Prisma.etiquetaDelegate<ExtArgs>;

  /**
   * `prisma.genero`: Exposes CRUD operations for the **genero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Generos
    * const generos = await prisma.genero.findMany()
    * ```
    */
  get genero(): Prisma.generoDelegate<ExtArgs>;

  /**
   * `prisma.persona`: Exposes CRUD operations for the **persona** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personas
    * const personas = await prisma.persona.findMany()
    * ```
    */
  get persona(): Prisma.personaDelegate<ExtArgs>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs>;

  /**
   * `prisma.autor`: Exposes CRUD operations for the **autor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Autors
    * const autors = await prisma.autor.findMany()
    * ```
    */
  get autor(): Prisma.autorDelegate<ExtArgs>;

  /**
   * `prisma.pais`: Exposes CRUD operations for the **pais** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pais
    * const pais = await prisma.pais.findMany()
    * ```
    */
  get pais(): Prisma.paisDelegate<ExtArgs>;

  /**
   * `prisma.seguido`: Exposes CRUD operations for the **seguido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seguidos
    * const seguidos = await prisma.seguido.findMany()
    * ```
    */
  get seguido(): Prisma.seguidoDelegate<ExtArgs>;

  /**
   * `prisma.tipo_seguimiento`: Exposes CRUD operations for the **tipo_seguimiento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipo_seguimientos
    * const tipo_seguimientos = await prisma.tipo_seguimiento.findMany()
    * ```
    */
  get tipo_seguimiento(): Prisma.tipo_seguimientoDelegate<ExtArgs>;

  /**
   * `prisma.reaccion`: Exposes CRUD operations for the **reaccion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reaccions
    * const reaccions = await prisma.reaccion.findMany()
    * ```
    */
  get reaccion(): Prisma.reaccionDelegate<ExtArgs>;

  /**
   * `prisma.cap_pl_ln`: Exposes CRUD operations for the **cap_pl_ln** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cap_pl_lns
    * const cap_pl_lns = await prisma.cap_pl_ln.findMany()
    * ```
    */
  get cap_pl_ln(): Prisma.cap_pl_lnDelegate<ExtArgs>;

  /**
   * `prisma.editorial`: Exposes CRUD operations for the **editorial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Editorials
    * const editorials = await prisma.editorial.findMany()
    * ```
    */
  get editorial(): Prisma.editorialDelegate<ExtArgs>;

  /**
   * `prisma.pl_libre`: Exposes CRUD operations for the **pl_libre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pl_libres
    * const pl_libres = await prisma.pl_libre.findMany()
    * ```
    */
  get pl_libre(): Prisma.pl_libreDelegate<ExtArgs>;

  /**
   * `prisma.pl_nl`: Exposes CRUD operations for the **pl_nl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pl_nls
    * const pl_nls = await prisma.pl_nl.findMany()
    * ```
    */
  get pl_nl(): Prisma.pl_nlDelegate<ExtArgs>;

  /**
   * `prisma.comentario`: Exposes CRUD operations for the **comentario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comentarios
    * const comentarios = await prisma.comentario.findMany()
    * ```
    */
  get comentario(): Prisma.comentarioDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'categoria' | 'etiqueta' | 'genero' | 'persona' | 'usuario' | 'autor' | 'pais' | 'seguido' | 'tipo_seguimiento' | 'reaccion' | 'cap_pl_ln' | 'editorial' | 'pl_libre' | 'pl_nl' | 'comentario'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      categoria: {
        payload: Prisma.$categoriaPayload<ExtArgs>
        fields: Prisma.categoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          findFirst: {
            args: Prisma.categoriaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          findMany: {
            args: Prisma.categoriaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>[]
          }
          create: {
            args: Prisma.categoriaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          createMany: {
            args: Prisma.categoriaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.categoriaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          update: {
            args: Prisma.categoriaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          deleteMany: {
            args: Prisma.categoriaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.categoriaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.categoriaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.categoriaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriaCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      etiqueta: {
        payload: Prisma.$etiquetaPayload<ExtArgs>
        fields: Prisma.etiquetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.etiquetaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$etiquetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.etiquetaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$etiquetaPayload>
          }
          findFirst: {
            args: Prisma.etiquetaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$etiquetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.etiquetaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$etiquetaPayload>
          }
          findMany: {
            args: Prisma.etiquetaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$etiquetaPayload>[]
          }
          create: {
            args: Prisma.etiquetaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$etiquetaPayload>
          }
          createMany: {
            args: Prisma.etiquetaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.etiquetaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$etiquetaPayload>
          }
          update: {
            args: Prisma.etiquetaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$etiquetaPayload>
          }
          deleteMany: {
            args: Prisma.etiquetaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.etiquetaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.etiquetaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$etiquetaPayload>
          }
          aggregate: {
            args: Prisma.EtiquetaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEtiqueta>
          }
          groupBy: {
            args: Prisma.etiquetaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EtiquetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.etiquetaCountArgs<ExtArgs>,
            result: $Utils.Optional<EtiquetaCountAggregateOutputType> | number
          }
        }
      }
      genero: {
        payload: Prisma.$generoPayload<ExtArgs>
        fields: Prisma.generoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.generoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$generoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.generoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$generoPayload>
          }
          findFirst: {
            args: Prisma.generoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$generoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.generoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$generoPayload>
          }
          findMany: {
            args: Prisma.generoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$generoPayload>[]
          }
          create: {
            args: Prisma.generoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$generoPayload>
          }
          createMany: {
            args: Prisma.generoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.generoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$generoPayload>
          }
          update: {
            args: Prisma.generoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$generoPayload>
          }
          deleteMany: {
            args: Prisma.generoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.generoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.generoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$generoPayload>
          }
          aggregate: {
            args: Prisma.GeneroAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGenero>
          }
          groupBy: {
            args: Prisma.generoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GeneroGroupByOutputType>[]
          }
          count: {
            args: Prisma.generoCountArgs<ExtArgs>,
            result: $Utils.Optional<GeneroCountAggregateOutputType> | number
          }
        }
      }
      persona: {
        payload: Prisma.$personaPayload<ExtArgs>
        fields: Prisma.personaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.personaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.personaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          findFirst: {
            args: Prisma.personaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.personaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          findMany: {
            args: Prisma.personaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personaPayload>[]
          }
          create: {
            args: Prisma.personaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          createMany: {
            args: Prisma.personaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.personaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          update: {
            args: Prisma.personaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          deleteMany: {
            args: Prisma.personaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.personaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.personaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          aggregate: {
            args: Prisma.PersonaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePersona>
          }
          groupBy: {
            args: Prisma.personaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PersonaGroupByOutputType>[]
          }
          count: {
            args: Prisma.personaCountArgs<ExtArgs>,
            result: $Utils.Optional<PersonaCountAggregateOutputType> | number
          }
        }
      }
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      autor: {
        payload: Prisma.$autorPayload<ExtArgs>
        fields: Prisma.autorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.autorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$autorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.autorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          findFirst: {
            args: Prisma.autorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$autorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.autorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          findMany: {
            args: Prisma.autorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$autorPayload>[]
          }
          create: {
            args: Prisma.autorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          createMany: {
            args: Prisma.autorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.autorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          update: {
            args: Prisma.autorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          deleteMany: {
            args: Prisma.autorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.autorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.autorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          aggregate: {
            args: Prisma.AutorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAutor>
          }
          groupBy: {
            args: Prisma.autorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AutorGroupByOutputType>[]
          }
          count: {
            args: Prisma.autorCountArgs<ExtArgs>,
            result: $Utils.Optional<AutorCountAggregateOutputType> | number
          }
        }
      }
      pais: {
        payload: Prisma.$paisPayload<ExtArgs>
        fields: Prisma.paisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paisFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paisFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paisPayload>
          }
          findFirst: {
            args: Prisma.paisFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paisFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paisPayload>
          }
          findMany: {
            args: Prisma.paisFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paisPayload>[]
          }
          create: {
            args: Prisma.paisCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paisPayload>
          }
          createMany: {
            args: Prisma.paisCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.paisDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paisPayload>
          }
          update: {
            args: Prisma.paisUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paisPayload>
          }
          deleteMany: {
            args: Prisma.paisDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.paisUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.paisUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paisPayload>
          }
          aggregate: {
            args: Prisma.PaisAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePais>
          }
          groupBy: {
            args: Prisma.paisGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaisGroupByOutputType>[]
          }
          count: {
            args: Prisma.paisCountArgs<ExtArgs>,
            result: $Utils.Optional<PaisCountAggregateOutputType> | number
          }
        }
      }
      seguido: {
        payload: Prisma.$seguidoPayload<ExtArgs>
        fields: Prisma.seguidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.seguidoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$seguidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.seguidoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$seguidoPayload>
          }
          findFirst: {
            args: Prisma.seguidoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$seguidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.seguidoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$seguidoPayload>
          }
          findMany: {
            args: Prisma.seguidoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$seguidoPayload>[]
          }
          create: {
            args: Prisma.seguidoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$seguidoPayload>
          }
          createMany: {
            args: Prisma.seguidoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.seguidoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$seguidoPayload>
          }
          update: {
            args: Prisma.seguidoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$seguidoPayload>
          }
          deleteMany: {
            args: Prisma.seguidoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.seguidoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.seguidoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$seguidoPayload>
          }
          aggregate: {
            args: Prisma.SeguidoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSeguido>
          }
          groupBy: {
            args: Prisma.seguidoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SeguidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.seguidoCountArgs<ExtArgs>,
            result: $Utils.Optional<SeguidoCountAggregateOutputType> | number
          }
        }
      }
      tipo_seguimiento: {
        payload: Prisma.$tipo_seguimientoPayload<ExtArgs>
        fields: Prisma.tipo_seguimientoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipo_seguimientoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tipo_seguimientoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipo_seguimientoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tipo_seguimientoPayload>
          }
          findFirst: {
            args: Prisma.tipo_seguimientoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tipo_seguimientoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipo_seguimientoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tipo_seguimientoPayload>
          }
          findMany: {
            args: Prisma.tipo_seguimientoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tipo_seguimientoPayload>[]
          }
          create: {
            args: Prisma.tipo_seguimientoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tipo_seguimientoPayload>
          }
          createMany: {
            args: Prisma.tipo_seguimientoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tipo_seguimientoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tipo_seguimientoPayload>
          }
          update: {
            args: Prisma.tipo_seguimientoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tipo_seguimientoPayload>
          }
          deleteMany: {
            args: Prisma.tipo_seguimientoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tipo_seguimientoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tipo_seguimientoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tipo_seguimientoPayload>
          }
          aggregate: {
            args: Prisma.Tipo_seguimientoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTipo_seguimiento>
          }
          groupBy: {
            args: Prisma.tipo_seguimientoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Tipo_seguimientoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipo_seguimientoCountArgs<ExtArgs>,
            result: $Utils.Optional<Tipo_seguimientoCountAggregateOutputType> | number
          }
        }
      }
      reaccion: {
        payload: Prisma.$reaccionPayload<ExtArgs>
        fields: Prisma.reaccionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reaccionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reaccionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reaccionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reaccionPayload>
          }
          findFirst: {
            args: Prisma.reaccionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reaccionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reaccionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reaccionPayload>
          }
          findMany: {
            args: Prisma.reaccionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reaccionPayload>[]
          }
          create: {
            args: Prisma.reaccionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reaccionPayload>
          }
          createMany: {
            args: Prisma.reaccionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.reaccionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reaccionPayload>
          }
          update: {
            args: Prisma.reaccionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reaccionPayload>
          }
          deleteMany: {
            args: Prisma.reaccionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.reaccionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.reaccionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reaccionPayload>
          }
          aggregate: {
            args: Prisma.ReaccionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReaccion>
          }
          groupBy: {
            args: Prisma.reaccionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReaccionGroupByOutputType>[]
          }
          count: {
            args: Prisma.reaccionCountArgs<ExtArgs>,
            result: $Utils.Optional<ReaccionCountAggregateOutputType> | number
          }
        }
      }
      cap_pl_ln: {
        payload: Prisma.$cap_pl_lnPayload<ExtArgs>
        fields: Prisma.cap_pl_lnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cap_pl_lnFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cap_pl_lnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cap_pl_lnFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cap_pl_lnPayload>
          }
          findFirst: {
            args: Prisma.cap_pl_lnFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cap_pl_lnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cap_pl_lnFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cap_pl_lnPayload>
          }
          findMany: {
            args: Prisma.cap_pl_lnFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cap_pl_lnPayload>[]
          }
          create: {
            args: Prisma.cap_pl_lnCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cap_pl_lnPayload>
          }
          createMany: {
            args: Prisma.cap_pl_lnCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.cap_pl_lnDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cap_pl_lnPayload>
          }
          update: {
            args: Prisma.cap_pl_lnUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cap_pl_lnPayload>
          }
          deleteMany: {
            args: Prisma.cap_pl_lnDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.cap_pl_lnUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.cap_pl_lnUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cap_pl_lnPayload>
          }
          aggregate: {
            args: Prisma.Cap_pl_lnAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCap_pl_ln>
          }
          groupBy: {
            args: Prisma.cap_pl_lnGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Cap_pl_lnGroupByOutputType>[]
          }
          count: {
            args: Prisma.cap_pl_lnCountArgs<ExtArgs>,
            result: $Utils.Optional<Cap_pl_lnCountAggregateOutputType> | number
          }
        }
      }
      editorial: {
        payload: Prisma.$editorialPayload<ExtArgs>
        fields: Prisma.editorialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.editorialFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$editorialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.editorialFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$editorialPayload>
          }
          findFirst: {
            args: Prisma.editorialFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$editorialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.editorialFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$editorialPayload>
          }
          findMany: {
            args: Prisma.editorialFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$editorialPayload>[]
          }
          create: {
            args: Prisma.editorialCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$editorialPayload>
          }
          createMany: {
            args: Prisma.editorialCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.editorialDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$editorialPayload>
          }
          update: {
            args: Prisma.editorialUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$editorialPayload>
          }
          deleteMany: {
            args: Prisma.editorialDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.editorialUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.editorialUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$editorialPayload>
          }
          aggregate: {
            args: Prisma.EditorialAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEditorial>
          }
          groupBy: {
            args: Prisma.editorialGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EditorialGroupByOutputType>[]
          }
          count: {
            args: Prisma.editorialCountArgs<ExtArgs>,
            result: $Utils.Optional<EditorialCountAggregateOutputType> | number
          }
        }
      }
      pl_libre: {
        payload: Prisma.$pl_librePayload<ExtArgs>
        fields: Prisma.pl_libreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pl_libreFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pl_librePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pl_libreFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pl_librePayload>
          }
          findFirst: {
            args: Prisma.pl_libreFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pl_librePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pl_libreFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pl_librePayload>
          }
          findMany: {
            args: Prisma.pl_libreFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pl_librePayload>[]
          }
          create: {
            args: Prisma.pl_libreCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pl_librePayload>
          }
          createMany: {
            args: Prisma.pl_libreCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.pl_libreDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pl_librePayload>
          }
          update: {
            args: Prisma.pl_libreUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pl_librePayload>
          }
          deleteMany: {
            args: Prisma.pl_libreDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.pl_libreUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.pl_libreUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pl_librePayload>
          }
          aggregate: {
            args: Prisma.Pl_libreAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePl_libre>
          }
          groupBy: {
            args: Prisma.pl_libreGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Pl_libreGroupByOutputType>[]
          }
          count: {
            args: Prisma.pl_libreCountArgs<ExtArgs>,
            result: $Utils.Optional<Pl_libreCountAggregateOutputType> | number
          }
        }
      }
      pl_nl: {
        payload: Prisma.$pl_nlPayload<ExtArgs>
        fields: Prisma.pl_nlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pl_nlFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pl_nlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pl_nlFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pl_nlPayload>
          }
          findFirst: {
            args: Prisma.pl_nlFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pl_nlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pl_nlFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pl_nlPayload>
          }
          findMany: {
            args: Prisma.pl_nlFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pl_nlPayload>[]
          }
          create: {
            args: Prisma.pl_nlCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pl_nlPayload>
          }
          createMany: {
            args: Prisma.pl_nlCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.pl_nlDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pl_nlPayload>
          }
          update: {
            args: Prisma.pl_nlUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pl_nlPayload>
          }
          deleteMany: {
            args: Prisma.pl_nlDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.pl_nlUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.pl_nlUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pl_nlPayload>
          }
          aggregate: {
            args: Prisma.Pl_nlAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePl_nl>
          }
          groupBy: {
            args: Prisma.pl_nlGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Pl_nlGroupByOutputType>[]
          }
          count: {
            args: Prisma.pl_nlCountArgs<ExtArgs>,
            result: $Utils.Optional<Pl_nlCountAggregateOutputType> | number
          }
        }
      }
      comentario: {
        payload: Prisma.$comentarioPayload<ExtArgs>
        fields: Prisma.comentarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.comentarioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.comentarioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          findFirst: {
            args: Prisma.comentarioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.comentarioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          findMany: {
            args: Prisma.comentarioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>[]
          }
          create: {
            args: Prisma.comentarioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          createMany: {
            args: Prisma.comentarioCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.comentarioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          update: {
            args: Prisma.comentarioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          deleteMany: {
            args: Prisma.comentarioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.comentarioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.comentarioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          aggregate: {
            args: Prisma.ComentarioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateComentario>
          }
          groupBy: {
            args: Prisma.comentarioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ComentarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.comentarioCountArgs<ExtArgs>,
            result: $Utils.Optional<ComentarioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    genero: number
    pl_libre: number
    pl_nl: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genero?: boolean | CategoriaCountOutputTypeCountGeneroArgs
    pl_libre?: boolean | CategoriaCountOutputTypeCountPl_libreArgs
    pl_nl?: boolean | CategoriaCountOutputTypeCountPl_nlArgs
  }

  // Custom InputTypes

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountGeneroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: generoWhereInput
  }


  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountPl_libreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pl_libreWhereInput
  }


  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountPl_nlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pl_nlWhereInput
  }



  /**
   * Count Type EtiquetaCountOutputType
   */

  export type EtiquetaCountOutputType = {
    pl_libre: number
  }

  export type EtiquetaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pl_libre?: boolean | EtiquetaCountOutputTypeCountPl_libreArgs
  }

  // Custom InputTypes

  /**
   * EtiquetaCountOutputType without action
   */
  export type EtiquetaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtiquetaCountOutputType
     */
    select?: EtiquetaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EtiquetaCountOutputType without action
   */
  export type EtiquetaCountOutputTypeCountPl_libreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pl_libreWhereInput
  }



  /**
   * Count Type GeneroCountOutputType
   */

  export type GeneroCountOutputType = {
    pl_nl: number
  }

  export type GeneroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pl_nl?: boolean | GeneroCountOutputTypeCountPl_nlArgs
  }

  // Custom InputTypes

  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroCountOutputType
     */
    select?: GeneroCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeCountPl_nlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pl_nlWhereInput
  }



  /**
   * Count Type PersonaCountOutputType
   */

  export type PersonaCountOutputType = {
    usuario: number
  }

  export type PersonaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | PersonaCountOutputTypeCountUsuarioArgs
  }

  // Custom InputTypes

  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaCountOutputType
     */
    select?: PersonaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeCountUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
  }



  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    autor: number
    seguido_seguido_id_user_seguidorTousuario: number
    seguido_seguido_id_user_seguidoTousuario: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioCountOutputTypeCountAutorArgs
    seguido_seguido_id_user_seguidorTousuario?: boolean | UsuarioCountOutputTypeCountSeguido_seguido_id_user_seguidorTousuarioArgs
    seguido_seguido_id_user_seguidoTousuario?: boolean | UsuarioCountOutputTypeCountSeguido_seguido_id_user_seguidoTousuarioArgs
  }

  // Custom InputTypes

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: autorWhereInput
  }


  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountSeguido_seguido_id_user_seguidorTousuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seguidoWhereInput
  }


  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountSeguido_seguido_id_user_seguidoTousuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seguidoWhereInput
  }



  /**
   * Count Type AutorCountOutputType
   */

  export type AutorCountOutputType = {
    comentario: number
    editorial: number
    reaccion: number
  }

  export type AutorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comentario?: boolean | AutorCountOutputTypeCountComentarioArgs
    editorial?: boolean | AutorCountOutputTypeCountEditorialArgs
    reaccion?: boolean | AutorCountOutputTypeCountReaccionArgs
  }

  // Custom InputTypes

  /**
   * AutorCountOutputType without action
   */
  export type AutorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutorCountOutputType
     */
    select?: AutorCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AutorCountOutputType without action
   */
  export type AutorCountOutputTypeCountComentarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comentarioWhereInput
  }


  /**
   * AutorCountOutputType without action
   */
  export type AutorCountOutputTypeCountEditorialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: editorialWhereInput
  }


  /**
   * AutorCountOutputType without action
   */
  export type AutorCountOutputTypeCountReaccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reaccionWhereInput
  }



  /**
   * Count Type PaisCountOutputType
   */

  export type PaisCountOutputType = {
    autor: number
  }

  export type PaisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | PaisCountOutputTypeCountAutorArgs
  }

  // Custom InputTypes

  /**
   * PaisCountOutputType without action
   */
  export type PaisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaisCountOutputType
     */
    select?: PaisCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PaisCountOutputType without action
   */
  export type PaisCountOutputTypeCountAutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: autorWhereInput
  }



  /**
   * Count Type Tipo_seguimientoCountOutputType
   */

  export type Tipo_seguimientoCountOutputType = {
    seguido: number
  }

  export type Tipo_seguimientoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seguido?: boolean | Tipo_seguimientoCountOutputTypeCountSeguidoArgs
  }

  // Custom InputTypes

  /**
   * Tipo_seguimientoCountOutputType without action
   */
  export type Tipo_seguimientoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_seguimientoCountOutputType
     */
    select?: Tipo_seguimientoCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Tipo_seguimientoCountOutputType without action
   */
  export type Tipo_seguimientoCountOutputTypeCountSeguidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seguidoWhereInput
  }



  /**
   * Count Type EditorialCountOutputType
   */

  export type EditorialCountOutputType = {
    cap_pl_ln: number
    comentario: number
    pl_libre: number
  }

  export type EditorialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cap_pl_ln?: boolean | EditorialCountOutputTypeCountCap_pl_lnArgs
    comentario?: boolean | EditorialCountOutputTypeCountComentarioArgs
    pl_libre?: boolean | EditorialCountOutputTypeCountPl_libreArgs
  }

  // Custom InputTypes

  /**
   * EditorialCountOutputType without action
   */
  export type EditorialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialCountOutputType
     */
    select?: EditorialCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EditorialCountOutputType without action
   */
  export type EditorialCountOutputTypeCountCap_pl_lnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cap_pl_lnWhereInput
  }


  /**
   * EditorialCountOutputType without action
   */
  export type EditorialCountOutputTypeCountComentarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comentarioWhereInput
  }


  /**
   * EditorialCountOutputType without action
   */
  export type EditorialCountOutputTypeCountPl_libreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pl_libreWhereInput
  }



  /**
   * Count Type Pl_nlCountOutputType
   */

  export type Pl_nlCountOutputType = {
    cap_pl_ln: number
  }

  export type Pl_nlCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cap_pl_ln?: boolean | Pl_nlCountOutputTypeCountCap_pl_lnArgs
  }

  // Custom InputTypes

  /**
   * Pl_nlCountOutputType without action
   */
  export type Pl_nlCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pl_nlCountOutputType
     */
    select?: Pl_nlCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Pl_nlCountOutputType without action
   */
  export type Pl_nlCountOutputTypeCountCap_pl_lnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cap_pl_lnWhereInput
  }



  /**
   * Models
   */

  /**
   * Model categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id_categoria: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id_categoria: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id_categoria: number | null
    descripcion: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id_categoria: number | null
    descripcion: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id_categoria: number
    descripcion: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id_categoria?: true
  }

  export type CategoriaSumAggregateInputType = {
    id_categoria?: true
  }

  export type CategoriaMinAggregateInputType = {
    id_categoria?: true
    descripcion?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id_categoria?: true
    descripcion?: true
  }

  export type CategoriaCountAggregateInputType = {
    id_categoria?: true
    descripcion?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categoria to aggregate.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type categoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriaWhereInput
    orderBy?: categoriaOrderByWithAggregationInput | categoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: categoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id_categoria: number
    descripcion: string | null
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends categoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type categoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    descripcion?: boolean
    genero?: boolean | categoria$generoArgs<ExtArgs>
    pl_libre?: boolean | categoria$pl_libreArgs<ExtArgs>
    pl_nl?: boolean | categoria$pl_nlArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type categoriaSelectScalar = {
    id_categoria?: boolean
    descripcion?: boolean
  }

  export type categoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genero?: boolean | categoria$generoArgs<ExtArgs>
    pl_libre?: boolean | categoria$pl_libreArgs<ExtArgs>
    pl_nl?: boolean | categoria$pl_nlArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $categoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categoria"
    objects: {
      genero: Prisma.$generoPayload<ExtArgs>[]
      pl_libre: Prisma.$pl_librePayload<ExtArgs>[]
      pl_nl: Prisma.$pl_nlPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_categoria: number
      descripcion: string | null
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }


  type categoriaGetPayload<S extends boolean | null | undefined | categoriaDefaultArgs> = $Result.GetResult<Prisma.$categoriaPayload, S>

  type categoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<categoriaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface categoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categoria'], meta: { name: 'categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {categoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends categoriaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, categoriaFindUniqueArgs<ExtArgs>>
    ): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Categoria that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {categoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends categoriaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, categoriaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends categoriaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, categoriaFindFirstArgs<ExtArgs>>
    ): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends categoriaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, categoriaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id_categoria`
     * const categoriaWithId_categoriaOnly = await prisma.categoria.findMany({ select: { id_categoria: true } })
     * 
    **/
    findMany<T extends categoriaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoriaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Categoria.
     * @param {categoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
    **/
    create<T extends categoriaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, categoriaCreateArgs<ExtArgs>>
    ): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categorias.
     *     @param {categoriaCreateManyArgs} args - Arguments to create many Categorias.
     *     @example
     *     // Create many Categorias
     *     const categoria = await prisma.categoria.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends categoriaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoriaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {categoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
    **/
    delete<T extends categoriaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, categoriaDeleteArgs<ExtArgs>>
    ): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Categoria.
     * @param {categoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends categoriaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, categoriaUpdateArgs<ExtArgs>>
    ): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categorias.
     * @param {categoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends categoriaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoriaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends categoriaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, categoriaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {categoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
    **/
    upsert<T extends categoriaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, categoriaUpsertArgs<ExtArgs>>
    ): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriaCountArgs>(
      args?: Subset<T, categoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriaGroupByArgs['orderBy'] }
        : { orderBy?: categoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categoria model
   */
  readonly fields: categoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    genero<T extends categoria$generoArgs<ExtArgs> = {}>(args?: Subset<T, categoria$generoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, 'findMany'> | Null>;

    pl_libre<T extends categoria$pl_libreArgs<ExtArgs> = {}>(args?: Subset<T, categoria$pl_libreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pl_librePayload<ExtArgs>, T, 'findMany'> | Null>;

    pl_nl<T extends categoria$pl_nlArgs<ExtArgs> = {}>(args?: Subset<T, categoria$pl_nlArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pl_nlPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the categoria model
   */ 
  interface categoriaFieldRefs {
    readonly id_categoria: FieldRef<"categoria", 'Int'>
    readonly descripcion: FieldRef<"categoria", 'String'>
  }
    

  // Custom InputTypes

  /**
   * categoria findUnique
   */
  export type categoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }


  /**
   * categoria findUniqueOrThrow
   */
  export type categoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }


  /**
   * categoria findFirst
   */
  export type categoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }


  /**
   * categoria findFirstOrThrow
   */
  export type categoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }


  /**
   * categoria findMany
   */
  export type categoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }


  /**
   * categoria create
   */
  export type categoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a categoria.
     */
    data?: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
  }


  /**
   * categoria createMany
   */
  export type categoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorias.
     */
    data: categoriaCreateManyInput | categoriaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * categoria update
   */
  export type categoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a categoria.
     */
    data: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
    /**
     * Choose, which categoria to update.
     */
    where: categoriaWhereUniqueInput
  }


  /**
   * categoria updateMany
   */
  export type categoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriaUpdateManyMutationInput, categoriaUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriaWhereInput
  }


  /**
   * categoria upsert
   */
  export type categoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the categoria to update in case it exists.
     */
    where: categoriaWhereUniqueInput
    /**
     * In case the categoria found by the `where` argument doesn't exist, create a new categoria with this data.
     */
    create: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
    /**
     * In case the categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
  }


  /**
   * categoria delete
   */
  export type categoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter which categoria to delete.
     */
    where: categoriaWhereUniqueInput
  }


  /**
   * categoria deleteMany
   */
  export type categoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriaWhereInput
  }


  /**
   * categoria.genero
   */
  export type categoria$generoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: generoInclude<ExtArgs> | null
    where?: generoWhereInput
    orderBy?: generoOrderByWithRelationInput | generoOrderByWithRelationInput[]
    cursor?: generoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }


  /**
   * categoria.pl_libre
   */
  export type categoria$pl_libreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_libre
     */
    select?: pl_libreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_libreInclude<ExtArgs> | null
    where?: pl_libreWhereInput
    orderBy?: pl_libreOrderByWithRelationInput | pl_libreOrderByWithRelationInput[]
    cursor?: pl_libreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pl_libreScalarFieldEnum | Pl_libreScalarFieldEnum[]
  }


  /**
   * categoria.pl_nl
   */
  export type categoria$pl_nlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_nl
     */
    select?: pl_nlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_nlInclude<ExtArgs> | null
    where?: pl_nlWhereInput
    orderBy?: pl_nlOrderByWithRelationInput | pl_nlOrderByWithRelationInput[]
    cursor?: pl_nlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pl_nlScalarFieldEnum | Pl_nlScalarFieldEnum[]
  }


  /**
   * categoria without action
   */
  export type categoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaInclude<ExtArgs> | null
  }



  /**
   * Model etiqueta
   */

  export type AggregateEtiqueta = {
    _count: EtiquetaCountAggregateOutputType | null
    _avg: EtiquetaAvgAggregateOutputType | null
    _sum: EtiquetaSumAggregateOutputType | null
    _min: EtiquetaMinAggregateOutputType | null
    _max: EtiquetaMaxAggregateOutputType | null
  }

  export type EtiquetaAvgAggregateOutputType = {
    id_etiqueta: number | null
  }

  export type EtiquetaSumAggregateOutputType = {
    id_etiqueta: number | null
  }

  export type EtiquetaMinAggregateOutputType = {
    id_etiqueta: number | null
    nombre: string | null
  }

  export type EtiquetaMaxAggregateOutputType = {
    id_etiqueta: number | null
    nombre: string | null
  }

  export type EtiquetaCountAggregateOutputType = {
    id_etiqueta: number
    nombre: number
    _all: number
  }


  export type EtiquetaAvgAggregateInputType = {
    id_etiqueta?: true
  }

  export type EtiquetaSumAggregateInputType = {
    id_etiqueta?: true
  }

  export type EtiquetaMinAggregateInputType = {
    id_etiqueta?: true
    nombre?: true
  }

  export type EtiquetaMaxAggregateInputType = {
    id_etiqueta?: true
    nombre?: true
  }

  export type EtiquetaCountAggregateInputType = {
    id_etiqueta?: true
    nombre?: true
    _all?: true
  }

  export type EtiquetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which etiqueta to aggregate.
     */
    where?: etiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of etiquetas to fetch.
     */
    orderBy?: etiquetaOrderByWithRelationInput | etiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: etiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` etiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` etiquetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned etiquetas
    **/
    _count?: true | EtiquetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EtiquetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EtiquetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EtiquetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EtiquetaMaxAggregateInputType
  }

  export type GetEtiquetaAggregateType<T extends EtiquetaAggregateArgs> = {
        [P in keyof T & keyof AggregateEtiqueta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEtiqueta[P]>
      : GetScalarType<T[P], AggregateEtiqueta[P]>
  }




  export type etiquetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: etiquetaWhereInput
    orderBy?: etiquetaOrderByWithAggregationInput | etiquetaOrderByWithAggregationInput[]
    by: EtiquetaScalarFieldEnum[] | EtiquetaScalarFieldEnum
    having?: etiquetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EtiquetaCountAggregateInputType | true
    _avg?: EtiquetaAvgAggregateInputType
    _sum?: EtiquetaSumAggregateInputType
    _min?: EtiquetaMinAggregateInputType
    _max?: EtiquetaMaxAggregateInputType
  }

  export type EtiquetaGroupByOutputType = {
    id_etiqueta: number
    nombre: string | null
    _count: EtiquetaCountAggregateOutputType | null
    _avg: EtiquetaAvgAggregateOutputType | null
    _sum: EtiquetaSumAggregateOutputType | null
    _min: EtiquetaMinAggregateOutputType | null
    _max: EtiquetaMaxAggregateOutputType | null
  }

  type GetEtiquetaGroupByPayload<T extends etiquetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EtiquetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EtiquetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EtiquetaGroupByOutputType[P]>
            : GetScalarType<T[P], EtiquetaGroupByOutputType[P]>
        }
      >
    >


  export type etiquetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_etiqueta?: boolean
    nombre?: boolean
    pl_libre?: boolean | etiqueta$pl_libreArgs<ExtArgs>
    _count?: boolean | EtiquetaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etiqueta"]>

  export type etiquetaSelectScalar = {
    id_etiqueta?: boolean
    nombre?: boolean
  }

  export type etiquetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pl_libre?: boolean | etiqueta$pl_libreArgs<ExtArgs>
    _count?: boolean | EtiquetaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $etiquetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "etiqueta"
    objects: {
      pl_libre: Prisma.$pl_librePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_etiqueta: number
      nombre: string | null
    }, ExtArgs["result"]["etiqueta"]>
    composites: {}
  }


  type etiquetaGetPayload<S extends boolean | null | undefined | etiquetaDefaultArgs> = $Result.GetResult<Prisma.$etiquetaPayload, S>

  type etiquetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<etiquetaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EtiquetaCountAggregateInputType | true
    }

  export interface etiquetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['etiqueta'], meta: { name: 'etiqueta' } }
    /**
     * Find zero or one Etiqueta that matches the filter.
     * @param {etiquetaFindUniqueArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends etiquetaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, etiquetaFindUniqueArgs<ExtArgs>>
    ): Prisma__etiquetaClient<$Result.GetResult<Prisma.$etiquetaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Etiqueta that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {etiquetaFindUniqueOrThrowArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends etiquetaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, etiquetaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__etiquetaClient<$Result.GetResult<Prisma.$etiquetaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Etiqueta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {etiquetaFindFirstArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends etiquetaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, etiquetaFindFirstArgs<ExtArgs>>
    ): Prisma__etiquetaClient<$Result.GetResult<Prisma.$etiquetaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Etiqueta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {etiquetaFindFirstOrThrowArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends etiquetaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, etiquetaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__etiquetaClient<$Result.GetResult<Prisma.$etiquetaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Etiquetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {etiquetaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Etiquetas
     * const etiquetas = await prisma.etiqueta.findMany()
     * 
     * // Get first 10 Etiquetas
     * const etiquetas = await prisma.etiqueta.findMany({ take: 10 })
     * 
     * // Only select the `id_etiqueta`
     * const etiquetaWithId_etiquetaOnly = await prisma.etiqueta.findMany({ select: { id_etiqueta: true } })
     * 
    **/
    findMany<T extends etiquetaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, etiquetaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$etiquetaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Etiqueta.
     * @param {etiquetaCreateArgs} args - Arguments to create a Etiqueta.
     * @example
     * // Create one Etiqueta
     * const Etiqueta = await prisma.etiqueta.create({
     *   data: {
     *     // ... data to create a Etiqueta
     *   }
     * })
     * 
    **/
    create<T extends etiquetaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, etiquetaCreateArgs<ExtArgs>>
    ): Prisma__etiquetaClient<$Result.GetResult<Prisma.$etiquetaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Etiquetas.
     *     @param {etiquetaCreateManyArgs} args - Arguments to create many Etiquetas.
     *     @example
     *     // Create many Etiquetas
     *     const etiqueta = await prisma.etiqueta.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends etiquetaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, etiquetaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Etiqueta.
     * @param {etiquetaDeleteArgs} args - Arguments to delete one Etiqueta.
     * @example
     * // Delete one Etiqueta
     * const Etiqueta = await prisma.etiqueta.delete({
     *   where: {
     *     // ... filter to delete one Etiqueta
     *   }
     * })
     * 
    **/
    delete<T extends etiquetaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, etiquetaDeleteArgs<ExtArgs>>
    ): Prisma__etiquetaClient<$Result.GetResult<Prisma.$etiquetaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Etiqueta.
     * @param {etiquetaUpdateArgs} args - Arguments to update one Etiqueta.
     * @example
     * // Update one Etiqueta
     * const etiqueta = await prisma.etiqueta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends etiquetaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, etiquetaUpdateArgs<ExtArgs>>
    ): Prisma__etiquetaClient<$Result.GetResult<Prisma.$etiquetaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Etiquetas.
     * @param {etiquetaDeleteManyArgs} args - Arguments to filter Etiquetas to delete.
     * @example
     * // Delete a few Etiquetas
     * const { count } = await prisma.etiqueta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends etiquetaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, etiquetaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etiquetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {etiquetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Etiquetas
     * const etiqueta = await prisma.etiqueta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends etiquetaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, etiquetaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Etiqueta.
     * @param {etiquetaUpsertArgs} args - Arguments to update or create a Etiqueta.
     * @example
     * // Update or create a Etiqueta
     * const etiqueta = await prisma.etiqueta.upsert({
     *   create: {
     *     // ... data to create a Etiqueta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Etiqueta we want to update
     *   }
     * })
    **/
    upsert<T extends etiquetaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, etiquetaUpsertArgs<ExtArgs>>
    ): Prisma__etiquetaClient<$Result.GetResult<Prisma.$etiquetaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Etiquetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {etiquetaCountArgs} args - Arguments to filter Etiquetas to count.
     * @example
     * // Count the number of Etiquetas
     * const count = await prisma.etiqueta.count({
     *   where: {
     *     // ... the filter for the Etiquetas we want to count
     *   }
     * })
    **/
    count<T extends etiquetaCountArgs>(
      args?: Subset<T, etiquetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EtiquetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Etiqueta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EtiquetaAggregateArgs>(args: Subset<T, EtiquetaAggregateArgs>): Prisma.PrismaPromise<GetEtiquetaAggregateType<T>>

    /**
     * Group by Etiqueta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {etiquetaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends etiquetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: etiquetaGroupByArgs['orderBy'] }
        : { orderBy?: etiquetaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, etiquetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEtiquetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the etiqueta model
   */
  readonly fields: etiquetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for etiqueta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__etiquetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    pl_libre<T extends etiqueta$pl_libreArgs<ExtArgs> = {}>(args?: Subset<T, etiqueta$pl_libreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pl_librePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the etiqueta model
   */ 
  interface etiquetaFieldRefs {
    readonly id_etiqueta: FieldRef<"etiqueta", 'Int'>
    readonly nombre: FieldRef<"etiqueta", 'String'>
  }
    

  // Custom InputTypes

  /**
   * etiqueta findUnique
   */
  export type etiquetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the etiqueta
     */
    select?: etiquetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: etiquetaInclude<ExtArgs> | null
    /**
     * Filter, which etiqueta to fetch.
     */
    where: etiquetaWhereUniqueInput
  }


  /**
   * etiqueta findUniqueOrThrow
   */
  export type etiquetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the etiqueta
     */
    select?: etiquetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: etiquetaInclude<ExtArgs> | null
    /**
     * Filter, which etiqueta to fetch.
     */
    where: etiquetaWhereUniqueInput
  }


  /**
   * etiqueta findFirst
   */
  export type etiquetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the etiqueta
     */
    select?: etiquetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: etiquetaInclude<ExtArgs> | null
    /**
     * Filter, which etiqueta to fetch.
     */
    where?: etiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of etiquetas to fetch.
     */
    orderBy?: etiquetaOrderByWithRelationInput | etiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for etiquetas.
     */
    cursor?: etiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` etiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` etiquetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of etiquetas.
     */
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[]
  }


  /**
   * etiqueta findFirstOrThrow
   */
  export type etiquetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the etiqueta
     */
    select?: etiquetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: etiquetaInclude<ExtArgs> | null
    /**
     * Filter, which etiqueta to fetch.
     */
    where?: etiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of etiquetas to fetch.
     */
    orderBy?: etiquetaOrderByWithRelationInput | etiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for etiquetas.
     */
    cursor?: etiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` etiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` etiquetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of etiquetas.
     */
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[]
  }


  /**
   * etiqueta findMany
   */
  export type etiquetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the etiqueta
     */
    select?: etiquetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: etiquetaInclude<ExtArgs> | null
    /**
     * Filter, which etiquetas to fetch.
     */
    where?: etiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of etiquetas to fetch.
     */
    orderBy?: etiquetaOrderByWithRelationInput | etiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing etiquetas.
     */
    cursor?: etiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` etiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` etiquetas.
     */
    skip?: number
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[]
  }


  /**
   * etiqueta create
   */
  export type etiquetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the etiqueta
     */
    select?: etiquetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: etiquetaInclude<ExtArgs> | null
    /**
     * The data needed to create a etiqueta.
     */
    data?: XOR<etiquetaCreateInput, etiquetaUncheckedCreateInput>
  }


  /**
   * etiqueta createMany
   */
  export type etiquetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many etiquetas.
     */
    data: etiquetaCreateManyInput | etiquetaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * etiqueta update
   */
  export type etiquetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the etiqueta
     */
    select?: etiquetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: etiquetaInclude<ExtArgs> | null
    /**
     * The data needed to update a etiqueta.
     */
    data: XOR<etiquetaUpdateInput, etiquetaUncheckedUpdateInput>
    /**
     * Choose, which etiqueta to update.
     */
    where: etiquetaWhereUniqueInput
  }


  /**
   * etiqueta updateMany
   */
  export type etiquetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update etiquetas.
     */
    data: XOR<etiquetaUpdateManyMutationInput, etiquetaUncheckedUpdateManyInput>
    /**
     * Filter which etiquetas to update
     */
    where?: etiquetaWhereInput
  }


  /**
   * etiqueta upsert
   */
  export type etiquetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the etiqueta
     */
    select?: etiquetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: etiquetaInclude<ExtArgs> | null
    /**
     * The filter to search for the etiqueta to update in case it exists.
     */
    where: etiquetaWhereUniqueInput
    /**
     * In case the etiqueta found by the `where` argument doesn't exist, create a new etiqueta with this data.
     */
    create: XOR<etiquetaCreateInput, etiquetaUncheckedCreateInput>
    /**
     * In case the etiqueta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<etiquetaUpdateInput, etiquetaUncheckedUpdateInput>
  }


  /**
   * etiqueta delete
   */
  export type etiquetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the etiqueta
     */
    select?: etiquetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: etiquetaInclude<ExtArgs> | null
    /**
     * Filter which etiqueta to delete.
     */
    where: etiquetaWhereUniqueInput
  }


  /**
   * etiqueta deleteMany
   */
  export type etiquetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which etiquetas to delete
     */
    where?: etiquetaWhereInput
  }


  /**
   * etiqueta.pl_libre
   */
  export type etiqueta$pl_libreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_libre
     */
    select?: pl_libreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_libreInclude<ExtArgs> | null
    where?: pl_libreWhereInput
    orderBy?: pl_libreOrderByWithRelationInput | pl_libreOrderByWithRelationInput[]
    cursor?: pl_libreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pl_libreScalarFieldEnum | Pl_libreScalarFieldEnum[]
  }


  /**
   * etiqueta without action
   */
  export type etiquetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the etiqueta
     */
    select?: etiquetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: etiquetaInclude<ExtArgs> | null
  }



  /**
   * Model genero
   */

  export type AggregateGenero = {
    _count: GeneroCountAggregateOutputType | null
    _avg: GeneroAvgAggregateOutputType | null
    _sum: GeneroSumAggregateOutputType | null
    _min: GeneroMinAggregateOutputType | null
    _max: GeneroMaxAggregateOutputType | null
  }

  export type GeneroAvgAggregateOutputType = {
    id_genero: number | null
    id_categoria: number | null
  }

  export type GeneroSumAggregateOutputType = {
    id_genero: number | null
    id_categoria: number | null
  }

  export type GeneroMinAggregateOutputType = {
    id_genero: number | null
    id_categoria: number | null
    nombre: string | null
  }

  export type GeneroMaxAggregateOutputType = {
    id_genero: number | null
    id_categoria: number | null
    nombre: string | null
  }

  export type GeneroCountAggregateOutputType = {
    id_genero: number
    id_categoria: number
    nombre: number
    _all: number
  }


  export type GeneroAvgAggregateInputType = {
    id_genero?: true
    id_categoria?: true
  }

  export type GeneroSumAggregateInputType = {
    id_genero?: true
    id_categoria?: true
  }

  export type GeneroMinAggregateInputType = {
    id_genero?: true
    id_categoria?: true
    nombre?: true
  }

  export type GeneroMaxAggregateInputType = {
    id_genero?: true
    id_categoria?: true
    nombre?: true
  }

  export type GeneroCountAggregateInputType = {
    id_genero?: true
    id_categoria?: true
    nombre?: true
    _all?: true
  }

  export type GeneroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genero to aggregate.
     */
    where?: generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generos to fetch.
     */
    orderBy?: generoOrderByWithRelationInput | generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned generos
    **/
    _count?: true | GeneroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneroMaxAggregateInputType
  }

  export type GetGeneroAggregateType<T extends GeneroAggregateArgs> = {
        [P in keyof T & keyof AggregateGenero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenero[P]>
      : GetScalarType<T[P], AggregateGenero[P]>
  }




  export type generoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: generoWhereInput
    orderBy?: generoOrderByWithAggregationInput | generoOrderByWithAggregationInput[]
    by: GeneroScalarFieldEnum[] | GeneroScalarFieldEnum
    having?: generoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneroCountAggregateInputType | true
    _avg?: GeneroAvgAggregateInputType
    _sum?: GeneroSumAggregateInputType
    _min?: GeneroMinAggregateInputType
    _max?: GeneroMaxAggregateInputType
  }

  export type GeneroGroupByOutputType = {
    id_genero: number
    id_categoria: number | null
    nombre: string | null
    _count: GeneroCountAggregateOutputType | null
    _avg: GeneroAvgAggregateOutputType | null
    _sum: GeneroSumAggregateOutputType | null
    _min: GeneroMinAggregateOutputType | null
    _max: GeneroMaxAggregateOutputType | null
  }

  type GetGeneroGroupByPayload<T extends generoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneroGroupByOutputType[P]>
            : GetScalarType<T[P], GeneroGroupByOutputType[P]>
        }
      >
    >


  export type generoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_genero?: boolean
    id_categoria?: boolean
    nombre?: boolean
    categoria?: boolean | genero$categoriaArgs<ExtArgs>
    pl_nl?: boolean | genero$pl_nlArgs<ExtArgs>
    _count?: boolean | GeneroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genero"]>

  export type generoSelectScalar = {
    id_genero?: boolean
    id_categoria?: boolean
    nombre?: boolean
  }

  export type generoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | genero$categoriaArgs<ExtArgs>
    pl_nl?: boolean | genero$pl_nlArgs<ExtArgs>
    _count?: boolean | GeneroCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $generoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "genero"
    objects: {
      categoria: Prisma.$categoriaPayload<ExtArgs> | null
      pl_nl: Prisma.$pl_nlPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_genero: number
      id_categoria: number | null
      nombre: string | null
    }, ExtArgs["result"]["genero"]>
    composites: {}
  }


  type generoGetPayload<S extends boolean | null | undefined | generoDefaultArgs> = $Result.GetResult<Prisma.$generoPayload, S>

  type generoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<generoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GeneroCountAggregateInputType | true
    }

  export interface generoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['genero'], meta: { name: 'genero' } }
    /**
     * Find zero or one Genero that matches the filter.
     * @param {generoFindUniqueArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends generoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, generoFindUniqueArgs<ExtArgs>>
    ): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Genero that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {generoFindUniqueOrThrowArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends generoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, generoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Genero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generoFindFirstArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends generoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, generoFindFirstArgs<ExtArgs>>
    ): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Genero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generoFindFirstOrThrowArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends generoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, generoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Generos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Generos
     * const generos = await prisma.genero.findMany()
     * 
     * // Get first 10 Generos
     * const generos = await prisma.genero.findMany({ take: 10 })
     * 
     * // Only select the `id_genero`
     * const generoWithId_generoOnly = await prisma.genero.findMany({ select: { id_genero: true } })
     * 
    **/
    findMany<T extends generoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, generoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Genero.
     * @param {generoCreateArgs} args - Arguments to create a Genero.
     * @example
     * // Create one Genero
     * const Genero = await prisma.genero.create({
     *   data: {
     *     // ... data to create a Genero
     *   }
     * })
     * 
    **/
    create<T extends generoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, generoCreateArgs<ExtArgs>>
    ): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Generos.
     *     @param {generoCreateManyArgs} args - Arguments to create many Generos.
     *     @example
     *     // Create many Generos
     *     const genero = await prisma.genero.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends generoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, generoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genero.
     * @param {generoDeleteArgs} args - Arguments to delete one Genero.
     * @example
     * // Delete one Genero
     * const Genero = await prisma.genero.delete({
     *   where: {
     *     // ... filter to delete one Genero
     *   }
     * })
     * 
    **/
    delete<T extends generoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, generoDeleteArgs<ExtArgs>>
    ): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Genero.
     * @param {generoUpdateArgs} args - Arguments to update one Genero.
     * @example
     * // Update one Genero
     * const genero = await prisma.genero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends generoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, generoUpdateArgs<ExtArgs>>
    ): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Generos.
     * @param {generoDeleteManyArgs} args - Arguments to filter Generos to delete.
     * @example
     * // Delete a few Generos
     * const { count } = await prisma.genero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends generoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, generoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Generos
     * const genero = await prisma.genero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends generoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, generoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genero.
     * @param {generoUpsertArgs} args - Arguments to update or create a Genero.
     * @example
     * // Update or create a Genero
     * const genero = await prisma.genero.upsert({
     *   create: {
     *     // ... data to create a Genero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genero we want to update
     *   }
     * })
    **/
    upsert<T extends generoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, generoUpsertArgs<ExtArgs>>
    ): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generoCountArgs} args - Arguments to filter Generos to count.
     * @example
     * // Count the number of Generos
     * const count = await prisma.genero.count({
     *   where: {
     *     // ... the filter for the Generos we want to count
     *   }
     * })
    **/
    count<T extends generoCountArgs>(
      args?: Subset<T, generoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GeneroAggregateArgs>(args: Subset<T, GeneroAggregateArgs>): Prisma.PrismaPromise<GetGeneroAggregateType<T>>

    /**
     * Group by Genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends generoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: generoGroupByArgs['orderBy'] }
        : { orderBy?: generoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, generoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the genero model
   */
  readonly fields: generoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for genero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__generoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    categoria<T extends genero$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, genero$categoriaArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    pl_nl<T extends genero$pl_nlArgs<ExtArgs> = {}>(args?: Subset<T, genero$pl_nlArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pl_nlPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the genero model
   */ 
  interface generoFieldRefs {
    readonly id_genero: FieldRef<"genero", 'Int'>
    readonly id_categoria: FieldRef<"genero", 'Int'>
    readonly nombre: FieldRef<"genero", 'String'>
  }
    

  // Custom InputTypes

  /**
   * genero findUnique
   */
  export type generoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * Filter, which genero to fetch.
     */
    where: generoWhereUniqueInput
  }


  /**
   * genero findUniqueOrThrow
   */
  export type generoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * Filter, which genero to fetch.
     */
    where: generoWhereUniqueInput
  }


  /**
   * genero findFirst
   */
  export type generoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * Filter, which genero to fetch.
     */
    where?: generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generos to fetch.
     */
    orderBy?: generoOrderByWithRelationInput | generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for generos.
     */
    cursor?: generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of generos.
     */
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }


  /**
   * genero findFirstOrThrow
   */
  export type generoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * Filter, which genero to fetch.
     */
    where?: generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generos to fetch.
     */
    orderBy?: generoOrderByWithRelationInput | generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for generos.
     */
    cursor?: generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of generos.
     */
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }


  /**
   * genero findMany
   */
  export type generoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * Filter, which generos to fetch.
     */
    where?: generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generos to fetch.
     */
    orderBy?: generoOrderByWithRelationInput | generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing generos.
     */
    cursor?: generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generos.
     */
    skip?: number
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }


  /**
   * genero create
   */
  export type generoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * The data needed to create a genero.
     */
    data?: XOR<generoCreateInput, generoUncheckedCreateInput>
  }


  /**
   * genero createMany
   */
  export type generoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many generos.
     */
    data: generoCreateManyInput | generoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * genero update
   */
  export type generoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * The data needed to update a genero.
     */
    data: XOR<generoUpdateInput, generoUncheckedUpdateInput>
    /**
     * Choose, which genero to update.
     */
    where: generoWhereUniqueInput
  }


  /**
   * genero updateMany
   */
  export type generoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update generos.
     */
    data: XOR<generoUpdateManyMutationInput, generoUncheckedUpdateManyInput>
    /**
     * Filter which generos to update
     */
    where?: generoWhereInput
  }


  /**
   * genero upsert
   */
  export type generoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * The filter to search for the genero to update in case it exists.
     */
    where: generoWhereUniqueInput
    /**
     * In case the genero found by the `where` argument doesn't exist, create a new genero with this data.
     */
    create: XOR<generoCreateInput, generoUncheckedCreateInput>
    /**
     * In case the genero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<generoUpdateInput, generoUncheckedUpdateInput>
  }


  /**
   * genero delete
   */
  export type generoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * Filter which genero to delete.
     */
    where: generoWhereUniqueInput
  }


  /**
   * genero deleteMany
   */
  export type generoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which generos to delete
     */
    where?: generoWhereInput
  }


  /**
   * genero.categoria
   */
  export type genero$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaInclude<ExtArgs> | null
    where?: categoriaWhereInput
  }


  /**
   * genero.pl_nl
   */
  export type genero$pl_nlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_nl
     */
    select?: pl_nlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_nlInclude<ExtArgs> | null
    where?: pl_nlWhereInput
    orderBy?: pl_nlOrderByWithRelationInput | pl_nlOrderByWithRelationInput[]
    cursor?: pl_nlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pl_nlScalarFieldEnum | Pl_nlScalarFieldEnum[]
  }


  /**
   * genero without action
   */
  export type generoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: generoInclude<ExtArgs> | null
  }



  /**
   * Model persona
   */

  export type AggregatePersona = {
    _count: PersonaCountAggregateOutputType | null
    _avg: PersonaAvgAggregateOutputType | null
    _sum: PersonaSumAggregateOutputType | null
    _min: PersonaMinAggregateOutputType | null
    _max: PersonaMaxAggregateOutputType | null
  }

  export type PersonaAvgAggregateOutputType = {
    id_persona: number | null
  }

  export type PersonaSumAggregateOutputType = {
    id_persona: number | null
  }

  export type PersonaMinAggregateOutputType = {
    id_persona: number | null
    nombre: string | null
    apellido_paterno: string | null
    apellido_materno: string | null
  }

  export type PersonaMaxAggregateOutputType = {
    id_persona: number | null
    nombre: string | null
    apellido_paterno: string | null
    apellido_materno: string | null
  }

  export type PersonaCountAggregateOutputType = {
    id_persona: number
    nombre: number
    apellido_paterno: number
    apellido_materno: number
    _all: number
  }


  export type PersonaAvgAggregateInputType = {
    id_persona?: true
  }

  export type PersonaSumAggregateInputType = {
    id_persona?: true
  }

  export type PersonaMinAggregateInputType = {
    id_persona?: true
    nombre?: true
    apellido_paterno?: true
    apellido_materno?: true
  }

  export type PersonaMaxAggregateInputType = {
    id_persona?: true
    nombre?: true
    apellido_paterno?: true
    apellido_materno?: true
  }

  export type PersonaCountAggregateInputType = {
    id_persona?: true
    nombre?: true
    apellido_paterno?: true
    apellido_materno?: true
    _all?: true
  }

  export type PersonaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which persona to aggregate.
     */
    where?: personaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personas to fetch.
     */
    orderBy?: personaOrderByWithRelationInput | personaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: personaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned personas
    **/
    _count?: true | PersonaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonaMaxAggregateInputType
  }

  export type GetPersonaAggregateType<T extends PersonaAggregateArgs> = {
        [P in keyof T & keyof AggregatePersona]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersona[P]>
      : GetScalarType<T[P], AggregatePersona[P]>
  }




  export type personaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: personaWhereInput
    orderBy?: personaOrderByWithAggregationInput | personaOrderByWithAggregationInput[]
    by: PersonaScalarFieldEnum[] | PersonaScalarFieldEnum
    having?: personaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonaCountAggregateInputType | true
    _avg?: PersonaAvgAggregateInputType
    _sum?: PersonaSumAggregateInputType
    _min?: PersonaMinAggregateInputType
    _max?: PersonaMaxAggregateInputType
  }

  export type PersonaGroupByOutputType = {
    id_persona: number
    nombre: string | null
    apellido_paterno: string | null
    apellido_materno: string | null
    _count: PersonaCountAggregateOutputType | null
    _avg: PersonaAvgAggregateOutputType | null
    _sum: PersonaSumAggregateOutputType | null
    _min: PersonaMinAggregateOutputType | null
    _max: PersonaMaxAggregateOutputType | null
  }

  type GetPersonaGroupByPayload<T extends personaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonaGroupByOutputType[P]>
            : GetScalarType<T[P], PersonaGroupByOutputType[P]>
        }
      >
    >


  export type personaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_persona?: boolean
    nombre?: boolean
    apellido_paterno?: boolean
    apellido_materno?: boolean
    usuario?: boolean | persona$usuarioArgs<ExtArgs>
    _count?: boolean | PersonaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["persona"]>

  export type personaSelectScalar = {
    id_persona?: boolean
    nombre?: boolean
    apellido_paterno?: boolean
    apellido_materno?: boolean
  }

  export type personaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | persona$usuarioArgs<ExtArgs>
    _count?: boolean | PersonaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $personaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "persona"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_persona: number
      nombre: string | null
      apellido_paterno: string | null
      apellido_materno: string | null
    }, ExtArgs["result"]["persona"]>
    composites: {}
  }


  type personaGetPayload<S extends boolean | null | undefined | personaDefaultArgs> = $Result.GetResult<Prisma.$personaPayload, S>

  type personaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<personaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PersonaCountAggregateInputType | true
    }

  export interface personaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['persona'], meta: { name: 'persona' } }
    /**
     * Find zero or one Persona that matches the filter.
     * @param {personaFindUniqueArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends personaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, personaFindUniqueArgs<ExtArgs>>
    ): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Persona that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {personaFindUniqueOrThrowArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends personaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, personaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Persona that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaFindFirstArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends personaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, personaFindFirstArgs<ExtArgs>>
    ): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Persona that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaFindFirstOrThrowArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends personaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, personaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Personas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personas
     * const personas = await prisma.persona.findMany()
     * 
     * // Get first 10 Personas
     * const personas = await prisma.persona.findMany({ take: 10 })
     * 
     * // Only select the `id_persona`
     * const personaWithId_personaOnly = await prisma.persona.findMany({ select: { id_persona: true } })
     * 
    **/
    findMany<T extends personaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, personaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Persona.
     * @param {personaCreateArgs} args - Arguments to create a Persona.
     * @example
     * // Create one Persona
     * const Persona = await prisma.persona.create({
     *   data: {
     *     // ... data to create a Persona
     *   }
     * })
     * 
    **/
    create<T extends personaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, personaCreateArgs<ExtArgs>>
    ): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Personas.
     *     @param {personaCreateManyArgs} args - Arguments to create many Personas.
     *     @example
     *     // Create many Personas
     *     const persona = await prisma.persona.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends personaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, personaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Persona.
     * @param {personaDeleteArgs} args - Arguments to delete one Persona.
     * @example
     * // Delete one Persona
     * const Persona = await prisma.persona.delete({
     *   where: {
     *     // ... filter to delete one Persona
     *   }
     * })
     * 
    **/
    delete<T extends personaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, personaDeleteArgs<ExtArgs>>
    ): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Persona.
     * @param {personaUpdateArgs} args - Arguments to update one Persona.
     * @example
     * // Update one Persona
     * const persona = await prisma.persona.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends personaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, personaUpdateArgs<ExtArgs>>
    ): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Personas.
     * @param {personaDeleteManyArgs} args - Arguments to filter Personas to delete.
     * @example
     * // Delete a few Personas
     * const { count } = await prisma.persona.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends personaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, personaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personas
     * const persona = await prisma.persona.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends personaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, personaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Persona.
     * @param {personaUpsertArgs} args - Arguments to update or create a Persona.
     * @example
     * // Update or create a Persona
     * const persona = await prisma.persona.upsert({
     *   create: {
     *     // ... data to create a Persona
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Persona we want to update
     *   }
     * })
    **/
    upsert<T extends personaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, personaUpsertArgs<ExtArgs>>
    ): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaCountArgs} args - Arguments to filter Personas to count.
     * @example
     * // Count the number of Personas
     * const count = await prisma.persona.count({
     *   where: {
     *     // ... the filter for the Personas we want to count
     *   }
     * })
    **/
    count<T extends personaCountArgs>(
      args?: Subset<T, personaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Persona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonaAggregateArgs>(args: Subset<T, PersonaAggregateArgs>): Prisma.PrismaPromise<GetPersonaAggregateType<T>>

    /**
     * Group by Persona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends personaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: personaGroupByArgs['orderBy'] }
        : { orderBy?: personaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, personaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the persona model
   */
  readonly fields: personaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for persona.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__personaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    usuario<T extends persona$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, persona$usuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the persona model
   */ 
  interface personaFieldRefs {
    readonly id_persona: FieldRef<"persona", 'Int'>
    readonly nombre: FieldRef<"persona", 'String'>
    readonly apellido_paterno: FieldRef<"persona", 'String'>
    readonly apellido_materno: FieldRef<"persona", 'String'>
  }
    

  // Custom InputTypes

  /**
   * persona findUnique
   */
  export type personaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter, which persona to fetch.
     */
    where: personaWhereUniqueInput
  }


  /**
   * persona findUniqueOrThrow
   */
  export type personaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter, which persona to fetch.
     */
    where: personaWhereUniqueInput
  }


  /**
   * persona findFirst
   */
  export type personaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter, which persona to fetch.
     */
    where?: personaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personas to fetch.
     */
    orderBy?: personaOrderByWithRelationInput | personaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for personas.
     */
    cursor?: personaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of personas.
     */
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }


  /**
   * persona findFirstOrThrow
   */
  export type personaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter, which persona to fetch.
     */
    where?: personaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personas to fetch.
     */
    orderBy?: personaOrderByWithRelationInput | personaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for personas.
     */
    cursor?: personaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of personas.
     */
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }


  /**
   * persona findMany
   */
  export type personaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter, which personas to fetch.
     */
    where?: personaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personas to fetch.
     */
    orderBy?: personaOrderByWithRelationInput | personaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing personas.
     */
    cursor?: personaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personas.
     */
    skip?: number
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }


  /**
   * persona create
   */
  export type personaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * The data needed to create a persona.
     */
    data?: XOR<personaCreateInput, personaUncheckedCreateInput>
  }


  /**
   * persona createMany
   */
  export type personaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many personas.
     */
    data: personaCreateManyInput | personaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * persona update
   */
  export type personaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * The data needed to update a persona.
     */
    data: XOR<personaUpdateInput, personaUncheckedUpdateInput>
    /**
     * Choose, which persona to update.
     */
    where: personaWhereUniqueInput
  }


  /**
   * persona updateMany
   */
  export type personaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update personas.
     */
    data: XOR<personaUpdateManyMutationInput, personaUncheckedUpdateManyInput>
    /**
     * Filter which personas to update
     */
    where?: personaWhereInput
  }


  /**
   * persona upsert
   */
  export type personaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * The filter to search for the persona to update in case it exists.
     */
    where: personaWhereUniqueInput
    /**
     * In case the persona found by the `where` argument doesn't exist, create a new persona with this data.
     */
    create: XOR<personaCreateInput, personaUncheckedCreateInput>
    /**
     * In case the persona was found with the provided `where` argument, update it with this data.
     */
    update: XOR<personaUpdateInput, personaUncheckedUpdateInput>
  }


  /**
   * persona delete
   */
  export type personaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter which persona to delete.
     */
    where: personaWhereUniqueInput
  }


  /**
   * persona deleteMany
   */
  export type personaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which personas to delete
     */
    where?: personaWhereInput
  }


  /**
   * persona.usuario
   */
  export type persona$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    cursor?: usuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * persona without action
   */
  export type personaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: personaInclude<ExtArgs> | null
  }



  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
    id_persona: number | null
    id_estado: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
    id_persona: number | null
    id_estado: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    id_persona: number | null
    correo: string | null
    contrasenia: string | null
    verificacion_email: boolean | null
    id_estado: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    id_persona: number | null
    correo: string | null
    contrasenia: string | null
    verificacion_email: boolean | null
    id_estado: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    id_persona: number
    correo: number
    contrasenia: number
    verificacion_email: number
    id_estado: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
    id_persona?: true
    id_estado?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
    id_persona?: true
    id_estado?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    id_persona?: true
    correo?: true
    contrasenia?: true
    verificacion_email?: true
    id_estado?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    id_persona?: true
    correo?: true
    contrasenia?: true
    verificacion_email?: true
    id_estado?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    id_persona?: true
    correo?: true
    contrasenia?: true
    verificacion_email?: true
    id_estado?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    id_persona: number | null
    correo: string | null
    contrasenia: string | null
    verificacion_email: boolean | null
    id_estado: number | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    id_persona?: boolean
    correo?: boolean
    contrasenia?: boolean
    verificacion_email?: boolean
    id_estado?: boolean
    autor?: boolean | usuario$autorArgs<ExtArgs>
    seguido_seguido_id_user_seguidorTousuario?: boolean | usuario$seguido_seguido_id_user_seguidorTousuarioArgs<ExtArgs>
    seguido_seguido_id_user_seguidoTousuario?: boolean | usuario$seguido_seguido_id_user_seguidoTousuarioArgs<ExtArgs>
    persona?: boolean | usuario$personaArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectScalar = {
    id_usuario?: boolean
    id_persona?: boolean
    correo?: boolean
    contrasenia?: boolean
    verificacion_email?: boolean
    id_estado?: boolean
  }

  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | usuario$autorArgs<ExtArgs>
    seguido_seguido_id_user_seguidorTousuario?: boolean | usuario$seguido_seguido_id_user_seguidorTousuarioArgs<ExtArgs>
    seguido_seguido_id_user_seguidoTousuario?: boolean | usuario$seguido_seguido_id_user_seguidoTousuarioArgs<ExtArgs>
    persona?: boolean | usuario$personaArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      autor: Prisma.$autorPayload<ExtArgs>[]
      seguido_seguido_id_user_seguidorTousuario: Prisma.$seguidoPayload<ExtArgs>[]
      seguido_seguido_id_user_seguidoTousuario: Prisma.$seguidoPayload<ExtArgs>[]
      persona: Prisma.$personaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      id_persona: number | null
      correo: string | null
      contrasenia: string | null
      verificacion_email: boolean | null
      id_estado: number | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }


  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usuarioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>
    ): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usuarioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>
    ): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
    **/
    findMany<T extends usuarioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
    **/
    create<T extends usuarioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>
    ): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Usuarios.
     *     @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     *     @example
     *     // Create many Usuarios
     *     const usuario = await prisma.usuario.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usuarioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
    **/
    delete<T extends usuarioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>
    ): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usuarioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>
    ): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usuarioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usuarioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
    **/
    upsert<T extends usuarioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>
    ): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    autor<T extends usuario$autorArgs<ExtArgs> = {}>(args?: Subset<T, usuario$autorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, 'findMany'> | Null>;

    seguido_seguido_id_user_seguidorTousuario<T extends usuario$seguido_seguido_id_user_seguidorTousuarioArgs<ExtArgs> = {}>(args?: Subset<T, usuario$seguido_seguido_id_user_seguidorTousuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seguidoPayload<ExtArgs>, T, 'findMany'> | Null>;

    seguido_seguido_id_user_seguidoTousuario<T extends usuario$seguido_seguido_id_user_seguidoTousuarioArgs<ExtArgs> = {}>(args?: Subset<T, usuario$seguido_seguido_id_user_seguidoTousuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seguidoPayload<ExtArgs>, T, 'findMany'> | Null>;

    persona<T extends usuario$personaArgs<ExtArgs> = {}>(args?: Subset<T, usuario$personaArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the usuario model
   */ 
  interface usuarioFieldRefs {
    readonly id_usuario: FieldRef<"usuario", 'Int'>
    readonly id_persona: FieldRef<"usuario", 'Int'>
    readonly correo: FieldRef<"usuario", 'String'>
    readonly contrasenia: FieldRef<"usuario", 'String'>
    readonly verificacion_email: FieldRef<"usuario", 'Boolean'>
    readonly id_estado: FieldRef<"usuario", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }


  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }


  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data?: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }


  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }


  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
  }


  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }


  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }


  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
  }


  /**
   * usuario.autor
   */
  export type usuario$autorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: autorInclude<ExtArgs> | null
    where?: autorWhereInput
    orderBy?: autorOrderByWithRelationInput | autorOrderByWithRelationInput[]
    cursor?: autorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }


  /**
   * usuario.seguido_seguido_id_user_seguidorTousuario
   */
  export type usuario$seguido_seguido_id_user_seguidorTousuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguido
     */
    select?: seguidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seguidoInclude<ExtArgs> | null
    where?: seguidoWhereInput
    orderBy?: seguidoOrderByWithRelationInput | seguidoOrderByWithRelationInput[]
    cursor?: seguidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeguidoScalarFieldEnum | SeguidoScalarFieldEnum[]
  }


  /**
   * usuario.seguido_seguido_id_user_seguidoTousuario
   */
  export type usuario$seguido_seguido_id_user_seguidoTousuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguido
     */
    select?: seguidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seguidoInclude<ExtArgs> | null
    where?: seguidoWhereInput
    orderBy?: seguidoOrderByWithRelationInput | seguidoOrderByWithRelationInput[]
    cursor?: seguidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeguidoScalarFieldEnum | SeguidoScalarFieldEnum[]
  }


  /**
   * usuario.persona
   */
  export type usuario$personaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: personaInclude<ExtArgs> | null
    where?: personaWhereInput
  }


  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
  }



  /**
   * Model autor
   */

  export type AggregateAutor = {
    _count: AutorCountAggregateOutputType | null
    _avg: AutorAvgAggregateOutputType | null
    _sum: AutorSumAggregateOutputType | null
    _min: AutorMinAggregateOutputType | null
    _max: AutorMaxAggregateOutputType | null
  }

  export type AutorAvgAggregateOutputType = {
    id_autor: number | null
    id_pais: number | null
    id_usuario: number | null
  }

  export type AutorSumAggregateOutputType = {
    id_autor: number | null
    id_pais: number | null
    id_usuario: number | null
  }

  export type AutorMinAggregateOutputType = {
    id_autor: number | null
    id_pais: number | null
    id_usuario: number | null
    nick_name: string | null
    ocupacion: string | null
    descripcion: string | null
    foto_perfil: string | null
    foto_portada: string | null
  }

  export type AutorMaxAggregateOutputType = {
    id_autor: number | null
    id_pais: number | null
    id_usuario: number | null
    nick_name: string | null
    ocupacion: string | null
    descripcion: string | null
    foto_perfil: string | null
    foto_portada: string | null
  }

  export type AutorCountAggregateOutputType = {
    id_autor: number
    id_pais: number
    id_usuario: number
    nick_name: number
    ocupacion: number
    descripcion: number
    foto_perfil: number
    foto_portada: number
    _all: number
  }


  export type AutorAvgAggregateInputType = {
    id_autor?: true
    id_pais?: true
    id_usuario?: true
  }

  export type AutorSumAggregateInputType = {
    id_autor?: true
    id_pais?: true
    id_usuario?: true
  }

  export type AutorMinAggregateInputType = {
    id_autor?: true
    id_pais?: true
    id_usuario?: true
    nick_name?: true
    ocupacion?: true
    descripcion?: true
    foto_perfil?: true
    foto_portada?: true
  }

  export type AutorMaxAggregateInputType = {
    id_autor?: true
    id_pais?: true
    id_usuario?: true
    nick_name?: true
    ocupacion?: true
    descripcion?: true
    foto_perfil?: true
    foto_portada?: true
  }

  export type AutorCountAggregateInputType = {
    id_autor?: true
    id_pais?: true
    id_usuario?: true
    nick_name?: true
    ocupacion?: true
    descripcion?: true
    foto_perfil?: true
    foto_portada?: true
    _all?: true
  }

  export type AutorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which autor to aggregate.
     */
    where?: autorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of autors to fetch.
     */
    orderBy?: autorOrderByWithRelationInput | autorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: autorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned autors
    **/
    _count?: true | AutorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AutorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AutorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutorMaxAggregateInputType
  }

  export type GetAutorAggregateType<T extends AutorAggregateArgs> = {
        [P in keyof T & keyof AggregateAutor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutor[P]>
      : GetScalarType<T[P], AggregateAutor[P]>
  }




  export type autorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: autorWhereInput
    orderBy?: autorOrderByWithAggregationInput | autorOrderByWithAggregationInput[]
    by: AutorScalarFieldEnum[] | AutorScalarFieldEnum
    having?: autorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutorCountAggregateInputType | true
    _avg?: AutorAvgAggregateInputType
    _sum?: AutorSumAggregateInputType
    _min?: AutorMinAggregateInputType
    _max?: AutorMaxAggregateInputType
  }

  export type AutorGroupByOutputType = {
    id_autor: number
    id_pais: number | null
    id_usuario: number | null
    nick_name: string | null
    ocupacion: string | null
    descripcion: string | null
    foto_perfil: string | null
    foto_portada: string | null
    _count: AutorCountAggregateOutputType | null
    _avg: AutorAvgAggregateOutputType | null
    _sum: AutorSumAggregateOutputType | null
    _min: AutorMinAggregateOutputType | null
    _max: AutorMaxAggregateOutputType | null
  }

  type GetAutorGroupByPayload<T extends autorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutorGroupByOutputType[P]>
            : GetScalarType<T[P], AutorGroupByOutputType[P]>
        }
      >
    >


  export type autorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_autor?: boolean
    id_pais?: boolean
    id_usuario?: boolean
    nick_name?: boolean
    ocupacion?: boolean
    descripcion?: boolean
    foto_perfil?: boolean
    foto_portada?: boolean
    usuario?: boolean | autor$usuarioArgs<ExtArgs>
    pais?: boolean | autor$paisArgs<ExtArgs>
    comentario?: boolean | autor$comentarioArgs<ExtArgs>
    editorial?: boolean | autor$editorialArgs<ExtArgs>
    reaccion?: boolean | autor$reaccionArgs<ExtArgs>
    _count?: boolean | AutorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["autor"]>

  export type autorSelectScalar = {
    id_autor?: boolean
    id_pais?: boolean
    id_usuario?: boolean
    nick_name?: boolean
    ocupacion?: boolean
    descripcion?: boolean
    foto_perfil?: boolean
    foto_portada?: boolean
  }

  export type autorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | autor$usuarioArgs<ExtArgs>
    pais?: boolean | autor$paisArgs<ExtArgs>
    comentario?: boolean | autor$comentarioArgs<ExtArgs>
    editorial?: boolean | autor$editorialArgs<ExtArgs>
    reaccion?: boolean | autor$reaccionArgs<ExtArgs>
    _count?: boolean | AutorCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $autorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "autor"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs> | null
      pais: Prisma.$paisPayload<ExtArgs> | null
      comentario: Prisma.$comentarioPayload<ExtArgs>[]
      editorial: Prisma.$editorialPayload<ExtArgs>[]
      reaccion: Prisma.$reaccionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_autor: number
      id_pais: number | null
      id_usuario: number | null
      nick_name: string | null
      ocupacion: string | null
      descripcion: string | null
      foto_perfil: string | null
      foto_portada: string | null
    }, ExtArgs["result"]["autor"]>
    composites: {}
  }


  type autorGetPayload<S extends boolean | null | undefined | autorDefaultArgs> = $Result.GetResult<Prisma.$autorPayload, S>

  type autorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<autorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AutorCountAggregateInputType | true
    }

  export interface autorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['autor'], meta: { name: 'autor' } }
    /**
     * Find zero or one Autor that matches the filter.
     * @param {autorFindUniqueArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends autorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, autorFindUniqueArgs<ExtArgs>>
    ): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Autor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {autorFindUniqueOrThrowArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends autorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, autorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Autor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorFindFirstArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends autorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, autorFindFirstArgs<ExtArgs>>
    ): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Autor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorFindFirstOrThrowArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends autorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, autorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Autors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Autors
     * const autors = await prisma.autor.findMany()
     * 
     * // Get first 10 Autors
     * const autors = await prisma.autor.findMany({ take: 10 })
     * 
     * // Only select the `id_autor`
     * const autorWithId_autorOnly = await prisma.autor.findMany({ select: { id_autor: true } })
     * 
    **/
    findMany<T extends autorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, autorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Autor.
     * @param {autorCreateArgs} args - Arguments to create a Autor.
     * @example
     * // Create one Autor
     * const Autor = await prisma.autor.create({
     *   data: {
     *     // ... data to create a Autor
     *   }
     * })
     * 
    **/
    create<T extends autorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, autorCreateArgs<ExtArgs>>
    ): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Autors.
     *     @param {autorCreateManyArgs} args - Arguments to create many Autors.
     *     @example
     *     // Create many Autors
     *     const autor = await prisma.autor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends autorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, autorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Autor.
     * @param {autorDeleteArgs} args - Arguments to delete one Autor.
     * @example
     * // Delete one Autor
     * const Autor = await prisma.autor.delete({
     *   where: {
     *     // ... filter to delete one Autor
     *   }
     * })
     * 
    **/
    delete<T extends autorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, autorDeleteArgs<ExtArgs>>
    ): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Autor.
     * @param {autorUpdateArgs} args - Arguments to update one Autor.
     * @example
     * // Update one Autor
     * const autor = await prisma.autor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends autorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, autorUpdateArgs<ExtArgs>>
    ): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Autors.
     * @param {autorDeleteManyArgs} args - Arguments to filter Autors to delete.
     * @example
     * // Delete a few Autors
     * const { count } = await prisma.autor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends autorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, autorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Autors
     * const autor = await prisma.autor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends autorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, autorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Autor.
     * @param {autorUpsertArgs} args - Arguments to update or create a Autor.
     * @example
     * // Update or create a Autor
     * const autor = await prisma.autor.upsert({
     *   create: {
     *     // ... data to create a Autor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Autor we want to update
     *   }
     * })
    **/
    upsert<T extends autorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, autorUpsertArgs<ExtArgs>>
    ): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorCountArgs} args - Arguments to filter Autors to count.
     * @example
     * // Count the number of Autors
     * const count = await prisma.autor.count({
     *   where: {
     *     // ... the filter for the Autors we want to count
     *   }
     * })
    **/
    count<T extends autorCountArgs>(
      args?: Subset<T, autorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Autor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AutorAggregateArgs>(args: Subset<T, AutorAggregateArgs>): Prisma.PrismaPromise<GetAutorAggregateType<T>>

    /**
     * Group by Autor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends autorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: autorGroupByArgs['orderBy'] }
        : { orderBy?: autorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, autorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the autor model
   */
  readonly fields: autorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for autor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__autorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    usuario<T extends autor$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, autor$usuarioArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    pais<T extends autor$paisArgs<ExtArgs> = {}>(args?: Subset<T, autor$paisArgs<ExtArgs>>): Prisma__paisClient<$Result.GetResult<Prisma.$paisPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    comentario<T extends autor$comentarioArgs<ExtArgs> = {}>(args?: Subset<T, autor$comentarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, 'findMany'> | Null>;

    editorial<T extends autor$editorialArgs<ExtArgs> = {}>(args?: Subset<T, autor$editorialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, 'findMany'> | Null>;

    reaccion<T extends autor$reaccionArgs<ExtArgs> = {}>(args?: Subset<T, autor$reaccionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reaccionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the autor model
   */ 
  interface autorFieldRefs {
    readonly id_autor: FieldRef<"autor", 'Int'>
    readonly id_pais: FieldRef<"autor", 'Int'>
    readonly id_usuario: FieldRef<"autor", 'Int'>
    readonly nick_name: FieldRef<"autor", 'String'>
    readonly ocupacion: FieldRef<"autor", 'String'>
    readonly descripcion: FieldRef<"autor", 'String'>
    readonly foto_perfil: FieldRef<"autor", 'String'>
    readonly foto_portada: FieldRef<"autor", 'String'>
  }
    

  // Custom InputTypes

  /**
   * autor findUnique
   */
  export type autorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter, which autor to fetch.
     */
    where: autorWhereUniqueInput
  }


  /**
   * autor findUniqueOrThrow
   */
  export type autorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter, which autor to fetch.
     */
    where: autorWhereUniqueInput
  }


  /**
   * autor findFirst
   */
  export type autorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter, which autor to fetch.
     */
    where?: autorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of autors to fetch.
     */
    orderBy?: autorOrderByWithRelationInput | autorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for autors.
     */
    cursor?: autorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }


  /**
   * autor findFirstOrThrow
   */
  export type autorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter, which autor to fetch.
     */
    where?: autorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of autors to fetch.
     */
    orderBy?: autorOrderByWithRelationInput | autorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for autors.
     */
    cursor?: autorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }


  /**
   * autor findMany
   */
  export type autorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter, which autors to fetch.
     */
    where?: autorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of autors to fetch.
     */
    orderBy?: autorOrderByWithRelationInput | autorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing autors.
     */
    cursor?: autorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` autors.
     */
    skip?: number
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }


  /**
   * autor create
   */
  export type autorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * The data needed to create a autor.
     */
    data?: XOR<autorCreateInput, autorUncheckedCreateInput>
  }


  /**
   * autor createMany
   */
  export type autorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many autors.
     */
    data: autorCreateManyInput | autorCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * autor update
   */
  export type autorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * The data needed to update a autor.
     */
    data: XOR<autorUpdateInput, autorUncheckedUpdateInput>
    /**
     * Choose, which autor to update.
     */
    where: autorWhereUniqueInput
  }


  /**
   * autor updateMany
   */
  export type autorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update autors.
     */
    data: XOR<autorUpdateManyMutationInput, autorUncheckedUpdateManyInput>
    /**
     * Filter which autors to update
     */
    where?: autorWhereInput
  }


  /**
   * autor upsert
   */
  export type autorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * The filter to search for the autor to update in case it exists.
     */
    where: autorWhereUniqueInput
    /**
     * In case the autor found by the `where` argument doesn't exist, create a new autor with this data.
     */
    create: XOR<autorCreateInput, autorUncheckedCreateInput>
    /**
     * In case the autor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<autorUpdateInput, autorUncheckedUpdateInput>
  }


  /**
   * autor delete
   */
  export type autorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter which autor to delete.
     */
    where: autorWhereUniqueInput
  }


  /**
   * autor deleteMany
   */
  export type autorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which autors to delete
     */
    where?: autorWhereInput
  }


  /**
   * autor.usuario
   */
  export type autor$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
  }


  /**
   * autor.pais
   */
  export type autor$paisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paisInclude<ExtArgs> | null
    where?: paisWhereInput
  }


  /**
   * autor.comentario
   */
  export type autor$comentarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comentarioInclude<ExtArgs> | null
    where?: comentarioWhereInput
    orderBy?: comentarioOrderByWithRelationInput | comentarioOrderByWithRelationInput[]
    cursor?: comentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }


  /**
   * autor.editorial
   */
  export type autor$editorialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: editorialInclude<ExtArgs> | null
    where?: editorialWhereInput
    orderBy?: editorialOrderByWithRelationInput | editorialOrderByWithRelationInput[]
    cursor?: editorialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EditorialScalarFieldEnum | EditorialScalarFieldEnum[]
  }


  /**
   * autor.reaccion
   */
  export type autor$reaccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reaccion
     */
    select?: reaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reaccionInclude<ExtArgs> | null
    where?: reaccionWhereInput
    orderBy?: reaccionOrderByWithRelationInput | reaccionOrderByWithRelationInput[]
    cursor?: reaccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReaccionScalarFieldEnum | ReaccionScalarFieldEnum[]
  }


  /**
   * autor without action
   */
  export type autorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: autorInclude<ExtArgs> | null
  }



  /**
   * Model pais
   */

  export type AggregatePais = {
    _count: PaisCountAggregateOutputType | null
    _avg: PaisAvgAggregateOutputType | null
    _sum: PaisSumAggregateOutputType | null
    _min: PaisMinAggregateOutputType | null
    _max: PaisMaxAggregateOutputType | null
  }

  export type PaisAvgAggregateOutputType = {
    id_pais: number | null
  }

  export type PaisSumAggregateOutputType = {
    id_pais: number | null
  }

  export type PaisMinAggregateOutputType = {
    id_pais: number | null
    nombre: string | null
    code: string | null
  }

  export type PaisMaxAggregateOutputType = {
    id_pais: number | null
    nombre: string | null
    code: string | null
  }

  export type PaisCountAggregateOutputType = {
    id_pais: number
    nombre: number
    code: number
    _all: number
  }


  export type PaisAvgAggregateInputType = {
    id_pais?: true
  }

  export type PaisSumAggregateInputType = {
    id_pais?: true
  }

  export type PaisMinAggregateInputType = {
    id_pais?: true
    nombre?: true
    code?: true
  }

  export type PaisMaxAggregateInputType = {
    id_pais?: true
    nombre?: true
    code?: true
  }

  export type PaisCountAggregateInputType = {
    id_pais?: true
    nombre?: true
    code?: true
    _all?: true
  }

  export type PaisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pais to aggregate.
     */
    where?: paisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pais to fetch.
     */
    orderBy?: paisOrderByWithRelationInput | paisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pais
    **/
    _count?: true | PaisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaisMaxAggregateInputType
  }

  export type GetPaisAggregateType<T extends PaisAggregateArgs> = {
        [P in keyof T & keyof AggregatePais]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePais[P]>
      : GetScalarType<T[P], AggregatePais[P]>
  }




  export type paisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paisWhereInput
    orderBy?: paisOrderByWithAggregationInput | paisOrderByWithAggregationInput[]
    by: PaisScalarFieldEnum[] | PaisScalarFieldEnum
    having?: paisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaisCountAggregateInputType | true
    _avg?: PaisAvgAggregateInputType
    _sum?: PaisSumAggregateInputType
    _min?: PaisMinAggregateInputType
    _max?: PaisMaxAggregateInputType
  }

  export type PaisGroupByOutputType = {
    id_pais: number
    nombre: string | null
    code: string | null
    _count: PaisCountAggregateOutputType | null
    _avg: PaisAvgAggregateOutputType | null
    _sum: PaisSumAggregateOutputType | null
    _min: PaisMinAggregateOutputType | null
    _max: PaisMaxAggregateOutputType | null
  }

  type GetPaisGroupByPayload<T extends paisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaisGroupByOutputType[P]>
            : GetScalarType<T[P], PaisGroupByOutputType[P]>
        }
      >
    >


  export type paisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pais?: boolean
    nombre?: boolean
    code?: boolean
    autor?: boolean | pais$autorArgs<ExtArgs>
    _count?: boolean | PaisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pais"]>

  export type paisSelectScalar = {
    id_pais?: boolean
    nombre?: boolean
    code?: boolean
  }

  export type paisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | pais$autorArgs<ExtArgs>
    _count?: boolean | PaisCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $paisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pais"
    objects: {
      autor: Prisma.$autorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pais: number
      nombre: string | null
      code: string | null
    }, ExtArgs["result"]["pais"]>
    composites: {}
  }


  type paisGetPayload<S extends boolean | null | undefined | paisDefaultArgs> = $Result.GetResult<Prisma.$paisPayload, S>

  type paisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<paisFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaisCountAggregateInputType | true
    }

  export interface paisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pais'], meta: { name: 'pais' } }
    /**
     * Find zero or one Pais that matches the filter.
     * @param {paisFindUniqueArgs} args - Arguments to find a Pais
     * @example
     * // Get one Pais
     * const pais = await prisma.pais.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends paisFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, paisFindUniqueArgs<ExtArgs>>
    ): Prisma__paisClient<$Result.GetResult<Prisma.$paisPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Pais that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {paisFindUniqueOrThrowArgs} args - Arguments to find a Pais
     * @example
     * // Get one Pais
     * const pais = await prisma.pais.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends paisFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, paisFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__paisClient<$Result.GetResult<Prisma.$paisPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Pais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paisFindFirstArgs} args - Arguments to find a Pais
     * @example
     * // Get one Pais
     * const pais = await prisma.pais.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends paisFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, paisFindFirstArgs<ExtArgs>>
    ): Prisma__paisClient<$Result.GetResult<Prisma.$paisPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Pais that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paisFindFirstOrThrowArgs} args - Arguments to find a Pais
     * @example
     * // Get one Pais
     * const pais = await prisma.pais.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends paisFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, paisFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__paisClient<$Result.GetResult<Prisma.$paisPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paisFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pais
     * const pais = await prisma.pais.findMany()
     * 
     * // Get first 10 Pais
     * const pais = await prisma.pais.findMany({ take: 10 })
     * 
     * // Only select the `id_pais`
     * const paisWithId_paisOnly = await prisma.pais.findMany({ select: { id_pais: true } })
     * 
    **/
    findMany<T extends paisFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paisFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paisPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Pais.
     * @param {paisCreateArgs} args - Arguments to create a Pais.
     * @example
     * // Create one Pais
     * const Pais = await prisma.pais.create({
     *   data: {
     *     // ... data to create a Pais
     *   }
     * })
     * 
    **/
    create<T extends paisCreateArgs<ExtArgs>>(
      args: SelectSubset<T, paisCreateArgs<ExtArgs>>
    ): Prisma__paisClient<$Result.GetResult<Prisma.$paisPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pais.
     *     @param {paisCreateManyArgs} args - Arguments to create many Pais.
     *     @example
     *     // Create many Pais
     *     const pais = await prisma.pais.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends paisCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paisCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pais.
     * @param {paisDeleteArgs} args - Arguments to delete one Pais.
     * @example
     * // Delete one Pais
     * const Pais = await prisma.pais.delete({
     *   where: {
     *     // ... filter to delete one Pais
     *   }
     * })
     * 
    **/
    delete<T extends paisDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, paisDeleteArgs<ExtArgs>>
    ): Prisma__paisClient<$Result.GetResult<Prisma.$paisPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Pais.
     * @param {paisUpdateArgs} args - Arguments to update one Pais.
     * @example
     * // Update one Pais
     * const pais = await prisma.pais.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends paisUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, paisUpdateArgs<ExtArgs>>
    ): Prisma__paisClient<$Result.GetResult<Prisma.$paisPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pais.
     * @param {paisDeleteManyArgs} args - Arguments to filter Pais to delete.
     * @example
     * // Delete a few Pais
     * const { count } = await prisma.pais.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends paisDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paisDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pais
     * const pais = await prisma.pais.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends paisUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, paisUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pais.
     * @param {paisUpsertArgs} args - Arguments to update or create a Pais.
     * @example
     * // Update or create a Pais
     * const pais = await prisma.pais.upsert({
     *   create: {
     *     // ... data to create a Pais
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pais we want to update
     *   }
     * })
    **/
    upsert<T extends paisUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, paisUpsertArgs<ExtArgs>>
    ): Prisma__paisClient<$Result.GetResult<Prisma.$paisPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paisCountArgs} args - Arguments to filter Pais to count.
     * @example
     * // Count the number of Pais
     * const count = await prisma.pais.count({
     *   where: {
     *     // ... the filter for the Pais we want to count
     *   }
     * })
    **/
    count<T extends paisCountArgs>(
      args?: Subset<T, paisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaisAggregateArgs>(args: Subset<T, PaisAggregateArgs>): Prisma.PrismaPromise<GetPaisAggregateType<T>>

    /**
     * Group by Pais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends paisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paisGroupByArgs['orderBy'] }
        : { orderBy?: paisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, paisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pais model
   */
  readonly fields: paisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pais.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    autor<T extends pais$autorArgs<ExtArgs> = {}>(args?: Subset<T, pais$autorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the pais model
   */ 
  interface paisFieldRefs {
    readonly id_pais: FieldRef<"pais", 'Int'>
    readonly nombre: FieldRef<"pais", 'String'>
    readonly code: FieldRef<"pais", 'String'>
  }
    

  // Custom InputTypes

  /**
   * pais findUnique
   */
  export type paisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paisInclude<ExtArgs> | null
    /**
     * Filter, which pais to fetch.
     */
    where: paisWhereUniqueInput
  }


  /**
   * pais findUniqueOrThrow
   */
  export type paisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paisInclude<ExtArgs> | null
    /**
     * Filter, which pais to fetch.
     */
    where: paisWhereUniqueInput
  }


  /**
   * pais findFirst
   */
  export type paisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paisInclude<ExtArgs> | null
    /**
     * Filter, which pais to fetch.
     */
    where?: paisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pais to fetch.
     */
    orderBy?: paisOrderByWithRelationInput | paisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pais.
     */
    cursor?: paisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pais.
     */
    distinct?: PaisScalarFieldEnum | PaisScalarFieldEnum[]
  }


  /**
   * pais findFirstOrThrow
   */
  export type paisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paisInclude<ExtArgs> | null
    /**
     * Filter, which pais to fetch.
     */
    where?: paisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pais to fetch.
     */
    orderBy?: paisOrderByWithRelationInput | paisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pais.
     */
    cursor?: paisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pais.
     */
    distinct?: PaisScalarFieldEnum | PaisScalarFieldEnum[]
  }


  /**
   * pais findMany
   */
  export type paisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paisInclude<ExtArgs> | null
    /**
     * Filter, which pais to fetch.
     */
    where?: paisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pais to fetch.
     */
    orderBy?: paisOrderByWithRelationInput | paisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pais.
     */
    cursor?: paisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pais.
     */
    skip?: number
    distinct?: PaisScalarFieldEnum | PaisScalarFieldEnum[]
  }


  /**
   * pais create
   */
  export type paisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paisInclude<ExtArgs> | null
    /**
     * The data needed to create a pais.
     */
    data?: XOR<paisCreateInput, paisUncheckedCreateInput>
  }


  /**
   * pais createMany
   */
  export type paisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pais.
     */
    data: paisCreateManyInput | paisCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * pais update
   */
  export type paisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paisInclude<ExtArgs> | null
    /**
     * The data needed to update a pais.
     */
    data: XOR<paisUpdateInput, paisUncheckedUpdateInput>
    /**
     * Choose, which pais to update.
     */
    where: paisWhereUniqueInput
  }


  /**
   * pais updateMany
   */
  export type paisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pais.
     */
    data: XOR<paisUpdateManyMutationInput, paisUncheckedUpdateManyInput>
    /**
     * Filter which pais to update
     */
    where?: paisWhereInput
  }


  /**
   * pais upsert
   */
  export type paisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paisInclude<ExtArgs> | null
    /**
     * The filter to search for the pais to update in case it exists.
     */
    where: paisWhereUniqueInput
    /**
     * In case the pais found by the `where` argument doesn't exist, create a new pais with this data.
     */
    create: XOR<paisCreateInput, paisUncheckedCreateInput>
    /**
     * In case the pais was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paisUpdateInput, paisUncheckedUpdateInput>
  }


  /**
   * pais delete
   */
  export type paisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paisInclude<ExtArgs> | null
    /**
     * Filter which pais to delete.
     */
    where: paisWhereUniqueInput
  }


  /**
   * pais deleteMany
   */
  export type paisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pais to delete
     */
    where?: paisWhereInput
  }


  /**
   * pais.autor
   */
  export type pais$autorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: autorInclude<ExtArgs> | null
    where?: autorWhereInput
    orderBy?: autorOrderByWithRelationInput | autorOrderByWithRelationInput[]
    cursor?: autorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }


  /**
   * pais without action
   */
  export type paisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paisInclude<ExtArgs> | null
  }



  /**
   * Model seguido
   */

  export type AggregateSeguido = {
    _count: SeguidoCountAggregateOutputType | null
    _avg: SeguidoAvgAggregateOutputType | null
    _sum: SeguidoSumAggregateOutputType | null
    _min: SeguidoMinAggregateOutputType | null
    _max: SeguidoMaxAggregateOutputType | null
  }

  export type SeguidoAvgAggregateOutputType = {
    id_seguido: number | null
    id_user_seguidor: number | null
    id_user_seguido: number | null
    id_seguimiento: number | null
  }

  export type SeguidoSumAggregateOutputType = {
    id_seguido: number | null
    id_user_seguidor: number | null
    id_user_seguido: number | null
    id_seguimiento: number | null
  }

  export type SeguidoMinAggregateOutputType = {
    id_seguido: number | null
    id_user_seguidor: number | null
    id_user_seguido: number | null
    id_seguimiento: number | null
    fecha_seguimiento: Date | null
  }

  export type SeguidoMaxAggregateOutputType = {
    id_seguido: number | null
    id_user_seguidor: number | null
    id_user_seguido: number | null
    id_seguimiento: number | null
    fecha_seguimiento: Date | null
  }

  export type SeguidoCountAggregateOutputType = {
    id_seguido: number
    id_user_seguidor: number
    id_user_seguido: number
    id_seguimiento: number
    fecha_seguimiento: number
    _all: number
  }


  export type SeguidoAvgAggregateInputType = {
    id_seguido?: true
    id_user_seguidor?: true
    id_user_seguido?: true
    id_seguimiento?: true
  }

  export type SeguidoSumAggregateInputType = {
    id_seguido?: true
    id_user_seguidor?: true
    id_user_seguido?: true
    id_seguimiento?: true
  }

  export type SeguidoMinAggregateInputType = {
    id_seguido?: true
    id_user_seguidor?: true
    id_user_seguido?: true
    id_seguimiento?: true
    fecha_seguimiento?: true
  }

  export type SeguidoMaxAggregateInputType = {
    id_seguido?: true
    id_user_seguidor?: true
    id_user_seguido?: true
    id_seguimiento?: true
    fecha_seguimiento?: true
  }

  export type SeguidoCountAggregateInputType = {
    id_seguido?: true
    id_user_seguidor?: true
    id_user_seguido?: true
    id_seguimiento?: true
    fecha_seguimiento?: true
    _all?: true
  }

  export type SeguidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seguido to aggregate.
     */
    where?: seguidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seguidos to fetch.
     */
    orderBy?: seguidoOrderByWithRelationInput | seguidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: seguidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seguidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seguidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned seguidos
    **/
    _count?: true | SeguidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeguidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeguidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeguidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeguidoMaxAggregateInputType
  }

  export type GetSeguidoAggregateType<T extends SeguidoAggregateArgs> = {
        [P in keyof T & keyof AggregateSeguido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeguido[P]>
      : GetScalarType<T[P], AggregateSeguido[P]>
  }




  export type seguidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seguidoWhereInput
    orderBy?: seguidoOrderByWithAggregationInput | seguidoOrderByWithAggregationInput[]
    by: SeguidoScalarFieldEnum[] | SeguidoScalarFieldEnum
    having?: seguidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeguidoCountAggregateInputType | true
    _avg?: SeguidoAvgAggregateInputType
    _sum?: SeguidoSumAggregateInputType
    _min?: SeguidoMinAggregateInputType
    _max?: SeguidoMaxAggregateInputType
  }

  export type SeguidoGroupByOutputType = {
    id_seguido: number
    id_user_seguidor: number | null
    id_user_seguido: number | null
    id_seguimiento: number | null
    fecha_seguimiento: Date | null
    _count: SeguidoCountAggregateOutputType | null
    _avg: SeguidoAvgAggregateOutputType | null
    _sum: SeguidoSumAggregateOutputType | null
    _min: SeguidoMinAggregateOutputType | null
    _max: SeguidoMaxAggregateOutputType | null
  }

  type GetSeguidoGroupByPayload<T extends seguidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeguidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeguidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeguidoGroupByOutputType[P]>
            : GetScalarType<T[P], SeguidoGroupByOutputType[P]>
        }
      >
    >


  export type seguidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_seguido?: boolean
    id_user_seguidor?: boolean
    id_user_seguido?: boolean
    id_seguimiento?: boolean
    fecha_seguimiento?: boolean
    usuario_seguido_id_user_seguidorTousuario?: boolean | seguido$usuario_seguido_id_user_seguidorTousuarioArgs<ExtArgs>
    usuario_seguido_id_user_seguidoTousuario?: boolean | seguido$usuario_seguido_id_user_seguidoTousuarioArgs<ExtArgs>
    tipo_seguimiento?: boolean | seguido$tipo_seguimientoArgs<ExtArgs>
  }, ExtArgs["result"]["seguido"]>

  export type seguidoSelectScalar = {
    id_seguido?: boolean
    id_user_seguidor?: boolean
    id_user_seguido?: boolean
    id_seguimiento?: boolean
    fecha_seguimiento?: boolean
  }

  export type seguidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario_seguido_id_user_seguidorTousuario?: boolean | seguido$usuario_seguido_id_user_seguidorTousuarioArgs<ExtArgs>
    usuario_seguido_id_user_seguidoTousuario?: boolean | seguido$usuario_seguido_id_user_seguidoTousuarioArgs<ExtArgs>
    tipo_seguimiento?: boolean | seguido$tipo_seguimientoArgs<ExtArgs>
  }


  export type $seguidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "seguido"
    objects: {
      usuario_seguido_id_user_seguidorTousuario: Prisma.$usuarioPayload<ExtArgs> | null
      usuario_seguido_id_user_seguidoTousuario: Prisma.$usuarioPayload<ExtArgs> | null
      tipo_seguimiento: Prisma.$tipo_seguimientoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_seguido: number
      id_user_seguidor: number | null
      id_user_seguido: number | null
      id_seguimiento: number | null
      fecha_seguimiento: Date | null
    }, ExtArgs["result"]["seguido"]>
    composites: {}
  }


  type seguidoGetPayload<S extends boolean | null | undefined | seguidoDefaultArgs> = $Result.GetResult<Prisma.$seguidoPayload, S>

  type seguidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<seguidoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SeguidoCountAggregateInputType | true
    }

  export interface seguidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['seguido'], meta: { name: 'seguido' } }
    /**
     * Find zero or one Seguido that matches the filter.
     * @param {seguidoFindUniqueArgs} args - Arguments to find a Seguido
     * @example
     * // Get one Seguido
     * const seguido = await prisma.seguido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends seguidoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, seguidoFindUniqueArgs<ExtArgs>>
    ): Prisma__seguidoClient<$Result.GetResult<Prisma.$seguidoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Seguido that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {seguidoFindUniqueOrThrowArgs} args - Arguments to find a Seguido
     * @example
     * // Get one Seguido
     * const seguido = await prisma.seguido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends seguidoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, seguidoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__seguidoClient<$Result.GetResult<Prisma.$seguidoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Seguido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seguidoFindFirstArgs} args - Arguments to find a Seguido
     * @example
     * // Get one Seguido
     * const seguido = await prisma.seguido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends seguidoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, seguidoFindFirstArgs<ExtArgs>>
    ): Prisma__seguidoClient<$Result.GetResult<Prisma.$seguidoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Seguido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seguidoFindFirstOrThrowArgs} args - Arguments to find a Seguido
     * @example
     * // Get one Seguido
     * const seguido = await prisma.seguido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends seguidoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, seguidoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__seguidoClient<$Result.GetResult<Prisma.$seguidoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Seguidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seguidoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seguidos
     * const seguidos = await prisma.seguido.findMany()
     * 
     * // Get first 10 Seguidos
     * const seguidos = await prisma.seguido.findMany({ take: 10 })
     * 
     * // Only select the `id_seguido`
     * const seguidoWithId_seguidoOnly = await prisma.seguido.findMany({ select: { id_seguido: true } })
     * 
    **/
    findMany<T extends seguidoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, seguidoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seguidoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Seguido.
     * @param {seguidoCreateArgs} args - Arguments to create a Seguido.
     * @example
     * // Create one Seguido
     * const Seguido = await prisma.seguido.create({
     *   data: {
     *     // ... data to create a Seguido
     *   }
     * })
     * 
    **/
    create<T extends seguidoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, seguidoCreateArgs<ExtArgs>>
    ): Prisma__seguidoClient<$Result.GetResult<Prisma.$seguidoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Seguidos.
     *     @param {seguidoCreateManyArgs} args - Arguments to create many Seguidos.
     *     @example
     *     // Create many Seguidos
     *     const seguido = await prisma.seguido.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends seguidoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, seguidoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Seguido.
     * @param {seguidoDeleteArgs} args - Arguments to delete one Seguido.
     * @example
     * // Delete one Seguido
     * const Seguido = await prisma.seguido.delete({
     *   where: {
     *     // ... filter to delete one Seguido
     *   }
     * })
     * 
    **/
    delete<T extends seguidoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, seguidoDeleteArgs<ExtArgs>>
    ): Prisma__seguidoClient<$Result.GetResult<Prisma.$seguidoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Seguido.
     * @param {seguidoUpdateArgs} args - Arguments to update one Seguido.
     * @example
     * // Update one Seguido
     * const seguido = await prisma.seguido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends seguidoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, seguidoUpdateArgs<ExtArgs>>
    ): Prisma__seguidoClient<$Result.GetResult<Prisma.$seguidoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Seguidos.
     * @param {seguidoDeleteManyArgs} args - Arguments to filter Seguidos to delete.
     * @example
     * // Delete a few Seguidos
     * const { count } = await prisma.seguido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends seguidoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, seguidoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seguidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seguidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seguidos
     * const seguido = await prisma.seguido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends seguidoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, seguidoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Seguido.
     * @param {seguidoUpsertArgs} args - Arguments to update or create a Seguido.
     * @example
     * // Update or create a Seguido
     * const seguido = await prisma.seguido.upsert({
     *   create: {
     *     // ... data to create a Seguido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seguido we want to update
     *   }
     * })
    **/
    upsert<T extends seguidoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, seguidoUpsertArgs<ExtArgs>>
    ): Prisma__seguidoClient<$Result.GetResult<Prisma.$seguidoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Seguidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seguidoCountArgs} args - Arguments to filter Seguidos to count.
     * @example
     * // Count the number of Seguidos
     * const count = await prisma.seguido.count({
     *   where: {
     *     // ... the filter for the Seguidos we want to count
     *   }
     * })
    **/
    count<T extends seguidoCountArgs>(
      args?: Subset<T, seguidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeguidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seguido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeguidoAggregateArgs>(args: Subset<T, SeguidoAggregateArgs>): Prisma.PrismaPromise<GetSeguidoAggregateType<T>>

    /**
     * Group by Seguido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seguidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends seguidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: seguidoGroupByArgs['orderBy'] }
        : { orderBy?: seguidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, seguidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeguidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the seguido model
   */
  readonly fields: seguidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for seguido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__seguidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    usuario_seguido_id_user_seguidorTousuario<T extends seguido$usuario_seguido_id_user_seguidorTousuarioArgs<ExtArgs> = {}>(args?: Subset<T, seguido$usuario_seguido_id_user_seguidorTousuarioArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    usuario_seguido_id_user_seguidoTousuario<T extends seguido$usuario_seguido_id_user_seguidoTousuarioArgs<ExtArgs> = {}>(args?: Subset<T, seguido$usuario_seguido_id_user_seguidoTousuarioArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    tipo_seguimiento<T extends seguido$tipo_seguimientoArgs<ExtArgs> = {}>(args?: Subset<T, seguido$tipo_seguimientoArgs<ExtArgs>>): Prisma__tipo_seguimientoClient<$Result.GetResult<Prisma.$tipo_seguimientoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the seguido model
   */ 
  interface seguidoFieldRefs {
    readonly id_seguido: FieldRef<"seguido", 'Int'>
    readonly id_user_seguidor: FieldRef<"seguido", 'Int'>
    readonly id_user_seguido: FieldRef<"seguido", 'Int'>
    readonly id_seguimiento: FieldRef<"seguido", 'Int'>
    readonly fecha_seguimiento: FieldRef<"seguido", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * seguido findUnique
   */
  export type seguidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguido
     */
    select?: seguidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seguidoInclude<ExtArgs> | null
    /**
     * Filter, which seguido to fetch.
     */
    where: seguidoWhereUniqueInput
  }


  /**
   * seguido findUniqueOrThrow
   */
  export type seguidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguido
     */
    select?: seguidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seguidoInclude<ExtArgs> | null
    /**
     * Filter, which seguido to fetch.
     */
    where: seguidoWhereUniqueInput
  }


  /**
   * seguido findFirst
   */
  export type seguidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguido
     */
    select?: seguidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seguidoInclude<ExtArgs> | null
    /**
     * Filter, which seguido to fetch.
     */
    where?: seguidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seguidos to fetch.
     */
    orderBy?: seguidoOrderByWithRelationInput | seguidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seguidos.
     */
    cursor?: seguidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seguidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seguidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seguidos.
     */
    distinct?: SeguidoScalarFieldEnum | SeguidoScalarFieldEnum[]
  }


  /**
   * seguido findFirstOrThrow
   */
  export type seguidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguido
     */
    select?: seguidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seguidoInclude<ExtArgs> | null
    /**
     * Filter, which seguido to fetch.
     */
    where?: seguidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seguidos to fetch.
     */
    orderBy?: seguidoOrderByWithRelationInput | seguidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seguidos.
     */
    cursor?: seguidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seguidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seguidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seguidos.
     */
    distinct?: SeguidoScalarFieldEnum | SeguidoScalarFieldEnum[]
  }


  /**
   * seguido findMany
   */
  export type seguidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguido
     */
    select?: seguidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seguidoInclude<ExtArgs> | null
    /**
     * Filter, which seguidos to fetch.
     */
    where?: seguidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seguidos to fetch.
     */
    orderBy?: seguidoOrderByWithRelationInput | seguidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing seguidos.
     */
    cursor?: seguidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seguidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seguidos.
     */
    skip?: number
    distinct?: SeguidoScalarFieldEnum | SeguidoScalarFieldEnum[]
  }


  /**
   * seguido create
   */
  export type seguidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguido
     */
    select?: seguidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seguidoInclude<ExtArgs> | null
    /**
     * The data needed to create a seguido.
     */
    data?: XOR<seguidoCreateInput, seguidoUncheckedCreateInput>
  }


  /**
   * seguido createMany
   */
  export type seguidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many seguidos.
     */
    data: seguidoCreateManyInput | seguidoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * seguido update
   */
  export type seguidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguido
     */
    select?: seguidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seguidoInclude<ExtArgs> | null
    /**
     * The data needed to update a seguido.
     */
    data: XOR<seguidoUpdateInput, seguidoUncheckedUpdateInput>
    /**
     * Choose, which seguido to update.
     */
    where: seguidoWhereUniqueInput
  }


  /**
   * seguido updateMany
   */
  export type seguidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update seguidos.
     */
    data: XOR<seguidoUpdateManyMutationInput, seguidoUncheckedUpdateManyInput>
    /**
     * Filter which seguidos to update
     */
    where?: seguidoWhereInput
  }


  /**
   * seguido upsert
   */
  export type seguidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguido
     */
    select?: seguidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seguidoInclude<ExtArgs> | null
    /**
     * The filter to search for the seguido to update in case it exists.
     */
    where: seguidoWhereUniqueInput
    /**
     * In case the seguido found by the `where` argument doesn't exist, create a new seguido with this data.
     */
    create: XOR<seguidoCreateInput, seguidoUncheckedCreateInput>
    /**
     * In case the seguido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<seguidoUpdateInput, seguidoUncheckedUpdateInput>
  }


  /**
   * seguido delete
   */
  export type seguidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguido
     */
    select?: seguidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seguidoInclude<ExtArgs> | null
    /**
     * Filter which seguido to delete.
     */
    where: seguidoWhereUniqueInput
  }


  /**
   * seguido deleteMany
   */
  export type seguidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seguidos to delete
     */
    where?: seguidoWhereInput
  }


  /**
   * seguido.usuario_seguido_id_user_seguidorTousuario
   */
  export type seguido$usuario_seguido_id_user_seguidorTousuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
  }


  /**
   * seguido.usuario_seguido_id_user_seguidoTousuario
   */
  export type seguido$usuario_seguido_id_user_seguidoTousuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
  }


  /**
   * seguido.tipo_seguimiento
   */
  export type seguido$tipo_seguimientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_seguimiento
     */
    select?: tipo_seguimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipo_seguimientoInclude<ExtArgs> | null
    where?: tipo_seguimientoWhereInput
  }


  /**
   * seguido without action
   */
  export type seguidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguido
     */
    select?: seguidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seguidoInclude<ExtArgs> | null
  }



  /**
   * Model tipo_seguimiento
   */

  export type AggregateTipo_seguimiento = {
    _count: Tipo_seguimientoCountAggregateOutputType | null
    _avg: Tipo_seguimientoAvgAggregateOutputType | null
    _sum: Tipo_seguimientoSumAggregateOutputType | null
    _min: Tipo_seguimientoMinAggregateOutputType | null
    _max: Tipo_seguimientoMaxAggregateOutputType | null
  }

  export type Tipo_seguimientoAvgAggregateOutputType = {
    id_seguimiento: number | null
  }

  export type Tipo_seguimientoSumAggregateOutputType = {
    id_seguimiento: number | null
  }

  export type Tipo_seguimientoMinAggregateOutputType = {
    id_seguimiento: number | null
    descripcion: string | null
  }

  export type Tipo_seguimientoMaxAggregateOutputType = {
    id_seguimiento: number | null
    descripcion: string | null
  }

  export type Tipo_seguimientoCountAggregateOutputType = {
    id_seguimiento: number
    descripcion: number
    _all: number
  }


  export type Tipo_seguimientoAvgAggregateInputType = {
    id_seguimiento?: true
  }

  export type Tipo_seguimientoSumAggregateInputType = {
    id_seguimiento?: true
  }

  export type Tipo_seguimientoMinAggregateInputType = {
    id_seguimiento?: true
    descripcion?: true
  }

  export type Tipo_seguimientoMaxAggregateInputType = {
    id_seguimiento?: true
    descripcion?: true
  }

  export type Tipo_seguimientoCountAggregateInputType = {
    id_seguimiento?: true
    descripcion?: true
    _all?: true
  }

  export type Tipo_seguimientoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_seguimiento to aggregate.
     */
    where?: tipo_seguimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_seguimientos to fetch.
     */
    orderBy?: tipo_seguimientoOrderByWithRelationInput | tipo_seguimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipo_seguimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_seguimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_seguimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipo_seguimientos
    **/
    _count?: true | Tipo_seguimientoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tipo_seguimientoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tipo_seguimientoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tipo_seguimientoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tipo_seguimientoMaxAggregateInputType
  }

  export type GetTipo_seguimientoAggregateType<T extends Tipo_seguimientoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipo_seguimiento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipo_seguimiento[P]>
      : GetScalarType<T[P], AggregateTipo_seguimiento[P]>
  }




  export type tipo_seguimientoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipo_seguimientoWhereInput
    orderBy?: tipo_seguimientoOrderByWithAggregationInput | tipo_seguimientoOrderByWithAggregationInput[]
    by: Tipo_seguimientoScalarFieldEnum[] | Tipo_seguimientoScalarFieldEnum
    having?: tipo_seguimientoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tipo_seguimientoCountAggregateInputType | true
    _avg?: Tipo_seguimientoAvgAggregateInputType
    _sum?: Tipo_seguimientoSumAggregateInputType
    _min?: Tipo_seguimientoMinAggregateInputType
    _max?: Tipo_seguimientoMaxAggregateInputType
  }

  export type Tipo_seguimientoGroupByOutputType = {
    id_seguimiento: number
    descripcion: string | null
    _count: Tipo_seguimientoCountAggregateOutputType | null
    _avg: Tipo_seguimientoAvgAggregateOutputType | null
    _sum: Tipo_seguimientoSumAggregateOutputType | null
    _min: Tipo_seguimientoMinAggregateOutputType | null
    _max: Tipo_seguimientoMaxAggregateOutputType | null
  }

  type GetTipo_seguimientoGroupByPayload<T extends tipo_seguimientoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tipo_seguimientoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tipo_seguimientoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tipo_seguimientoGroupByOutputType[P]>
            : GetScalarType<T[P], Tipo_seguimientoGroupByOutputType[P]>
        }
      >
    >


  export type tipo_seguimientoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_seguimiento?: boolean
    descripcion?: boolean
    seguido?: boolean | tipo_seguimiento$seguidoArgs<ExtArgs>
    _count?: boolean | Tipo_seguimientoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipo_seguimiento"]>

  export type tipo_seguimientoSelectScalar = {
    id_seguimiento?: boolean
    descripcion?: boolean
  }

  export type tipo_seguimientoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seguido?: boolean | tipo_seguimiento$seguidoArgs<ExtArgs>
    _count?: boolean | Tipo_seguimientoCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $tipo_seguimientoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipo_seguimiento"
    objects: {
      seguido: Prisma.$seguidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_seguimiento: number
      descripcion: string | null
    }, ExtArgs["result"]["tipo_seguimiento"]>
    composites: {}
  }


  type tipo_seguimientoGetPayload<S extends boolean | null | undefined | tipo_seguimientoDefaultArgs> = $Result.GetResult<Prisma.$tipo_seguimientoPayload, S>

  type tipo_seguimientoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tipo_seguimientoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tipo_seguimientoCountAggregateInputType | true
    }

  export interface tipo_seguimientoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipo_seguimiento'], meta: { name: 'tipo_seguimiento' } }
    /**
     * Find zero or one Tipo_seguimiento that matches the filter.
     * @param {tipo_seguimientoFindUniqueArgs} args - Arguments to find a Tipo_seguimiento
     * @example
     * // Get one Tipo_seguimiento
     * const tipo_seguimiento = await prisma.tipo_seguimiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tipo_seguimientoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tipo_seguimientoFindUniqueArgs<ExtArgs>>
    ): Prisma__tipo_seguimientoClient<$Result.GetResult<Prisma.$tipo_seguimientoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tipo_seguimiento that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tipo_seguimientoFindUniqueOrThrowArgs} args - Arguments to find a Tipo_seguimiento
     * @example
     * // Get one Tipo_seguimiento
     * const tipo_seguimiento = await prisma.tipo_seguimiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tipo_seguimientoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tipo_seguimientoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tipo_seguimientoClient<$Result.GetResult<Prisma.$tipo_seguimientoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tipo_seguimiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_seguimientoFindFirstArgs} args - Arguments to find a Tipo_seguimiento
     * @example
     * // Get one Tipo_seguimiento
     * const tipo_seguimiento = await prisma.tipo_seguimiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tipo_seguimientoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tipo_seguimientoFindFirstArgs<ExtArgs>>
    ): Prisma__tipo_seguimientoClient<$Result.GetResult<Prisma.$tipo_seguimientoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tipo_seguimiento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_seguimientoFindFirstOrThrowArgs} args - Arguments to find a Tipo_seguimiento
     * @example
     * // Get one Tipo_seguimiento
     * const tipo_seguimiento = await prisma.tipo_seguimiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tipo_seguimientoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tipo_seguimientoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tipo_seguimientoClient<$Result.GetResult<Prisma.$tipo_seguimientoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tipo_seguimientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_seguimientoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipo_seguimientos
     * const tipo_seguimientos = await prisma.tipo_seguimiento.findMany()
     * 
     * // Get first 10 Tipo_seguimientos
     * const tipo_seguimientos = await prisma.tipo_seguimiento.findMany({ take: 10 })
     * 
     * // Only select the `id_seguimiento`
     * const tipo_seguimientoWithId_seguimientoOnly = await prisma.tipo_seguimiento.findMany({ select: { id_seguimiento: true } })
     * 
    **/
    findMany<T extends tipo_seguimientoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tipo_seguimientoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_seguimientoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tipo_seguimiento.
     * @param {tipo_seguimientoCreateArgs} args - Arguments to create a Tipo_seguimiento.
     * @example
     * // Create one Tipo_seguimiento
     * const Tipo_seguimiento = await prisma.tipo_seguimiento.create({
     *   data: {
     *     // ... data to create a Tipo_seguimiento
     *   }
     * })
     * 
    **/
    create<T extends tipo_seguimientoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tipo_seguimientoCreateArgs<ExtArgs>>
    ): Prisma__tipo_seguimientoClient<$Result.GetResult<Prisma.$tipo_seguimientoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tipo_seguimientos.
     *     @param {tipo_seguimientoCreateManyArgs} args - Arguments to create many Tipo_seguimientos.
     *     @example
     *     // Create many Tipo_seguimientos
     *     const tipo_seguimiento = await prisma.tipo_seguimiento.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tipo_seguimientoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tipo_seguimientoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tipo_seguimiento.
     * @param {tipo_seguimientoDeleteArgs} args - Arguments to delete one Tipo_seguimiento.
     * @example
     * // Delete one Tipo_seguimiento
     * const Tipo_seguimiento = await prisma.tipo_seguimiento.delete({
     *   where: {
     *     // ... filter to delete one Tipo_seguimiento
     *   }
     * })
     * 
    **/
    delete<T extends tipo_seguimientoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tipo_seguimientoDeleteArgs<ExtArgs>>
    ): Prisma__tipo_seguimientoClient<$Result.GetResult<Prisma.$tipo_seguimientoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tipo_seguimiento.
     * @param {tipo_seguimientoUpdateArgs} args - Arguments to update one Tipo_seguimiento.
     * @example
     * // Update one Tipo_seguimiento
     * const tipo_seguimiento = await prisma.tipo_seguimiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tipo_seguimientoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tipo_seguimientoUpdateArgs<ExtArgs>>
    ): Prisma__tipo_seguimientoClient<$Result.GetResult<Prisma.$tipo_seguimientoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tipo_seguimientos.
     * @param {tipo_seguimientoDeleteManyArgs} args - Arguments to filter Tipo_seguimientos to delete.
     * @example
     * // Delete a few Tipo_seguimientos
     * const { count } = await prisma.tipo_seguimiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tipo_seguimientoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tipo_seguimientoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipo_seguimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_seguimientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipo_seguimientos
     * const tipo_seguimiento = await prisma.tipo_seguimiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tipo_seguimientoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tipo_seguimientoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tipo_seguimiento.
     * @param {tipo_seguimientoUpsertArgs} args - Arguments to update or create a Tipo_seguimiento.
     * @example
     * // Update or create a Tipo_seguimiento
     * const tipo_seguimiento = await prisma.tipo_seguimiento.upsert({
     *   create: {
     *     // ... data to create a Tipo_seguimiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipo_seguimiento we want to update
     *   }
     * })
    **/
    upsert<T extends tipo_seguimientoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tipo_seguimientoUpsertArgs<ExtArgs>>
    ): Prisma__tipo_seguimientoClient<$Result.GetResult<Prisma.$tipo_seguimientoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tipo_seguimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_seguimientoCountArgs} args - Arguments to filter Tipo_seguimientos to count.
     * @example
     * // Count the number of Tipo_seguimientos
     * const count = await prisma.tipo_seguimiento.count({
     *   where: {
     *     // ... the filter for the Tipo_seguimientos we want to count
     *   }
     * })
    **/
    count<T extends tipo_seguimientoCountArgs>(
      args?: Subset<T, tipo_seguimientoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tipo_seguimientoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipo_seguimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipo_seguimientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tipo_seguimientoAggregateArgs>(args: Subset<T, Tipo_seguimientoAggregateArgs>): Prisma.PrismaPromise<GetTipo_seguimientoAggregateType<T>>

    /**
     * Group by Tipo_seguimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_seguimientoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tipo_seguimientoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipo_seguimientoGroupByArgs['orderBy'] }
        : { orderBy?: tipo_seguimientoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tipo_seguimientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipo_seguimientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipo_seguimiento model
   */
  readonly fields: tipo_seguimientoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipo_seguimiento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipo_seguimientoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    seguido<T extends tipo_seguimiento$seguidoArgs<ExtArgs> = {}>(args?: Subset<T, tipo_seguimiento$seguidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seguidoPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the tipo_seguimiento model
   */ 
  interface tipo_seguimientoFieldRefs {
    readonly id_seguimiento: FieldRef<"tipo_seguimiento", 'Int'>
    readonly descripcion: FieldRef<"tipo_seguimiento", 'String'>
  }
    

  // Custom InputTypes

  /**
   * tipo_seguimiento findUnique
   */
  export type tipo_seguimientoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_seguimiento
     */
    select?: tipo_seguimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipo_seguimientoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_seguimiento to fetch.
     */
    where: tipo_seguimientoWhereUniqueInput
  }


  /**
   * tipo_seguimiento findUniqueOrThrow
   */
  export type tipo_seguimientoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_seguimiento
     */
    select?: tipo_seguimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipo_seguimientoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_seguimiento to fetch.
     */
    where: tipo_seguimientoWhereUniqueInput
  }


  /**
   * tipo_seguimiento findFirst
   */
  export type tipo_seguimientoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_seguimiento
     */
    select?: tipo_seguimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipo_seguimientoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_seguimiento to fetch.
     */
    where?: tipo_seguimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_seguimientos to fetch.
     */
    orderBy?: tipo_seguimientoOrderByWithRelationInput | tipo_seguimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_seguimientos.
     */
    cursor?: tipo_seguimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_seguimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_seguimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_seguimientos.
     */
    distinct?: Tipo_seguimientoScalarFieldEnum | Tipo_seguimientoScalarFieldEnum[]
  }


  /**
   * tipo_seguimiento findFirstOrThrow
   */
  export type tipo_seguimientoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_seguimiento
     */
    select?: tipo_seguimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipo_seguimientoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_seguimiento to fetch.
     */
    where?: tipo_seguimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_seguimientos to fetch.
     */
    orderBy?: tipo_seguimientoOrderByWithRelationInput | tipo_seguimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_seguimientos.
     */
    cursor?: tipo_seguimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_seguimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_seguimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_seguimientos.
     */
    distinct?: Tipo_seguimientoScalarFieldEnum | Tipo_seguimientoScalarFieldEnum[]
  }


  /**
   * tipo_seguimiento findMany
   */
  export type tipo_seguimientoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_seguimiento
     */
    select?: tipo_seguimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipo_seguimientoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_seguimientos to fetch.
     */
    where?: tipo_seguimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_seguimientos to fetch.
     */
    orderBy?: tipo_seguimientoOrderByWithRelationInput | tipo_seguimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipo_seguimientos.
     */
    cursor?: tipo_seguimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_seguimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_seguimientos.
     */
    skip?: number
    distinct?: Tipo_seguimientoScalarFieldEnum | Tipo_seguimientoScalarFieldEnum[]
  }


  /**
   * tipo_seguimiento create
   */
  export type tipo_seguimientoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_seguimiento
     */
    select?: tipo_seguimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipo_seguimientoInclude<ExtArgs> | null
    /**
     * The data needed to create a tipo_seguimiento.
     */
    data?: XOR<tipo_seguimientoCreateInput, tipo_seguimientoUncheckedCreateInput>
  }


  /**
   * tipo_seguimiento createMany
   */
  export type tipo_seguimientoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipo_seguimientos.
     */
    data: tipo_seguimientoCreateManyInput | tipo_seguimientoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * tipo_seguimiento update
   */
  export type tipo_seguimientoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_seguimiento
     */
    select?: tipo_seguimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipo_seguimientoInclude<ExtArgs> | null
    /**
     * The data needed to update a tipo_seguimiento.
     */
    data: XOR<tipo_seguimientoUpdateInput, tipo_seguimientoUncheckedUpdateInput>
    /**
     * Choose, which tipo_seguimiento to update.
     */
    where: tipo_seguimientoWhereUniqueInput
  }


  /**
   * tipo_seguimiento updateMany
   */
  export type tipo_seguimientoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipo_seguimientos.
     */
    data: XOR<tipo_seguimientoUpdateManyMutationInput, tipo_seguimientoUncheckedUpdateManyInput>
    /**
     * Filter which tipo_seguimientos to update
     */
    where?: tipo_seguimientoWhereInput
  }


  /**
   * tipo_seguimiento upsert
   */
  export type tipo_seguimientoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_seguimiento
     */
    select?: tipo_seguimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipo_seguimientoInclude<ExtArgs> | null
    /**
     * The filter to search for the tipo_seguimiento to update in case it exists.
     */
    where: tipo_seguimientoWhereUniqueInput
    /**
     * In case the tipo_seguimiento found by the `where` argument doesn't exist, create a new tipo_seguimiento with this data.
     */
    create: XOR<tipo_seguimientoCreateInput, tipo_seguimientoUncheckedCreateInput>
    /**
     * In case the tipo_seguimiento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipo_seguimientoUpdateInput, tipo_seguimientoUncheckedUpdateInput>
  }


  /**
   * tipo_seguimiento delete
   */
  export type tipo_seguimientoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_seguimiento
     */
    select?: tipo_seguimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipo_seguimientoInclude<ExtArgs> | null
    /**
     * Filter which tipo_seguimiento to delete.
     */
    where: tipo_seguimientoWhereUniqueInput
  }


  /**
   * tipo_seguimiento deleteMany
   */
  export type tipo_seguimientoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_seguimientos to delete
     */
    where?: tipo_seguimientoWhereInput
  }


  /**
   * tipo_seguimiento.seguido
   */
  export type tipo_seguimiento$seguidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguido
     */
    select?: seguidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seguidoInclude<ExtArgs> | null
    where?: seguidoWhereInput
    orderBy?: seguidoOrderByWithRelationInput | seguidoOrderByWithRelationInput[]
    cursor?: seguidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeguidoScalarFieldEnum | SeguidoScalarFieldEnum[]
  }


  /**
   * tipo_seguimiento without action
   */
  export type tipo_seguimientoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_seguimiento
     */
    select?: tipo_seguimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipo_seguimientoInclude<ExtArgs> | null
  }



  /**
   * Model reaccion
   */

  export type AggregateReaccion = {
    _count: ReaccionCountAggregateOutputType | null
    _avg: ReaccionAvgAggregateOutputType | null
    _sum: ReaccionSumAggregateOutputType | null
    _min: ReaccionMinAggregateOutputType | null
    _max: ReaccionMaxAggregateOutputType | null
  }

  export type ReaccionAvgAggregateOutputType = {
    id_reaccion: number | null
    id_capitulo: number | null
    id_publicacion_l: number | null
    id_editorial: number | null
    id_autor_reaccion: number | null
  }

  export type ReaccionSumAggregateOutputType = {
    id_reaccion: number | null
    id_capitulo: number | null
    id_publicacion_l: number | null
    id_editorial: number | null
    id_autor_reaccion: number | null
  }

  export type ReaccionMinAggregateOutputType = {
    id_reaccion: number | null
    id_capitulo: number | null
    id_publicacion_l: number | null
    id_editorial: number | null
    id_autor_reaccion: number | null
    fecha: Date | null
  }

  export type ReaccionMaxAggregateOutputType = {
    id_reaccion: number | null
    id_capitulo: number | null
    id_publicacion_l: number | null
    id_editorial: number | null
    id_autor_reaccion: number | null
    fecha: Date | null
  }

  export type ReaccionCountAggregateOutputType = {
    id_reaccion: number
    id_capitulo: number
    id_publicacion_l: number
    id_editorial: number
    id_autor_reaccion: number
    fecha: number
    _all: number
  }


  export type ReaccionAvgAggregateInputType = {
    id_reaccion?: true
    id_capitulo?: true
    id_publicacion_l?: true
    id_editorial?: true
    id_autor_reaccion?: true
  }

  export type ReaccionSumAggregateInputType = {
    id_reaccion?: true
    id_capitulo?: true
    id_publicacion_l?: true
    id_editorial?: true
    id_autor_reaccion?: true
  }

  export type ReaccionMinAggregateInputType = {
    id_reaccion?: true
    id_capitulo?: true
    id_publicacion_l?: true
    id_editorial?: true
    id_autor_reaccion?: true
    fecha?: true
  }

  export type ReaccionMaxAggregateInputType = {
    id_reaccion?: true
    id_capitulo?: true
    id_publicacion_l?: true
    id_editorial?: true
    id_autor_reaccion?: true
    fecha?: true
  }

  export type ReaccionCountAggregateInputType = {
    id_reaccion?: true
    id_capitulo?: true
    id_publicacion_l?: true
    id_editorial?: true
    id_autor_reaccion?: true
    fecha?: true
    _all?: true
  }

  export type ReaccionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reaccion to aggregate.
     */
    where?: reaccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reaccions to fetch.
     */
    orderBy?: reaccionOrderByWithRelationInput | reaccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reaccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reaccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reaccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reaccions
    **/
    _count?: true | ReaccionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReaccionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReaccionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReaccionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReaccionMaxAggregateInputType
  }

  export type GetReaccionAggregateType<T extends ReaccionAggregateArgs> = {
        [P in keyof T & keyof AggregateReaccion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReaccion[P]>
      : GetScalarType<T[P], AggregateReaccion[P]>
  }




  export type reaccionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reaccionWhereInput
    orderBy?: reaccionOrderByWithAggregationInput | reaccionOrderByWithAggregationInput[]
    by: ReaccionScalarFieldEnum[] | ReaccionScalarFieldEnum
    having?: reaccionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReaccionCountAggregateInputType | true
    _avg?: ReaccionAvgAggregateInputType
    _sum?: ReaccionSumAggregateInputType
    _min?: ReaccionMinAggregateInputType
    _max?: ReaccionMaxAggregateInputType
  }

  export type ReaccionGroupByOutputType = {
    id_reaccion: number
    id_capitulo: number | null
    id_publicacion_l: number | null
    id_editorial: number | null
    id_autor_reaccion: number | null
    fecha: Date | null
    _count: ReaccionCountAggregateOutputType | null
    _avg: ReaccionAvgAggregateOutputType | null
    _sum: ReaccionSumAggregateOutputType | null
    _min: ReaccionMinAggregateOutputType | null
    _max: ReaccionMaxAggregateOutputType | null
  }

  type GetReaccionGroupByPayload<T extends reaccionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReaccionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReaccionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReaccionGroupByOutputType[P]>
            : GetScalarType<T[P], ReaccionGroupByOutputType[P]>
        }
      >
    >


  export type reaccionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reaccion?: boolean
    id_capitulo?: boolean
    id_publicacion_l?: boolean
    id_editorial?: boolean
    id_autor_reaccion?: boolean
    fecha?: boolean
    autor?: boolean | reaccion$autorArgs<ExtArgs>
  }, ExtArgs["result"]["reaccion"]>

  export type reaccionSelectScalar = {
    id_reaccion?: boolean
    id_capitulo?: boolean
    id_publicacion_l?: boolean
    id_editorial?: boolean
    id_autor_reaccion?: boolean
    fecha?: boolean
  }

  export type reaccionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | reaccion$autorArgs<ExtArgs>
  }


  export type $reaccionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reaccion"
    objects: {
      autor: Prisma.$autorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_reaccion: number
      id_capitulo: number | null
      id_publicacion_l: number | null
      id_editorial: number | null
      id_autor_reaccion: number | null
      fecha: Date | null
    }, ExtArgs["result"]["reaccion"]>
    composites: {}
  }


  type reaccionGetPayload<S extends boolean | null | undefined | reaccionDefaultArgs> = $Result.GetResult<Prisma.$reaccionPayload, S>

  type reaccionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<reaccionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReaccionCountAggregateInputType | true
    }

  export interface reaccionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reaccion'], meta: { name: 'reaccion' } }
    /**
     * Find zero or one Reaccion that matches the filter.
     * @param {reaccionFindUniqueArgs} args - Arguments to find a Reaccion
     * @example
     * // Get one Reaccion
     * const reaccion = await prisma.reaccion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends reaccionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, reaccionFindUniqueArgs<ExtArgs>>
    ): Prisma__reaccionClient<$Result.GetResult<Prisma.$reaccionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Reaccion that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {reaccionFindUniqueOrThrowArgs} args - Arguments to find a Reaccion
     * @example
     * // Get one Reaccion
     * const reaccion = await prisma.reaccion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends reaccionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reaccionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__reaccionClient<$Result.GetResult<Prisma.$reaccionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Reaccion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reaccionFindFirstArgs} args - Arguments to find a Reaccion
     * @example
     * // Get one Reaccion
     * const reaccion = await prisma.reaccion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends reaccionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, reaccionFindFirstArgs<ExtArgs>>
    ): Prisma__reaccionClient<$Result.GetResult<Prisma.$reaccionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Reaccion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reaccionFindFirstOrThrowArgs} args - Arguments to find a Reaccion
     * @example
     * // Get one Reaccion
     * const reaccion = await prisma.reaccion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends reaccionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reaccionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__reaccionClient<$Result.GetResult<Prisma.$reaccionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Reaccions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reaccionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reaccions
     * const reaccions = await prisma.reaccion.findMany()
     * 
     * // Get first 10 Reaccions
     * const reaccions = await prisma.reaccion.findMany({ take: 10 })
     * 
     * // Only select the `id_reaccion`
     * const reaccionWithId_reaccionOnly = await prisma.reaccion.findMany({ select: { id_reaccion: true } })
     * 
    **/
    findMany<T extends reaccionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reaccionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reaccionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Reaccion.
     * @param {reaccionCreateArgs} args - Arguments to create a Reaccion.
     * @example
     * // Create one Reaccion
     * const Reaccion = await prisma.reaccion.create({
     *   data: {
     *     // ... data to create a Reaccion
     *   }
     * })
     * 
    **/
    create<T extends reaccionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, reaccionCreateArgs<ExtArgs>>
    ): Prisma__reaccionClient<$Result.GetResult<Prisma.$reaccionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Reaccions.
     *     @param {reaccionCreateManyArgs} args - Arguments to create many Reaccions.
     *     @example
     *     // Create many Reaccions
     *     const reaccion = await prisma.reaccion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends reaccionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reaccionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reaccion.
     * @param {reaccionDeleteArgs} args - Arguments to delete one Reaccion.
     * @example
     * // Delete one Reaccion
     * const Reaccion = await prisma.reaccion.delete({
     *   where: {
     *     // ... filter to delete one Reaccion
     *   }
     * })
     * 
    **/
    delete<T extends reaccionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, reaccionDeleteArgs<ExtArgs>>
    ): Prisma__reaccionClient<$Result.GetResult<Prisma.$reaccionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Reaccion.
     * @param {reaccionUpdateArgs} args - Arguments to update one Reaccion.
     * @example
     * // Update one Reaccion
     * const reaccion = await prisma.reaccion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends reaccionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, reaccionUpdateArgs<ExtArgs>>
    ): Prisma__reaccionClient<$Result.GetResult<Prisma.$reaccionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Reaccions.
     * @param {reaccionDeleteManyArgs} args - Arguments to filter Reaccions to delete.
     * @example
     * // Delete a few Reaccions
     * const { count } = await prisma.reaccion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends reaccionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reaccionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reaccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reaccionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reaccions
     * const reaccion = await prisma.reaccion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends reaccionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, reaccionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reaccion.
     * @param {reaccionUpsertArgs} args - Arguments to update or create a Reaccion.
     * @example
     * // Update or create a Reaccion
     * const reaccion = await prisma.reaccion.upsert({
     *   create: {
     *     // ... data to create a Reaccion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reaccion we want to update
     *   }
     * })
    **/
    upsert<T extends reaccionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, reaccionUpsertArgs<ExtArgs>>
    ): Prisma__reaccionClient<$Result.GetResult<Prisma.$reaccionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Reaccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reaccionCountArgs} args - Arguments to filter Reaccions to count.
     * @example
     * // Count the number of Reaccions
     * const count = await prisma.reaccion.count({
     *   where: {
     *     // ... the filter for the Reaccions we want to count
     *   }
     * })
    **/
    count<T extends reaccionCountArgs>(
      args?: Subset<T, reaccionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReaccionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reaccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReaccionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReaccionAggregateArgs>(args: Subset<T, ReaccionAggregateArgs>): Prisma.PrismaPromise<GetReaccionAggregateType<T>>

    /**
     * Group by Reaccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reaccionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reaccionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reaccionGroupByArgs['orderBy'] }
        : { orderBy?: reaccionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reaccionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReaccionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reaccion model
   */
  readonly fields: reaccionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reaccion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reaccionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    autor<T extends reaccion$autorArgs<ExtArgs> = {}>(args?: Subset<T, reaccion$autorArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the reaccion model
   */ 
  interface reaccionFieldRefs {
    readonly id_reaccion: FieldRef<"reaccion", 'Int'>
    readonly id_capitulo: FieldRef<"reaccion", 'Int'>
    readonly id_publicacion_l: FieldRef<"reaccion", 'Int'>
    readonly id_editorial: FieldRef<"reaccion", 'Int'>
    readonly id_autor_reaccion: FieldRef<"reaccion", 'Int'>
    readonly fecha: FieldRef<"reaccion", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * reaccion findUnique
   */
  export type reaccionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reaccion
     */
    select?: reaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reaccionInclude<ExtArgs> | null
    /**
     * Filter, which reaccion to fetch.
     */
    where: reaccionWhereUniqueInput
  }


  /**
   * reaccion findUniqueOrThrow
   */
  export type reaccionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reaccion
     */
    select?: reaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reaccionInclude<ExtArgs> | null
    /**
     * Filter, which reaccion to fetch.
     */
    where: reaccionWhereUniqueInput
  }


  /**
   * reaccion findFirst
   */
  export type reaccionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reaccion
     */
    select?: reaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reaccionInclude<ExtArgs> | null
    /**
     * Filter, which reaccion to fetch.
     */
    where?: reaccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reaccions to fetch.
     */
    orderBy?: reaccionOrderByWithRelationInput | reaccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reaccions.
     */
    cursor?: reaccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reaccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reaccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reaccions.
     */
    distinct?: ReaccionScalarFieldEnum | ReaccionScalarFieldEnum[]
  }


  /**
   * reaccion findFirstOrThrow
   */
  export type reaccionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reaccion
     */
    select?: reaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reaccionInclude<ExtArgs> | null
    /**
     * Filter, which reaccion to fetch.
     */
    where?: reaccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reaccions to fetch.
     */
    orderBy?: reaccionOrderByWithRelationInput | reaccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reaccions.
     */
    cursor?: reaccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reaccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reaccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reaccions.
     */
    distinct?: ReaccionScalarFieldEnum | ReaccionScalarFieldEnum[]
  }


  /**
   * reaccion findMany
   */
  export type reaccionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reaccion
     */
    select?: reaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reaccionInclude<ExtArgs> | null
    /**
     * Filter, which reaccions to fetch.
     */
    where?: reaccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reaccions to fetch.
     */
    orderBy?: reaccionOrderByWithRelationInput | reaccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reaccions.
     */
    cursor?: reaccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reaccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reaccions.
     */
    skip?: number
    distinct?: ReaccionScalarFieldEnum | ReaccionScalarFieldEnum[]
  }


  /**
   * reaccion create
   */
  export type reaccionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reaccion
     */
    select?: reaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reaccionInclude<ExtArgs> | null
    /**
     * The data needed to create a reaccion.
     */
    data?: XOR<reaccionCreateInput, reaccionUncheckedCreateInput>
  }


  /**
   * reaccion createMany
   */
  export type reaccionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reaccions.
     */
    data: reaccionCreateManyInput | reaccionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * reaccion update
   */
  export type reaccionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reaccion
     */
    select?: reaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reaccionInclude<ExtArgs> | null
    /**
     * The data needed to update a reaccion.
     */
    data: XOR<reaccionUpdateInput, reaccionUncheckedUpdateInput>
    /**
     * Choose, which reaccion to update.
     */
    where: reaccionWhereUniqueInput
  }


  /**
   * reaccion updateMany
   */
  export type reaccionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reaccions.
     */
    data: XOR<reaccionUpdateManyMutationInput, reaccionUncheckedUpdateManyInput>
    /**
     * Filter which reaccions to update
     */
    where?: reaccionWhereInput
  }


  /**
   * reaccion upsert
   */
  export type reaccionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reaccion
     */
    select?: reaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reaccionInclude<ExtArgs> | null
    /**
     * The filter to search for the reaccion to update in case it exists.
     */
    where: reaccionWhereUniqueInput
    /**
     * In case the reaccion found by the `where` argument doesn't exist, create a new reaccion with this data.
     */
    create: XOR<reaccionCreateInput, reaccionUncheckedCreateInput>
    /**
     * In case the reaccion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reaccionUpdateInput, reaccionUncheckedUpdateInput>
  }


  /**
   * reaccion delete
   */
  export type reaccionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reaccion
     */
    select?: reaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reaccionInclude<ExtArgs> | null
    /**
     * Filter which reaccion to delete.
     */
    where: reaccionWhereUniqueInput
  }


  /**
   * reaccion deleteMany
   */
  export type reaccionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reaccions to delete
     */
    where?: reaccionWhereInput
  }


  /**
   * reaccion.autor
   */
  export type reaccion$autorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: autorInclude<ExtArgs> | null
    where?: autorWhereInput
  }


  /**
   * reaccion without action
   */
  export type reaccionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reaccion
     */
    select?: reaccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reaccionInclude<ExtArgs> | null
  }



  /**
   * Model cap_pl_ln
   */

  export type AggregateCap_pl_ln = {
    _count: Cap_pl_lnCountAggregateOutputType | null
    _avg: Cap_pl_lnAvgAggregateOutputType | null
    _sum: Cap_pl_lnSumAggregateOutputType | null
    _min: Cap_pl_lnMinAggregateOutputType | null
    _max: Cap_pl_lnMaxAggregateOutputType | null
  }

  export type Cap_pl_lnAvgAggregateOutputType = {
    id_cap_pl: number | null
    id_editorial_pl: number | null
    id_pl_ln: number | null
  }

  export type Cap_pl_lnSumAggregateOutputType = {
    id_cap_pl: number | null
    id_editorial_pl: number | null
    id_pl_ln: number | null
  }

  export type Cap_pl_lnMinAggregateOutputType = {
    id_cap_pl: number | null
    id_editorial_pl: number | null
    id_pl_ln: number | null
    nro_capitulo: string | null
    nombre_capitulo: string | null
    contenido: string | null
  }

  export type Cap_pl_lnMaxAggregateOutputType = {
    id_cap_pl: number | null
    id_editorial_pl: number | null
    id_pl_ln: number | null
    nro_capitulo: string | null
    nombre_capitulo: string | null
    contenido: string | null
  }

  export type Cap_pl_lnCountAggregateOutputType = {
    id_cap_pl: number
    id_editorial_pl: number
    id_pl_ln: number
    nro_capitulo: number
    nombre_capitulo: number
    contenido: number
    _all: number
  }


  export type Cap_pl_lnAvgAggregateInputType = {
    id_cap_pl?: true
    id_editorial_pl?: true
    id_pl_ln?: true
  }

  export type Cap_pl_lnSumAggregateInputType = {
    id_cap_pl?: true
    id_editorial_pl?: true
    id_pl_ln?: true
  }

  export type Cap_pl_lnMinAggregateInputType = {
    id_cap_pl?: true
    id_editorial_pl?: true
    id_pl_ln?: true
    nro_capitulo?: true
    nombre_capitulo?: true
    contenido?: true
  }

  export type Cap_pl_lnMaxAggregateInputType = {
    id_cap_pl?: true
    id_editorial_pl?: true
    id_pl_ln?: true
    nro_capitulo?: true
    nombre_capitulo?: true
    contenido?: true
  }

  export type Cap_pl_lnCountAggregateInputType = {
    id_cap_pl?: true
    id_editorial_pl?: true
    id_pl_ln?: true
    nro_capitulo?: true
    nombre_capitulo?: true
    contenido?: true
    _all?: true
  }

  export type Cap_pl_lnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cap_pl_ln to aggregate.
     */
    where?: cap_pl_lnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cap_pl_lns to fetch.
     */
    orderBy?: cap_pl_lnOrderByWithRelationInput | cap_pl_lnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cap_pl_lnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cap_pl_lns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cap_pl_lns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cap_pl_lns
    **/
    _count?: true | Cap_pl_lnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cap_pl_lnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cap_pl_lnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cap_pl_lnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cap_pl_lnMaxAggregateInputType
  }

  export type GetCap_pl_lnAggregateType<T extends Cap_pl_lnAggregateArgs> = {
        [P in keyof T & keyof AggregateCap_pl_ln]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCap_pl_ln[P]>
      : GetScalarType<T[P], AggregateCap_pl_ln[P]>
  }




  export type cap_pl_lnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cap_pl_lnWhereInput
    orderBy?: cap_pl_lnOrderByWithAggregationInput | cap_pl_lnOrderByWithAggregationInput[]
    by: Cap_pl_lnScalarFieldEnum[] | Cap_pl_lnScalarFieldEnum
    having?: cap_pl_lnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cap_pl_lnCountAggregateInputType | true
    _avg?: Cap_pl_lnAvgAggregateInputType
    _sum?: Cap_pl_lnSumAggregateInputType
    _min?: Cap_pl_lnMinAggregateInputType
    _max?: Cap_pl_lnMaxAggregateInputType
  }

  export type Cap_pl_lnGroupByOutputType = {
    id_cap_pl: number
    id_editorial_pl: number | null
    id_pl_ln: number | null
    nro_capitulo: string | null
    nombre_capitulo: string | null
    contenido: string | null
    _count: Cap_pl_lnCountAggregateOutputType | null
    _avg: Cap_pl_lnAvgAggregateOutputType | null
    _sum: Cap_pl_lnSumAggregateOutputType | null
    _min: Cap_pl_lnMinAggregateOutputType | null
    _max: Cap_pl_lnMaxAggregateOutputType | null
  }

  type GetCap_pl_lnGroupByPayload<T extends cap_pl_lnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cap_pl_lnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cap_pl_lnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cap_pl_lnGroupByOutputType[P]>
            : GetScalarType<T[P], Cap_pl_lnGroupByOutputType[P]>
        }
      >
    >


  export type cap_pl_lnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cap_pl?: boolean
    id_editorial_pl?: boolean
    id_pl_ln?: boolean
    nro_capitulo?: boolean
    nombre_capitulo?: boolean
    contenido?: boolean
    pl_nl?: boolean | cap_pl_ln$pl_nlArgs<ExtArgs>
    editorial?: boolean | cap_pl_ln$editorialArgs<ExtArgs>
  }, ExtArgs["result"]["cap_pl_ln"]>

  export type cap_pl_lnSelectScalar = {
    id_cap_pl?: boolean
    id_editorial_pl?: boolean
    id_pl_ln?: boolean
    nro_capitulo?: boolean
    nombre_capitulo?: boolean
    contenido?: boolean
  }

  export type cap_pl_lnInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pl_nl?: boolean | cap_pl_ln$pl_nlArgs<ExtArgs>
    editorial?: boolean | cap_pl_ln$editorialArgs<ExtArgs>
  }


  export type $cap_pl_lnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cap_pl_ln"
    objects: {
      pl_nl: Prisma.$pl_nlPayload<ExtArgs> | null
      editorial: Prisma.$editorialPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cap_pl: number
      id_editorial_pl: number | null
      id_pl_ln: number | null
      nro_capitulo: string | null
      nombre_capitulo: string | null
      contenido: string | null
    }, ExtArgs["result"]["cap_pl_ln"]>
    composites: {}
  }


  type cap_pl_lnGetPayload<S extends boolean | null | undefined | cap_pl_lnDefaultArgs> = $Result.GetResult<Prisma.$cap_pl_lnPayload, S>

  type cap_pl_lnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<cap_pl_lnFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Cap_pl_lnCountAggregateInputType | true
    }

  export interface cap_pl_lnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cap_pl_ln'], meta: { name: 'cap_pl_ln' } }
    /**
     * Find zero or one Cap_pl_ln that matches the filter.
     * @param {cap_pl_lnFindUniqueArgs} args - Arguments to find a Cap_pl_ln
     * @example
     * // Get one Cap_pl_ln
     * const cap_pl_ln = await prisma.cap_pl_ln.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cap_pl_lnFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, cap_pl_lnFindUniqueArgs<ExtArgs>>
    ): Prisma__cap_pl_lnClient<$Result.GetResult<Prisma.$cap_pl_lnPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cap_pl_ln that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cap_pl_lnFindUniqueOrThrowArgs} args - Arguments to find a Cap_pl_ln
     * @example
     * // Get one Cap_pl_ln
     * const cap_pl_ln = await prisma.cap_pl_ln.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cap_pl_lnFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cap_pl_lnFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__cap_pl_lnClient<$Result.GetResult<Prisma.$cap_pl_lnPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cap_pl_ln that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cap_pl_lnFindFirstArgs} args - Arguments to find a Cap_pl_ln
     * @example
     * // Get one Cap_pl_ln
     * const cap_pl_ln = await prisma.cap_pl_ln.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cap_pl_lnFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, cap_pl_lnFindFirstArgs<ExtArgs>>
    ): Prisma__cap_pl_lnClient<$Result.GetResult<Prisma.$cap_pl_lnPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cap_pl_ln that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cap_pl_lnFindFirstOrThrowArgs} args - Arguments to find a Cap_pl_ln
     * @example
     * // Get one Cap_pl_ln
     * const cap_pl_ln = await prisma.cap_pl_ln.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cap_pl_lnFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cap_pl_lnFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__cap_pl_lnClient<$Result.GetResult<Prisma.$cap_pl_lnPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cap_pl_lns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cap_pl_lnFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cap_pl_lns
     * const cap_pl_lns = await prisma.cap_pl_ln.findMany()
     * 
     * // Get first 10 Cap_pl_lns
     * const cap_pl_lns = await prisma.cap_pl_ln.findMany({ take: 10 })
     * 
     * // Only select the `id_cap_pl`
     * const cap_pl_lnWithId_cap_plOnly = await prisma.cap_pl_ln.findMany({ select: { id_cap_pl: true } })
     * 
    **/
    findMany<T extends cap_pl_lnFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cap_pl_lnFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cap_pl_lnPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cap_pl_ln.
     * @param {cap_pl_lnCreateArgs} args - Arguments to create a Cap_pl_ln.
     * @example
     * // Create one Cap_pl_ln
     * const Cap_pl_ln = await prisma.cap_pl_ln.create({
     *   data: {
     *     // ... data to create a Cap_pl_ln
     *   }
     * })
     * 
    **/
    create<T extends cap_pl_lnCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cap_pl_lnCreateArgs<ExtArgs>>
    ): Prisma__cap_pl_lnClient<$Result.GetResult<Prisma.$cap_pl_lnPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cap_pl_lns.
     *     @param {cap_pl_lnCreateManyArgs} args - Arguments to create many Cap_pl_lns.
     *     @example
     *     // Create many Cap_pl_lns
     *     const cap_pl_ln = await prisma.cap_pl_ln.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cap_pl_lnCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cap_pl_lnCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cap_pl_ln.
     * @param {cap_pl_lnDeleteArgs} args - Arguments to delete one Cap_pl_ln.
     * @example
     * // Delete one Cap_pl_ln
     * const Cap_pl_ln = await prisma.cap_pl_ln.delete({
     *   where: {
     *     // ... filter to delete one Cap_pl_ln
     *   }
     * })
     * 
    **/
    delete<T extends cap_pl_lnDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cap_pl_lnDeleteArgs<ExtArgs>>
    ): Prisma__cap_pl_lnClient<$Result.GetResult<Prisma.$cap_pl_lnPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cap_pl_ln.
     * @param {cap_pl_lnUpdateArgs} args - Arguments to update one Cap_pl_ln.
     * @example
     * // Update one Cap_pl_ln
     * const cap_pl_ln = await prisma.cap_pl_ln.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cap_pl_lnUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cap_pl_lnUpdateArgs<ExtArgs>>
    ): Prisma__cap_pl_lnClient<$Result.GetResult<Prisma.$cap_pl_lnPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cap_pl_lns.
     * @param {cap_pl_lnDeleteManyArgs} args - Arguments to filter Cap_pl_lns to delete.
     * @example
     * // Delete a few Cap_pl_lns
     * const { count } = await prisma.cap_pl_ln.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cap_pl_lnDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cap_pl_lnDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cap_pl_lns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cap_pl_lnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cap_pl_lns
     * const cap_pl_ln = await prisma.cap_pl_ln.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cap_pl_lnUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cap_pl_lnUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cap_pl_ln.
     * @param {cap_pl_lnUpsertArgs} args - Arguments to update or create a Cap_pl_ln.
     * @example
     * // Update or create a Cap_pl_ln
     * const cap_pl_ln = await prisma.cap_pl_ln.upsert({
     *   create: {
     *     // ... data to create a Cap_pl_ln
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cap_pl_ln we want to update
     *   }
     * })
    **/
    upsert<T extends cap_pl_lnUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cap_pl_lnUpsertArgs<ExtArgs>>
    ): Prisma__cap_pl_lnClient<$Result.GetResult<Prisma.$cap_pl_lnPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cap_pl_lns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cap_pl_lnCountArgs} args - Arguments to filter Cap_pl_lns to count.
     * @example
     * // Count the number of Cap_pl_lns
     * const count = await prisma.cap_pl_ln.count({
     *   where: {
     *     // ... the filter for the Cap_pl_lns we want to count
     *   }
     * })
    **/
    count<T extends cap_pl_lnCountArgs>(
      args?: Subset<T, cap_pl_lnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cap_pl_lnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cap_pl_ln.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cap_pl_lnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cap_pl_lnAggregateArgs>(args: Subset<T, Cap_pl_lnAggregateArgs>): Prisma.PrismaPromise<GetCap_pl_lnAggregateType<T>>

    /**
     * Group by Cap_pl_ln.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cap_pl_lnGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cap_pl_lnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cap_pl_lnGroupByArgs['orderBy'] }
        : { orderBy?: cap_pl_lnGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cap_pl_lnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCap_pl_lnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cap_pl_ln model
   */
  readonly fields: cap_pl_lnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cap_pl_ln.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cap_pl_lnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    pl_nl<T extends cap_pl_ln$pl_nlArgs<ExtArgs> = {}>(args?: Subset<T, cap_pl_ln$pl_nlArgs<ExtArgs>>): Prisma__pl_nlClient<$Result.GetResult<Prisma.$pl_nlPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    editorial<T extends cap_pl_ln$editorialArgs<ExtArgs> = {}>(args?: Subset<T, cap_pl_ln$editorialArgs<ExtArgs>>): Prisma__editorialClient<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the cap_pl_ln model
   */ 
  interface cap_pl_lnFieldRefs {
    readonly id_cap_pl: FieldRef<"cap_pl_ln", 'Int'>
    readonly id_editorial_pl: FieldRef<"cap_pl_ln", 'Int'>
    readonly id_pl_ln: FieldRef<"cap_pl_ln", 'Int'>
    readonly nro_capitulo: FieldRef<"cap_pl_ln", 'String'>
    readonly nombre_capitulo: FieldRef<"cap_pl_ln", 'String'>
    readonly contenido: FieldRef<"cap_pl_ln", 'String'>
  }
    

  // Custom InputTypes

  /**
   * cap_pl_ln findUnique
   */
  export type cap_pl_lnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cap_pl_ln
     */
    select?: cap_pl_lnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cap_pl_lnInclude<ExtArgs> | null
    /**
     * Filter, which cap_pl_ln to fetch.
     */
    where: cap_pl_lnWhereUniqueInput
  }


  /**
   * cap_pl_ln findUniqueOrThrow
   */
  export type cap_pl_lnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cap_pl_ln
     */
    select?: cap_pl_lnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cap_pl_lnInclude<ExtArgs> | null
    /**
     * Filter, which cap_pl_ln to fetch.
     */
    where: cap_pl_lnWhereUniqueInput
  }


  /**
   * cap_pl_ln findFirst
   */
  export type cap_pl_lnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cap_pl_ln
     */
    select?: cap_pl_lnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cap_pl_lnInclude<ExtArgs> | null
    /**
     * Filter, which cap_pl_ln to fetch.
     */
    where?: cap_pl_lnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cap_pl_lns to fetch.
     */
    orderBy?: cap_pl_lnOrderByWithRelationInput | cap_pl_lnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cap_pl_lns.
     */
    cursor?: cap_pl_lnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cap_pl_lns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cap_pl_lns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cap_pl_lns.
     */
    distinct?: Cap_pl_lnScalarFieldEnum | Cap_pl_lnScalarFieldEnum[]
  }


  /**
   * cap_pl_ln findFirstOrThrow
   */
  export type cap_pl_lnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cap_pl_ln
     */
    select?: cap_pl_lnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cap_pl_lnInclude<ExtArgs> | null
    /**
     * Filter, which cap_pl_ln to fetch.
     */
    where?: cap_pl_lnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cap_pl_lns to fetch.
     */
    orderBy?: cap_pl_lnOrderByWithRelationInput | cap_pl_lnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cap_pl_lns.
     */
    cursor?: cap_pl_lnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cap_pl_lns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cap_pl_lns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cap_pl_lns.
     */
    distinct?: Cap_pl_lnScalarFieldEnum | Cap_pl_lnScalarFieldEnum[]
  }


  /**
   * cap_pl_ln findMany
   */
  export type cap_pl_lnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cap_pl_ln
     */
    select?: cap_pl_lnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cap_pl_lnInclude<ExtArgs> | null
    /**
     * Filter, which cap_pl_lns to fetch.
     */
    where?: cap_pl_lnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cap_pl_lns to fetch.
     */
    orderBy?: cap_pl_lnOrderByWithRelationInput | cap_pl_lnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cap_pl_lns.
     */
    cursor?: cap_pl_lnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cap_pl_lns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cap_pl_lns.
     */
    skip?: number
    distinct?: Cap_pl_lnScalarFieldEnum | Cap_pl_lnScalarFieldEnum[]
  }


  /**
   * cap_pl_ln create
   */
  export type cap_pl_lnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cap_pl_ln
     */
    select?: cap_pl_lnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cap_pl_lnInclude<ExtArgs> | null
    /**
     * The data needed to create a cap_pl_ln.
     */
    data?: XOR<cap_pl_lnCreateInput, cap_pl_lnUncheckedCreateInput>
  }


  /**
   * cap_pl_ln createMany
   */
  export type cap_pl_lnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cap_pl_lns.
     */
    data: cap_pl_lnCreateManyInput | cap_pl_lnCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * cap_pl_ln update
   */
  export type cap_pl_lnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cap_pl_ln
     */
    select?: cap_pl_lnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cap_pl_lnInclude<ExtArgs> | null
    /**
     * The data needed to update a cap_pl_ln.
     */
    data: XOR<cap_pl_lnUpdateInput, cap_pl_lnUncheckedUpdateInput>
    /**
     * Choose, which cap_pl_ln to update.
     */
    where: cap_pl_lnWhereUniqueInput
  }


  /**
   * cap_pl_ln updateMany
   */
  export type cap_pl_lnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cap_pl_lns.
     */
    data: XOR<cap_pl_lnUpdateManyMutationInput, cap_pl_lnUncheckedUpdateManyInput>
    /**
     * Filter which cap_pl_lns to update
     */
    where?: cap_pl_lnWhereInput
  }


  /**
   * cap_pl_ln upsert
   */
  export type cap_pl_lnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cap_pl_ln
     */
    select?: cap_pl_lnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cap_pl_lnInclude<ExtArgs> | null
    /**
     * The filter to search for the cap_pl_ln to update in case it exists.
     */
    where: cap_pl_lnWhereUniqueInput
    /**
     * In case the cap_pl_ln found by the `where` argument doesn't exist, create a new cap_pl_ln with this data.
     */
    create: XOR<cap_pl_lnCreateInput, cap_pl_lnUncheckedCreateInput>
    /**
     * In case the cap_pl_ln was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cap_pl_lnUpdateInput, cap_pl_lnUncheckedUpdateInput>
  }


  /**
   * cap_pl_ln delete
   */
  export type cap_pl_lnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cap_pl_ln
     */
    select?: cap_pl_lnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cap_pl_lnInclude<ExtArgs> | null
    /**
     * Filter which cap_pl_ln to delete.
     */
    where: cap_pl_lnWhereUniqueInput
  }


  /**
   * cap_pl_ln deleteMany
   */
  export type cap_pl_lnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cap_pl_lns to delete
     */
    where?: cap_pl_lnWhereInput
  }


  /**
   * cap_pl_ln.pl_nl
   */
  export type cap_pl_ln$pl_nlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_nl
     */
    select?: pl_nlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_nlInclude<ExtArgs> | null
    where?: pl_nlWhereInput
  }


  /**
   * cap_pl_ln.editorial
   */
  export type cap_pl_ln$editorialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: editorialInclude<ExtArgs> | null
    where?: editorialWhereInput
  }


  /**
   * cap_pl_ln without action
   */
  export type cap_pl_lnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cap_pl_ln
     */
    select?: cap_pl_lnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cap_pl_lnInclude<ExtArgs> | null
  }



  /**
   * Model editorial
   */

  export type AggregateEditorial = {
    _count: EditorialCountAggregateOutputType | null
    _avg: EditorialAvgAggregateOutputType | null
    _sum: EditorialSumAggregateOutputType | null
    _min: EditorialMinAggregateOutputType | null
    _max: EditorialMaxAggregateOutputType | null
  }

  export type EditorialAvgAggregateOutputType = {
    id_editorial_pl: number | null
    id_autor: number | null
    id_estado: number | null
  }

  export type EditorialSumAggregateOutputType = {
    id_editorial_pl: number | null
    id_autor: number | null
    id_estado: number | null
  }

  export type EditorialMinAggregateOutputType = {
    id_editorial_pl: number | null
    id_autor: number | null
    fecha_registro: Date | null
    id_estado: number | null
  }

  export type EditorialMaxAggregateOutputType = {
    id_editorial_pl: number | null
    id_autor: number | null
    fecha_registro: Date | null
    id_estado: number | null
  }

  export type EditorialCountAggregateOutputType = {
    id_editorial_pl: number
    id_autor: number
    fecha_registro: number
    id_estado: number
    _all: number
  }


  export type EditorialAvgAggregateInputType = {
    id_editorial_pl?: true
    id_autor?: true
    id_estado?: true
  }

  export type EditorialSumAggregateInputType = {
    id_editorial_pl?: true
    id_autor?: true
    id_estado?: true
  }

  export type EditorialMinAggregateInputType = {
    id_editorial_pl?: true
    id_autor?: true
    fecha_registro?: true
    id_estado?: true
  }

  export type EditorialMaxAggregateInputType = {
    id_editorial_pl?: true
    id_autor?: true
    fecha_registro?: true
    id_estado?: true
  }

  export type EditorialCountAggregateInputType = {
    id_editorial_pl?: true
    id_autor?: true
    fecha_registro?: true
    id_estado?: true
    _all?: true
  }

  export type EditorialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which editorial to aggregate.
     */
    where?: editorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of editorials to fetch.
     */
    orderBy?: editorialOrderByWithRelationInput | editorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: editorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` editorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` editorials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned editorials
    **/
    _count?: true | EditorialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EditorialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EditorialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EditorialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EditorialMaxAggregateInputType
  }

  export type GetEditorialAggregateType<T extends EditorialAggregateArgs> = {
        [P in keyof T & keyof AggregateEditorial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEditorial[P]>
      : GetScalarType<T[P], AggregateEditorial[P]>
  }




  export type editorialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: editorialWhereInput
    orderBy?: editorialOrderByWithAggregationInput | editorialOrderByWithAggregationInput[]
    by: EditorialScalarFieldEnum[] | EditorialScalarFieldEnum
    having?: editorialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EditorialCountAggregateInputType | true
    _avg?: EditorialAvgAggregateInputType
    _sum?: EditorialSumAggregateInputType
    _min?: EditorialMinAggregateInputType
    _max?: EditorialMaxAggregateInputType
  }

  export type EditorialGroupByOutputType = {
    id_editorial_pl: number
    id_autor: number | null
    fecha_registro: Date | null
    id_estado: number
    _count: EditorialCountAggregateOutputType | null
    _avg: EditorialAvgAggregateOutputType | null
    _sum: EditorialSumAggregateOutputType | null
    _min: EditorialMinAggregateOutputType | null
    _max: EditorialMaxAggregateOutputType | null
  }

  type GetEditorialGroupByPayload<T extends editorialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EditorialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EditorialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EditorialGroupByOutputType[P]>
            : GetScalarType<T[P], EditorialGroupByOutputType[P]>
        }
      >
    >


  export type editorialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_editorial_pl?: boolean
    id_autor?: boolean
    fecha_registro?: boolean
    id_estado?: boolean
    cap_pl_ln?: boolean | editorial$cap_pl_lnArgs<ExtArgs>
    comentario?: boolean | editorial$comentarioArgs<ExtArgs>
    autor?: boolean | editorial$autorArgs<ExtArgs>
    pl_libre?: boolean | editorial$pl_libreArgs<ExtArgs>
    _count?: boolean | EditorialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["editorial"]>

  export type editorialSelectScalar = {
    id_editorial_pl?: boolean
    id_autor?: boolean
    fecha_registro?: boolean
    id_estado?: boolean
  }

  export type editorialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cap_pl_ln?: boolean | editorial$cap_pl_lnArgs<ExtArgs>
    comentario?: boolean | editorial$comentarioArgs<ExtArgs>
    autor?: boolean | editorial$autorArgs<ExtArgs>
    pl_libre?: boolean | editorial$pl_libreArgs<ExtArgs>
    _count?: boolean | EditorialCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $editorialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "editorial"
    objects: {
      cap_pl_ln: Prisma.$cap_pl_lnPayload<ExtArgs>[]
      comentario: Prisma.$comentarioPayload<ExtArgs>[]
      autor: Prisma.$autorPayload<ExtArgs> | null
      pl_libre: Prisma.$pl_librePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_editorial_pl: number
      id_autor: number | null
      fecha_registro: Date | null
      id_estado: number
    }, ExtArgs["result"]["editorial"]>
    composites: {}
  }


  type editorialGetPayload<S extends boolean | null | undefined | editorialDefaultArgs> = $Result.GetResult<Prisma.$editorialPayload, S>

  type editorialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<editorialFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EditorialCountAggregateInputType | true
    }

  export interface editorialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['editorial'], meta: { name: 'editorial' } }
    /**
     * Find zero or one Editorial that matches the filter.
     * @param {editorialFindUniqueArgs} args - Arguments to find a Editorial
     * @example
     * // Get one Editorial
     * const editorial = await prisma.editorial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends editorialFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, editorialFindUniqueArgs<ExtArgs>>
    ): Prisma__editorialClient<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Editorial that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {editorialFindUniqueOrThrowArgs} args - Arguments to find a Editorial
     * @example
     * // Get one Editorial
     * const editorial = await prisma.editorial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends editorialFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, editorialFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__editorialClient<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Editorial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {editorialFindFirstArgs} args - Arguments to find a Editorial
     * @example
     * // Get one Editorial
     * const editorial = await prisma.editorial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends editorialFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, editorialFindFirstArgs<ExtArgs>>
    ): Prisma__editorialClient<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Editorial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {editorialFindFirstOrThrowArgs} args - Arguments to find a Editorial
     * @example
     * // Get one Editorial
     * const editorial = await prisma.editorial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends editorialFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, editorialFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__editorialClient<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Editorials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {editorialFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Editorials
     * const editorials = await prisma.editorial.findMany()
     * 
     * // Get first 10 Editorials
     * const editorials = await prisma.editorial.findMany({ take: 10 })
     * 
     * // Only select the `id_editorial_pl`
     * const editorialWithId_editorial_plOnly = await prisma.editorial.findMany({ select: { id_editorial_pl: true } })
     * 
    **/
    findMany<T extends editorialFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, editorialFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Editorial.
     * @param {editorialCreateArgs} args - Arguments to create a Editorial.
     * @example
     * // Create one Editorial
     * const Editorial = await prisma.editorial.create({
     *   data: {
     *     // ... data to create a Editorial
     *   }
     * })
     * 
    **/
    create<T extends editorialCreateArgs<ExtArgs>>(
      args: SelectSubset<T, editorialCreateArgs<ExtArgs>>
    ): Prisma__editorialClient<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Editorials.
     *     @param {editorialCreateManyArgs} args - Arguments to create many Editorials.
     *     @example
     *     // Create many Editorials
     *     const editorial = await prisma.editorial.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends editorialCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, editorialCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Editorial.
     * @param {editorialDeleteArgs} args - Arguments to delete one Editorial.
     * @example
     * // Delete one Editorial
     * const Editorial = await prisma.editorial.delete({
     *   where: {
     *     // ... filter to delete one Editorial
     *   }
     * })
     * 
    **/
    delete<T extends editorialDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, editorialDeleteArgs<ExtArgs>>
    ): Prisma__editorialClient<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Editorial.
     * @param {editorialUpdateArgs} args - Arguments to update one Editorial.
     * @example
     * // Update one Editorial
     * const editorial = await prisma.editorial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends editorialUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, editorialUpdateArgs<ExtArgs>>
    ): Prisma__editorialClient<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Editorials.
     * @param {editorialDeleteManyArgs} args - Arguments to filter Editorials to delete.
     * @example
     * // Delete a few Editorials
     * const { count } = await prisma.editorial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends editorialDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, editorialDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Editorials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {editorialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Editorials
     * const editorial = await prisma.editorial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends editorialUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, editorialUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Editorial.
     * @param {editorialUpsertArgs} args - Arguments to update or create a Editorial.
     * @example
     * // Update or create a Editorial
     * const editorial = await prisma.editorial.upsert({
     *   create: {
     *     // ... data to create a Editorial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Editorial we want to update
     *   }
     * })
    **/
    upsert<T extends editorialUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, editorialUpsertArgs<ExtArgs>>
    ): Prisma__editorialClient<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Editorials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {editorialCountArgs} args - Arguments to filter Editorials to count.
     * @example
     * // Count the number of Editorials
     * const count = await prisma.editorial.count({
     *   where: {
     *     // ... the filter for the Editorials we want to count
     *   }
     * })
    **/
    count<T extends editorialCountArgs>(
      args?: Subset<T, editorialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EditorialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Editorial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EditorialAggregateArgs>(args: Subset<T, EditorialAggregateArgs>): Prisma.PrismaPromise<GetEditorialAggregateType<T>>

    /**
     * Group by Editorial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {editorialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends editorialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: editorialGroupByArgs['orderBy'] }
        : { orderBy?: editorialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, editorialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEditorialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the editorial model
   */
  readonly fields: editorialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for editorial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__editorialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cap_pl_ln<T extends editorial$cap_pl_lnArgs<ExtArgs> = {}>(args?: Subset<T, editorial$cap_pl_lnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cap_pl_lnPayload<ExtArgs>, T, 'findMany'> | Null>;

    comentario<T extends editorial$comentarioArgs<ExtArgs> = {}>(args?: Subset<T, editorial$comentarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, 'findMany'> | Null>;

    autor<T extends editorial$autorArgs<ExtArgs> = {}>(args?: Subset<T, editorial$autorArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    pl_libre<T extends editorial$pl_libreArgs<ExtArgs> = {}>(args?: Subset<T, editorial$pl_libreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pl_librePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the editorial model
   */ 
  interface editorialFieldRefs {
    readonly id_editorial_pl: FieldRef<"editorial", 'Int'>
    readonly id_autor: FieldRef<"editorial", 'Int'>
    readonly fecha_registro: FieldRef<"editorial", 'DateTime'>
    readonly id_estado: FieldRef<"editorial", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * editorial findUnique
   */
  export type editorialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: editorialInclude<ExtArgs> | null
    /**
     * Filter, which editorial to fetch.
     */
    where: editorialWhereUniqueInput
  }


  /**
   * editorial findUniqueOrThrow
   */
  export type editorialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: editorialInclude<ExtArgs> | null
    /**
     * Filter, which editorial to fetch.
     */
    where: editorialWhereUniqueInput
  }


  /**
   * editorial findFirst
   */
  export type editorialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: editorialInclude<ExtArgs> | null
    /**
     * Filter, which editorial to fetch.
     */
    where?: editorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of editorials to fetch.
     */
    orderBy?: editorialOrderByWithRelationInput | editorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for editorials.
     */
    cursor?: editorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` editorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` editorials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of editorials.
     */
    distinct?: EditorialScalarFieldEnum | EditorialScalarFieldEnum[]
  }


  /**
   * editorial findFirstOrThrow
   */
  export type editorialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: editorialInclude<ExtArgs> | null
    /**
     * Filter, which editorial to fetch.
     */
    where?: editorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of editorials to fetch.
     */
    orderBy?: editorialOrderByWithRelationInput | editorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for editorials.
     */
    cursor?: editorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` editorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` editorials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of editorials.
     */
    distinct?: EditorialScalarFieldEnum | EditorialScalarFieldEnum[]
  }


  /**
   * editorial findMany
   */
  export type editorialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: editorialInclude<ExtArgs> | null
    /**
     * Filter, which editorials to fetch.
     */
    where?: editorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of editorials to fetch.
     */
    orderBy?: editorialOrderByWithRelationInput | editorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing editorials.
     */
    cursor?: editorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` editorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` editorials.
     */
    skip?: number
    distinct?: EditorialScalarFieldEnum | EditorialScalarFieldEnum[]
  }


  /**
   * editorial create
   */
  export type editorialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: editorialInclude<ExtArgs> | null
    /**
     * The data needed to create a editorial.
     */
    data: XOR<editorialCreateInput, editorialUncheckedCreateInput>
  }


  /**
   * editorial createMany
   */
  export type editorialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many editorials.
     */
    data: editorialCreateManyInput | editorialCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * editorial update
   */
  export type editorialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: editorialInclude<ExtArgs> | null
    /**
     * The data needed to update a editorial.
     */
    data: XOR<editorialUpdateInput, editorialUncheckedUpdateInput>
    /**
     * Choose, which editorial to update.
     */
    where: editorialWhereUniqueInput
  }


  /**
   * editorial updateMany
   */
  export type editorialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update editorials.
     */
    data: XOR<editorialUpdateManyMutationInput, editorialUncheckedUpdateManyInput>
    /**
     * Filter which editorials to update
     */
    where?: editorialWhereInput
  }


  /**
   * editorial upsert
   */
  export type editorialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: editorialInclude<ExtArgs> | null
    /**
     * The filter to search for the editorial to update in case it exists.
     */
    where: editorialWhereUniqueInput
    /**
     * In case the editorial found by the `where` argument doesn't exist, create a new editorial with this data.
     */
    create: XOR<editorialCreateInput, editorialUncheckedCreateInput>
    /**
     * In case the editorial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<editorialUpdateInput, editorialUncheckedUpdateInput>
  }


  /**
   * editorial delete
   */
  export type editorialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: editorialInclude<ExtArgs> | null
    /**
     * Filter which editorial to delete.
     */
    where: editorialWhereUniqueInput
  }


  /**
   * editorial deleteMany
   */
  export type editorialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which editorials to delete
     */
    where?: editorialWhereInput
  }


  /**
   * editorial.cap_pl_ln
   */
  export type editorial$cap_pl_lnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cap_pl_ln
     */
    select?: cap_pl_lnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cap_pl_lnInclude<ExtArgs> | null
    where?: cap_pl_lnWhereInput
    orderBy?: cap_pl_lnOrderByWithRelationInput | cap_pl_lnOrderByWithRelationInput[]
    cursor?: cap_pl_lnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cap_pl_lnScalarFieldEnum | Cap_pl_lnScalarFieldEnum[]
  }


  /**
   * editorial.comentario
   */
  export type editorial$comentarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comentarioInclude<ExtArgs> | null
    where?: comentarioWhereInput
    orderBy?: comentarioOrderByWithRelationInput | comentarioOrderByWithRelationInput[]
    cursor?: comentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }


  /**
   * editorial.autor
   */
  export type editorial$autorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: autorInclude<ExtArgs> | null
    where?: autorWhereInput
  }


  /**
   * editorial.pl_libre
   */
  export type editorial$pl_libreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_libre
     */
    select?: pl_libreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_libreInclude<ExtArgs> | null
    where?: pl_libreWhereInput
    orderBy?: pl_libreOrderByWithRelationInput | pl_libreOrderByWithRelationInput[]
    cursor?: pl_libreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pl_libreScalarFieldEnum | Pl_libreScalarFieldEnum[]
  }


  /**
   * editorial without action
   */
  export type editorialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: editorialInclude<ExtArgs> | null
  }



  /**
   * Model pl_libre
   */

  export type AggregatePl_libre = {
    _count: Pl_libreCountAggregateOutputType | null
    _avg: Pl_libreAvgAggregateOutputType | null
    _sum: Pl_libreSumAggregateOutputType | null
    _min: Pl_libreMinAggregateOutputType | null
    _max: Pl_libreMaxAggregateOutputType | null
  }

  export type Pl_libreAvgAggregateOutputType = {
    id_pl_libre: number | null
    id_categoria: number | null
    id_editorial_pl: number | null
    id_etiqueta: number | null
  }

  export type Pl_libreSumAggregateOutputType = {
    id_pl_libre: number | null
    id_categoria: number | null
    id_editorial_pl: number | null
    id_etiqueta: number | null
  }

  export type Pl_libreMinAggregateOutputType = {
    id_pl_libre: number | null
    id_categoria: number | null
    id_editorial_pl: number | null
    id_etiqueta: number | null
    contenido: string | null
  }

  export type Pl_libreMaxAggregateOutputType = {
    id_pl_libre: number | null
    id_categoria: number | null
    id_editorial_pl: number | null
    id_etiqueta: number | null
    contenido: string | null
  }

  export type Pl_libreCountAggregateOutputType = {
    id_pl_libre: number
    id_categoria: number
    id_editorial_pl: number
    id_etiqueta: number
    contenido: number
    _all: number
  }


  export type Pl_libreAvgAggregateInputType = {
    id_pl_libre?: true
    id_categoria?: true
    id_editorial_pl?: true
    id_etiqueta?: true
  }

  export type Pl_libreSumAggregateInputType = {
    id_pl_libre?: true
    id_categoria?: true
    id_editorial_pl?: true
    id_etiqueta?: true
  }

  export type Pl_libreMinAggregateInputType = {
    id_pl_libre?: true
    id_categoria?: true
    id_editorial_pl?: true
    id_etiqueta?: true
    contenido?: true
  }

  export type Pl_libreMaxAggregateInputType = {
    id_pl_libre?: true
    id_categoria?: true
    id_editorial_pl?: true
    id_etiqueta?: true
    contenido?: true
  }

  export type Pl_libreCountAggregateInputType = {
    id_pl_libre?: true
    id_categoria?: true
    id_editorial_pl?: true
    id_etiqueta?: true
    contenido?: true
    _all?: true
  }

  export type Pl_libreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pl_libre to aggregate.
     */
    where?: pl_libreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pl_libres to fetch.
     */
    orderBy?: pl_libreOrderByWithRelationInput | pl_libreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pl_libreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pl_libres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pl_libres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pl_libres
    **/
    _count?: true | Pl_libreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pl_libreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pl_libreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pl_libreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pl_libreMaxAggregateInputType
  }

  export type GetPl_libreAggregateType<T extends Pl_libreAggregateArgs> = {
        [P in keyof T & keyof AggregatePl_libre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePl_libre[P]>
      : GetScalarType<T[P], AggregatePl_libre[P]>
  }




  export type pl_libreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pl_libreWhereInput
    orderBy?: pl_libreOrderByWithAggregationInput | pl_libreOrderByWithAggregationInput[]
    by: Pl_libreScalarFieldEnum[] | Pl_libreScalarFieldEnum
    having?: pl_libreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pl_libreCountAggregateInputType | true
    _avg?: Pl_libreAvgAggregateInputType
    _sum?: Pl_libreSumAggregateInputType
    _min?: Pl_libreMinAggregateInputType
    _max?: Pl_libreMaxAggregateInputType
  }

  export type Pl_libreGroupByOutputType = {
    id_pl_libre: number
    id_categoria: number | null
    id_editorial_pl: number | null
    id_etiqueta: number | null
    contenido: string | null
    _count: Pl_libreCountAggregateOutputType | null
    _avg: Pl_libreAvgAggregateOutputType | null
    _sum: Pl_libreSumAggregateOutputType | null
    _min: Pl_libreMinAggregateOutputType | null
    _max: Pl_libreMaxAggregateOutputType | null
  }

  type GetPl_libreGroupByPayload<T extends pl_libreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pl_libreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pl_libreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pl_libreGroupByOutputType[P]>
            : GetScalarType<T[P], Pl_libreGroupByOutputType[P]>
        }
      >
    >


  export type pl_libreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pl_libre?: boolean
    id_categoria?: boolean
    id_editorial_pl?: boolean
    id_etiqueta?: boolean
    contenido?: boolean
    categoria?: boolean | pl_libre$categoriaArgs<ExtArgs>
    editorial?: boolean | pl_libre$editorialArgs<ExtArgs>
    etiqueta?: boolean | pl_libre$etiquetaArgs<ExtArgs>
  }, ExtArgs["result"]["pl_libre"]>

  export type pl_libreSelectScalar = {
    id_pl_libre?: boolean
    id_categoria?: boolean
    id_editorial_pl?: boolean
    id_etiqueta?: boolean
    contenido?: boolean
  }

  export type pl_libreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | pl_libre$categoriaArgs<ExtArgs>
    editorial?: boolean | pl_libre$editorialArgs<ExtArgs>
    etiqueta?: boolean | pl_libre$etiquetaArgs<ExtArgs>
  }


  export type $pl_librePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pl_libre"
    objects: {
      categoria: Prisma.$categoriaPayload<ExtArgs> | null
      editorial: Prisma.$editorialPayload<ExtArgs> | null
      etiqueta: Prisma.$etiquetaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pl_libre: number
      id_categoria: number | null
      id_editorial_pl: number | null
      id_etiqueta: number | null
      contenido: string | null
    }, ExtArgs["result"]["pl_libre"]>
    composites: {}
  }


  type pl_libreGetPayload<S extends boolean | null | undefined | pl_libreDefaultArgs> = $Result.GetResult<Prisma.$pl_librePayload, S>

  type pl_libreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<pl_libreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Pl_libreCountAggregateInputType | true
    }

  export interface pl_libreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pl_libre'], meta: { name: 'pl_libre' } }
    /**
     * Find zero or one Pl_libre that matches the filter.
     * @param {pl_libreFindUniqueArgs} args - Arguments to find a Pl_libre
     * @example
     * // Get one Pl_libre
     * const pl_libre = await prisma.pl_libre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends pl_libreFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, pl_libreFindUniqueArgs<ExtArgs>>
    ): Prisma__pl_libreClient<$Result.GetResult<Prisma.$pl_librePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Pl_libre that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {pl_libreFindUniqueOrThrowArgs} args - Arguments to find a Pl_libre
     * @example
     * // Get one Pl_libre
     * const pl_libre = await prisma.pl_libre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends pl_libreFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pl_libreFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__pl_libreClient<$Result.GetResult<Prisma.$pl_librePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Pl_libre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pl_libreFindFirstArgs} args - Arguments to find a Pl_libre
     * @example
     * // Get one Pl_libre
     * const pl_libre = await prisma.pl_libre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends pl_libreFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, pl_libreFindFirstArgs<ExtArgs>>
    ): Prisma__pl_libreClient<$Result.GetResult<Prisma.$pl_librePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Pl_libre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pl_libreFindFirstOrThrowArgs} args - Arguments to find a Pl_libre
     * @example
     * // Get one Pl_libre
     * const pl_libre = await prisma.pl_libre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends pl_libreFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pl_libreFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__pl_libreClient<$Result.GetResult<Prisma.$pl_librePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pl_libres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pl_libreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pl_libres
     * const pl_libres = await prisma.pl_libre.findMany()
     * 
     * // Get first 10 Pl_libres
     * const pl_libres = await prisma.pl_libre.findMany({ take: 10 })
     * 
     * // Only select the `id_pl_libre`
     * const pl_libreWithId_pl_libreOnly = await prisma.pl_libre.findMany({ select: { id_pl_libre: true } })
     * 
    **/
    findMany<T extends pl_libreFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pl_libreFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pl_librePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Pl_libre.
     * @param {pl_libreCreateArgs} args - Arguments to create a Pl_libre.
     * @example
     * // Create one Pl_libre
     * const Pl_libre = await prisma.pl_libre.create({
     *   data: {
     *     // ... data to create a Pl_libre
     *   }
     * })
     * 
    **/
    create<T extends pl_libreCreateArgs<ExtArgs>>(
      args: SelectSubset<T, pl_libreCreateArgs<ExtArgs>>
    ): Prisma__pl_libreClient<$Result.GetResult<Prisma.$pl_librePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pl_libres.
     *     @param {pl_libreCreateManyArgs} args - Arguments to create many Pl_libres.
     *     @example
     *     // Create many Pl_libres
     *     const pl_libre = await prisma.pl_libre.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends pl_libreCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pl_libreCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pl_libre.
     * @param {pl_libreDeleteArgs} args - Arguments to delete one Pl_libre.
     * @example
     * // Delete one Pl_libre
     * const Pl_libre = await prisma.pl_libre.delete({
     *   where: {
     *     // ... filter to delete one Pl_libre
     *   }
     * })
     * 
    **/
    delete<T extends pl_libreDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, pl_libreDeleteArgs<ExtArgs>>
    ): Prisma__pl_libreClient<$Result.GetResult<Prisma.$pl_librePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Pl_libre.
     * @param {pl_libreUpdateArgs} args - Arguments to update one Pl_libre.
     * @example
     * // Update one Pl_libre
     * const pl_libre = await prisma.pl_libre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends pl_libreUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, pl_libreUpdateArgs<ExtArgs>>
    ): Prisma__pl_libreClient<$Result.GetResult<Prisma.$pl_librePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pl_libres.
     * @param {pl_libreDeleteManyArgs} args - Arguments to filter Pl_libres to delete.
     * @example
     * // Delete a few Pl_libres
     * const { count } = await prisma.pl_libre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends pl_libreDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pl_libreDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pl_libres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pl_libreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pl_libres
     * const pl_libre = await prisma.pl_libre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends pl_libreUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, pl_libreUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pl_libre.
     * @param {pl_libreUpsertArgs} args - Arguments to update or create a Pl_libre.
     * @example
     * // Update or create a Pl_libre
     * const pl_libre = await prisma.pl_libre.upsert({
     *   create: {
     *     // ... data to create a Pl_libre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pl_libre we want to update
     *   }
     * })
    **/
    upsert<T extends pl_libreUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, pl_libreUpsertArgs<ExtArgs>>
    ): Prisma__pl_libreClient<$Result.GetResult<Prisma.$pl_librePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pl_libres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pl_libreCountArgs} args - Arguments to filter Pl_libres to count.
     * @example
     * // Count the number of Pl_libres
     * const count = await prisma.pl_libre.count({
     *   where: {
     *     // ... the filter for the Pl_libres we want to count
     *   }
     * })
    **/
    count<T extends pl_libreCountArgs>(
      args?: Subset<T, pl_libreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pl_libreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pl_libre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pl_libreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Pl_libreAggregateArgs>(args: Subset<T, Pl_libreAggregateArgs>): Prisma.PrismaPromise<GetPl_libreAggregateType<T>>

    /**
     * Group by Pl_libre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pl_libreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pl_libreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pl_libreGroupByArgs['orderBy'] }
        : { orderBy?: pl_libreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pl_libreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPl_libreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pl_libre model
   */
  readonly fields: pl_libreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pl_libre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pl_libreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    categoria<T extends pl_libre$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, pl_libre$categoriaArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    editorial<T extends pl_libre$editorialArgs<ExtArgs> = {}>(args?: Subset<T, pl_libre$editorialArgs<ExtArgs>>): Prisma__editorialClient<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    etiqueta<T extends pl_libre$etiquetaArgs<ExtArgs> = {}>(args?: Subset<T, pl_libre$etiquetaArgs<ExtArgs>>): Prisma__etiquetaClient<$Result.GetResult<Prisma.$etiquetaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the pl_libre model
   */ 
  interface pl_libreFieldRefs {
    readonly id_pl_libre: FieldRef<"pl_libre", 'Int'>
    readonly id_categoria: FieldRef<"pl_libre", 'Int'>
    readonly id_editorial_pl: FieldRef<"pl_libre", 'Int'>
    readonly id_etiqueta: FieldRef<"pl_libre", 'Int'>
    readonly contenido: FieldRef<"pl_libre", 'String'>
  }
    

  // Custom InputTypes

  /**
   * pl_libre findUnique
   */
  export type pl_libreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_libre
     */
    select?: pl_libreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_libreInclude<ExtArgs> | null
    /**
     * Filter, which pl_libre to fetch.
     */
    where: pl_libreWhereUniqueInput
  }


  /**
   * pl_libre findUniqueOrThrow
   */
  export type pl_libreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_libre
     */
    select?: pl_libreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_libreInclude<ExtArgs> | null
    /**
     * Filter, which pl_libre to fetch.
     */
    where: pl_libreWhereUniqueInput
  }


  /**
   * pl_libre findFirst
   */
  export type pl_libreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_libre
     */
    select?: pl_libreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_libreInclude<ExtArgs> | null
    /**
     * Filter, which pl_libre to fetch.
     */
    where?: pl_libreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pl_libres to fetch.
     */
    orderBy?: pl_libreOrderByWithRelationInput | pl_libreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pl_libres.
     */
    cursor?: pl_libreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pl_libres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pl_libres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pl_libres.
     */
    distinct?: Pl_libreScalarFieldEnum | Pl_libreScalarFieldEnum[]
  }


  /**
   * pl_libre findFirstOrThrow
   */
  export type pl_libreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_libre
     */
    select?: pl_libreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_libreInclude<ExtArgs> | null
    /**
     * Filter, which pl_libre to fetch.
     */
    where?: pl_libreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pl_libres to fetch.
     */
    orderBy?: pl_libreOrderByWithRelationInput | pl_libreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pl_libres.
     */
    cursor?: pl_libreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pl_libres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pl_libres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pl_libres.
     */
    distinct?: Pl_libreScalarFieldEnum | Pl_libreScalarFieldEnum[]
  }


  /**
   * pl_libre findMany
   */
  export type pl_libreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_libre
     */
    select?: pl_libreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_libreInclude<ExtArgs> | null
    /**
     * Filter, which pl_libres to fetch.
     */
    where?: pl_libreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pl_libres to fetch.
     */
    orderBy?: pl_libreOrderByWithRelationInput | pl_libreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pl_libres.
     */
    cursor?: pl_libreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pl_libres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pl_libres.
     */
    skip?: number
    distinct?: Pl_libreScalarFieldEnum | Pl_libreScalarFieldEnum[]
  }


  /**
   * pl_libre create
   */
  export type pl_libreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_libre
     */
    select?: pl_libreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_libreInclude<ExtArgs> | null
    /**
     * The data needed to create a pl_libre.
     */
    data?: XOR<pl_libreCreateInput, pl_libreUncheckedCreateInput>
  }


  /**
   * pl_libre createMany
   */
  export type pl_libreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pl_libres.
     */
    data: pl_libreCreateManyInput | pl_libreCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * pl_libre update
   */
  export type pl_libreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_libre
     */
    select?: pl_libreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_libreInclude<ExtArgs> | null
    /**
     * The data needed to update a pl_libre.
     */
    data: XOR<pl_libreUpdateInput, pl_libreUncheckedUpdateInput>
    /**
     * Choose, which pl_libre to update.
     */
    where: pl_libreWhereUniqueInput
  }


  /**
   * pl_libre updateMany
   */
  export type pl_libreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pl_libres.
     */
    data: XOR<pl_libreUpdateManyMutationInput, pl_libreUncheckedUpdateManyInput>
    /**
     * Filter which pl_libres to update
     */
    where?: pl_libreWhereInput
  }


  /**
   * pl_libre upsert
   */
  export type pl_libreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_libre
     */
    select?: pl_libreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_libreInclude<ExtArgs> | null
    /**
     * The filter to search for the pl_libre to update in case it exists.
     */
    where: pl_libreWhereUniqueInput
    /**
     * In case the pl_libre found by the `where` argument doesn't exist, create a new pl_libre with this data.
     */
    create: XOR<pl_libreCreateInput, pl_libreUncheckedCreateInput>
    /**
     * In case the pl_libre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pl_libreUpdateInput, pl_libreUncheckedUpdateInput>
  }


  /**
   * pl_libre delete
   */
  export type pl_libreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_libre
     */
    select?: pl_libreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_libreInclude<ExtArgs> | null
    /**
     * Filter which pl_libre to delete.
     */
    where: pl_libreWhereUniqueInput
  }


  /**
   * pl_libre deleteMany
   */
  export type pl_libreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pl_libres to delete
     */
    where?: pl_libreWhereInput
  }


  /**
   * pl_libre.categoria
   */
  export type pl_libre$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaInclude<ExtArgs> | null
    where?: categoriaWhereInput
  }


  /**
   * pl_libre.editorial
   */
  export type pl_libre$editorialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: editorialInclude<ExtArgs> | null
    where?: editorialWhereInput
  }


  /**
   * pl_libre.etiqueta
   */
  export type pl_libre$etiquetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the etiqueta
     */
    select?: etiquetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: etiquetaInclude<ExtArgs> | null
    where?: etiquetaWhereInput
  }


  /**
   * pl_libre without action
   */
  export type pl_libreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_libre
     */
    select?: pl_libreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_libreInclude<ExtArgs> | null
  }



  /**
   * Model pl_nl
   */

  export type AggregatePl_nl = {
    _count: Pl_nlCountAggregateOutputType | null
    _avg: Pl_nlAvgAggregateOutputType | null
    _sum: Pl_nlSumAggregateOutputType | null
    _min: Pl_nlMinAggregateOutputType | null
    _max: Pl_nlMaxAggregateOutputType | null
  }

  export type Pl_nlAvgAggregateOutputType = {
    id_pl_ln: number | null
    id_genero: number | null
    id_categoria: number | null
  }

  export type Pl_nlSumAggregateOutputType = {
    id_pl_ln: number | null
    id_genero: number | null
    id_categoria: number | null
  }

  export type Pl_nlMinAggregateOutputType = {
    id_pl_ln: number | null
    titulo: string | null
    id_genero: number | null
    id_categoria: number | null
    descripcion: string | null
    estado: string | null
  }

  export type Pl_nlMaxAggregateOutputType = {
    id_pl_ln: number | null
    titulo: string | null
    id_genero: number | null
    id_categoria: number | null
    descripcion: string | null
    estado: string | null
  }

  export type Pl_nlCountAggregateOutputType = {
    id_pl_ln: number
    titulo: number
    id_genero: number
    id_categoria: number
    descripcion: number
    estado: number
    _all: number
  }


  export type Pl_nlAvgAggregateInputType = {
    id_pl_ln?: true
    id_genero?: true
    id_categoria?: true
  }

  export type Pl_nlSumAggregateInputType = {
    id_pl_ln?: true
    id_genero?: true
    id_categoria?: true
  }

  export type Pl_nlMinAggregateInputType = {
    id_pl_ln?: true
    titulo?: true
    id_genero?: true
    id_categoria?: true
    descripcion?: true
    estado?: true
  }

  export type Pl_nlMaxAggregateInputType = {
    id_pl_ln?: true
    titulo?: true
    id_genero?: true
    id_categoria?: true
    descripcion?: true
    estado?: true
  }

  export type Pl_nlCountAggregateInputType = {
    id_pl_ln?: true
    titulo?: true
    id_genero?: true
    id_categoria?: true
    descripcion?: true
    estado?: true
    _all?: true
  }

  export type Pl_nlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pl_nl to aggregate.
     */
    where?: pl_nlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pl_nls to fetch.
     */
    orderBy?: pl_nlOrderByWithRelationInput | pl_nlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pl_nlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pl_nls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pl_nls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pl_nls
    **/
    _count?: true | Pl_nlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pl_nlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pl_nlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pl_nlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pl_nlMaxAggregateInputType
  }

  export type GetPl_nlAggregateType<T extends Pl_nlAggregateArgs> = {
        [P in keyof T & keyof AggregatePl_nl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePl_nl[P]>
      : GetScalarType<T[P], AggregatePl_nl[P]>
  }




  export type pl_nlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pl_nlWhereInput
    orderBy?: pl_nlOrderByWithAggregationInput | pl_nlOrderByWithAggregationInput[]
    by: Pl_nlScalarFieldEnum[] | Pl_nlScalarFieldEnum
    having?: pl_nlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pl_nlCountAggregateInputType | true
    _avg?: Pl_nlAvgAggregateInputType
    _sum?: Pl_nlSumAggregateInputType
    _min?: Pl_nlMinAggregateInputType
    _max?: Pl_nlMaxAggregateInputType
  }

  export type Pl_nlGroupByOutputType = {
    id_pl_ln: number
    titulo: string | null
    id_genero: number | null
    id_categoria: number | null
    descripcion: string | null
    estado: string
    _count: Pl_nlCountAggregateOutputType | null
    _avg: Pl_nlAvgAggregateOutputType | null
    _sum: Pl_nlSumAggregateOutputType | null
    _min: Pl_nlMinAggregateOutputType | null
    _max: Pl_nlMaxAggregateOutputType | null
  }

  type GetPl_nlGroupByPayload<T extends pl_nlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pl_nlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pl_nlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pl_nlGroupByOutputType[P]>
            : GetScalarType<T[P], Pl_nlGroupByOutputType[P]>
        }
      >
    >


  export type pl_nlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pl_ln?: boolean
    titulo?: boolean
    id_genero?: boolean
    id_categoria?: boolean
    descripcion?: boolean
    estado?: boolean
    cap_pl_ln?: boolean | pl_nl$cap_pl_lnArgs<ExtArgs>
    genero?: boolean | pl_nl$generoArgs<ExtArgs>
    categoria?: boolean | pl_nl$categoriaArgs<ExtArgs>
    _count?: boolean | Pl_nlCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pl_nl"]>

  export type pl_nlSelectScalar = {
    id_pl_ln?: boolean
    titulo?: boolean
    id_genero?: boolean
    id_categoria?: boolean
    descripcion?: boolean
    estado?: boolean
  }

  export type pl_nlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cap_pl_ln?: boolean | pl_nl$cap_pl_lnArgs<ExtArgs>
    genero?: boolean | pl_nl$generoArgs<ExtArgs>
    categoria?: boolean | pl_nl$categoriaArgs<ExtArgs>
    _count?: boolean | Pl_nlCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $pl_nlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pl_nl"
    objects: {
      cap_pl_ln: Prisma.$cap_pl_lnPayload<ExtArgs>[]
      genero: Prisma.$generoPayload<ExtArgs> | null
      categoria: Prisma.$categoriaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pl_ln: number
      titulo: string | null
      id_genero: number | null
      id_categoria: number | null
      descripcion: string | null
      estado: string
    }, ExtArgs["result"]["pl_nl"]>
    composites: {}
  }


  type pl_nlGetPayload<S extends boolean | null | undefined | pl_nlDefaultArgs> = $Result.GetResult<Prisma.$pl_nlPayload, S>

  type pl_nlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<pl_nlFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Pl_nlCountAggregateInputType | true
    }

  export interface pl_nlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pl_nl'], meta: { name: 'pl_nl' } }
    /**
     * Find zero or one Pl_nl that matches the filter.
     * @param {pl_nlFindUniqueArgs} args - Arguments to find a Pl_nl
     * @example
     * // Get one Pl_nl
     * const pl_nl = await prisma.pl_nl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends pl_nlFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, pl_nlFindUniqueArgs<ExtArgs>>
    ): Prisma__pl_nlClient<$Result.GetResult<Prisma.$pl_nlPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Pl_nl that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {pl_nlFindUniqueOrThrowArgs} args - Arguments to find a Pl_nl
     * @example
     * // Get one Pl_nl
     * const pl_nl = await prisma.pl_nl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends pl_nlFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pl_nlFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__pl_nlClient<$Result.GetResult<Prisma.$pl_nlPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Pl_nl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pl_nlFindFirstArgs} args - Arguments to find a Pl_nl
     * @example
     * // Get one Pl_nl
     * const pl_nl = await prisma.pl_nl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends pl_nlFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, pl_nlFindFirstArgs<ExtArgs>>
    ): Prisma__pl_nlClient<$Result.GetResult<Prisma.$pl_nlPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Pl_nl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pl_nlFindFirstOrThrowArgs} args - Arguments to find a Pl_nl
     * @example
     * // Get one Pl_nl
     * const pl_nl = await prisma.pl_nl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends pl_nlFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pl_nlFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__pl_nlClient<$Result.GetResult<Prisma.$pl_nlPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pl_nls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pl_nlFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pl_nls
     * const pl_nls = await prisma.pl_nl.findMany()
     * 
     * // Get first 10 Pl_nls
     * const pl_nls = await prisma.pl_nl.findMany({ take: 10 })
     * 
     * // Only select the `id_pl_ln`
     * const pl_nlWithId_pl_lnOnly = await prisma.pl_nl.findMany({ select: { id_pl_ln: true } })
     * 
    **/
    findMany<T extends pl_nlFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pl_nlFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pl_nlPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Pl_nl.
     * @param {pl_nlCreateArgs} args - Arguments to create a Pl_nl.
     * @example
     * // Create one Pl_nl
     * const Pl_nl = await prisma.pl_nl.create({
     *   data: {
     *     // ... data to create a Pl_nl
     *   }
     * })
     * 
    **/
    create<T extends pl_nlCreateArgs<ExtArgs>>(
      args: SelectSubset<T, pl_nlCreateArgs<ExtArgs>>
    ): Prisma__pl_nlClient<$Result.GetResult<Prisma.$pl_nlPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pl_nls.
     *     @param {pl_nlCreateManyArgs} args - Arguments to create many Pl_nls.
     *     @example
     *     // Create many Pl_nls
     *     const pl_nl = await prisma.pl_nl.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends pl_nlCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pl_nlCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pl_nl.
     * @param {pl_nlDeleteArgs} args - Arguments to delete one Pl_nl.
     * @example
     * // Delete one Pl_nl
     * const Pl_nl = await prisma.pl_nl.delete({
     *   where: {
     *     // ... filter to delete one Pl_nl
     *   }
     * })
     * 
    **/
    delete<T extends pl_nlDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, pl_nlDeleteArgs<ExtArgs>>
    ): Prisma__pl_nlClient<$Result.GetResult<Prisma.$pl_nlPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Pl_nl.
     * @param {pl_nlUpdateArgs} args - Arguments to update one Pl_nl.
     * @example
     * // Update one Pl_nl
     * const pl_nl = await prisma.pl_nl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends pl_nlUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, pl_nlUpdateArgs<ExtArgs>>
    ): Prisma__pl_nlClient<$Result.GetResult<Prisma.$pl_nlPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pl_nls.
     * @param {pl_nlDeleteManyArgs} args - Arguments to filter Pl_nls to delete.
     * @example
     * // Delete a few Pl_nls
     * const { count } = await prisma.pl_nl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends pl_nlDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pl_nlDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pl_nls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pl_nlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pl_nls
     * const pl_nl = await prisma.pl_nl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends pl_nlUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, pl_nlUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pl_nl.
     * @param {pl_nlUpsertArgs} args - Arguments to update or create a Pl_nl.
     * @example
     * // Update or create a Pl_nl
     * const pl_nl = await prisma.pl_nl.upsert({
     *   create: {
     *     // ... data to create a Pl_nl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pl_nl we want to update
     *   }
     * })
    **/
    upsert<T extends pl_nlUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, pl_nlUpsertArgs<ExtArgs>>
    ): Prisma__pl_nlClient<$Result.GetResult<Prisma.$pl_nlPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pl_nls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pl_nlCountArgs} args - Arguments to filter Pl_nls to count.
     * @example
     * // Count the number of Pl_nls
     * const count = await prisma.pl_nl.count({
     *   where: {
     *     // ... the filter for the Pl_nls we want to count
     *   }
     * })
    **/
    count<T extends pl_nlCountArgs>(
      args?: Subset<T, pl_nlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pl_nlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pl_nl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pl_nlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Pl_nlAggregateArgs>(args: Subset<T, Pl_nlAggregateArgs>): Prisma.PrismaPromise<GetPl_nlAggregateType<T>>

    /**
     * Group by Pl_nl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pl_nlGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pl_nlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pl_nlGroupByArgs['orderBy'] }
        : { orderBy?: pl_nlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pl_nlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPl_nlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pl_nl model
   */
  readonly fields: pl_nlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pl_nl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pl_nlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cap_pl_ln<T extends pl_nl$cap_pl_lnArgs<ExtArgs> = {}>(args?: Subset<T, pl_nl$cap_pl_lnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cap_pl_lnPayload<ExtArgs>, T, 'findMany'> | Null>;

    genero<T extends pl_nl$generoArgs<ExtArgs> = {}>(args?: Subset<T, pl_nl$generoArgs<ExtArgs>>): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    categoria<T extends pl_nl$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, pl_nl$categoriaArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the pl_nl model
   */ 
  interface pl_nlFieldRefs {
    readonly id_pl_ln: FieldRef<"pl_nl", 'Int'>
    readonly titulo: FieldRef<"pl_nl", 'String'>
    readonly id_genero: FieldRef<"pl_nl", 'Int'>
    readonly id_categoria: FieldRef<"pl_nl", 'Int'>
    readonly descripcion: FieldRef<"pl_nl", 'String'>
    readonly estado: FieldRef<"pl_nl", 'String'>
  }
    

  // Custom InputTypes

  /**
   * pl_nl findUnique
   */
  export type pl_nlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_nl
     */
    select?: pl_nlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_nlInclude<ExtArgs> | null
    /**
     * Filter, which pl_nl to fetch.
     */
    where: pl_nlWhereUniqueInput
  }


  /**
   * pl_nl findUniqueOrThrow
   */
  export type pl_nlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_nl
     */
    select?: pl_nlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_nlInclude<ExtArgs> | null
    /**
     * Filter, which pl_nl to fetch.
     */
    where: pl_nlWhereUniqueInput
  }


  /**
   * pl_nl findFirst
   */
  export type pl_nlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_nl
     */
    select?: pl_nlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_nlInclude<ExtArgs> | null
    /**
     * Filter, which pl_nl to fetch.
     */
    where?: pl_nlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pl_nls to fetch.
     */
    orderBy?: pl_nlOrderByWithRelationInput | pl_nlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pl_nls.
     */
    cursor?: pl_nlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pl_nls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pl_nls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pl_nls.
     */
    distinct?: Pl_nlScalarFieldEnum | Pl_nlScalarFieldEnum[]
  }


  /**
   * pl_nl findFirstOrThrow
   */
  export type pl_nlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_nl
     */
    select?: pl_nlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_nlInclude<ExtArgs> | null
    /**
     * Filter, which pl_nl to fetch.
     */
    where?: pl_nlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pl_nls to fetch.
     */
    orderBy?: pl_nlOrderByWithRelationInput | pl_nlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pl_nls.
     */
    cursor?: pl_nlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pl_nls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pl_nls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pl_nls.
     */
    distinct?: Pl_nlScalarFieldEnum | Pl_nlScalarFieldEnum[]
  }


  /**
   * pl_nl findMany
   */
  export type pl_nlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_nl
     */
    select?: pl_nlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_nlInclude<ExtArgs> | null
    /**
     * Filter, which pl_nls to fetch.
     */
    where?: pl_nlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pl_nls to fetch.
     */
    orderBy?: pl_nlOrderByWithRelationInput | pl_nlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pl_nls.
     */
    cursor?: pl_nlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pl_nls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pl_nls.
     */
    skip?: number
    distinct?: Pl_nlScalarFieldEnum | Pl_nlScalarFieldEnum[]
  }


  /**
   * pl_nl create
   */
  export type pl_nlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_nl
     */
    select?: pl_nlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_nlInclude<ExtArgs> | null
    /**
     * The data needed to create a pl_nl.
     */
    data: XOR<pl_nlCreateInput, pl_nlUncheckedCreateInput>
  }


  /**
   * pl_nl createMany
   */
  export type pl_nlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pl_nls.
     */
    data: pl_nlCreateManyInput | pl_nlCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * pl_nl update
   */
  export type pl_nlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_nl
     */
    select?: pl_nlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_nlInclude<ExtArgs> | null
    /**
     * The data needed to update a pl_nl.
     */
    data: XOR<pl_nlUpdateInput, pl_nlUncheckedUpdateInput>
    /**
     * Choose, which pl_nl to update.
     */
    where: pl_nlWhereUniqueInput
  }


  /**
   * pl_nl updateMany
   */
  export type pl_nlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pl_nls.
     */
    data: XOR<pl_nlUpdateManyMutationInput, pl_nlUncheckedUpdateManyInput>
    /**
     * Filter which pl_nls to update
     */
    where?: pl_nlWhereInput
  }


  /**
   * pl_nl upsert
   */
  export type pl_nlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_nl
     */
    select?: pl_nlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_nlInclude<ExtArgs> | null
    /**
     * The filter to search for the pl_nl to update in case it exists.
     */
    where: pl_nlWhereUniqueInput
    /**
     * In case the pl_nl found by the `where` argument doesn't exist, create a new pl_nl with this data.
     */
    create: XOR<pl_nlCreateInput, pl_nlUncheckedCreateInput>
    /**
     * In case the pl_nl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pl_nlUpdateInput, pl_nlUncheckedUpdateInput>
  }


  /**
   * pl_nl delete
   */
  export type pl_nlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_nl
     */
    select?: pl_nlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_nlInclude<ExtArgs> | null
    /**
     * Filter which pl_nl to delete.
     */
    where: pl_nlWhereUniqueInput
  }


  /**
   * pl_nl deleteMany
   */
  export type pl_nlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pl_nls to delete
     */
    where?: pl_nlWhereInput
  }


  /**
   * pl_nl.cap_pl_ln
   */
  export type pl_nl$cap_pl_lnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cap_pl_ln
     */
    select?: cap_pl_lnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cap_pl_lnInclude<ExtArgs> | null
    where?: cap_pl_lnWhereInput
    orderBy?: cap_pl_lnOrderByWithRelationInput | cap_pl_lnOrderByWithRelationInput[]
    cursor?: cap_pl_lnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cap_pl_lnScalarFieldEnum | Cap_pl_lnScalarFieldEnum[]
  }


  /**
   * pl_nl.genero
   */
  export type pl_nl$generoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: generoInclude<ExtArgs> | null
    where?: generoWhereInput
  }


  /**
   * pl_nl.categoria
   */
  export type pl_nl$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriaInclude<ExtArgs> | null
    where?: categoriaWhereInput
  }


  /**
   * pl_nl without action
   */
  export type pl_nlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pl_nl
     */
    select?: pl_nlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pl_nlInclude<ExtArgs> | null
  }



  /**
   * Model comentario
   */

  export type AggregateComentario = {
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  export type ComentarioAvgAggregateOutputType = {
    id_comentario: number | null
    id_autor: number | null
    id_editorial: number | null
    id_estado: number | null
  }

  export type ComentarioSumAggregateOutputType = {
    id_comentario: number | null
    id_autor: number | null
    id_editorial: number | null
    id_estado: number | null
  }

  export type ComentarioMinAggregateOutputType = {
    id_comentario: number | null
    id_autor: number | null
    id_editorial: number | null
    fecha_registro: Date | null
    contenido: string | null
    id_estado: number | null
  }

  export type ComentarioMaxAggregateOutputType = {
    id_comentario: number | null
    id_autor: number | null
    id_editorial: number | null
    fecha_registro: Date | null
    contenido: string | null
    id_estado: number | null
  }

  export type ComentarioCountAggregateOutputType = {
    id_comentario: number
    id_autor: number
    id_editorial: number
    fecha_registro: number
    contenido: number
    id_estado: number
    _all: number
  }


  export type ComentarioAvgAggregateInputType = {
    id_comentario?: true
    id_autor?: true
    id_editorial?: true
    id_estado?: true
  }

  export type ComentarioSumAggregateInputType = {
    id_comentario?: true
    id_autor?: true
    id_editorial?: true
    id_estado?: true
  }

  export type ComentarioMinAggregateInputType = {
    id_comentario?: true
    id_autor?: true
    id_editorial?: true
    fecha_registro?: true
    contenido?: true
    id_estado?: true
  }

  export type ComentarioMaxAggregateInputType = {
    id_comentario?: true
    id_autor?: true
    id_editorial?: true
    fecha_registro?: true
    contenido?: true
    id_estado?: true
  }

  export type ComentarioCountAggregateInputType = {
    id_comentario?: true
    id_autor?: true
    id_editorial?: true
    fecha_registro?: true
    contenido?: true
    id_estado?: true
    _all?: true
  }

  export type ComentarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comentario to aggregate.
     */
    where?: comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comentarios to fetch.
     */
    orderBy?: comentarioOrderByWithRelationInput | comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comentarios
    **/
    _count?: true | ComentarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComentarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComentarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComentarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComentarioMaxAggregateInputType
  }

  export type GetComentarioAggregateType<T extends ComentarioAggregateArgs> = {
        [P in keyof T & keyof AggregateComentario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComentario[P]>
      : GetScalarType<T[P], AggregateComentario[P]>
  }




  export type comentarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comentarioWhereInput
    orderBy?: comentarioOrderByWithAggregationInput | comentarioOrderByWithAggregationInput[]
    by: ComentarioScalarFieldEnum[] | ComentarioScalarFieldEnum
    having?: comentarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComentarioCountAggregateInputType | true
    _avg?: ComentarioAvgAggregateInputType
    _sum?: ComentarioSumAggregateInputType
    _min?: ComentarioMinAggregateInputType
    _max?: ComentarioMaxAggregateInputType
  }

  export type ComentarioGroupByOutputType = {
    id_comentario: number
    id_autor: number | null
    id_editorial: number | null
    fecha_registro: Date | null
    contenido: string | null
    id_estado: number | null
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  type GetComentarioGroupByPayload<T extends comentarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComentarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComentarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
            : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
        }
      >
    >


  export type comentarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_comentario?: boolean
    id_autor?: boolean
    id_editorial?: boolean
    fecha_registro?: boolean
    contenido?: boolean
    id_estado?: boolean
    autor?: boolean | comentario$autorArgs<ExtArgs>
    editorial?: boolean | comentario$editorialArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type comentarioSelectScalar = {
    id_comentario?: boolean
    id_autor?: boolean
    id_editorial?: boolean
    fecha_registro?: boolean
    contenido?: boolean
    id_estado?: boolean
  }

  export type comentarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | comentario$autorArgs<ExtArgs>
    editorial?: boolean | comentario$editorialArgs<ExtArgs>
  }


  export type $comentarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comentario"
    objects: {
      autor: Prisma.$autorPayload<ExtArgs> | null
      editorial: Prisma.$editorialPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_comentario: number
      id_autor: number | null
      id_editorial: number | null
      fecha_registro: Date | null
      contenido: string | null
      id_estado: number | null
    }, ExtArgs["result"]["comentario"]>
    composites: {}
  }


  type comentarioGetPayload<S extends boolean | null | undefined | comentarioDefaultArgs> = $Result.GetResult<Prisma.$comentarioPayload, S>

  type comentarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<comentarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ComentarioCountAggregateInputType | true
    }

  export interface comentarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comentario'], meta: { name: 'comentario' } }
    /**
     * Find zero or one Comentario that matches the filter.
     * @param {comentarioFindUniqueArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends comentarioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, comentarioFindUniqueArgs<ExtArgs>>
    ): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Comentario that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {comentarioFindUniqueOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends comentarioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, comentarioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Comentario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioFindFirstArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends comentarioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, comentarioFindFirstArgs<ExtArgs>>
    ): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Comentario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioFindFirstOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends comentarioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, comentarioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comentarios
     * const comentarios = await prisma.comentario.findMany()
     * 
     * // Get first 10 Comentarios
     * const comentarios = await prisma.comentario.findMany({ take: 10 })
     * 
     * // Only select the `id_comentario`
     * const comentarioWithId_comentarioOnly = await prisma.comentario.findMany({ select: { id_comentario: true } })
     * 
    **/
    findMany<T extends comentarioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, comentarioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Comentario.
     * @param {comentarioCreateArgs} args - Arguments to create a Comentario.
     * @example
     * // Create one Comentario
     * const Comentario = await prisma.comentario.create({
     *   data: {
     *     // ... data to create a Comentario
     *   }
     * })
     * 
    **/
    create<T extends comentarioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, comentarioCreateArgs<ExtArgs>>
    ): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Comentarios.
     *     @param {comentarioCreateManyArgs} args - Arguments to create many Comentarios.
     *     @example
     *     // Create many Comentarios
     *     const comentario = await prisma.comentario.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends comentarioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, comentarioCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comentario.
     * @param {comentarioDeleteArgs} args - Arguments to delete one Comentario.
     * @example
     * // Delete one Comentario
     * const Comentario = await prisma.comentario.delete({
     *   where: {
     *     // ... filter to delete one Comentario
     *   }
     * })
     * 
    **/
    delete<T extends comentarioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, comentarioDeleteArgs<ExtArgs>>
    ): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Comentario.
     * @param {comentarioUpdateArgs} args - Arguments to update one Comentario.
     * @example
     * // Update one Comentario
     * const comentario = await prisma.comentario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends comentarioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, comentarioUpdateArgs<ExtArgs>>
    ): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Comentarios.
     * @param {comentarioDeleteManyArgs} args - Arguments to filter Comentarios to delete.
     * @example
     * // Delete a few Comentarios
     * const { count } = await prisma.comentario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends comentarioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, comentarioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends comentarioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, comentarioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comentario.
     * @param {comentarioUpsertArgs} args - Arguments to update or create a Comentario.
     * @example
     * // Update or create a Comentario
     * const comentario = await prisma.comentario.upsert({
     *   create: {
     *     // ... data to create a Comentario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comentario we want to update
     *   }
     * })
    **/
    upsert<T extends comentarioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, comentarioUpsertArgs<ExtArgs>>
    ): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioCountArgs} args - Arguments to filter Comentarios to count.
     * @example
     * // Count the number of Comentarios
     * const count = await prisma.comentario.count({
     *   where: {
     *     // ... the filter for the Comentarios we want to count
     *   }
     * })
    **/
    count<T extends comentarioCountArgs>(
      args?: Subset<T, comentarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComentarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComentarioAggregateArgs>(args: Subset<T, ComentarioAggregateArgs>): Prisma.PrismaPromise<GetComentarioAggregateType<T>>

    /**
     * Group by Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends comentarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: comentarioGroupByArgs['orderBy'] }
        : { orderBy?: comentarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, comentarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComentarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comentario model
   */
  readonly fields: comentarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comentario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__comentarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    autor<T extends comentario$autorArgs<ExtArgs> = {}>(args?: Subset<T, comentario$autorArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    editorial<T extends comentario$editorialArgs<ExtArgs> = {}>(args?: Subset<T, comentario$editorialArgs<ExtArgs>>): Prisma__editorialClient<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the comentario model
   */ 
  interface comentarioFieldRefs {
    readonly id_comentario: FieldRef<"comentario", 'Int'>
    readonly id_autor: FieldRef<"comentario", 'Int'>
    readonly id_editorial: FieldRef<"comentario", 'Int'>
    readonly fecha_registro: FieldRef<"comentario", 'DateTime'>
    readonly contenido: FieldRef<"comentario", 'String'>
    readonly id_estado: FieldRef<"comentario", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * comentario findUnique
   */
  export type comentarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * Filter, which comentario to fetch.
     */
    where: comentarioWhereUniqueInput
  }


  /**
   * comentario findUniqueOrThrow
   */
  export type comentarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * Filter, which comentario to fetch.
     */
    where: comentarioWhereUniqueInput
  }


  /**
   * comentario findFirst
   */
  export type comentarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * Filter, which comentario to fetch.
     */
    where?: comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comentarios to fetch.
     */
    orderBy?: comentarioOrderByWithRelationInput | comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comentarios.
     */
    cursor?: comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }


  /**
   * comentario findFirstOrThrow
   */
  export type comentarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * Filter, which comentario to fetch.
     */
    where?: comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comentarios to fetch.
     */
    orderBy?: comentarioOrderByWithRelationInput | comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comentarios.
     */
    cursor?: comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }


  /**
   * comentario findMany
   */
  export type comentarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * Filter, which comentarios to fetch.
     */
    where?: comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comentarios to fetch.
     */
    orderBy?: comentarioOrderByWithRelationInput | comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comentarios.
     */
    cursor?: comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comentarios.
     */
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }


  /**
   * comentario create
   */
  export type comentarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * The data needed to create a comentario.
     */
    data?: XOR<comentarioCreateInput, comentarioUncheckedCreateInput>
  }


  /**
   * comentario createMany
   */
  export type comentarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comentarios.
     */
    data: comentarioCreateManyInput | comentarioCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * comentario update
   */
  export type comentarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * The data needed to update a comentario.
     */
    data: XOR<comentarioUpdateInput, comentarioUncheckedUpdateInput>
    /**
     * Choose, which comentario to update.
     */
    where: comentarioWhereUniqueInput
  }


  /**
   * comentario updateMany
   */
  export type comentarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comentarios.
     */
    data: XOR<comentarioUpdateManyMutationInput, comentarioUncheckedUpdateManyInput>
    /**
     * Filter which comentarios to update
     */
    where?: comentarioWhereInput
  }


  /**
   * comentario upsert
   */
  export type comentarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * The filter to search for the comentario to update in case it exists.
     */
    where: comentarioWhereUniqueInput
    /**
     * In case the comentario found by the `where` argument doesn't exist, create a new comentario with this data.
     */
    create: XOR<comentarioCreateInput, comentarioUncheckedCreateInput>
    /**
     * In case the comentario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<comentarioUpdateInput, comentarioUncheckedUpdateInput>
  }


  /**
   * comentario delete
   */
  export type comentarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * Filter which comentario to delete.
     */
    where: comentarioWhereUniqueInput
  }


  /**
   * comentario deleteMany
   */
  export type comentarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comentarios to delete
     */
    where?: comentarioWhereInput
  }


  /**
   * comentario.autor
   */
  export type comentario$autorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: autorInclude<ExtArgs> | null
    where?: autorWhereInput
  }


  /**
   * comentario.editorial
   */
  export type comentario$editorialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: editorialInclude<ExtArgs> | null
    where?: editorialWhereInput
  }


  /**
   * comentario without action
   */
  export type comentarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comentarioInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoriaScalarFieldEnum: {
    id_categoria: 'id_categoria',
    descripcion: 'descripcion'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const EtiquetaScalarFieldEnum: {
    id_etiqueta: 'id_etiqueta',
    nombre: 'nombre'
  };

  export type EtiquetaScalarFieldEnum = (typeof EtiquetaScalarFieldEnum)[keyof typeof EtiquetaScalarFieldEnum]


  export const GeneroScalarFieldEnum: {
    id_genero: 'id_genero',
    id_categoria: 'id_categoria',
    nombre: 'nombre'
  };

  export type GeneroScalarFieldEnum = (typeof GeneroScalarFieldEnum)[keyof typeof GeneroScalarFieldEnum]


  export const PersonaScalarFieldEnum: {
    id_persona: 'id_persona',
    nombre: 'nombre',
    apellido_paterno: 'apellido_paterno',
    apellido_materno: 'apellido_materno'
  };

  export type PersonaScalarFieldEnum = (typeof PersonaScalarFieldEnum)[keyof typeof PersonaScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    id_persona: 'id_persona',
    correo: 'correo',
    contrasenia: 'contrasenia',
    verificacion_email: 'verificacion_email',
    id_estado: 'id_estado'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const AutorScalarFieldEnum: {
    id_autor: 'id_autor',
    id_pais: 'id_pais',
    id_usuario: 'id_usuario',
    nick_name: 'nick_name',
    ocupacion: 'ocupacion',
    descripcion: 'descripcion',
    foto_perfil: 'foto_perfil',
    foto_portada: 'foto_portada'
  };

  export type AutorScalarFieldEnum = (typeof AutorScalarFieldEnum)[keyof typeof AutorScalarFieldEnum]


  export const PaisScalarFieldEnum: {
    id_pais: 'id_pais',
    nombre: 'nombre',
    code: 'code'
  };

  export type PaisScalarFieldEnum = (typeof PaisScalarFieldEnum)[keyof typeof PaisScalarFieldEnum]


  export const SeguidoScalarFieldEnum: {
    id_seguido: 'id_seguido',
    id_user_seguidor: 'id_user_seguidor',
    id_user_seguido: 'id_user_seguido',
    id_seguimiento: 'id_seguimiento',
    fecha_seguimiento: 'fecha_seguimiento'
  };

  export type SeguidoScalarFieldEnum = (typeof SeguidoScalarFieldEnum)[keyof typeof SeguidoScalarFieldEnum]


  export const Tipo_seguimientoScalarFieldEnum: {
    id_seguimiento: 'id_seguimiento',
    descripcion: 'descripcion'
  };

  export type Tipo_seguimientoScalarFieldEnum = (typeof Tipo_seguimientoScalarFieldEnum)[keyof typeof Tipo_seguimientoScalarFieldEnum]


  export const ReaccionScalarFieldEnum: {
    id_reaccion: 'id_reaccion',
    id_capitulo: 'id_capitulo',
    id_publicacion_l: 'id_publicacion_l',
    id_editorial: 'id_editorial',
    id_autor_reaccion: 'id_autor_reaccion',
    fecha: 'fecha'
  };

  export type ReaccionScalarFieldEnum = (typeof ReaccionScalarFieldEnum)[keyof typeof ReaccionScalarFieldEnum]


  export const Cap_pl_lnScalarFieldEnum: {
    id_cap_pl: 'id_cap_pl',
    id_editorial_pl: 'id_editorial_pl',
    id_pl_ln: 'id_pl_ln',
    nro_capitulo: 'nro_capitulo',
    nombre_capitulo: 'nombre_capitulo',
    contenido: 'contenido'
  };

  export type Cap_pl_lnScalarFieldEnum = (typeof Cap_pl_lnScalarFieldEnum)[keyof typeof Cap_pl_lnScalarFieldEnum]


  export const EditorialScalarFieldEnum: {
    id_editorial_pl: 'id_editorial_pl',
    id_autor: 'id_autor',
    fecha_registro: 'fecha_registro',
    id_estado: 'id_estado'
  };

  export type EditorialScalarFieldEnum = (typeof EditorialScalarFieldEnum)[keyof typeof EditorialScalarFieldEnum]


  export const Pl_libreScalarFieldEnum: {
    id_pl_libre: 'id_pl_libre',
    id_categoria: 'id_categoria',
    id_editorial_pl: 'id_editorial_pl',
    id_etiqueta: 'id_etiqueta',
    contenido: 'contenido'
  };

  export type Pl_libreScalarFieldEnum = (typeof Pl_libreScalarFieldEnum)[keyof typeof Pl_libreScalarFieldEnum]


  export const Pl_nlScalarFieldEnum: {
    id_pl_ln: 'id_pl_ln',
    titulo: 'titulo',
    id_genero: 'id_genero',
    id_categoria: 'id_categoria',
    descripcion: 'descripcion',
    estado: 'estado'
  };

  export type Pl_nlScalarFieldEnum = (typeof Pl_nlScalarFieldEnum)[keyof typeof Pl_nlScalarFieldEnum]


  export const ComentarioScalarFieldEnum: {
    id_comentario: 'id_comentario',
    id_autor: 'id_autor',
    id_editorial: 'id_editorial',
    fecha_registro: 'fecha_registro',
    contenido: 'contenido',
    id_estado: 'id_estado'
  };

  export type ComentarioScalarFieldEnum = (typeof ComentarioScalarFieldEnum)[keyof typeof ComentarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type categoriaWhereInput = {
    AND?: categoriaWhereInput | categoriaWhereInput[]
    OR?: categoriaWhereInput[]
    NOT?: categoriaWhereInput | categoriaWhereInput[]
    id_categoria?: IntFilter<"categoria"> | number
    descripcion?: StringNullableFilter<"categoria"> | string | null
    genero?: GeneroListRelationFilter
    pl_libre?: Pl_libreListRelationFilter
    pl_nl?: Pl_nlListRelationFilter
  }

  export type categoriaOrderByWithRelationInput = {
    id_categoria?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    genero?: generoOrderByRelationAggregateInput
    pl_libre?: pl_libreOrderByRelationAggregateInput
    pl_nl?: pl_nlOrderByRelationAggregateInput
  }

  export type categoriaWhereUniqueInput = Prisma.AtLeast<{
    id_categoria?: number
    AND?: categoriaWhereInput | categoriaWhereInput[]
    OR?: categoriaWhereInput[]
    NOT?: categoriaWhereInput | categoriaWhereInput[]
    descripcion?: StringNullableFilter<"categoria"> | string | null
    genero?: GeneroListRelationFilter
    pl_libre?: Pl_libreListRelationFilter
    pl_nl?: Pl_nlListRelationFilter
  }, "id_categoria">

  export type categoriaOrderByWithAggregationInput = {
    id_categoria?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: categoriaCountOrderByAggregateInput
    _avg?: categoriaAvgOrderByAggregateInput
    _max?: categoriaMaxOrderByAggregateInput
    _min?: categoriaMinOrderByAggregateInput
    _sum?: categoriaSumOrderByAggregateInput
  }

  export type categoriaScalarWhereWithAggregatesInput = {
    AND?: categoriaScalarWhereWithAggregatesInput | categoriaScalarWhereWithAggregatesInput[]
    OR?: categoriaScalarWhereWithAggregatesInput[]
    NOT?: categoriaScalarWhereWithAggregatesInput | categoriaScalarWhereWithAggregatesInput[]
    id_categoria?: IntWithAggregatesFilter<"categoria"> | number
    descripcion?: StringNullableWithAggregatesFilter<"categoria"> | string | null
  }

  export type etiquetaWhereInput = {
    AND?: etiquetaWhereInput | etiquetaWhereInput[]
    OR?: etiquetaWhereInput[]
    NOT?: etiquetaWhereInput | etiquetaWhereInput[]
    id_etiqueta?: IntFilter<"etiqueta"> | number
    nombre?: StringNullableFilter<"etiqueta"> | string | null
    pl_libre?: Pl_libreListRelationFilter
  }

  export type etiquetaOrderByWithRelationInput = {
    id_etiqueta?: SortOrder
    nombre?: SortOrderInput | SortOrder
    pl_libre?: pl_libreOrderByRelationAggregateInput
  }

  export type etiquetaWhereUniqueInput = Prisma.AtLeast<{
    id_etiqueta?: number
    AND?: etiquetaWhereInput | etiquetaWhereInput[]
    OR?: etiquetaWhereInput[]
    NOT?: etiquetaWhereInput | etiquetaWhereInput[]
    nombre?: StringNullableFilter<"etiqueta"> | string | null
    pl_libre?: Pl_libreListRelationFilter
  }, "id_etiqueta">

  export type etiquetaOrderByWithAggregationInput = {
    id_etiqueta?: SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: etiquetaCountOrderByAggregateInput
    _avg?: etiquetaAvgOrderByAggregateInput
    _max?: etiquetaMaxOrderByAggregateInput
    _min?: etiquetaMinOrderByAggregateInput
    _sum?: etiquetaSumOrderByAggregateInput
  }

  export type etiquetaScalarWhereWithAggregatesInput = {
    AND?: etiquetaScalarWhereWithAggregatesInput | etiquetaScalarWhereWithAggregatesInput[]
    OR?: etiquetaScalarWhereWithAggregatesInput[]
    NOT?: etiquetaScalarWhereWithAggregatesInput | etiquetaScalarWhereWithAggregatesInput[]
    id_etiqueta?: IntWithAggregatesFilter<"etiqueta"> | number
    nombre?: StringNullableWithAggregatesFilter<"etiqueta"> | string | null
  }

  export type generoWhereInput = {
    AND?: generoWhereInput | generoWhereInput[]
    OR?: generoWhereInput[]
    NOT?: generoWhereInput | generoWhereInput[]
    id_genero?: IntFilter<"genero"> | number
    id_categoria?: IntNullableFilter<"genero"> | number | null
    nombre?: StringNullableFilter<"genero"> | string | null
    categoria?: XOR<CategoriaNullableRelationFilter, categoriaWhereInput> | null
    pl_nl?: Pl_nlListRelationFilter
  }

  export type generoOrderByWithRelationInput = {
    id_genero?: SortOrder
    id_categoria?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    categoria?: categoriaOrderByWithRelationInput
    pl_nl?: pl_nlOrderByRelationAggregateInput
  }

  export type generoWhereUniqueInput = Prisma.AtLeast<{
    id_genero?: number
    AND?: generoWhereInput | generoWhereInput[]
    OR?: generoWhereInput[]
    NOT?: generoWhereInput | generoWhereInput[]
    id_categoria?: IntNullableFilter<"genero"> | number | null
    nombre?: StringNullableFilter<"genero"> | string | null
    categoria?: XOR<CategoriaNullableRelationFilter, categoriaWhereInput> | null
    pl_nl?: Pl_nlListRelationFilter
  }, "id_genero">

  export type generoOrderByWithAggregationInput = {
    id_genero?: SortOrder
    id_categoria?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: generoCountOrderByAggregateInput
    _avg?: generoAvgOrderByAggregateInput
    _max?: generoMaxOrderByAggregateInput
    _min?: generoMinOrderByAggregateInput
    _sum?: generoSumOrderByAggregateInput
  }

  export type generoScalarWhereWithAggregatesInput = {
    AND?: generoScalarWhereWithAggregatesInput | generoScalarWhereWithAggregatesInput[]
    OR?: generoScalarWhereWithAggregatesInput[]
    NOT?: generoScalarWhereWithAggregatesInput | generoScalarWhereWithAggregatesInput[]
    id_genero?: IntWithAggregatesFilter<"genero"> | number
    id_categoria?: IntNullableWithAggregatesFilter<"genero"> | number | null
    nombre?: StringNullableWithAggregatesFilter<"genero"> | string | null
  }

  export type personaWhereInput = {
    AND?: personaWhereInput | personaWhereInput[]
    OR?: personaWhereInput[]
    NOT?: personaWhereInput | personaWhereInput[]
    id_persona?: IntFilter<"persona"> | number
    nombre?: StringNullableFilter<"persona"> | string | null
    apellido_paterno?: StringNullableFilter<"persona"> | string | null
    apellido_materno?: StringNullableFilter<"persona"> | string | null
    usuario?: UsuarioListRelationFilter
  }

  export type personaOrderByWithRelationInput = {
    id_persona?: SortOrder
    nombre?: SortOrderInput | SortOrder
    apellido_paterno?: SortOrderInput | SortOrder
    apellido_materno?: SortOrderInput | SortOrder
    usuario?: usuarioOrderByRelationAggregateInput
  }

  export type personaWhereUniqueInput = Prisma.AtLeast<{
    id_persona?: number
    AND?: personaWhereInput | personaWhereInput[]
    OR?: personaWhereInput[]
    NOT?: personaWhereInput | personaWhereInput[]
    nombre?: StringNullableFilter<"persona"> | string | null
    apellido_paterno?: StringNullableFilter<"persona"> | string | null
    apellido_materno?: StringNullableFilter<"persona"> | string | null
    usuario?: UsuarioListRelationFilter
  }, "id_persona">

  export type personaOrderByWithAggregationInput = {
    id_persona?: SortOrder
    nombre?: SortOrderInput | SortOrder
    apellido_paterno?: SortOrderInput | SortOrder
    apellido_materno?: SortOrderInput | SortOrder
    _count?: personaCountOrderByAggregateInput
    _avg?: personaAvgOrderByAggregateInput
    _max?: personaMaxOrderByAggregateInput
    _min?: personaMinOrderByAggregateInput
    _sum?: personaSumOrderByAggregateInput
  }

  export type personaScalarWhereWithAggregatesInput = {
    AND?: personaScalarWhereWithAggregatesInput | personaScalarWhereWithAggregatesInput[]
    OR?: personaScalarWhereWithAggregatesInput[]
    NOT?: personaScalarWhereWithAggregatesInput | personaScalarWhereWithAggregatesInput[]
    id_persona?: IntWithAggregatesFilter<"persona"> | number
    nombre?: StringNullableWithAggregatesFilter<"persona"> | string | null
    apellido_paterno?: StringNullableWithAggregatesFilter<"persona"> | string | null
    apellido_materno?: StringNullableWithAggregatesFilter<"persona"> | string | null
  }

  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id_usuario?: IntFilter<"usuario"> | number
    id_persona?: IntNullableFilter<"usuario"> | number | null
    correo?: StringNullableFilter<"usuario"> | string | null
    contrasenia?: StringNullableFilter<"usuario"> | string | null
    verificacion_email?: BoolNullableFilter<"usuario"> | boolean | null
    id_estado?: IntNullableFilter<"usuario"> | number | null
    autor?: AutorListRelationFilter
    seguido_seguido_id_user_seguidorTousuario?: SeguidoListRelationFilter
    seguido_seguido_id_user_seguidoTousuario?: SeguidoListRelationFilter
    persona?: XOR<PersonaNullableRelationFilter, personaWhereInput> | null
  }

  export type usuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    id_persona?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    contrasenia?: SortOrderInput | SortOrder
    verificacion_email?: SortOrderInput | SortOrder
    id_estado?: SortOrderInput | SortOrder
    autor?: autorOrderByRelationAggregateInput
    seguido_seguido_id_user_seguidorTousuario?: seguidoOrderByRelationAggregateInput
    seguido_seguido_id_user_seguidoTousuario?: seguidoOrderByRelationAggregateInput
    persona?: personaOrderByWithRelationInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id_persona?: IntNullableFilter<"usuario"> | number | null
    correo?: StringNullableFilter<"usuario"> | string | null
    contrasenia?: StringNullableFilter<"usuario"> | string | null
    verificacion_email?: BoolNullableFilter<"usuario"> | boolean | null
    id_estado?: IntNullableFilter<"usuario"> | number | null
    autor?: AutorListRelationFilter
    seguido_seguido_id_user_seguidorTousuario?: SeguidoListRelationFilter
    seguido_seguido_id_user_seguidoTousuario?: SeguidoListRelationFilter
    persona?: XOR<PersonaNullableRelationFilter, personaWhereInput> | null
  }, "id_usuario">

  export type usuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    id_persona?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    contrasenia?: SortOrderInput | SortOrder
    verificacion_email?: SortOrderInput | SortOrder
    id_estado?: SortOrderInput | SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuario"> | number
    id_persona?: IntNullableWithAggregatesFilter<"usuario"> | number | null
    correo?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    contrasenia?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    verificacion_email?: BoolNullableWithAggregatesFilter<"usuario"> | boolean | null
    id_estado?: IntNullableWithAggregatesFilter<"usuario"> | number | null
  }

  export type autorWhereInput = {
    AND?: autorWhereInput | autorWhereInput[]
    OR?: autorWhereInput[]
    NOT?: autorWhereInput | autorWhereInput[]
    id_autor?: IntFilter<"autor"> | number
    id_pais?: IntNullableFilter<"autor"> | number | null
    id_usuario?: IntNullableFilter<"autor"> | number | null
    nick_name?: StringNullableFilter<"autor"> | string | null
    ocupacion?: StringNullableFilter<"autor"> | string | null
    descripcion?: StringNullableFilter<"autor"> | string | null
    foto_perfil?: StringNullableFilter<"autor"> | string | null
    foto_portada?: StringNullableFilter<"autor"> | string | null
    usuario?: XOR<UsuarioNullableRelationFilter, usuarioWhereInput> | null
    pais?: XOR<PaisNullableRelationFilter, paisWhereInput> | null
    comentario?: ComentarioListRelationFilter
    editorial?: EditorialListRelationFilter
    reaccion?: ReaccionListRelationFilter
  }

  export type autorOrderByWithRelationInput = {
    id_autor?: SortOrder
    id_pais?: SortOrderInput | SortOrder
    id_usuario?: SortOrderInput | SortOrder
    nick_name?: SortOrderInput | SortOrder
    ocupacion?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    foto_perfil?: SortOrderInput | SortOrder
    foto_portada?: SortOrderInput | SortOrder
    usuario?: usuarioOrderByWithRelationInput
    pais?: paisOrderByWithRelationInput
    comentario?: comentarioOrderByRelationAggregateInput
    editorial?: editorialOrderByRelationAggregateInput
    reaccion?: reaccionOrderByRelationAggregateInput
  }

  export type autorWhereUniqueInput = Prisma.AtLeast<{
    id_autor?: number
    AND?: autorWhereInput | autorWhereInput[]
    OR?: autorWhereInput[]
    NOT?: autorWhereInput | autorWhereInput[]
    id_pais?: IntNullableFilter<"autor"> | number | null
    id_usuario?: IntNullableFilter<"autor"> | number | null
    nick_name?: StringNullableFilter<"autor"> | string | null
    ocupacion?: StringNullableFilter<"autor"> | string | null
    descripcion?: StringNullableFilter<"autor"> | string | null
    foto_perfil?: StringNullableFilter<"autor"> | string | null
    foto_portada?: StringNullableFilter<"autor"> | string | null
    usuario?: XOR<UsuarioNullableRelationFilter, usuarioWhereInput> | null
    pais?: XOR<PaisNullableRelationFilter, paisWhereInput> | null
    comentario?: ComentarioListRelationFilter
    editorial?: EditorialListRelationFilter
    reaccion?: ReaccionListRelationFilter
  }, "id_autor">

  export type autorOrderByWithAggregationInput = {
    id_autor?: SortOrder
    id_pais?: SortOrderInput | SortOrder
    id_usuario?: SortOrderInput | SortOrder
    nick_name?: SortOrderInput | SortOrder
    ocupacion?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    foto_perfil?: SortOrderInput | SortOrder
    foto_portada?: SortOrderInput | SortOrder
    _count?: autorCountOrderByAggregateInput
    _avg?: autorAvgOrderByAggregateInput
    _max?: autorMaxOrderByAggregateInput
    _min?: autorMinOrderByAggregateInput
    _sum?: autorSumOrderByAggregateInput
  }

  export type autorScalarWhereWithAggregatesInput = {
    AND?: autorScalarWhereWithAggregatesInput | autorScalarWhereWithAggregatesInput[]
    OR?: autorScalarWhereWithAggregatesInput[]
    NOT?: autorScalarWhereWithAggregatesInput | autorScalarWhereWithAggregatesInput[]
    id_autor?: IntWithAggregatesFilter<"autor"> | number
    id_pais?: IntNullableWithAggregatesFilter<"autor"> | number | null
    id_usuario?: IntNullableWithAggregatesFilter<"autor"> | number | null
    nick_name?: StringNullableWithAggregatesFilter<"autor"> | string | null
    ocupacion?: StringNullableWithAggregatesFilter<"autor"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"autor"> | string | null
    foto_perfil?: StringNullableWithAggregatesFilter<"autor"> | string | null
    foto_portada?: StringNullableWithAggregatesFilter<"autor"> | string | null
  }

  export type paisWhereInput = {
    AND?: paisWhereInput | paisWhereInput[]
    OR?: paisWhereInput[]
    NOT?: paisWhereInput | paisWhereInput[]
    id_pais?: IntFilter<"pais"> | number
    nombre?: StringNullableFilter<"pais"> | string | null
    code?: StringNullableFilter<"pais"> | string | null
    autor?: AutorListRelationFilter
  }

  export type paisOrderByWithRelationInput = {
    id_pais?: SortOrder
    nombre?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    autor?: autorOrderByRelationAggregateInput
  }

  export type paisWhereUniqueInput = Prisma.AtLeast<{
    id_pais?: number
    AND?: paisWhereInput | paisWhereInput[]
    OR?: paisWhereInput[]
    NOT?: paisWhereInput | paisWhereInput[]
    nombre?: StringNullableFilter<"pais"> | string | null
    code?: StringNullableFilter<"pais"> | string | null
    autor?: AutorListRelationFilter
  }, "id_pais">

  export type paisOrderByWithAggregationInput = {
    id_pais?: SortOrder
    nombre?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    _count?: paisCountOrderByAggregateInput
    _avg?: paisAvgOrderByAggregateInput
    _max?: paisMaxOrderByAggregateInput
    _min?: paisMinOrderByAggregateInput
    _sum?: paisSumOrderByAggregateInput
  }

  export type paisScalarWhereWithAggregatesInput = {
    AND?: paisScalarWhereWithAggregatesInput | paisScalarWhereWithAggregatesInput[]
    OR?: paisScalarWhereWithAggregatesInput[]
    NOT?: paisScalarWhereWithAggregatesInput | paisScalarWhereWithAggregatesInput[]
    id_pais?: IntWithAggregatesFilter<"pais"> | number
    nombre?: StringNullableWithAggregatesFilter<"pais"> | string | null
    code?: StringNullableWithAggregatesFilter<"pais"> | string | null
  }

  export type seguidoWhereInput = {
    AND?: seguidoWhereInput | seguidoWhereInput[]
    OR?: seguidoWhereInput[]
    NOT?: seguidoWhereInput | seguidoWhereInput[]
    id_seguido?: IntFilter<"seguido"> | number
    id_user_seguidor?: IntNullableFilter<"seguido"> | number | null
    id_user_seguido?: IntNullableFilter<"seguido"> | number | null
    id_seguimiento?: IntNullableFilter<"seguido"> | number | null
    fecha_seguimiento?: DateTimeNullableFilter<"seguido"> | Date | string | null
    usuario_seguido_id_user_seguidorTousuario?: XOR<UsuarioNullableRelationFilter, usuarioWhereInput> | null
    usuario_seguido_id_user_seguidoTousuario?: XOR<UsuarioNullableRelationFilter, usuarioWhereInput> | null
    tipo_seguimiento?: XOR<Tipo_seguimientoNullableRelationFilter, tipo_seguimientoWhereInput> | null
  }

  export type seguidoOrderByWithRelationInput = {
    id_seguido?: SortOrder
    id_user_seguidor?: SortOrderInput | SortOrder
    id_user_seguido?: SortOrderInput | SortOrder
    id_seguimiento?: SortOrderInput | SortOrder
    fecha_seguimiento?: SortOrderInput | SortOrder
    usuario_seguido_id_user_seguidorTousuario?: usuarioOrderByWithRelationInput
    usuario_seguido_id_user_seguidoTousuario?: usuarioOrderByWithRelationInput
    tipo_seguimiento?: tipo_seguimientoOrderByWithRelationInput
  }

  export type seguidoWhereUniqueInput = Prisma.AtLeast<{
    id_seguido?: number
    AND?: seguidoWhereInput | seguidoWhereInput[]
    OR?: seguidoWhereInput[]
    NOT?: seguidoWhereInput | seguidoWhereInput[]
    id_user_seguidor?: IntNullableFilter<"seguido"> | number | null
    id_user_seguido?: IntNullableFilter<"seguido"> | number | null
    id_seguimiento?: IntNullableFilter<"seguido"> | number | null
    fecha_seguimiento?: DateTimeNullableFilter<"seguido"> | Date | string | null
    usuario_seguido_id_user_seguidorTousuario?: XOR<UsuarioNullableRelationFilter, usuarioWhereInput> | null
    usuario_seguido_id_user_seguidoTousuario?: XOR<UsuarioNullableRelationFilter, usuarioWhereInput> | null
    tipo_seguimiento?: XOR<Tipo_seguimientoNullableRelationFilter, tipo_seguimientoWhereInput> | null
  }, "id_seguido">

  export type seguidoOrderByWithAggregationInput = {
    id_seguido?: SortOrder
    id_user_seguidor?: SortOrderInput | SortOrder
    id_user_seguido?: SortOrderInput | SortOrder
    id_seguimiento?: SortOrderInput | SortOrder
    fecha_seguimiento?: SortOrderInput | SortOrder
    _count?: seguidoCountOrderByAggregateInput
    _avg?: seguidoAvgOrderByAggregateInput
    _max?: seguidoMaxOrderByAggregateInput
    _min?: seguidoMinOrderByAggregateInput
    _sum?: seguidoSumOrderByAggregateInput
  }

  export type seguidoScalarWhereWithAggregatesInput = {
    AND?: seguidoScalarWhereWithAggregatesInput | seguidoScalarWhereWithAggregatesInput[]
    OR?: seguidoScalarWhereWithAggregatesInput[]
    NOT?: seguidoScalarWhereWithAggregatesInput | seguidoScalarWhereWithAggregatesInput[]
    id_seguido?: IntWithAggregatesFilter<"seguido"> | number
    id_user_seguidor?: IntNullableWithAggregatesFilter<"seguido"> | number | null
    id_user_seguido?: IntNullableWithAggregatesFilter<"seguido"> | number | null
    id_seguimiento?: IntNullableWithAggregatesFilter<"seguido"> | number | null
    fecha_seguimiento?: DateTimeNullableWithAggregatesFilter<"seguido"> | Date | string | null
  }

  export type tipo_seguimientoWhereInput = {
    AND?: tipo_seguimientoWhereInput | tipo_seguimientoWhereInput[]
    OR?: tipo_seguimientoWhereInput[]
    NOT?: tipo_seguimientoWhereInput | tipo_seguimientoWhereInput[]
    id_seguimiento?: IntFilter<"tipo_seguimiento"> | number
    descripcion?: StringNullableFilter<"tipo_seguimiento"> | string | null
    seguido?: SeguidoListRelationFilter
  }

  export type tipo_seguimientoOrderByWithRelationInput = {
    id_seguimiento?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    seguido?: seguidoOrderByRelationAggregateInput
  }

  export type tipo_seguimientoWhereUniqueInput = Prisma.AtLeast<{
    id_seguimiento?: number
    AND?: tipo_seguimientoWhereInput | tipo_seguimientoWhereInput[]
    OR?: tipo_seguimientoWhereInput[]
    NOT?: tipo_seguimientoWhereInput | tipo_seguimientoWhereInput[]
    descripcion?: StringNullableFilter<"tipo_seguimiento"> | string | null
    seguido?: SeguidoListRelationFilter
  }, "id_seguimiento">

  export type tipo_seguimientoOrderByWithAggregationInput = {
    id_seguimiento?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: tipo_seguimientoCountOrderByAggregateInput
    _avg?: tipo_seguimientoAvgOrderByAggregateInput
    _max?: tipo_seguimientoMaxOrderByAggregateInput
    _min?: tipo_seguimientoMinOrderByAggregateInput
    _sum?: tipo_seguimientoSumOrderByAggregateInput
  }

  export type tipo_seguimientoScalarWhereWithAggregatesInput = {
    AND?: tipo_seguimientoScalarWhereWithAggregatesInput | tipo_seguimientoScalarWhereWithAggregatesInput[]
    OR?: tipo_seguimientoScalarWhereWithAggregatesInput[]
    NOT?: tipo_seguimientoScalarWhereWithAggregatesInput | tipo_seguimientoScalarWhereWithAggregatesInput[]
    id_seguimiento?: IntWithAggregatesFilter<"tipo_seguimiento"> | number
    descripcion?: StringNullableWithAggregatesFilter<"tipo_seguimiento"> | string | null
  }

  export type reaccionWhereInput = {
    AND?: reaccionWhereInput | reaccionWhereInput[]
    OR?: reaccionWhereInput[]
    NOT?: reaccionWhereInput | reaccionWhereInput[]
    id_reaccion?: IntFilter<"reaccion"> | number
    id_capitulo?: IntNullableFilter<"reaccion"> | number | null
    id_publicacion_l?: IntNullableFilter<"reaccion"> | number | null
    id_editorial?: IntNullableFilter<"reaccion"> | number | null
    id_autor_reaccion?: IntNullableFilter<"reaccion"> | number | null
    fecha?: DateTimeNullableFilter<"reaccion"> | Date | string | null
    autor?: XOR<AutorNullableRelationFilter, autorWhereInput> | null
  }

  export type reaccionOrderByWithRelationInput = {
    id_reaccion?: SortOrder
    id_capitulo?: SortOrderInput | SortOrder
    id_publicacion_l?: SortOrderInput | SortOrder
    id_editorial?: SortOrderInput | SortOrder
    id_autor_reaccion?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    autor?: autorOrderByWithRelationInput
  }

  export type reaccionWhereUniqueInput = Prisma.AtLeast<{
    id_reaccion?: number
    AND?: reaccionWhereInput | reaccionWhereInput[]
    OR?: reaccionWhereInput[]
    NOT?: reaccionWhereInput | reaccionWhereInput[]
    id_capitulo?: IntNullableFilter<"reaccion"> | number | null
    id_publicacion_l?: IntNullableFilter<"reaccion"> | number | null
    id_editorial?: IntNullableFilter<"reaccion"> | number | null
    id_autor_reaccion?: IntNullableFilter<"reaccion"> | number | null
    fecha?: DateTimeNullableFilter<"reaccion"> | Date | string | null
    autor?: XOR<AutorNullableRelationFilter, autorWhereInput> | null
  }, "id_reaccion">

  export type reaccionOrderByWithAggregationInput = {
    id_reaccion?: SortOrder
    id_capitulo?: SortOrderInput | SortOrder
    id_publicacion_l?: SortOrderInput | SortOrder
    id_editorial?: SortOrderInput | SortOrder
    id_autor_reaccion?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    _count?: reaccionCountOrderByAggregateInput
    _avg?: reaccionAvgOrderByAggregateInput
    _max?: reaccionMaxOrderByAggregateInput
    _min?: reaccionMinOrderByAggregateInput
    _sum?: reaccionSumOrderByAggregateInput
  }

  export type reaccionScalarWhereWithAggregatesInput = {
    AND?: reaccionScalarWhereWithAggregatesInput | reaccionScalarWhereWithAggregatesInput[]
    OR?: reaccionScalarWhereWithAggregatesInput[]
    NOT?: reaccionScalarWhereWithAggregatesInput | reaccionScalarWhereWithAggregatesInput[]
    id_reaccion?: IntWithAggregatesFilter<"reaccion"> | number
    id_capitulo?: IntNullableWithAggregatesFilter<"reaccion"> | number | null
    id_publicacion_l?: IntNullableWithAggregatesFilter<"reaccion"> | number | null
    id_editorial?: IntNullableWithAggregatesFilter<"reaccion"> | number | null
    id_autor_reaccion?: IntNullableWithAggregatesFilter<"reaccion"> | number | null
    fecha?: DateTimeNullableWithAggregatesFilter<"reaccion"> | Date | string | null
  }

  export type cap_pl_lnWhereInput = {
    AND?: cap_pl_lnWhereInput | cap_pl_lnWhereInput[]
    OR?: cap_pl_lnWhereInput[]
    NOT?: cap_pl_lnWhereInput | cap_pl_lnWhereInput[]
    id_cap_pl?: IntFilter<"cap_pl_ln"> | number
    id_editorial_pl?: IntNullableFilter<"cap_pl_ln"> | number | null
    id_pl_ln?: IntNullableFilter<"cap_pl_ln"> | number | null
    nro_capitulo?: StringNullableFilter<"cap_pl_ln"> | string | null
    nombre_capitulo?: StringNullableFilter<"cap_pl_ln"> | string | null
    contenido?: StringNullableFilter<"cap_pl_ln"> | string | null
    pl_nl?: XOR<Pl_nlNullableRelationFilter, pl_nlWhereInput> | null
    editorial?: XOR<EditorialNullableRelationFilter, editorialWhereInput> | null
  }

  export type cap_pl_lnOrderByWithRelationInput = {
    id_cap_pl?: SortOrder
    id_editorial_pl?: SortOrderInput | SortOrder
    id_pl_ln?: SortOrderInput | SortOrder
    nro_capitulo?: SortOrderInput | SortOrder
    nombre_capitulo?: SortOrderInput | SortOrder
    contenido?: SortOrderInput | SortOrder
    pl_nl?: pl_nlOrderByWithRelationInput
    editorial?: editorialOrderByWithRelationInput
  }

  export type cap_pl_lnWhereUniqueInput = Prisma.AtLeast<{
    id_cap_pl?: number
    AND?: cap_pl_lnWhereInput | cap_pl_lnWhereInput[]
    OR?: cap_pl_lnWhereInput[]
    NOT?: cap_pl_lnWhereInput | cap_pl_lnWhereInput[]
    id_editorial_pl?: IntNullableFilter<"cap_pl_ln"> | number | null
    id_pl_ln?: IntNullableFilter<"cap_pl_ln"> | number | null
    nro_capitulo?: StringNullableFilter<"cap_pl_ln"> | string | null
    nombre_capitulo?: StringNullableFilter<"cap_pl_ln"> | string | null
    contenido?: StringNullableFilter<"cap_pl_ln"> | string | null
    pl_nl?: XOR<Pl_nlNullableRelationFilter, pl_nlWhereInput> | null
    editorial?: XOR<EditorialNullableRelationFilter, editorialWhereInput> | null
  }, "id_cap_pl">

  export type cap_pl_lnOrderByWithAggregationInput = {
    id_cap_pl?: SortOrder
    id_editorial_pl?: SortOrderInput | SortOrder
    id_pl_ln?: SortOrderInput | SortOrder
    nro_capitulo?: SortOrderInput | SortOrder
    nombre_capitulo?: SortOrderInput | SortOrder
    contenido?: SortOrderInput | SortOrder
    _count?: cap_pl_lnCountOrderByAggregateInput
    _avg?: cap_pl_lnAvgOrderByAggregateInput
    _max?: cap_pl_lnMaxOrderByAggregateInput
    _min?: cap_pl_lnMinOrderByAggregateInput
    _sum?: cap_pl_lnSumOrderByAggregateInput
  }

  export type cap_pl_lnScalarWhereWithAggregatesInput = {
    AND?: cap_pl_lnScalarWhereWithAggregatesInput | cap_pl_lnScalarWhereWithAggregatesInput[]
    OR?: cap_pl_lnScalarWhereWithAggregatesInput[]
    NOT?: cap_pl_lnScalarWhereWithAggregatesInput | cap_pl_lnScalarWhereWithAggregatesInput[]
    id_cap_pl?: IntWithAggregatesFilter<"cap_pl_ln"> | number
    id_editorial_pl?: IntNullableWithAggregatesFilter<"cap_pl_ln"> | number | null
    id_pl_ln?: IntNullableWithAggregatesFilter<"cap_pl_ln"> | number | null
    nro_capitulo?: StringNullableWithAggregatesFilter<"cap_pl_ln"> | string | null
    nombre_capitulo?: StringNullableWithAggregatesFilter<"cap_pl_ln"> | string | null
    contenido?: StringNullableWithAggregatesFilter<"cap_pl_ln"> | string | null
  }

  export type editorialWhereInput = {
    AND?: editorialWhereInput | editorialWhereInput[]
    OR?: editorialWhereInput[]
    NOT?: editorialWhereInput | editorialWhereInput[]
    id_editorial_pl?: IntFilter<"editorial"> | number
    id_autor?: IntNullableFilter<"editorial"> | number | null
    fecha_registro?: DateTimeNullableFilter<"editorial"> | Date | string | null
    id_estado?: IntFilter<"editorial"> | number
    cap_pl_ln?: Cap_pl_lnListRelationFilter
    comentario?: ComentarioListRelationFilter
    autor?: XOR<AutorNullableRelationFilter, autorWhereInput> | null
    pl_libre?: Pl_libreListRelationFilter
  }

  export type editorialOrderByWithRelationInput = {
    id_editorial_pl?: SortOrder
    id_autor?: SortOrderInput | SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    id_estado?: SortOrder
    cap_pl_ln?: cap_pl_lnOrderByRelationAggregateInput
    comentario?: comentarioOrderByRelationAggregateInput
    autor?: autorOrderByWithRelationInput
    pl_libre?: pl_libreOrderByRelationAggregateInput
  }

  export type editorialWhereUniqueInput = Prisma.AtLeast<{
    id_editorial_pl?: number
    AND?: editorialWhereInput | editorialWhereInput[]
    OR?: editorialWhereInput[]
    NOT?: editorialWhereInput | editorialWhereInput[]
    id_autor?: IntNullableFilter<"editorial"> | number | null
    fecha_registro?: DateTimeNullableFilter<"editorial"> | Date | string | null
    id_estado?: IntFilter<"editorial"> | number
    cap_pl_ln?: Cap_pl_lnListRelationFilter
    comentario?: ComentarioListRelationFilter
    autor?: XOR<AutorNullableRelationFilter, autorWhereInput> | null
    pl_libre?: Pl_libreListRelationFilter
  }, "id_editorial_pl">

  export type editorialOrderByWithAggregationInput = {
    id_editorial_pl?: SortOrder
    id_autor?: SortOrderInput | SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    id_estado?: SortOrder
    _count?: editorialCountOrderByAggregateInput
    _avg?: editorialAvgOrderByAggregateInput
    _max?: editorialMaxOrderByAggregateInput
    _min?: editorialMinOrderByAggregateInput
    _sum?: editorialSumOrderByAggregateInput
  }

  export type editorialScalarWhereWithAggregatesInput = {
    AND?: editorialScalarWhereWithAggregatesInput | editorialScalarWhereWithAggregatesInput[]
    OR?: editorialScalarWhereWithAggregatesInput[]
    NOT?: editorialScalarWhereWithAggregatesInput | editorialScalarWhereWithAggregatesInput[]
    id_editorial_pl?: IntWithAggregatesFilter<"editorial"> | number
    id_autor?: IntNullableWithAggregatesFilter<"editorial"> | number | null
    fecha_registro?: DateTimeNullableWithAggregatesFilter<"editorial"> | Date | string | null
    id_estado?: IntWithAggregatesFilter<"editorial"> | number
  }

  export type pl_libreWhereInput = {
    AND?: pl_libreWhereInput | pl_libreWhereInput[]
    OR?: pl_libreWhereInput[]
    NOT?: pl_libreWhereInput | pl_libreWhereInput[]
    id_pl_libre?: IntFilter<"pl_libre"> | number
    id_categoria?: IntNullableFilter<"pl_libre"> | number | null
    id_editorial_pl?: IntNullableFilter<"pl_libre"> | number | null
    id_etiqueta?: IntNullableFilter<"pl_libre"> | number | null
    contenido?: StringNullableFilter<"pl_libre"> | string | null
    categoria?: XOR<CategoriaNullableRelationFilter, categoriaWhereInput> | null
    editorial?: XOR<EditorialNullableRelationFilter, editorialWhereInput> | null
    etiqueta?: XOR<EtiquetaNullableRelationFilter, etiquetaWhereInput> | null
  }

  export type pl_libreOrderByWithRelationInput = {
    id_pl_libre?: SortOrder
    id_categoria?: SortOrderInput | SortOrder
    id_editorial_pl?: SortOrderInput | SortOrder
    id_etiqueta?: SortOrderInput | SortOrder
    contenido?: SortOrderInput | SortOrder
    categoria?: categoriaOrderByWithRelationInput
    editorial?: editorialOrderByWithRelationInput
    etiqueta?: etiquetaOrderByWithRelationInput
  }

  export type pl_libreWhereUniqueInput = Prisma.AtLeast<{
    id_pl_libre?: number
    AND?: pl_libreWhereInput | pl_libreWhereInput[]
    OR?: pl_libreWhereInput[]
    NOT?: pl_libreWhereInput | pl_libreWhereInput[]
    id_categoria?: IntNullableFilter<"pl_libre"> | number | null
    id_editorial_pl?: IntNullableFilter<"pl_libre"> | number | null
    id_etiqueta?: IntNullableFilter<"pl_libre"> | number | null
    contenido?: StringNullableFilter<"pl_libre"> | string | null
    categoria?: XOR<CategoriaNullableRelationFilter, categoriaWhereInput> | null
    editorial?: XOR<EditorialNullableRelationFilter, editorialWhereInput> | null
    etiqueta?: XOR<EtiquetaNullableRelationFilter, etiquetaWhereInput> | null
  }, "id_pl_libre">

  export type pl_libreOrderByWithAggregationInput = {
    id_pl_libre?: SortOrder
    id_categoria?: SortOrderInput | SortOrder
    id_editorial_pl?: SortOrderInput | SortOrder
    id_etiqueta?: SortOrderInput | SortOrder
    contenido?: SortOrderInput | SortOrder
    _count?: pl_libreCountOrderByAggregateInput
    _avg?: pl_libreAvgOrderByAggregateInput
    _max?: pl_libreMaxOrderByAggregateInput
    _min?: pl_libreMinOrderByAggregateInput
    _sum?: pl_libreSumOrderByAggregateInput
  }

  export type pl_libreScalarWhereWithAggregatesInput = {
    AND?: pl_libreScalarWhereWithAggregatesInput | pl_libreScalarWhereWithAggregatesInput[]
    OR?: pl_libreScalarWhereWithAggregatesInput[]
    NOT?: pl_libreScalarWhereWithAggregatesInput | pl_libreScalarWhereWithAggregatesInput[]
    id_pl_libre?: IntWithAggregatesFilter<"pl_libre"> | number
    id_categoria?: IntNullableWithAggregatesFilter<"pl_libre"> | number | null
    id_editorial_pl?: IntNullableWithAggregatesFilter<"pl_libre"> | number | null
    id_etiqueta?: IntNullableWithAggregatesFilter<"pl_libre"> | number | null
    contenido?: StringNullableWithAggregatesFilter<"pl_libre"> | string | null
  }

  export type pl_nlWhereInput = {
    AND?: pl_nlWhereInput | pl_nlWhereInput[]
    OR?: pl_nlWhereInput[]
    NOT?: pl_nlWhereInput | pl_nlWhereInput[]
    id_pl_ln?: IntFilter<"pl_nl"> | number
    titulo?: StringNullableFilter<"pl_nl"> | string | null
    id_genero?: IntNullableFilter<"pl_nl"> | number | null
    id_categoria?: IntNullableFilter<"pl_nl"> | number | null
    descripcion?: StringNullableFilter<"pl_nl"> | string | null
    estado?: StringFilter<"pl_nl"> | string
    cap_pl_ln?: Cap_pl_lnListRelationFilter
    genero?: XOR<GeneroNullableRelationFilter, generoWhereInput> | null
    categoria?: XOR<CategoriaNullableRelationFilter, categoriaWhereInput> | null
  }

  export type pl_nlOrderByWithRelationInput = {
    id_pl_ln?: SortOrder
    titulo?: SortOrderInput | SortOrder
    id_genero?: SortOrderInput | SortOrder
    id_categoria?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    estado?: SortOrder
    cap_pl_ln?: cap_pl_lnOrderByRelationAggregateInput
    genero?: generoOrderByWithRelationInput
    categoria?: categoriaOrderByWithRelationInput
  }

  export type pl_nlWhereUniqueInput = Prisma.AtLeast<{
    id_pl_ln?: number
    AND?: pl_nlWhereInput | pl_nlWhereInput[]
    OR?: pl_nlWhereInput[]
    NOT?: pl_nlWhereInput | pl_nlWhereInput[]
    titulo?: StringNullableFilter<"pl_nl"> | string | null
    id_genero?: IntNullableFilter<"pl_nl"> | number | null
    id_categoria?: IntNullableFilter<"pl_nl"> | number | null
    descripcion?: StringNullableFilter<"pl_nl"> | string | null
    estado?: StringFilter<"pl_nl"> | string
    cap_pl_ln?: Cap_pl_lnListRelationFilter
    genero?: XOR<GeneroNullableRelationFilter, generoWhereInput> | null
    categoria?: XOR<CategoriaNullableRelationFilter, categoriaWhereInput> | null
  }, "id_pl_ln">

  export type pl_nlOrderByWithAggregationInput = {
    id_pl_ln?: SortOrder
    titulo?: SortOrderInput | SortOrder
    id_genero?: SortOrderInput | SortOrder
    id_categoria?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: pl_nlCountOrderByAggregateInput
    _avg?: pl_nlAvgOrderByAggregateInput
    _max?: pl_nlMaxOrderByAggregateInput
    _min?: pl_nlMinOrderByAggregateInput
    _sum?: pl_nlSumOrderByAggregateInput
  }

  export type pl_nlScalarWhereWithAggregatesInput = {
    AND?: pl_nlScalarWhereWithAggregatesInput | pl_nlScalarWhereWithAggregatesInput[]
    OR?: pl_nlScalarWhereWithAggregatesInput[]
    NOT?: pl_nlScalarWhereWithAggregatesInput | pl_nlScalarWhereWithAggregatesInput[]
    id_pl_ln?: IntWithAggregatesFilter<"pl_nl"> | number
    titulo?: StringNullableWithAggregatesFilter<"pl_nl"> | string | null
    id_genero?: IntNullableWithAggregatesFilter<"pl_nl"> | number | null
    id_categoria?: IntNullableWithAggregatesFilter<"pl_nl"> | number | null
    descripcion?: StringNullableWithAggregatesFilter<"pl_nl"> | string | null
    estado?: StringWithAggregatesFilter<"pl_nl"> | string
  }

  export type comentarioWhereInput = {
    AND?: comentarioWhereInput | comentarioWhereInput[]
    OR?: comentarioWhereInput[]
    NOT?: comentarioWhereInput | comentarioWhereInput[]
    id_comentario?: IntFilter<"comentario"> | number
    id_autor?: IntNullableFilter<"comentario"> | number | null
    id_editorial?: IntNullableFilter<"comentario"> | number | null
    fecha_registro?: DateTimeNullableFilter<"comentario"> | Date | string | null
    contenido?: StringNullableFilter<"comentario"> | string | null
    id_estado?: IntNullableFilter<"comentario"> | number | null
    autor?: XOR<AutorNullableRelationFilter, autorWhereInput> | null
    editorial?: XOR<EditorialNullableRelationFilter, editorialWhereInput> | null
  }

  export type comentarioOrderByWithRelationInput = {
    id_comentario?: SortOrder
    id_autor?: SortOrderInput | SortOrder
    id_editorial?: SortOrderInput | SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    contenido?: SortOrderInput | SortOrder
    id_estado?: SortOrderInput | SortOrder
    autor?: autorOrderByWithRelationInput
    editorial?: editorialOrderByWithRelationInput
  }

  export type comentarioWhereUniqueInput = Prisma.AtLeast<{
    id_comentario?: number
    AND?: comentarioWhereInput | comentarioWhereInput[]
    OR?: comentarioWhereInput[]
    NOT?: comentarioWhereInput | comentarioWhereInput[]
    id_autor?: IntNullableFilter<"comentario"> | number | null
    id_editorial?: IntNullableFilter<"comentario"> | number | null
    fecha_registro?: DateTimeNullableFilter<"comentario"> | Date | string | null
    contenido?: StringNullableFilter<"comentario"> | string | null
    id_estado?: IntNullableFilter<"comentario"> | number | null
    autor?: XOR<AutorNullableRelationFilter, autorWhereInput> | null
    editorial?: XOR<EditorialNullableRelationFilter, editorialWhereInput> | null
  }, "id_comentario">

  export type comentarioOrderByWithAggregationInput = {
    id_comentario?: SortOrder
    id_autor?: SortOrderInput | SortOrder
    id_editorial?: SortOrderInput | SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    contenido?: SortOrderInput | SortOrder
    id_estado?: SortOrderInput | SortOrder
    _count?: comentarioCountOrderByAggregateInput
    _avg?: comentarioAvgOrderByAggregateInput
    _max?: comentarioMaxOrderByAggregateInput
    _min?: comentarioMinOrderByAggregateInput
    _sum?: comentarioSumOrderByAggregateInput
  }

  export type comentarioScalarWhereWithAggregatesInput = {
    AND?: comentarioScalarWhereWithAggregatesInput | comentarioScalarWhereWithAggregatesInput[]
    OR?: comentarioScalarWhereWithAggregatesInput[]
    NOT?: comentarioScalarWhereWithAggregatesInput | comentarioScalarWhereWithAggregatesInput[]
    id_comentario?: IntWithAggregatesFilter<"comentario"> | number
    id_autor?: IntNullableWithAggregatesFilter<"comentario"> | number | null
    id_editorial?: IntNullableWithAggregatesFilter<"comentario"> | number | null
    fecha_registro?: DateTimeNullableWithAggregatesFilter<"comentario"> | Date | string | null
    contenido?: StringNullableWithAggregatesFilter<"comentario"> | string | null
    id_estado?: IntNullableWithAggregatesFilter<"comentario"> | number | null
  }

  export type categoriaCreateInput = {
    descripcion?: string | null
    genero?: generoCreateNestedManyWithoutCategoriaInput
    pl_libre?: pl_libreCreateNestedManyWithoutCategoriaInput
    pl_nl?: pl_nlCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUncheckedCreateInput = {
    id_categoria?: number
    descripcion?: string | null
    genero?: generoUncheckedCreateNestedManyWithoutCategoriaInput
    pl_libre?: pl_libreUncheckedCreateNestedManyWithoutCategoriaInput
    pl_nl?: pl_nlUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUpdateInput = {
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: generoUpdateManyWithoutCategoriaNestedInput
    pl_libre?: pl_libreUpdateManyWithoutCategoriaNestedInput
    pl_nl?: pl_nlUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaUncheckedUpdateInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: generoUncheckedUpdateManyWithoutCategoriaNestedInput
    pl_libre?: pl_libreUncheckedUpdateManyWithoutCategoriaNestedInput
    pl_nl?: pl_nlUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaCreateManyInput = {
    id_categoria?: number
    descripcion?: string | null
  }

  export type categoriaUpdateManyMutationInput = {
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriaUncheckedUpdateManyInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type etiquetaCreateInput = {
    nombre?: string | null
    pl_libre?: pl_libreCreateNestedManyWithoutEtiquetaInput
  }

  export type etiquetaUncheckedCreateInput = {
    id_etiqueta?: number
    nombre?: string | null
    pl_libre?: pl_libreUncheckedCreateNestedManyWithoutEtiquetaInput
  }

  export type etiquetaUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    pl_libre?: pl_libreUpdateManyWithoutEtiquetaNestedInput
  }

  export type etiquetaUncheckedUpdateInput = {
    id_etiqueta?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    pl_libre?: pl_libreUncheckedUpdateManyWithoutEtiquetaNestedInput
  }

  export type etiquetaCreateManyInput = {
    id_etiqueta?: number
    nombre?: string | null
  }

  export type etiquetaUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type etiquetaUncheckedUpdateManyInput = {
    id_etiqueta?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type generoCreateInput = {
    nombre?: string | null
    categoria?: categoriaCreateNestedOneWithoutGeneroInput
    pl_nl?: pl_nlCreateNestedManyWithoutGeneroInput
  }

  export type generoUncheckedCreateInput = {
    id_genero?: number
    id_categoria?: number | null
    nombre?: string | null
    pl_nl?: pl_nlUncheckedCreateNestedManyWithoutGeneroInput
  }

  export type generoUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: categoriaUpdateOneWithoutGeneroNestedInput
    pl_nl?: pl_nlUpdateManyWithoutGeneroNestedInput
  }

  export type generoUncheckedUpdateInput = {
    id_genero?: IntFieldUpdateOperationsInput | number
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    pl_nl?: pl_nlUncheckedUpdateManyWithoutGeneroNestedInput
  }

  export type generoCreateManyInput = {
    id_genero?: number
    id_categoria?: number | null
    nombre?: string | null
  }

  export type generoUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type generoUncheckedUpdateManyInput = {
    id_genero?: IntFieldUpdateOperationsInput | number
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type personaCreateInput = {
    nombre?: string | null
    apellido_paterno?: string | null
    apellido_materno?: string | null
    usuario?: usuarioCreateNestedManyWithoutPersonaInput
  }

  export type personaUncheckedCreateInput = {
    id_persona?: number
    nombre?: string | null
    apellido_paterno?: string | null
    apellido_materno?: string | null
    usuario?: usuarioUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type personaUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_paterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: usuarioUpdateManyWithoutPersonaNestedInput
  }

  export type personaUncheckedUpdateInput = {
    id_persona?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_paterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: usuarioUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type personaCreateManyInput = {
    id_persona?: number
    nombre?: string | null
    apellido_paterno?: string | null
    apellido_materno?: string | null
  }

  export type personaUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_paterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type personaUncheckedUpdateManyInput = {
    id_persona?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_paterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuarioCreateInput = {
    correo?: string | null
    contrasenia?: string | null
    verificacion_email?: boolean | null
    id_estado?: number | null
    autor?: autorCreateNestedManyWithoutUsuarioInput
    seguido_seguido_id_user_seguidorTousuario?: seguidoCreateNestedManyWithoutUsuario_seguido_id_user_seguidorTousuarioInput
    seguido_seguido_id_user_seguidoTousuario?: seguidoCreateNestedManyWithoutUsuario_seguido_id_user_seguidoTousuarioInput
    persona?: personaCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateInput = {
    id_usuario?: number
    id_persona?: number | null
    correo?: string | null
    contrasenia?: string | null
    verificacion_email?: boolean | null
    id_estado?: number | null
    autor?: autorUncheckedCreateNestedManyWithoutUsuarioInput
    seguido_seguido_id_user_seguidorTousuario?: seguidoUncheckedCreateNestedManyWithoutUsuario_seguido_id_user_seguidorTousuarioInput
    seguido_seguido_id_user_seguidoTousuario?: seguidoUncheckedCreateNestedManyWithoutUsuario_seguido_id_user_seguidoTousuarioInput
  }

  export type usuarioUpdateInput = {
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    verificacion_email?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    autor?: autorUpdateManyWithoutUsuarioNestedInput
    seguido_seguido_id_user_seguidorTousuario?: seguidoUpdateManyWithoutUsuario_seguido_id_user_seguidorTousuarioNestedInput
    seguido_seguido_id_user_seguidoTousuario?: seguidoUpdateManyWithoutUsuario_seguido_id_user_seguidoTousuarioNestedInput
    persona?: personaUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_persona?: NullableIntFieldUpdateOperationsInput | number | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    verificacion_email?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    autor?: autorUncheckedUpdateManyWithoutUsuarioNestedInput
    seguido_seguido_id_user_seguidorTousuario?: seguidoUncheckedUpdateManyWithoutUsuario_seguido_id_user_seguidorTousuarioNestedInput
    seguido_seguido_id_user_seguidoTousuario?: seguidoUncheckedUpdateManyWithoutUsuario_seguido_id_user_seguidoTousuarioNestedInput
  }

  export type usuarioCreateManyInput = {
    id_usuario?: number
    id_persona?: number | null
    correo?: string | null
    contrasenia?: string | null
    verificacion_email?: boolean | null
    id_estado?: number | null
  }

  export type usuarioUpdateManyMutationInput = {
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    verificacion_email?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_persona?: NullableIntFieldUpdateOperationsInput | number | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    verificacion_email?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type autorCreateInput = {
    nick_name?: string | null
    ocupacion?: string | null
    descripcion?: string | null
    foto_perfil?: string | null
    foto_portada?: string | null
    usuario?: usuarioCreateNestedOneWithoutAutorInput
    pais?: paisCreateNestedOneWithoutAutorInput
    comentario?: comentarioCreateNestedManyWithoutAutorInput
    editorial?: editorialCreateNestedManyWithoutAutorInput
    reaccion?: reaccionCreateNestedManyWithoutAutorInput
  }

  export type autorUncheckedCreateInput = {
    id_autor?: number
    id_pais?: number | null
    id_usuario?: number | null
    nick_name?: string | null
    ocupacion?: string | null
    descripcion?: string | null
    foto_perfil?: string | null
    foto_portada?: string | null
    comentario?: comentarioUncheckedCreateNestedManyWithoutAutorInput
    editorial?: editorialUncheckedCreateNestedManyWithoutAutorInput
    reaccion?: reaccionUncheckedCreateNestedManyWithoutAutorInput
  }

  export type autorUpdateInput = {
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    foto_portada?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: usuarioUpdateOneWithoutAutorNestedInput
    pais?: paisUpdateOneWithoutAutorNestedInput
    comentario?: comentarioUpdateManyWithoutAutorNestedInput
    editorial?: editorialUpdateManyWithoutAutorNestedInput
    reaccion?: reaccionUpdateManyWithoutAutorNestedInput
  }

  export type autorUncheckedUpdateInput = {
    id_autor?: IntFieldUpdateOperationsInput | number
    id_pais?: NullableIntFieldUpdateOperationsInput | number | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    foto_portada?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: comentarioUncheckedUpdateManyWithoutAutorNestedInput
    editorial?: editorialUncheckedUpdateManyWithoutAutorNestedInput
    reaccion?: reaccionUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type autorCreateManyInput = {
    id_autor?: number
    id_pais?: number | null
    id_usuario?: number | null
    nick_name?: string | null
    ocupacion?: string | null
    descripcion?: string | null
    foto_perfil?: string | null
    foto_portada?: string | null
  }

  export type autorUpdateManyMutationInput = {
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    foto_portada?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type autorUncheckedUpdateManyInput = {
    id_autor?: IntFieldUpdateOperationsInput | number
    id_pais?: NullableIntFieldUpdateOperationsInput | number | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    foto_portada?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type paisCreateInput = {
    nombre?: string | null
    code?: string | null
    autor?: autorCreateNestedManyWithoutPaisInput
  }

  export type paisUncheckedCreateInput = {
    id_pais?: number
    nombre?: string | null
    code?: string | null
    autor?: autorUncheckedCreateNestedManyWithoutPaisInput
  }

  export type paisUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    autor?: autorUpdateManyWithoutPaisNestedInput
  }

  export type paisUncheckedUpdateInput = {
    id_pais?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    autor?: autorUncheckedUpdateManyWithoutPaisNestedInput
  }

  export type paisCreateManyInput = {
    id_pais?: number
    nombre?: string | null
    code?: string | null
  }

  export type paisUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type paisUncheckedUpdateManyInput = {
    id_pais?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type seguidoCreateInput = {
    fecha_seguimiento?: Date | string | null
    usuario_seguido_id_user_seguidorTousuario?: usuarioCreateNestedOneWithoutSeguido_seguido_id_user_seguidorTousuarioInput
    usuario_seguido_id_user_seguidoTousuario?: usuarioCreateNestedOneWithoutSeguido_seguido_id_user_seguidoTousuarioInput
    tipo_seguimiento?: tipo_seguimientoCreateNestedOneWithoutSeguidoInput
  }

  export type seguidoUncheckedCreateInput = {
    id_seguido?: number
    id_user_seguidor?: number | null
    id_user_seguido?: number | null
    id_seguimiento?: number | null
    fecha_seguimiento?: Date | string | null
  }

  export type seguidoUpdateInput = {
    fecha_seguimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario_seguido_id_user_seguidorTousuario?: usuarioUpdateOneWithoutSeguido_seguido_id_user_seguidorTousuarioNestedInput
    usuario_seguido_id_user_seguidoTousuario?: usuarioUpdateOneWithoutSeguido_seguido_id_user_seguidoTousuarioNestedInput
    tipo_seguimiento?: tipo_seguimientoUpdateOneWithoutSeguidoNestedInput
  }

  export type seguidoUncheckedUpdateInput = {
    id_seguido?: IntFieldUpdateOperationsInput | number
    id_user_seguidor?: NullableIntFieldUpdateOperationsInput | number | null
    id_user_seguido?: NullableIntFieldUpdateOperationsInput | number | null
    id_seguimiento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_seguimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type seguidoCreateManyInput = {
    id_seguido?: number
    id_user_seguidor?: number | null
    id_user_seguido?: number | null
    id_seguimiento?: number | null
    fecha_seguimiento?: Date | string | null
  }

  export type seguidoUpdateManyMutationInput = {
    fecha_seguimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type seguidoUncheckedUpdateManyInput = {
    id_seguido?: IntFieldUpdateOperationsInput | number
    id_user_seguidor?: NullableIntFieldUpdateOperationsInput | number | null
    id_user_seguido?: NullableIntFieldUpdateOperationsInput | number | null
    id_seguimiento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_seguimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tipo_seguimientoCreateInput = {
    descripcion?: string | null
    seguido?: seguidoCreateNestedManyWithoutTipo_seguimientoInput
  }

  export type tipo_seguimientoUncheckedCreateInput = {
    id_seguimiento?: number
    descripcion?: string | null
    seguido?: seguidoUncheckedCreateNestedManyWithoutTipo_seguimientoInput
  }

  export type tipo_seguimientoUpdateInput = {
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    seguido?: seguidoUpdateManyWithoutTipo_seguimientoNestedInput
  }

  export type tipo_seguimientoUncheckedUpdateInput = {
    id_seguimiento?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    seguido?: seguidoUncheckedUpdateManyWithoutTipo_seguimientoNestedInput
  }

  export type tipo_seguimientoCreateManyInput = {
    id_seguimiento?: number
    descripcion?: string | null
  }

  export type tipo_seguimientoUpdateManyMutationInput = {
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tipo_seguimientoUncheckedUpdateManyInput = {
    id_seguimiento?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reaccionCreateInput = {
    id_capitulo?: number | null
    id_publicacion_l?: number | null
    id_editorial?: number | null
    fecha?: Date | string | null
    autor?: autorCreateNestedOneWithoutReaccionInput
  }

  export type reaccionUncheckedCreateInput = {
    id_reaccion?: number
    id_capitulo?: number | null
    id_publicacion_l?: number | null
    id_editorial?: number | null
    id_autor_reaccion?: number | null
    fecha?: Date | string | null
  }

  export type reaccionUpdateInput = {
    id_capitulo?: NullableIntFieldUpdateOperationsInput | number | null
    id_publicacion_l?: NullableIntFieldUpdateOperationsInput | number | null
    id_editorial?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autor?: autorUpdateOneWithoutReaccionNestedInput
  }

  export type reaccionUncheckedUpdateInput = {
    id_reaccion?: IntFieldUpdateOperationsInput | number
    id_capitulo?: NullableIntFieldUpdateOperationsInput | number | null
    id_publicacion_l?: NullableIntFieldUpdateOperationsInput | number | null
    id_editorial?: NullableIntFieldUpdateOperationsInput | number | null
    id_autor_reaccion?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reaccionCreateManyInput = {
    id_reaccion?: number
    id_capitulo?: number | null
    id_publicacion_l?: number | null
    id_editorial?: number | null
    id_autor_reaccion?: number | null
    fecha?: Date | string | null
  }

  export type reaccionUpdateManyMutationInput = {
    id_capitulo?: NullableIntFieldUpdateOperationsInput | number | null
    id_publicacion_l?: NullableIntFieldUpdateOperationsInput | number | null
    id_editorial?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reaccionUncheckedUpdateManyInput = {
    id_reaccion?: IntFieldUpdateOperationsInput | number
    id_capitulo?: NullableIntFieldUpdateOperationsInput | number | null
    id_publicacion_l?: NullableIntFieldUpdateOperationsInput | number | null
    id_editorial?: NullableIntFieldUpdateOperationsInput | number | null
    id_autor_reaccion?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cap_pl_lnCreateInput = {
    nro_capitulo?: string | null
    nombre_capitulo?: string | null
    contenido?: string | null
    pl_nl?: pl_nlCreateNestedOneWithoutCap_pl_lnInput
    editorial?: editorialCreateNestedOneWithoutCap_pl_lnInput
  }

  export type cap_pl_lnUncheckedCreateInput = {
    id_cap_pl?: number
    id_editorial_pl?: number | null
    id_pl_ln?: number | null
    nro_capitulo?: string | null
    nombre_capitulo?: string | null
    contenido?: string | null
  }

  export type cap_pl_lnUpdateInput = {
    nro_capitulo?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_capitulo?: NullableStringFieldUpdateOperationsInput | string | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
    pl_nl?: pl_nlUpdateOneWithoutCap_pl_lnNestedInput
    editorial?: editorialUpdateOneWithoutCap_pl_lnNestedInput
  }

  export type cap_pl_lnUncheckedUpdateInput = {
    id_cap_pl?: IntFieldUpdateOperationsInput | number
    id_editorial_pl?: NullableIntFieldUpdateOperationsInput | number | null
    id_pl_ln?: NullableIntFieldUpdateOperationsInput | number | null
    nro_capitulo?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_capitulo?: NullableStringFieldUpdateOperationsInput | string | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cap_pl_lnCreateManyInput = {
    id_cap_pl?: number
    id_editorial_pl?: number | null
    id_pl_ln?: number | null
    nro_capitulo?: string | null
    nombre_capitulo?: string | null
    contenido?: string | null
  }

  export type cap_pl_lnUpdateManyMutationInput = {
    nro_capitulo?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_capitulo?: NullableStringFieldUpdateOperationsInput | string | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cap_pl_lnUncheckedUpdateManyInput = {
    id_cap_pl?: IntFieldUpdateOperationsInput | number
    id_editorial_pl?: NullableIntFieldUpdateOperationsInput | number | null
    id_pl_ln?: NullableIntFieldUpdateOperationsInput | number | null
    nro_capitulo?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_capitulo?: NullableStringFieldUpdateOperationsInput | string | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type editorialCreateInput = {
    fecha_registro?: Date | string | null
    id_estado: number
    cap_pl_ln?: cap_pl_lnCreateNestedManyWithoutEditorialInput
    comentario?: comentarioCreateNestedManyWithoutEditorialInput
    autor?: autorCreateNestedOneWithoutEditorialInput
    pl_libre?: pl_libreCreateNestedManyWithoutEditorialInput
  }

  export type editorialUncheckedCreateInput = {
    id_editorial_pl?: number
    id_autor?: number | null
    fecha_registro?: Date | string | null
    id_estado: number
    cap_pl_ln?: cap_pl_lnUncheckedCreateNestedManyWithoutEditorialInput
    comentario?: comentarioUncheckedCreateNestedManyWithoutEditorialInput
    pl_libre?: pl_libreUncheckedCreateNestedManyWithoutEditorialInput
  }

  export type editorialUpdateInput = {
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estado?: IntFieldUpdateOperationsInput | number
    cap_pl_ln?: cap_pl_lnUpdateManyWithoutEditorialNestedInput
    comentario?: comentarioUpdateManyWithoutEditorialNestedInput
    autor?: autorUpdateOneWithoutEditorialNestedInput
    pl_libre?: pl_libreUpdateManyWithoutEditorialNestedInput
  }

  export type editorialUncheckedUpdateInput = {
    id_editorial_pl?: IntFieldUpdateOperationsInput | number
    id_autor?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estado?: IntFieldUpdateOperationsInput | number
    cap_pl_ln?: cap_pl_lnUncheckedUpdateManyWithoutEditorialNestedInput
    comentario?: comentarioUncheckedUpdateManyWithoutEditorialNestedInput
    pl_libre?: pl_libreUncheckedUpdateManyWithoutEditorialNestedInput
  }

  export type editorialCreateManyInput = {
    id_editorial_pl?: number
    id_autor?: number | null
    fecha_registro?: Date | string | null
    id_estado: number
  }

  export type editorialUpdateManyMutationInput = {
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estado?: IntFieldUpdateOperationsInput | number
  }

  export type editorialUncheckedUpdateManyInput = {
    id_editorial_pl?: IntFieldUpdateOperationsInput | number
    id_autor?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estado?: IntFieldUpdateOperationsInput | number
  }

  export type pl_libreCreateInput = {
    contenido?: string | null
    categoria?: categoriaCreateNestedOneWithoutPl_libreInput
    editorial?: editorialCreateNestedOneWithoutPl_libreInput
    etiqueta?: etiquetaCreateNestedOneWithoutPl_libreInput
  }

  export type pl_libreUncheckedCreateInput = {
    id_pl_libre?: number
    id_categoria?: number | null
    id_editorial_pl?: number | null
    id_etiqueta?: number | null
    contenido?: string | null
  }

  export type pl_libreUpdateInput = {
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: categoriaUpdateOneWithoutPl_libreNestedInput
    editorial?: editorialUpdateOneWithoutPl_libreNestedInput
    etiqueta?: etiquetaUpdateOneWithoutPl_libreNestedInput
  }

  export type pl_libreUncheckedUpdateInput = {
    id_pl_libre?: IntFieldUpdateOperationsInput | number
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_editorial_pl?: NullableIntFieldUpdateOperationsInput | number | null
    id_etiqueta?: NullableIntFieldUpdateOperationsInput | number | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pl_libreCreateManyInput = {
    id_pl_libre?: number
    id_categoria?: number | null
    id_editorial_pl?: number | null
    id_etiqueta?: number | null
    contenido?: string | null
  }

  export type pl_libreUpdateManyMutationInput = {
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pl_libreUncheckedUpdateManyInput = {
    id_pl_libre?: IntFieldUpdateOperationsInput | number
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_editorial_pl?: NullableIntFieldUpdateOperationsInput | number | null
    id_etiqueta?: NullableIntFieldUpdateOperationsInput | number | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pl_nlCreateInput = {
    titulo?: string | null
    descripcion?: string | null
    estado: string
    cap_pl_ln?: cap_pl_lnCreateNestedManyWithoutPl_nlInput
    genero?: generoCreateNestedOneWithoutPl_nlInput
    categoria?: categoriaCreateNestedOneWithoutPl_nlInput
  }

  export type pl_nlUncheckedCreateInput = {
    id_pl_ln?: number
    titulo?: string | null
    id_genero?: number | null
    id_categoria?: number | null
    descripcion?: string | null
    estado: string
    cap_pl_ln?: cap_pl_lnUncheckedCreateNestedManyWithoutPl_nlInput
  }

  export type pl_nlUpdateInput = {
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    cap_pl_ln?: cap_pl_lnUpdateManyWithoutPl_nlNestedInput
    genero?: generoUpdateOneWithoutPl_nlNestedInput
    categoria?: categoriaUpdateOneWithoutPl_nlNestedInput
  }

  export type pl_nlUncheckedUpdateInput = {
    id_pl_ln?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    id_genero?: NullableIntFieldUpdateOperationsInput | number | null
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    cap_pl_ln?: cap_pl_lnUncheckedUpdateManyWithoutPl_nlNestedInput
  }

  export type pl_nlCreateManyInput = {
    id_pl_ln?: number
    titulo?: string | null
    id_genero?: number | null
    id_categoria?: number | null
    descripcion?: string | null
    estado: string
  }

  export type pl_nlUpdateManyMutationInput = {
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type pl_nlUncheckedUpdateManyInput = {
    id_pl_ln?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    id_genero?: NullableIntFieldUpdateOperationsInput | number | null
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type comentarioCreateInput = {
    fecha_registro?: Date | string | null
    contenido?: string | null
    id_estado?: number | null
    autor?: autorCreateNestedOneWithoutComentarioInput
    editorial?: editorialCreateNestedOneWithoutComentarioInput
  }

  export type comentarioUncheckedCreateInput = {
    id_comentario?: number
    id_autor?: number | null
    id_editorial?: number | null
    fecha_registro?: Date | string | null
    contenido?: string | null
    id_estado?: number | null
  }

  export type comentarioUpdateInput = {
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    autor?: autorUpdateOneWithoutComentarioNestedInput
    editorial?: editorialUpdateOneWithoutComentarioNestedInput
  }

  export type comentarioUncheckedUpdateInput = {
    id_comentario?: IntFieldUpdateOperationsInput | number
    id_autor?: NullableIntFieldUpdateOperationsInput | number | null
    id_editorial?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type comentarioCreateManyInput = {
    id_comentario?: number
    id_autor?: number | null
    id_editorial?: number | null
    fecha_registro?: Date | string | null
    contenido?: string | null
    id_estado?: number | null
  }

  export type comentarioUpdateManyMutationInput = {
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type comentarioUncheckedUpdateManyInput = {
    id_comentario?: IntFieldUpdateOperationsInput | number
    id_autor?: NullableIntFieldUpdateOperationsInput | number | null
    id_editorial?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type GeneroListRelationFilter = {
    every?: generoWhereInput
    some?: generoWhereInput
    none?: generoWhereInput
  }

  export type Pl_libreListRelationFilter = {
    every?: pl_libreWhereInput
    some?: pl_libreWhereInput
    none?: pl_libreWhereInput
  }

  export type Pl_nlListRelationFilter = {
    every?: pl_nlWhereInput
    some?: pl_nlWhereInput
    none?: pl_nlWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type generoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pl_libreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pl_nlOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriaCountOrderByAggregateInput = {
    id_categoria?: SortOrder
    descripcion?: SortOrder
  }

  export type categoriaAvgOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type categoriaMaxOrderByAggregateInput = {
    id_categoria?: SortOrder
    descripcion?: SortOrder
  }

  export type categoriaMinOrderByAggregateInput = {
    id_categoria?: SortOrder
    descripcion?: SortOrder
  }

  export type categoriaSumOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type etiquetaCountOrderByAggregateInput = {
    id_etiqueta?: SortOrder
    nombre?: SortOrder
  }

  export type etiquetaAvgOrderByAggregateInput = {
    id_etiqueta?: SortOrder
  }

  export type etiquetaMaxOrderByAggregateInput = {
    id_etiqueta?: SortOrder
    nombre?: SortOrder
  }

  export type etiquetaMinOrderByAggregateInput = {
    id_etiqueta?: SortOrder
    nombre?: SortOrder
  }

  export type etiquetaSumOrderByAggregateInput = {
    id_etiqueta?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoriaNullableRelationFilter = {
    is?: categoriaWhereInput | null
    isNot?: categoriaWhereInput | null
  }

  export type generoCountOrderByAggregateInput = {
    id_genero?: SortOrder
    id_categoria?: SortOrder
    nombre?: SortOrder
  }

  export type generoAvgOrderByAggregateInput = {
    id_genero?: SortOrder
    id_categoria?: SortOrder
  }

  export type generoMaxOrderByAggregateInput = {
    id_genero?: SortOrder
    id_categoria?: SortOrder
    nombre?: SortOrder
  }

  export type generoMinOrderByAggregateInput = {
    id_genero?: SortOrder
    id_categoria?: SortOrder
    nombre?: SortOrder
  }

  export type generoSumOrderByAggregateInput = {
    id_genero?: SortOrder
    id_categoria?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UsuarioListRelationFilter = {
    every?: usuarioWhereInput
    some?: usuarioWhereInput
    none?: usuarioWhereInput
  }

  export type usuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type personaCountOrderByAggregateInput = {
    id_persona?: SortOrder
    nombre?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrder
  }

  export type personaAvgOrderByAggregateInput = {
    id_persona?: SortOrder
  }

  export type personaMaxOrderByAggregateInput = {
    id_persona?: SortOrder
    nombre?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrder
  }

  export type personaMinOrderByAggregateInput = {
    id_persona?: SortOrder
    nombre?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrder
  }

  export type personaSumOrderByAggregateInput = {
    id_persona?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type AutorListRelationFilter = {
    every?: autorWhereInput
    some?: autorWhereInput
    none?: autorWhereInput
  }

  export type SeguidoListRelationFilter = {
    every?: seguidoWhereInput
    some?: seguidoWhereInput
    none?: seguidoWhereInput
  }

  export type PersonaNullableRelationFilter = {
    is?: personaWhereInput | null
    isNot?: personaWhereInput | null
  }

  export type autorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type seguidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_persona?: SortOrder
    correo?: SortOrder
    contrasenia?: SortOrder
    verificacion_email?: SortOrder
    id_estado?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_persona?: SortOrder
    id_estado?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_persona?: SortOrder
    correo?: SortOrder
    contrasenia?: SortOrder
    verificacion_email?: SortOrder
    id_estado?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_persona?: SortOrder
    correo?: SortOrder
    contrasenia?: SortOrder
    verificacion_email?: SortOrder
    id_estado?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_persona?: SortOrder
    id_estado?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UsuarioNullableRelationFilter = {
    is?: usuarioWhereInput | null
    isNot?: usuarioWhereInput | null
  }

  export type PaisNullableRelationFilter = {
    is?: paisWhereInput | null
    isNot?: paisWhereInput | null
  }

  export type ComentarioListRelationFilter = {
    every?: comentarioWhereInput
    some?: comentarioWhereInput
    none?: comentarioWhereInput
  }

  export type EditorialListRelationFilter = {
    every?: editorialWhereInput
    some?: editorialWhereInput
    none?: editorialWhereInput
  }

  export type ReaccionListRelationFilter = {
    every?: reaccionWhereInput
    some?: reaccionWhereInput
    none?: reaccionWhereInput
  }

  export type comentarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type editorialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reaccionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type autorCountOrderByAggregateInput = {
    id_autor?: SortOrder
    id_pais?: SortOrder
    id_usuario?: SortOrder
    nick_name?: SortOrder
    ocupacion?: SortOrder
    descripcion?: SortOrder
    foto_perfil?: SortOrder
    foto_portada?: SortOrder
  }

  export type autorAvgOrderByAggregateInput = {
    id_autor?: SortOrder
    id_pais?: SortOrder
    id_usuario?: SortOrder
  }

  export type autorMaxOrderByAggregateInput = {
    id_autor?: SortOrder
    id_pais?: SortOrder
    id_usuario?: SortOrder
    nick_name?: SortOrder
    ocupacion?: SortOrder
    descripcion?: SortOrder
    foto_perfil?: SortOrder
    foto_portada?: SortOrder
  }

  export type autorMinOrderByAggregateInput = {
    id_autor?: SortOrder
    id_pais?: SortOrder
    id_usuario?: SortOrder
    nick_name?: SortOrder
    ocupacion?: SortOrder
    descripcion?: SortOrder
    foto_perfil?: SortOrder
    foto_portada?: SortOrder
  }

  export type autorSumOrderByAggregateInput = {
    id_autor?: SortOrder
    id_pais?: SortOrder
    id_usuario?: SortOrder
  }

  export type paisCountOrderByAggregateInput = {
    id_pais?: SortOrder
    nombre?: SortOrder
    code?: SortOrder
  }

  export type paisAvgOrderByAggregateInput = {
    id_pais?: SortOrder
  }

  export type paisMaxOrderByAggregateInput = {
    id_pais?: SortOrder
    nombre?: SortOrder
    code?: SortOrder
  }

  export type paisMinOrderByAggregateInput = {
    id_pais?: SortOrder
    nombre?: SortOrder
    code?: SortOrder
  }

  export type paisSumOrderByAggregateInput = {
    id_pais?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Tipo_seguimientoNullableRelationFilter = {
    is?: tipo_seguimientoWhereInput | null
    isNot?: tipo_seguimientoWhereInput | null
  }

  export type seguidoCountOrderByAggregateInput = {
    id_seguido?: SortOrder
    id_user_seguidor?: SortOrder
    id_user_seguido?: SortOrder
    id_seguimiento?: SortOrder
    fecha_seguimiento?: SortOrder
  }

  export type seguidoAvgOrderByAggregateInput = {
    id_seguido?: SortOrder
    id_user_seguidor?: SortOrder
    id_user_seguido?: SortOrder
    id_seguimiento?: SortOrder
  }

  export type seguidoMaxOrderByAggregateInput = {
    id_seguido?: SortOrder
    id_user_seguidor?: SortOrder
    id_user_seguido?: SortOrder
    id_seguimiento?: SortOrder
    fecha_seguimiento?: SortOrder
  }

  export type seguidoMinOrderByAggregateInput = {
    id_seguido?: SortOrder
    id_user_seguidor?: SortOrder
    id_user_seguido?: SortOrder
    id_seguimiento?: SortOrder
    fecha_seguimiento?: SortOrder
  }

  export type seguidoSumOrderByAggregateInput = {
    id_seguido?: SortOrder
    id_user_seguidor?: SortOrder
    id_user_seguido?: SortOrder
    id_seguimiento?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type tipo_seguimientoCountOrderByAggregateInput = {
    id_seguimiento?: SortOrder
    descripcion?: SortOrder
  }

  export type tipo_seguimientoAvgOrderByAggregateInput = {
    id_seguimiento?: SortOrder
  }

  export type tipo_seguimientoMaxOrderByAggregateInput = {
    id_seguimiento?: SortOrder
    descripcion?: SortOrder
  }

  export type tipo_seguimientoMinOrderByAggregateInput = {
    id_seguimiento?: SortOrder
    descripcion?: SortOrder
  }

  export type tipo_seguimientoSumOrderByAggregateInput = {
    id_seguimiento?: SortOrder
  }

  export type AutorNullableRelationFilter = {
    is?: autorWhereInput | null
    isNot?: autorWhereInput | null
  }

  export type reaccionCountOrderByAggregateInput = {
    id_reaccion?: SortOrder
    id_capitulo?: SortOrder
    id_publicacion_l?: SortOrder
    id_editorial?: SortOrder
    id_autor_reaccion?: SortOrder
    fecha?: SortOrder
  }

  export type reaccionAvgOrderByAggregateInput = {
    id_reaccion?: SortOrder
    id_capitulo?: SortOrder
    id_publicacion_l?: SortOrder
    id_editorial?: SortOrder
    id_autor_reaccion?: SortOrder
  }

  export type reaccionMaxOrderByAggregateInput = {
    id_reaccion?: SortOrder
    id_capitulo?: SortOrder
    id_publicacion_l?: SortOrder
    id_editorial?: SortOrder
    id_autor_reaccion?: SortOrder
    fecha?: SortOrder
  }

  export type reaccionMinOrderByAggregateInput = {
    id_reaccion?: SortOrder
    id_capitulo?: SortOrder
    id_publicacion_l?: SortOrder
    id_editorial?: SortOrder
    id_autor_reaccion?: SortOrder
    fecha?: SortOrder
  }

  export type reaccionSumOrderByAggregateInput = {
    id_reaccion?: SortOrder
    id_capitulo?: SortOrder
    id_publicacion_l?: SortOrder
    id_editorial?: SortOrder
    id_autor_reaccion?: SortOrder
  }

  export type Pl_nlNullableRelationFilter = {
    is?: pl_nlWhereInput | null
    isNot?: pl_nlWhereInput | null
  }

  export type EditorialNullableRelationFilter = {
    is?: editorialWhereInput | null
    isNot?: editorialWhereInput | null
  }

  export type cap_pl_lnCountOrderByAggregateInput = {
    id_cap_pl?: SortOrder
    id_editorial_pl?: SortOrder
    id_pl_ln?: SortOrder
    nro_capitulo?: SortOrder
    nombre_capitulo?: SortOrder
    contenido?: SortOrder
  }

  export type cap_pl_lnAvgOrderByAggregateInput = {
    id_cap_pl?: SortOrder
    id_editorial_pl?: SortOrder
    id_pl_ln?: SortOrder
  }

  export type cap_pl_lnMaxOrderByAggregateInput = {
    id_cap_pl?: SortOrder
    id_editorial_pl?: SortOrder
    id_pl_ln?: SortOrder
    nro_capitulo?: SortOrder
    nombre_capitulo?: SortOrder
    contenido?: SortOrder
  }

  export type cap_pl_lnMinOrderByAggregateInput = {
    id_cap_pl?: SortOrder
    id_editorial_pl?: SortOrder
    id_pl_ln?: SortOrder
    nro_capitulo?: SortOrder
    nombre_capitulo?: SortOrder
    contenido?: SortOrder
  }

  export type cap_pl_lnSumOrderByAggregateInput = {
    id_cap_pl?: SortOrder
    id_editorial_pl?: SortOrder
    id_pl_ln?: SortOrder
  }

  export type Cap_pl_lnListRelationFilter = {
    every?: cap_pl_lnWhereInput
    some?: cap_pl_lnWhereInput
    none?: cap_pl_lnWhereInput
  }

  export type cap_pl_lnOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type editorialCountOrderByAggregateInput = {
    id_editorial_pl?: SortOrder
    id_autor?: SortOrder
    fecha_registro?: SortOrder
    id_estado?: SortOrder
  }

  export type editorialAvgOrderByAggregateInput = {
    id_editorial_pl?: SortOrder
    id_autor?: SortOrder
    id_estado?: SortOrder
  }

  export type editorialMaxOrderByAggregateInput = {
    id_editorial_pl?: SortOrder
    id_autor?: SortOrder
    fecha_registro?: SortOrder
    id_estado?: SortOrder
  }

  export type editorialMinOrderByAggregateInput = {
    id_editorial_pl?: SortOrder
    id_autor?: SortOrder
    fecha_registro?: SortOrder
    id_estado?: SortOrder
  }

  export type editorialSumOrderByAggregateInput = {
    id_editorial_pl?: SortOrder
    id_autor?: SortOrder
    id_estado?: SortOrder
  }

  export type EtiquetaNullableRelationFilter = {
    is?: etiquetaWhereInput | null
    isNot?: etiquetaWhereInput | null
  }

  export type pl_libreCountOrderByAggregateInput = {
    id_pl_libre?: SortOrder
    id_categoria?: SortOrder
    id_editorial_pl?: SortOrder
    id_etiqueta?: SortOrder
    contenido?: SortOrder
  }

  export type pl_libreAvgOrderByAggregateInput = {
    id_pl_libre?: SortOrder
    id_categoria?: SortOrder
    id_editorial_pl?: SortOrder
    id_etiqueta?: SortOrder
  }

  export type pl_libreMaxOrderByAggregateInput = {
    id_pl_libre?: SortOrder
    id_categoria?: SortOrder
    id_editorial_pl?: SortOrder
    id_etiqueta?: SortOrder
    contenido?: SortOrder
  }

  export type pl_libreMinOrderByAggregateInput = {
    id_pl_libre?: SortOrder
    id_categoria?: SortOrder
    id_editorial_pl?: SortOrder
    id_etiqueta?: SortOrder
    contenido?: SortOrder
  }

  export type pl_libreSumOrderByAggregateInput = {
    id_pl_libre?: SortOrder
    id_categoria?: SortOrder
    id_editorial_pl?: SortOrder
    id_etiqueta?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type GeneroNullableRelationFilter = {
    is?: generoWhereInput | null
    isNot?: generoWhereInput | null
  }

  export type pl_nlCountOrderByAggregateInput = {
    id_pl_ln?: SortOrder
    titulo?: SortOrder
    id_genero?: SortOrder
    id_categoria?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
  }

  export type pl_nlAvgOrderByAggregateInput = {
    id_pl_ln?: SortOrder
    id_genero?: SortOrder
    id_categoria?: SortOrder
  }

  export type pl_nlMaxOrderByAggregateInput = {
    id_pl_ln?: SortOrder
    titulo?: SortOrder
    id_genero?: SortOrder
    id_categoria?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
  }

  export type pl_nlMinOrderByAggregateInput = {
    id_pl_ln?: SortOrder
    titulo?: SortOrder
    id_genero?: SortOrder
    id_categoria?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
  }

  export type pl_nlSumOrderByAggregateInput = {
    id_pl_ln?: SortOrder
    id_genero?: SortOrder
    id_categoria?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type comentarioCountOrderByAggregateInput = {
    id_comentario?: SortOrder
    id_autor?: SortOrder
    id_editorial?: SortOrder
    fecha_registro?: SortOrder
    contenido?: SortOrder
    id_estado?: SortOrder
  }

  export type comentarioAvgOrderByAggregateInput = {
    id_comentario?: SortOrder
    id_autor?: SortOrder
    id_editorial?: SortOrder
    id_estado?: SortOrder
  }

  export type comentarioMaxOrderByAggregateInput = {
    id_comentario?: SortOrder
    id_autor?: SortOrder
    id_editorial?: SortOrder
    fecha_registro?: SortOrder
    contenido?: SortOrder
    id_estado?: SortOrder
  }

  export type comentarioMinOrderByAggregateInput = {
    id_comentario?: SortOrder
    id_autor?: SortOrder
    id_editorial?: SortOrder
    fecha_registro?: SortOrder
    contenido?: SortOrder
    id_estado?: SortOrder
  }

  export type comentarioSumOrderByAggregateInput = {
    id_comentario?: SortOrder
    id_autor?: SortOrder
    id_editorial?: SortOrder
    id_estado?: SortOrder
  }

  export type generoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<generoCreateWithoutCategoriaInput, generoUncheckedCreateWithoutCategoriaInput> | generoCreateWithoutCategoriaInput[] | generoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: generoCreateOrConnectWithoutCategoriaInput | generoCreateOrConnectWithoutCategoriaInput[]
    createMany?: generoCreateManyCategoriaInputEnvelope
    connect?: generoWhereUniqueInput | generoWhereUniqueInput[]
  }

  export type pl_libreCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<pl_libreCreateWithoutCategoriaInput, pl_libreUncheckedCreateWithoutCategoriaInput> | pl_libreCreateWithoutCategoriaInput[] | pl_libreUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: pl_libreCreateOrConnectWithoutCategoriaInput | pl_libreCreateOrConnectWithoutCategoriaInput[]
    createMany?: pl_libreCreateManyCategoriaInputEnvelope
    connect?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
  }

  export type pl_nlCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<pl_nlCreateWithoutCategoriaInput, pl_nlUncheckedCreateWithoutCategoriaInput> | pl_nlCreateWithoutCategoriaInput[] | pl_nlUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: pl_nlCreateOrConnectWithoutCategoriaInput | pl_nlCreateOrConnectWithoutCategoriaInput[]
    createMany?: pl_nlCreateManyCategoriaInputEnvelope
    connect?: pl_nlWhereUniqueInput | pl_nlWhereUniqueInput[]
  }

  export type generoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<generoCreateWithoutCategoriaInput, generoUncheckedCreateWithoutCategoriaInput> | generoCreateWithoutCategoriaInput[] | generoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: generoCreateOrConnectWithoutCategoriaInput | generoCreateOrConnectWithoutCategoriaInput[]
    createMany?: generoCreateManyCategoriaInputEnvelope
    connect?: generoWhereUniqueInput | generoWhereUniqueInput[]
  }

  export type pl_libreUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<pl_libreCreateWithoutCategoriaInput, pl_libreUncheckedCreateWithoutCategoriaInput> | pl_libreCreateWithoutCategoriaInput[] | pl_libreUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: pl_libreCreateOrConnectWithoutCategoriaInput | pl_libreCreateOrConnectWithoutCategoriaInput[]
    createMany?: pl_libreCreateManyCategoriaInputEnvelope
    connect?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
  }

  export type pl_nlUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<pl_nlCreateWithoutCategoriaInput, pl_nlUncheckedCreateWithoutCategoriaInput> | pl_nlCreateWithoutCategoriaInput[] | pl_nlUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: pl_nlCreateOrConnectWithoutCategoriaInput | pl_nlCreateOrConnectWithoutCategoriaInput[]
    createMany?: pl_nlCreateManyCategoriaInputEnvelope
    connect?: pl_nlWhereUniqueInput | pl_nlWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type generoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<generoCreateWithoutCategoriaInput, generoUncheckedCreateWithoutCategoriaInput> | generoCreateWithoutCategoriaInput[] | generoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: generoCreateOrConnectWithoutCategoriaInput | generoCreateOrConnectWithoutCategoriaInput[]
    upsert?: generoUpsertWithWhereUniqueWithoutCategoriaInput | generoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: generoCreateManyCategoriaInputEnvelope
    set?: generoWhereUniqueInput | generoWhereUniqueInput[]
    disconnect?: generoWhereUniqueInput | generoWhereUniqueInput[]
    delete?: generoWhereUniqueInput | generoWhereUniqueInput[]
    connect?: generoWhereUniqueInput | generoWhereUniqueInput[]
    update?: generoUpdateWithWhereUniqueWithoutCategoriaInput | generoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: generoUpdateManyWithWhereWithoutCategoriaInput | generoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: generoScalarWhereInput | generoScalarWhereInput[]
  }

  export type pl_libreUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<pl_libreCreateWithoutCategoriaInput, pl_libreUncheckedCreateWithoutCategoriaInput> | pl_libreCreateWithoutCategoriaInput[] | pl_libreUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: pl_libreCreateOrConnectWithoutCategoriaInput | pl_libreCreateOrConnectWithoutCategoriaInput[]
    upsert?: pl_libreUpsertWithWhereUniqueWithoutCategoriaInput | pl_libreUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: pl_libreCreateManyCategoriaInputEnvelope
    set?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    disconnect?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    delete?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    connect?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    update?: pl_libreUpdateWithWhereUniqueWithoutCategoriaInput | pl_libreUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: pl_libreUpdateManyWithWhereWithoutCategoriaInput | pl_libreUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: pl_libreScalarWhereInput | pl_libreScalarWhereInput[]
  }

  export type pl_nlUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<pl_nlCreateWithoutCategoriaInput, pl_nlUncheckedCreateWithoutCategoriaInput> | pl_nlCreateWithoutCategoriaInput[] | pl_nlUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: pl_nlCreateOrConnectWithoutCategoriaInput | pl_nlCreateOrConnectWithoutCategoriaInput[]
    upsert?: pl_nlUpsertWithWhereUniqueWithoutCategoriaInput | pl_nlUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: pl_nlCreateManyCategoriaInputEnvelope
    set?: pl_nlWhereUniqueInput | pl_nlWhereUniqueInput[]
    disconnect?: pl_nlWhereUniqueInput | pl_nlWhereUniqueInput[]
    delete?: pl_nlWhereUniqueInput | pl_nlWhereUniqueInput[]
    connect?: pl_nlWhereUniqueInput | pl_nlWhereUniqueInput[]
    update?: pl_nlUpdateWithWhereUniqueWithoutCategoriaInput | pl_nlUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: pl_nlUpdateManyWithWhereWithoutCategoriaInput | pl_nlUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: pl_nlScalarWhereInput | pl_nlScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type generoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<generoCreateWithoutCategoriaInput, generoUncheckedCreateWithoutCategoriaInput> | generoCreateWithoutCategoriaInput[] | generoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: generoCreateOrConnectWithoutCategoriaInput | generoCreateOrConnectWithoutCategoriaInput[]
    upsert?: generoUpsertWithWhereUniqueWithoutCategoriaInput | generoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: generoCreateManyCategoriaInputEnvelope
    set?: generoWhereUniqueInput | generoWhereUniqueInput[]
    disconnect?: generoWhereUniqueInput | generoWhereUniqueInput[]
    delete?: generoWhereUniqueInput | generoWhereUniqueInput[]
    connect?: generoWhereUniqueInput | generoWhereUniqueInput[]
    update?: generoUpdateWithWhereUniqueWithoutCategoriaInput | generoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: generoUpdateManyWithWhereWithoutCategoriaInput | generoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: generoScalarWhereInput | generoScalarWhereInput[]
  }

  export type pl_libreUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<pl_libreCreateWithoutCategoriaInput, pl_libreUncheckedCreateWithoutCategoriaInput> | pl_libreCreateWithoutCategoriaInput[] | pl_libreUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: pl_libreCreateOrConnectWithoutCategoriaInput | pl_libreCreateOrConnectWithoutCategoriaInput[]
    upsert?: pl_libreUpsertWithWhereUniqueWithoutCategoriaInput | pl_libreUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: pl_libreCreateManyCategoriaInputEnvelope
    set?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    disconnect?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    delete?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    connect?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    update?: pl_libreUpdateWithWhereUniqueWithoutCategoriaInput | pl_libreUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: pl_libreUpdateManyWithWhereWithoutCategoriaInput | pl_libreUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: pl_libreScalarWhereInput | pl_libreScalarWhereInput[]
  }

  export type pl_nlUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<pl_nlCreateWithoutCategoriaInput, pl_nlUncheckedCreateWithoutCategoriaInput> | pl_nlCreateWithoutCategoriaInput[] | pl_nlUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: pl_nlCreateOrConnectWithoutCategoriaInput | pl_nlCreateOrConnectWithoutCategoriaInput[]
    upsert?: pl_nlUpsertWithWhereUniqueWithoutCategoriaInput | pl_nlUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: pl_nlCreateManyCategoriaInputEnvelope
    set?: pl_nlWhereUniqueInput | pl_nlWhereUniqueInput[]
    disconnect?: pl_nlWhereUniqueInput | pl_nlWhereUniqueInput[]
    delete?: pl_nlWhereUniqueInput | pl_nlWhereUniqueInput[]
    connect?: pl_nlWhereUniqueInput | pl_nlWhereUniqueInput[]
    update?: pl_nlUpdateWithWhereUniqueWithoutCategoriaInput | pl_nlUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: pl_nlUpdateManyWithWhereWithoutCategoriaInput | pl_nlUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: pl_nlScalarWhereInput | pl_nlScalarWhereInput[]
  }

  export type pl_libreCreateNestedManyWithoutEtiquetaInput = {
    create?: XOR<pl_libreCreateWithoutEtiquetaInput, pl_libreUncheckedCreateWithoutEtiquetaInput> | pl_libreCreateWithoutEtiquetaInput[] | pl_libreUncheckedCreateWithoutEtiquetaInput[]
    connectOrCreate?: pl_libreCreateOrConnectWithoutEtiquetaInput | pl_libreCreateOrConnectWithoutEtiquetaInput[]
    createMany?: pl_libreCreateManyEtiquetaInputEnvelope
    connect?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
  }

  export type pl_libreUncheckedCreateNestedManyWithoutEtiquetaInput = {
    create?: XOR<pl_libreCreateWithoutEtiquetaInput, pl_libreUncheckedCreateWithoutEtiquetaInput> | pl_libreCreateWithoutEtiquetaInput[] | pl_libreUncheckedCreateWithoutEtiquetaInput[]
    connectOrCreate?: pl_libreCreateOrConnectWithoutEtiquetaInput | pl_libreCreateOrConnectWithoutEtiquetaInput[]
    createMany?: pl_libreCreateManyEtiquetaInputEnvelope
    connect?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
  }

  export type pl_libreUpdateManyWithoutEtiquetaNestedInput = {
    create?: XOR<pl_libreCreateWithoutEtiquetaInput, pl_libreUncheckedCreateWithoutEtiquetaInput> | pl_libreCreateWithoutEtiquetaInput[] | pl_libreUncheckedCreateWithoutEtiquetaInput[]
    connectOrCreate?: pl_libreCreateOrConnectWithoutEtiquetaInput | pl_libreCreateOrConnectWithoutEtiquetaInput[]
    upsert?: pl_libreUpsertWithWhereUniqueWithoutEtiquetaInput | pl_libreUpsertWithWhereUniqueWithoutEtiquetaInput[]
    createMany?: pl_libreCreateManyEtiquetaInputEnvelope
    set?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    disconnect?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    delete?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    connect?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    update?: pl_libreUpdateWithWhereUniqueWithoutEtiquetaInput | pl_libreUpdateWithWhereUniqueWithoutEtiquetaInput[]
    updateMany?: pl_libreUpdateManyWithWhereWithoutEtiquetaInput | pl_libreUpdateManyWithWhereWithoutEtiquetaInput[]
    deleteMany?: pl_libreScalarWhereInput | pl_libreScalarWhereInput[]
  }

  export type pl_libreUncheckedUpdateManyWithoutEtiquetaNestedInput = {
    create?: XOR<pl_libreCreateWithoutEtiquetaInput, pl_libreUncheckedCreateWithoutEtiquetaInput> | pl_libreCreateWithoutEtiquetaInput[] | pl_libreUncheckedCreateWithoutEtiquetaInput[]
    connectOrCreate?: pl_libreCreateOrConnectWithoutEtiquetaInput | pl_libreCreateOrConnectWithoutEtiquetaInput[]
    upsert?: pl_libreUpsertWithWhereUniqueWithoutEtiquetaInput | pl_libreUpsertWithWhereUniqueWithoutEtiquetaInput[]
    createMany?: pl_libreCreateManyEtiquetaInputEnvelope
    set?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    disconnect?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    delete?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    connect?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    update?: pl_libreUpdateWithWhereUniqueWithoutEtiquetaInput | pl_libreUpdateWithWhereUniqueWithoutEtiquetaInput[]
    updateMany?: pl_libreUpdateManyWithWhereWithoutEtiquetaInput | pl_libreUpdateManyWithWhereWithoutEtiquetaInput[]
    deleteMany?: pl_libreScalarWhereInput | pl_libreScalarWhereInput[]
  }

  export type categoriaCreateNestedOneWithoutGeneroInput = {
    create?: XOR<categoriaCreateWithoutGeneroInput, categoriaUncheckedCreateWithoutGeneroInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutGeneroInput
    connect?: categoriaWhereUniqueInput
  }

  export type pl_nlCreateNestedManyWithoutGeneroInput = {
    create?: XOR<pl_nlCreateWithoutGeneroInput, pl_nlUncheckedCreateWithoutGeneroInput> | pl_nlCreateWithoutGeneroInput[] | pl_nlUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: pl_nlCreateOrConnectWithoutGeneroInput | pl_nlCreateOrConnectWithoutGeneroInput[]
    createMany?: pl_nlCreateManyGeneroInputEnvelope
    connect?: pl_nlWhereUniqueInput | pl_nlWhereUniqueInput[]
  }

  export type pl_nlUncheckedCreateNestedManyWithoutGeneroInput = {
    create?: XOR<pl_nlCreateWithoutGeneroInput, pl_nlUncheckedCreateWithoutGeneroInput> | pl_nlCreateWithoutGeneroInput[] | pl_nlUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: pl_nlCreateOrConnectWithoutGeneroInput | pl_nlCreateOrConnectWithoutGeneroInput[]
    createMany?: pl_nlCreateManyGeneroInputEnvelope
    connect?: pl_nlWhereUniqueInput | pl_nlWhereUniqueInput[]
  }

  export type categoriaUpdateOneWithoutGeneroNestedInput = {
    create?: XOR<categoriaCreateWithoutGeneroInput, categoriaUncheckedCreateWithoutGeneroInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutGeneroInput
    upsert?: categoriaUpsertWithoutGeneroInput
    disconnect?: categoriaWhereInput | boolean
    delete?: categoriaWhereInput | boolean
    connect?: categoriaWhereUniqueInput
    update?: XOR<XOR<categoriaUpdateToOneWithWhereWithoutGeneroInput, categoriaUpdateWithoutGeneroInput>, categoriaUncheckedUpdateWithoutGeneroInput>
  }

  export type pl_nlUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<pl_nlCreateWithoutGeneroInput, pl_nlUncheckedCreateWithoutGeneroInput> | pl_nlCreateWithoutGeneroInput[] | pl_nlUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: pl_nlCreateOrConnectWithoutGeneroInput | pl_nlCreateOrConnectWithoutGeneroInput[]
    upsert?: pl_nlUpsertWithWhereUniqueWithoutGeneroInput | pl_nlUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: pl_nlCreateManyGeneroInputEnvelope
    set?: pl_nlWhereUniqueInput | pl_nlWhereUniqueInput[]
    disconnect?: pl_nlWhereUniqueInput | pl_nlWhereUniqueInput[]
    delete?: pl_nlWhereUniqueInput | pl_nlWhereUniqueInput[]
    connect?: pl_nlWhereUniqueInput | pl_nlWhereUniqueInput[]
    update?: pl_nlUpdateWithWhereUniqueWithoutGeneroInput | pl_nlUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: pl_nlUpdateManyWithWhereWithoutGeneroInput | pl_nlUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: pl_nlScalarWhereInput | pl_nlScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type pl_nlUncheckedUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<pl_nlCreateWithoutGeneroInput, pl_nlUncheckedCreateWithoutGeneroInput> | pl_nlCreateWithoutGeneroInput[] | pl_nlUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: pl_nlCreateOrConnectWithoutGeneroInput | pl_nlCreateOrConnectWithoutGeneroInput[]
    upsert?: pl_nlUpsertWithWhereUniqueWithoutGeneroInput | pl_nlUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: pl_nlCreateManyGeneroInputEnvelope
    set?: pl_nlWhereUniqueInput | pl_nlWhereUniqueInput[]
    disconnect?: pl_nlWhereUniqueInput | pl_nlWhereUniqueInput[]
    delete?: pl_nlWhereUniqueInput | pl_nlWhereUniqueInput[]
    connect?: pl_nlWhereUniqueInput | pl_nlWhereUniqueInput[]
    update?: pl_nlUpdateWithWhereUniqueWithoutGeneroInput | pl_nlUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: pl_nlUpdateManyWithWhereWithoutGeneroInput | pl_nlUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: pl_nlScalarWhereInput | pl_nlScalarWhereInput[]
  }

  export type usuarioCreateNestedManyWithoutPersonaInput = {
    create?: XOR<usuarioCreateWithoutPersonaInput, usuarioUncheckedCreateWithoutPersonaInput> | usuarioCreateWithoutPersonaInput[] | usuarioUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutPersonaInput | usuarioCreateOrConnectWithoutPersonaInput[]
    createMany?: usuarioCreateManyPersonaInputEnvelope
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
  }

  export type usuarioUncheckedCreateNestedManyWithoutPersonaInput = {
    create?: XOR<usuarioCreateWithoutPersonaInput, usuarioUncheckedCreateWithoutPersonaInput> | usuarioCreateWithoutPersonaInput[] | usuarioUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutPersonaInput | usuarioCreateOrConnectWithoutPersonaInput[]
    createMany?: usuarioCreateManyPersonaInputEnvelope
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
  }

  export type usuarioUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<usuarioCreateWithoutPersonaInput, usuarioUncheckedCreateWithoutPersonaInput> | usuarioCreateWithoutPersonaInput[] | usuarioUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutPersonaInput | usuarioCreateOrConnectWithoutPersonaInput[]
    upsert?: usuarioUpsertWithWhereUniqueWithoutPersonaInput | usuarioUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: usuarioCreateManyPersonaInputEnvelope
    set?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    disconnect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    delete?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    update?: usuarioUpdateWithWhereUniqueWithoutPersonaInput | usuarioUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: usuarioUpdateManyWithWhereWithoutPersonaInput | usuarioUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
  }

  export type usuarioUncheckedUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<usuarioCreateWithoutPersonaInput, usuarioUncheckedCreateWithoutPersonaInput> | usuarioCreateWithoutPersonaInput[] | usuarioUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutPersonaInput | usuarioCreateOrConnectWithoutPersonaInput[]
    upsert?: usuarioUpsertWithWhereUniqueWithoutPersonaInput | usuarioUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: usuarioCreateManyPersonaInputEnvelope
    set?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    disconnect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    delete?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    update?: usuarioUpdateWithWhereUniqueWithoutPersonaInput | usuarioUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: usuarioUpdateManyWithWhereWithoutPersonaInput | usuarioUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
  }

  export type autorCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<autorCreateWithoutUsuarioInput, autorUncheckedCreateWithoutUsuarioInput> | autorCreateWithoutUsuarioInput[] | autorUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: autorCreateOrConnectWithoutUsuarioInput | autorCreateOrConnectWithoutUsuarioInput[]
    createMany?: autorCreateManyUsuarioInputEnvelope
    connect?: autorWhereUniqueInput | autorWhereUniqueInput[]
  }

  export type seguidoCreateNestedManyWithoutUsuario_seguido_id_user_seguidorTousuarioInput = {
    create?: XOR<seguidoCreateWithoutUsuario_seguido_id_user_seguidorTousuarioInput, seguidoUncheckedCreateWithoutUsuario_seguido_id_user_seguidorTousuarioInput> | seguidoCreateWithoutUsuario_seguido_id_user_seguidorTousuarioInput[] | seguidoUncheckedCreateWithoutUsuario_seguido_id_user_seguidorTousuarioInput[]
    connectOrCreate?: seguidoCreateOrConnectWithoutUsuario_seguido_id_user_seguidorTousuarioInput | seguidoCreateOrConnectWithoutUsuario_seguido_id_user_seguidorTousuarioInput[]
    createMany?: seguidoCreateManyUsuario_seguido_id_user_seguidorTousuarioInputEnvelope
    connect?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
  }

  export type seguidoCreateNestedManyWithoutUsuario_seguido_id_user_seguidoTousuarioInput = {
    create?: XOR<seguidoCreateWithoutUsuario_seguido_id_user_seguidoTousuarioInput, seguidoUncheckedCreateWithoutUsuario_seguido_id_user_seguidoTousuarioInput> | seguidoCreateWithoutUsuario_seguido_id_user_seguidoTousuarioInput[] | seguidoUncheckedCreateWithoutUsuario_seguido_id_user_seguidoTousuarioInput[]
    connectOrCreate?: seguidoCreateOrConnectWithoutUsuario_seguido_id_user_seguidoTousuarioInput | seguidoCreateOrConnectWithoutUsuario_seguido_id_user_seguidoTousuarioInput[]
    createMany?: seguidoCreateManyUsuario_seguido_id_user_seguidoTousuarioInputEnvelope
    connect?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
  }

  export type personaCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<personaCreateWithoutUsuarioInput, personaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: personaCreateOrConnectWithoutUsuarioInput
    connect?: personaWhereUniqueInput
  }

  export type autorUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<autorCreateWithoutUsuarioInput, autorUncheckedCreateWithoutUsuarioInput> | autorCreateWithoutUsuarioInput[] | autorUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: autorCreateOrConnectWithoutUsuarioInput | autorCreateOrConnectWithoutUsuarioInput[]
    createMany?: autorCreateManyUsuarioInputEnvelope
    connect?: autorWhereUniqueInput | autorWhereUniqueInput[]
  }

  export type seguidoUncheckedCreateNestedManyWithoutUsuario_seguido_id_user_seguidorTousuarioInput = {
    create?: XOR<seguidoCreateWithoutUsuario_seguido_id_user_seguidorTousuarioInput, seguidoUncheckedCreateWithoutUsuario_seguido_id_user_seguidorTousuarioInput> | seguidoCreateWithoutUsuario_seguido_id_user_seguidorTousuarioInput[] | seguidoUncheckedCreateWithoutUsuario_seguido_id_user_seguidorTousuarioInput[]
    connectOrCreate?: seguidoCreateOrConnectWithoutUsuario_seguido_id_user_seguidorTousuarioInput | seguidoCreateOrConnectWithoutUsuario_seguido_id_user_seguidorTousuarioInput[]
    createMany?: seguidoCreateManyUsuario_seguido_id_user_seguidorTousuarioInputEnvelope
    connect?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
  }

  export type seguidoUncheckedCreateNestedManyWithoutUsuario_seguido_id_user_seguidoTousuarioInput = {
    create?: XOR<seguidoCreateWithoutUsuario_seguido_id_user_seguidoTousuarioInput, seguidoUncheckedCreateWithoutUsuario_seguido_id_user_seguidoTousuarioInput> | seguidoCreateWithoutUsuario_seguido_id_user_seguidoTousuarioInput[] | seguidoUncheckedCreateWithoutUsuario_seguido_id_user_seguidoTousuarioInput[]
    connectOrCreate?: seguidoCreateOrConnectWithoutUsuario_seguido_id_user_seguidoTousuarioInput | seguidoCreateOrConnectWithoutUsuario_seguido_id_user_seguidoTousuarioInput[]
    createMany?: seguidoCreateManyUsuario_seguido_id_user_seguidoTousuarioInputEnvelope
    connect?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type autorUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<autorCreateWithoutUsuarioInput, autorUncheckedCreateWithoutUsuarioInput> | autorCreateWithoutUsuarioInput[] | autorUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: autorCreateOrConnectWithoutUsuarioInput | autorCreateOrConnectWithoutUsuarioInput[]
    upsert?: autorUpsertWithWhereUniqueWithoutUsuarioInput | autorUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: autorCreateManyUsuarioInputEnvelope
    set?: autorWhereUniqueInput | autorWhereUniqueInput[]
    disconnect?: autorWhereUniqueInput | autorWhereUniqueInput[]
    delete?: autorWhereUniqueInput | autorWhereUniqueInput[]
    connect?: autorWhereUniqueInput | autorWhereUniqueInput[]
    update?: autorUpdateWithWhereUniqueWithoutUsuarioInput | autorUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: autorUpdateManyWithWhereWithoutUsuarioInput | autorUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: autorScalarWhereInput | autorScalarWhereInput[]
  }

  export type seguidoUpdateManyWithoutUsuario_seguido_id_user_seguidorTousuarioNestedInput = {
    create?: XOR<seguidoCreateWithoutUsuario_seguido_id_user_seguidorTousuarioInput, seguidoUncheckedCreateWithoutUsuario_seguido_id_user_seguidorTousuarioInput> | seguidoCreateWithoutUsuario_seguido_id_user_seguidorTousuarioInput[] | seguidoUncheckedCreateWithoutUsuario_seguido_id_user_seguidorTousuarioInput[]
    connectOrCreate?: seguidoCreateOrConnectWithoutUsuario_seguido_id_user_seguidorTousuarioInput | seguidoCreateOrConnectWithoutUsuario_seguido_id_user_seguidorTousuarioInput[]
    upsert?: seguidoUpsertWithWhereUniqueWithoutUsuario_seguido_id_user_seguidorTousuarioInput | seguidoUpsertWithWhereUniqueWithoutUsuario_seguido_id_user_seguidorTousuarioInput[]
    createMany?: seguidoCreateManyUsuario_seguido_id_user_seguidorTousuarioInputEnvelope
    set?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    disconnect?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    delete?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    connect?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    update?: seguidoUpdateWithWhereUniqueWithoutUsuario_seguido_id_user_seguidorTousuarioInput | seguidoUpdateWithWhereUniqueWithoutUsuario_seguido_id_user_seguidorTousuarioInput[]
    updateMany?: seguidoUpdateManyWithWhereWithoutUsuario_seguido_id_user_seguidorTousuarioInput | seguidoUpdateManyWithWhereWithoutUsuario_seguido_id_user_seguidorTousuarioInput[]
    deleteMany?: seguidoScalarWhereInput | seguidoScalarWhereInput[]
  }

  export type seguidoUpdateManyWithoutUsuario_seguido_id_user_seguidoTousuarioNestedInput = {
    create?: XOR<seguidoCreateWithoutUsuario_seguido_id_user_seguidoTousuarioInput, seguidoUncheckedCreateWithoutUsuario_seguido_id_user_seguidoTousuarioInput> | seguidoCreateWithoutUsuario_seguido_id_user_seguidoTousuarioInput[] | seguidoUncheckedCreateWithoutUsuario_seguido_id_user_seguidoTousuarioInput[]
    connectOrCreate?: seguidoCreateOrConnectWithoutUsuario_seguido_id_user_seguidoTousuarioInput | seguidoCreateOrConnectWithoutUsuario_seguido_id_user_seguidoTousuarioInput[]
    upsert?: seguidoUpsertWithWhereUniqueWithoutUsuario_seguido_id_user_seguidoTousuarioInput | seguidoUpsertWithWhereUniqueWithoutUsuario_seguido_id_user_seguidoTousuarioInput[]
    createMany?: seguidoCreateManyUsuario_seguido_id_user_seguidoTousuarioInputEnvelope
    set?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    disconnect?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    delete?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    connect?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    update?: seguidoUpdateWithWhereUniqueWithoutUsuario_seguido_id_user_seguidoTousuarioInput | seguidoUpdateWithWhereUniqueWithoutUsuario_seguido_id_user_seguidoTousuarioInput[]
    updateMany?: seguidoUpdateManyWithWhereWithoutUsuario_seguido_id_user_seguidoTousuarioInput | seguidoUpdateManyWithWhereWithoutUsuario_seguido_id_user_seguidoTousuarioInput[]
    deleteMany?: seguidoScalarWhereInput | seguidoScalarWhereInput[]
  }

  export type personaUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<personaCreateWithoutUsuarioInput, personaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: personaCreateOrConnectWithoutUsuarioInput
    upsert?: personaUpsertWithoutUsuarioInput
    disconnect?: personaWhereInput | boolean
    delete?: personaWhereInput | boolean
    connect?: personaWhereUniqueInput
    update?: XOR<XOR<personaUpdateToOneWithWhereWithoutUsuarioInput, personaUpdateWithoutUsuarioInput>, personaUncheckedUpdateWithoutUsuarioInput>
  }

  export type autorUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<autorCreateWithoutUsuarioInput, autorUncheckedCreateWithoutUsuarioInput> | autorCreateWithoutUsuarioInput[] | autorUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: autorCreateOrConnectWithoutUsuarioInput | autorCreateOrConnectWithoutUsuarioInput[]
    upsert?: autorUpsertWithWhereUniqueWithoutUsuarioInput | autorUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: autorCreateManyUsuarioInputEnvelope
    set?: autorWhereUniqueInput | autorWhereUniqueInput[]
    disconnect?: autorWhereUniqueInput | autorWhereUniqueInput[]
    delete?: autorWhereUniqueInput | autorWhereUniqueInput[]
    connect?: autorWhereUniqueInput | autorWhereUniqueInput[]
    update?: autorUpdateWithWhereUniqueWithoutUsuarioInput | autorUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: autorUpdateManyWithWhereWithoutUsuarioInput | autorUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: autorScalarWhereInput | autorScalarWhereInput[]
  }

  export type seguidoUncheckedUpdateManyWithoutUsuario_seguido_id_user_seguidorTousuarioNestedInput = {
    create?: XOR<seguidoCreateWithoutUsuario_seguido_id_user_seguidorTousuarioInput, seguidoUncheckedCreateWithoutUsuario_seguido_id_user_seguidorTousuarioInput> | seguidoCreateWithoutUsuario_seguido_id_user_seguidorTousuarioInput[] | seguidoUncheckedCreateWithoutUsuario_seguido_id_user_seguidorTousuarioInput[]
    connectOrCreate?: seguidoCreateOrConnectWithoutUsuario_seguido_id_user_seguidorTousuarioInput | seguidoCreateOrConnectWithoutUsuario_seguido_id_user_seguidorTousuarioInput[]
    upsert?: seguidoUpsertWithWhereUniqueWithoutUsuario_seguido_id_user_seguidorTousuarioInput | seguidoUpsertWithWhereUniqueWithoutUsuario_seguido_id_user_seguidorTousuarioInput[]
    createMany?: seguidoCreateManyUsuario_seguido_id_user_seguidorTousuarioInputEnvelope
    set?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    disconnect?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    delete?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    connect?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    update?: seguidoUpdateWithWhereUniqueWithoutUsuario_seguido_id_user_seguidorTousuarioInput | seguidoUpdateWithWhereUniqueWithoutUsuario_seguido_id_user_seguidorTousuarioInput[]
    updateMany?: seguidoUpdateManyWithWhereWithoutUsuario_seguido_id_user_seguidorTousuarioInput | seguidoUpdateManyWithWhereWithoutUsuario_seguido_id_user_seguidorTousuarioInput[]
    deleteMany?: seguidoScalarWhereInput | seguidoScalarWhereInput[]
  }

  export type seguidoUncheckedUpdateManyWithoutUsuario_seguido_id_user_seguidoTousuarioNestedInput = {
    create?: XOR<seguidoCreateWithoutUsuario_seguido_id_user_seguidoTousuarioInput, seguidoUncheckedCreateWithoutUsuario_seguido_id_user_seguidoTousuarioInput> | seguidoCreateWithoutUsuario_seguido_id_user_seguidoTousuarioInput[] | seguidoUncheckedCreateWithoutUsuario_seguido_id_user_seguidoTousuarioInput[]
    connectOrCreate?: seguidoCreateOrConnectWithoutUsuario_seguido_id_user_seguidoTousuarioInput | seguidoCreateOrConnectWithoutUsuario_seguido_id_user_seguidoTousuarioInput[]
    upsert?: seguidoUpsertWithWhereUniqueWithoutUsuario_seguido_id_user_seguidoTousuarioInput | seguidoUpsertWithWhereUniqueWithoutUsuario_seguido_id_user_seguidoTousuarioInput[]
    createMany?: seguidoCreateManyUsuario_seguido_id_user_seguidoTousuarioInputEnvelope
    set?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    disconnect?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    delete?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    connect?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    update?: seguidoUpdateWithWhereUniqueWithoutUsuario_seguido_id_user_seguidoTousuarioInput | seguidoUpdateWithWhereUniqueWithoutUsuario_seguido_id_user_seguidoTousuarioInput[]
    updateMany?: seguidoUpdateManyWithWhereWithoutUsuario_seguido_id_user_seguidoTousuarioInput | seguidoUpdateManyWithWhereWithoutUsuario_seguido_id_user_seguidoTousuarioInput[]
    deleteMany?: seguidoScalarWhereInput | seguidoScalarWhereInput[]
  }

  export type usuarioCreateNestedOneWithoutAutorInput = {
    create?: XOR<usuarioCreateWithoutAutorInput, usuarioUncheckedCreateWithoutAutorInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutAutorInput
    connect?: usuarioWhereUniqueInput
  }

  export type paisCreateNestedOneWithoutAutorInput = {
    create?: XOR<paisCreateWithoutAutorInput, paisUncheckedCreateWithoutAutorInput>
    connectOrCreate?: paisCreateOrConnectWithoutAutorInput
    connect?: paisWhereUniqueInput
  }

  export type comentarioCreateNestedManyWithoutAutorInput = {
    create?: XOR<comentarioCreateWithoutAutorInput, comentarioUncheckedCreateWithoutAutorInput> | comentarioCreateWithoutAutorInput[] | comentarioUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutAutorInput | comentarioCreateOrConnectWithoutAutorInput[]
    createMany?: comentarioCreateManyAutorInputEnvelope
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
  }

  export type editorialCreateNestedManyWithoutAutorInput = {
    create?: XOR<editorialCreateWithoutAutorInput, editorialUncheckedCreateWithoutAutorInput> | editorialCreateWithoutAutorInput[] | editorialUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: editorialCreateOrConnectWithoutAutorInput | editorialCreateOrConnectWithoutAutorInput[]
    createMany?: editorialCreateManyAutorInputEnvelope
    connect?: editorialWhereUniqueInput | editorialWhereUniqueInput[]
  }

  export type reaccionCreateNestedManyWithoutAutorInput = {
    create?: XOR<reaccionCreateWithoutAutorInput, reaccionUncheckedCreateWithoutAutorInput> | reaccionCreateWithoutAutorInput[] | reaccionUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: reaccionCreateOrConnectWithoutAutorInput | reaccionCreateOrConnectWithoutAutorInput[]
    createMany?: reaccionCreateManyAutorInputEnvelope
    connect?: reaccionWhereUniqueInput | reaccionWhereUniqueInput[]
  }

  export type comentarioUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<comentarioCreateWithoutAutorInput, comentarioUncheckedCreateWithoutAutorInput> | comentarioCreateWithoutAutorInput[] | comentarioUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutAutorInput | comentarioCreateOrConnectWithoutAutorInput[]
    createMany?: comentarioCreateManyAutorInputEnvelope
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
  }

  export type editorialUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<editorialCreateWithoutAutorInput, editorialUncheckedCreateWithoutAutorInput> | editorialCreateWithoutAutorInput[] | editorialUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: editorialCreateOrConnectWithoutAutorInput | editorialCreateOrConnectWithoutAutorInput[]
    createMany?: editorialCreateManyAutorInputEnvelope
    connect?: editorialWhereUniqueInput | editorialWhereUniqueInput[]
  }

  export type reaccionUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<reaccionCreateWithoutAutorInput, reaccionUncheckedCreateWithoutAutorInput> | reaccionCreateWithoutAutorInput[] | reaccionUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: reaccionCreateOrConnectWithoutAutorInput | reaccionCreateOrConnectWithoutAutorInput[]
    createMany?: reaccionCreateManyAutorInputEnvelope
    connect?: reaccionWhereUniqueInput | reaccionWhereUniqueInput[]
  }

  export type usuarioUpdateOneWithoutAutorNestedInput = {
    create?: XOR<usuarioCreateWithoutAutorInput, usuarioUncheckedCreateWithoutAutorInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutAutorInput
    upsert?: usuarioUpsertWithoutAutorInput
    disconnect?: usuarioWhereInput | boolean
    delete?: usuarioWhereInput | boolean
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutAutorInput, usuarioUpdateWithoutAutorInput>, usuarioUncheckedUpdateWithoutAutorInput>
  }

  export type paisUpdateOneWithoutAutorNestedInput = {
    create?: XOR<paisCreateWithoutAutorInput, paisUncheckedCreateWithoutAutorInput>
    connectOrCreate?: paisCreateOrConnectWithoutAutorInput
    upsert?: paisUpsertWithoutAutorInput
    disconnect?: paisWhereInput | boolean
    delete?: paisWhereInput | boolean
    connect?: paisWhereUniqueInput
    update?: XOR<XOR<paisUpdateToOneWithWhereWithoutAutorInput, paisUpdateWithoutAutorInput>, paisUncheckedUpdateWithoutAutorInput>
  }

  export type comentarioUpdateManyWithoutAutorNestedInput = {
    create?: XOR<comentarioCreateWithoutAutorInput, comentarioUncheckedCreateWithoutAutorInput> | comentarioCreateWithoutAutorInput[] | comentarioUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutAutorInput | comentarioCreateOrConnectWithoutAutorInput[]
    upsert?: comentarioUpsertWithWhereUniqueWithoutAutorInput | comentarioUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: comentarioCreateManyAutorInputEnvelope
    set?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    disconnect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    delete?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    update?: comentarioUpdateWithWhereUniqueWithoutAutorInput | comentarioUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: comentarioUpdateManyWithWhereWithoutAutorInput | comentarioUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: comentarioScalarWhereInput | comentarioScalarWhereInput[]
  }

  export type editorialUpdateManyWithoutAutorNestedInput = {
    create?: XOR<editorialCreateWithoutAutorInput, editorialUncheckedCreateWithoutAutorInput> | editorialCreateWithoutAutorInput[] | editorialUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: editorialCreateOrConnectWithoutAutorInput | editorialCreateOrConnectWithoutAutorInput[]
    upsert?: editorialUpsertWithWhereUniqueWithoutAutorInput | editorialUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: editorialCreateManyAutorInputEnvelope
    set?: editorialWhereUniqueInput | editorialWhereUniqueInput[]
    disconnect?: editorialWhereUniqueInput | editorialWhereUniqueInput[]
    delete?: editorialWhereUniqueInput | editorialWhereUniqueInput[]
    connect?: editorialWhereUniqueInput | editorialWhereUniqueInput[]
    update?: editorialUpdateWithWhereUniqueWithoutAutorInput | editorialUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: editorialUpdateManyWithWhereWithoutAutorInput | editorialUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: editorialScalarWhereInput | editorialScalarWhereInput[]
  }

  export type reaccionUpdateManyWithoutAutorNestedInput = {
    create?: XOR<reaccionCreateWithoutAutorInput, reaccionUncheckedCreateWithoutAutorInput> | reaccionCreateWithoutAutorInput[] | reaccionUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: reaccionCreateOrConnectWithoutAutorInput | reaccionCreateOrConnectWithoutAutorInput[]
    upsert?: reaccionUpsertWithWhereUniqueWithoutAutorInput | reaccionUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: reaccionCreateManyAutorInputEnvelope
    set?: reaccionWhereUniqueInput | reaccionWhereUniqueInput[]
    disconnect?: reaccionWhereUniqueInput | reaccionWhereUniqueInput[]
    delete?: reaccionWhereUniqueInput | reaccionWhereUniqueInput[]
    connect?: reaccionWhereUniqueInput | reaccionWhereUniqueInput[]
    update?: reaccionUpdateWithWhereUniqueWithoutAutorInput | reaccionUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: reaccionUpdateManyWithWhereWithoutAutorInput | reaccionUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: reaccionScalarWhereInput | reaccionScalarWhereInput[]
  }

  export type comentarioUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<comentarioCreateWithoutAutorInput, comentarioUncheckedCreateWithoutAutorInput> | comentarioCreateWithoutAutorInput[] | comentarioUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutAutorInput | comentarioCreateOrConnectWithoutAutorInput[]
    upsert?: comentarioUpsertWithWhereUniqueWithoutAutorInput | comentarioUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: comentarioCreateManyAutorInputEnvelope
    set?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    disconnect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    delete?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    update?: comentarioUpdateWithWhereUniqueWithoutAutorInput | comentarioUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: comentarioUpdateManyWithWhereWithoutAutorInput | comentarioUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: comentarioScalarWhereInput | comentarioScalarWhereInput[]
  }

  export type editorialUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<editorialCreateWithoutAutorInput, editorialUncheckedCreateWithoutAutorInput> | editorialCreateWithoutAutorInput[] | editorialUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: editorialCreateOrConnectWithoutAutorInput | editorialCreateOrConnectWithoutAutorInput[]
    upsert?: editorialUpsertWithWhereUniqueWithoutAutorInput | editorialUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: editorialCreateManyAutorInputEnvelope
    set?: editorialWhereUniqueInput | editorialWhereUniqueInput[]
    disconnect?: editorialWhereUniqueInput | editorialWhereUniqueInput[]
    delete?: editorialWhereUniqueInput | editorialWhereUniqueInput[]
    connect?: editorialWhereUniqueInput | editorialWhereUniqueInput[]
    update?: editorialUpdateWithWhereUniqueWithoutAutorInput | editorialUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: editorialUpdateManyWithWhereWithoutAutorInput | editorialUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: editorialScalarWhereInput | editorialScalarWhereInput[]
  }

  export type reaccionUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<reaccionCreateWithoutAutorInput, reaccionUncheckedCreateWithoutAutorInput> | reaccionCreateWithoutAutorInput[] | reaccionUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: reaccionCreateOrConnectWithoutAutorInput | reaccionCreateOrConnectWithoutAutorInput[]
    upsert?: reaccionUpsertWithWhereUniqueWithoutAutorInput | reaccionUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: reaccionCreateManyAutorInputEnvelope
    set?: reaccionWhereUniqueInput | reaccionWhereUniqueInput[]
    disconnect?: reaccionWhereUniqueInput | reaccionWhereUniqueInput[]
    delete?: reaccionWhereUniqueInput | reaccionWhereUniqueInput[]
    connect?: reaccionWhereUniqueInput | reaccionWhereUniqueInput[]
    update?: reaccionUpdateWithWhereUniqueWithoutAutorInput | reaccionUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: reaccionUpdateManyWithWhereWithoutAutorInput | reaccionUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: reaccionScalarWhereInput | reaccionScalarWhereInput[]
  }

  export type autorCreateNestedManyWithoutPaisInput = {
    create?: XOR<autorCreateWithoutPaisInput, autorUncheckedCreateWithoutPaisInput> | autorCreateWithoutPaisInput[] | autorUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: autorCreateOrConnectWithoutPaisInput | autorCreateOrConnectWithoutPaisInput[]
    createMany?: autorCreateManyPaisInputEnvelope
    connect?: autorWhereUniqueInput | autorWhereUniqueInput[]
  }

  export type autorUncheckedCreateNestedManyWithoutPaisInput = {
    create?: XOR<autorCreateWithoutPaisInput, autorUncheckedCreateWithoutPaisInput> | autorCreateWithoutPaisInput[] | autorUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: autorCreateOrConnectWithoutPaisInput | autorCreateOrConnectWithoutPaisInput[]
    createMany?: autorCreateManyPaisInputEnvelope
    connect?: autorWhereUniqueInput | autorWhereUniqueInput[]
  }

  export type autorUpdateManyWithoutPaisNestedInput = {
    create?: XOR<autorCreateWithoutPaisInput, autorUncheckedCreateWithoutPaisInput> | autorCreateWithoutPaisInput[] | autorUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: autorCreateOrConnectWithoutPaisInput | autorCreateOrConnectWithoutPaisInput[]
    upsert?: autorUpsertWithWhereUniqueWithoutPaisInput | autorUpsertWithWhereUniqueWithoutPaisInput[]
    createMany?: autorCreateManyPaisInputEnvelope
    set?: autorWhereUniqueInput | autorWhereUniqueInput[]
    disconnect?: autorWhereUniqueInput | autorWhereUniqueInput[]
    delete?: autorWhereUniqueInput | autorWhereUniqueInput[]
    connect?: autorWhereUniqueInput | autorWhereUniqueInput[]
    update?: autorUpdateWithWhereUniqueWithoutPaisInput | autorUpdateWithWhereUniqueWithoutPaisInput[]
    updateMany?: autorUpdateManyWithWhereWithoutPaisInput | autorUpdateManyWithWhereWithoutPaisInput[]
    deleteMany?: autorScalarWhereInput | autorScalarWhereInput[]
  }

  export type autorUncheckedUpdateManyWithoutPaisNestedInput = {
    create?: XOR<autorCreateWithoutPaisInput, autorUncheckedCreateWithoutPaisInput> | autorCreateWithoutPaisInput[] | autorUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: autorCreateOrConnectWithoutPaisInput | autorCreateOrConnectWithoutPaisInput[]
    upsert?: autorUpsertWithWhereUniqueWithoutPaisInput | autorUpsertWithWhereUniqueWithoutPaisInput[]
    createMany?: autorCreateManyPaisInputEnvelope
    set?: autorWhereUniqueInput | autorWhereUniqueInput[]
    disconnect?: autorWhereUniqueInput | autorWhereUniqueInput[]
    delete?: autorWhereUniqueInput | autorWhereUniqueInput[]
    connect?: autorWhereUniqueInput | autorWhereUniqueInput[]
    update?: autorUpdateWithWhereUniqueWithoutPaisInput | autorUpdateWithWhereUniqueWithoutPaisInput[]
    updateMany?: autorUpdateManyWithWhereWithoutPaisInput | autorUpdateManyWithWhereWithoutPaisInput[]
    deleteMany?: autorScalarWhereInput | autorScalarWhereInput[]
  }

  export type usuarioCreateNestedOneWithoutSeguido_seguido_id_user_seguidorTousuarioInput = {
    create?: XOR<usuarioCreateWithoutSeguido_seguido_id_user_seguidorTousuarioInput, usuarioUncheckedCreateWithoutSeguido_seguido_id_user_seguidorTousuarioInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutSeguido_seguido_id_user_seguidorTousuarioInput
    connect?: usuarioWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutSeguido_seguido_id_user_seguidoTousuarioInput = {
    create?: XOR<usuarioCreateWithoutSeguido_seguido_id_user_seguidoTousuarioInput, usuarioUncheckedCreateWithoutSeguido_seguido_id_user_seguidoTousuarioInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutSeguido_seguido_id_user_seguidoTousuarioInput
    connect?: usuarioWhereUniqueInput
  }

  export type tipo_seguimientoCreateNestedOneWithoutSeguidoInput = {
    create?: XOR<tipo_seguimientoCreateWithoutSeguidoInput, tipo_seguimientoUncheckedCreateWithoutSeguidoInput>
    connectOrCreate?: tipo_seguimientoCreateOrConnectWithoutSeguidoInput
    connect?: tipo_seguimientoWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usuarioUpdateOneWithoutSeguido_seguido_id_user_seguidorTousuarioNestedInput = {
    create?: XOR<usuarioCreateWithoutSeguido_seguido_id_user_seguidorTousuarioInput, usuarioUncheckedCreateWithoutSeguido_seguido_id_user_seguidorTousuarioInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutSeguido_seguido_id_user_seguidorTousuarioInput
    upsert?: usuarioUpsertWithoutSeguido_seguido_id_user_seguidorTousuarioInput
    disconnect?: usuarioWhereInput | boolean
    delete?: usuarioWhereInput | boolean
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutSeguido_seguido_id_user_seguidorTousuarioInput, usuarioUpdateWithoutSeguido_seguido_id_user_seguidorTousuarioInput>, usuarioUncheckedUpdateWithoutSeguido_seguido_id_user_seguidorTousuarioInput>
  }

  export type usuarioUpdateOneWithoutSeguido_seguido_id_user_seguidoTousuarioNestedInput = {
    create?: XOR<usuarioCreateWithoutSeguido_seguido_id_user_seguidoTousuarioInput, usuarioUncheckedCreateWithoutSeguido_seguido_id_user_seguidoTousuarioInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutSeguido_seguido_id_user_seguidoTousuarioInput
    upsert?: usuarioUpsertWithoutSeguido_seguido_id_user_seguidoTousuarioInput
    disconnect?: usuarioWhereInput | boolean
    delete?: usuarioWhereInput | boolean
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutSeguido_seguido_id_user_seguidoTousuarioInput, usuarioUpdateWithoutSeguido_seguido_id_user_seguidoTousuarioInput>, usuarioUncheckedUpdateWithoutSeguido_seguido_id_user_seguidoTousuarioInput>
  }

  export type tipo_seguimientoUpdateOneWithoutSeguidoNestedInput = {
    create?: XOR<tipo_seguimientoCreateWithoutSeguidoInput, tipo_seguimientoUncheckedCreateWithoutSeguidoInput>
    connectOrCreate?: tipo_seguimientoCreateOrConnectWithoutSeguidoInput
    upsert?: tipo_seguimientoUpsertWithoutSeguidoInput
    disconnect?: tipo_seguimientoWhereInput | boolean
    delete?: tipo_seguimientoWhereInput | boolean
    connect?: tipo_seguimientoWhereUniqueInput
    update?: XOR<XOR<tipo_seguimientoUpdateToOneWithWhereWithoutSeguidoInput, tipo_seguimientoUpdateWithoutSeguidoInput>, tipo_seguimientoUncheckedUpdateWithoutSeguidoInput>
  }

  export type seguidoCreateNestedManyWithoutTipo_seguimientoInput = {
    create?: XOR<seguidoCreateWithoutTipo_seguimientoInput, seguidoUncheckedCreateWithoutTipo_seguimientoInput> | seguidoCreateWithoutTipo_seguimientoInput[] | seguidoUncheckedCreateWithoutTipo_seguimientoInput[]
    connectOrCreate?: seguidoCreateOrConnectWithoutTipo_seguimientoInput | seguidoCreateOrConnectWithoutTipo_seguimientoInput[]
    createMany?: seguidoCreateManyTipo_seguimientoInputEnvelope
    connect?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
  }

  export type seguidoUncheckedCreateNestedManyWithoutTipo_seguimientoInput = {
    create?: XOR<seguidoCreateWithoutTipo_seguimientoInput, seguidoUncheckedCreateWithoutTipo_seguimientoInput> | seguidoCreateWithoutTipo_seguimientoInput[] | seguidoUncheckedCreateWithoutTipo_seguimientoInput[]
    connectOrCreate?: seguidoCreateOrConnectWithoutTipo_seguimientoInput | seguidoCreateOrConnectWithoutTipo_seguimientoInput[]
    createMany?: seguidoCreateManyTipo_seguimientoInputEnvelope
    connect?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
  }

  export type seguidoUpdateManyWithoutTipo_seguimientoNestedInput = {
    create?: XOR<seguidoCreateWithoutTipo_seguimientoInput, seguidoUncheckedCreateWithoutTipo_seguimientoInput> | seguidoCreateWithoutTipo_seguimientoInput[] | seguidoUncheckedCreateWithoutTipo_seguimientoInput[]
    connectOrCreate?: seguidoCreateOrConnectWithoutTipo_seguimientoInput | seguidoCreateOrConnectWithoutTipo_seguimientoInput[]
    upsert?: seguidoUpsertWithWhereUniqueWithoutTipo_seguimientoInput | seguidoUpsertWithWhereUniqueWithoutTipo_seguimientoInput[]
    createMany?: seguidoCreateManyTipo_seguimientoInputEnvelope
    set?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    disconnect?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    delete?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    connect?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    update?: seguidoUpdateWithWhereUniqueWithoutTipo_seguimientoInput | seguidoUpdateWithWhereUniqueWithoutTipo_seguimientoInput[]
    updateMany?: seguidoUpdateManyWithWhereWithoutTipo_seguimientoInput | seguidoUpdateManyWithWhereWithoutTipo_seguimientoInput[]
    deleteMany?: seguidoScalarWhereInput | seguidoScalarWhereInput[]
  }

  export type seguidoUncheckedUpdateManyWithoutTipo_seguimientoNestedInput = {
    create?: XOR<seguidoCreateWithoutTipo_seguimientoInput, seguidoUncheckedCreateWithoutTipo_seguimientoInput> | seguidoCreateWithoutTipo_seguimientoInput[] | seguidoUncheckedCreateWithoutTipo_seguimientoInput[]
    connectOrCreate?: seguidoCreateOrConnectWithoutTipo_seguimientoInput | seguidoCreateOrConnectWithoutTipo_seguimientoInput[]
    upsert?: seguidoUpsertWithWhereUniqueWithoutTipo_seguimientoInput | seguidoUpsertWithWhereUniqueWithoutTipo_seguimientoInput[]
    createMany?: seguidoCreateManyTipo_seguimientoInputEnvelope
    set?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    disconnect?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    delete?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    connect?: seguidoWhereUniqueInput | seguidoWhereUniqueInput[]
    update?: seguidoUpdateWithWhereUniqueWithoutTipo_seguimientoInput | seguidoUpdateWithWhereUniqueWithoutTipo_seguimientoInput[]
    updateMany?: seguidoUpdateManyWithWhereWithoutTipo_seguimientoInput | seguidoUpdateManyWithWhereWithoutTipo_seguimientoInput[]
    deleteMany?: seguidoScalarWhereInput | seguidoScalarWhereInput[]
  }

  export type autorCreateNestedOneWithoutReaccionInput = {
    create?: XOR<autorCreateWithoutReaccionInput, autorUncheckedCreateWithoutReaccionInput>
    connectOrCreate?: autorCreateOrConnectWithoutReaccionInput
    connect?: autorWhereUniqueInput
  }

  export type autorUpdateOneWithoutReaccionNestedInput = {
    create?: XOR<autorCreateWithoutReaccionInput, autorUncheckedCreateWithoutReaccionInput>
    connectOrCreate?: autorCreateOrConnectWithoutReaccionInput
    upsert?: autorUpsertWithoutReaccionInput
    disconnect?: autorWhereInput | boolean
    delete?: autorWhereInput | boolean
    connect?: autorWhereUniqueInput
    update?: XOR<XOR<autorUpdateToOneWithWhereWithoutReaccionInput, autorUpdateWithoutReaccionInput>, autorUncheckedUpdateWithoutReaccionInput>
  }

  export type pl_nlCreateNestedOneWithoutCap_pl_lnInput = {
    create?: XOR<pl_nlCreateWithoutCap_pl_lnInput, pl_nlUncheckedCreateWithoutCap_pl_lnInput>
    connectOrCreate?: pl_nlCreateOrConnectWithoutCap_pl_lnInput
    connect?: pl_nlWhereUniqueInput
  }

  export type editorialCreateNestedOneWithoutCap_pl_lnInput = {
    create?: XOR<editorialCreateWithoutCap_pl_lnInput, editorialUncheckedCreateWithoutCap_pl_lnInput>
    connectOrCreate?: editorialCreateOrConnectWithoutCap_pl_lnInput
    connect?: editorialWhereUniqueInput
  }

  export type pl_nlUpdateOneWithoutCap_pl_lnNestedInput = {
    create?: XOR<pl_nlCreateWithoutCap_pl_lnInput, pl_nlUncheckedCreateWithoutCap_pl_lnInput>
    connectOrCreate?: pl_nlCreateOrConnectWithoutCap_pl_lnInput
    upsert?: pl_nlUpsertWithoutCap_pl_lnInput
    disconnect?: pl_nlWhereInput | boolean
    delete?: pl_nlWhereInput | boolean
    connect?: pl_nlWhereUniqueInput
    update?: XOR<XOR<pl_nlUpdateToOneWithWhereWithoutCap_pl_lnInput, pl_nlUpdateWithoutCap_pl_lnInput>, pl_nlUncheckedUpdateWithoutCap_pl_lnInput>
  }

  export type editorialUpdateOneWithoutCap_pl_lnNestedInput = {
    create?: XOR<editorialCreateWithoutCap_pl_lnInput, editorialUncheckedCreateWithoutCap_pl_lnInput>
    connectOrCreate?: editorialCreateOrConnectWithoutCap_pl_lnInput
    upsert?: editorialUpsertWithoutCap_pl_lnInput
    disconnect?: editorialWhereInput | boolean
    delete?: editorialWhereInput | boolean
    connect?: editorialWhereUniqueInput
    update?: XOR<XOR<editorialUpdateToOneWithWhereWithoutCap_pl_lnInput, editorialUpdateWithoutCap_pl_lnInput>, editorialUncheckedUpdateWithoutCap_pl_lnInput>
  }

  export type cap_pl_lnCreateNestedManyWithoutEditorialInput = {
    create?: XOR<cap_pl_lnCreateWithoutEditorialInput, cap_pl_lnUncheckedCreateWithoutEditorialInput> | cap_pl_lnCreateWithoutEditorialInput[] | cap_pl_lnUncheckedCreateWithoutEditorialInput[]
    connectOrCreate?: cap_pl_lnCreateOrConnectWithoutEditorialInput | cap_pl_lnCreateOrConnectWithoutEditorialInput[]
    createMany?: cap_pl_lnCreateManyEditorialInputEnvelope
    connect?: cap_pl_lnWhereUniqueInput | cap_pl_lnWhereUniqueInput[]
  }

  export type comentarioCreateNestedManyWithoutEditorialInput = {
    create?: XOR<comentarioCreateWithoutEditorialInput, comentarioUncheckedCreateWithoutEditorialInput> | comentarioCreateWithoutEditorialInput[] | comentarioUncheckedCreateWithoutEditorialInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutEditorialInput | comentarioCreateOrConnectWithoutEditorialInput[]
    createMany?: comentarioCreateManyEditorialInputEnvelope
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
  }

  export type autorCreateNestedOneWithoutEditorialInput = {
    create?: XOR<autorCreateWithoutEditorialInput, autorUncheckedCreateWithoutEditorialInput>
    connectOrCreate?: autorCreateOrConnectWithoutEditorialInput
    connect?: autorWhereUniqueInput
  }

  export type pl_libreCreateNestedManyWithoutEditorialInput = {
    create?: XOR<pl_libreCreateWithoutEditorialInput, pl_libreUncheckedCreateWithoutEditorialInput> | pl_libreCreateWithoutEditorialInput[] | pl_libreUncheckedCreateWithoutEditorialInput[]
    connectOrCreate?: pl_libreCreateOrConnectWithoutEditorialInput | pl_libreCreateOrConnectWithoutEditorialInput[]
    createMany?: pl_libreCreateManyEditorialInputEnvelope
    connect?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
  }

  export type cap_pl_lnUncheckedCreateNestedManyWithoutEditorialInput = {
    create?: XOR<cap_pl_lnCreateWithoutEditorialInput, cap_pl_lnUncheckedCreateWithoutEditorialInput> | cap_pl_lnCreateWithoutEditorialInput[] | cap_pl_lnUncheckedCreateWithoutEditorialInput[]
    connectOrCreate?: cap_pl_lnCreateOrConnectWithoutEditorialInput | cap_pl_lnCreateOrConnectWithoutEditorialInput[]
    createMany?: cap_pl_lnCreateManyEditorialInputEnvelope
    connect?: cap_pl_lnWhereUniqueInput | cap_pl_lnWhereUniqueInput[]
  }

  export type comentarioUncheckedCreateNestedManyWithoutEditorialInput = {
    create?: XOR<comentarioCreateWithoutEditorialInput, comentarioUncheckedCreateWithoutEditorialInput> | comentarioCreateWithoutEditorialInput[] | comentarioUncheckedCreateWithoutEditorialInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutEditorialInput | comentarioCreateOrConnectWithoutEditorialInput[]
    createMany?: comentarioCreateManyEditorialInputEnvelope
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
  }

  export type pl_libreUncheckedCreateNestedManyWithoutEditorialInput = {
    create?: XOR<pl_libreCreateWithoutEditorialInput, pl_libreUncheckedCreateWithoutEditorialInput> | pl_libreCreateWithoutEditorialInput[] | pl_libreUncheckedCreateWithoutEditorialInput[]
    connectOrCreate?: pl_libreCreateOrConnectWithoutEditorialInput | pl_libreCreateOrConnectWithoutEditorialInput[]
    createMany?: pl_libreCreateManyEditorialInputEnvelope
    connect?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
  }

  export type cap_pl_lnUpdateManyWithoutEditorialNestedInput = {
    create?: XOR<cap_pl_lnCreateWithoutEditorialInput, cap_pl_lnUncheckedCreateWithoutEditorialInput> | cap_pl_lnCreateWithoutEditorialInput[] | cap_pl_lnUncheckedCreateWithoutEditorialInput[]
    connectOrCreate?: cap_pl_lnCreateOrConnectWithoutEditorialInput | cap_pl_lnCreateOrConnectWithoutEditorialInput[]
    upsert?: cap_pl_lnUpsertWithWhereUniqueWithoutEditorialInput | cap_pl_lnUpsertWithWhereUniqueWithoutEditorialInput[]
    createMany?: cap_pl_lnCreateManyEditorialInputEnvelope
    set?: cap_pl_lnWhereUniqueInput | cap_pl_lnWhereUniqueInput[]
    disconnect?: cap_pl_lnWhereUniqueInput | cap_pl_lnWhereUniqueInput[]
    delete?: cap_pl_lnWhereUniqueInput | cap_pl_lnWhereUniqueInput[]
    connect?: cap_pl_lnWhereUniqueInput | cap_pl_lnWhereUniqueInput[]
    update?: cap_pl_lnUpdateWithWhereUniqueWithoutEditorialInput | cap_pl_lnUpdateWithWhereUniqueWithoutEditorialInput[]
    updateMany?: cap_pl_lnUpdateManyWithWhereWithoutEditorialInput | cap_pl_lnUpdateManyWithWhereWithoutEditorialInput[]
    deleteMany?: cap_pl_lnScalarWhereInput | cap_pl_lnScalarWhereInput[]
  }

  export type comentarioUpdateManyWithoutEditorialNestedInput = {
    create?: XOR<comentarioCreateWithoutEditorialInput, comentarioUncheckedCreateWithoutEditorialInput> | comentarioCreateWithoutEditorialInput[] | comentarioUncheckedCreateWithoutEditorialInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutEditorialInput | comentarioCreateOrConnectWithoutEditorialInput[]
    upsert?: comentarioUpsertWithWhereUniqueWithoutEditorialInput | comentarioUpsertWithWhereUniqueWithoutEditorialInput[]
    createMany?: comentarioCreateManyEditorialInputEnvelope
    set?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    disconnect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    delete?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    update?: comentarioUpdateWithWhereUniqueWithoutEditorialInput | comentarioUpdateWithWhereUniqueWithoutEditorialInput[]
    updateMany?: comentarioUpdateManyWithWhereWithoutEditorialInput | comentarioUpdateManyWithWhereWithoutEditorialInput[]
    deleteMany?: comentarioScalarWhereInput | comentarioScalarWhereInput[]
  }

  export type autorUpdateOneWithoutEditorialNestedInput = {
    create?: XOR<autorCreateWithoutEditorialInput, autorUncheckedCreateWithoutEditorialInput>
    connectOrCreate?: autorCreateOrConnectWithoutEditorialInput
    upsert?: autorUpsertWithoutEditorialInput
    disconnect?: autorWhereInput | boolean
    delete?: autorWhereInput | boolean
    connect?: autorWhereUniqueInput
    update?: XOR<XOR<autorUpdateToOneWithWhereWithoutEditorialInput, autorUpdateWithoutEditorialInput>, autorUncheckedUpdateWithoutEditorialInput>
  }

  export type pl_libreUpdateManyWithoutEditorialNestedInput = {
    create?: XOR<pl_libreCreateWithoutEditorialInput, pl_libreUncheckedCreateWithoutEditorialInput> | pl_libreCreateWithoutEditorialInput[] | pl_libreUncheckedCreateWithoutEditorialInput[]
    connectOrCreate?: pl_libreCreateOrConnectWithoutEditorialInput | pl_libreCreateOrConnectWithoutEditorialInput[]
    upsert?: pl_libreUpsertWithWhereUniqueWithoutEditorialInput | pl_libreUpsertWithWhereUniqueWithoutEditorialInput[]
    createMany?: pl_libreCreateManyEditorialInputEnvelope
    set?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    disconnect?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    delete?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    connect?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    update?: pl_libreUpdateWithWhereUniqueWithoutEditorialInput | pl_libreUpdateWithWhereUniqueWithoutEditorialInput[]
    updateMany?: pl_libreUpdateManyWithWhereWithoutEditorialInput | pl_libreUpdateManyWithWhereWithoutEditorialInput[]
    deleteMany?: pl_libreScalarWhereInput | pl_libreScalarWhereInput[]
  }

  export type cap_pl_lnUncheckedUpdateManyWithoutEditorialNestedInput = {
    create?: XOR<cap_pl_lnCreateWithoutEditorialInput, cap_pl_lnUncheckedCreateWithoutEditorialInput> | cap_pl_lnCreateWithoutEditorialInput[] | cap_pl_lnUncheckedCreateWithoutEditorialInput[]
    connectOrCreate?: cap_pl_lnCreateOrConnectWithoutEditorialInput | cap_pl_lnCreateOrConnectWithoutEditorialInput[]
    upsert?: cap_pl_lnUpsertWithWhereUniqueWithoutEditorialInput | cap_pl_lnUpsertWithWhereUniqueWithoutEditorialInput[]
    createMany?: cap_pl_lnCreateManyEditorialInputEnvelope
    set?: cap_pl_lnWhereUniqueInput | cap_pl_lnWhereUniqueInput[]
    disconnect?: cap_pl_lnWhereUniqueInput | cap_pl_lnWhereUniqueInput[]
    delete?: cap_pl_lnWhereUniqueInput | cap_pl_lnWhereUniqueInput[]
    connect?: cap_pl_lnWhereUniqueInput | cap_pl_lnWhereUniqueInput[]
    update?: cap_pl_lnUpdateWithWhereUniqueWithoutEditorialInput | cap_pl_lnUpdateWithWhereUniqueWithoutEditorialInput[]
    updateMany?: cap_pl_lnUpdateManyWithWhereWithoutEditorialInput | cap_pl_lnUpdateManyWithWhereWithoutEditorialInput[]
    deleteMany?: cap_pl_lnScalarWhereInput | cap_pl_lnScalarWhereInput[]
  }

  export type comentarioUncheckedUpdateManyWithoutEditorialNestedInput = {
    create?: XOR<comentarioCreateWithoutEditorialInput, comentarioUncheckedCreateWithoutEditorialInput> | comentarioCreateWithoutEditorialInput[] | comentarioUncheckedCreateWithoutEditorialInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutEditorialInput | comentarioCreateOrConnectWithoutEditorialInput[]
    upsert?: comentarioUpsertWithWhereUniqueWithoutEditorialInput | comentarioUpsertWithWhereUniqueWithoutEditorialInput[]
    createMany?: comentarioCreateManyEditorialInputEnvelope
    set?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    disconnect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    delete?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    update?: comentarioUpdateWithWhereUniqueWithoutEditorialInput | comentarioUpdateWithWhereUniqueWithoutEditorialInput[]
    updateMany?: comentarioUpdateManyWithWhereWithoutEditorialInput | comentarioUpdateManyWithWhereWithoutEditorialInput[]
    deleteMany?: comentarioScalarWhereInput | comentarioScalarWhereInput[]
  }

  export type pl_libreUncheckedUpdateManyWithoutEditorialNestedInput = {
    create?: XOR<pl_libreCreateWithoutEditorialInput, pl_libreUncheckedCreateWithoutEditorialInput> | pl_libreCreateWithoutEditorialInput[] | pl_libreUncheckedCreateWithoutEditorialInput[]
    connectOrCreate?: pl_libreCreateOrConnectWithoutEditorialInput | pl_libreCreateOrConnectWithoutEditorialInput[]
    upsert?: pl_libreUpsertWithWhereUniqueWithoutEditorialInput | pl_libreUpsertWithWhereUniqueWithoutEditorialInput[]
    createMany?: pl_libreCreateManyEditorialInputEnvelope
    set?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    disconnect?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    delete?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    connect?: pl_libreWhereUniqueInput | pl_libreWhereUniqueInput[]
    update?: pl_libreUpdateWithWhereUniqueWithoutEditorialInput | pl_libreUpdateWithWhereUniqueWithoutEditorialInput[]
    updateMany?: pl_libreUpdateManyWithWhereWithoutEditorialInput | pl_libreUpdateManyWithWhereWithoutEditorialInput[]
    deleteMany?: pl_libreScalarWhereInput | pl_libreScalarWhereInput[]
  }

  export type categoriaCreateNestedOneWithoutPl_libreInput = {
    create?: XOR<categoriaCreateWithoutPl_libreInput, categoriaUncheckedCreateWithoutPl_libreInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutPl_libreInput
    connect?: categoriaWhereUniqueInput
  }

  export type editorialCreateNestedOneWithoutPl_libreInput = {
    create?: XOR<editorialCreateWithoutPl_libreInput, editorialUncheckedCreateWithoutPl_libreInput>
    connectOrCreate?: editorialCreateOrConnectWithoutPl_libreInput
    connect?: editorialWhereUniqueInput
  }

  export type etiquetaCreateNestedOneWithoutPl_libreInput = {
    create?: XOR<etiquetaCreateWithoutPl_libreInput, etiquetaUncheckedCreateWithoutPl_libreInput>
    connectOrCreate?: etiquetaCreateOrConnectWithoutPl_libreInput
    connect?: etiquetaWhereUniqueInput
  }

  export type categoriaUpdateOneWithoutPl_libreNestedInput = {
    create?: XOR<categoriaCreateWithoutPl_libreInput, categoriaUncheckedCreateWithoutPl_libreInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutPl_libreInput
    upsert?: categoriaUpsertWithoutPl_libreInput
    disconnect?: categoriaWhereInput | boolean
    delete?: categoriaWhereInput | boolean
    connect?: categoriaWhereUniqueInput
    update?: XOR<XOR<categoriaUpdateToOneWithWhereWithoutPl_libreInput, categoriaUpdateWithoutPl_libreInput>, categoriaUncheckedUpdateWithoutPl_libreInput>
  }

  export type editorialUpdateOneWithoutPl_libreNestedInput = {
    create?: XOR<editorialCreateWithoutPl_libreInput, editorialUncheckedCreateWithoutPl_libreInput>
    connectOrCreate?: editorialCreateOrConnectWithoutPl_libreInput
    upsert?: editorialUpsertWithoutPl_libreInput
    disconnect?: editorialWhereInput | boolean
    delete?: editorialWhereInput | boolean
    connect?: editorialWhereUniqueInput
    update?: XOR<XOR<editorialUpdateToOneWithWhereWithoutPl_libreInput, editorialUpdateWithoutPl_libreInput>, editorialUncheckedUpdateWithoutPl_libreInput>
  }

  export type etiquetaUpdateOneWithoutPl_libreNestedInput = {
    create?: XOR<etiquetaCreateWithoutPl_libreInput, etiquetaUncheckedCreateWithoutPl_libreInput>
    connectOrCreate?: etiquetaCreateOrConnectWithoutPl_libreInput
    upsert?: etiquetaUpsertWithoutPl_libreInput
    disconnect?: etiquetaWhereInput | boolean
    delete?: etiquetaWhereInput | boolean
    connect?: etiquetaWhereUniqueInput
    update?: XOR<XOR<etiquetaUpdateToOneWithWhereWithoutPl_libreInput, etiquetaUpdateWithoutPl_libreInput>, etiquetaUncheckedUpdateWithoutPl_libreInput>
  }

  export type cap_pl_lnCreateNestedManyWithoutPl_nlInput = {
    create?: XOR<cap_pl_lnCreateWithoutPl_nlInput, cap_pl_lnUncheckedCreateWithoutPl_nlInput> | cap_pl_lnCreateWithoutPl_nlInput[] | cap_pl_lnUncheckedCreateWithoutPl_nlInput[]
    connectOrCreate?: cap_pl_lnCreateOrConnectWithoutPl_nlInput | cap_pl_lnCreateOrConnectWithoutPl_nlInput[]
    createMany?: cap_pl_lnCreateManyPl_nlInputEnvelope
    connect?: cap_pl_lnWhereUniqueInput | cap_pl_lnWhereUniqueInput[]
  }

  export type generoCreateNestedOneWithoutPl_nlInput = {
    create?: XOR<generoCreateWithoutPl_nlInput, generoUncheckedCreateWithoutPl_nlInput>
    connectOrCreate?: generoCreateOrConnectWithoutPl_nlInput
    connect?: generoWhereUniqueInput
  }

  export type categoriaCreateNestedOneWithoutPl_nlInput = {
    create?: XOR<categoriaCreateWithoutPl_nlInput, categoriaUncheckedCreateWithoutPl_nlInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutPl_nlInput
    connect?: categoriaWhereUniqueInput
  }

  export type cap_pl_lnUncheckedCreateNestedManyWithoutPl_nlInput = {
    create?: XOR<cap_pl_lnCreateWithoutPl_nlInput, cap_pl_lnUncheckedCreateWithoutPl_nlInput> | cap_pl_lnCreateWithoutPl_nlInput[] | cap_pl_lnUncheckedCreateWithoutPl_nlInput[]
    connectOrCreate?: cap_pl_lnCreateOrConnectWithoutPl_nlInput | cap_pl_lnCreateOrConnectWithoutPl_nlInput[]
    createMany?: cap_pl_lnCreateManyPl_nlInputEnvelope
    connect?: cap_pl_lnWhereUniqueInput | cap_pl_lnWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type cap_pl_lnUpdateManyWithoutPl_nlNestedInput = {
    create?: XOR<cap_pl_lnCreateWithoutPl_nlInput, cap_pl_lnUncheckedCreateWithoutPl_nlInput> | cap_pl_lnCreateWithoutPl_nlInput[] | cap_pl_lnUncheckedCreateWithoutPl_nlInput[]
    connectOrCreate?: cap_pl_lnCreateOrConnectWithoutPl_nlInput | cap_pl_lnCreateOrConnectWithoutPl_nlInput[]
    upsert?: cap_pl_lnUpsertWithWhereUniqueWithoutPl_nlInput | cap_pl_lnUpsertWithWhereUniqueWithoutPl_nlInput[]
    createMany?: cap_pl_lnCreateManyPl_nlInputEnvelope
    set?: cap_pl_lnWhereUniqueInput | cap_pl_lnWhereUniqueInput[]
    disconnect?: cap_pl_lnWhereUniqueInput | cap_pl_lnWhereUniqueInput[]
    delete?: cap_pl_lnWhereUniqueInput | cap_pl_lnWhereUniqueInput[]
    connect?: cap_pl_lnWhereUniqueInput | cap_pl_lnWhereUniqueInput[]
    update?: cap_pl_lnUpdateWithWhereUniqueWithoutPl_nlInput | cap_pl_lnUpdateWithWhereUniqueWithoutPl_nlInput[]
    updateMany?: cap_pl_lnUpdateManyWithWhereWithoutPl_nlInput | cap_pl_lnUpdateManyWithWhereWithoutPl_nlInput[]
    deleteMany?: cap_pl_lnScalarWhereInput | cap_pl_lnScalarWhereInput[]
  }

  export type generoUpdateOneWithoutPl_nlNestedInput = {
    create?: XOR<generoCreateWithoutPl_nlInput, generoUncheckedCreateWithoutPl_nlInput>
    connectOrCreate?: generoCreateOrConnectWithoutPl_nlInput
    upsert?: generoUpsertWithoutPl_nlInput
    disconnect?: generoWhereInput | boolean
    delete?: generoWhereInput | boolean
    connect?: generoWhereUniqueInput
    update?: XOR<XOR<generoUpdateToOneWithWhereWithoutPl_nlInput, generoUpdateWithoutPl_nlInput>, generoUncheckedUpdateWithoutPl_nlInput>
  }

  export type categoriaUpdateOneWithoutPl_nlNestedInput = {
    create?: XOR<categoriaCreateWithoutPl_nlInput, categoriaUncheckedCreateWithoutPl_nlInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutPl_nlInput
    upsert?: categoriaUpsertWithoutPl_nlInput
    disconnect?: categoriaWhereInput | boolean
    delete?: categoriaWhereInput | boolean
    connect?: categoriaWhereUniqueInput
    update?: XOR<XOR<categoriaUpdateToOneWithWhereWithoutPl_nlInput, categoriaUpdateWithoutPl_nlInput>, categoriaUncheckedUpdateWithoutPl_nlInput>
  }

  export type cap_pl_lnUncheckedUpdateManyWithoutPl_nlNestedInput = {
    create?: XOR<cap_pl_lnCreateWithoutPl_nlInput, cap_pl_lnUncheckedCreateWithoutPl_nlInput> | cap_pl_lnCreateWithoutPl_nlInput[] | cap_pl_lnUncheckedCreateWithoutPl_nlInput[]
    connectOrCreate?: cap_pl_lnCreateOrConnectWithoutPl_nlInput | cap_pl_lnCreateOrConnectWithoutPl_nlInput[]
    upsert?: cap_pl_lnUpsertWithWhereUniqueWithoutPl_nlInput | cap_pl_lnUpsertWithWhereUniqueWithoutPl_nlInput[]
    createMany?: cap_pl_lnCreateManyPl_nlInputEnvelope
    set?: cap_pl_lnWhereUniqueInput | cap_pl_lnWhereUniqueInput[]
    disconnect?: cap_pl_lnWhereUniqueInput | cap_pl_lnWhereUniqueInput[]
    delete?: cap_pl_lnWhereUniqueInput | cap_pl_lnWhereUniqueInput[]
    connect?: cap_pl_lnWhereUniqueInput | cap_pl_lnWhereUniqueInput[]
    update?: cap_pl_lnUpdateWithWhereUniqueWithoutPl_nlInput | cap_pl_lnUpdateWithWhereUniqueWithoutPl_nlInput[]
    updateMany?: cap_pl_lnUpdateManyWithWhereWithoutPl_nlInput | cap_pl_lnUpdateManyWithWhereWithoutPl_nlInput[]
    deleteMany?: cap_pl_lnScalarWhereInput | cap_pl_lnScalarWhereInput[]
  }

  export type autorCreateNestedOneWithoutComentarioInput = {
    create?: XOR<autorCreateWithoutComentarioInput, autorUncheckedCreateWithoutComentarioInput>
    connectOrCreate?: autorCreateOrConnectWithoutComentarioInput
    connect?: autorWhereUniqueInput
  }

  export type editorialCreateNestedOneWithoutComentarioInput = {
    create?: XOR<editorialCreateWithoutComentarioInput, editorialUncheckedCreateWithoutComentarioInput>
    connectOrCreate?: editorialCreateOrConnectWithoutComentarioInput
    connect?: editorialWhereUniqueInput
  }

  export type autorUpdateOneWithoutComentarioNestedInput = {
    create?: XOR<autorCreateWithoutComentarioInput, autorUncheckedCreateWithoutComentarioInput>
    connectOrCreate?: autorCreateOrConnectWithoutComentarioInput
    upsert?: autorUpsertWithoutComentarioInput
    disconnect?: autorWhereInput | boolean
    delete?: autorWhereInput | boolean
    connect?: autorWhereUniqueInput
    update?: XOR<XOR<autorUpdateToOneWithWhereWithoutComentarioInput, autorUpdateWithoutComentarioInput>, autorUncheckedUpdateWithoutComentarioInput>
  }

  export type editorialUpdateOneWithoutComentarioNestedInput = {
    create?: XOR<editorialCreateWithoutComentarioInput, editorialUncheckedCreateWithoutComentarioInput>
    connectOrCreate?: editorialCreateOrConnectWithoutComentarioInput
    upsert?: editorialUpsertWithoutComentarioInput
    disconnect?: editorialWhereInput | boolean
    delete?: editorialWhereInput | boolean
    connect?: editorialWhereUniqueInput
    update?: XOR<XOR<editorialUpdateToOneWithWhereWithoutComentarioInput, editorialUpdateWithoutComentarioInput>, editorialUncheckedUpdateWithoutComentarioInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type generoCreateWithoutCategoriaInput = {
    nombre?: string | null
    pl_nl?: pl_nlCreateNestedManyWithoutGeneroInput
  }

  export type generoUncheckedCreateWithoutCategoriaInput = {
    id_genero?: number
    nombre?: string | null
    pl_nl?: pl_nlUncheckedCreateNestedManyWithoutGeneroInput
  }

  export type generoCreateOrConnectWithoutCategoriaInput = {
    where: generoWhereUniqueInput
    create: XOR<generoCreateWithoutCategoriaInput, generoUncheckedCreateWithoutCategoriaInput>
  }

  export type generoCreateManyCategoriaInputEnvelope = {
    data: generoCreateManyCategoriaInput | generoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type pl_libreCreateWithoutCategoriaInput = {
    contenido?: string | null
    editorial?: editorialCreateNestedOneWithoutPl_libreInput
    etiqueta?: etiquetaCreateNestedOneWithoutPl_libreInput
  }

  export type pl_libreUncheckedCreateWithoutCategoriaInput = {
    id_pl_libre?: number
    id_editorial_pl?: number | null
    id_etiqueta?: number | null
    contenido?: string | null
  }

  export type pl_libreCreateOrConnectWithoutCategoriaInput = {
    where: pl_libreWhereUniqueInput
    create: XOR<pl_libreCreateWithoutCategoriaInput, pl_libreUncheckedCreateWithoutCategoriaInput>
  }

  export type pl_libreCreateManyCategoriaInputEnvelope = {
    data: pl_libreCreateManyCategoriaInput | pl_libreCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type pl_nlCreateWithoutCategoriaInput = {
    titulo?: string | null
    descripcion?: string | null
    estado: string
    cap_pl_ln?: cap_pl_lnCreateNestedManyWithoutPl_nlInput
    genero?: generoCreateNestedOneWithoutPl_nlInput
  }

  export type pl_nlUncheckedCreateWithoutCategoriaInput = {
    id_pl_ln?: number
    titulo?: string | null
    id_genero?: number | null
    descripcion?: string | null
    estado: string
    cap_pl_ln?: cap_pl_lnUncheckedCreateNestedManyWithoutPl_nlInput
  }

  export type pl_nlCreateOrConnectWithoutCategoriaInput = {
    where: pl_nlWhereUniqueInput
    create: XOR<pl_nlCreateWithoutCategoriaInput, pl_nlUncheckedCreateWithoutCategoriaInput>
  }

  export type pl_nlCreateManyCategoriaInputEnvelope = {
    data: pl_nlCreateManyCategoriaInput | pl_nlCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type generoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: generoWhereUniqueInput
    update: XOR<generoUpdateWithoutCategoriaInput, generoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<generoCreateWithoutCategoriaInput, generoUncheckedCreateWithoutCategoriaInput>
  }

  export type generoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: generoWhereUniqueInput
    data: XOR<generoUpdateWithoutCategoriaInput, generoUncheckedUpdateWithoutCategoriaInput>
  }

  export type generoUpdateManyWithWhereWithoutCategoriaInput = {
    where: generoScalarWhereInput
    data: XOR<generoUpdateManyMutationInput, generoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type generoScalarWhereInput = {
    AND?: generoScalarWhereInput | generoScalarWhereInput[]
    OR?: generoScalarWhereInput[]
    NOT?: generoScalarWhereInput | generoScalarWhereInput[]
    id_genero?: IntFilter<"genero"> | number
    id_categoria?: IntNullableFilter<"genero"> | number | null
    nombre?: StringNullableFilter<"genero"> | string | null
  }

  export type pl_libreUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: pl_libreWhereUniqueInput
    update: XOR<pl_libreUpdateWithoutCategoriaInput, pl_libreUncheckedUpdateWithoutCategoriaInput>
    create: XOR<pl_libreCreateWithoutCategoriaInput, pl_libreUncheckedCreateWithoutCategoriaInput>
  }

  export type pl_libreUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: pl_libreWhereUniqueInput
    data: XOR<pl_libreUpdateWithoutCategoriaInput, pl_libreUncheckedUpdateWithoutCategoriaInput>
  }

  export type pl_libreUpdateManyWithWhereWithoutCategoriaInput = {
    where: pl_libreScalarWhereInput
    data: XOR<pl_libreUpdateManyMutationInput, pl_libreUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type pl_libreScalarWhereInput = {
    AND?: pl_libreScalarWhereInput | pl_libreScalarWhereInput[]
    OR?: pl_libreScalarWhereInput[]
    NOT?: pl_libreScalarWhereInput | pl_libreScalarWhereInput[]
    id_pl_libre?: IntFilter<"pl_libre"> | number
    id_categoria?: IntNullableFilter<"pl_libre"> | number | null
    id_editorial_pl?: IntNullableFilter<"pl_libre"> | number | null
    id_etiqueta?: IntNullableFilter<"pl_libre"> | number | null
    contenido?: StringNullableFilter<"pl_libre"> | string | null
  }

  export type pl_nlUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: pl_nlWhereUniqueInput
    update: XOR<pl_nlUpdateWithoutCategoriaInput, pl_nlUncheckedUpdateWithoutCategoriaInput>
    create: XOR<pl_nlCreateWithoutCategoriaInput, pl_nlUncheckedCreateWithoutCategoriaInput>
  }

  export type pl_nlUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: pl_nlWhereUniqueInput
    data: XOR<pl_nlUpdateWithoutCategoriaInput, pl_nlUncheckedUpdateWithoutCategoriaInput>
  }

  export type pl_nlUpdateManyWithWhereWithoutCategoriaInput = {
    where: pl_nlScalarWhereInput
    data: XOR<pl_nlUpdateManyMutationInput, pl_nlUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type pl_nlScalarWhereInput = {
    AND?: pl_nlScalarWhereInput | pl_nlScalarWhereInput[]
    OR?: pl_nlScalarWhereInput[]
    NOT?: pl_nlScalarWhereInput | pl_nlScalarWhereInput[]
    id_pl_ln?: IntFilter<"pl_nl"> | number
    titulo?: StringNullableFilter<"pl_nl"> | string | null
    id_genero?: IntNullableFilter<"pl_nl"> | number | null
    id_categoria?: IntNullableFilter<"pl_nl"> | number | null
    descripcion?: StringNullableFilter<"pl_nl"> | string | null
    estado?: StringFilter<"pl_nl"> | string
  }

  export type pl_libreCreateWithoutEtiquetaInput = {
    contenido?: string | null
    categoria?: categoriaCreateNestedOneWithoutPl_libreInput
    editorial?: editorialCreateNestedOneWithoutPl_libreInput
  }

  export type pl_libreUncheckedCreateWithoutEtiquetaInput = {
    id_pl_libre?: number
    id_categoria?: number | null
    id_editorial_pl?: number | null
    contenido?: string | null
  }

  export type pl_libreCreateOrConnectWithoutEtiquetaInput = {
    where: pl_libreWhereUniqueInput
    create: XOR<pl_libreCreateWithoutEtiquetaInput, pl_libreUncheckedCreateWithoutEtiquetaInput>
  }

  export type pl_libreCreateManyEtiquetaInputEnvelope = {
    data: pl_libreCreateManyEtiquetaInput | pl_libreCreateManyEtiquetaInput[]
    skipDuplicates?: boolean
  }

  export type pl_libreUpsertWithWhereUniqueWithoutEtiquetaInput = {
    where: pl_libreWhereUniqueInput
    update: XOR<pl_libreUpdateWithoutEtiquetaInput, pl_libreUncheckedUpdateWithoutEtiquetaInput>
    create: XOR<pl_libreCreateWithoutEtiquetaInput, pl_libreUncheckedCreateWithoutEtiquetaInput>
  }

  export type pl_libreUpdateWithWhereUniqueWithoutEtiquetaInput = {
    where: pl_libreWhereUniqueInput
    data: XOR<pl_libreUpdateWithoutEtiquetaInput, pl_libreUncheckedUpdateWithoutEtiquetaInput>
  }

  export type pl_libreUpdateManyWithWhereWithoutEtiquetaInput = {
    where: pl_libreScalarWhereInput
    data: XOR<pl_libreUpdateManyMutationInput, pl_libreUncheckedUpdateManyWithoutEtiquetaInput>
  }

  export type categoriaCreateWithoutGeneroInput = {
    descripcion?: string | null
    pl_libre?: pl_libreCreateNestedManyWithoutCategoriaInput
    pl_nl?: pl_nlCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUncheckedCreateWithoutGeneroInput = {
    id_categoria?: number
    descripcion?: string | null
    pl_libre?: pl_libreUncheckedCreateNestedManyWithoutCategoriaInput
    pl_nl?: pl_nlUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaCreateOrConnectWithoutGeneroInput = {
    where: categoriaWhereUniqueInput
    create: XOR<categoriaCreateWithoutGeneroInput, categoriaUncheckedCreateWithoutGeneroInput>
  }

  export type pl_nlCreateWithoutGeneroInput = {
    titulo?: string | null
    descripcion?: string | null
    estado: string
    cap_pl_ln?: cap_pl_lnCreateNestedManyWithoutPl_nlInput
    categoria?: categoriaCreateNestedOneWithoutPl_nlInput
  }

  export type pl_nlUncheckedCreateWithoutGeneroInput = {
    id_pl_ln?: number
    titulo?: string | null
    id_categoria?: number | null
    descripcion?: string | null
    estado: string
    cap_pl_ln?: cap_pl_lnUncheckedCreateNestedManyWithoutPl_nlInput
  }

  export type pl_nlCreateOrConnectWithoutGeneroInput = {
    where: pl_nlWhereUniqueInput
    create: XOR<pl_nlCreateWithoutGeneroInput, pl_nlUncheckedCreateWithoutGeneroInput>
  }

  export type pl_nlCreateManyGeneroInputEnvelope = {
    data: pl_nlCreateManyGeneroInput | pl_nlCreateManyGeneroInput[]
    skipDuplicates?: boolean
  }

  export type categoriaUpsertWithoutGeneroInput = {
    update: XOR<categoriaUpdateWithoutGeneroInput, categoriaUncheckedUpdateWithoutGeneroInput>
    create: XOR<categoriaCreateWithoutGeneroInput, categoriaUncheckedCreateWithoutGeneroInput>
    where?: categoriaWhereInput
  }

  export type categoriaUpdateToOneWithWhereWithoutGeneroInput = {
    where?: categoriaWhereInput
    data: XOR<categoriaUpdateWithoutGeneroInput, categoriaUncheckedUpdateWithoutGeneroInput>
  }

  export type categoriaUpdateWithoutGeneroInput = {
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    pl_libre?: pl_libreUpdateManyWithoutCategoriaNestedInput
    pl_nl?: pl_nlUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaUncheckedUpdateWithoutGeneroInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    pl_libre?: pl_libreUncheckedUpdateManyWithoutCategoriaNestedInput
    pl_nl?: pl_nlUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type pl_nlUpsertWithWhereUniqueWithoutGeneroInput = {
    where: pl_nlWhereUniqueInput
    update: XOR<pl_nlUpdateWithoutGeneroInput, pl_nlUncheckedUpdateWithoutGeneroInput>
    create: XOR<pl_nlCreateWithoutGeneroInput, pl_nlUncheckedCreateWithoutGeneroInput>
  }

  export type pl_nlUpdateWithWhereUniqueWithoutGeneroInput = {
    where: pl_nlWhereUniqueInput
    data: XOR<pl_nlUpdateWithoutGeneroInput, pl_nlUncheckedUpdateWithoutGeneroInput>
  }

  export type pl_nlUpdateManyWithWhereWithoutGeneroInput = {
    where: pl_nlScalarWhereInput
    data: XOR<pl_nlUpdateManyMutationInput, pl_nlUncheckedUpdateManyWithoutGeneroInput>
  }

  export type usuarioCreateWithoutPersonaInput = {
    correo?: string | null
    contrasenia?: string | null
    verificacion_email?: boolean | null
    id_estado?: number | null
    autor?: autorCreateNestedManyWithoutUsuarioInput
    seguido_seguido_id_user_seguidorTousuario?: seguidoCreateNestedManyWithoutUsuario_seguido_id_user_seguidorTousuarioInput
    seguido_seguido_id_user_seguidoTousuario?: seguidoCreateNestedManyWithoutUsuario_seguido_id_user_seguidoTousuarioInput
  }

  export type usuarioUncheckedCreateWithoutPersonaInput = {
    id_usuario?: number
    correo?: string | null
    contrasenia?: string | null
    verificacion_email?: boolean | null
    id_estado?: number | null
    autor?: autorUncheckedCreateNestedManyWithoutUsuarioInput
    seguido_seguido_id_user_seguidorTousuario?: seguidoUncheckedCreateNestedManyWithoutUsuario_seguido_id_user_seguidorTousuarioInput
    seguido_seguido_id_user_seguidoTousuario?: seguidoUncheckedCreateNestedManyWithoutUsuario_seguido_id_user_seguidoTousuarioInput
  }

  export type usuarioCreateOrConnectWithoutPersonaInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutPersonaInput, usuarioUncheckedCreateWithoutPersonaInput>
  }

  export type usuarioCreateManyPersonaInputEnvelope = {
    data: usuarioCreateManyPersonaInput | usuarioCreateManyPersonaInput[]
    skipDuplicates?: boolean
  }

  export type usuarioUpsertWithWhereUniqueWithoutPersonaInput = {
    where: usuarioWhereUniqueInput
    update: XOR<usuarioUpdateWithoutPersonaInput, usuarioUncheckedUpdateWithoutPersonaInput>
    create: XOR<usuarioCreateWithoutPersonaInput, usuarioUncheckedCreateWithoutPersonaInput>
  }

  export type usuarioUpdateWithWhereUniqueWithoutPersonaInput = {
    where: usuarioWhereUniqueInput
    data: XOR<usuarioUpdateWithoutPersonaInput, usuarioUncheckedUpdateWithoutPersonaInput>
  }

  export type usuarioUpdateManyWithWhereWithoutPersonaInput = {
    where: usuarioScalarWhereInput
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyWithoutPersonaInput>
  }

  export type usuarioScalarWhereInput = {
    AND?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
    OR?: usuarioScalarWhereInput[]
    NOT?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
    id_usuario?: IntFilter<"usuario"> | number
    id_persona?: IntNullableFilter<"usuario"> | number | null
    correo?: StringNullableFilter<"usuario"> | string | null
    contrasenia?: StringNullableFilter<"usuario"> | string | null
    verificacion_email?: BoolNullableFilter<"usuario"> | boolean | null
    id_estado?: IntNullableFilter<"usuario"> | number | null
  }

  export type autorCreateWithoutUsuarioInput = {
    nick_name?: string | null
    ocupacion?: string | null
    descripcion?: string | null
    foto_perfil?: string | null
    foto_portada?: string | null
    pais?: paisCreateNestedOneWithoutAutorInput
    comentario?: comentarioCreateNestedManyWithoutAutorInput
    editorial?: editorialCreateNestedManyWithoutAutorInput
    reaccion?: reaccionCreateNestedManyWithoutAutorInput
  }

  export type autorUncheckedCreateWithoutUsuarioInput = {
    id_autor?: number
    id_pais?: number | null
    nick_name?: string | null
    ocupacion?: string | null
    descripcion?: string | null
    foto_perfil?: string | null
    foto_portada?: string | null
    comentario?: comentarioUncheckedCreateNestedManyWithoutAutorInput
    editorial?: editorialUncheckedCreateNestedManyWithoutAutorInput
    reaccion?: reaccionUncheckedCreateNestedManyWithoutAutorInput
  }

  export type autorCreateOrConnectWithoutUsuarioInput = {
    where: autorWhereUniqueInput
    create: XOR<autorCreateWithoutUsuarioInput, autorUncheckedCreateWithoutUsuarioInput>
  }

  export type autorCreateManyUsuarioInputEnvelope = {
    data: autorCreateManyUsuarioInput | autorCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type seguidoCreateWithoutUsuario_seguido_id_user_seguidorTousuarioInput = {
    fecha_seguimiento?: Date | string | null
    usuario_seguido_id_user_seguidoTousuario?: usuarioCreateNestedOneWithoutSeguido_seguido_id_user_seguidoTousuarioInput
    tipo_seguimiento?: tipo_seguimientoCreateNestedOneWithoutSeguidoInput
  }

  export type seguidoUncheckedCreateWithoutUsuario_seguido_id_user_seguidorTousuarioInput = {
    id_seguido?: number
    id_user_seguido?: number | null
    id_seguimiento?: number | null
    fecha_seguimiento?: Date | string | null
  }

  export type seguidoCreateOrConnectWithoutUsuario_seguido_id_user_seguidorTousuarioInput = {
    where: seguidoWhereUniqueInput
    create: XOR<seguidoCreateWithoutUsuario_seguido_id_user_seguidorTousuarioInput, seguidoUncheckedCreateWithoutUsuario_seguido_id_user_seguidorTousuarioInput>
  }

  export type seguidoCreateManyUsuario_seguido_id_user_seguidorTousuarioInputEnvelope = {
    data: seguidoCreateManyUsuario_seguido_id_user_seguidorTousuarioInput | seguidoCreateManyUsuario_seguido_id_user_seguidorTousuarioInput[]
    skipDuplicates?: boolean
  }

  export type seguidoCreateWithoutUsuario_seguido_id_user_seguidoTousuarioInput = {
    fecha_seguimiento?: Date | string | null
    usuario_seguido_id_user_seguidorTousuario?: usuarioCreateNestedOneWithoutSeguido_seguido_id_user_seguidorTousuarioInput
    tipo_seguimiento?: tipo_seguimientoCreateNestedOneWithoutSeguidoInput
  }

  export type seguidoUncheckedCreateWithoutUsuario_seguido_id_user_seguidoTousuarioInput = {
    id_seguido?: number
    id_user_seguidor?: number | null
    id_seguimiento?: number | null
    fecha_seguimiento?: Date | string | null
  }

  export type seguidoCreateOrConnectWithoutUsuario_seguido_id_user_seguidoTousuarioInput = {
    where: seguidoWhereUniqueInput
    create: XOR<seguidoCreateWithoutUsuario_seguido_id_user_seguidoTousuarioInput, seguidoUncheckedCreateWithoutUsuario_seguido_id_user_seguidoTousuarioInput>
  }

  export type seguidoCreateManyUsuario_seguido_id_user_seguidoTousuarioInputEnvelope = {
    data: seguidoCreateManyUsuario_seguido_id_user_seguidoTousuarioInput | seguidoCreateManyUsuario_seguido_id_user_seguidoTousuarioInput[]
    skipDuplicates?: boolean
  }

  export type personaCreateWithoutUsuarioInput = {
    nombre?: string | null
    apellido_paterno?: string | null
    apellido_materno?: string | null
  }

  export type personaUncheckedCreateWithoutUsuarioInput = {
    id_persona?: number
    nombre?: string | null
    apellido_paterno?: string | null
    apellido_materno?: string | null
  }

  export type personaCreateOrConnectWithoutUsuarioInput = {
    where: personaWhereUniqueInput
    create: XOR<personaCreateWithoutUsuarioInput, personaUncheckedCreateWithoutUsuarioInput>
  }

  export type autorUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: autorWhereUniqueInput
    update: XOR<autorUpdateWithoutUsuarioInput, autorUncheckedUpdateWithoutUsuarioInput>
    create: XOR<autorCreateWithoutUsuarioInput, autorUncheckedCreateWithoutUsuarioInput>
  }

  export type autorUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: autorWhereUniqueInput
    data: XOR<autorUpdateWithoutUsuarioInput, autorUncheckedUpdateWithoutUsuarioInput>
  }

  export type autorUpdateManyWithWhereWithoutUsuarioInput = {
    where: autorScalarWhereInput
    data: XOR<autorUpdateManyMutationInput, autorUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type autorScalarWhereInput = {
    AND?: autorScalarWhereInput | autorScalarWhereInput[]
    OR?: autorScalarWhereInput[]
    NOT?: autorScalarWhereInput | autorScalarWhereInput[]
    id_autor?: IntFilter<"autor"> | number
    id_pais?: IntNullableFilter<"autor"> | number | null
    id_usuario?: IntNullableFilter<"autor"> | number | null
    nick_name?: StringNullableFilter<"autor"> | string | null
    ocupacion?: StringNullableFilter<"autor"> | string | null
    descripcion?: StringNullableFilter<"autor"> | string | null
    foto_perfil?: StringNullableFilter<"autor"> | string | null
    foto_portada?: StringNullableFilter<"autor"> | string | null
  }

  export type seguidoUpsertWithWhereUniqueWithoutUsuario_seguido_id_user_seguidorTousuarioInput = {
    where: seguidoWhereUniqueInput
    update: XOR<seguidoUpdateWithoutUsuario_seguido_id_user_seguidorTousuarioInput, seguidoUncheckedUpdateWithoutUsuario_seguido_id_user_seguidorTousuarioInput>
    create: XOR<seguidoCreateWithoutUsuario_seguido_id_user_seguidorTousuarioInput, seguidoUncheckedCreateWithoutUsuario_seguido_id_user_seguidorTousuarioInput>
  }

  export type seguidoUpdateWithWhereUniqueWithoutUsuario_seguido_id_user_seguidorTousuarioInput = {
    where: seguidoWhereUniqueInput
    data: XOR<seguidoUpdateWithoutUsuario_seguido_id_user_seguidorTousuarioInput, seguidoUncheckedUpdateWithoutUsuario_seguido_id_user_seguidorTousuarioInput>
  }

  export type seguidoUpdateManyWithWhereWithoutUsuario_seguido_id_user_seguidorTousuarioInput = {
    where: seguidoScalarWhereInput
    data: XOR<seguidoUpdateManyMutationInput, seguidoUncheckedUpdateManyWithoutUsuario_seguido_id_user_seguidorTousuarioInput>
  }

  export type seguidoScalarWhereInput = {
    AND?: seguidoScalarWhereInput | seguidoScalarWhereInput[]
    OR?: seguidoScalarWhereInput[]
    NOT?: seguidoScalarWhereInput | seguidoScalarWhereInput[]
    id_seguido?: IntFilter<"seguido"> | number
    id_user_seguidor?: IntNullableFilter<"seguido"> | number | null
    id_user_seguido?: IntNullableFilter<"seguido"> | number | null
    id_seguimiento?: IntNullableFilter<"seguido"> | number | null
    fecha_seguimiento?: DateTimeNullableFilter<"seguido"> | Date | string | null
  }

  export type seguidoUpsertWithWhereUniqueWithoutUsuario_seguido_id_user_seguidoTousuarioInput = {
    where: seguidoWhereUniqueInput
    update: XOR<seguidoUpdateWithoutUsuario_seguido_id_user_seguidoTousuarioInput, seguidoUncheckedUpdateWithoutUsuario_seguido_id_user_seguidoTousuarioInput>
    create: XOR<seguidoCreateWithoutUsuario_seguido_id_user_seguidoTousuarioInput, seguidoUncheckedCreateWithoutUsuario_seguido_id_user_seguidoTousuarioInput>
  }

  export type seguidoUpdateWithWhereUniqueWithoutUsuario_seguido_id_user_seguidoTousuarioInput = {
    where: seguidoWhereUniqueInput
    data: XOR<seguidoUpdateWithoutUsuario_seguido_id_user_seguidoTousuarioInput, seguidoUncheckedUpdateWithoutUsuario_seguido_id_user_seguidoTousuarioInput>
  }

  export type seguidoUpdateManyWithWhereWithoutUsuario_seguido_id_user_seguidoTousuarioInput = {
    where: seguidoScalarWhereInput
    data: XOR<seguidoUpdateManyMutationInput, seguidoUncheckedUpdateManyWithoutUsuario_seguido_id_user_seguidoTousuarioInput>
  }

  export type personaUpsertWithoutUsuarioInput = {
    update: XOR<personaUpdateWithoutUsuarioInput, personaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<personaCreateWithoutUsuarioInput, personaUncheckedCreateWithoutUsuarioInput>
    where?: personaWhereInput
  }

  export type personaUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: personaWhereInput
    data: XOR<personaUpdateWithoutUsuarioInput, personaUncheckedUpdateWithoutUsuarioInput>
  }

  export type personaUpdateWithoutUsuarioInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_paterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type personaUncheckedUpdateWithoutUsuarioInput = {
    id_persona?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_paterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuarioCreateWithoutAutorInput = {
    correo?: string | null
    contrasenia?: string | null
    verificacion_email?: boolean | null
    id_estado?: number | null
    seguido_seguido_id_user_seguidorTousuario?: seguidoCreateNestedManyWithoutUsuario_seguido_id_user_seguidorTousuarioInput
    seguido_seguido_id_user_seguidoTousuario?: seguidoCreateNestedManyWithoutUsuario_seguido_id_user_seguidoTousuarioInput
    persona?: personaCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutAutorInput = {
    id_usuario?: number
    id_persona?: number | null
    correo?: string | null
    contrasenia?: string | null
    verificacion_email?: boolean | null
    id_estado?: number | null
    seguido_seguido_id_user_seguidorTousuario?: seguidoUncheckedCreateNestedManyWithoutUsuario_seguido_id_user_seguidorTousuarioInput
    seguido_seguido_id_user_seguidoTousuario?: seguidoUncheckedCreateNestedManyWithoutUsuario_seguido_id_user_seguidoTousuarioInput
  }

  export type usuarioCreateOrConnectWithoutAutorInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutAutorInput, usuarioUncheckedCreateWithoutAutorInput>
  }

  export type paisCreateWithoutAutorInput = {
    nombre?: string | null
    code?: string | null
  }

  export type paisUncheckedCreateWithoutAutorInput = {
    id_pais?: number
    nombre?: string | null
    code?: string | null
  }

  export type paisCreateOrConnectWithoutAutorInput = {
    where: paisWhereUniqueInput
    create: XOR<paisCreateWithoutAutorInput, paisUncheckedCreateWithoutAutorInput>
  }

  export type comentarioCreateWithoutAutorInput = {
    fecha_registro?: Date | string | null
    contenido?: string | null
    id_estado?: number | null
    editorial?: editorialCreateNestedOneWithoutComentarioInput
  }

  export type comentarioUncheckedCreateWithoutAutorInput = {
    id_comentario?: number
    id_editorial?: number | null
    fecha_registro?: Date | string | null
    contenido?: string | null
    id_estado?: number | null
  }

  export type comentarioCreateOrConnectWithoutAutorInput = {
    where: comentarioWhereUniqueInput
    create: XOR<comentarioCreateWithoutAutorInput, comentarioUncheckedCreateWithoutAutorInput>
  }

  export type comentarioCreateManyAutorInputEnvelope = {
    data: comentarioCreateManyAutorInput | comentarioCreateManyAutorInput[]
    skipDuplicates?: boolean
  }

  export type editorialCreateWithoutAutorInput = {
    fecha_registro?: Date | string | null
    id_estado: number
    cap_pl_ln?: cap_pl_lnCreateNestedManyWithoutEditorialInput
    comentario?: comentarioCreateNestedManyWithoutEditorialInput
    pl_libre?: pl_libreCreateNestedManyWithoutEditorialInput
  }

  export type editorialUncheckedCreateWithoutAutorInput = {
    id_editorial_pl?: number
    fecha_registro?: Date | string | null
    id_estado: number
    cap_pl_ln?: cap_pl_lnUncheckedCreateNestedManyWithoutEditorialInput
    comentario?: comentarioUncheckedCreateNestedManyWithoutEditorialInput
    pl_libre?: pl_libreUncheckedCreateNestedManyWithoutEditorialInput
  }

  export type editorialCreateOrConnectWithoutAutorInput = {
    where: editorialWhereUniqueInput
    create: XOR<editorialCreateWithoutAutorInput, editorialUncheckedCreateWithoutAutorInput>
  }

  export type editorialCreateManyAutorInputEnvelope = {
    data: editorialCreateManyAutorInput | editorialCreateManyAutorInput[]
    skipDuplicates?: boolean
  }

  export type reaccionCreateWithoutAutorInput = {
    id_capitulo?: number | null
    id_publicacion_l?: number | null
    id_editorial?: number | null
    fecha?: Date | string | null
  }

  export type reaccionUncheckedCreateWithoutAutorInput = {
    id_reaccion?: number
    id_capitulo?: number | null
    id_publicacion_l?: number | null
    id_editorial?: number | null
    fecha?: Date | string | null
  }

  export type reaccionCreateOrConnectWithoutAutorInput = {
    where: reaccionWhereUniqueInput
    create: XOR<reaccionCreateWithoutAutorInput, reaccionUncheckedCreateWithoutAutorInput>
  }

  export type reaccionCreateManyAutorInputEnvelope = {
    data: reaccionCreateManyAutorInput | reaccionCreateManyAutorInput[]
    skipDuplicates?: boolean
  }

  export type usuarioUpsertWithoutAutorInput = {
    update: XOR<usuarioUpdateWithoutAutorInput, usuarioUncheckedUpdateWithoutAutorInput>
    create: XOR<usuarioCreateWithoutAutorInput, usuarioUncheckedCreateWithoutAutorInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutAutorInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutAutorInput, usuarioUncheckedUpdateWithoutAutorInput>
  }

  export type usuarioUpdateWithoutAutorInput = {
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    verificacion_email?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    seguido_seguido_id_user_seguidorTousuario?: seguidoUpdateManyWithoutUsuario_seguido_id_user_seguidorTousuarioNestedInput
    seguido_seguido_id_user_seguidoTousuario?: seguidoUpdateManyWithoutUsuario_seguido_id_user_seguidoTousuarioNestedInput
    persona?: personaUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutAutorInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_persona?: NullableIntFieldUpdateOperationsInput | number | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    verificacion_email?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    seguido_seguido_id_user_seguidorTousuario?: seguidoUncheckedUpdateManyWithoutUsuario_seguido_id_user_seguidorTousuarioNestedInput
    seguido_seguido_id_user_seguidoTousuario?: seguidoUncheckedUpdateManyWithoutUsuario_seguido_id_user_seguidoTousuarioNestedInput
  }

  export type paisUpsertWithoutAutorInput = {
    update: XOR<paisUpdateWithoutAutorInput, paisUncheckedUpdateWithoutAutorInput>
    create: XOR<paisCreateWithoutAutorInput, paisUncheckedCreateWithoutAutorInput>
    where?: paisWhereInput
  }

  export type paisUpdateToOneWithWhereWithoutAutorInput = {
    where?: paisWhereInput
    data: XOR<paisUpdateWithoutAutorInput, paisUncheckedUpdateWithoutAutorInput>
  }

  export type paisUpdateWithoutAutorInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type paisUncheckedUpdateWithoutAutorInput = {
    id_pais?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type comentarioUpsertWithWhereUniqueWithoutAutorInput = {
    where: comentarioWhereUniqueInput
    update: XOR<comentarioUpdateWithoutAutorInput, comentarioUncheckedUpdateWithoutAutorInput>
    create: XOR<comentarioCreateWithoutAutorInput, comentarioUncheckedCreateWithoutAutorInput>
  }

  export type comentarioUpdateWithWhereUniqueWithoutAutorInput = {
    where: comentarioWhereUniqueInput
    data: XOR<comentarioUpdateWithoutAutorInput, comentarioUncheckedUpdateWithoutAutorInput>
  }

  export type comentarioUpdateManyWithWhereWithoutAutorInput = {
    where: comentarioScalarWhereInput
    data: XOR<comentarioUpdateManyMutationInput, comentarioUncheckedUpdateManyWithoutAutorInput>
  }

  export type comentarioScalarWhereInput = {
    AND?: comentarioScalarWhereInput | comentarioScalarWhereInput[]
    OR?: comentarioScalarWhereInput[]
    NOT?: comentarioScalarWhereInput | comentarioScalarWhereInput[]
    id_comentario?: IntFilter<"comentario"> | number
    id_autor?: IntNullableFilter<"comentario"> | number | null
    id_editorial?: IntNullableFilter<"comentario"> | number | null
    fecha_registro?: DateTimeNullableFilter<"comentario"> | Date | string | null
    contenido?: StringNullableFilter<"comentario"> | string | null
    id_estado?: IntNullableFilter<"comentario"> | number | null
  }

  export type editorialUpsertWithWhereUniqueWithoutAutorInput = {
    where: editorialWhereUniqueInput
    update: XOR<editorialUpdateWithoutAutorInput, editorialUncheckedUpdateWithoutAutorInput>
    create: XOR<editorialCreateWithoutAutorInput, editorialUncheckedCreateWithoutAutorInput>
  }

  export type editorialUpdateWithWhereUniqueWithoutAutorInput = {
    where: editorialWhereUniqueInput
    data: XOR<editorialUpdateWithoutAutorInput, editorialUncheckedUpdateWithoutAutorInput>
  }

  export type editorialUpdateManyWithWhereWithoutAutorInput = {
    where: editorialScalarWhereInput
    data: XOR<editorialUpdateManyMutationInput, editorialUncheckedUpdateManyWithoutAutorInput>
  }

  export type editorialScalarWhereInput = {
    AND?: editorialScalarWhereInput | editorialScalarWhereInput[]
    OR?: editorialScalarWhereInput[]
    NOT?: editorialScalarWhereInput | editorialScalarWhereInput[]
    id_editorial_pl?: IntFilter<"editorial"> | number
    id_autor?: IntNullableFilter<"editorial"> | number | null
    fecha_registro?: DateTimeNullableFilter<"editorial"> | Date | string | null
    id_estado?: IntFilter<"editorial"> | number
  }

  export type reaccionUpsertWithWhereUniqueWithoutAutorInput = {
    where: reaccionWhereUniqueInput
    update: XOR<reaccionUpdateWithoutAutorInput, reaccionUncheckedUpdateWithoutAutorInput>
    create: XOR<reaccionCreateWithoutAutorInput, reaccionUncheckedCreateWithoutAutorInput>
  }

  export type reaccionUpdateWithWhereUniqueWithoutAutorInput = {
    where: reaccionWhereUniqueInput
    data: XOR<reaccionUpdateWithoutAutorInput, reaccionUncheckedUpdateWithoutAutorInput>
  }

  export type reaccionUpdateManyWithWhereWithoutAutorInput = {
    where: reaccionScalarWhereInput
    data: XOR<reaccionUpdateManyMutationInput, reaccionUncheckedUpdateManyWithoutAutorInput>
  }

  export type reaccionScalarWhereInput = {
    AND?: reaccionScalarWhereInput | reaccionScalarWhereInput[]
    OR?: reaccionScalarWhereInput[]
    NOT?: reaccionScalarWhereInput | reaccionScalarWhereInput[]
    id_reaccion?: IntFilter<"reaccion"> | number
    id_capitulo?: IntNullableFilter<"reaccion"> | number | null
    id_publicacion_l?: IntNullableFilter<"reaccion"> | number | null
    id_editorial?: IntNullableFilter<"reaccion"> | number | null
    id_autor_reaccion?: IntNullableFilter<"reaccion"> | number | null
    fecha?: DateTimeNullableFilter<"reaccion"> | Date | string | null
  }

  export type autorCreateWithoutPaisInput = {
    nick_name?: string | null
    ocupacion?: string | null
    descripcion?: string | null
    foto_perfil?: string | null
    foto_portada?: string | null
    usuario?: usuarioCreateNestedOneWithoutAutorInput
    comentario?: comentarioCreateNestedManyWithoutAutorInput
    editorial?: editorialCreateNestedManyWithoutAutorInput
    reaccion?: reaccionCreateNestedManyWithoutAutorInput
  }

  export type autorUncheckedCreateWithoutPaisInput = {
    id_autor?: number
    id_usuario?: number | null
    nick_name?: string | null
    ocupacion?: string | null
    descripcion?: string | null
    foto_perfil?: string | null
    foto_portada?: string | null
    comentario?: comentarioUncheckedCreateNestedManyWithoutAutorInput
    editorial?: editorialUncheckedCreateNestedManyWithoutAutorInput
    reaccion?: reaccionUncheckedCreateNestedManyWithoutAutorInput
  }

  export type autorCreateOrConnectWithoutPaisInput = {
    where: autorWhereUniqueInput
    create: XOR<autorCreateWithoutPaisInput, autorUncheckedCreateWithoutPaisInput>
  }

  export type autorCreateManyPaisInputEnvelope = {
    data: autorCreateManyPaisInput | autorCreateManyPaisInput[]
    skipDuplicates?: boolean
  }

  export type autorUpsertWithWhereUniqueWithoutPaisInput = {
    where: autorWhereUniqueInput
    update: XOR<autorUpdateWithoutPaisInput, autorUncheckedUpdateWithoutPaisInput>
    create: XOR<autorCreateWithoutPaisInput, autorUncheckedCreateWithoutPaisInput>
  }

  export type autorUpdateWithWhereUniqueWithoutPaisInput = {
    where: autorWhereUniqueInput
    data: XOR<autorUpdateWithoutPaisInput, autorUncheckedUpdateWithoutPaisInput>
  }

  export type autorUpdateManyWithWhereWithoutPaisInput = {
    where: autorScalarWhereInput
    data: XOR<autorUpdateManyMutationInput, autorUncheckedUpdateManyWithoutPaisInput>
  }

  export type usuarioCreateWithoutSeguido_seguido_id_user_seguidorTousuarioInput = {
    correo?: string | null
    contrasenia?: string | null
    verificacion_email?: boolean | null
    id_estado?: number | null
    autor?: autorCreateNestedManyWithoutUsuarioInput
    seguido_seguido_id_user_seguidoTousuario?: seguidoCreateNestedManyWithoutUsuario_seguido_id_user_seguidoTousuarioInput
    persona?: personaCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutSeguido_seguido_id_user_seguidorTousuarioInput = {
    id_usuario?: number
    id_persona?: number | null
    correo?: string | null
    contrasenia?: string | null
    verificacion_email?: boolean | null
    id_estado?: number | null
    autor?: autorUncheckedCreateNestedManyWithoutUsuarioInput
    seguido_seguido_id_user_seguidoTousuario?: seguidoUncheckedCreateNestedManyWithoutUsuario_seguido_id_user_seguidoTousuarioInput
  }

  export type usuarioCreateOrConnectWithoutSeguido_seguido_id_user_seguidorTousuarioInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutSeguido_seguido_id_user_seguidorTousuarioInput, usuarioUncheckedCreateWithoutSeguido_seguido_id_user_seguidorTousuarioInput>
  }

  export type usuarioCreateWithoutSeguido_seguido_id_user_seguidoTousuarioInput = {
    correo?: string | null
    contrasenia?: string | null
    verificacion_email?: boolean | null
    id_estado?: number | null
    autor?: autorCreateNestedManyWithoutUsuarioInput
    seguido_seguido_id_user_seguidorTousuario?: seguidoCreateNestedManyWithoutUsuario_seguido_id_user_seguidorTousuarioInput
    persona?: personaCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutSeguido_seguido_id_user_seguidoTousuarioInput = {
    id_usuario?: number
    id_persona?: number | null
    correo?: string | null
    contrasenia?: string | null
    verificacion_email?: boolean | null
    id_estado?: number | null
    autor?: autorUncheckedCreateNestedManyWithoutUsuarioInput
    seguido_seguido_id_user_seguidorTousuario?: seguidoUncheckedCreateNestedManyWithoutUsuario_seguido_id_user_seguidorTousuarioInput
  }

  export type usuarioCreateOrConnectWithoutSeguido_seguido_id_user_seguidoTousuarioInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutSeguido_seguido_id_user_seguidoTousuarioInput, usuarioUncheckedCreateWithoutSeguido_seguido_id_user_seguidoTousuarioInput>
  }

  export type tipo_seguimientoCreateWithoutSeguidoInput = {
    descripcion?: string | null
  }

  export type tipo_seguimientoUncheckedCreateWithoutSeguidoInput = {
    id_seguimiento?: number
    descripcion?: string | null
  }

  export type tipo_seguimientoCreateOrConnectWithoutSeguidoInput = {
    where: tipo_seguimientoWhereUniqueInput
    create: XOR<tipo_seguimientoCreateWithoutSeguidoInput, tipo_seguimientoUncheckedCreateWithoutSeguidoInput>
  }

  export type usuarioUpsertWithoutSeguido_seguido_id_user_seguidorTousuarioInput = {
    update: XOR<usuarioUpdateWithoutSeguido_seguido_id_user_seguidorTousuarioInput, usuarioUncheckedUpdateWithoutSeguido_seguido_id_user_seguidorTousuarioInput>
    create: XOR<usuarioCreateWithoutSeguido_seguido_id_user_seguidorTousuarioInput, usuarioUncheckedCreateWithoutSeguido_seguido_id_user_seguidorTousuarioInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutSeguido_seguido_id_user_seguidorTousuarioInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutSeguido_seguido_id_user_seguidorTousuarioInput, usuarioUncheckedUpdateWithoutSeguido_seguido_id_user_seguidorTousuarioInput>
  }

  export type usuarioUpdateWithoutSeguido_seguido_id_user_seguidorTousuarioInput = {
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    verificacion_email?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    autor?: autorUpdateManyWithoutUsuarioNestedInput
    seguido_seguido_id_user_seguidoTousuario?: seguidoUpdateManyWithoutUsuario_seguido_id_user_seguidoTousuarioNestedInput
    persona?: personaUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutSeguido_seguido_id_user_seguidorTousuarioInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_persona?: NullableIntFieldUpdateOperationsInput | number | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    verificacion_email?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    autor?: autorUncheckedUpdateManyWithoutUsuarioNestedInput
    seguido_seguido_id_user_seguidoTousuario?: seguidoUncheckedUpdateManyWithoutUsuario_seguido_id_user_seguidoTousuarioNestedInput
  }

  export type usuarioUpsertWithoutSeguido_seguido_id_user_seguidoTousuarioInput = {
    update: XOR<usuarioUpdateWithoutSeguido_seguido_id_user_seguidoTousuarioInput, usuarioUncheckedUpdateWithoutSeguido_seguido_id_user_seguidoTousuarioInput>
    create: XOR<usuarioCreateWithoutSeguido_seguido_id_user_seguidoTousuarioInput, usuarioUncheckedCreateWithoutSeguido_seguido_id_user_seguidoTousuarioInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutSeguido_seguido_id_user_seguidoTousuarioInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutSeguido_seguido_id_user_seguidoTousuarioInput, usuarioUncheckedUpdateWithoutSeguido_seguido_id_user_seguidoTousuarioInput>
  }

  export type usuarioUpdateWithoutSeguido_seguido_id_user_seguidoTousuarioInput = {
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    verificacion_email?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    autor?: autorUpdateManyWithoutUsuarioNestedInput
    seguido_seguido_id_user_seguidorTousuario?: seguidoUpdateManyWithoutUsuario_seguido_id_user_seguidorTousuarioNestedInput
    persona?: personaUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutSeguido_seguido_id_user_seguidoTousuarioInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_persona?: NullableIntFieldUpdateOperationsInput | number | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    verificacion_email?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    autor?: autorUncheckedUpdateManyWithoutUsuarioNestedInput
    seguido_seguido_id_user_seguidorTousuario?: seguidoUncheckedUpdateManyWithoutUsuario_seguido_id_user_seguidorTousuarioNestedInput
  }

  export type tipo_seguimientoUpsertWithoutSeguidoInput = {
    update: XOR<tipo_seguimientoUpdateWithoutSeguidoInput, tipo_seguimientoUncheckedUpdateWithoutSeguidoInput>
    create: XOR<tipo_seguimientoCreateWithoutSeguidoInput, tipo_seguimientoUncheckedCreateWithoutSeguidoInput>
    where?: tipo_seguimientoWhereInput
  }

  export type tipo_seguimientoUpdateToOneWithWhereWithoutSeguidoInput = {
    where?: tipo_seguimientoWhereInput
    data: XOR<tipo_seguimientoUpdateWithoutSeguidoInput, tipo_seguimientoUncheckedUpdateWithoutSeguidoInput>
  }

  export type tipo_seguimientoUpdateWithoutSeguidoInput = {
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tipo_seguimientoUncheckedUpdateWithoutSeguidoInput = {
    id_seguimiento?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type seguidoCreateWithoutTipo_seguimientoInput = {
    fecha_seguimiento?: Date | string | null
    usuario_seguido_id_user_seguidorTousuario?: usuarioCreateNestedOneWithoutSeguido_seguido_id_user_seguidorTousuarioInput
    usuario_seguido_id_user_seguidoTousuario?: usuarioCreateNestedOneWithoutSeguido_seguido_id_user_seguidoTousuarioInput
  }

  export type seguidoUncheckedCreateWithoutTipo_seguimientoInput = {
    id_seguido?: number
    id_user_seguidor?: number | null
    id_user_seguido?: number | null
    fecha_seguimiento?: Date | string | null
  }

  export type seguidoCreateOrConnectWithoutTipo_seguimientoInput = {
    where: seguidoWhereUniqueInput
    create: XOR<seguidoCreateWithoutTipo_seguimientoInput, seguidoUncheckedCreateWithoutTipo_seguimientoInput>
  }

  export type seguidoCreateManyTipo_seguimientoInputEnvelope = {
    data: seguidoCreateManyTipo_seguimientoInput | seguidoCreateManyTipo_seguimientoInput[]
    skipDuplicates?: boolean
  }

  export type seguidoUpsertWithWhereUniqueWithoutTipo_seguimientoInput = {
    where: seguidoWhereUniqueInput
    update: XOR<seguidoUpdateWithoutTipo_seguimientoInput, seguidoUncheckedUpdateWithoutTipo_seguimientoInput>
    create: XOR<seguidoCreateWithoutTipo_seguimientoInput, seguidoUncheckedCreateWithoutTipo_seguimientoInput>
  }

  export type seguidoUpdateWithWhereUniqueWithoutTipo_seguimientoInput = {
    where: seguidoWhereUniqueInput
    data: XOR<seguidoUpdateWithoutTipo_seguimientoInput, seguidoUncheckedUpdateWithoutTipo_seguimientoInput>
  }

  export type seguidoUpdateManyWithWhereWithoutTipo_seguimientoInput = {
    where: seguidoScalarWhereInput
    data: XOR<seguidoUpdateManyMutationInput, seguidoUncheckedUpdateManyWithoutTipo_seguimientoInput>
  }

  export type autorCreateWithoutReaccionInput = {
    nick_name?: string | null
    ocupacion?: string | null
    descripcion?: string | null
    foto_perfil?: string | null
    foto_portada?: string | null
    usuario?: usuarioCreateNestedOneWithoutAutorInput
    pais?: paisCreateNestedOneWithoutAutorInput
    comentario?: comentarioCreateNestedManyWithoutAutorInput
    editorial?: editorialCreateNestedManyWithoutAutorInput
  }

  export type autorUncheckedCreateWithoutReaccionInput = {
    id_autor?: number
    id_pais?: number | null
    id_usuario?: number | null
    nick_name?: string | null
    ocupacion?: string | null
    descripcion?: string | null
    foto_perfil?: string | null
    foto_portada?: string | null
    comentario?: comentarioUncheckedCreateNestedManyWithoutAutorInput
    editorial?: editorialUncheckedCreateNestedManyWithoutAutorInput
  }

  export type autorCreateOrConnectWithoutReaccionInput = {
    where: autorWhereUniqueInput
    create: XOR<autorCreateWithoutReaccionInput, autorUncheckedCreateWithoutReaccionInput>
  }

  export type autorUpsertWithoutReaccionInput = {
    update: XOR<autorUpdateWithoutReaccionInput, autorUncheckedUpdateWithoutReaccionInput>
    create: XOR<autorCreateWithoutReaccionInput, autorUncheckedCreateWithoutReaccionInput>
    where?: autorWhereInput
  }

  export type autorUpdateToOneWithWhereWithoutReaccionInput = {
    where?: autorWhereInput
    data: XOR<autorUpdateWithoutReaccionInput, autorUncheckedUpdateWithoutReaccionInput>
  }

  export type autorUpdateWithoutReaccionInput = {
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    foto_portada?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: usuarioUpdateOneWithoutAutorNestedInput
    pais?: paisUpdateOneWithoutAutorNestedInput
    comentario?: comentarioUpdateManyWithoutAutorNestedInput
    editorial?: editorialUpdateManyWithoutAutorNestedInput
  }

  export type autorUncheckedUpdateWithoutReaccionInput = {
    id_autor?: IntFieldUpdateOperationsInput | number
    id_pais?: NullableIntFieldUpdateOperationsInput | number | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    foto_portada?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: comentarioUncheckedUpdateManyWithoutAutorNestedInput
    editorial?: editorialUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type pl_nlCreateWithoutCap_pl_lnInput = {
    titulo?: string | null
    descripcion?: string | null
    estado: string
    genero?: generoCreateNestedOneWithoutPl_nlInput
    categoria?: categoriaCreateNestedOneWithoutPl_nlInput
  }

  export type pl_nlUncheckedCreateWithoutCap_pl_lnInput = {
    id_pl_ln?: number
    titulo?: string | null
    id_genero?: number | null
    id_categoria?: number | null
    descripcion?: string | null
    estado: string
  }

  export type pl_nlCreateOrConnectWithoutCap_pl_lnInput = {
    where: pl_nlWhereUniqueInput
    create: XOR<pl_nlCreateWithoutCap_pl_lnInput, pl_nlUncheckedCreateWithoutCap_pl_lnInput>
  }

  export type editorialCreateWithoutCap_pl_lnInput = {
    fecha_registro?: Date | string | null
    id_estado: number
    comentario?: comentarioCreateNestedManyWithoutEditorialInput
    autor?: autorCreateNestedOneWithoutEditorialInput
    pl_libre?: pl_libreCreateNestedManyWithoutEditorialInput
  }

  export type editorialUncheckedCreateWithoutCap_pl_lnInput = {
    id_editorial_pl?: number
    id_autor?: number | null
    fecha_registro?: Date | string | null
    id_estado: number
    comentario?: comentarioUncheckedCreateNestedManyWithoutEditorialInput
    pl_libre?: pl_libreUncheckedCreateNestedManyWithoutEditorialInput
  }

  export type editorialCreateOrConnectWithoutCap_pl_lnInput = {
    where: editorialWhereUniqueInput
    create: XOR<editorialCreateWithoutCap_pl_lnInput, editorialUncheckedCreateWithoutCap_pl_lnInput>
  }

  export type pl_nlUpsertWithoutCap_pl_lnInput = {
    update: XOR<pl_nlUpdateWithoutCap_pl_lnInput, pl_nlUncheckedUpdateWithoutCap_pl_lnInput>
    create: XOR<pl_nlCreateWithoutCap_pl_lnInput, pl_nlUncheckedCreateWithoutCap_pl_lnInput>
    where?: pl_nlWhereInput
  }

  export type pl_nlUpdateToOneWithWhereWithoutCap_pl_lnInput = {
    where?: pl_nlWhereInput
    data: XOR<pl_nlUpdateWithoutCap_pl_lnInput, pl_nlUncheckedUpdateWithoutCap_pl_lnInput>
  }

  export type pl_nlUpdateWithoutCap_pl_lnInput = {
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    genero?: generoUpdateOneWithoutPl_nlNestedInput
    categoria?: categoriaUpdateOneWithoutPl_nlNestedInput
  }

  export type pl_nlUncheckedUpdateWithoutCap_pl_lnInput = {
    id_pl_ln?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    id_genero?: NullableIntFieldUpdateOperationsInput | number | null
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type editorialUpsertWithoutCap_pl_lnInput = {
    update: XOR<editorialUpdateWithoutCap_pl_lnInput, editorialUncheckedUpdateWithoutCap_pl_lnInput>
    create: XOR<editorialCreateWithoutCap_pl_lnInput, editorialUncheckedCreateWithoutCap_pl_lnInput>
    where?: editorialWhereInput
  }

  export type editorialUpdateToOneWithWhereWithoutCap_pl_lnInput = {
    where?: editorialWhereInput
    data: XOR<editorialUpdateWithoutCap_pl_lnInput, editorialUncheckedUpdateWithoutCap_pl_lnInput>
  }

  export type editorialUpdateWithoutCap_pl_lnInput = {
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estado?: IntFieldUpdateOperationsInput | number
    comentario?: comentarioUpdateManyWithoutEditorialNestedInput
    autor?: autorUpdateOneWithoutEditorialNestedInput
    pl_libre?: pl_libreUpdateManyWithoutEditorialNestedInput
  }

  export type editorialUncheckedUpdateWithoutCap_pl_lnInput = {
    id_editorial_pl?: IntFieldUpdateOperationsInput | number
    id_autor?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estado?: IntFieldUpdateOperationsInput | number
    comentario?: comentarioUncheckedUpdateManyWithoutEditorialNestedInput
    pl_libre?: pl_libreUncheckedUpdateManyWithoutEditorialNestedInput
  }

  export type cap_pl_lnCreateWithoutEditorialInput = {
    nro_capitulo?: string | null
    nombre_capitulo?: string | null
    contenido?: string | null
    pl_nl?: pl_nlCreateNestedOneWithoutCap_pl_lnInput
  }

  export type cap_pl_lnUncheckedCreateWithoutEditorialInput = {
    id_cap_pl?: number
    id_pl_ln?: number | null
    nro_capitulo?: string | null
    nombre_capitulo?: string | null
    contenido?: string | null
  }

  export type cap_pl_lnCreateOrConnectWithoutEditorialInput = {
    where: cap_pl_lnWhereUniqueInput
    create: XOR<cap_pl_lnCreateWithoutEditorialInput, cap_pl_lnUncheckedCreateWithoutEditorialInput>
  }

  export type cap_pl_lnCreateManyEditorialInputEnvelope = {
    data: cap_pl_lnCreateManyEditorialInput | cap_pl_lnCreateManyEditorialInput[]
    skipDuplicates?: boolean
  }

  export type comentarioCreateWithoutEditorialInput = {
    fecha_registro?: Date | string | null
    contenido?: string | null
    id_estado?: number | null
    autor?: autorCreateNestedOneWithoutComentarioInput
  }

  export type comentarioUncheckedCreateWithoutEditorialInput = {
    id_comentario?: number
    id_autor?: number | null
    fecha_registro?: Date | string | null
    contenido?: string | null
    id_estado?: number | null
  }

  export type comentarioCreateOrConnectWithoutEditorialInput = {
    where: comentarioWhereUniqueInput
    create: XOR<comentarioCreateWithoutEditorialInput, comentarioUncheckedCreateWithoutEditorialInput>
  }

  export type comentarioCreateManyEditorialInputEnvelope = {
    data: comentarioCreateManyEditorialInput | comentarioCreateManyEditorialInput[]
    skipDuplicates?: boolean
  }

  export type autorCreateWithoutEditorialInput = {
    nick_name?: string | null
    ocupacion?: string | null
    descripcion?: string | null
    foto_perfil?: string | null
    foto_portada?: string | null
    usuario?: usuarioCreateNestedOneWithoutAutorInput
    pais?: paisCreateNestedOneWithoutAutorInput
    comentario?: comentarioCreateNestedManyWithoutAutorInput
    reaccion?: reaccionCreateNestedManyWithoutAutorInput
  }

  export type autorUncheckedCreateWithoutEditorialInput = {
    id_autor?: number
    id_pais?: number | null
    id_usuario?: number | null
    nick_name?: string | null
    ocupacion?: string | null
    descripcion?: string | null
    foto_perfil?: string | null
    foto_portada?: string | null
    comentario?: comentarioUncheckedCreateNestedManyWithoutAutorInput
    reaccion?: reaccionUncheckedCreateNestedManyWithoutAutorInput
  }

  export type autorCreateOrConnectWithoutEditorialInput = {
    where: autorWhereUniqueInput
    create: XOR<autorCreateWithoutEditorialInput, autorUncheckedCreateWithoutEditorialInput>
  }

  export type pl_libreCreateWithoutEditorialInput = {
    contenido?: string | null
    categoria?: categoriaCreateNestedOneWithoutPl_libreInput
    etiqueta?: etiquetaCreateNestedOneWithoutPl_libreInput
  }

  export type pl_libreUncheckedCreateWithoutEditorialInput = {
    id_pl_libre?: number
    id_categoria?: number | null
    id_etiqueta?: number | null
    contenido?: string | null
  }

  export type pl_libreCreateOrConnectWithoutEditorialInput = {
    where: pl_libreWhereUniqueInput
    create: XOR<pl_libreCreateWithoutEditorialInput, pl_libreUncheckedCreateWithoutEditorialInput>
  }

  export type pl_libreCreateManyEditorialInputEnvelope = {
    data: pl_libreCreateManyEditorialInput | pl_libreCreateManyEditorialInput[]
    skipDuplicates?: boolean
  }

  export type cap_pl_lnUpsertWithWhereUniqueWithoutEditorialInput = {
    where: cap_pl_lnWhereUniqueInput
    update: XOR<cap_pl_lnUpdateWithoutEditorialInput, cap_pl_lnUncheckedUpdateWithoutEditorialInput>
    create: XOR<cap_pl_lnCreateWithoutEditorialInput, cap_pl_lnUncheckedCreateWithoutEditorialInput>
  }

  export type cap_pl_lnUpdateWithWhereUniqueWithoutEditorialInput = {
    where: cap_pl_lnWhereUniqueInput
    data: XOR<cap_pl_lnUpdateWithoutEditorialInput, cap_pl_lnUncheckedUpdateWithoutEditorialInput>
  }

  export type cap_pl_lnUpdateManyWithWhereWithoutEditorialInput = {
    where: cap_pl_lnScalarWhereInput
    data: XOR<cap_pl_lnUpdateManyMutationInput, cap_pl_lnUncheckedUpdateManyWithoutEditorialInput>
  }

  export type cap_pl_lnScalarWhereInput = {
    AND?: cap_pl_lnScalarWhereInput | cap_pl_lnScalarWhereInput[]
    OR?: cap_pl_lnScalarWhereInput[]
    NOT?: cap_pl_lnScalarWhereInput | cap_pl_lnScalarWhereInput[]
    id_cap_pl?: IntFilter<"cap_pl_ln"> | number
    id_editorial_pl?: IntNullableFilter<"cap_pl_ln"> | number | null
    id_pl_ln?: IntNullableFilter<"cap_pl_ln"> | number | null
    nro_capitulo?: StringNullableFilter<"cap_pl_ln"> | string | null
    nombre_capitulo?: StringNullableFilter<"cap_pl_ln"> | string | null
    contenido?: StringNullableFilter<"cap_pl_ln"> | string | null
  }

  export type comentarioUpsertWithWhereUniqueWithoutEditorialInput = {
    where: comentarioWhereUniqueInput
    update: XOR<comentarioUpdateWithoutEditorialInput, comentarioUncheckedUpdateWithoutEditorialInput>
    create: XOR<comentarioCreateWithoutEditorialInput, comentarioUncheckedCreateWithoutEditorialInput>
  }

  export type comentarioUpdateWithWhereUniqueWithoutEditorialInput = {
    where: comentarioWhereUniqueInput
    data: XOR<comentarioUpdateWithoutEditorialInput, comentarioUncheckedUpdateWithoutEditorialInput>
  }

  export type comentarioUpdateManyWithWhereWithoutEditorialInput = {
    where: comentarioScalarWhereInput
    data: XOR<comentarioUpdateManyMutationInput, comentarioUncheckedUpdateManyWithoutEditorialInput>
  }

  export type autorUpsertWithoutEditorialInput = {
    update: XOR<autorUpdateWithoutEditorialInput, autorUncheckedUpdateWithoutEditorialInput>
    create: XOR<autorCreateWithoutEditorialInput, autorUncheckedCreateWithoutEditorialInput>
    where?: autorWhereInput
  }

  export type autorUpdateToOneWithWhereWithoutEditorialInput = {
    where?: autorWhereInput
    data: XOR<autorUpdateWithoutEditorialInput, autorUncheckedUpdateWithoutEditorialInput>
  }

  export type autorUpdateWithoutEditorialInput = {
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    foto_portada?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: usuarioUpdateOneWithoutAutorNestedInput
    pais?: paisUpdateOneWithoutAutorNestedInput
    comentario?: comentarioUpdateManyWithoutAutorNestedInput
    reaccion?: reaccionUpdateManyWithoutAutorNestedInput
  }

  export type autorUncheckedUpdateWithoutEditorialInput = {
    id_autor?: IntFieldUpdateOperationsInput | number
    id_pais?: NullableIntFieldUpdateOperationsInput | number | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    foto_portada?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: comentarioUncheckedUpdateManyWithoutAutorNestedInput
    reaccion?: reaccionUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type pl_libreUpsertWithWhereUniqueWithoutEditorialInput = {
    where: pl_libreWhereUniqueInput
    update: XOR<pl_libreUpdateWithoutEditorialInput, pl_libreUncheckedUpdateWithoutEditorialInput>
    create: XOR<pl_libreCreateWithoutEditorialInput, pl_libreUncheckedCreateWithoutEditorialInput>
  }

  export type pl_libreUpdateWithWhereUniqueWithoutEditorialInput = {
    where: pl_libreWhereUniqueInput
    data: XOR<pl_libreUpdateWithoutEditorialInput, pl_libreUncheckedUpdateWithoutEditorialInput>
  }

  export type pl_libreUpdateManyWithWhereWithoutEditorialInput = {
    where: pl_libreScalarWhereInput
    data: XOR<pl_libreUpdateManyMutationInput, pl_libreUncheckedUpdateManyWithoutEditorialInput>
  }

  export type categoriaCreateWithoutPl_libreInput = {
    descripcion?: string | null
    genero?: generoCreateNestedManyWithoutCategoriaInput
    pl_nl?: pl_nlCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUncheckedCreateWithoutPl_libreInput = {
    id_categoria?: number
    descripcion?: string | null
    genero?: generoUncheckedCreateNestedManyWithoutCategoriaInput
    pl_nl?: pl_nlUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaCreateOrConnectWithoutPl_libreInput = {
    where: categoriaWhereUniqueInput
    create: XOR<categoriaCreateWithoutPl_libreInput, categoriaUncheckedCreateWithoutPl_libreInput>
  }

  export type editorialCreateWithoutPl_libreInput = {
    fecha_registro?: Date | string | null
    id_estado: number
    cap_pl_ln?: cap_pl_lnCreateNestedManyWithoutEditorialInput
    comentario?: comentarioCreateNestedManyWithoutEditorialInput
    autor?: autorCreateNestedOneWithoutEditorialInput
  }

  export type editorialUncheckedCreateWithoutPl_libreInput = {
    id_editorial_pl?: number
    id_autor?: number | null
    fecha_registro?: Date | string | null
    id_estado: number
    cap_pl_ln?: cap_pl_lnUncheckedCreateNestedManyWithoutEditorialInput
    comentario?: comentarioUncheckedCreateNestedManyWithoutEditorialInput
  }

  export type editorialCreateOrConnectWithoutPl_libreInput = {
    where: editorialWhereUniqueInput
    create: XOR<editorialCreateWithoutPl_libreInput, editorialUncheckedCreateWithoutPl_libreInput>
  }

  export type etiquetaCreateWithoutPl_libreInput = {
    nombre?: string | null
  }

  export type etiquetaUncheckedCreateWithoutPl_libreInput = {
    id_etiqueta?: number
    nombre?: string | null
  }

  export type etiquetaCreateOrConnectWithoutPl_libreInput = {
    where: etiquetaWhereUniqueInput
    create: XOR<etiquetaCreateWithoutPl_libreInput, etiquetaUncheckedCreateWithoutPl_libreInput>
  }

  export type categoriaUpsertWithoutPl_libreInput = {
    update: XOR<categoriaUpdateWithoutPl_libreInput, categoriaUncheckedUpdateWithoutPl_libreInput>
    create: XOR<categoriaCreateWithoutPl_libreInput, categoriaUncheckedCreateWithoutPl_libreInput>
    where?: categoriaWhereInput
  }

  export type categoriaUpdateToOneWithWhereWithoutPl_libreInput = {
    where?: categoriaWhereInput
    data: XOR<categoriaUpdateWithoutPl_libreInput, categoriaUncheckedUpdateWithoutPl_libreInput>
  }

  export type categoriaUpdateWithoutPl_libreInput = {
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: generoUpdateManyWithoutCategoriaNestedInput
    pl_nl?: pl_nlUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaUncheckedUpdateWithoutPl_libreInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: generoUncheckedUpdateManyWithoutCategoriaNestedInput
    pl_nl?: pl_nlUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type editorialUpsertWithoutPl_libreInput = {
    update: XOR<editorialUpdateWithoutPl_libreInput, editorialUncheckedUpdateWithoutPl_libreInput>
    create: XOR<editorialCreateWithoutPl_libreInput, editorialUncheckedCreateWithoutPl_libreInput>
    where?: editorialWhereInput
  }

  export type editorialUpdateToOneWithWhereWithoutPl_libreInput = {
    where?: editorialWhereInput
    data: XOR<editorialUpdateWithoutPl_libreInput, editorialUncheckedUpdateWithoutPl_libreInput>
  }

  export type editorialUpdateWithoutPl_libreInput = {
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estado?: IntFieldUpdateOperationsInput | number
    cap_pl_ln?: cap_pl_lnUpdateManyWithoutEditorialNestedInput
    comentario?: comentarioUpdateManyWithoutEditorialNestedInput
    autor?: autorUpdateOneWithoutEditorialNestedInput
  }

  export type editorialUncheckedUpdateWithoutPl_libreInput = {
    id_editorial_pl?: IntFieldUpdateOperationsInput | number
    id_autor?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estado?: IntFieldUpdateOperationsInput | number
    cap_pl_ln?: cap_pl_lnUncheckedUpdateManyWithoutEditorialNestedInput
    comentario?: comentarioUncheckedUpdateManyWithoutEditorialNestedInput
  }

  export type etiquetaUpsertWithoutPl_libreInput = {
    update: XOR<etiquetaUpdateWithoutPl_libreInput, etiquetaUncheckedUpdateWithoutPl_libreInput>
    create: XOR<etiquetaCreateWithoutPl_libreInput, etiquetaUncheckedCreateWithoutPl_libreInput>
    where?: etiquetaWhereInput
  }

  export type etiquetaUpdateToOneWithWhereWithoutPl_libreInput = {
    where?: etiquetaWhereInput
    data: XOR<etiquetaUpdateWithoutPl_libreInput, etiquetaUncheckedUpdateWithoutPl_libreInput>
  }

  export type etiquetaUpdateWithoutPl_libreInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type etiquetaUncheckedUpdateWithoutPl_libreInput = {
    id_etiqueta?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cap_pl_lnCreateWithoutPl_nlInput = {
    nro_capitulo?: string | null
    nombre_capitulo?: string | null
    contenido?: string | null
    editorial?: editorialCreateNestedOneWithoutCap_pl_lnInput
  }

  export type cap_pl_lnUncheckedCreateWithoutPl_nlInput = {
    id_cap_pl?: number
    id_editorial_pl?: number | null
    nro_capitulo?: string | null
    nombre_capitulo?: string | null
    contenido?: string | null
  }

  export type cap_pl_lnCreateOrConnectWithoutPl_nlInput = {
    where: cap_pl_lnWhereUniqueInput
    create: XOR<cap_pl_lnCreateWithoutPl_nlInput, cap_pl_lnUncheckedCreateWithoutPl_nlInput>
  }

  export type cap_pl_lnCreateManyPl_nlInputEnvelope = {
    data: cap_pl_lnCreateManyPl_nlInput | cap_pl_lnCreateManyPl_nlInput[]
    skipDuplicates?: boolean
  }

  export type generoCreateWithoutPl_nlInput = {
    nombre?: string | null
    categoria?: categoriaCreateNestedOneWithoutGeneroInput
  }

  export type generoUncheckedCreateWithoutPl_nlInput = {
    id_genero?: number
    id_categoria?: number | null
    nombre?: string | null
  }

  export type generoCreateOrConnectWithoutPl_nlInput = {
    where: generoWhereUniqueInput
    create: XOR<generoCreateWithoutPl_nlInput, generoUncheckedCreateWithoutPl_nlInput>
  }

  export type categoriaCreateWithoutPl_nlInput = {
    descripcion?: string | null
    genero?: generoCreateNestedManyWithoutCategoriaInput
    pl_libre?: pl_libreCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUncheckedCreateWithoutPl_nlInput = {
    id_categoria?: number
    descripcion?: string | null
    genero?: generoUncheckedCreateNestedManyWithoutCategoriaInput
    pl_libre?: pl_libreUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaCreateOrConnectWithoutPl_nlInput = {
    where: categoriaWhereUniqueInput
    create: XOR<categoriaCreateWithoutPl_nlInput, categoriaUncheckedCreateWithoutPl_nlInput>
  }

  export type cap_pl_lnUpsertWithWhereUniqueWithoutPl_nlInput = {
    where: cap_pl_lnWhereUniqueInput
    update: XOR<cap_pl_lnUpdateWithoutPl_nlInput, cap_pl_lnUncheckedUpdateWithoutPl_nlInput>
    create: XOR<cap_pl_lnCreateWithoutPl_nlInput, cap_pl_lnUncheckedCreateWithoutPl_nlInput>
  }

  export type cap_pl_lnUpdateWithWhereUniqueWithoutPl_nlInput = {
    where: cap_pl_lnWhereUniqueInput
    data: XOR<cap_pl_lnUpdateWithoutPl_nlInput, cap_pl_lnUncheckedUpdateWithoutPl_nlInput>
  }

  export type cap_pl_lnUpdateManyWithWhereWithoutPl_nlInput = {
    where: cap_pl_lnScalarWhereInput
    data: XOR<cap_pl_lnUpdateManyMutationInput, cap_pl_lnUncheckedUpdateManyWithoutPl_nlInput>
  }

  export type generoUpsertWithoutPl_nlInput = {
    update: XOR<generoUpdateWithoutPl_nlInput, generoUncheckedUpdateWithoutPl_nlInput>
    create: XOR<generoCreateWithoutPl_nlInput, generoUncheckedCreateWithoutPl_nlInput>
    where?: generoWhereInput
  }

  export type generoUpdateToOneWithWhereWithoutPl_nlInput = {
    where?: generoWhereInput
    data: XOR<generoUpdateWithoutPl_nlInput, generoUncheckedUpdateWithoutPl_nlInput>
  }

  export type generoUpdateWithoutPl_nlInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: categoriaUpdateOneWithoutGeneroNestedInput
  }

  export type generoUncheckedUpdateWithoutPl_nlInput = {
    id_genero?: IntFieldUpdateOperationsInput | number
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriaUpsertWithoutPl_nlInput = {
    update: XOR<categoriaUpdateWithoutPl_nlInput, categoriaUncheckedUpdateWithoutPl_nlInput>
    create: XOR<categoriaCreateWithoutPl_nlInput, categoriaUncheckedCreateWithoutPl_nlInput>
    where?: categoriaWhereInput
  }

  export type categoriaUpdateToOneWithWhereWithoutPl_nlInput = {
    where?: categoriaWhereInput
    data: XOR<categoriaUpdateWithoutPl_nlInput, categoriaUncheckedUpdateWithoutPl_nlInput>
  }

  export type categoriaUpdateWithoutPl_nlInput = {
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: generoUpdateManyWithoutCategoriaNestedInput
    pl_libre?: pl_libreUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaUncheckedUpdateWithoutPl_nlInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: generoUncheckedUpdateManyWithoutCategoriaNestedInput
    pl_libre?: pl_libreUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type autorCreateWithoutComentarioInput = {
    nick_name?: string | null
    ocupacion?: string | null
    descripcion?: string | null
    foto_perfil?: string | null
    foto_portada?: string | null
    usuario?: usuarioCreateNestedOneWithoutAutorInput
    pais?: paisCreateNestedOneWithoutAutorInput
    editorial?: editorialCreateNestedManyWithoutAutorInput
    reaccion?: reaccionCreateNestedManyWithoutAutorInput
  }

  export type autorUncheckedCreateWithoutComentarioInput = {
    id_autor?: number
    id_pais?: number | null
    id_usuario?: number | null
    nick_name?: string | null
    ocupacion?: string | null
    descripcion?: string | null
    foto_perfil?: string | null
    foto_portada?: string | null
    editorial?: editorialUncheckedCreateNestedManyWithoutAutorInput
    reaccion?: reaccionUncheckedCreateNestedManyWithoutAutorInput
  }

  export type autorCreateOrConnectWithoutComentarioInput = {
    where: autorWhereUniqueInput
    create: XOR<autorCreateWithoutComentarioInput, autorUncheckedCreateWithoutComentarioInput>
  }

  export type editorialCreateWithoutComentarioInput = {
    fecha_registro?: Date | string | null
    id_estado: number
    cap_pl_ln?: cap_pl_lnCreateNestedManyWithoutEditorialInput
    autor?: autorCreateNestedOneWithoutEditorialInput
    pl_libre?: pl_libreCreateNestedManyWithoutEditorialInput
  }

  export type editorialUncheckedCreateWithoutComentarioInput = {
    id_editorial_pl?: number
    id_autor?: number | null
    fecha_registro?: Date | string | null
    id_estado: number
    cap_pl_ln?: cap_pl_lnUncheckedCreateNestedManyWithoutEditorialInput
    pl_libre?: pl_libreUncheckedCreateNestedManyWithoutEditorialInput
  }

  export type editorialCreateOrConnectWithoutComentarioInput = {
    where: editorialWhereUniqueInput
    create: XOR<editorialCreateWithoutComentarioInput, editorialUncheckedCreateWithoutComentarioInput>
  }

  export type autorUpsertWithoutComentarioInput = {
    update: XOR<autorUpdateWithoutComentarioInput, autorUncheckedUpdateWithoutComentarioInput>
    create: XOR<autorCreateWithoutComentarioInput, autorUncheckedCreateWithoutComentarioInput>
    where?: autorWhereInput
  }

  export type autorUpdateToOneWithWhereWithoutComentarioInput = {
    where?: autorWhereInput
    data: XOR<autorUpdateWithoutComentarioInput, autorUncheckedUpdateWithoutComentarioInput>
  }

  export type autorUpdateWithoutComentarioInput = {
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    foto_portada?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: usuarioUpdateOneWithoutAutorNestedInput
    pais?: paisUpdateOneWithoutAutorNestedInput
    editorial?: editorialUpdateManyWithoutAutorNestedInput
    reaccion?: reaccionUpdateManyWithoutAutorNestedInput
  }

  export type autorUncheckedUpdateWithoutComentarioInput = {
    id_autor?: IntFieldUpdateOperationsInput | number
    id_pais?: NullableIntFieldUpdateOperationsInput | number | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    foto_portada?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: editorialUncheckedUpdateManyWithoutAutorNestedInput
    reaccion?: reaccionUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type editorialUpsertWithoutComentarioInput = {
    update: XOR<editorialUpdateWithoutComentarioInput, editorialUncheckedUpdateWithoutComentarioInput>
    create: XOR<editorialCreateWithoutComentarioInput, editorialUncheckedCreateWithoutComentarioInput>
    where?: editorialWhereInput
  }

  export type editorialUpdateToOneWithWhereWithoutComentarioInput = {
    where?: editorialWhereInput
    data: XOR<editorialUpdateWithoutComentarioInput, editorialUncheckedUpdateWithoutComentarioInput>
  }

  export type editorialUpdateWithoutComentarioInput = {
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estado?: IntFieldUpdateOperationsInput | number
    cap_pl_ln?: cap_pl_lnUpdateManyWithoutEditorialNestedInput
    autor?: autorUpdateOneWithoutEditorialNestedInput
    pl_libre?: pl_libreUpdateManyWithoutEditorialNestedInput
  }

  export type editorialUncheckedUpdateWithoutComentarioInput = {
    id_editorial_pl?: IntFieldUpdateOperationsInput | number
    id_autor?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estado?: IntFieldUpdateOperationsInput | number
    cap_pl_ln?: cap_pl_lnUncheckedUpdateManyWithoutEditorialNestedInput
    pl_libre?: pl_libreUncheckedUpdateManyWithoutEditorialNestedInput
  }

  export type generoCreateManyCategoriaInput = {
    id_genero?: number
    nombre?: string | null
  }

  export type pl_libreCreateManyCategoriaInput = {
    id_pl_libre?: number
    id_editorial_pl?: number | null
    id_etiqueta?: number | null
    contenido?: string | null
  }

  export type pl_nlCreateManyCategoriaInput = {
    id_pl_ln?: number
    titulo?: string | null
    id_genero?: number | null
    descripcion?: string | null
    estado: string
  }

  export type generoUpdateWithoutCategoriaInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    pl_nl?: pl_nlUpdateManyWithoutGeneroNestedInput
  }

  export type generoUncheckedUpdateWithoutCategoriaInput = {
    id_genero?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    pl_nl?: pl_nlUncheckedUpdateManyWithoutGeneroNestedInput
  }

  export type generoUncheckedUpdateManyWithoutCategoriaInput = {
    id_genero?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pl_libreUpdateWithoutCategoriaInput = {
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: editorialUpdateOneWithoutPl_libreNestedInput
    etiqueta?: etiquetaUpdateOneWithoutPl_libreNestedInput
  }

  export type pl_libreUncheckedUpdateWithoutCategoriaInput = {
    id_pl_libre?: IntFieldUpdateOperationsInput | number
    id_editorial_pl?: NullableIntFieldUpdateOperationsInput | number | null
    id_etiqueta?: NullableIntFieldUpdateOperationsInput | number | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pl_libreUncheckedUpdateManyWithoutCategoriaInput = {
    id_pl_libre?: IntFieldUpdateOperationsInput | number
    id_editorial_pl?: NullableIntFieldUpdateOperationsInput | number | null
    id_etiqueta?: NullableIntFieldUpdateOperationsInput | number | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pl_nlUpdateWithoutCategoriaInput = {
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    cap_pl_ln?: cap_pl_lnUpdateManyWithoutPl_nlNestedInput
    genero?: generoUpdateOneWithoutPl_nlNestedInput
  }

  export type pl_nlUncheckedUpdateWithoutCategoriaInput = {
    id_pl_ln?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    id_genero?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    cap_pl_ln?: cap_pl_lnUncheckedUpdateManyWithoutPl_nlNestedInput
  }

  export type pl_nlUncheckedUpdateManyWithoutCategoriaInput = {
    id_pl_ln?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    id_genero?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type pl_libreCreateManyEtiquetaInput = {
    id_pl_libre?: number
    id_categoria?: number | null
    id_editorial_pl?: number | null
    contenido?: string | null
  }

  export type pl_libreUpdateWithoutEtiquetaInput = {
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: categoriaUpdateOneWithoutPl_libreNestedInput
    editorial?: editorialUpdateOneWithoutPl_libreNestedInput
  }

  export type pl_libreUncheckedUpdateWithoutEtiquetaInput = {
    id_pl_libre?: IntFieldUpdateOperationsInput | number
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_editorial_pl?: NullableIntFieldUpdateOperationsInput | number | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pl_libreUncheckedUpdateManyWithoutEtiquetaInput = {
    id_pl_libre?: IntFieldUpdateOperationsInput | number
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_editorial_pl?: NullableIntFieldUpdateOperationsInput | number | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pl_nlCreateManyGeneroInput = {
    id_pl_ln?: number
    titulo?: string | null
    id_categoria?: number | null
    descripcion?: string | null
    estado: string
  }

  export type pl_nlUpdateWithoutGeneroInput = {
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    cap_pl_ln?: cap_pl_lnUpdateManyWithoutPl_nlNestedInput
    categoria?: categoriaUpdateOneWithoutPl_nlNestedInput
  }

  export type pl_nlUncheckedUpdateWithoutGeneroInput = {
    id_pl_ln?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    cap_pl_ln?: cap_pl_lnUncheckedUpdateManyWithoutPl_nlNestedInput
  }

  export type pl_nlUncheckedUpdateManyWithoutGeneroInput = {
    id_pl_ln?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioCreateManyPersonaInput = {
    id_usuario?: number
    correo?: string | null
    contrasenia?: string | null
    verificacion_email?: boolean | null
    id_estado?: number | null
  }

  export type usuarioUpdateWithoutPersonaInput = {
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    verificacion_email?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    autor?: autorUpdateManyWithoutUsuarioNestedInput
    seguido_seguido_id_user_seguidorTousuario?: seguidoUpdateManyWithoutUsuario_seguido_id_user_seguidorTousuarioNestedInput
    seguido_seguido_id_user_seguidoTousuario?: seguidoUpdateManyWithoutUsuario_seguido_id_user_seguidoTousuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutPersonaInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    verificacion_email?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    autor?: autorUncheckedUpdateManyWithoutUsuarioNestedInput
    seguido_seguido_id_user_seguidorTousuario?: seguidoUncheckedUpdateManyWithoutUsuario_seguido_id_user_seguidorTousuarioNestedInput
    seguido_seguido_id_user_seguidoTousuario?: seguidoUncheckedUpdateManyWithoutUsuario_seguido_id_user_seguidoTousuarioNestedInput
  }

  export type usuarioUncheckedUpdateManyWithoutPersonaInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    verificacion_email?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type autorCreateManyUsuarioInput = {
    id_autor?: number
    id_pais?: number | null
    nick_name?: string | null
    ocupacion?: string | null
    descripcion?: string | null
    foto_perfil?: string | null
    foto_portada?: string | null
  }

  export type seguidoCreateManyUsuario_seguido_id_user_seguidorTousuarioInput = {
    id_seguido?: number
    id_user_seguido?: number | null
    id_seguimiento?: number | null
    fecha_seguimiento?: Date | string | null
  }

  export type seguidoCreateManyUsuario_seguido_id_user_seguidoTousuarioInput = {
    id_seguido?: number
    id_user_seguidor?: number | null
    id_seguimiento?: number | null
    fecha_seguimiento?: Date | string | null
  }

  export type autorUpdateWithoutUsuarioInput = {
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    foto_portada?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: paisUpdateOneWithoutAutorNestedInput
    comentario?: comentarioUpdateManyWithoutAutorNestedInput
    editorial?: editorialUpdateManyWithoutAutorNestedInput
    reaccion?: reaccionUpdateManyWithoutAutorNestedInput
  }

  export type autorUncheckedUpdateWithoutUsuarioInput = {
    id_autor?: IntFieldUpdateOperationsInput | number
    id_pais?: NullableIntFieldUpdateOperationsInput | number | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    foto_portada?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: comentarioUncheckedUpdateManyWithoutAutorNestedInput
    editorial?: editorialUncheckedUpdateManyWithoutAutorNestedInput
    reaccion?: reaccionUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type autorUncheckedUpdateManyWithoutUsuarioInput = {
    id_autor?: IntFieldUpdateOperationsInput | number
    id_pais?: NullableIntFieldUpdateOperationsInput | number | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    foto_portada?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type seguidoUpdateWithoutUsuario_seguido_id_user_seguidorTousuarioInput = {
    fecha_seguimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario_seguido_id_user_seguidoTousuario?: usuarioUpdateOneWithoutSeguido_seguido_id_user_seguidoTousuarioNestedInput
    tipo_seguimiento?: tipo_seguimientoUpdateOneWithoutSeguidoNestedInput
  }

  export type seguidoUncheckedUpdateWithoutUsuario_seguido_id_user_seguidorTousuarioInput = {
    id_seguido?: IntFieldUpdateOperationsInput | number
    id_user_seguido?: NullableIntFieldUpdateOperationsInput | number | null
    id_seguimiento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_seguimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type seguidoUncheckedUpdateManyWithoutUsuario_seguido_id_user_seguidorTousuarioInput = {
    id_seguido?: IntFieldUpdateOperationsInput | number
    id_user_seguido?: NullableIntFieldUpdateOperationsInput | number | null
    id_seguimiento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_seguimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type seguidoUpdateWithoutUsuario_seguido_id_user_seguidoTousuarioInput = {
    fecha_seguimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario_seguido_id_user_seguidorTousuario?: usuarioUpdateOneWithoutSeguido_seguido_id_user_seguidorTousuarioNestedInput
    tipo_seguimiento?: tipo_seguimientoUpdateOneWithoutSeguidoNestedInput
  }

  export type seguidoUncheckedUpdateWithoutUsuario_seguido_id_user_seguidoTousuarioInput = {
    id_seguido?: IntFieldUpdateOperationsInput | number
    id_user_seguidor?: NullableIntFieldUpdateOperationsInput | number | null
    id_seguimiento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_seguimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type seguidoUncheckedUpdateManyWithoutUsuario_seguido_id_user_seguidoTousuarioInput = {
    id_seguido?: IntFieldUpdateOperationsInput | number
    id_user_seguidor?: NullableIntFieldUpdateOperationsInput | number | null
    id_seguimiento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_seguimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type comentarioCreateManyAutorInput = {
    id_comentario?: number
    id_editorial?: number | null
    fecha_registro?: Date | string | null
    contenido?: string | null
    id_estado?: number | null
  }

  export type editorialCreateManyAutorInput = {
    id_editorial_pl?: number
    fecha_registro?: Date | string | null
    id_estado: number
  }

  export type reaccionCreateManyAutorInput = {
    id_reaccion?: number
    id_capitulo?: number | null
    id_publicacion_l?: number | null
    id_editorial?: number | null
    fecha?: Date | string | null
  }

  export type comentarioUpdateWithoutAutorInput = {
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    editorial?: editorialUpdateOneWithoutComentarioNestedInput
  }

  export type comentarioUncheckedUpdateWithoutAutorInput = {
    id_comentario?: IntFieldUpdateOperationsInput | number
    id_editorial?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type comentarioUncheckedUpdateManyWithoutAutorInput = {
    id_comentario?: IntFieldUpdateOperationsInput | number
    id_editorial?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type editorialUpdateWithoutAutorInput = {
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estado?: IntFieldUpdateOperationsInput | number
    cap_pl_ln?: cap_pl_lnUpdateManyWithoutEditorialNestedInput
    comentario?: comentarioUpdateManyWithoutEditorialNestedInput
    pl_libre?: pl_libreUpdateManyWithoutEditorialNestedInput
  }

  export type editorialUncheckedUpdateWithoutAutorInput = {
    id_editorial_pl?: IntFieldUpdateOperationsInput | number
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estado?: IntFieldUpdateOperationsInput | number
    cap_pl_ln?: cap_pl_lnUncheckedUpdateManyWithoutEditorialNestedInput
    comentario?: comentarioUncheckedUpdateManyWithoutEditorialNestedInput
    pl_libre?: pl_libreUncheckedUpdateManyWithoutEditorialNestedInput
  }

  export type editorialUncheckedUpdateManyWithoutAutorInput = {
    id_editorial_pl?: IntFieldUpdateOperationsInput | number
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estado?: IntFieldUpdateOperationsInput | number
  }

  export type reaccionUpdateWithoutAutorInput = {
    id_capitulo?: NullableIntFieldUpdateOperationsInput | number | null
    id_publicacion_l?: NullableIntFieldUpdateOperationsInput | number | null
    id_editorial?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reaccionUncheckedUpdateWithoutAutorInput = {
    id_reaccion?: IntFieldUpdateOperationsInput | number
    id_capitulo?: NullableIntFieldUpdateOperationsInput | number | null
    id_publicacion_l?: NullableIntFieldUpdateOperationsInput | number | null
    id_editorial?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reaccionUncheckedUpdateManyWithoutAutorInput = {
    id_reaccion?: IntFieldUpdateOperationsInput | number
    id_capitulo?: NullableIntFieldUpdateOperationsInput | number | null
    id_publicacion_l?: NullableIntFieldUpdateOperationsInput | number | null
    id_editorial?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type autorCreateManyPaisInput = {
    id_autor?: number
    id_usuario?: number | null
    nick_name?: string | null
    ocupacion?: string | null
    descripcion?: string | null
    foto_perfil?: string | null
    foto_portada?: string | null
  }

  export type autorUpdateWithoutPaisInput = {
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    foto_portada?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: usuarioUpdateOneWithoutAutorNestedInput
    comentario?: comentarioUpdateManyWithoutAutorNestedInput
    editorial?: editorialUpdateManyWithoutAutorNestedInput
    reaccion?: reaccionUpdateManyWithoutAutorNestedInput
  }

  export type autorUncheckedUpdateWithoutPaisInput = {
    id_autor?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    foto_portada?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: comentarioUncheckedUpdateManyWithoutAutorNestedInput
    editorial?: editorialUncheckedUpdateManyWithoutAutorNestedInput
    reaccion?: reaccionUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type autorUncheckedUpdateManyWithoutPaisInput = {
    id_autor?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    ocupacion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    foto_portada?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type seguidoCreateManyTipo_seguimientoInput = {
    id_seguido?: number
    id_user_seguidor?: number | null
    id_user_seguido?: number | null
    fecha_seguimiento?: Date | string | null
  }

  export type seguidoUpdateWithoutTipo_seguimientoInput = {
    fecha_seguimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario_seguido_id_user_seguidorTousuario?: usuarioUpdateOneWithoutSeguido_seguido_id_user_seguidorTousuarioNestedInput
    usuario_seguido_id_user_seguidoTousuario?: usuarioUpdateOneWithoutSeguido_seguido_id_user_seguidoTousuarioNestedInput
  }

  export type seguidoUncheckedUpdateWithoutTipo_seguimientoInput = {
    id_seguido?: IntFieldUpdateOperationsInput | number
    id_user_seguidor?: NullableIntFieldUpdateOperationsInput | number | null
    id_user_seguido?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_seguimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type seguidoUncheckedUpdateManyWithoutTipo_seguimientoInput = {
    id_seguido?: IntFieldUpdateOperationsInput | number
    id_user_seguidor?: NullableIntFieldUpdateOperationsInput | number | null
    id_user_seguido?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_seguimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cap_pl_lnCreateManyEditorialInput = {
    id_cap_pl?: number
    id_pl_ln?: number | null
    nro_capitulo?: string | null
    nombre_capitulo?: string | null
    contenido?: string | null
  }

  export type comentarioCreateManyEditorialInput = {
    id_comentario?: number
    id_autor?: number | null
    fecha_registro?: Date | string | null
    contenido?: string | null
    id_estado?: number | null
  }

  export type pl_libreCreateManyEditorialInput = {
    id_pl_libre?: number
    id_categoria?: number | null
    id_etiqueta?: number | null
    contenido?: string | null
  }

  export type cap_pl_lnUpdateWithoutEditorialInput = {
    nro_capitulo?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_capitulo?: NullableStringFieldUpdateOperationsInput | string | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
    pl_nl?: pl_nlUpdateOneWithoutCap_pl_lnNestedInput
  }

  export type cap_pl_lnUncheckedUpdateWithoutEditorialInput = {
    id_cap_pl?: IntFieldUpdateOperationsInput | number
    id_pl_ln?: NullableIntFieldUpdateOperationsInput | number | null
    nro_capitulo?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_capitulo?: NullableStringFieldUpdateOperationsInput | string | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cap_pl_lnUncheckedUpdateManyWithoutEditorialInput = {
    id_cap_pl?: IntFieldUpdateOperationsInput | number
    id_pl_ln?: NullableIntFieldUpdateOperationsInput | number | null
    nro_capitulo?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_capitulo?: NullableStringFieldUpdateOperationsInput | string | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type comentarioUpdateWithoutEditorialInput = {
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    autor?: autorUpdateOneWithoutComentarioNestedInput
  }

  export type comentarioUncheckedUpdateWithoutEditorialInput = {
    id_comentario?: IntFieldUpdateOperationsInput | number
    id_autor?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type comentarioUncheckedUpdateManyWithoutEditorialInput = {
    id_comentario?: IntFieldUpdateOperationsInput | number
    id_autor?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
    id_estado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type pl_libreUpdateWithoutEditorialInput = {
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: categoriaUpdateOneWithoutPl_libreNestedInput
    etiqueta?: etiquetaUpdateOneWithoutPl_libreNestedInput
  }

  export type pl_libreUncheckedUpdateWithoutEditorialInput = {
    id_pl_libre?: IntFieldUpdateOperationsInput | number
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_etiqueta?: NullableIntFieldUpdateOperationsInput | number | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pl_libreUncheckedUpdateManyWithoutEditorialInput = {
    id_pl_libre?: IntFieldUpdateOperationsInput | number
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_etiqueta?: NullableIntFieldUpdateOperationsInput | number | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cap_pl_lnCreateManyPl_nlInput = {
    id_cap_pl?: number
    id_editorial_pl?: number | null
    nro_capitulo?: string | null
    nombre_capitulo?: string | null
    contenido?: string | null
  }

  export type cap_pl_lnUpdateWithoutPl_nlInput = {
    nro_capitulo?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_capitulo?: NullableStringFieldUpdateOperationsInput | string | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: editorialUpdateOneWithoutCap_pl_lnNestedInput
  }

  export type cap_pl_lnUncheckedUpdateWithoutPl_nlInput = {
    id_cap_pl?: IntFieldUpdateOperationsInput | number
    id_editorial_pl?: NullableIntFieldUpdateOperationsInput | number | null
    nro_capitulo?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_capitulo?: NullableStringFieldUpdateOperationsInput | string | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cap_pl_lnUncheckedUpdateManyWithoutPl_nlInput = {
    id_cap_pl?: IntFieldUpdateOperationsInput | number
    id_editorial_pl?: NullableIntFieldUpdateOperationsInput | number | null
    nro_capitulo?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_capitulo?: NullableStringFieldUpdateOperationsInput | string | null
    contenido?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CategoriaCountOutputTypeDefaultArgs instead
     */
    export type CategoriaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoriaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EtiquetaCountOutputTypeDefaultArgs instead
     */
    export type EtiquetaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EtiquetaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GeneroCountOutputTypeDefaultArgs instead
     */
    export type GeneroCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GeneroCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PersonaCountOutputTypeDefaultArgs instead
     */
    export type PersonaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PersonaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AutorCountOutputTypeDefaultArgs instead
     */
    export type AutorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AutorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaisCountOutputTypeDefaultArgs instead
     */
    export type PaisCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaisCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Tipo_seguimientoCountOutputTypeDefaultArgs instead
     */
    export type Tipo_seguimientoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Tipo_seguimientoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EditorialCountOutputTypeDefaultArgs instead
     */
    export type EditorialCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EditorialCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Pl_nlCountOutputTypeDefaultArgs instead
     */
    export type Pl_nlCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Pl_nlCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use categoriaDefaultArgs instead
     */
    export type categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = categoriaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use etiquetaDefaultArgs instead
     */
    export type etiquetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = etiquetaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use generoDefaultArgs instead
     */
    export type generoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = generoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use personaDefaultArgs instead
     */
    export type personaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = personaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usuarioDefaultArgs instead
     */
    export type usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use autorDefaultArgs instead
     */
    export type autorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = autorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use paisDefaultArgs instead
     */
    export type paisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = paisDefaultArgs<ExtArgs>
    /**
     * @deprecated Use seguidoDefaultArgs instead
     */
    export type seguidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = seguidoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tipo_seguimientoDefaultArgs instead
     */
    export type tipo_seguimientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tipo_seguimientoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use reaccionDefaultArgs instead
     */
    export type reaccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = reaccionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use cap_pl_lnDefaultArgs instead
     */
    export type cap_pl_lnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cap_pl_lnDefaultArgs<ExtArgs>
    /**
     * @deprecated Use editorialDefaultArgs instead
     */
    export type editorialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = editorialDefaultArgs<ExtArgs>
    /**
     * @deprecated Use pl_libreDefaultArgs instead
     */
    export type pl_libreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = pl_libreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use pl_nlDefaultArgs instead
     */
    export type pl_nlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = pl_nlDefaultArgs<ExtArgs>
    /**
     * @deprecated Use comentarioDefaultArgs instead
     */
    export type comentarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = comentarioDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}