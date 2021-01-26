
interface getintoObject {
  into(key: string, params?: string | string[]): getintoObject
  get<T>(key: string, params?: string | string[], callback?: (gotten: T) => any): T
  
}

interface ObjectOrFunction {
  [key: string]: Object | Function | Array<any>;
}

export = function into(anyType: ObjectOrFunction, params?: string | string[], thisArg?: object): getintoObject {
  anyType = functionVerifier(anyType, params, thisArg)
  return intoContructor(anyType)
}

function intoContructor(anyType: ObjectOrFunction): getintoObject {
  function getInto(anyType: ObjectOrFunction, key: string, params?: string | string[]) {
    if (anyType) {
      if (anyType instanceof Array) {
        key = key.replace('[', '').replace(']', '')
        const value = anyType[key]
        return functionVerifier(value, params, anyType)
      }
      else if (anyType instanceof Object) {
        const value = anyType[key]
        return functionVerifier(value, params, anyType)
      }
      else {
        return undefined
      }
    }
    else {
      return undefined
    }
  }

  
  return {
    into: (key, params) => {
      return intoContructor(getInto(anyType, key, params))
    },

    get: (key, params, callback?) => {
      const value = getInto(anyType, key, params)
      if(callback instanceof Function) callback(value)
      return value
    },

  }
}

function functionVerifier(anyValue: Object | Function, params?: string | string[], thisArg?: any) {
  if (anyValue instanceof Function && params) {
    if (params instanceof Array) {
      return anyValue.bind(thisArg)(...params)
    }
    else {
      return anyValue.bind(thisArg)(params)
    }
  }

  else if(anyValue instanceof Function){
    return anyValue.bind(thisArg)
  }

  else {
    return anyValue
  }
} 
