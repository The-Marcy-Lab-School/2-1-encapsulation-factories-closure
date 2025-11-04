// ----------- ARROW FUNCTIONS ------------
console.log(this); // prints {}

// Arrow function in the global scope
const arrow = () => {
  console.log(this);
}
// arrow(); // prints {}

// Arrow Function as a method
const obj1 = {
  description: 'obj1',
  arrow: () => {
    // the object doesn't create a new scope so the parent scope is still the global scope
    console.log(this);
  }
}
// obj1.arrow(); // prints {}

// Arrow function nested inside another function
const obj2 = {
  description: 'obj2',
  method() {
    const nested = () => {
      // the parent scope is now the `obj2.method` function whose `this` value is `obj2`
      console.log(this);
    }
    nested(); // prints obj2
  }
}
// obj2.method();

// ------------- FUNCTION DECLARATIONS/EXPRESSIONS ------------
console.log(global);

// Function declaration in the global scope
function functionDeclaration() {
  console.log(this);
}
// functionDeclaration(); // prints the global object

// Function expression in the global scope
const functionExpression = function() {
  console.log(this);
}
// functionExpression(); // prints the global object

const obj3 = {
  description: 'obj3',
  methodDefinition() {
    // method definition shorthand (equivalent to a function expression below)
    console.log(this);
  },
  methodExpression: function() {
    // method as a function expression
    console.log(this);
  },
};

// obj3.methodDefinition(); // prints obj3
// obj3.methodExpression(); // prints obj3
