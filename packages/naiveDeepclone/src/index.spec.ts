import { naiveDeepclone } from './index'

describe('naiveDeepclone', () => {
  describe('handle mutations within the nestled structure', () => {
    it('expected outcome if not deepclone', () => {
      const myObj = {
        some: {
          nestled: {
            value: 1337,
          },
        },
      }

      const naiveClone = { ...myObj }
      myObj.some.nestled = '1337' as any

      expect(naiveClone.some).toMatchInlineSnapshot(`
      Object {
        "nestled": "1337",
      }
    `)
    })

    it('should deepclone objects, modifying values are not propagated', () => {
      const myObj = {
        some: {
          nestled: {
            value: 1337,
          },
        },
      }

      const naiveClone = naiveDeepclone(myObj)

      myObj.some = '1337' as any

      expect(naiveClone.some).toMatchInlineSnapshot(`
      Object {
        "nestled": Object {
          "value": 1337,
        },
      }
    `)
    })
  })
})
