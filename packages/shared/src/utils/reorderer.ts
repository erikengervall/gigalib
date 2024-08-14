import { naiveDeepclone } from './naive-deepclone';

/**
 * Updates `listIndex` on the list items provided to reflect the consequences of the move
 */
export function reorderer<T extends { listIndex: number }>({
  sortedList,
  fromListIndex,
  toListIndex,
}: {
  sortedList: T[];
  fromListIndex: number;
  toListIndex: number;
}): {
  reorderedList: T[];
} {
  /**
   * The updated list will not preserve order
   *
   * This is up to the caller
   */
  const reorderedList = naiveDeepclone(sortedList);

  if (toListIndex > fromListIndex) {
    // The list item is moving down the list
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

    reorderedList[fromListIndex].listIndex = toListIndex;
    for (let i = fromListIndex + 1; i <= toListIndex; i++) {
      // "Move" all the list items between the fromListIndex and toListIndex down by one
      reorderedList[i].listIndex = i - 1;
    }
  } else {
    // The list item is moving up the list
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

    reorderedList[fromListIndex].listIndex = toListIndex;
    for (let i = fromListIndex - 1; i >= toListIndex; i--) {
      // "Move" all the list items between the fromListIndex and toListIndex up by one
      reorderedList[i].listIndex = i + 1;
    }
  }

  return {
    reorderedList: reorderedList.sort((listItemA, listItemB) => {
      // ASC
      return listItemA.listIndex - listItemB.listIndex;
    }),
  };
}
