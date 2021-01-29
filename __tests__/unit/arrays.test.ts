
import into from '../../'

describe('start with a array', () => {
  describe('start with a empty array', () => {
    let emptyArray: [...any[]]
    beforeEach(() => {
      emptyArray = []
    })
    it('should return undefined for a empty array entry', () => {
      const result = into([])
    })
  })
})