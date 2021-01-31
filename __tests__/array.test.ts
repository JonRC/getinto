
import into from '../'

describe('starting with a array', () => {
  describe('starting with a empty array', () => {

    it('should return undefined for a empty array entry', () => {
      const testsToBeUndefined = [
        into([]).get(1),
        into([]).get(0),
        into([]).get('4'),
        into([]).get('0'),
        into([]).get('somaString'),
        into([]).get(''),
        into([]).get('someString', 4)
      ]

      testsToBeUndefined.forEach(testToBeUndefined => {
        expect(testToBeUndefined).toBeUndefined()
      })
    })
  })

  describe('starting with a array with differents values', () => {
    it('should return the correct value for each index', () => {
      const arrayToTest = [
        'someString',
        23423,
        true,
        false,
        undefined,
        null,
        ['fsdfds', 34324, () => { }],
        {
          a: 'hjsdkfhd',
          b: 4324324,
          c: () => { }
        }
      ]

      arrayToTest.forEach((value, index) => {
        const returned = into(arrayToTest).get(index)
        expect(returned).toEqual(arrayToTest[index])
      })

      arrayToTest.forEach((value, index) => {
        const stringIndex = index.toString()
        const returned = into(arrayToTest).get(stringIndex)
        expect(returned).toEqual(arrayToTest[index])
      })


    })

    it('should return undefined for a inexistente index', () => {
      const arrayToTest = [3, 5, 2, "dfjkdsf"]
      const testsToBeUndefined = [
        into(arrayToTest).get(4),
        into(arrayToTest).get('4'),
        into(arrayToTest).get('dsfdsfsdf'),
        into(arrayToTest).get(5),
        into(arrayToTest).get(-1),
      ]

      testsToBeUndefined.forEach(testToBeUndefined => {
        expect(testToBeUndefined).toBeUndefined()
      })
    })

    it('should be able to return functions', () => {
      const arrayToTest: Array<Function> = [
        () => { },
        () => 123,
        () => 'someThing',
        () => ['values', 'to', 'test'],
        function () { return {} },
        function () { return 123 },
        function () { return 'someThing' },
        function () { return ['values', 'to', 'test'] },
      ]

      arrayToTest.forEach((value, index) => {
        const returned = into(arrayToTest).get(index)
        expect(returned).toBeInstanceOf(Function)
      })


    })
  })
})

describe('getting a array', () => {
  describe('getting an array by an object', () => {
    it('should return the correct array for each property', () => {
      const objectToTest: { [key: string]: Array<any> } = {
        a: [32423, 433, 6546, 23423, 5435435],
        b: ['jiolgfjdslg', 'uijkfhs', 'dskghfsd', 'dskfhs'],
        c: [undefined, null]
      }

      for (let prop in objectToTest) {
        const returnedValue = into(objectToTest).get(prop)
        expect(returnedValue).toEqual(objectToTest[prop])
      }

    })
    it('should get a array into a chain of objects', () => {
      const objectToTest = {
        a: {
          b: {
            c: {
              d: {
                e: {
                  f: [35, 543, "dsjkffsd", () => { }, false, true]
                }
              }
            }
          }
        }
      }

      const getintoReturn = into(objectToTest)
        .into('a')
        .into('b')
        .into('c')
        .into('d')
        .into('e')
        .get('f')

      const normalReturn = objectToTest.a.b.c.d.e.f

      expect(getintoReturn).toEqual(normalReturn)

    })
  })
})

describe('using the two syntaxes to get an array item into an object or into an array', () => {
  const arrayToTest:Array<any> = [
    {
      a: ['abc', 'cde', 'fgh']
    },

    ['ijk', 'lmn']
  ]
  describe('using the into/get("index") syntax. Created at v0.0.2', () => {
    it('should return undefined for a inexistent index using get("index") syntax', () => {
      const getintoReturn1 = into(arrayToTest).into(0).into('a').get(3)
      const getintoReturn2 = into(arrayToTest).into(1).get(2)
      expect(getintoReturn1).toBeUndefined()
      expect(getintoReturn2).toBeUndefined()
    })

    it('should return the correct value for get("index") syntax', () => {
      const getintoReturn1 = into(arrayToTest).into(0).into('a').get(2)
      const getintoReturn2 = into(arrayToTest).into(1).get(0)
      const normalReturn1 = arrayToTest[0]['a'][2]
      const normalReturn2 = arrayToTest[1][0]
      expect(getintoReturn1).toEqual(normalReturn1)
      expect(getintoReturn2).toEqual(normalReturn2)
    })

  })

  describe('using the into/get("object | array", "index") syntax. Created at v0.1.0', () => {
    it('should return undefined for a inexistent index using into/get("object | array", "index") syntax', () => {
      const getintoReturn1 = into(arrayToTest).into(0).get('a', 3)
      const getintoReturn2 = into(arrayToTest).get(1, 2)
      expect(getintoReturn1).toBeUndefined()
      expect(getintoReturn2).toBeUndefined()
    })

    it('should return the correct value for into/get("object | array", "index") syntax', () => {
      const getintoReturn1 = into(arrayToTest).into(0).get('a', 2)
      const getintoReturn2 = into(arrayToTest).get(1, 0)
      const normalReturn1 = arrayToTest[0]['a'][2]
      const normalReturn2 = arrayToTest[1][0]
      expect(getintoReturn1).toEqual(normalReturn1)
      expect(getintoReturn2).toEqual(normalReturn2)
    })

  })
}) 