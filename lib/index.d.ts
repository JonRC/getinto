interface GetintoObject {
    into(key: string, params?: string | string[] | number): GetintoObject;
    get<T>(key: string, params?: string | string[] | number, callback?: (gotten: T) => any): T;
}
interface Object_Function_Array {
    [key: string]: Object | Function | Array<any>;
}
declare const _default: (someThing: Object_Function_Array, params?: string | number | string[] | undefined, thisArg?: object | undefined) => GetintoObject;
export = _default;
//# sourceMappingURL=index.d.ts.map