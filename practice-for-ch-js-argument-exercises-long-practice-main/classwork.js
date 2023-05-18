// function sum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     console.log(total);
// }

// sum(1, 2, 3, 4) === 10;
// sum(1, 2, 3, 4, 5) === 15;

// function sum(...args) {
//     let total = 0;
//     for (let i = 0; i < args.length; i++) {
//         total += args[i];
//     }
//     console.log(total);
// }

// function sum(...args) {
//     let total = 0;
//     for (let arg of args) total += arg;
//         return total;
// }

// sum(1, 2, 3, 4) === 10;
// sum(1, 2, 3, 4, 5) === 15;



Function.prototype.myBind = function (context) {
    let that = this;
    let bindArgs = Array.from(arguments).slice(1);
    return function() {
        let helperArgs = Array.from(arguments);
        that.apply(context, bindArgs.concat(helperArgs));
    }
};

// Function.prototype.myBind = function (context, ...args) {
//         let that = this;
//         let bindArgs = args;
//         return function(...args) {
//             let helperArgs = args;
//             that.apply(context, (bindArgs.concat(helperArgs)));
//         };
// };


class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");

//   markov.says("meow", "Ned");

//   markov.says.myBind(pavlov, "meow", "Kush")();

//   markov.says.myBind(pavlov)("meow", "a tree");

//   markov.says.myBind(pavlov, "meow")("Markov");

// ------------------------------------------------------


let curriedSum = function(numArgs) {
    let numbers = [];
    let _curriedSum = function(num) {
        numbers.push(num); 
        if (numbers.length === numArgs) {
            console.log(numbers, "numbers")
            return numbers.reduce((a, b)=> a + b); 
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
};

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56

// curriedSum(4)(5)(30)(20)(1)
