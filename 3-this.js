// globally declared variables (without let/const/var) are added to the globalThis object
firstName = 'Ben';

// globalThis has things like setTimeout and setInterval, and now has firstName too
console.log(globalThis);

// What does `this` reference since when there is no object? The globalThis object!
function sayMyName() {
  console.log(this.firstName);
  console.log(this === globalThis);
}

sayMyName();
// Expected Output:
// Ben
// true



function sayMyName() {
  console.log(this.firstName);
  console.log(this === globalThis);
}

const obj = { firstName: 'Ada' };
obj.sayMyName = sayMyName;

obj.sayMyName();
// Expected Output:
// Ada
// false