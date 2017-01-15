"use strict";
const R = require("ramda");
function helloWorld() {
    const a = 1;
    return "Hello world!" + abc(a);
}
exports.helloWorld = helloWorld;
function abc(i) {
    return "abc " + i;
}
const greaterThan = R.curry((limit, value) => {
    return value > limit;
});
exports.onlyPositives = R.filter(greaterThan(0));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = helloWorld;
