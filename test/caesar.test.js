const { describe, it } = require("mocha");
const expect= require("chai").expect;
const caesarModule = require("../src/caesar");
const caesar = caesarModule.caesar;

describe("caesar() tests", () => {
  it("should encode messages by shifting to the right", () => {
    const actual = caesar("thinkful", 3);
    expect(actual).to.equal("wklqnixo");
  });
  
  it("should encode messages by shifting to the left", () => {
    const actual = caesar("thinkful", -3);
    expect(actual).to.equal("qefkhcri");
  });
  
  it("should decode messages", () => {
    const actual = caesar("wklqnixo", 3, false);
    expect(actual).to.equal("thinkful");
  });
  
  it("should encode messages by shifting to the left", () => {
    const actual = caesar("thinkful", -3);
    expect(actual).to.equal("qefkhcri");
  });
  
  it("should return false if shift is less than -25", ()=> {
  const actual = caesar("thinkful", -26);
   expect(actual).to.be.false;
    });
  
  it("should return false if shift value isn't present", ()=> {
   const actual = caesar("thinkful");
   expect(actual).to.be.false;
 }); 
  
  it("should maintain capitals, spaces, and nonalphabetic symbols", ()=> {
    const actual = caesar("This is a secret message!", 8);
    expect(actual).to.equal("bpqa qa i amkzmb umaaiom!"); 
  });
});
