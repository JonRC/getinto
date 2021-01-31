
interface GetintoObject {
  into(key: string | number, params?: any | any[]): GetintoObject
  get<T>(key: string | number, params?: any | any[], callback?: (gotten: T) => any): T

}

type Object_Array_Function = Function | Object | Array<any>
type Entry = Dictionary | Function | Array<any>

interface Dictionary {
  [key: string]: Object | Function | [any]
}



export = function into(entry: Function | Object | Array<any>, params?: any | any[], thisArg?: object): GetintoObject {
  const verifiedEntry = functionArrayVerifier(entry, params, thisArg)

  return intoContructor(verifiedEntry)
}

function intoContructor(entry: Entry): GetintoObject {
  function getInto(entry: Entry, key: any, params?: any | any[]) {
    if (typeof (entry) === 'object') {
      if (entry instanceof Array) {
        const value: any = entry[key]
        return functionArrayVerifier(value, params, entry)
      }
      else {
        const value: any = entry[key]
        return functionArrayVerifier(value, params, entry)
      }
    }
    else if (typeof (entry) === 'object') {
      entry
      const value: any = entry[key]
      return functionArrayVerifier(value, params, entry)
    }

    else {
      return undefined
    }
  }


  return {
    into: (key, params) => {
      return intoContructor(getInto(entry, key, params))
    },

    get: (key, params, callback?) => {
      const value = getInto(entry, key, params)
      if (callback instanceof Function) callback(value)
      return value
    },

  }
}


function functionArrayVerifier(thingToVerify: Function | Object | Array<any>, params?: any, thisArg?: any) {

  if (params || params === 0) {
    if (thingToVerify instanceof Array) {
      if (params instanceof Array) params = params[0]
      return thingToVerify[params]
    }

    else if (thingToVerify instanceof Function) {
      if (params instanceof Array) {
        return thingToVerify.bind(thisArg)(...params)
      }
      else {
        return thingToVerify.bind(thisArg)(params)
      }
    }

    else {
      if (thingToVerify instanceof Function) {
        return thingToVerify.bind(thisArg)
      }
      else {
        return thingToVerify
      }
    }

  }

  else {
    if (thingToVerify instanceof Function) {
      return thingToVerify.bind(thisArg)
    }
    else {
      return thingToVerify
    }
  }
}
