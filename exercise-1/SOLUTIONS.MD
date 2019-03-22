# Possible Solutions

## Import Named

```js
import { add } from './add.js';
```

## Export Named

```js
export function add(a, b) {
  return a + b;
}
```

## Import Default

```js
import addThree from './add.js';

// Or, you can combine the imports into one line:
// import addThree, { add } from './add.js';
```

## Export Default

```js
export default function addThree(a) {
  return add(a, 3);
}
```
