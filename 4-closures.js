const addSuffixToEachWord = (words, suffix) => {
  return words.map((word) => word + suffix);
}

const words = ['lime', 'lemon', 'gator'];

// try invoking the function with the suffix 'ade'



// The "outer function" declares the count variable in its scope
const makeCounter = () => {
  let count = 0;

  // the "inner function" references the count variable in the surrounding scope
  const counter = () => {
    count++;
    console.log(count);
  }

  return counter;
}

const myCounter = makeCounter();

// try invoking the myCounter function a few times

// try referencing the count variable from the global scope