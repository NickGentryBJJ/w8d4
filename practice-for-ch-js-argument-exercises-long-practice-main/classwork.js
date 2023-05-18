// function sum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     console.log(total);
// }

// sum(1, 2, 3, 4) === 10;
// sum(1, 2, 3, 4, 5) === 15;

function sum(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    console.log(total);
}

// function sum(...args) {
//     let total = 0;
//     for (let arg of args) total += arg;
//         return total;
// }

sum(1, 2, 3, 4) === 10;
sum(1, 2, 3, 4, 5) === 15;



Function.prototype.myBind = function (context) {
    let that = this;
    let bindArgs = Array.from(arguments).slice(1);
    return function() {
        let helperArgs = Array.from(arguments);
        that.apply(context, bindArgs.concat(helperArgs));
    }
};