const { describe, it } = require("mocha");
const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");
const polybius = polybiusModule.polybius;

describe("polybius() tests", ()=> {
  it("should encode a message", ()=> {
    const actual = polybius("thinkful");
    expect(actual).to.equal('4432423352125413');
  });
  
  it("should maintain spaces", ()=> {
    const actual = polybius("Hello world");
    expect(actual).to.equal('3251131343 2543241341');
  });
  
  it("should decode a message", ()=> {
    const actual = polybius("3251131343 2543241341", false);
    expect(actual).to.equal("hello world");
  });
  
  it("should show i/j when decoding 42", ()=> {
    const actual = polybius("4432423352125413", false);
    expect(actual).to.equal("thi/jnkful");
  });
});
