"use strict";
function helloWorld() {
    const a = 1;
    return "Hello world!" + abc(a);
}
exports.helloWorld = helloWorld;
function abc(i) {
    return "abc " + i;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = helloWorld;
