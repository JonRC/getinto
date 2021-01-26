# getinto

getinto is a simple package to deep get something in an object. 
It always return a value (array, function, string, object...) or undefined. Never a error (if you use the correct sintax).
Say bye for error "Cannot read property of undefined"
  - Simple sintax
  - TypeScript compatibility  
  - Can be use with object chain and function chain mixed
      

### Quick Example
```js
const into = require('getinto')
const animals = {
    pets: [
        {
            name: 'Rex',
            owner: {
                name: 'Jon',
                address: {
                    country: 'USA',
                    province: 'British Columbia'
                }
            }
        }
    ]
}

const province = into(animals)
    .into('pets')
    .into('1')
    .into('owner')
    .into('adress')
    .get('province') //get return a array, function, string, object... or undefined. Never a error.
console.log(province) //log: 'British Columbia'

const errorPetName = animals.notExist.name //errror: Cannot read property 'name' of undefined
const petName = into(animals)
    .into('notExist')
    .get('name') 
console.log(petName) //log: undefined
```

### Installation
```sh
$ npm install getinto
or
$ yarn add getinto
```

### Usage
I suggest the following way to import
```js
const into = require('getinto')
```
You can write a chan of 'into'. The first into comes from import and receive an object (or a function, see in 'More examples' or in 'API' for details). The next intos come from previous into. The latter statement must be 'get'.
```js
const into = require('getinto')
const value = into(object)
  .into('objectPropertie')
  .into('nextObjectPropertie')
  ...
  ...
  .into('otherPropertie')
  .get('returnedPropertie')
console.log(value) //log: returnedPropertie
```
### Typescript Usage
Writing

### API
writing the compleate API documentation

### More Examples
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
   
business[0].stories.notExist.techs[0] //error: Cannot read property 'techs' of undefined
into(business)
  .into('0')
  .into('notExist')
  .into('techs')
  .get('0') //undefined
   
into(business)
  .into('stories')
  .into('0')
  .get('companyName') // 'megaPet, INC' - if something don't exist return undefined

into(business)
  .into('stories')
  .into('0')
  .get('products') // ['dogFood', 'dogBed'] - if something don't exist return undefined
  
into(business)
  .into('stories')
  .into('0')
  .into('stack')
  .get('1') // 'node.js' - if something don't exist return undefined
  
const functionExample = into(business)
  .into('stories')
  .into('0')
  .get('doSomething')
  functionExample('Jonathan') //log: 'Jonathan says Hello World' - if something don't exist return undefined
  
into(business)
  .into('stories')
  .into('1')
  .get('companyName', 'superMarket') // 'superMarket, INC' - executed like companyName('superMarket')

const productA = 'fishmonger'  
into(business)
  .into('stories')
  .into('1')
  .get('products', [productA, 'bakery']) // ['fishmongerProducts', 'bakeryProducts'] - executed like products(productA, 'bakery')
  
into(business)
  .into('stories')
  .into('1')
  .get('doSomething', []) //log: 'Hello World - executed like doSomething()
}
```

### array example
Writing
### object example
Writing
### function example
Writing

### Todos
Writing

