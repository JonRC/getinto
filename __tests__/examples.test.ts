import into from '../'


const business = {
  stories: [
    {
      companyName: 'megaPet, INC',
      products: ['dogFood', 'dogBed'],
      stack: ['react', 'node.js', 'mongoDB'],
      doSomething: function (name: string) { return(name + ' says Hello World') }
    },
    {
      companyName: function (baseName: string) { return baseName + ', INC' },
      products: function (a: string, b: string) { return [a + 'Product', b + 'Product'] },
      doSomething: function () { return('Hello World') }
    }
  ]
}

describe('Testing the readme examples', () => {
  it('should return undefined', () => {
    const getintoReturn = into(business, 0)
      .into('notExist')
      .get('techs', 0) //undefined

    expect(getintoReturn).toBeUndefined
  })

  it('should return undefined', () => {
    const getintoReturn = into(business)
      .into('stories', 0)
      .get('companyName') // 'megaPet, INC' - if something don't exist return undefined

    expect(getintoReturn).toEqual('megaPet, INC')
  })

  it('should return ["dogFood", "dogBed"]', () => {
    const getintoReturn = into(business)
      .into('stories', 0)
      .get('products') // ['dogFood', 'dogBed'] - if something don't exist return undefined

    expect(getintoReturn).toEqual(['dogFood', 'dogBed'])
  })

  it('should return undefined "node.js"', () => {
    const getintoReturn = into(business)
      .into('stories', 0)
      .get('stack', 1) // 'node.js' - if something don't exist return undefined

    expect(getintoReturn).toEqual('node.js')
  })

  it('should return "Jonathan says Hello World"', () => {
    const getintoReturn = into(business)
      .into('stories', 0)
      .get<Function>('doSomething')

    expect(getintoReturn('Jonathan')).toEqual('Jonathan says Hello World')
  })

  it('should return "superMarket, INC"', () => {
    const getintoReturn = into(business)
      .into('stories', 1)
      .get('companyName', 'superMarket') // 'superMarket, INC' - executed like companyName('superMarket')

    expect(getintoReturn).toEqual('superMarket, INC')
  })
  
  it('should return undefined ["fishmongerProducts", "bakeryProducts"]', () => {
    const productA = 'fishmonger'
    const getintoReturn = into(business)
    .into('stories', 1)
    .get('products', [productA, 'bakery']) // ['fishmongerProducts', 'bakeryProducts'] - executed like products(productA, 'bakery')
    
    expect(getintoReturn).toEqual(['fishmongerProduct', 'bakeryProduct'])
  })
  
  it('should return Hello World', () => {
    const getintoReturn = into(business)
      .into('stories', 1)
      .get('doSomething', []) //log: 'Hello World' - executed like doSomething()
    

    expect(getintoReturn).toEqual('Hello World')
  })

})
