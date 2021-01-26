interface getintoObject {
    into(key: string, params?: string | string[]): getintoObject;
    get<T>(key: string, params?: string | string[], callback?: (gotten: T) => any): T;
}
interface ObjectOrFunction {
    [key: string]: Object | Function | Array<any>;
}
declare function intoInitiator(anyType: ObjectOrFunction, params?: string | string[], thisArg?: object): getintoObject;
export default intoInitiator;
//# sourceMappingURL=index.d.ts.map