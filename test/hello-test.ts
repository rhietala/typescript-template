/* tslint:disable:no-expression-statement */

import { expect } from "chai";
import "mocha";
import { helloWorld, onlyPositives } from "../src/hello";

describe("Hello function", () => {
    it("should return hello world", () => {
        const result = helloWorld();

        expect(result).to.equal("Hello world!abc 1");
    });
});

describe("onlyPositives", () => {
    it("returns only positives", () => {
        const input = [-1, 2, -2, -5, 4];
        const expected = [2, 4];
        const result = onlyPositives(input);

        expect(result).to.eql(expected);
    });
});
