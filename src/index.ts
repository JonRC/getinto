
interface GetintoObject {
  into(key: string, params?: string | string[] | number): GetintoObject
  get<T>(key: string, params?: string | string[] | number, callback?: (gotten: T) => any): T

}

interface Object_Function_Array {
  [key: string]: Object | Function | Array<any>;
}

export = function into(someThing: Object_Function_Array, params?: string | string[] | number, thisArg?: object): GetintoObject {
  someThing = functionArrayVerifier(someThing, params, thisArg)
  return intoContructor(someThing)
}

function intoContructor(someThing: Object_Function_Array): GetintoObject {
  function getInto(someThing: Object_Function_Array, key: string, params?: string | string[] | number) {
    if (someThing) {
      if (someThing instanceof Array) {
        const value: any = someThing[key]
        return functionArrayVerifier(value, params, someThing)
      }
      else if (someThing instanceof Object) {
        const value: any = someThing[key]
        return functionArrayVerifier(value, params, someThing)
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
      return intoContructor(getInto(someThing, key, params))
    },

    get: (key, params, callback?) => {
      const value = getInto(someThing, key, params)
      if (callback instanceof Function) callback(value)
      return value
    },

  }
}


function functionArrayVerifier(anyValue: Object_Function_Array, params?: string | string[] | number, thisArg?: any) {

  if (params || params===0) {
    if (anyValue instanceof Array) {
      if (params instanceof Array) params = params[0]
      return anyValue[params]
    }

    else if(anyValue instanceof Function) {
      if(params instanceof Array) {
        return anyValue.bind(thisArg)(...params)
      }
      else{
        return anyValue.bind(thisArg)(params)
      }
    }

    else{
      if(anyValue instanceof Function){
        return anyValue.bind(thisArg)
      }
      else {
        return anyValue
      }
    }

  }

  else {
    if(anyValue instanceof Function){
      return anyValue.bind(thisArg)
    }
    else {
      return anyValue
    }
  }
}
