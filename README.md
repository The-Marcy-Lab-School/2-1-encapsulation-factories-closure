# Closures


- [Intro to Mod 5: Object-Oriented Programming (OOP)](#intro-to-mod-5-object-oriented-programming-oop)
- [Encapsulation](#encapsulation)
- [Consistency \& Predictability](#consistency--predictability)
- [Factory Functions, Privacy, \& Closures](#factory-functions-privacy--closures)
- [Summary](#summary)


## Intro to Mod 5: Object-Oriented Programming (OOP) — 5 minutes

Object-Oriented Programming is a style of programming (a "paradigm") that uses **objects to manage state (data) and behavior** in an application. While OOP does let us do some new things, more than anything, it helps us write better, more organized code.

It can be defined by its 4 pillars:
* **Encapsulation** - every object should control its own state
* **Abstraction** - hiding complexity through functions and prototypes
* **Inheritance** - sharing behavior between objects
* **Polymorphism** - similar objects can be used interchangeably

![The four pillars of object oriented programming are abstraction, inheritance, polymorphism, and encapsulation.](./images/oop-pillars.png)

Throughout this module, we will be learning about these four pillars and how we implement them in JavaScript using the `class` syntax. Along the way, we'll learn key concepts + syntax including:
* Closures
* Factory Functions
* Execution Context and `this`
* `class` Syntax
* Constructor Functions & Prototypes
* Class Inheritance

**<details><summary style="color: purple">Q: What are the four pillars of Object-Oriented Programming?</summary>**

> * **Encapsulation** - every object should control its own state
> * **Abstraction** - hiding complexity through functions and prototypes
> * **Inheritance** - sharing behavior between objects
> * **Polymorphism** - similar objects can be used interchangeably

</details><br>

## Encapsulation — 15 minutes

In functional programming, we separate data from the functions that act on them. We achieve **consistency** & **predicatability** through pure functions.

```js
// Functional Programming separates data from functionality
const friends = ['ahmad', 'brandon', 'carmen'];

const addFriend = (friends, newFriend) => {
  if (typeof newFriend !== 'string') return friends;
  return [...friends, newFriend]; // keep it pure, make a new list
}

const newFriends = addFriend(friends, 'daniel');
```

In OOP, we store data in objects and give those obejcts methods to manipulate their own data. This is called **encapsulation**.

```js
// Object Oriented Programming encapsulates data with functionality
const friendsManager = {
  friends: [],
  addFriend(newFriend) {
    this.friends.push(newFriend);
    // `this` refers to the "owner" of the method. 
  }
}

friendsManager.addFriend('ahmad');
friendsManager.addFriend('brandon');
friendsManager.addFriend('carmen');
// Here, friendsManager is the owner of addFriend. 
// this.friends === friendsManager.friends

console.log(friendsManager.friends)
```

> In OOP, we store data in objects and give those obejcts methods to manipulate their own data. This is called **encapsulation**.

**<details><summary style="color: purple">Q: How does the `friendsManager` object demonstrate encapsulation compared to the first example? How does `this` enable encapsulation?</summary>**

> The `friendsManager` object stores the `friends` array inside alongside the `addFriend` method. 
> 
> When `friendsManager.addFriend()` is invoked, the `addFriend` method uses `this` to manipulate the `friendsManager`'s own `friends` array.

</details><br>

## Consistency & Predictability — 5 minutes

**Consistency** and **predictability** are major goals in software engineering. This is what motivates us to write pure functions in functional programming. It is just as important in OOP.

Consider the `friendsManager` example again.

```js
const friendsManager = {
  friends: [],
  addFriend(newFriend) {
    // we've added this guard clause
    if (typeof newFriend !== 'string') return;
    this.friends.push(newFriend);
  }
}

// What about this is NOT consistent or predictable?
friendsManager.addFriend('daniel');
friendsManager.addFriend(true);
friendsManager.friends.push('emmaneul');
friendsManager.friends.push(42);
```

**<details><summary style="color: purple">Q: What about the last two lines in the example are NOT consistent or predictable?</summary>**

> You can modify the `friendsManager.friends` array either through the `addFriend()` method or by directly mutating the `friends` array. When modifying the array directly, there are no safeguards.

</details><br>

To achieve consistency and predictability, we need to restrict the access to the `friends` array, only allowing access through the methods that we define. 

## Factory Functions, Privacy, & Closures — 30 minutes

Let's see how we can do this using a **factory function** (a function that returns a new object).

To achieve consistency and predictability, we can change a few things:
* We create and return `friendsManager` inside of the `makeFriendsManager` factory.
* `friends` is now an array that exists outside of the `friendsManager` object 
* There is a new `getFriends()` method that returns a copy of the `friends` array
* `addFriend` no longer uses `this.friends` since `friendsManager` doesn't have a `friends` property.

```js
// A factory function
const makeFriendsManager = () => {
  // this array is now "private"
  const friends = [];

  const friendsManager = {
    getFriends() {
      return [...friends]; 
      // a closure is made around the friends array
      // return a copy to protect the original
    },
    addFriend(newFriend) {
      if (typeof newFriend !== 'string') return;
      friends.push(newFriend);
      // we no longer use this.friends 
    }
  }
  return friendsManager;
}

const myFriendsManager = makeFriendsManager();

myFriendsManager.friends // undefined
friendsManager.addFriend('ahmad');
friendsManager.addFriend('brandon');
friendsManager.addFriend('carmen');
friendsManager.addFriend(true);
myFriendsManager.getFriends() // ['ahmad', 'brandon', 'carmen', 'daniel']
```

This approach takes advantage of the fact that `addFriend` and `getFriends()` create a **closure** around the `friends` array.
* A **closure** is when an "inner function" maintains references to variables in its surrounding scope (an "outer function").
* Even after `friendsManager` is returned and `makeFriendsManager` terminates, `addFriend()` and `getFriends()` maintain access to the `friends` array
* The `friends` variable inside of `makeFriendsManager` is now "private" — we can't access it other than through those **setter/getter methods**.

**<details><summary style="color: purple">Q: In the example above, identify the "outer" function and the inner function involved in creating a closure</summary>**

> `makeFriendsManager` is the outer function and both `addFriend` and `getFriends` form a closure around the variable `friends`.

</details><br>

**<details><summary style="color: purple">Q: What makes `makeFriendsManager` a factory function?</summary>**
> It creates and returns a new object.
</details><br>

## Challenge

Below is a `counter` object. The problem is that the `counter.value` property is not private — it can be directly mutated. Your challenge is to create a factory function `makeCounter` that will protect the value of the counter while still allowing us to `increment()`, `decrement()`, and get the current value of the counter.

As a bonus, make the factory function accept an argument `startingValue` which sets the starting `value` of the counter. If no value is provided, start at `0`. Then make multiple counters, each starting at a different value.

```js
// challenge.js

const counter = {
  value: 0,
  increment() {
    this.value++;
  },
  decrement() {
    this.value--;
  }
}

console.log(counter.value); // 0
counter.increment();
counter.increment();
console.log(counter.value); // 2
counter.decrement();
console.log(counter.value); // 1
counter.value = 10; // BAD
```

**<details><summary style="color: purple">Solution</summary>**

> ```js
> const makeCounter = (startingValue = 0) => {
>   let value = startingValue;
> 
>   const counter = {  
>     getValue() {
>       return value;
>     },
>     increment() {
>       value++;
>     },
>     decrement() {
>       value--;
>     }
>   }
>   return counter;
> }
> 
> const counter = makeCounter();
> console.log(counter.getValue()); // 0
> counter.increment();
> counter.increment();
> console.log(counter.getValue()); // 2
> counter.decrement();
> console.log(counter.getValue()); // 1
> console.log(counter.value); // undefined
> 
> const counterFrom5 = makeCounter(5);
> console.log(counterFrom5.getValue()); // 5
> ```

</details><br>

## Summary

* **Object-Oriented Programming (OOP)**: A programming paradigm that uses objects to manage state (data) and behavior in an application.
* **Encapsulation**: A pillar of OOP that encourages bundling of data and the methods that act on that data into a single object
* A **factory function** returns an object with a consistent and predictable structure.
* A **closure** is created when an "inner function" references variables in its surrounding scope (an "outer function").
  * The inner function "remembers" the value of the variables in the surrounding scope, even after the outer function returns.
* Benefits of encapsulation with factory functions and closure:
  * We can create private variables
  * access to state is provided only through predicatable **getter/setter** methods

```js
const makeFriendsManager = (...initialFriends) => {
  const friends = [...initialFriends];

  const friendsManager = {
    getFriends() {
      return [...friends]; 
    },
    addFriend(newFriend) {
      if (typeof newFriend !== 'string') return;
      friends.push(newFriend);
    }
  }
  return friendsManager;
}
const myFriendsManager = makeFriendsManager('ahmad', 'brandon', 'carmen');
```
