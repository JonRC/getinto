interface getintoObject {
    into(key: string, params?: string | string[]): getintoObject;
    get<T>(key: string, params?: string | string[], callback?: (gotten: T) => any): T;
}
interface ObjectOrFunction {
    [key: string]: Object | Function | Array<any>;
}
declare const _default: (anyType: ObjectOrFunction, params?: string | string[] | undefined, thisArg?: object | undefined) => getintoObject;
export = _default;
//# sourceMappingURL=index.d.ts.map