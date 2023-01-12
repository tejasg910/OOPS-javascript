// function Student(name, age, marks) {
//   this.name = name;
//   this.age = age;
//   this.marks = marks;
// }

// Student.prototype.addMarks = function (marks) {
//   this.marks = marks;
// };

// function Sports(name, age, marks) {
//   this.medals;

//   Student.call(this, name, age, marks);
//   this.callData = data;
// }

// Sports.prototype = Object.create(Student.prototype);

// Sports.prototype.medals = function (q) {
//   this.medals = q;
// };

// const rahul = new Sports("rahul", 20, 44);
// console.log(rahul);

class Student {
  name;
  age;
  marks;
  constructor(name, age, marks) {
    this.age = age;
    this.name = name;
    this.marks = marks;
  }
}

class Sport extends Student {
  constructor(name, age, marks) {
    super(name, age, marks);
  }
}

const vishal = new Sport("vishal", 14, 40);
console.log(vishal);
