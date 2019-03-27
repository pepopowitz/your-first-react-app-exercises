# Possible Solutions

## Instance Properties

```js
export class Kitten {
  hasWhiskers = true;
}
```

## Inheritance

```js
export class Kitten extends Mammal {
  hasWhiskers = true;
}
```

## Instance Methods

```js
export class Kitten extends Mammal {
  hasWhiskers = true;

  hasHairAndWhiskers() {
    return this.hasWhiskers && this.hasHair;
  }
}
```

## Instance Methods As Properties

```js
export class Kitten extends Mammal {
  hasWhiskers = true;

  hasHairAndWhiskers() {
    return this.hasWhiskers && this.hasHair;
  }

  meow = () => {
    return 'meow';
  };
}
```
