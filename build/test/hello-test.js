/* tslint:disable:no-expression-statement */
"use strict";
const chai_1 = require("chai");
require("mocha");
const hello_1 = require("../src/hello");
describe("Hello function", () => {
    it("should return hello world", () => {
        const result = hello_1.helloWorld();
        chai_1.expect(result).to.equal("Hello world!abc 1");
    });
});
describe("onlyPositives", () => {
    it("returns only positives", () => {
        const input = [-1, 2, -2, -5, 4];
        const expected = [2, 4];
        const result = hello_1.onlyPositives(input);
        chai_1.expect(result).to.eql(expected);
    });
});
