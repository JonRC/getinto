interface GetintoObject {
    into(key: string, params?: string | string[] | number): GetintoObject;
    get<T>(key: string, params?: string | string[] | number, callback?: (gotten: T) => any): T;
}
declare const _default: (entry: Function | Object | Array<any>, params?: string | number | string[] | undefined, thisArg?: object | undefined) => GetintoObject;
export = _default;
//# sourceMappingURL=index.d.ts.map