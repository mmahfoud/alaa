import util from "node:util";
import Polynomial from "polynomials";

Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};

var date = new Date();

var o = {
    x: 1, y: 2, date,
    list: [
        { id: 1, name: "alaa 1", on: date.addDays(3) },
        { id: 2, name: "alaa 2", on: date.addDays(5) },
        { id: 3, name: "alaa 3", on: date.addDays(-1) },
        { id: 4, name: "alaa 4", on: date.addDays(0) },
    ]
}

console.log(util.inspect(o, { colors: true, depth: Infinity }));

const a = new Polynomial([1, 2, 3]); // array, highest power to lowest
const b = new Polynomial({0: 3, 1: 2, 2: 1}); // order: coefficient
const c = new Polynomial("x^2+2x+3"); // string

// Arithmetic without remainder (addition, subtraction, multiplication)
console.log(a.add(b).toString()); // 2x^2+4x+6

console.log(a.mul(b).toString()); // 2x^4+8x^3+20x^2+24x+18

// b = c, so b-c=0
console.log(c.sub(b).toString()); // 0

// Calculus
const d = new Polynomial("x^2+2x");

// since all operations are self mutating, we can chain them. (will add non-mutating methods later)
console.log(d.integral().toString()); // 1/3x^3+x^2

const e = new Polynomial("x^2+2x");
console.log(e.deriv().toString()); // 2x+2

console.log("Eval at 10", e, e.eval(10));
console.log("e^5", Math.exp(5));

let x = 100;
console.log(x);
if (x == 100) x = 50;

console.log(x);

const f = a => a + 1;
const g = a => b => a(b);
const five_times = a => 5 * a;

console.log(g(f)(5));
console.log(g(five_times)(3));