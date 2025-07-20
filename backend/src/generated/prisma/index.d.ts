
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
 * Model chat_members
 * 
 */
export type chat_members = $Result.DefaultSelection<Prisma.$chat_membersPayload>
/**
 * Model chat_types
 * 
 */
export type chat_types = $Result.DefaultSelection<Prisma.$chat_typesPayload>
/**
 * Model chats
 * 
 */
export type chats = $Result.DefaultSelection<Prisma.$chatsPayload>
/**
 * Model messages
 * 
 */
export type messages = $Result.DefaultSelection<Prisma.$messagesPayload>
/**
 * Model user_contact
 * 
 */
export type user_contact = $Result.DefaultSelection<Prisma.$user_contactPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Chat_members
 * const chat_members = await prisma.chat_members.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Chat_members
   * const chat_members = await prisma.chat_members.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.chat_members`: Exposes CRUD operations for the **chat_members** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chat_members
    * const chat_members = await prisma.chat_members.findMany()
    * ```
    */
  get chat_members(): Prisma.chat_membersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat_types`: Exposes CRUD operations for the **chat_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chat_types
    * const chat_types = await prisma.chat_types.findMany()
    * ```
    */
  get chat_types(): Prisma.chat_typesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chats`: Exposes CRUD operations for the **chats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chats.findMany()
    * ```
    */
  get chats(): Prisma.chatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.messagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_contact`: Exposes CRUD operations for the **user_contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_contacts
    * const user_contacts = await prisma.user_contact.findMany()
    * ```
    */
  get user_contact(): Prisma.user_contactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    chat_members: 'chat_members',
    chat_types: 'chat_types',
    chats: 'chats',
    messages: 'messages',
    user_contact: 'user_contact',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "chat_members" | "chat_types" | "chats" | "messages" | "user_contact" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      chat_members: {
        payload: Prisma.$chat_membersPayload<ExtArgs>
        fields: Prisma.chat_membersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chat_membersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_membersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chat_membersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_membersPayload>
          }
          findFirst: {
            args: Prisma.chat_membersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_membersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chat_membersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_membersPayload>
          }
          findMany: {
            args: Prisma.chat_membersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_membersPayload>[]
          }
          create: {
            args: Prisma.chat_membersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_membersPayload>
          }
          createMany: {
            args: Prisma.chat_membersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chat_membersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_membersPayload>[]
          }
          delete: {
            args: Prisma.chat_membersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_membersPayload>
          }
          update: {
            args: Prisma.chat_membersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_membersPayload>
          }
          deleteMany: {
            args: Prisma.chat_membersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chat_membersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chat_membersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_membersPayload>[]
          }
          upsert: {
            args: Prisma.chat_membersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_membersPayload>
          }
          aggregate: {
            args: Prisma.Chat_membersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat_members>
          }
          groupBy: {
            args: Prisma.chat_membersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Chat_membersGroupByOutputType>[]
          }
          count: {
            args: Prisma.chat_membersCountArgs<ExtArgs>
            result: $Utils.Optional<Chat_membersCountAggregateOutputType> | number
          }
        }
      }
      chat_types: {
        payload: Prisma.$chat_typesPayload<ExtArgs>
        fields: Prisma.chat_typesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chat_typesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_typesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chat_typesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_typesPayload>
          }
          findFirst: {
            args: Prisma.chat_typesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_typesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chat_typesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_typesPayload>
          }
          findMany: {
            args: Prisma.chat_typesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_typesPayload>[]
          }
          create: {
            args: Prisma.chat_typesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_typesPayload>
          }
          createMany: {
            args: Prisma.chat_typesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chat_typesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_typesPayload>[]
          }
          delete: {
            args: Prisma.chat_typesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_typesPayload>
          }
          update: {
            args: Prisma.chat_typesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_typesPayload>
          }
          deleteMany: {
            args: Prisma.chat_typesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chat_typesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chat_typesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_typesPayload>[]
          }
          upsert: {
            args: Prisma.chat_typesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_typesPayload>
          }
          aggregate: {
            args: Prisma.Chat_typesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat_types>
          }
          groupBy: {
            args: Prisma.chat_typesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Chat_typesGroupByOutputType>[]
          }
          count: {
            args: Prisma.chat_typesCountArgs<ExtArgs>
            result: $Utils.Optional<Chat_typesCountAggregateOutputType> | number
          }
        }
      }
      chats: {
        payload: Prisma.$chatsPayload<ExtArgs>
        fields: Prisma.chatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsPayload>
          }
          findFirst: {
            args: Prisma.chatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsPayload>
          }
          findMany: {
            args: Prisma.chatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsPayload>[]
          }
          create: {
            args: Prisma.chatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsPayload>
          }
          createMany: {
            args: Prisma.chatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsPayload>[]
          }
          delete: {
            args: Prisma.chatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsPayload>
          }
          update: {
            args: Prisma.chatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsPayload>
          }
          deleteMany: {
            args: Prisma.chatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsPayload>[]
          }
          upsert: {
            args: Prisma.chatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsPayload>
          }
          aggregate: {
            args: Prisma.ChatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChats>
          }
          groupBy: {
            args: Prisma.chatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatsCountArgs<ExtArgs>
            result: $Utils.Optional<ChatsCountAggregateOutputType> | number
          }
        }
      }
      messages: {
        payload: Prisma.$messagesPayload<ExtArgs>
        fields: Prisma.messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findFirst: {
            args: Prisma.messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findMany: {
            args: Prisma.messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          create: {
            args: Prisma.messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          createMany: {
            args: Prisma.messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.messagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          delete: {
            args: Prisma.messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          update: {
            args: Prisma.messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          deleteMany: {
            args: Prisma.messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.messagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          upsert: {
            args: Prisma.messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.messagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      user_contact: {
        payload: Prisma.$user_contactPayload<ExtArgs>
        fields: Prisma.user_contactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_contactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_contactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_contactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_contactPayload>
          }
          findFirst: {
            args: Prisma.user_contactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_contactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_contactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_contactPayload>
          }
          findMany: {
            args: Prisma.user_contactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_contactPayload>[]
          }
          create: {
            args: Prisma.user_contactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_contactPayload>
          }
          createMany: {
            args: Prisma.user_contactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_contactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_contactPayload>[]
          }
          delete: {
            args: Prisma.user_contactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_contactPayload>
          }
          update: {
            args: Prisma.user_contactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_contactPayload>
          }
          deleteMany: {
            args: Prisma.user_contactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_contactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_contactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_contactPayload>[]
          }
          upsert: {
            args: Prisma.user_contactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_contactPayload>
          }
          aggregate: {
            args: Prisma.User_contactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_contact>
          }
          groupBy: {
            args: Prisma.user_contactGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_contactGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_contactCountArgs<ExtArgs>
            result: $Utils.Optional<User_contactCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    chat_members?: chat_membersOmit
    chat_types?: chat_typesOmit
    chats?: chatsOmit
    messages?: messagesOmit
    user_contact?: user_contactOmit
    users?: usersOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type Chat_typesCountOutputType
   */

  export type Chat_typesCountOutputType = {
    chats: number
  }

  export type Chat_typesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | Chat_typesCountOutputTypeCountChatsArgs
  }

  // Custom InputTypes
  /**
   * Chat_typesCountOutputType without action
   */
  export type Chat_typesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat_typesCountOutputType
     */
    select?: Chat_typesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Chat_typesCountOutputType without action
   */
  export type Chat_typesCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatsWhereInput
  }


  /**
   * Count Type ChatsCountOutputType
   */

  export type ChatsCountOutputType = {
    chat_members: number
    messages: number
  }

  export type ChatsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_members?: boolean | ChatsCountOutputTypeCountChat_membersArgs
    messages?: boolean | ChatsCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatsCountOutputType without action
   */
  export type ChatsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatsCountOutputType
     */
    select?: ChatsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatsCountOutputType without action
   */
  export type ChatsCountOutputTypeCountChat_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chat_membersWhereInput
  }

  /**
   * ChatsCountOutputType without action
   */
  export type ChatsCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    chat_members: number
    messages: number
    user_contact: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_members?: boolean | UsersCountOutputTypeCountChat_membersArgs
    messages?: boolean | UsersCountOutputTypeCountMessagesArgs
    user_contact?: boolean | UsersCountOutputTypeCountUser_contactArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountChat_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chat_membersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_contactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_contactWhereInput
  }


  /**
   * Models
   */

  /**
   * Model chat_members
   */

  export type AggregateChat_members = {
    _count: Chat_membersCountAggregateOutputType | null
    _avg: Chat_membersAvgAggregateOutputType | null
    _sum: Chat_membersSumAggregateOutputType | null
    _min: Chat_membersMinAggregateOutputType | null
    _max: Chat_membersMaxAggregateOutputType | null
  }

  export type Chat_membersAvgAggregateOutputType = {
    id: number | null
    chat_id: number | null
    user_id: number | null
  }

  export type Chat_membersSumAggregateOutputType = {
    id: number | null
    chat_id: number | null
    user_id: number | null
  }

  export type Chat_membersMinAggregateOutputType = {
    id: number | null
    chat_id: number | null
    user_id: number | null
    joined_at: Date | null
  }

  export type Chat_membersMaxAggregateOutputType = {
    id: number | null
    chat_id: number | null
    user_id: number | null
    joined_at: Date | null
  }

  export type Chat_membersCountAggregateOutputType = {
    id: number
    chat_id: number
    user_id: number
    joined_at: number
    _all: number
  }


  export type Chat_membersAvgAggregateInputType = {
    id?: true
    chat_id?: true
    user_id?: true
  }

  export type Chat_membersSumAggregateInputType = {
    id?: true
    chat_id?: true
    user_id?: true
  }

  export type Chat_membersMinAggregateInputType = {
    id?: true
    chat_id?: true
    user_id?: true
    joined_at?: true
  }

  export type Chat_membersMaxAggregateInputType = {
    id?: true
    chat_id?: true
    user_id?: true
    joined_at?: true
  }

  export type Chat_membersCountAggregateInputType = {
    id?: true
    chat_id?: true
    user_id?: true
    joined_at?: true
    _all?: true
  }

  export type Chat_membersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat_members to aggregate.
     */
    where?: chat_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_members to fetch.
     */
    orderBy?: chat_membersOrderByWithRelationInput | chat_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chat_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chat_members
    **/
    _count?: true | Chat_membersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Chat_membersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Chat_membersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Chat_membersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Chat_membersMaxAggregateInputType
  }

  export type GetChat_membersAggregateType<T extends Chat_membersAggregateArgs> = {
        [P in keyof T & keyof AggregateChat_members]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat_members[P]>
      : GetScalarType<T[P], AggregateChat_members[P]>
  }




  export type chat_membersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chat_membersWhereInput
    orderBy?: chat_membersOrderByWithAggregationInput | chat_membersOrderByWithAggregationInput[]
    by: Chat_membersScalarFieldEnum[] | Chat_membersScalarFieldEnum
    having?: chat_membersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Chat_membersCountAggregateInputType | true
    _avg?: Chat_membersAvgAggregateInputType
    _sum?: Chat_membersSumAggregateInputType
    _min?: Chat_membersMinAggregateInputType
    _max?: Chat_membersMaxAggregateInputType
  }

  export type Chat_membersGroupByOutputType = {
    id: number
    chat_id: number | null
    user_id: number | null
    joined_at: Date | null
    _count: Chat_membersCountAggregateOutputType | null
    _avg: Chat_membersAvgAggregateOutputType | null
    _sum: Chat_membersSumAggregateOutputType | null
    _min: Chat_membersMinAggregateOutputType | null
    _max: Chat_membersMaxAggregateOutputType | null
  }

  type GetChat_membersGroupByPayload<T extends chat_membersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Chat_membersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Chat_membersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Chat_membersGroupByOutputType[P]>
            : GetScalarType<T[P], Chat_membersGroupByOutputType[P]>
        }
      >
    >


  export type chat_membersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chat_id?: boolean
    user_id?: boolean
    joined_at?: boolean
    chats?: boolean | chat_members$chatsArgs<ExtArgs>
    users?: boolean | chat_members$usersArgs<ExtArgs>
  }, ExtArgs["result"]["chat_members"]>

  export type chat_membersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chat_id?: boolean
    user_id?: boolean
    joined_at?: boolean
    chats?: boolean | chat_members$chatsArgs<ExtArgs>
    users?: boolean | chat_members$usersArgs<ExtArgs>
  }, ExtArgs["result"]["chat_members"]>

  export type chat_membersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chat_id?: boolean
    user_id?: boolean
    joined_at?: boolean
    chats?: boolean | chat_members$chatsArgs<ExtArgs>
    users?: boolean | chat_members$usersArgs<ExtArgs>
  }, ExtArgs["result"]["chat_members"]>

  export type chat_membersSelectScalar = {
    id?: boolean
    chat_id?: boolean
    user_id?: boolean
    joined_at?: boolean
  }

  export type chat_membersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chat_id" | "user_id" | "joined_at", ExtArgs["result"]["chat_members"]>
  export type chat_membersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | chat_members$chatsArgs<ExtArgs>
    users?: boolean | chat_members$usersArgs<ExtArgs>
  }
  export type chat_membersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | chat_members$chatsArgs<ExtArgs>
    users?: boolean | chat_members$usersArgs<ExtArgs>
  }
  export type chat_membersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | chat_members$chatsArgs<ExtArgs>
    users?: boolean | chat_members$usersArgs<ExtArgs>
  }

  export type $chat_membersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chat_members"
    objects: {
      chats: Prisma.$chatsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chat_id: number | null
      user_id: number | null
      joined_at: Date | null
    }, ExtArgs["result"]["chat_members"]>
    composites: {}
  }

  type chat_membersGetPayload<S extends boolean | null | undefined | chat_membersDefaultArgs> = $Result.GetResult<Prisma.$chat_membersPayload, S>

  type chat_membersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chat_membersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Chat_membersCountAggregateInputType | true
    }

  export interface chat_membersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chat_members'], meta: { name: 'chat_members' } }
    /**
     * Find zero or one Chat_members that matches the filter.
     * @param {chat_membersFindUniqueArgs} args - Arguments to find a Chat_members
     * @example
     * // Get one Chat_members
     * const chat_members = await prisma.chat_members.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chat_membersFindUniqueArgs>(args: SelectSubset<T, chat_membersFindUniqueArgs<ExtArgs>>): Prisma__chat_membersClient<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat_members that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chat_membersFindUniqueOrThrowArgs} args - Arguments to find a Chat_members
     * @example
     * // Get one Chat_members
     * const chat_members = await prisma.chat_members.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chat_membersFindUniqueOrThrowArgs>(args: SelectSubset<T, chat_membersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chat_membersClient<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_membersFindFirstArgs} args - Arguments to find a Chat_members
     * @example
     * // Get one Chat_members
     * const chat_members = await prisma.chat_members.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chat_membersFindFirstArgs>(args?: SelectSubset<T, chat_membersFindFirstArgs<ExtArgs>>): Prisma__chat_membersClient<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat_members that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_membersFindFirstOrThrowArgs} args - Arguments to find a Chat_members
     * @example
     * // Get one Chat_members
     * const chat_members = await prisma.chat_members.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chat_membersFindFirstOrThrowArgs>(args?: SelectSubset<T, chat_membersFindFirstOrThrowArgs<ExtArgs>>): Prisma__chat_membersClient<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chat_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_membersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chat_members
     * const chat_members = await prisma.chat_members.findMany()
     * 
     * // Get first 10 Chat_members
     * const chat_members = await prisma.chat_members.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chat_membersWithIdOnly = await prisma.chat_members.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chat_membersFindManyArgs>(args?: SelectSubset<T, chat_membersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat_members.
     * @param {chat_membersCreateArgs} args - Arguments to create a Chat_members.
     * @example
     * // Create one Chat_members
     * const Chat_members = await prisma.chat_members.create({
     *   data: {
     *     // ... data to create a Chat_members
     *   }
     * })
     * 
     */
    create<T extends chat_membersCreateArgs>(args: SelectSubset<T, chat_membersCreateArgs<ExtArgs>>): Prisma__chat_membersClient<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chat_members.
     * @param {chat_membersCreateManyArgs} args - Arguments to create many Chat_members.
     * @example
     * // Create many Chat_members
     * const chat_members = await prisma.chat_members.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chat_membersCreateManyArgs>(args?: SelectSubset<T, chat_membersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chat_members and returns the data saved in the database.
     * @param {chat_membersCreateManyAndReturnArgs} args - Arguments to create many Chat_members.
     * @example
     * // Create many Chat_members
     * const chat_members = await prisma.chat_members.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chat_members and only return the `id`
     * const chat_membersWithIdOnly = await prisma.chat_members.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chat_membersCreateManyAndReturnArgs>(args?: SelectSubset<T, chat_membersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat_members.
     * @param {chat_membersDeleteArgs} args - Arguments to delete one Chat_members.
     * @example
     * // Delete one Chat_members
     * const Chat_members = await prisma.chat_members.delete({
     *   where: {
     *     // ... filter to delete one Chat_members
     *   }
     * })
     * 
     */
    delete<T extends chat_membersDeleteArgs>(args: SelectSubset<T, chat_membersDeleteArgs<ExtArgs>>): Prisma__chat_membersClient<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat_members.
     * @param {chat_membersUpdateArgs} args - Arguments to update one Chat_members.
     * @example
     * // Update one Chat_members
     * const chat_members = await prisma.chat_members.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chat_membersUpdateArgs>(args: SelectSubset<T, chat_membersUpdateArgs<ExtArgs>>): Prisma__chat_membersClient<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chat_members.
     * @param {chat_membersDeleteManyArgs} args - Arguments to filter Chat_members to delete.
     * @example
     * // Delete a few Chat_members
     * const { count } = await prisma.chat_members.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chat_membersDeleteManyArgs>(args?: SelectSubset<T, chat_membersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chat_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_membersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chat_members
     * const chat_members = await prisma.chat_members.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chat_membersUpdateManyArgs>(args: SelectSubset<T, chat_membersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chat_members and returns the data updated in the database.
     * @param {chat_membersUpdateManyAndReturnArgs} args - Arguments to update many Chat_members.
     * @example
     * // Update many Chat_members
     * const chat_members = await prisma.chat_members.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chat_members and only return the `id`
     * const chat_membersWithIdOnly = await prisma.chat_members.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends chat_membersUpdateManyAndReturnArgs>(args: SelectSubset<T, chat_membersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat_members.
     * @param {chat_membersUpsertArgs} args - Arguments to update or create a Chat_members.
     * @example
     * // Update or create a Chat_members
     * const chat_members = await prisma.chat_members.upsert({
     *   create: {
     *     // ... data to create a Chat_members
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat_members we want to update
     *   }
     * })
     */
    upsert<T extends chat_membersUpsertArgs>(args: SelectSubset<T, chat_membersUpsertArgs<ExtArgs>>): Prisma__chat_membersClient<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chat_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_membersCountArgs} args - Arguments to filter Chat_members to count.
     * @example
     * // Count the number of Chat_members
     * const count = await prisma.chat_members.count({
     *   where: {
     *     // ... the filter for the Chat_members we want to count
     *   }
     * })
    **/
    count<T extends chat_membersCountArgs>(
      args?: Subset<T, chat_membersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Chat_membersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chat_membersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Chat_membersAggregateArgs>(args: Subset<T, Chat_membersAggregateArgs>): Prisma.PrismaPromise<GetChat_membersAggregateType<T>>

    /**
     * Group by Chat_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_membersGroupByArgs} args - Group by arguments.
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
      T extends chat_membersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chat_membersGroupByArgs['orderBy'] }
        : { orderBy?: chat_membersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chat_membersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChat_membersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chat_members model
   */
  readonly fields: chat_membersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chat_members.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chat_membersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chats<T extends chat_members$chatsArgs<ExtArgs> = {}>(args?: Subset<T, chat_members$chatsArgs<ExtArgs>>): Prisma__chatsClient<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends chat_members$usersArgs<ExtArgs> = {}>(args?: Subset<T, chat_members$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chat_members model
   */
  interface chat_membersFieldRefs {
    readonly id: FieldRef<"chat_members", 'Int'>
    readonly chat_id: FieldRef<"chat_members", 'Int'>
    readonly user_id: FieldRef<"chat_members", 'Int'>
    readonly joined_at: FieldRef<"chat_members", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chat_members findUnique
   */
  export type chat_membersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
    /**
     * Filter, which chat_members to fetch.
     */
    where: chat_membersWhereUniqueInput
  }

  /**
   * chat_members findUniqueOrThrow
   */
  export type chat_membersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
    /**
     * Filter, which chat_members to fetch.
     */
    where: chat_membersWhereUniqueInput
  }

  /**
   * chat_members findFirst
   */
  export type chat_membersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
    /**
     * Filter, which chat_members to fetch.
     */
    where?: chat_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_members to fetch.
     */
    orderBy?: chat_membersOrderByWithRelationInput | chat_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chat_members.
     */
    cursor?: chat_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chat_members.
     */
    distinct?: Chat_membersScalarFieldEnum | Chat_membersScalarFieldEnum[]
  }

  /**
   * chat_members findFirstOrThrow
   */
  export type chat_membersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
    /**
     * Filter, which chat_members to fetch.
     */
    where?: chat_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_members to fetch.
     */
    orderBy?: chat_membersOrderByWithRelationInput | chat_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chat_members.
     */
    cursor?: chat_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chat_members.
     */
    distinct?: Chat_membersScalarFieldEnum | Chat_membersScalarFieldEnum[]
  }

  /**
   * chat_members findMany
   */
  export type chat_membersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
    /**
     * Filter, which chat_members to fetch.
     */
    where?: chat_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_members to fetch.
     */
    orderBy?: chat_membersOrderByWithRelationInput | chat_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chat_members.
     */
    cursor?: chat_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_members.
     */
    skip?: number
    distinct?: Chat_membersScalarFieldEnum | Chat_membersScalarFieldEnum[]
  }

  /**
   * chat_members create
   */
  export type chat_membersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
    /**
     * The data needed to create a chat_members.
     */
    data?: XOR<chat_membersCreateInput, chat_membersUncheckedCreateInput>
  }

  /**
   * chat_members createMany
   */
  export type chat_membersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chat_members.
     */
    data: chat_membersCreateManyInput | chat_membersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chat_members createManyAndReturn
   */
  export type chat_membersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * The data used to create many chat_members.
     */
    data: chat_membersCreateManyInput | chat_membersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * chat_members update
   */
  export type chat_membersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
    /**
     * The data needed to update a chat_members.
     */
    data: XOR<chat_membersUpdateInput, chat_membersUncheckedUpdateInput>
    /**
     * Choose, which chat_members to update.
     */
    where: chat_membersWhereUniqueInput
  }

  /**
   * chat_members updateMany
   */
  export type chat_membersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chat_members.
     */
    data: XOR<chat_membersUpdateManyMutationInput, chat_membersUncheckedUpdateManyInput>
    /**
     * Filter which chat_members to update
     */
    where?: chat_membersWhereInput
    /**
     * Limit how many chat_members to update.
     */
    limit?: number
  }

  /**
   * chat_members updateManyAndReturn
   */
  export type chat_membersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * The data used to update chat_members.
     */
    data: XOR<chat_membersUpdateManyMutationInput, chat_membersUncheckedUpdateManyInput>
    /**
     * Filter which chat_members to update
     */
    where?: chat_membersWhereInput
    /**
     * Limit how many chat_members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * chat_members upsert
   */
  export type chat_membersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
    /**
     * The filter to search for the chat_members to update in case it exists.
     */
    where: chat_membersWhereUniqueInput
    /**
     * In case the chat_members found by the `where` argument doesn't exist, create a new chat_members with this data.
     */
    create: XOR<chat_membersCreateInput, chat_membersUncheckedCreateInput>
    /**
     * In case the chat_members was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chat_membersUpdateInput, chat_membersUncheckedUpdateInput>
  }

  /**
   * chat_members delete
   */
  export type chat_membersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
    /**
     * Filter which chat_members to delete.
     */
    where: chat_membersWhereUniqueInput
  }

  /**
   * chat_members deleteMany
   */
  export type chat_membersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat_members to delete
     */
    where?: chat_membersWhereInput
    /**
     * Limit how many chat_members to delete.
     */
    limit?: number
  }

  /**
   * chat_members.chats
   */
  export type chat_members$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsInclude<ExtArgs> | null
    where?: chatsWhereInput
  }

  /**
   * chat_members.users
   */
  export type chat_members$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * chat_members without action
   */
  export type chat_membersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
  }


  /**
   * Model chat_types
   */

  export type AggregateChat_types = {
    _count: Chat_typesCountAggregateOutputType | null
    _avg: Chat_typesAvgAggregateOutputType | null
    _sum: Chat_typesSumAggregateOutputType | null
    _min: Chat_typesMinAggregateOutputType | null
    _max: Chat_typesMaxAggregateOutputType | null
  }

  export type Chat_typesAvgAggregateOutputType = {
    id: number | null
  }

  export type Chat_typesSumAggregateOutputType = {
    id: number | null
  }

  export type Chat_typesMinAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type Chat_typesMaxAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type Chat_typesCountAggregateOutputType = {
    id: number
    type: number
    _all: number
  }


  export type Chat_typesAvgAggregateInputType = {
    id?: true
  }

  export type Chat_typesSumAggregateInputType = {
    id?: true
  }

  export type Chat_typesMinAggregateInputType = {
    id?: true
    type?: true
  }

  export type Chat_typesMaxAggregateInputType = {
    id?: true
    type?: true
  }

  export type Chat_typesCountAggregateInputType = {
    id?: true
    type?: true
    _all?: true
  }

  export type Chat_typesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat_types to aggregate.
     */
    where?: chat_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_types to fetch.
     */
    orderBy?: chat_typesOrderByWithRelationInput | chat_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chat_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chat_types
    **/
    _count?: true | Chat_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Chat_typesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Chat_typesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Chat_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Chat_typesMaxAggregateInputType
  }

  export type GetChat_typesAggregateType<T extends Chat_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateChat_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat_types[P]>
      : GetScalarType<T[P], AggregateChat_types[P]>
  }




  export type chat_typesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chat_typesWhereInput
    orderBy?: chat_typesOrderByWithAggregationInput | chat_typesOrderByWithAggregationInput[]
    by: Chat_typesScalarFieldEnum[] | Chat_typesScalarFieldEnum
    having?: chat_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Chat_typesCountAggregateInputType | true
    _avg?: Chat_typesAvgAggregateInputType
    _sum?: Chat_typesSumAggregateInputType
    _min?: Chat_typesMinAggregateInputType
    _max?: Chat_typesMaxAggregateInputType
  }

  export type Chat_typesGroupByOutputType = {
    id: number
    type: string
    _count: Chat_typesCountAggregateOutputType | null
    _avg: Chat_typesAvgAggregateOutputType | null
    _sum: Chat_typesSumAggregateOutputType | null
    _min: Chat_typesMinAggregateOutputType | null
    _max: Chat_typesMaxAggregateOutputType | null
  }

  type GetChat_typesGroupByPayload<T extends chat_typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Chat_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Chat_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Chat_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Chat_typesGroupByOutputType[P]>
        }
      >
    >


  export type chat_typesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    chats?: boolean | chat_types$chatsArgs<ExtArgs>
    _count?: boolean | Chat_typesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat_types"]>

  export type chat_typesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
  }, ExtArgs["result"]["chat_types"]>

  export type chat_typesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
  }, ExtArgs["result"]["chat_types"]>

  export type chat_typesSelectScalar = {
    id?: boolean
    type?: boolean
  }

  export type chat_typesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type", ExtArgs["result"]["chat_types"]>
  export type chat_typesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | chat_types$chatsArgs<ExtArgs>
    _count?: boolean | Chat_typesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type chat_typesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type chat_typesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $chat_typesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chat_types"
    objects: {
      chats: Prisma.$chatsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
    }, ExtArgs["result"]["chat_types"]>
    composites: {}
  }

  type chat_typesGetPayload<S extends boolean | null | undefined | chat_typesDefaultArgs> = $Result.GetResult<Prisma.$chat_typesPayload, S>

  type chat_typesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chat_typesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Chat_typesCountAggregateInputType | true
    }

  export interface chat_typesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chat_types'], meta: { name: 'chat_types' } }
    /**
     * Find zero or one Chat_types that matches the filter.
     * @param {chat_typesFindUniqueArgs} args - Arguments to find a Chat_types
     * @example
     * // Get one Chat_types
     * const chat_types = await prisma.chat_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chat_typesFindUniqueArgs>(args: SelectSubset<T, chat_typesFindUniqueArgs<ExtArgs>>): Prisma__chat_typesClient<$Result.GetResult<Prisma.$chat_typesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat_types that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chat_typesFindUniqueOrThrowArgs} args - Arguments to find a Chat_types
     * @example
     * // Get one Chat_types
     * const chat_types = await prisma.chat_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chat_typesFindUniqueOrThrowArgs>(args: SelectSubset<T, chat_typesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chat_typesClient<$Result.GetResult<Prisma.$chat_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_typesFindFirstArgs} args - Arguments to find a Chat_types
     * @example
     * // Get one Chat_types
     * const chat_types = await prisma.chat_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chat_typesFindFirstArgs>(args?: SelectSubset<T, chat_typesFindFirstArgs<ExtArgs>>): Prisma__chat_typesClient<$Result.GetResult<Prisma.$chat_typesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat_types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_typesFindFirstOrThrowArgs} args - Arguments to find a Chat_types
     * @example
     * // Get one Chat_types
     * const chat_types = await prisma.chat_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chat_typesFindFirstOrThrowArgs>(args?: SelectSubset<T, chat_typesFindFirstOrThrowArgs<ExtArgs>>): Prisma__chat_typesClient<$Result.GetResult<Prisma.$chat_typesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chat_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_typesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chat_types
     * const chat_types = await prisma.chat_types.findMany()
     * 
     * // Get first 10 Chat_types
     * const chat_types = await prisma.chat_types.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chat_typesWithIdOnly = await prisma.chat_types.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chat_typesFindManyArgs>(args?: SelectSubset<T, chat_typesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat_types.
     * @param {chat_typesCreateArgs} args - Arguments to create a Chat_types.
     * @example
     * // Create one Chat_types
     * const Chat_types = await prisma.chat_types.create({
     *   data: {
     *     // ... data to create a Chat_types
     *   }
     * })
     * 
     */
    create<T extends chat_typesCreateArgs>(args: SelectSubset<T, chat_typesCreateArgs<ExtArgs>>): Prisma__chat_typesClient<$Result.GetResult<Prisma.$chat_typesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chat_types.
     * @param {chat_typesCreateManyArgs} args - Arguments to create many Chat_types.
     * @example
     * // Create many Chat_types
     * const chat_types = await prisma.chat_types.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chat_typesCreateManyArgs>(args?: SelectSubset<T, chat_typesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chat_types and returns the data saved in the database.
     * @param {chat_typesCreateManyAndReturnArgs} args - Arguments to create many Chat_types.
     * @example
     * // Create many Chat_types
     * const chat_types = await prisma.chat_types.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chat_types and only return the `id`
     * const chat_typesWithIdOnly = await prisma.chat_types.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chat_typesCreateManyAndReturnArgs>(args?: SelectSubset<T, chat_typesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_typesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat_types.
     * @param {chat_typesDeleteArgs} args - Arguments to delete one Chat_types.
     * @example
     * // Delete one Chat_types
     * const Chat_types = await prisma.chat_types.delete({
     *   where: {
     *     // ... filter to delete one Chat_types
     *   }
     * })
     * 
     */
    delete<T extends chat_typesDeleteArgs>(args: SelectSubset<T, chat_typesDeleteArgs<ExtArgs>>): Prisma__chat_typesClient<$Result.GetResult<Prisma.$chat_typesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat_types.
     * @param {chat_typesUpdateArgs} args - Arguments to update one Chat_types.
     * @example
     * // Update one Chat_types
     * const chat_types = await prisma.chat_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chat_typesUpdateArgs>(args: SelectSubset<T, chat_typesUpdateArgs<ExtArgs>>): Prisma__chat_typesClient<$Result.GetResult<Prisma.$chat_typesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chat_types.
     * @param {chat_typesDeleteManyArgs} args - Arguments to filter Chat_types to delete.
     * @example
     * // Delete a few Chat_types
     * const { count } = await prisma.chat_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chat_typesDeleteManyArgs>(args?: SelectSubset<T, chat_typesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chat_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chat_types
     * const chat_types = await prisma.chat_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chat_typesUpdateManyArgs>(args: SelectSubset<T, chat_typesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chat_types and returns the data updated in the database.
     * @param {chat_typesUpdateManyAndReturnArgs} args - Arguments to update many Chat_types.
     * @example
     * // Update many Chat_types
     * const chat_types = await prisma.chat_types.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chat_types and only return the `id`
     * const chat_typesWithIdOnly = await prisma.chat_types.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends chat_typesUpdateManyAndReturnArgs>(args: SelectSubset<T, chat_typesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_typesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat_types.
     * @param {chat_typesUpsertArgs} args - Arguments to update or create a Chat_types.
     * @example
     * // Update or create a Chat_types
     * const chat_types = await prisma.chat_types.upsert({
     *   create: {
     *     // ... data to create a Chat_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat_types we want to update
     *   }
     * })
     */
    upsert<T extends chat_typesUpsertArgs>(args: SelectSubset<T, chat_typesUpsertArgs<ExtArgs>>): Prisma__chat_typesClient<$Result.GetResult<Prisma.$chat_typesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chat_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_typesCountArgs} args - Arguments to filter Chat_types to count.
     * @example
     * // Count the number of Chat_types
     * const count = await prisma.chat_types.count({
     *   where: {
     *     // ... the filter for the Chat_types we want to count
     *   }
     * })
    **/
    count<T extends chat_typesCountArgs>(
      args?: Subset<T, chat_typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Chat_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chat_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Chat_typesAggregateArgs>(args: Subset<T, Chat_typesAggregateArgs>): Prisma.PrismaPromise<GetChat_typesAggregateType<T>>

    /**
     * Group by Chat_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_typesGroupByArgs} args - Group by arguments.
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
      T extends chat_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chat_typesGroupByArgs['orderBy'] }
        : { orderBy?: chat_typesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chat_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChat_typesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chat_types model
   */
  readonly fields: chat_typesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chat_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chat_typesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chats<T extends chat_types$chatsArgs<ExtArgs> = {}>(args?: Subset<T, chat_types$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chat_types model
   */
  interface chat_typesFieldRefs {
    readonly id: FieldRef<"chat_types", 'Int'>
    readonly type: FieldRef<"chat_types", 'String'>
  }
    

  // Custom InputTypes
  /**
   * chat_types findUnique
   */
  export type chat_typesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_types
     */
    select?: chat_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_types
     */
    omit?: chat_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_typesInclude<ExtArgs> | null
    /**
     * Filter, which chat_types to fetch.
     */
    where: chat_typesWhereUniqueInput
  }

  /**
   * chat_types findUniqueOrThrow
   */
  export type chat_typesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_types
     */
    select?: chat_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_types
     */
    omit?: chat_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_typesInclude<ExtArgs> | null
    /**
     * Filter, which chat_types to fetch.
     */
    where: chat_typesWhereUniqueInput
  }

  /**
   * chat_types findFirst
   */
  export type chat_typesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_types
     */
    select?: chat_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_types
     */
    omit?: chat_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_typesInclude<ExtArgs> | null
    /**
     * Filter, which chat_types to fetch.
     */
    where?: chat_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_types to fetch.
     */
    orderBy?: chat_typesOrderByWithRelationInput | chat_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chat_types.
     */
    cursor?: chat_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chat_types.
     */
    distinct?: Chat_typesScalarFieldEnum | Chat_typesScalarFieldEnum[]
  }

  /**
   * chat_types findFirstOrThrow
   */
  export type chat_typesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_types
     */
    select?: chat_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_types
     */
    omit?: chat_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_typesInclude<ExtArgs> | null
    /**
     * Filter, which chat_types to fetch.
     */
    where?: chat_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_types to fetch.
     */
    orderBy?: chat_typesOrderByWithRelationInput | chat_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chat_types.
     */
    cursor?: chat_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chat_types.
     */
    distinct?: Chat_typesScalarFieldEnum | Chat_typesScalarFieldEnum[]
  }

  /**
   * chat_types findMany
   */
  export type chat_typesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_types
     */
    select?: chat_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_types
     */
    omit?: chat_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_typesInclude<ExtArgs> | null
    /**
     * Filter, which chat_types to fetch.
     */
    where?: chat_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_types to fetch.
     */
    orderBy?: chat_typesOrderByWithRelationInput | chat_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chat_types.
     */
    cursor?: chat_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_types.
     */
    skip?: number
    distinct?: Chat_typesScalarFieldEnum | Chat_typesScalarFieldEnum[]
  }

  /**
   * chat_types create
   */
  export type chat_typesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_types
     */
    select?: chat_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_types
     */
    omit?: chat_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_typesInclude<ExtArgs> | null
    /**
     * The data needed to create a chat_types.
     */
    data: XOR<chat_typesCreateInput, chat_typesUncheckedCreateInput>
  }

  /**
   * chat_types createMany
   */
  export type chat_typesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chat_types.
     */
    data: chat_typesCreateManyInput | chat_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chat_types createManyAndReturn
   */
  export type chat_typesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_types
     */
    select?: chat_typesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chat_types
     */
    omit?: chat_typesOmit<ExtArgs> | null
    /**
     * The data used to create many chat_types.
     */
    data: chat_typesCreateManyInput | chat_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chat_types update
   */
  export type chat_typesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_types
     */
    select?: chat_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_types
     */
    omit?: chat_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_typesInclude<ExtArgs> | null
    /**
     * The data needed to update a chat_types.
     */
    data: XOR<chat_typesUpdateInput, chat_typesUncheckedUpdateInput>
    /**
     * Choose, which chat_types to update.
     */
    where: chat_typesWhereUniqueInput
  }

  /**
   * chat_types updateMany
   */
  export type chat_typesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chat_types.
     */
    data: XOR<chat_typesUpdateManyMutationInput, chat_typesUncheckedUpdateManyInput>
    /**
     * Filter which chat_types to update
     */
    where?: chat_typesWhereInput
    /**
     * Limit how many chat_types to update.
     */
    limit?: number
  }

  /**
   * chat_types updateManyAndReturn
   */
  export type chat_typesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_types
     */
    select?: chat_typesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chat_types
     */
    omit?: chat_typesOmit<ExtArgs> | null
    /**
     * The data used to update chat_types.
     */
    data: XOR<chat_typesUpdateManyMutationInput, chat_typesUncheckedUpdateManyInput>
    /**
     * Filter which chat_types to update
     */
    where?: chat_typesWhereInput
    /**
     * Limit how many chat_types to update.
     */
    limit?: number
  }

  /**
   * chat_types upsert
   */
  export type chat_typesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_types
     */
    select?: chat_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_types
     */
    omit?: chat_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_typesInclude<ExtArgs> | null
    /**
     * The filter to search for the chat_types to update in case it exists.
     */
    where: chat_typesWhereUniqueInput
    /**
     * In case the chat_types found by the `where` argument doesn't exist, create a new chat_types with this data.
     */
    create: XOR<chat_typesCreateInput, chat_typesUncheckedCreateInput>
    /**
     * In case the chat_types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chat_typesUpdateInput, chat_typesUncheckedUpdateInput>
  }

  /**
   * chat_types delete
   */
  export type chat_typesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_types
     */
    select?: chat_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_types
     */
    omit?: chat_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_typesInclude<ExtArgs> | null
    /**
     * Filter which chat_types to delete.
     */
    where: chat_typesWhereUniqueInput
  }

  /**
   * chat_types deleteMany
   */
  export type chat_typesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat_types to delete
     */
    where?: chat_typesWhereInput
    /**
     * Limit how many chat_types to delete.
     */
    limit?: number
  }

  /**
   * chat_types.chats
   */
  export type chat_types$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsInclude<ExtArgs> | null
    where?: chatsWhereInput
    orderBy?: chatsOrderByWithRelationInput | chatsOrderByWithRelationInput[]
    cursor?: chatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatsScalarFieldEnum | ChatsScalarFieldEnum[]
  }

  /**
   * chat_types without action
   */
  export type chat_typesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_types
     */
    select?: chat_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_types
     */
    omit?: chat_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_typesInclude<ExtArgs> | null
  }


  /**
   * Model chats
   */

  export type AggregateChats = {
    _count: ChatsCountAggregateOutputType | null
    _avg: ChatsAvgAggregateOutputType | null
    _sum: ChatsSumAggregateOutputType | null
    _min: ChatsMinAggregateOutputType | null
    _max: ChatsMaxAggregateOutputType | null
  }

  export type ChatsAvgAggregateOutputType = {
    id: number | null
    type_id: number | null
  }

  export type ChatsSumAggregateOutputType = {
    id: number | null
    type_id: number | null
  }

  export type ChatsMinAggregateOutputType = {
    id: number | null
    type_id: number | null
    name: string | null
    created_at: Date | null
  }

  export type ChatsMaxAggregateOutputType = {
    id: number | null
    type_id: number | null
    name: string | null
    created_at: Date | null
  }

  export type ChatsCountAggregateOutputType = {
    id: number
    type_id: number
    name: number
    created_at: number
    _all: number
  }


  export type ChatsAvgAggregateInputType = {
    id?: true
    type_id?: true
  }

  export type ChatsSumAggregateInputType = {
    id?: true
    type_id?: true
  }

  export type ChatsMinAggregateInputType = {
    id?: true
    type_id?: true
    name?: true
    created_at?: true
  }

  export type ChatsMaxAggregateInputType = {
    id?: true
    type_id?: true
    name?: true
    created_at?: true
  }

  export type ChatsCountAggregateInputType = {
    id?: true
    type_id?: true
    name?: true
    created_at?: true
    _all?: true
  }

  export type ChatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chats to aggregate.
     */
    where?: chatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatsOrderByWithRelationInput | chatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chats
    **/
    _count?: true | ChatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatsMaxAggregateInputType
  }

  export type GetChatsAggregateType<T extends ChatsAggregateArgs> = {
        [P in keyof T & keyof AggregateChats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChats[P]>
      : GetScalarType<T[P], AggregateChats[P]>
  }




  export type chatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatsWhereInput
    orderBy?: chatsOrderByWithAggregationInput | chatsOrderByWithAggregationInput[]
    by: ChatsScalarFieldEnum[] | ChatsScalarFieldEnum
    having?: chatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatsCountAggregateInputType | true
    _avg?: ChatsAvgAggregateInputType
    _sum?: ChatsSumAggregateInputType
    _min?: ChatsMinAggregateInputType
    _max?: ChatsMaxAggregateInputType
  }

  export type ChatsGroupByOutputType = {
    id: number
    type_id: number | null
    name: string | null
    created_at: Date | null
    _count: ChatsCountAggregateOutputType | null
    _avg: ChatsAvgAggregateOutputType | null
    _sum: ChatsSumAggregateOutputType | null
    _min: ChatsMinAggregateOutputType | null
    _max: ChatsMaxAggregateOutputType | null
  }

  type GetChatsGroupByPayload<T extends chatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatsGroupByOutputType[P]>
            : GetScalarType<T[P], ChatsGroupByOutputType[P]>
        }
      >
    >


  export type chatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type_id?: boolean
    name?: boolean
    created_at?: boolean
    chat_members?: boolean | chats$chat_membersArgs<ExtArgs>
    chat_types?: boolean | chats$chat_typesArgs<ExtArgs>
    messages?: boolean | chats$messagesArgs<ExtArgs>
    _count?: boolean | ChatsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chats"]>

  export type chatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type_id?: boolean
    name?: boolean
    created_at?: boolean
    chat_types?: boolean | chats$chat_typesArgs<ExtArgs>
  }, ExtArgs["result"]["chats"]>

  export type chatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type_id?: boolean
    name?: boolean
    created_at?: boolean
    chat_types?: boolean | chats$chat_typesArgs<ExtArgs>
  }, ExtArgs["result"]["chats"]>

  export type chatsSelectScalar = {
    id?: boolean
    type_id?: boolean
    name?: boolean
    created_at?: boolean
  }

  export type chatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type_id" | "name" | "created_at", ExtArgs["result"]["chats"]>
  export type chatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_members?: boolean | chats$chat_membersArgs<ExtArgs>
    chat_types?: boolean | chats$chat_typesArgs<ExtArgs>
    messages?: boolean | chats$messagesArgs<ExtArgs>
    _count?: boolean | ChatsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type chatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_types?: boolean | chats$chat_typesArgs<ExtArgs>
  }
  export type chatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_types?: boolean | chats$chat_typesArgs<ExtArgs>
  }

  export type $chatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chats"
    objects: {
      chat_members: Prisma.$chat_membersPayload<ExtArgs>[]
      chat_types: Prisma.$chat_typesPayload<ExtArgs> | null
      messages: Prisma.$messagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type_id: number | null
      name: string | null
      created_at: Date | null
    }, ExtArgs["result"]["chats"]>
    composites: {}
  }

  type chatsGetPayload<S extends boolean | null | undefined | chatsDefaultArgs> = $Result.GetResult<Prisma.$chatsPayload, S>

  type chatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatsCountAggregateInputType | true
    }

  export interface chatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chats'], meta: { name: 'chats' } }
    /**
     * Find zero or one Chats that matches the filter.
     * @param {chatsFindUniqueArgs} args - Arguments to find a Chats
     * @example
     * // Get one Chats
     * const chats = await prisma.chats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatsFindUniqueArgs>(args: SelectSubset<T, chatsFindUniqueArgs<ExtArgs>>): Prisma__chatsClient<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatsFindUniqueOrThrowArgs} args - Arguments to find a Chats
     * @example
     * // Get one Chats
     * const chats = await prisma.chats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatsFindUniqueOrThrowArgs>(args: SelectSubset<T, chatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatsClient<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsFindFirstArgs} args - Arguments to find a Chats
     * @example
     * // Get one Chats
     * const chats = await prisma.chats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatsFindFirstArgs>(args?: SelectSubset<T, chatsFindFirstArgs<ExtArgs>>): Prisma__chatsClient<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsFindFirstOrThrowArgs} args - Arguments to find a Chats
     * @example
     * // Get one Chats
     * const chats = await prisma.chats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatsFindFirstOrThrowArgs>(args?: SelectSubset<T, chatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatsClient<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chats.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatsWithIdOnly = await prisma.chats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chatsFindManyArgs>(args?: SelectSubset<T, chatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chats.
     * @param {chatsCreateArgs} args - Arguments to create a Chats.
     * @example
     * // Create one Chats
     * const Chats = await prisma.chats.create({
     *   data: {
     *     // ... data to create a Chats
     *   }
     * })
     * 
     */
    create<T extends chatsCreateArgs>(args: SelectSubset<T, chatsCreateArgs<ExtArgs>>): Prisma__chatsClient<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {chatsCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chats = await prisma.chats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatsCreateManyArgs>(args?: SelectSubset<T, chatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {chatsCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chats = await prisma.chats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatsWithIdOnly = await prisma.chats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chatsCreateManyAndReturnArgs>(args?: SelectSubset<T, chatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chats.
     * @param {chatsDeleteArgs} args - Arguments to delete one Chats.
     * @example
     * // Delete one Chats
     * const Chats = await prisma.chats.delete({
     *   where: {
     *     // ... filter to delete one Chats
     *   }
     * })
     * 
     */
    delete<T extends chatsDeleteArgs>(args: SelectSubset<T, chatsDeleteArgs<ExtArgs>>): Prisma__chatsClient<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chats.
     * @param {chatsUpdateArgs} args - Arguments to update one Chats.
     * @example
     * // Update one Chats
     * const chats = await prisma.chats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatsUpdateArgs>(args: SelectSubset<T, chatsUpdateArgs<ExtArgs>>): Prisma__chatsClient<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {chatsDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatsDeleteManyArgs>(args?: SelectSubset<T, chatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chats = await prisma.chats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatsUpdateManyArgs>(args: SelectSubset<T, chatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {chatsUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chats = await prisma.chats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatsWithIdOnly = await prisma.chats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends chatsUpdateManyAndReturnArgs>(args: SelectSubset<T, chatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chats.
     * @param {chatsUpsertArgs} args - Arguments to update or create a Chats.
     * @example
     * // Update or create a Chats
     * const chats = await prisma.chats.upsert({
     *   create: {
     *     // ... data to create a Chats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chats we want to update
     *   }
     * })
     */
    upsert<T extends chatsUpsertArgs>(args: SelectSubset<T, chatsUpsertArgs<ExtArgs>>): Prisma__chatsClient<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chats.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends chatsCountArgs>(
      args?: Subset<T, chatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatsAggregateArgs>(args: Subset<T, ChatsAggregateArgs>): Prisma.PrismaPromise<GetChatsAggregateType<T>>

    /**
     * Group by Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsGroupByArgs} args - Group by arguments.
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
      T extends chatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatsGroupByArgs['orderBy'] }
        : { orderBy?: chatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chats model
   */
  readonly fields: chatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat_members<T extends chats$chat_membersArgs<ExtArgs> = {}>(args?: Subset<T, chats$chat_membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chat_types<T extends chats$chat_typesArgs<ExtArgs> = {}>(args?: Subset<T, chats$chat_typesArgs<ExtArgs>>): Prisma__chat_typesClient<$Result.GetResult<Prisma.$chat_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    messages<T extends chats$messagesArgs<ExtArgs> = {}>(args?: Subset<T, chats$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chats model
   */
  interface chatsFieldRefs {
    readonly id: FieldRef<"chats", 'Int'>
    readonly type_id: FieldRef<"chats", 'Int'>
    readonly name: FieldRef<"chats", 'String'>
    readonly created_at: FieldRef<"chats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chats findUnique
   */
  export type chatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsInclude<ExtArgs> | null
    /**
     * Filter, which chats to fetch.
     */
    where: chatsWhereUniqueInput
  }

  /**
   * chats findUniqueOrThrow
   */
  export type chatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsInclude<ExtArgs> | null
    /**
     * Filter, which chats to fetch.
     */
    where: chatsWhereUniqueInput
  }

  /**
   * chats findFirst
   */
  export type chatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsInclude<ExtArgs> | null
    /**
     * Filter, which chats to fetch.
     */
    where?: chatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatsOrderByWithRelationInput | chatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chats.
     */
    cursor?: chatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chats.
     */
    distinct?: ChatsScalarFieldEnum | ChatsScalarFieldEnum[]
  }

  /**
   * chats findFirstOrThrow
   */
  export type chatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsInclude<ExtArgs> | null
    /**
     * Filter, which chats to fetch.
     */
    where?: chatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatsOrderByWithRelationInput | chatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chats.
     */
    cursor?: chatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chats.
     */
    distinct?: ChatsScalarFieldEnum | ChatsScalarFieldEnum[]
  }

  /**
   * chats findMany
   */
  export type chatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsInclude<ExtArgs> | null
    /**
     * Filter, which chats to fetch.
     */
    where?: chatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatsOrderByWithRelationInput | chatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chats.
     */
    cursor?: chatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    distinct?: ChatsScalarFieldEnum | ChatsScalarFieldEnum[]
  }

  /**
   * chats create
   */
  export type chatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsInclude<ExtArgs> | null
    /**
     * The data needed to create a chats.
     */
    data?: XOR<chatsCreateInput, chatsUncheckedCreateInput>
  }

  /**
   * chats createMany
   */
  export type chatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chats.
     */
    data: chatsCreateManyInput | chatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chats createManyAndReturn
   */
  export type chatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * The data used to create many chats.
     */
    data: chatsCreateManyInput | chatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * chats update
   */
  export type chatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsInclude<ExtArgs> | null
    /**
     * The data needed to update a chats.
     */
    data: XOR<chatsUpdateInput, chatsUncheckedUpdateInput>
    /**
     * Choose, which chats to update.
     */
    where: chatsWhereUniqueInput
  }

  /**
   * chats updateMany
   */
  export type chatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chats.
     */
    data: XOR<chatsUpdateManyMutationInput, chatsUncheckedUpdateManyInput>
    /**
     * Filter which chats to update
     */
    where?: chatsWhereInput
    /**
     * Limit how many chats to update.
     */
    limit?: number
  }

  /**
   * chats updateManyAndReturn
   */
  export type chatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * The data used to update chats.
     */
    data: XOR<chatsUpdateManyMutationInput, chatsUncheckedUpdateManyInput>
    /**
     * Filter which chats to update
     */
    where?: chatsWhereInput
    /**
     * Limit how many chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * chats upsert
   */
  export type chatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsInclude<ExtArgs> | null
    /**
     * The filter to search for the chats to update in case it exists.
     */
    where: chatsWhereUniqueInput
    /**
     * In case the chats found by the `where` argument doesn't exist, create a new chats with this data.
     */
    create: XOR<chatsCreateInput, chatsUncheckedCreateInput>
    /**
     * In case the chats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatsUpdateInput, chatsUncheckedUpdateInput>
  }

  /**
   * chats delete
   */
  export type chatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsInclude<ExtArgs> | null
    /**
     * Filter which chats to delete.
     */
    where: chatsWhereUniqueInput
  }

  /**
   * chats deleteMany
   */
  export type chatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chats to delete
     */
    where?: chatsWhereInput
    /**
     * Limit how many chats to delete.
     */
    limit?: number
  }

  /**
   * chats.chat_members
   */
  export type chats$chat_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
    where?: chat_membersWhereInput
    orderBy?: chat_membersOrderByWithRelationInput | chat_membersOrderByWithRelationInput[]
    cursor?: chat_membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Chat_membersScalarFieldEnum | Chat_membersScalarFieldEnum[]
  }

  /**
   * chats.chat_types
   */
  export type chats$chat_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_types
     */
    select?: chat_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_types
     */
    omit?: chat_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_typesInclude<ExtArgs> | null
    where?: chat_typesWhereInput
  }

  /**
   * chats.messages
   */
  export type chats$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * chats without action
   */
  export type chatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsInclude<ExtArgs> | null
  }


  /**
   * Model messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesAvgAggregateOutputType = {
    id: number | null
    chat_id: number | null
    sender_id: number | null
  }

  export type MessagesSumAggregateOutputType = {
    id: number | null
    chat_id: number | null
    sender_id: number | null
  }

  export type MessagesMinAggregateOutputType = {
    id: number | null
    chat_id: number | null
    sender_id: number | null
    content: string | null
    timestamp: Date | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: number | null
    chat_id: number | null
    sender_id: number | null
    content: string | null
    timestamp: Date | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    chat_id: number
    sender_id: number
    content: number
    timestamp: number
    _all: number
  }


  export type MessagesAvgAggregateInputType = {
    id?: true
    chat_id?: true
    sender_id?: true
  }

  export type MessagesSumAggregateInputType = {
    id?: true
    chat_id?: true
    sender_id?: true
  }

  export type MessagesMinAggregateInputType = {
    id?: true
    chat_id?: true
    sender_id?: true
    content?: true
    timestamp?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    chat_id?: true
    sender_id?: true
    content?: true
    timestamp?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    chat_id?: true
    sender_id?: true
    content?: true
    timestamp?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to aggregate.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithAggregationInput | messagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _avg?: MessagesAvgAggregateInputType
    _sum?: MessagesSumAggregateInputType
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: number
    chat_id: number | null
    sender_id: number | null
    content: string | null
    timestamp: Date | null
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chat_id?: boolean
    sender_id?: boolean
    content?: boolean
    timestamp?: boolean
    chats?: boolean | messages$chatsArgs<ExtArgs>
    users?: boolean | messages$usersArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chat_id?: boolean
    sender_id?: boolean
    content?: boolean
    timestamp?: boolean
    chats?: boolean | messages$chatsArgs<ExtArgs>
    users?: boolean | messages$usersArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chat_id?: boolean
    sender_id?: boolean
    content?: boolean
    timestamp?: boolean
    chats?: boolean | messages$chatsArgs<ExtArgs>
    users?: boolean | messages$usersArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectScalar = {
    id?: boolean
    chat_id?: boolean
    sender_id?: boolean
    content?: boolean
    timestamp?: boolean
  }

  export type messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chat_id" | "sender_id" | "content" | "timestamp", ExtArgs["result"]["messages"]>
  export type messagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | messages$chatsArgs<ExtArgs>
    users?: boolean | messages$usersArgs<ExtArgs>
  }
  export type messagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | messages$chatsArgs<ExtArgs>
    users?: boolean | messages$usersArgs<ExtArgs>
  }
  export type messagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | messages$chatsArgs<ExtArgs>
    users?: boolean | messages$usersArgs<ExtArgs>
  }

  export type $messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "messages"
    objects: {
      chats: Prisma.$chatsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chat_id: number | null
      sender_id: number | null
      content: string | null
      timestamp: Date | null
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type messagesGetPayload<S extends boolean | null | undefined | messagesDefaultArgs> = $Result.GetResult<Prisma.$messagesPayload, S>

  type messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['messages'], meta: { name: 'messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {messagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messagesFindUniqueArgs>(args: SelectSubset<T, messagesFindUniqueArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messagesFindFirstArgs>(args?: SelectSubset<T, messagesFindFirstArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messagesFindManyArgs>(args?: SelectSubset<T, messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {messagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends messagesCreateArgs>(args: SelectSubset<T, messagesCreateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messagesCreateManyArgs>(args?: SelectSubset<T, messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {messagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends messagesCreateManyAndReturnArgs>(args?: SelectSubset<T, messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {messagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends messagesDeleteArgs>(args: SelectSubset<T, messagesDeleteArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {messagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messagesUpdateArgs>(args: SelectSubset<T, messagesUpdateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messagesDeleteManyArgs>(args?: SelectSubset<T, messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messagesUpdateManyArgs>(args: SelectSubset<T, messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {messagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends messagesUpdateManyAndReturnArgs>(args: SelectSubset<T, messagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {messagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends messagesUpsertArgs>(args: SelectSubset<T, messagesUpsertArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messagesCountArgs>(
      args?: Subset<T, messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesGroupByArgs} args - Group by arguments.
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
      T extends messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messagesGroupByArgs['orderBy'] }
        : { orderBy?: messagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the messages model
   */
  readonly fields: messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chats<T extends messages$chatsArgs<ExtArgs> = {}>(args?: Subset<T, messages$chatsArgs<ExtArgs>>): Prisma__chatsClient<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends messages$usersArgs<ExtArgs> = {}>(args?: Subset<T, messages$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the messages model
   */
  interface messagesFieldRefs {
    readonly id: FieldRef<"messages", 'Int'>
    readonly chat_id: FieldRef<"messages", 'Int'>
    readonly sender_id: FieldRef<"messages", 'Int'>
    readonly content: FieldRef<"messages", 'String'>
    readonly timestamp: FieldRef<"messages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * messages findUnique
   */
  export type messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findUniqueOrThrow
   */
  export type messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findFirst
   */
  export type messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findFirstOrThrow
   */
  export type messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findMany
   */
  export type messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages create
   */
  export type messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to create a messages.
     */
    data?: XOR<messagesCreateInput, messagesUncheckedCreateInput>
  }

  /**
   * messages createMany
   */
  export type messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messages createManyAndReturn
   */
  export type messagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * messages update
   */
  export type messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to update a messages.
     */
    data: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
    /**
     * Choose, which messages to update.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages updateMany
   */
  export type messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * messages updateManyAndReturn
   */
  export type messagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * messages upsert
   */
  export type messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The filter to search for the messages to update in case it exists.
     */
    where: messagesWhereUniqueInput
    /**
     * In case the messages found by the `where` argument doesn't exist, create a new messages with this data.
     */
    create: XOR<messagesCreateInput, messagesUncheckedCreateInput>
    /**
     * In case the messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
  }

  /**
   * messages delete
   */
  export type messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter which messages to delete.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages deleteMany
   */
  export type messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * messages.chats
   */
  export type messages$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsInclude<ExtArgs> | null
    where?: chatsWhereInput
  }

  /**
   * messages.users
   */
  export type messages$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * messages without action
   */
  export type messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
  }


  /**
   * Model user_contact
   */

  export type AggregateUser_contact = {
    _count: User_contactCountAggregateOutputType | null
    _avg: User_contactAvgAggregateOutputType | null
    _sum: User_contactSumAggregateOutputType | null
    _min: User_contactMinAggregateOutputType | null
    _max: User_contactMaxAggregateOutputType | null
  }

  export type User_contactAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type User_contactSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type User_contactMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    phone: string | null
  }

  export type User_contactMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    phone: string | null
  }

  export type User_contactCountAggregateOutputType = {
    id: number
    user_id: number
    phone: number
    _all: number
  }


  export type User_contactAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type User_contactSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type User_contactMinAggregateInputType = {
    id?: true
    user_id?: true
    phone?: true
  }

  export type User_contactMaxAggregateInputType = {
    id?: true
    user_id?: true
    phone?: true
  }

  export type User_contactCountAggregateInputType = {
    id?: true
    user_id?: true
    phone?: true
    _all?: true
  }

  export type User_contactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_contact to aggregate.
     */
    where?: user_contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_contacts to fetch.
     */
    orderBy?: user_contactOrderByWithRelationInput | user_contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_contacts
    **/
    _count?: true | User_contactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_contactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_contactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_contactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_contactMaxAggregateInputType
  }

  export type GetUser_contactAggregateType<T extends User_contactAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_contact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_contact[P]>
      : GetScalarType<T[P], AggregateUser_contact[P]>
  }




  export type user_contactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_contactWhereInput
    orderBy?: user_contactOrderByWithAggregationInput | user_contactOrderByWithAggregationInput[]
    by: User_contactScalarFieldEnum[] | User_contactScalarFieldEnum
    having?: user_contactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_contactCountAggregateInputType | true
    _avg?: User_contactAvgAggregateInputType
    _sum?: User_contactSumAggregateInputType
    _min?: User_contactMinAggregateInputType
    _max?: User_contactMaxAggregateInputType
  }

  export type User_contactGroupByOutputType = {
    id: number
    user_id: number | null
    phone: string
    _count: User_contactCountAggregateOutputType | null
    _avg: User_contactAvgAggregateOutputType | null
    _sum: User_contactSumAggregateOutputType | null
    _min: User_contactMinAggregateOutputType | null
    _max: User_contactMaxAggregateOutputType | null
  }

  type GetUser_contactGroupByPayload<T extends user_contactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_contactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_contactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_contactGroupByOutputType[P]>
            : GetScalarType<T[P], User_contactGroupByOutputType[P]>
        }
      >
    >


  export type user_contactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    phone?: boolean
    users?: boolean | user_contact$usersArgs<ExtArgs>
  }, ExtArgs["result"]["user_contact"]>

  export type user_contactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    phone?: boolean
    users?: boolean | user_contact$usersArgs<ExtArgs>
  }, ExtArgs["result"]["user_contact"]>

  export type user_contactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    phone?: boolean
    users?: boolean | user_contact$usersArgs<ExtArgs>
  }, ExtArgs["result"]["user_contact"]>

  export type user_contactSelectScalar = {
    id?: boolean
    user_id?: boolean
    phone?: boolean
  }

  export type user_contactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "phone", ExtArgs["result"]["user_contact"]>
  export type user_contactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | user_contact$usersArgs<ExtArgs>
  }
  export type user_contactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | user_contact$usersArgs<ExtArgs>
  }
  export type user_contactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | user_contact$usersArgs<ExtArgs>
  }

  export type $user_contactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_contact"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      phone: string
    }, ExtArgs["result"]["user_contact"]>
    composites: {}
  }

  type user_contactGetPayload<S extends boolean | null | undefined | user_contactDefaultArgs> = $Result.GetResult<Prisma.$user_contactPayload, S>

  type user_contactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_contactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_contactCountAggregateInputType | true
    }

  export interface user_contactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_contact'], meta: { name: 'user_contact' } }
    /**
     * Find zero or one User_contact that matches the filter.
     * @param {user_contactFindUniqueArgs} args - Arguments to find a User_contact
     * @example
     * // Get one User_contact
     * const user_contact = await prisma.user_contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_contactFindUniqueArgs>(args: SelectSubset<T, user_contactFindUniqueArgs<ExtArgs>>): Prisma__user_contactClient<$Result.GetResult<Prisma.$user_contactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_contactFindUniqueOrThrowArgs} args - Arguments to find a User_contact
     * @example
     * // Get one User_contact
     * const user_contact = await prisma.user_contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_contactFindUniqueOrThrowArgs>(args: SelectSubset<T, user_contactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_contactClient<$Result.GetResult<Prisma.$user_contactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_contactFindFirstArgs} args - Arguments to find a User_contact
     * @example
     * // Get one User_contact
     * const user_contact = await prisma.user_contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_contactFindFirstArgs>(args?: SelectSubset<T, user_contactFindFirstArgs<ExtArgs>>): Prisma__user_contactClient<$Result.GetResult<Prisma.$user_contactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_contactFindFirstOrThrowArgs} args - Arguments to find a User_contact
     * @example
     * // Get one User_contact
     * const user_contact = await prisma.user_contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_contactFindFirstOrThrowArgs>(args?: SelectSubset<T, user_contactFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_contactClient<$Result.GetResult<Prisma.$user_contactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_contactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_contacts
     * const user_contacts = await prisma.user_contact.findMany()
     * 
     * // Get first 10 User_contacts
     * const user_contacts = await prisma.user_contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_contactWithIdOnly = await prisma.user_contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_contactFindManyArgs>(args?: SelectSubset<T, user_contactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_contactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_contact.
     * @param {user_contactCreateArgs} args - Arguments to create a User_contact.
     * @example
     * // Create one User_contact
     * const User_contact = await prisma.user_contact.create({
     *   data: {
     *     // ... data to create a User_contact
     *   }
     * })
     * 
     */
    create<T extends user_contactCreateArgs>(args: SelectSubset<T, user_contactCreateArgs<ExtArgs>>): Prisma__user_contactClient<$Result.GetResult<Prisma.$user_contactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_contacts.
     * @param {user_contactCreateManyArgs} args - Arguments to create many User_contacts.
     * @example
     * // Create many User_contacts
     * const user_contact = await prisma.user_contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_contactCreateManyArgs>(args?: SelectSubset<T, user_contactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_contacts and returns the data saved in the database.
     * @param {user_contactCreateManyAndReturnArgs} args - Arguments to create many User_contacts.
     * @example
     * // Create many User_contacts
     * const user_contact = await prisma.user_contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_contacts and only return the `id`
     * const user_contactWithIdOnly = await prisma.user_contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_contactCreateManyAndReturnArgs>(args?: SelectSubset<T, user_contactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_contactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_contact.
     * @param {user_contactDeleteArgs} args - Arguments to delete one User_contact.
     * @example
     * // Delete one User_contact
     * const User_contact = await prisma.user_contact.delete({
     *   where: {
     *     // ... filter to delete one User_contact
     *   }
     * })
     * 
     */
    delete<T extends user_contactDeleteArgs>(args: SelectSubset<T, user_contactDeleteArgs<ExtArgs>>): Prisma__user_contactClient<$Result.GetResult<Prisma.$user_contactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_contact.
     * @param {user_contactUpdateArgs} args - Arguments to update one User_contact.
     * @example
     * // Update one User_contact
     * const user_contact = await prisma.user_contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_contactUpdateArgs>(args: SelectSubset<T, user_contactUpdateArgs<ExtArgs>>): Prisma__user_contactClient<$Result.GetResult<Prisma.$user_contactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_contacts.
     * @param {user_contactDeleteManyArgs} args - Arguments to filter User_contacts to delete.
     * @example
     * // Delete a few User_contacts
     * const { count } = await prisma.user_contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_contactDeleteManyArgs>(args?: SelectSubset<T, user_contactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_contactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_contacts
     * const user_contact = await prisma.user_contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_contactUpdateManyArgs>(args: SelectSubset<T, user_contactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_contacts and returns the data updated in the database.
     * @param {user_contactUpdateManyAndReturnArgs} args - Arguments to update many User_contacts.
     * @example
     * // Update many User_contacts
     * const user_contact = await prisma.user_contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_contacts and only return the `id`
     * const user_contactWithIdOnly = await prisma.user_contact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_contactUpdateManyAndReturnArgs>(args: SelectSubset<T, user_contactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_contactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_contact.
     * @param {user_contactUpsertArgs} args - Arguments to update or create a User_contact.
     * @example
     * // Update or create a User_contact
     * const user_contact = await prisma.user_contact.upsert({
     *   create: {
     *     // ... data to create a User_contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_contact we want to update
     *   }
     * })
     */
    upsert<T extends user_contactUpsertArgs>(args: SelectSubset<T, user_contactUpsertArgs<ExtArgs>>): Prisma__user_contactClient<$Result.GetResult<Prisma.$user_contactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_contactCountArgs} args - Arguments to filter User_contacts to count.
     * @example
     * // Count the number of User_contacts
     * const count = await prisma.user_contact.count({
     *   where: {
     *     // ... the filter for the User_contacts we want to count
     *   }
     * })
    **/
    count<T extends user_contactCountArgs>(
      args?: Subset<T, user_contactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_contactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_contactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_contactAggregateArgs>(args: Subset<T, User_contactAggregateArgs>): Prisma.PrismaPromise<GetUser_contactAggregateType<T>>

    /**
     * Group by User_contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_contactGroupByArgs} args - Group by arguments.
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
      T extends user_contactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_contactGroupByArgs['orderBy'] }
        : { orderBy?: user_contactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_contactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_contactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_contact model
   */
  readonly fields: user_contactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_contactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends user_contact$usersArgs<ExtArgs> = {}>(args?: Subset<T, user_contact$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_contact model
   */
  interface user_contactFieldRefs {
    readonly id: FieldRef<"user_contact", 'Int'>
    readonly user_id: FieldRef<"user_contact", 'Int'>
    readonly phone: FieldRef<"user_contact", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user_contact findUnique
   */
  export type user_contactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_contact
     */
    select?: user_contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_contact
     */
    omit?: user_contactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_contactInclude<ExtArgs> | null
    /**
     * Filter, which user_contact to fetch.
     */
    where: user_contactWhereUniqueInput
  }

  /**
   * user_contact findUniqueOrThrow
   */
  export type user_contactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_contact
     */
    select?: user_contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_contact
     */
    omit?: user_contactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_contactInclude<ExtArgs> | null
    /**
     * Filter, which user_contact to fetch.
     */
    where: user_contactWhereUniqueInput
  }

  /**
   * user_contact findFirst
   */
  export type user_contactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_contact
     */
    select?: user_contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_contact
     */
    omit?: user_contactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_contactInclude<ExtArgs> | null
    /**
     * Filter, which user_contact to fetch.
     */
    where?: user_contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_contacts to fetch.
     */
    orderBy?: user_contactOrderByWithRelationInput | user_contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_contacts.
     */
    cursor?: user_contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_contacts.
     */
    distinct?: User_contactScalarFieldEnum | User_contactScalarFieldEnum[]
  }

  /**
   * user_contact findFirstOrThrow
   */
  export type user_contactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_contact
     */
    select?: user_contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_contact
     */
    omit?: user_contactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_contactInclude<ExtArgs> | null
    /**
     * Filter, which user_contact to fetch.
     */
    where?: user_contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_contacts to fetch.
     */
    orderBy?: user_contactOrderByWithRelationInput | user_contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_contacts.
     */
    cursor?: user_contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_contacts.
     */
    distinct?: User_contactScalarFieldEnum | User_contactScalarFieldEnum[]
  }

  /**
   * user_contact findMany
   */
  export type user_contactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_contact
     */
    select?: user_contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_contact
     */
    omit?: user_contactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_contactInclude<ExtArgs> | null
    /**
     * Filter, which user_contacts to fetch.
     */
    where?: user_contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_contacts to fetch.
     */
    orderBy?: user_contactOrderByWithRelationInput | user_contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_contacts.
     */
    cursor?: user_contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_contacts.
     */
    skip?: number
    distinct?: User_contactScalarFieldEnum | User_contactScalarFieldEnum[]
  }

  /**
   * user_contact create
   */
  export type user_contactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_contact
     */
    select?: user_contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_contact
     */
    omit?: user_contactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_contactInclude<ExtArgs> | null
    /**
     * The data needed to create a user_contact.
     */
    data: XOR<user_contactCreateInput, user_contactUncheckedCreateInput>
  }

  /**
   * user_contact createMany
   */
  export type user_contactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_contacts.
     */
    data: user_contactCreateManyInput | user_contactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_contact createManyAndReturn
   */
  export type user_contactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_contact
     */
    select?: user_contactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_contact
     */
    omit?: user_contactOmit<ExtArgs> | null
    /**
     * The data used to create many user_contacts.
     */
    data: user_contactCreateManyInput | user_contactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_contactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_contact update
   */
  export type user_contactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_contact
     */
    select?: user_contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_contact
     */
    omit?: user_contactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_contactInclude<ExtArgs> | null
    /**
     * The data needed to update a user_contact.
     */
    data: XOR<user_contactUpdateInput, user_contactUncheckedUpdateInput>
    /**
     * Choose, which user_contact to update.
     */
    where: user_contactWhereUniqueInput
  }

  /**
   * user_contact updateMany
   */
  export type user_contactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_contacts.
     */
    data: XOR<user_contactUpdateManyMutationInput, user_contactUncheckedUpdateManyInput>
    /**
     * Filter which user_contacts to update
     */
    where?: user_contactWhereInput
    /**
     * Limit how many user_contacts to update.
     */
    limit?: number
  }

  /**
   * user_contact updateManyAndReturn
   */
  export type user_contactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_contact
     */
    select?: user_contactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_contact
     */
    omit?: user_contactOmit<ExtArgs> | null
    /**
     * The data used to update user_contacts.
     */
    data: XOR<user_contactUpdateManyMutationInput, user_contactUncheckedUpdateManyInput>
    /**
     * Filter which user_contacts to update
     */
    where?: user_contactWhereInput
    /**
     * Limit how many user_contacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_contactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_contact upsert
   */
  export type user_contactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_contact
     */
    select?: user_contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_contact
     */
    omit?: user_contactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_contactInclude<ExtArgs> | null
    /**
     * The filter to search for the user_contact to update in case it exists.
     */
    where: user_contactWhereUniqueInput
    /**
     * In case the user_contact found by the `where` argument doesn't exist, create a new user_contact with this data.
     */
    create: XOR<user_contactCreateInput, user_contactUncheckedCreateInput>
    /**
     * In case the user_contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_contactUpdateInput, user_contactUncheckedUpdateInput>
  }

  /**
   * user_contact delete
   */
  export type user_contactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_contact
     */
    select?: user_contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_contact
     */
    omit?: user_contactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_contactInclude<ExtArgs> | null
    /**
     * Filter which user_contact to delete.
     */
    where: user_contactWhereUniqueInput
  }

  /**
   * user_contact deleteMany
   */
  export type user_contactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_contacts to delete
     */
    where?: user_contactWhereInput
    /**
     * Limit how many user_contacts to delete.
     */
    limit?: number
  }

  /**
   * user_contact.users
   */
  export type user_contact$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * user_contact without action
   */
  export type user_contactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_contact
     */
    select?: user_contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_contact
     */
    omit?: user_contactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_contactInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    password: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    password: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    chat_members?: boolean | users$chat_membersArgs<ExtArgs>
    messages?: boolean | users$messagesArgs<ExtArgs>
    user_contact?: boolean | users$user_contactArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_members?: boolean | users$chat_membersArgs<ExtArgs>
    messages?: boolean | users$messagesArgs<ExtArgs>
    user_contact?: boolean | users$user_contactArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      chat_members: Prisma.$chat_membersPayload<ExtArgs>[]
      messages: Prisma.$messagesPayload<ExtArgs>[]
      user_contact: Prisma.$user_contactPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      password: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat_members<T extends users$chat_membersArgs<ExtArgs> = {}>(args?: Subset<T, users$chat_membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends users$messagesArgs<ExtArgs> = {}>(args?: Subset<T, users$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_contact<T extends users$user_contactArgs<ExtArgs> = {}>(args?: Subset<T, users$user_contactArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_contactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.chat_members
   */
  export type users$chat_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
    where?: chat_membersWhereInput
    orderBy?: chat_membersOrderByWithRelationInput | chat_membersOrderByWithRelationInput[]
    cursor?: chat_membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Chat_membersScalarFieldEnum | Chat_membersScalarFieldEnum[]
  }

  /**
   * users.messages
   */
  export type users$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * users.user_contact
   */
  export type users$user_contactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_contact
     */
    select?: user_contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_contact
     */
    omit?: user_contactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_contactInclude<ExtArgs> | null
    where?: user_contactWhereInput
    orderBy?: user_contactOrderByWithRelationInput | user_contactOrderByWithRelationInput[]
    cursor?: user_contactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_contactScalarFieldEnum | User_contactScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const Chat_membersScalarFieldEnum: {
    id: 'id',
    chat_id: 'chat_id',
    user_id: 'user_id',
    joined_at: 'joined_at'
  };

  export type Chat_membersScalarFieldEnum = (typeof Chat_membersScalarFieldEnum)[keyof typeof Chat_membersScalarFieldEnum]


  export const Chat_typesScalarFieldEnum: {
    id: 'id',
    type: 'type'
  };

  export type Chat_typesScalarFieldEnum = (typeof Chat_typesScalarFieldEnum)[keyof typeof Chat_typesScalarFieldEnum]


  export const ChatsScalarFieldEnum: {
    id: 'id',
    type_id: 'type_id',
    name: 'name',
    created_at: 'created_at'
  };

  export type ChatsScalarFieldEnum = (typeof ChatsScalarFieldEnum)[keyof typeof ChatsScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    chat_id: 'chat_id',
    sender_id: 'sender_id',
    content: 'content',
    timestamp: 'timestamp'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const User_contactScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    phone: 'phone'
  };

  export type User_contactScalarFieldEnum = (typeof User_contactScalarFieldEnum)[keyof typeof User_contactScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


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


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type chat_membersWhereInput = {
    AND?: chat_membersWhereInput | chat_membersWhereInput[]
    OR?: chat_membersWhereInput[]
    NOT?: chat_membersWhereInput | chat_membersWhereInput[]
    id?: IntFilter<"chat_members"> | number
    chat_id?: IntNullableFilter<"chat_members"> | number | null
    user_id?: IntNullableFilter<"chat_members"> | number | null
    joined_at?: DateTimeNullableFilter<"chat_members"> | Date | string | null
    chats?: XOR<ChatsNullableScalarRelationFilter, chatsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type chat_membersOrderByWithRelationInput = {
    id?: SortOrder
    chat_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    joined_at?: SortOrderInput | SortOrder
    chats?: chatsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type chat_membersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: chat_membersWhereInput | chat_membersWhereInput[]
    OR?: chat_membersWhereInput[]
    NOT?: chat_membersWhereInput | chat_membersWhereInput[]
    chat_id?: IntNullableFilter<"chat_members"> | number | null
    user_id?: IntNullableFilter<"chat_members"> | number | null
    joined_at?: DateTimeNullableFilter<"chat_members"> | Date | string | null
    chats?: XOR<ChatsNullableScalarRelationFilter, chatsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type chat_membersOrderByWithAggregationInput = {
    id?: SortOrder
    chat_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    joined_at?: SortOrderInput | SortOrder
    _count?: chat_membersCountOrderByAggregateInput
    _avg?: chat_membersAvgOrderByAggregateInput
    _max?: chat_membersMaxOrderByAggregateInput
    _min?: chat_membersMinOrderByAggregateInput
    _sum?: chat_membersSumOrderByAggregateInput
  }

  export type chat_membersScalarWhereWithAggregatesInput = {
    AND?: chat_membersScalarWhereWithAggregatesInput | chat_membersScalarWhereWithAggregatesInput[]
    OR?: chat_membersScalarWhereWithAggregatesInput[]
    NOT?: chat_membersScalarWhereWithAggregatesInput | chat_membersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chat_members"> | number
    chat_id?: IntNullableWithAggregatesFilter<"chat_members"> | number | null
    user_id?: IntNullableWithAggregatesFilter<"chat_members"> | number | null
    joined_at?: DateTimeNullableWithAggregatesFilter<"chat_members"> | Date | string | null
  }

  export type chat_typesWhereInput = {
    AND?: chat_typesWhereInput | chat_typesWhereInput[]
    OR?: chat_typesWhereInput[]
    NOT?: chat_typesWhereInput | chat_typesWhereInput[]
    id?: IntFilter<"chat_types"> | number
    type?: StringFilter<"chat_types"> | string
    chats?: ChatsListRelationFilter
  }

  export type chat_typesOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    chats?: chatsOrderByRelationAggregateInput
  }

  export type chat_typesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    type?: string
    AND?: chat_typesWhereInput | chat_typesWhereInput[]
    OR?: chat_typesWhereInput[]
    NOT?: chat_typesWhereInput | chat_typesWhereInput[]
    chats?: ChatsListRelationFilter
  }, "id" | "type">

  export type chat_typesOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    _count?: chat_typesCountOrderByAggregateInput
    _avg?: chat_typesAvgOrderByAggregateInput
    _max?: chat_typesMaxOrderByAggregateInput
    _min?: chat_typesMinOrderByAggregateInput
    _sum?: chat_typesSumOrderByAggregateInput
  }

  export type chat_typesScalarWhereWithAggregatesInput = {
    AND?: chat_typesScalarWhereWithAggregatesInput | chat_typesScalarWhereWithAggregatesInput[]
    OR?: chat_typesScalarWhereWithAggregatesInput[]
    NOT?: chat_typesScalarWhereWithAggregatesInput | chat_typesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chat_types"> | number
    type?: StringWithAggregatesFilter<"chat_types"> | string
  }

  export type chatsWhereInput = {
    AND?: chatsWhereInput | chatsWhereInput[]
    OR?: chatsWhereInput[]
    NOT?: chatsWhereInput | chatsWhereInput[]
    id?: IntFilter<"chats"> | number
    type_id?: IntNullableFilter<"chats"> | number | null
    name?: StringNullableFilter<"chats"> | string | null
    created_at?: DateTimeNullableFilter<"chats"> | Date | string | null
    chat_members?: Chat_membersListRelationFilter
    chat_types?: XOR<Chat_typesNullableScalarRelationFilter, chat_typesWhereInput> | null
    messages?: MessagesListRelationFilter
  }

  export type chatsOrderByWithRelationInput = {
    id?: SortOrder
    type_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    chat_members?: chat_membersOrderByRelationAggregateInput
    chat_types?: chat_typesOrderByWithRelationInput
    messages?: messagesOrderByRelationAggregateInput
  }

  export type chatsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: chatsWhereInput | chatsWhereInput[]
    OR?: chatsWhereInput[]
    NOT?: chatsWhereInput | chatsWhereInput[]
    type_id?: IntNullableFilter<"chats"> | number | null
    name?: StringNullableFilter<"chats"> | string | null
    created_at?: DateTimeNullableFilter<"chats"> | Date | string | null
    chat_members?: Chat_membersListRelationFilter
    chat_types?: XOR<Chat_typesNullableScalarRelationFilter, chat_typesWhereInput> | null
    messages?: MessagesListRelationFilter
  }, "id">

  export type chatsOrderByWithAggregationInput = {
    id?: SortOrder
    type_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: chatsCountOrderByAggregateInput
    _avg?: chatsAvgOrderByAggregateInput
    _max?: chatsMaxOrderByAggregateInput
    _min?: chatsMinOrderByAggregateInput
    _sum?: chatsSumOrderByAggregateInput
  }

  export type chatsScalarWhereWithAggregatesInput = {
    AND?: chatsScalarWhereWithAggregatesInput | chatsScalarWhereWithAggregatesInput[]
    OR?: chatsScalarWhereWithAggregatesInput[]
    NOT?: chatsScalarWhereWithAggregatesInput | chatsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chats"> | number
    type_id?: IntNullableWithAggregatesFilter<"chats"> | number | null
    name?: StringNullableWithAggregatesFilter<"chats"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"chats"> | Date | string | null
  }

  export type messagesWhereInput = {
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    id?: IntFilter<"messages"> | number
    chat_id?: IntNullableFilter<"messages"> | number | null
    sender_id?: IntNullableFilter<"messages"> | number | null
    content?: StringNullableFilter<"messages"> | string | null
    timestamp?: DateTimeNullableFilter<"messages"> | Date | string | null
    chats?: XOR<ChatsNullableScalarRelationFilter, chatsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type messagesOrderByWithRelationInput = {
    id?: SortOrder
    chat_id?: SortOrderInput | SortOrder
    sender_id?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    chats?: chatsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    chat_id?: IntNullableFilter<"messages"> | number | null
    sender_id?: IntNullableFilter<"messages"> | number | null
    content?: StringNullableFilter<"messages"> | string | null
    timestamp?: DateTimeNullableFilter<"messages"> | Date | string | null
    chats?: XOR<ChatsNullableScalarRelationFilter, chatsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type messagesOrderByWithAggregationInput = {
    id?: SortOrder
    chat_id?: SortOrderInput | SortOrder
    sender_id?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    _count?: messagesCountOrderByAggregateInput
    _avg?: messagesAvgOrderByAggregateInput
    _max?: messagesMaxOrderByAggregateInput
    _min?: messagesMinOrderByAggregateInput
    _sum?: messagesSumOrderByAggregateInput
  }

  export type messagesScalarWhereWithAggregatesInput = {
    AND?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    OR?: messagesScalarWhereWithAggregatesInput[]
    NOT?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"messages"> | number
    chat_id?: IntNullableWithAggregatesFilter<"messages"> | number | null
    sender_id?: IntNullableWithAggregatesFilter<"messages"> | number | null
    content?: StringNullableWithAggregatesFilter<"messages"> | string | null
    timestamp?: DateTimeNullableWithAggregatesFilter<"messages"> | Date | string | null
  }

  export type user_contactWhereInput = {
    AND?: user_contactWhereInput | user_contactWhereInput[]
    OR?: user_contactWhereInput[]
    NOT?: user_contactWhereInput | user_contactWhereInput[]
    id?: IntFilter<"user_contact"> | number
    user_id?: IntNullableFilter<"user_contact"> | number | null
    phone?: StringFilter<"user_contact"> | string
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type user_contactOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    phone?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type user_contactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone?: string
    AND?: user_contactWhereInput | user_contactWhereInput[]
    OR?: user_contactWhereInput[]
    NOT?: user_contactWhereInput | user_contactWhereInput[]
    user_id?: IntNullableFilter<"user_contact"> | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id" | "phone">

  export type user_contactOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    phone?: SortOrder
    _count?: user_contactCountOrderByAggregateInput
    _avg?: user_contactAvgOrderByAggregateInput
    _max?: user_contactMaxOrderByAggregateInput
    _min?: user_contactMinOrderByAggregateInput
    _sum?: user_contactSumOrderByAggregateInput
  }

  export type user_contactScalarWhereWithAggregatesInput = {
    AND?: user_contactScalarWhereWithAggregatesInput | user_contactScalarWhereWithAggregatesInput[]
    OR?: user_contactScalarWhereWithAggregatesInput[]
    NOT?: user_contactScalarWhereWithAggregatesInput | user_contactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_contact"> | number
    user_id?: IntNullableWithAggregatesFilter<"user_contact"> | number | null
    phone?: StringWithAggregatesFilter<"user_contact"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    chat_members?: Chat_membersListRelationFilter
    messages?: MessagesListRelationFilter
    user_contact?: User_contactListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    chat_members?: chat_membersOrderByRelationAggregateInput
    messages?: messagesOrderByRelationAggregateInput
    user_contact?: user_contactOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    chat_members?: Chat_membersListRelationFilter
    messages?: MessagesListRelationFilter
    user_contact?: User_contactListRelationFilter
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
  }

  export type chat_membersCreateInput = {
    joined_at?: Date | string | null
    chats?: chatsCreateNestedOneWithoutChat_membersInput
    users?: usersCreateNestedOneWithoutChat_membersInput
  }

  export type chat_membersUncheckedCreateInput = {
    id?: number
    chat_id?: number | null
    user_id?: number | null
    joined_at?: Date | string | null
  }

  export type chat_membersUpdateInput = {
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chats?: chatsUpdateOneWithoutChat_membersNestedInput
    users?: usersUpdateOneWithoutChat_membersNestedInput
  }

  export type chat_membersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type chat_membersCreateManyInput = {
    id?: number
    chat_id?: number | null
    user_id?: number | null
    joined_at?: Date | string | null
  }

  export type chat_membersUpdateManyMutationInput = {
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type chat_membersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type chat_typesCreateInput = {
    type: string
    chats?: chatsCreateNestedManyWithoutChat_typesInput
  }

  export type chat_typesUncheckedCreateInput = {
    id?: number
    type: string
    chats?: chatsUncheckedCreateNestedManyWithoutChat_typesInput
  }

  export type chat_typesUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    chats?: chatsUpdateManyWithoutChat_typesNestedInput
  }

  export type chat_typesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    chats?: chatsUncheckedUpdateManyWithoutChat_typesNestedInput
  }

  export type chat_typesCreateManyInput = {
    id?: number
    type: string
  }

  export type chat_typesUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type chat_typesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type chatsCreateInput = {
    name?: string | null
    created_at?: Date | string | null
    chat_members?: chat_membersCreateNestedManyWithoutChatsInput
    chat_types?: chat_typesCreateNestedOneWithoutChatsInput
    messages?: messagesCreateNestedManyWithoutChatsInput
  }

  export type chatsUncheckedCreateInput = {
    id?: number
    type_id?: number | null
    name?: string | null
    created_at?: Date | string | null
    chat_members?: chat_membersUncheckedCreateNestedManyWithoutChatsInput
    messages?: messagesUncheckedCreateNestedManyWithoutChatsInput
  }

  export type chatsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_members?: chat_membersUpdateManyWithoutChatsNestedInput
    chat_types?: chat_typesUpdateOneWithoutChatsNestedInput
    messages?: messagesUpdateManyWithoutChatsNestedInput
  }

  export type chatsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_members?: chat_membersUncheckedUpdateManyWithoutChatsNestedInput
    messages?: messagesUncheckedUpdateManyWithoutChatsNestedInput
  }

  export type chatsCreateManyInput = {
    id?: number
    type_id?: number | null
    name?: string | null
    created_at?: Date | string | null
  }

  export type chatsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type chatsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesCreateInput = {
    content?: string | null
    timestamp?: Date | string | null
    chats?: chatsCreateNestedOneWithoutMessagesInput
    users?: usersCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateInput = {
    id?: number
    chat_id?: number | null
    sender_id?: number | null
    content?: string | null
    timestamp?: Date | string | null
  }

  export type messagesUpdateInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chats?: chatsUpdateOneWithoutMessagesNestedInput
    users?: usersUpdateOneWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_id?: NullableIntFieldUpdateOperationsInput | number | null
    sender_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesCreateManyInput = {
    id?: number
    chat_id?: number | null
    sender_id?: number | null
    content?: string | null
    timestamp?: Date | string | null
  }

  export type messagesUpdateManyMutationInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_id?: NullableIntFieldUpdateOperationsInput | number | null
    sender_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_contactCreateInput = {
    phone: string
    users?: usersCreateNestedOneWithoutUser_contactInput
  }

  export type user_contactUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    phone: string
  }

  export type user_contactUpdateInput = {
    phone?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneWithoutUser_contactNestedInput
  }

  export type user_contactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type user_contactCreateManyInput = {
    id?: number
    user_id?: number | null
    phone: string
  }

  export type user_contactUpdateManyMutationInput = {
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type user_contactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    name: string
    password: string
    chat_members?: chat_membersCreateNestedManyWithoutUsersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    user_contact?: user_contactCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name: string
    password: string
    chat_members?: chat_membersUncheckedCreateNestedManyWithoutUsersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    user_contact?: user_contactUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    chat_members?: chat_membersUpdateManyWithoutUsersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    user_contact?: user_contactUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    chat_members?: chat_membersUncheckedUpdateManyWithoutUsersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    user_contact?: user_contactUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name: string
    password: string
  }

  export type usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ChatsNullableScalarRelationFilter = {
    is?: chatsWhereInput | null
    isNot?: chatsWhereInput | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type chat_membersCountOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    user_id?: SortOrder
    joined_at?: SortOrder
  }

  export type chat_membersAvgOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    user_id?: SortOrder
  }

  export type chat_membersMaxOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    user_id?: SortOrder
    joined_at?: SortOrder
  }

  export type chat_membersMinOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    user_id?: SortOrder
    joined_at?: SortOrder
  }

  export type chat_membersSumOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ChatsListRelationFilter = {
    every?: chatsWhereInput
    some?: chatsWhereInput
    none?: chatsWhereInput
  }

  export type chatsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type chat_typesCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type chat_typesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type chat_typesMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type chat_typesMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type chat_typesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Chat_membersListRelationFilter = {
    every?: chat_membersWhereInput
    some?: chat_membersWhereInput
    none?: chat_membersWhereInput
  }

  export type Chat_typesNullableScalarRelationFilter = {
    is?: chat_typesWhereInput | null
    isNot?: chat_typesWhereInput | null
  }

  export type MessagesListRelationFilter = {
    every?: messagesWhereInput
    some?: messagesWhereInput
    none?: messagesWhereInput
  }

  export type chat_membersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type messagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type chatsCountOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type chatsAvgOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
  }

  export type chatsMaxOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type chatsMinOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type chatsSumOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type messagesCountOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
  }

  export type messagesAvgOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    sender_id?: SortOrder
  }

  export type messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
  }

  export type messagesMinOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
  }

  export type messagesSumOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    sender_id?: SortOrder
  }

  export type user_contactCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    phone?: SortOrder
  }

  export type user_contactAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type user_contactMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    phone?: SortOrder
  }

  export type user_contactMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    phone?: SortOrder
  }

  export type user_contactSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type User_contactListRelationFilter = {
    every?: user_contactWhereInput
    some?: user_contactWhereInput
    none?: user_contactWhereInput
  }

  export type user_contactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type chatsCreateNestedOneWithoutChat_membersInput = {
    create?: XOR<chatsCreateWithoutChat_membersInput, chatsUncheckedCreateWithoutChat_membersInput>
    connectOrCreate?: chatsCreateOrConnectWithoutChat_membersInput
    connect?: chatsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutChat_membersInput = {
    create?: XOR<usersCreateWithoutChat_membersInput, usersUncheckedCreateWithoutChat_membersInput>
    connectOrCreate?: usersCreateOrConnectWithoutChat_membersInput
    connect?: usersWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type chatsUpdateOneWithoutChat_membersNestedInput = {
    create?: XOR<chatsCreateWithoutChat_membersInput, chatsUncheckedCreateWithoutChat_membersInput>
    connectOrCreate?: chatsCreateOrConnectWithoutChat_membersInput
    upsert?: chatsUpsertWithoutChat_membersInput
    disconnect?: chatsWhereInput | boolean
    delete?: chatsWhereInput | boolean
    connect?: chatsWhereUniqueInput
    update?: XOR<XOR<chatsUpdateToOneWithWhereWithoutChat_membersInput, chatsUpdateWithoutChat_membersInput>, chatsUncheckedUpdateWithoutChat_membersInput>
  }

  export type usersUpdateOneWithoutChat_membersNestedInput = {
    create?: XOR<usersCreateWithoutChat_membersInput, usersUncheckedCreateWithoutChat_membersInput>
    connectOrCreate?: usersCreateOrConnectWithoutChat_membersInput
    upsert?: usersUpsertWithoutChat_membersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutChat_membersInput, usersUpdateWithoutChat_membersInput>, usersUncheckedUpdateWithoutChat_membersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type chatsCreateNestedManyWithoutChat_typesInput = {
    create?: XOR<chatsCreateWithoutChat_typesInput, chatsUncheckedCreateWithoutChat_typesInput> | chatsCreateWithoutChat_typesInput[] | chatsUncheckedCreateWithoutChat_typesInput[]
    connectOrCreate?: chatsCreateOrConnectWithoutChat_typesInput | chatsCreateOrConnectWithoutChat_typesInput[]
    createMany?: chatsCreateManyChat_typesInputEnvelope
    connect?: chatsWhereUniqueInput | chatsWhereUniqueInput[]
  }

  export type chatsUncheckedCreateNestedManyWithoutChat_typesInput = {
    create?: XOR<chatsCreateWithoutChat_typesInput, chatsUncheckedCreateWithoutChat_typesInput> | chatsCreateWithoutChat_typesInput[] | chatsUncheckedCreateWithoutChat_typesInput[]
    connectOrCreate?: chatsCreateOrConnectWithoutChat_typesInput | chatsCreateOrConnectWithoutChat_typesInput[]
    createMany?: chatsCreateManyChat_typesInputEnvelope
    connect?: chatsWhereUniqueInput | chatsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type chatsUpdateManyWithoutChat_typesNestedInput = {
    create?: XOR<chatsCreateWithoutChat_typesInput, chatsUncheckedCreateWithoutChat_typesInput> | chatsCreateWithoutChat_typesInput[] | chatsUncheckedCreateWithoutChat_typesInput[]
    connectOrCreate?: chatsCreateOrConnectWithoutChat_typesInput | chatsCreateOrConnectWithoutChat_typesInput[]
    upsert?: chatsUpsertWithWhereUniqueWithoutChat_typesInput | chatsUpsertWithWhereUniqueWithoutChat_typesInput[]
    createMany?: chatsCreateManyChat_typesInputEnvelope
    set?: chatsWhereUniqueInput | chatsWhereUniqueInput[]
    disconnect?: chatsWhereUniqueInput | chatsWhereUniqueInput[]
    delete?: chatsWhereUniqueInput | chatsWhereUniqueInput[]
    connect?: chatsWhereUniqueInput | chatsWhereUniqueInput[]
    update?: chatsUpdateWithWhereUniqueWithoutChat_typesInput | chatsUpdateWithWhereUniqueWithoutChat_typesInput[]
    updateMany?: chatsUpdateManyWithWhereWithoutChat_typesInput | chatsUpdateManyWithWhereWithoutChat_typesInput[]
    deleteMany?: chatsScalarWhereInput | chatsScalarWhereInput[]
  }

  export type chatsUncheckedUpdateManyWithoutChat_typesNestedInput = {
    create?: XOR<chatsCreateWithoutChat_typesInput, chatsUncheckedCreateWithoutChat_typesInput> | chatsCreateWithoutChat_typesInput[] | chatsUncheckedCreateWithoutChat_typesInput[]
    connectOrCreate?: chatsCreateOrConnectWithoutChat_typesInput | chatsCreateOrConnectWithoutChat_typesInput[]
    upsert?: chatsUpsertWithWhereUniqueWithoutChat_typesInput | chatsUpsertWithWhereUniqueWithoutChat_typesInput[]
    createMany?: chatsCreateManyChat_typesInputEnvelope
    set?: chatsWhereUniqueInput | chatsWhereUniqueInput[]
    disconnect?: chatsWhereUniqueInput | chatsWhereUniqueInput[]
    delete?: chatsWhereUniqueInput | chatsWhereUniqueInput[]
    connect?: chatsWhereUniqueInput | chatsWhereUniqueInput[]
    update?: chatsUpdateWithWhereUniqueWithoutChat_typesInput | chatsUpdateWithWhereUniqueWithoutChat_typesInput[]
    updateMany?: chatsUpdateManyWithWhereWithoutChat_typesInput | chatsUpdateManyWithWhereWithoutChat_typesInput[]
    deleteMany?: chatsScalarWhereInput | chatsScalarWhereInput[]
  }

  export type chat_membersCreateNestedManyWithoutChatsInput = {
    create?: XOR<chat_membersCreateWithoutChatsInput, chat_membersUncheckedCreateWithoutChatsInput> | chat_membersCreateWithoutChatsInput[] | chat_membersUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: chat_membersCreateOrConnectWithoutChatsInput | chat_membersCreateOrConnectWithoutChatsInput[]
    createMany?: chat_membersCreateManyChatsInputEnvelope
    connect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
  }

  export type chat_typesCreateNestedOneWithoutChatsInput = {
    create?: XOR<chat_typesCreateWithoutChatsInput, chat_typesUncheckedCreateWithoutChatsInput>
    connectOrCreate?: chat_typesCreateOrConnectWithoutChatsInput
    connect?: chat_typesWhereUniqueInput
  }

  export type messagesCreateNestedManyWithoutChatsInput = {
    create?: XOR<messagesCreateWithoutChatsInput, messagesUncheckedCreateWithoutChatsInput> | messagesCreateWithoutChatsInput[] | messagesUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutChatsInput | messagesCreateOrConnectWithoutChatsInput[]
    createMany?: messagesCreateManyChatsInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type chat_membersUncheckedCreateNestedManyWithoutChatsInput = {
    create?: XOR<chat_membersCreateWithoutChatsInput, chat_membersUncheckedCreateWithoutChatsInput> | chat_membersCreateWithoutChatsInput[] | chat_membersUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: chat_membersCreateOrConnectWithoutChatsInput | chat_membersCreateOrConnectWithoutChatsInput[]
    createMany?: chat_membersCreateManyChatsInputEnvelope
    connect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutChatsInput = {
    create?: XOR<messagesCreateWithoutChatsInput, messagesUncheckedCreateWithoutChatsInput> | messagesCreateWithoutChatsInput[] | messagesUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutChatsInput | messagesCreateOrConnectWithoutChatsInput[]
    createMany?: messagesCreateManyChatsInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type chat_membersUpdateManyWithoutChatsNestedInput = {
    create?: XOR<chat_membersCreateWithoutChatsInput, chat_membersUncheckedCreateWithoutChatsInput> | chat_membersCreateWithoutChatsInput[] | chat_membersUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: chat_membersCreateOrConnectWithoutChatsInput | chat_membersCreateOrConnectWithoutChatsInput[]
    upsert?: chat_membersUpsertWithWhereUniqueWithoutChatsInput | chat_membersUpsertWithWhereUniqueWithoutChatsInput[]
    createMany?: chat_membersCreateManyChatsInputEnvelope
    set?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    disconnect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    delete?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    connect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    update?: chat_membersUpdateWithWhereUniqueWithoutChatsInput | chat_membersUpdateWithWhereUniqueWithoutChatsInput[]
    updateMany?: chat_membersUpdateManyWithWhereWithoutChatsInput | chat_membersUpdateManyWithWhereWithoutChatsInput[]
    deleteMany?: chat_membersScalarWhereInput | chat_membersScalarWhereInput[]
  }

  export type chat_typesUpdateOneWithoutChatsNestedInput = {
    create?: XOR<chat_typesCreateWithoutChatsInput, chat_typesUncheckedCreateWithoutChatsInput>
    connectOrCreate?: chat_typesCreateOrConnectWithoutChatsInput
    upsert?: chat_typesUpsertWithoutChatsInput
    disconnect?: chat_typesWhereInput | boolean
    delete?: chat_typesWhereInput | boolean
    connect?: chat_typesWhereUniqueInput
    update?: XOR<XOR<chat_typesUpdateToOneWithWhereWithoutChatsInput, chat_typesUpdateWithoutChatsInput>, chat_typesUncheckedUpdateWithoutChatsInput>
  }

  export type messagesUpdateManyWithoutChatsNestedInput = {
    create?: XOR<messagesCreateWithoutChatsInput, messagesUncheckedCreateWithoutChatsInput> | messagesCreateWithoutChatsInput[] | messagesUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutChatsInput | messagesCreateOrConnectWithoutChatsInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutChatsInput | messagesUpsertWithWhereUniqueWithoutChatsInput[]
    createMany?: messagesCreateManyChatsInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutChatsInput | messagesUpdateWithWhereUniqueWithoutChatsInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutChatsInput | messagesUpdateManyWithWhereWithoutChatsInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type chat_membersUncheckedUpdateManyWithoutChatsNestedInput = {
    create?: XOR<chat_membersCreateWithoutChatsInput, chat_membersUncheckedCreateWithoutChatsInput> | chat_membersCreateWithoutChatsInput[] | chat_membersUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: chat_membersCreateOrConnectWithoutChatsInput | chat_membersCreateOrConnectWithoutChatsInput[]
    upsert?: chat_membersUpsertWithWhereUniqueWithoutChatsInput | chat_membersUpsertWithWhereUniqueWithoutChatsInput[]
    createMany?: chat_membersCreateManyChatsInputEnvelope
    set?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    disconnect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    delete?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    connect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    update?: chat_membersUpdateWithWhereUniqueWithoutChatsInput | chat_membersUpdateWithWhereUniqueWithoutChatsInput[]
    updateMany?: chat_membersUpdateManyWithWhereWithoutChatsInput | chat_membersUpdateManyWithWhereWithoutChatsInput[]
    deleteMany?: chat_membersScalarWhereInput | chat_membersScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutChatsNestedInput = {
    create?: XOR<messagesCreateWithoutChatsInput, messagesUncheckedCreateWithoutChatsInput> | messagesCreateWithoutChatsInput[] | messagesUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutChatsInput | messagesCreateOrConnectWithoutChatsInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutChatsInput | messagesUpsertWithWhereUniqueWithoutChatsInput[]
    createMany?: messagesCreateManyChatsInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutChatsInput | messagesUpdateWithWhereUniqueWithoutChatsInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutChatsInput | messagesUpdateManyWithWhereWithoutChatsInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type chatsCreateNestedOneWithoutMessagesInput = {
    create?: XOR<chatsCreateWithoutMessagesInput, chatsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: chatsCreateOrConnectWithoutMessagesInput
    connect?: chatsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutMessagesInput = {
    create?: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutMessagesInput
    connect?: usersWhereUniqueInput
  }

  export type chatsUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<chatsCreateWithoutMessagesInput, chatsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: chatsCreateOrConnectWithoutMessagesInput
    upsert?: chatsUpsertWithoutMessagesInput
    disconnect?: chatsWhereInput | boolean
    delete?: chatsWhereInput | boolean
    connect?: chatsWhereUniqueInput
    update?: XOR<XOR<chatsUpdateToOneWithWhereWithoutMessagesInput, chatsUpdateWithoutMessagesInput>, chatsUncheckedUpdateWithoutMessagesInput>
  }

  export type usersUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutMessagesInput
    upsert?: usersUpsertWithoutMessagesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMessagesInput, usersUpdateWithoutMessagesInput>, usersUncheckedUpdateWithoutMessagesInput>
  }

  export type usersCreateNestedOneWithoutUser_contactInput = {
    create?: XOR<usersCreateWithoutUser_contactInput, usersUncheckedCreateWithoutUser_contactInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_contactInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutUser_contactNestedInput = {
    create?: XOR<usersCreateWithoutUser_contactInput, usersUncheckedCreateWithoutUser_contactInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_contactInput
    upsert?: usersUpsertWithoutUser_contactInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_contactInput, usersUpdateWithoutUser_contactInput>, usersUncheckedUpdateWithoutUser_contactInput>
  }

  export type chat_membersCreateNestedManyWithoutUsersInput = {
    create?: XOR<chat_membersCreateWithoutUsersInput, chat_membersUncheckedCreateWithoutUsersInput> | chat_membersCreateWithoutUsersInput[] | chat_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chat_membersCreateOrConnectWithoutUsersInput | chat_membersCreateOrConnectWithoutUsersInput[]
    createMany?: chat_membersCreateManyUsersInputEnvelope
    connect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
  }

  export type messagesCreateNestedManyWithoutUsersInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    createMany?: messagesCreateManyUsersInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type user_contactCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_contactCreateWithoutUsersInput, user_contactUncheckedCreateWithoutUsersInput> | user_contactCreateWithoutUsersInput[] | user_contactUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_contactCreateOrConnectWithoutUsersInput | user_contactCreateOrConnectWithoutUsersInput[]
    createMany?: user_contactCreateManyUsersInputEnvelope
    connect?: user_contactWhereUniqueInput | user_contactWhereUniqueInput[]
  }

  export type chat_membersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<chat_membersCreateWithoutUsersInput, chat_membersUncheckedCreateWithoutUsersInput> | chat_membersCreateWithoutUsersInput[] | chat_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chat_membersCreateOrConnectWithoutUsersInput | chat_membersCreateOrConnectWithoutUsersInput[]
    createMany?: chat_membersCreateManyUsersInputEnvelope
    connect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    createMany?: messagesCreateManyUsersInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type user_contactUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_contactCreateWithoutUsersInput, user_contactUncheckedCreateWithoutUsersInput> | user_contactCreateWithoutUsersInput[] | user_contactUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_contactCreateOrConnectWithoutUsersInput | user_contactCreateOrConnectWithoutUsersInput[]
    createMany?: user_contactCreateManyUsersInputEnvelope
    connect?: user_contactWhereUniqueInput | user_contactWhereUniqueInput[]
  }

  export type chat_membersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<chat_membersCreateWithoutUsersInput, chat_membersUncheckedCreateWithoutUsersInput> | chat_membersCreateWithoutUsersInput[] | chat_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chat_membersCreateOrConnectWithoutUsersInput | chat_membersCreateOrConnectWithoutUsersInput[]
    upsert?: chat_membersUpsertWithWhereUniqueWithoutUsersInput | chat_membersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: chat_membersCreateManyUsersInputEnvelope
    set?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    disconnect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    delete?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    connect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    update?: chat_membersUpdateWithWhereUniqueWithoutUsersInput | chat_membersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: chat_membersUpdateManyWithWhereWithoutUsersInput | chat_membersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: chat_membersScalarWhereInput | chat_membersScalarWhereInput[]
  }

  export type messagesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutUsersInput | messagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: messagesCreateManyUsersInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutUsersInput | messagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutUsersInput | messagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type user_contactUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_contactCreateWithoutUsersInput, user_contactUncheckedCreateWithoutUsersInput> | user_contactCreateWithoutUsersInput[] | user_contactUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_contactCreateOrConnectWithoutUsersInput | user_contactCreateOrConnectWithoutUsersInput[]
    upsert?: user_contactUpsertWithWhereUniqueWithoutUsersInput | user_contactUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_contactCreateManyUsersInputEnvelope
    set?: user_contactWhereUniqueInput | user_contactWhereUniqueInput[]
    disconnect?: user_contactWhereUniqueInput | user_contactWhereUniqueInput[]
    delete?: user_contactWhereUniqueInput | user_contactWhereUniqueInput[]
    connect?: user_contactWhereUniqueInput | user_contactWhereUniqueInput[]
    update?: user_contactUpdateWithWhereUniqueWithoutUsersInput | user_contactUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_contactUpdateManyWithWhereWithoutUsersInput | user_contactUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_contactScalarWhereInput | user_contactScalarWhereInput[]
  }

  export type chat_membersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<chat_membersCreateWithoutUsersInput, chat_membersUncheckedCreateWithoutUsersInput> | chat_membersCreateWithoutUsersInput[] | chat_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chat_membersCreateOrConnectWithoutUsersInput | chat_membersCreateOrConnectWithoutUsersInput[]
    upsert?: chat_membersUpsertWithWhereUniqueWithoutUsersInput | chat_membersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: chat_membersCreateManyUsersInputEnvelope
    set?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    disconnect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    delete?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    connect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    update?: chat_membersUpdateWithWhereUniqueWithoutUsersInput | chat_membersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: chat_membersUpdateManyWithWhereWithoutUsersInput | chat_membersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: chat_membersScalarWhereInput | chat_membersScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutUsersInput | messagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: messagesCreateManyUsersInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutUsersInput | messagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutUsersInput | messagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type user_contactUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_contactCreateWithoutUsersInput, user_contactUncheckedCreateWithoutUsersInput> | user_contactCreateWithoutUsersInput[] | user_contactUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_contactCreateOrConnectWithoutUsersInput | user_contactCreateOrConnectWithoutUsersInput[]
    upsert?: user_contactUpsertWithWhereUniqueWithoutUsersInput | user_contactUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_contactCreateManyUsersInputEnvelope
    set?: user_contactWhereUniqueInput | user_contactWhereUniqueInput[]
    disconnect?: user_contactWhereUniqueInput | user_contactWhereUniqueInput[]
    delete?: user_contactWhereUniqueInput | user_contactWhereUniqueInput[]
    connect?: user_contactWhereUniqueInput | user_contactWhereUniqueInput[]
    update?: user_contactUpdateWithWhereUniqueWithoutUsersInput | user_contactUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_contactUpdateManyWithWhereWithoutUsersInput | user_contactUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_contactScalarWhereInput | user_contactScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type chatsCreateWithoutChat_membersInput = {
    name?: string | null
    created_at?: Date | string | null
    chat_types?: chat_typesCreateNestedOneWithoutChatsInput
    messages?: messagesCreateNestedManyWithoutChatsInput
  }

  export type chatsUncheckedCreateWithoutChat_membersInput = {
    id?: number
    type_id?: number | null
    name?: string | null
    created_at?: Date | string | null
    messages?: messagesUncheckedCreateNestedManyWithoutChatsInput
  }

  export type chatsCreateOrConnectWithoutChat_membersInput = {
    where: chatsWhereUniqueInput
    create: XOR<chatsCreateWithoutChat_membersInput, chatsUncheckedCreateWithoutChat_membersInput>
  }

  export type usersCreateWithoutChat_membersInput = {
    name: string
    password: string
    messages?: messagesCreateNestedManyWithoutUsersInput
    user_contact?: user_contactCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutChat_membersInput = {
    id?: number
    name: string
    password: string
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    user_contact?: user_contactUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutChat_membersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutChat_membersInput, usersUncheckedCreateWithoutChat_membersInput>
  }

  export type chatsUpsertWithoutChat_membersInput = {
    update: XOR<chatsUpdateWithoutChat_membersInput, chatsUncheckedUpdateWithoutChat_membersInput>
    create: XOR<chatsCreateWithoutChat_membersInput, chatsUncheckedCreateWithoutChat_membersInput>
    where?: chatsWhereInput
  }

  export type chatsUpdateToOneWithWhereWithoutChat_membersInput = {
    where?: chatsWhereInput
    data: XOR<chatsUpdateWithoutChat_membersInput, chatsUncheckedUpdateWithoutChat_membersInput>
  }

  export type chatsUpdateWithoutChat_membersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_types?: chat_typesUpdateOneWithoutChatsNestedInput
    messages?: messagesUpdateManyWithoutChatsNestedInput
  }

  export type chatsUncheckedUpdateWithoutChat_membersInput = {
    id?: IntFieldUpdateOperationsInput | number
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUncheckedUpdateManyWithoutChatsNestedInput
  }

  export type usersUpsertWithoutChat_membersInput = {
    update: XOR<usersUpdateWithoutChat_membersInput, usersUncheckedUpdateWithoutChat_membersInput>
    create: XOR<usersCreateWithoutChat_membersInput, usersUncheckedCreateWithoutChat_membersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutChat_membersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutChat_membersInput, usersUncheckedUpdateWithoutChat_membersInput>
  }

  export type usersUpdateWithoutChat_membersInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    messages?: messagesUpdateManyWithoutUsersNestedInput
    user_contact?: user_contactUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutChat_membersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    user_contact?: user_contactUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type chatsCreateWithoutChat_typesInput = {
    name?: string | null
    created_at?: Date | string | null
    chat_members?: chat_membersCreateNestedManyWithoutChatsInput
    messages?: messagesCreateNestedManyWithoutChatsInput
  }

  export type chatsUncheckedCreateWithoutChat_typesInput = {
    id?: number
    name?: string | null
    created_at?: Date | string | null
    chat_members?: chat_membersUncheckedCreateNestedManyWithoutChatsInput
    messages?: messagesUncheckedCreateNestedManyWithoutChatsInput
  }

  export type chatsCreateOrConnectWithoutChat_typesInput = {
    where: chatsWhereUniqueInput
    create: XOR<chatsCreateWithoutChat_typesInput, chatsUncheckedCreateWithoutChat_typesInput>
  }

  export type chatsCreateManyChat_typesInputEnvelope = {
    data: chatsCreateManyChat_typesInput | chatsCreateManyChat_typesInput[]
    skipDuplicates?: boolean
  }

  export type chatsUpsertWithWhereUniqueWithoutChat_typesInput = {
    where: chatsWhereUniqueInput
    update: XOR<chatsUpdateWithoutChat_typesInput, chatsUncheckedUpdateWithoutChat_typesInput>
    create: XOR<chatsCreateWithoutChat_typesInput, chatsUncheckedCreateWithoutChat_typesInput>
  }

  export type chatsUpdateWithWhereUniqueWithoutChat_typesInput = {
    where: chatsWhereUniqueInput
    data: XOR<chatsUpdateWithoutChat_typesInput, chatsUncheckedUpdateWithoutChat_typesInput>
  }

  export type chatsUpdateManyWithWhereWithoutChat_typesInput = {
    where: chatsScalarWhereInput
    data: XOR<chatsUpdateManyMutationInput, chatsUncheckedUpdateManyWithoutChat_typesInput>
  }

  export type chatsScalarWhereInput = {
    AND?: chatsScalarWhereInput | chatsScalarWhereInput[]
    OR?: chatsScalarWhereInput[]
    NOT?: chatsScalarWhereInput | chatsScalarWhereInput[]
    id?: IntFilter<"chats"> | number
    type_id?: IntNullableFilter<"chats"> | number | null
    name?: StringNullableFilter<"chats"> | string | null
    created_at?: DateTimeNullableFilter<"chats"> | Date | string | null
  }

  export type chat_membersCreateWithoutChatsInput = {
    joined_at?: Date | string | null
    users?: usersCreateNestedOneWithoutChat_membersInput
  }

  export type chat_membersUncheckedCreateWithoutChatsInput = {
    id?: number
    user_id?: number | null
    joined_at?: Date | string | null
  }

  export type chat_membersCreateOrConnectWithoutChatsInput = {
    where: chat_membersWhereUniqueInput
    create: XOR<chat_membersCreateWithoutChatsInput, chat_membersUncheckedCreateWithoutChatsInput>
  }

  export type chat_membersCreateManyChatsInputEnvelope = {
    data: chat_membersCreateManyChatsInput | chat_membersCreateManyChatsInput[]
    skipDuplicates?: boolean
  }

  export type chat_typesCreateWithoutChatsInput = {
    type: string
  }

  export type chat_typesUncheckedCreateWithoutChatsInput = {
    id?: number
    type: string
  }

  export type chat_typesCreateOrConnectWithoutChatsInput = {
    where: chat_typesWhereUniqueInput
    create: XOR<chat_typesCreateWithoutChatsInput, chat_typesUncheckedCreateWithoutChatsInput>
  }

  export type messagesCreateWithoutChatsInput = {
    content?: string | null
    timestamp?: Date | string | null
    users?: usersCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutChatsInput = {
    id?: number
    sender_id?: number | null
    content?: string | null
    timestamp?: Date | string | null
  }

  export type messagesCreateOrConnectWithoutChatsInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutChatsInput, messagesUncheckedCreateWithoutChatsInput>
  }

  export type messagesCreateManyChatsInputEnvelope = {
    data: messagesCreateManyChatsInput | messagesCreateManyChatsInput[]
    skipDuplicates?: boolean
  }

  export type chat_membersUpsertWithWhereUniqueWithoutChatsInput = {
    where: chat_membersWhereUniqueInput
    update: XOR<chat_membersUpdateWithoutChatsInput, chat_membersUncheckedUpdateWithoutChatsInput>
    create: XOR<chat_membersCreateWithoutChatsInput, chat_membersUncheckedCreateWithoutChatsInput>
  }

  export type chat_membersUpdateWithWhereUniqueWithoutChatsInput = {
    where: chat_membersWhereUniqueInput
    data: XOR<chat_membersUpdateWithoutChatsInput, chat_membersUncheckedUpdateWithoutChatsInput>
  }

  export type chat_membersUpdateManyWithWhereWithoutChatsInput = {
    where: chat_membersScalarWhereInput
    data: XOR<chat_membersUpdateManyMutationInput, chat_membersUncheckedUpdateManyWithoutChatsInput>
  }

  export type chat_membersScalarWhereInput = {
    AND?: chat_membersScalarWhereInput | chat_membersScalarWhereInput[]
    OR?: chat_membersScalarWhereInput[]
    NOT?: chat_membersScalarWhereInput | chat_membersScalarWhereInput[]
    id?: IntFilter<"chat_members"> | number
    chat_id?: IntNullableFilter<"chat_members"> | number | null
    user_id?: IntNullableFilter<"chat_members"> | number | null
    joined_at?: DateTimeNullableFilter<"chat_members"> | Date | string | null
  }

  export type chat_typesUpsertWithoutChatsInput = {
    update: XOR<chat_typesUpdateWithoutChatsInput, chat_typesUncheckedUpdateWithoutChatsInput>
    create: XOR<chat_typesCreateWithoutChatsInput, chat_typesUncheckedCreateWithoutChatsInput>
    where?: chat_typesWhereInput
  }

  export type chat_typesUpdateToOneWithWhereWithoutChatsInput = {
    where?: chat_typesWhereInput
    data: XOR<chat_typesUpdateWithoutChatsInput, chat_typesUncheckedUpdateWithoutChatsInput>
  }

  export type chat_typesUpdateWithoutChatsInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type chat_typesUncheckedUpdateWithoutChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type messagesUpsertWithWhereUniqueWithoutChatsInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutChatsInput, messagesUncheckedUpdateWithoutChatsInput>
    create: XOR<messagesCreateWithoutChatsInput, messagesUncheckedCreateWithoutChatsInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutChatsInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutChatsInput, messagesUncheckedUpdateWithoutChatsInput>
  }

  export type messagesUpdateManyWithWhereWithoutChatsInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutChatsInput>
  }

  export type messagesScalarWhereInput = {
    AND?: messagesScalarWhereInput | messagesScalarWhereInput[]
    OR?: messagesScalarWhereInput[]
    NOT?: messagesScalarWhereInput | messagesScalarWhereInput[]
    id?: IntFilter<"messages"> | number
    chat_id?: IntNullableFilter<"messages"> | number | null
    sender_id?: IntNullableFilter<"messages"> | number | null
    content?: StringNullableFilter<"messages"> | string | null
    timestamp?: DateTimeNullableFilter<"messages"> | Date | string | null
  }

  export type chatsCreateWithoutMessagesInput = {
    name?: string | null
    created_at?: Date | string | null
    chat_members?: chat_membersCreateNestedManyWithoutChatsInput
    chat_types?: chat_typesCreateNestedOneWithoutChatsInput
  }

  export type chatsUncheckedCreateWithoutMessagesInput = {
    id?: number
    type_id?: number | null
    name?: string | null
    created_at?: Date | string | null
    chat_members?: chat_membersUncheckedCreateNestedManyWithoutChatsInput
  }

  export type chatsCreateOrConnectWithoutMessagesInput = {
    where: chatsWhereUniqueInput
    create: XOR<chatsCreateWithoutMessagesInput, chatsUncheckedCreateWithoutMessagesInput>
  }

  export type usersCreateWithoutMessagesInput = {
    name: string
    password: string
    chat_members?: chat_membersCreateNestedManyWithoutUsersInput
    user_contact?: user_contactCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutMessagesInput = {
    id?: number
    name: string
    password: string
    chat_members?: chat_membersUncheckedCreateNestedManyWithoutUsersInput
    user_contact?: user_contactUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutMessagesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
  }

  export type chatsUpsertWithoutMessagesInput = {
    update: XOR<chatsUpdateWithoutMessagesInput, chatsUncheckedUpdateWithoutMessagesInput>
    create: XOR<chatsCreateWithoutMessagesInput, chatsUncheckedCreateWithoutMessagesInput>
    where?: chatsWhereInput
  }

  export type chatsUpdateToOneWithWhereWithoutMessagesInput = {
    where?: chatsWhereInput
    data: XOR<chatsUpdateWithoutMessagesInput, chatsUncheckedUpdateWithoutMessagesInput>
  }

  export type chatsUpdateWithoutMessagesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_members?: chat_membersUpdateManyWithoutChatsNestedInput
    chat_types?: chat_typesUpdateOneWithoutChatsNestedInput
  }

  export type chatsUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_members?: chat_membersUncheckedUpdateManyWithoutChatsNestedInput
  }

  export type usersUpsertWithoutMessagesInput = {
    update: XOR<usersUpdateWithoutMessagesInput, usersUncheckedUpdateWithoutMessagesInput>
    create: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMessagesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMessagesInput, usersUncheckedUpdateWithoutMessagesInput>
  }

  export type usersUpdateWithoutMessagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    chat_members?: chat_membersUpdateManyWithoutUsersNestedInput
    user_contact?: user_contactUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    chat_members?: chat_membersUncheckedUpdateManyWithoutUsersNestedInput
    user_contact?: user_contactUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutUser_contactInput = {
    name: string
    password: string
    chat_members?: chat_membersCreateNestedManyWithoutUsersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_contactInput = {
    id?: number
    name: string
    password: string
    chat_members?: chat_membersUncheckedCreateNestedManyWithoutUsersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_contactInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_contactInput, usersUncheckedCreateWithoutUser_contactInput>
  }

  export type usersUpsertWithoutUser_contactInput = {
    update: XOR<usersUpdateWithoutUser_contactInput, usersUncheckedUpdateWithoutUser_contactInput>
    create: XOR<usersCreateWithoutUser_contactInput, usersUncheckedCreateWithoutUser_contactInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_contactInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_contactInput, usersUncheckedUpdateWithoutUser_contactInput>
  }

  export type usersUpdateWithoutUser_contactInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    chat_members?: chat_membersUpdateManyWithoutUsersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_contactInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    chat_members?: chat_membersUncheckedUpdateManyWithoutUsersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type chat_membersCreateWithoutUsersInput = {
    joined_at?: Date | string | null
    chats?: chatsCreateNestedOneWithoutChat_membersInput
  }

  export type chat_membersUncheckedCreateWithoutUsersInput = {
    id?: number
    chat_id?: number | null
    joined_at?: Date | string | null
  }

  export type chat_membersCreateOrConnectWithoutUsersInput = {
    where: chat_membersWhereUniqueInput
    create: XOR<chat_membersCreateWithoutUsersInput, chat_membersUncheckedCreateWithoutUsersInput>
  }

  export type chat_membersCreateManyUsersInputEnvelope = {
    data: chat_membersCreateManyUsersInput | chat_membersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type messagesCreateWithoutUsersInput = {
    content?: string | null
    timestamp?: Date | string | null
    chats?: chatsCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutUsersInput = {
    id?: number
    chat_id?: number | null
    content?: string | null
    timestamp?: Date | string | null
  }

  export type messagesCreateOrConnectWithoutUsersInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput>
  }

  export type messagesCreateManyUsersInputEnvelope = {
    data: messagesCreateManyUsersInput | messagesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_contactCreateWithoutUsersInput = {
    phone: string
  }

  export type user_contactUncheckedCreateWithoutUsersInput = {
    id?: number
    phone: string
  }

  export type user_contactCreateOrConnectWithoutUsersInput = {
    where: user_contactWhereUniqueInput
    create: XOR<user_contactCreateWithoutUsersInput, user_contactUncheckedCreateWithoutUsersInput>
  }

  export type user_contactCreateManyUsersInputEnvelope = {
    data: user_contactCreateManyUsersInput | user_contactCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type chat_membersUpsertWithWhereUniqueWithoutUsersInput = {
    where: chat_membersWhereUniqueInput
    update: XOR<chat_membersUpdateWithoutUsersInput, chat_membersUncheckedUpdateWithoutUsersInput>
    create: XOR<chat_membersCreateWithoutUsersInput, chat_membersUncheckedCreateWithoutUsersInput>
  }

  export type chat_membersUpdateWithWhereUniqueWithoutUsersInput = {
    where: chat_membersWhereUniqueInput
    data: XOR<chat_membersUpdateWithoutUsersInput, chat_membersUncheckedUpdateWithoutUsersInput>
  }

  export type chat_membersUpdateManyWithWhereWithoutUsersInput = {
    where: chat_membersScalarWhereInput
    data: XOR<chat_membersUpdateManyMutationInput, chat_membersUncheckedUpdateManyWithoutUsersInput>
  }

  export type messagesUpsertWithWhereUniqueWithoutUsersInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutUsersInput, messagesUncheckedUpdateWithoutUsersInput>
    create: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutUsersInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutUsersInput, messagesUncheckedUpdateWithoutUsersInput>
  }

  export type messagesUpdateManyWithWhereWithoutUsersInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_contactUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_contactWhereUniqueInput
    update: XOR<user_contactUpdateWithoutUsersInput, user_contactUncheckedUpdateWithoutUsersInput>
    create: XOR<user_contactCreateWithoutUsersInput, user_contactUncheckedCreateWithoutUsersInput>
  }

  export type user_contactUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_contactWhereUniqueInput
    data: XOR<user_contactUpdateWithoutUsersInput, user_contactUncheckedUpdateWithoutUsersInput>
  }

  export type user_contactUpdateManyWithWhereWithoutUsersInput = {
    where: user_contactScalarWhereInput
    data: XOR<user_contactUpdateManyMutationInput, user_contactUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_contactScalarWhereInput = {
    AND?: user_contactScalarWhereInput | user_contactScalarWhereInput[]
    OR?: user_contactScalarWhereInput[]
    NOT?: user_contactScalarWhereInput | user_contactScalarWhereInput[]
    id?: IntFilter<"user_contact"> | number
    user_id?: IntNullableFilter<"user_contact"> | number | null
    phone?: StringFilter<"user_contact"> | string
  }

  export type chatsCreateManyChat_typesInput = {
    id?: number
    name?: string | null
    created_at?: Date | string | null
  }

  export type chatsUpdateWithoutChat_typesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_members?: chat_membersUpdateManyWithoutChatsNestedInput
    messages?: messagesUpdateManyWithoutChatsNestedInput
  }

  export type chatsUncheckedUpdateWithoutChat_typesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_members?: chat_membersUncheckedUpdateManyWithoutChatsNestedInput
    messages?: messagesUncheckedUpdateManyWithoutChatsNestedInput
  }

  export type chatsUncheckedUpdateManyWithoutChat_typesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type chat_membersCreateManyChatsInput = {
    id?: number
    user_id?: number | null
    joined_at?: Date | string | null
  }

  export type messagesCreateManyChatsInput = {
    id?: number
    sender_id?: number | null
    content?: string | null
    timestamp?: Date | string | null
  }

  export type chat_membersUpdateWithoutChatsInput = {
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutChat_membersNestedInput
  }

  export type chat_membersUncheckedUpdateWithoutChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type chat_membersUncheckedUpdateManyWithoutChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesUpdateWithoutChatsInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesUncheckedUpdateManyWithoutChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type chat_membersCreateManyUsersInput = {
    id?: number
    chat_id?: number | null
    joined_at?: Date | string | null
  }

  export type messagesCreateManyUsersInput = {
    id?: number
    chat_id?: number | null
    content?: string | null
    timestamp?: Date | string | null
  }

  export type user_contactCreateManyUsersInput = {
    id?: number
    phone: string
  }

  export type chat_membersUpdateWithoutUsersInput = {
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chats?: chatsUpdateOneWithoutChat_membersNestedInput
  }

  export type chat_membersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_id?: NullableIntFieldUpdateOperationsInput | number | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type chat_membersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_id?: NullableIntFieldUpdateOperationsInput | number | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesUpdateWithoutUsersInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chats?: chatsUpdateOneWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_contactUpdateWithoutUsersInput = {
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type user_contactUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type user_contactUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
  }



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