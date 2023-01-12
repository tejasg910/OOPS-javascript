class Bird {
  name;
  size;
  flyingHeight;
  constructor(name, size, height) {
    this.name = name;
    this.size = size;
    this.flyingHeight = height;
  }

  getName() {
    return this.name;
  }
}

const parrot = new Bird("Parrot", 10, 50);
console.log(parrot);

//the methods declared in the classes are the prototype of the object and makes the syntax readable
