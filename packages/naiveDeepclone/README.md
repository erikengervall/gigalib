# Naive deepclone

![](logos/logo.png)

A very naive implementation of deeclone

## Usage

```ts
const myObject = {
  is: {
    quite: {
      nested: 1337,
    },
  },
}

const deepclone = naiveDeepclone(myObject)

// `deepclone` has no references to `myObject`
```
