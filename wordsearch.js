const wordSearch = (letters, word) => {
    if (letters.length < 1 || word.length < 1) return false;
    const horizontalJoin = letters.map((ls) => ls.join(""));
    const verticalJoin = letters[0].map((col, index) =>
      letters.map((row) => row[index])
    );
    const verticalFlip = verticalJoin.map((ls) => ls.join(""));
    for (letter of horizontalJoin) {
      if (letter.includes(word)) return true;
      else {
        for (letter of verticalFlip) {
          if (letter.includes(word)) return true;
        }
      }
    }
    return false;
  };
  
  module.exports = wordSearch;
