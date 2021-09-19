import logger from "../dist/index";
import { expect } from '@jest/globals';

describe("Log Text", () => {
    test("Log Text should be correct, done => {
        expect(logger.log("Hello World")).toBe("[LOG] Hello World");
    });
});

describe("Info Text", () => {
    test("Info Text should be correct, done => {
        expect(logger.info("Hello World")).toBe("[INFO] Hello World");
    });
});

describe("Error Text", () => {
    test("Error Text should be correct, done => {
        expect(logger.error("Hello World")).toBe("[ERROR] Hello World");
    });
});

describe("Warn Text", () => {
    test("Warn Text should be correct, done => {
        expect(logger.warn("Hello World")).toBe("[WARN] Hello World");
    });
});

describe("Debug Text", () => {
    test("Debug Text should be correct, done => {
        expect(logger.debug("Hello World")).toBe("[DEBUG] Hello World");
    });
});