# getinto

getinto is a simple package to 'deep get' properties in an object, array or function.  
If the property does not exist, it will return undefined. Never an error.  
Say goodbye to the error "Cannot read property of undefined".  
  - Simple sintax
  - Javascript and TypeScript compatibility  
  - Can be used with object chain, function chain and array chain mixed
      

## Quick Example
```js
const into = require('getinto')
const pets: [
  {
    name: 'Rex',
    owner: {
      name: 'Jon',
      address: {
        country: 'Canada',
        province: 'British Columbia'
      }
    }
  },
  {
    ...
  }
]

const ownerProvince = into('pets', 0)
    .into('owner')
    .into('address')
    .get('province') //the get method returns an array, function, object, string, number or undefined. Never an error.
console.log(ownerProvince) //log: 'British Columbia'

//with Vanilla JS
const errorPetName = animals.notExist.name //errror: Cannot read property 'name' of undefined
//with getinto package
const petName = into(animals)
    .into('notExist')
    .get('name') 
console.log(petName) //log: undefined. Never an error.
```

## Installation
```sh
$ npm install getinto
or
$ yarn add getinto
```

## Usage
I suggest the following import:
```js
const into = require('getinto')
```
You can write a chain of 'into'. The first into comes from import and receives an object (or a function, see 'More examples' or 'API' for details).  
The nexts intos come from previous into. The last statement must be 'get'.  
The get method always return an array, function, string, object or undefined. It never returns an error (if you use the correct syntax).  
```js
const value = into(object)
  .into('objectProperty')
  .into('nextObjectProperty')
  ...
  ...
  .into('aIndex')
  .get('returnedProperty')
console.log(value) //log: valueOfReturnedProperty
```
## Typescript Usage
I suggest the following import:
```ts
import into from 'getinto'
```
getinto has the same usage for Typescript but you can specify the return type on get method.  
```ts
into(someObject)
  .get('someProperty')<T>
```

## More Examples
```js
const into = require('getinto')
const business = {
 stories: [
  {
    companyName: 'megaPet, INC',
    products: ['dogFood', 'dogBed'],
    stack: ['react', 'node.js', 'mongoDB'],
    doSomething: function (name) {console.log(name + ' says Hello World')}
  },
  {
    companyName: function (baseName) { return baseName + ', INC' },
    products: function (a, b) { return [a + 'Product', b + 'Product']},
    doSomething: function () {console.log('Hello World')}
  }
 ]
}

business.notExist.techs[0] //error: Cannot read property 'techs' of undefined
into(business)
  .into('notExist')
  .get('techs', 0) //undefined
   
into(business)
  .into('stories', 0)
  .get('companyName') // 'megaPet, INC' - if something doesn't exist, return undefined

into(business)
  .into('stories', 0)
  .get('products') // ['dogFood', 'dogBed'] - if something doesn't exist, return undefined
  
into(business)
  .into('stories', 0)
  .get('stack', 1) // 'node.js' - if something doesn't exist, return undefined
  
const functionExample = into(business)
  .into('stories', 0)
  .get('doSomething')
  functionExample('Jonathan') //log: 'Jonathan says Hello World' - if something doesn't exist, return undefined
  
into(business)
  .into('stories', 1)
  .get('companyName', 'superMarket') // 'superMarket, INC' - executed like companyName('superMarket')

const productA = 'fishmonger'  
into(business)
  .into('stories', 1)
  .get('products', [productA, 'bakery']) // ['fishmongerProduct', 'bakeryProduct'] - executed like products(productA, 'bakery')
  
into(business)
  .into('stories', 1)
  .get('doSomething', []) //log: 'Hello World - executed like doSomething()
}
```

## API
#### • First into
#
```ts
into(entry: Function | Object | Array<any>, params?: any | any[], thisArg?: object): GetintoObject
```
- if entry is an object or any dictionary, you can select a property to continue the chain passing its name as string in params;
- if entry is an array, you can select an item to continue the chain passing its position as number or string in params;
- if entry is a function, you can select the function return to continue the chain passing one or many params in an array for the function to be executed. Use [] (empty array) to execute without a param.
#### • Nexts into
#
```ts
into(key: string | number, params?: any | any[]): GetintoObject
```
- key can be a property name as string or can be an index as string or number;
- if the key returns an object or any dictionary, you can select a property to continue the chain passing its name as string in params;
- if the key returns an array, you can select an item to continue the chain passsaing its position as number or string in params;
- if the key returns a function, you can select the function, return to continue the chain passing a param or an array of params for the function to be executed. Use [] (empty array) to execute without a param.
#### • get
#
```ts
get<T>(key: string | number, params?: any | any[], callback?: (gotten: T) => any): T
```
- key can be a property name as string or can be an index as string or number
- if the key returns an object or any dictionary, you can get a property passing its name as string in params;
- if the key returns an array, you can get an item passing its position as a number or a string in params.
- if you are using typescript, you can specify the type of the return
- if the key returns a function, you can get the function, return to continue the chain passing a param or array of params for the function to be executed. Use [] (empty array) to execute without a param.

## Tests
In this package, we use Jest for tests.
- Many mixed tests: ok
- Specific Arrays tests: ok
- Specific Objects tests: work in progress
- Specific functions tests: work in progress

## Releases
**v0.1.1**  
Index as number  
Improved array and function support  
Added tests  
Other fixes  
**v0.0.2**  
Import fixs  
 **v0.0.1**  
 Inicial idea  

## To-do
- Function tests
- Object tests
- More examples
- Search for bugs

### array example
Writing
### object example
Writing
### function example
Writing



