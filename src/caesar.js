// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift > 25 ){
      return false;
    } 
    
    const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    return input.toLowerCase().replace(/[a-z]/g, char => {
      const index = alpha.indexOf(char);
      let newIndex;
      if (encode){
      newIndex = (index + shift) % 26 ;
        if (newIndex < 0) newIndex += 26;
      } else {
        newIndex = (index - shift) % 26;
        if (newIndex < 0) newIndex += 26;
      }
      return alpha[newIndex];
    });
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
