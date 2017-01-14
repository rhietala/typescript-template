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
