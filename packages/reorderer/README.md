# Reorderer (moved to [@engervall/shared](https://www.npmjs.com/package/@engervall/shared))

![](https://raw.githubusercontent.com/erikengervall/gigalib/main/packages/reorderer/logos/logo.png)

Keep a list ordered upon moving a list item in the list

The API is very straight forward

## Usage

```ts
const mySortedListOfThings = [
  { initialListIndex: 0, listIndex: 0 }, // `listIndex` is the only required field for `reorderer` to work
  { initialListIndex: 1, listIndex: 1 },
  { initialListIndex: 2, listIndex: 2 },
  { initialListIndex: 3, listIndex: 3 },
];

const { reorderedList } = reorderer({
  sortedList: mySortedListOfThings,
  fromListIndex: 0,
  toListIndex: 2,
});

console.log(reorderedList);
// [
//   { initialListIndex: 1, listIndex: 0 },
//   { initialListIndex: 2, listIndex: 1 },
//   { initialListIndex: 0, listIndex: 2 },
//   { initialListIndex: 3, listIndex: 3 },
// ]
```
