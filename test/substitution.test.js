const { describe, it } = require("mocha");
const expect= require("chai").expect;
const substitutionModule = require("../src/substitution");
const substitution = substitutionModule.substitution;

describe("substitution() tests", ()=> {
  it("should return false for a short alphabet", ()=> {
    const actual = substitution("thinkful", "short");
    expect(actual).to.be.false;
  });
  
  it("should encode a message", ()=> {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal('jrufscpw');
  });
  
  it("should handle spaces", ()=> {
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal('elp xhm xf mbymwwmfj dne');
  });
  
  it("should decode a message", ()=> {
    const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    expect(actual).to.equal('thinkful');
  });
  
  it("should handle special characters", ()=> {
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    expect(actual).to.equal('message');
  });  
});
