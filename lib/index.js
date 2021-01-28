"use strict";
function intoContructor(someThing) {
    function getInto(someThing, key, params) {
        if (someThing) {
            if (someThing instanceof Array) {
                var value = someThing[key];
                return functionArrayVerifier(value, params, someThing);
            }
            else if (someThing instanceof Object) {
                var value = someThing[key];
                return functionArrayVerifier(value, params, someThing);
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
            return intoContructor(getInto(someThing, key, params));
        },
        get: function (key, params, callback) {
            var value = getInto(someThing, key, params);
            if (callback instanceof Function)
                callback(value);
            return value;
        },
    };
}
function functionArrayVerifier(anyValue, params, thisArg) {
    if (params || params === 0) {
        if (anyValue instanceof Array) {
            if (params instanceof Array)
                params = params[0];
            return anyValue[params];
        }
        else if (anyValue instanceof Function) {
            if (params instanceof Array) {
                return anyValue.bind(thisArg).apply(void 0, params);
            }
            else {
                return anyValue.bind(thisArg)(params);
            }
        }
        else {
            if (anyValue instanceof Function) {
                return anyValue.bind(thisArg);
            }
            else {
                return anyValue;
            }
        }
    }
    else {
        if (anyValue instanceof Function) {
            return anyValue.bind(thisArg);
        }
        else {
            return anyValue;
        }
    }
}
module.exports = function into(someThing, params, thisArg) {
    someThing = functionArrayVerifier(someThing, params, thisArg);
    return intoContructor(someThing);
};
//# sourceMappingURL=index.js.map