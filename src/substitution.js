// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26 || typeof alphabet !== 'string') return false;
    for (let i = 0; i < alphabet.length; i++){
      const char = alphabet[i];
      if (char === ' ') continue;
      if (alphabet.indexOf(char) !== i) return false;
    }
    const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const result = [];
    for (let char of input.toLowerCase()){
      if (char === ' '){
        result.push(' ');
    } else {
      const index = encode ? standardAlphabet.indexOf(char) : alphabet.indexOf(char);
      result.push( encode? alphabet[index] : standardAlphabet[index]);
    }
  }
    return result.join('');
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
