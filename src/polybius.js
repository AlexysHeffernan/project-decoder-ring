// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const polybiusSquare = [
      ['A', 'B', 'C', 'D', 'E'],
      ['F', 'G', 'H', 'I/J', 'K'],
      ['L', 'M', 'N', 'O', 'P'],
      ['Q', 'R', 'S', 'T', 'U'],
      ['V', 'W', 'X', 'Y','Z']
    ];
    let result = '';
    if (encode) {
      for (let char of input.toUpperCase()){
        if (char === ' '){
          result += ' ';
        } else {
          for (let i = 0; i < polybiusSquare.length; i++) {
            for (let j = 0; j < polybiusSquare[i].length; j++){
              if (polybiusSquare[i][j].includes(char)){
                result += `${j + 1}${i + 1}`;
              }
            }
          }
        }
        } return result;
      } else {
        if (input.replace(/\s/g, '').length % 2 != 0) return false;
        let result = '';
        let pair = '';
        for (let char of input){
          if (char === ' '){
            result += ' ';
          } else {
            pair += char;
            if (pair.length === 2) {
             const col = parseInt(pair[0]) - 1;
              const row = parseInt(pair[1]) - 1;
              result += polybiusSquare[row][col];
              pair = '';
            }
          }
        } 
        return result.toLowerCase();
      }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
