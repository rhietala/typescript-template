"use strict";
function helloWorld() {
    return "Hello world!" + abc(1);
}
exports.helloWorld = helloWorld;
function abc(i) {
    return "abc " + i;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = helloWorld;
