class Bird {
  #size;
  #speed;

  name;
  constructor(name, size) {
    this.name = name;
    this.#size = size;
  }
  getName() {
    return this.name;
  }
  #calculateAvg() {
    console.log("calculating the average");
  }
  setSpeed(speed) {
    this.#speed = speed;
  }
  getSpeed() {
    this.#calculateAvg();
    return this.#speed;
  }
  getSize() {
    return this.#size;
  }
}

class Eagle extends Bird {
  constructor(name, size) {
    super(name, size);
  }
}

const bald = new Eagle("bald", 20);
bald.setSpeed(40);

console.log(bald.getSpeed());
