import * as a from './core/sub';
function sum(a, b) {
    return a + b;
}
function sum2(a, b) {
    return a + b;
}
function sum3(a, b) {
    return a + b;
}

console.log(a.default);
console.log(a.printName());

console.log(a.printName1());

export { sum, sum2, sum3 };
exports.sum1 = sum;
exports.B = { test: 'HHH' };
exports.C = { sum, sum2, sum3, a: a.printName };
exports.D = a.printName1;
