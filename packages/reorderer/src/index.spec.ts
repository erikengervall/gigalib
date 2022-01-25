import { reorderer } from './index'

describe('reorderer', () => {
  it('should be able to move items down the list', () => {
    const { reorderedList } = reorderer({
      sortedList: [
        { initialListIndex: 0, listIndex: 0 },
        { initialListIndex: 1, listIndex: 1 },
        { initialListIndex: 2, listIndex: 2 },
        { initialListIndex: 3, listIndex: 3 },
      ],
      fromListIndex: 0,
      toListIndex: 2,
    })

    expect(reorderedList).toMatchInlineSnapshot(`
      Array [
        Object {
          "initialListIndex": 1,
          "listIndex": 0,
        },
        Object {
          "initialListIndex": 2,
          "listIndex": 1,
        },
        Object {
          "initialListIndex": 0,
          "listIndex": 2,
        },
        Object {
          "initialListIndex": 3,
          "listIndex": 3,
        },
      ]
    `)
  })

  it('should be able to move items up the list', () => {
    const { reorderedList } = reorderer({
      sortedList: [
        { initialListIndex: 0, listIndex: 0 },
        { initialListIndex: 1, listIndex: 1 },
        { initialListIndex: 2, listIndex: 2 },
        { initialListIndex: 3, listIndex: 3 },
      ],
      fromListIndex: 3,
      toListIndex: 1,
    })

    expect(reorderedList).toMatchInlineSnapshot(`
      Array [
        Object {
          "initialListIndex": 0,
          "listIndex": 0,
        },
        Object {
          "initialListIndex": 3,
          "listIndex": 1,
        },
        Object {
          "initialListIndex": 1,
          "listIndex": 2,
        },
        Object {
          "initialListIndex": 2,
          "listIndex": 3,
        },
      ]
    `)
  })
})
