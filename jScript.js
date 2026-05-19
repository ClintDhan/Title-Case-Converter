const titleCase = (str) => {
    // split the string so that we can iterate later
  let wordArray = str.toLowerCase().split(" ");
//   this is where to store the new capitalized string
  let newWords = [];

//   iterate in every wordArray value
  for (let i = 0; i < wordArray.length; i++) {

    // this is the word per iteration
    let word = wordArray[i];

    // empty string to store the characters
    let newWord = "";

    // loop every character, if it is the first index, it should be capitalized, otherwise just insert it to newWord var
    for (let j = 0; j < word.length; j++) {
      if (j === 0) {
        newWord += word[j].toUpperCase();
      } else {
        newWord += word[j];
      }
    }

    newWords.push(newWord);
  }

//   join the strings so they can get out from the array
  return newWords.join(" ");
};