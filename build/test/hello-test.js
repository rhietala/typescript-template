"use strict";
const hello_1 = require("../src/hello");
const chai_1 = require("chai");
require("mocha");
describe("Hello function", () => {
    it("should return hello world", () => {
        const result = hello_1.default();
        chai_1.expect(result).to.equal("Hello world!");
    });
});
