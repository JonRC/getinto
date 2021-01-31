interface GetintoObject {
    into(key: string | number, params?: any | any[]): GetintoObject;
    get<T>(key: string | number, params?: any | any[], callback?: (gotten: T) => any): T;
}
declare const _default: (entry: Function | Object | Array<any>, params?: any | any[], thisArg?: object | undefined) => GetintoObject;
export = _default;
//# sourceMappingURL=index.d.ts.map