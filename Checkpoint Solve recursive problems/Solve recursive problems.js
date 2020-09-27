const isPalindrom = (word) => {
    if (word.length === 1 || word.length === 0) {
      return true;
    }
  
    if (word[0] === word[word.length - 1]) {
      word = word.split("");
      word.shift();
      word.pop();
      word = word.join("");
      return isPalindrom(word);
    } else {
      return false;
    }
  };
  console.log(isPalindrom("été"));