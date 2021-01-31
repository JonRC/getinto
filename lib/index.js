"use strict";
function intoContructor(entry) {
    function getInto(entry, key, params) {
        if (typeof (entry) === 'object') {
            if (entry instanceof Array) {
                var value = entry[key];
                return functionArrayVerifier(value, params, entry);
            }
            else {
                var value = entry[key];
                return functionArrayVerifier(value, params, entry);
            }
        }
        else if (typeof (entry) === 'object') {
            entry;
            var value = entry[key];
            return functionArrayVerifier(value, params, entry);
        }
        else {
            return undefined;
        }
    }
    return {
        into: function (key, params) {
            return intoContructor(getInto(entry, key, params));
        },
        get: function (key, params, callback) {
            var value = getInto(entry, key, params);
            if (callback instanceof Function)
                callback(value);
            return value;
        },
    };
}
function functionArrayVerifier(thingToVerify, params, thisArg) {
    if (params || params === 0) {
        if (thingToVerify instanceof Array) {
            if (params instanceof Array)
                params = params[0];
            return thingToVerify[params];
        }
        else if (thingToVerify instanceof Function) {
            if (params instanceof Array) {
                return thingToVerify.bind(thisArg).apply(void 0, params);
            }
            else {
                return thingToVerify.bind(thisArg)(params);
            }
        }
        else {
            if (thingToVerify instanceof Function) {
                return thingToVerify.bind(thisArg);
            }
            else {
                return thingToVerify;
            }
        }
    }
    else {
        if (thingToVerify instanceof Function) {
            return thingToVerify.bind(thisArg);
        }
        else {
            return thingToVerify;
        }
    }
}
module.exports = function into(entry, params, thisArg) {
    var verifiedEntry = functionArrayVerifier(entry, params, thisArg);
    return intoContructor(verifiedEntry);
};
//# sourceMappingURL=index.js.map