"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function intoInitiator(anyType, params, thisArg) {
    anyType = functionVerifier(anyType, params, thisArg);
    return intoContructor(anyType);
}
function intoContructor(anyType) {
    function getInto(anyType, key, params) {
        if (anyType) {
            if (anyType instanceof Array) {
                key = key.replace('[', '').replace(']', '');
                var value = anyType[key];
                return functionVerifier(value, params, anyType);
            }
            else if (anyType instanceof Object) {
                var value = anyType[key];
                return functionVerifier(value, params, anyType);
            }
            else {
                return undefined;
            }
        }
        else {
            return undefined;
        }
    }
    return {
        into: function (key, params) {
            return intoContructor(getInto(anyType, key, params));
        },
        get: function (key, params, callback) {
            var value = getInto(anyType, key, params);
            if (callback instanceof Function)
                callback(value);
            return value;
        },
    };
}
function functionVerifier(anyValue, params, thisArg) {
    if (anyValue instanceof Function && params) {
        if (params instanceof Array) {
            return anyValue.bind(thisArg).apply(void 0, params);
        }
        else {
            return anyValue.bind(thisArg)(params);
        }
    }
    else if (anyValue instanceof Function) {
        return anyValue.bind(thisArg);
    }
    else {
        return anyValue;
    }
}
exports.default = intoInitiator;
//# sourceMappingURL=index.js.map