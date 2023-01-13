class User {
  static id = 1;
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.id = User.id++;
  }

  static {
    console.log("this is vlaue");
  }

  static callingMainFun() {
    console.log(this.id);
    console.log("calling ");
  }

  static secondOne() {
    this.callingMainFun();
  }

  static comparebyAge(user1, user2) {
    return user1.age - user2.age;
  }
}

const user1 = new User("tejas", 20, 30000);
const user2 = new User("vishal", 16, 40000);
const user3 = new User("prakash", 24, 45000);
console.log(user1, user2, user3);

const arr = [user1, user2, user3];

console.log(arr);
// const data = arr.sort((a, b) => a.age - b.age);
// const data = arr.sort(User.comparebyAge);
const data = arr.sort((a, b) => {
  return User.comparebyAge(a, b);
});

console.log(arr);

Math.random();

//statics method or properties are not relatable with the instance of the object created from the class
//they can be accessed outside of the class or inside of the class using the class object like User.staticMethod
//we can access the static property or method using this only if we use this inside a static method or property
//we can create the utility functions using static methods
//there are already predefined methods in the javascript like Math.random()
