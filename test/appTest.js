const assert = require("chai").assert;
const { sayHello, addNumbers } = require("../app");
const app = require("../app");

describe("App", function () {
  describe("sayHello()", function () {
    it("say Hello should return hello", function () {
      let result = sayHello();
      assert.equal(result, "hello");
    });

    it("say Hello should return type string", function () {
      let result = sayHello();
      assert.typeOf(result, "string");
    });
  });

  describe("addNumbers()", function () {
    it("addNumbers should be above 5", function () {
      let result = addNumbers(5, 5);
      assert.isAbove(result, 5);
    });

    it("addNumbers should return type number", function () {
      let result = addNumbers(5, 5);
      assert.typeOf(result, "number");
    });
  });
});
