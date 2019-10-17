//  a class in ES is not like you'd think of a class in C# or Java.
//  It is "syntactical sugar" - this class gets turned into a normal ES object.
//  We won't talk much about the differences between this and C#/Java.
//   For now, know that this thing will mostly act like you'd expect
//   an OOP class to act in your code.

export class Mammal {
  hasHair = true;
}

export class Kitten extends Mammal {
  hasWhiskers = true;

  hasHairAndWhiskers() {
    return this.hasWhiskers && this.hasHair;
  }

  meow = () => {
    return 'meow';
  };
}
