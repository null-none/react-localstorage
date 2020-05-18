var should = require("chai").should(),
  app = require("../react-localstorage");


describe("check methods get and set", function () {
  it("boolean", function () {
    app.reactLocalStorage.set("var", true);
    app.reactLocalStorage.get("var").should.equal(true);
  });
  it("int", function () {
    app.reactLocalStorage.set("var", 1);
    app.reactLocalStorage.get("var").should.equal(1);
  });
  it("string", function () {
    app.reactLocalStorage.set("var", "test");
    app.reactLocalStorage.get("var").should.equal("test");
  });
  it("object", function () {
    app.reactLocalStorage.setObject("var", { test: "test" });
    app.reactLocalStorage.getObject("var").should.include({ test: "test" });
  });
});
