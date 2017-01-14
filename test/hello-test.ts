/* tslint:disable:no-expression-statement */

import { expect } from "chai";
import "mocha";
import { helloWorld } from "../src/hello";

describe("Hello function", () => {
    it("should return hello world", () => {
        const result = helloWorld();

        expect(result).to.equal("Hello world!abc 1");
    });
});
