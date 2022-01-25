import { naiveDeepclone } from 'naive-deepclone' // Looks like we shipped something broken :D

/**
 * Updates `listIndex` on the entities provided to reflect the consequences of the move
 */
export function handleMove<T extends { listIndex: number }>({
  sortedEntityList,
  fromListIndex,
  toListIndex,
}: {
  sortedEntityList: T[]
  fromListIndex: number
  toListIndex: number
}) {
  /**
   * The updated entity list will not preserve order
   *
   * This is left to the caller to do
   */
  const unsortedUpdatedEntityList = naiveDeepclone(sortedEntityList)

  if (toListIndex > fromListIndex) {
    // The Entity is moving down the list
    /**
     * @example
     * fromListIndex: 1
     * toListIndex:   3
     * listIndex alias "li"
     *
     * @example init
     * [{ li: 0 }, { li: 1 }, { li: 2 }, { li: 3 }, { li: 4 }]
     *
     * @example assign new listIndex to entity that moves
     * [{ li: 0 }, { li: 1 -> 3 }, { li: 2 }, { li: 3 }, { li: 4 }]
     *
     * @example loop iteration (i = 1 + 1; 2 <= 3)
     * [{ li: 0 }, { li: 3 }, { li: 2 -> 1 }, { li: 3 }, { li: 4 }]
     *
     * @example loop iteration (i = 2 + 1; 3 <= 3)
     * [{ li: 0 }, { li: 3 }, { li: 1 }, { li: 3 -> 2 }, { li: 4 }]
     *
     * @example final result
     * [{ li: 0 }, { li: 3 }, { li: 1 }, { li: 2 }, { li: 4 }] */

    unsortedUpdatedEntityList[fromListIndex].listIndex = toListIndex
    for (let i = fromListIndex + 1; i <= toListIndex; i++) {
      // Move all the Entitys between the fromListIndex and toListIndex down by one
      unsortedUpdatedEntityList[i].listIndex = i - 1
    }
  } else {
    // The Entity is moving up the list
    /**
     * @example
     * fromListIndex: 3
     * toListIndex:   1
     * listIndex alias "li"
     *
     * @example init
     * [{ li: 0 }, { li: 1 }, { li: 2 }, { li: 3 }, { li: 4 }]
     *
     * @example assign new listIndex to entity that moves
     * [{ li: 0 }, { li: 1 }, { li: 2 }, { li: 3 -> 1 }, { li: 4 }]
     *
     * @example loop iteration (i = 3 - 1; 2 >= 1)
     * [{ li: 0 }, { li: 1 }, { li: 2 -> 3 }, { li: 1 }, { li: 4 }]
     *
     * @example loop iteration (i = 2 - 1; 1 >= 1)
     * [{ li: 0 }, { li: 1 -> 2 }, { li: 3 }, { li: 1 }, { li: 4 }]
     *
     * @example final result
     * [{ li: 0 }, { li: 2 }, { li: 3 }, { li: 1 }, { li: 4 }] */

    unsortedUpdatedEntityList[fromListIndex].listIndex = toListIndex
    for (let i = fromListIndex - 1; i >= toListIndex; i--) {
      // Move all the Entitys between the fromListIndex and toListIndex up by one
      unsortedUpdatedEntityList[i].listIndex = i + 1
    }
  }

  return {
    unsortedUpdatedEntityList,
  }
}
