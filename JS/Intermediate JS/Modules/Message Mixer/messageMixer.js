//const MessageMixer = {};
/*MessageMixer.*/const countCharacter = function(inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count++;
    }
  }
  return count; 
}

/*MessageMixer.*/const capitalizeFirstCharacterOfWords = function (string) {
  let arr = string.split(" ");  
    for (let i = 0; i < arr.length; i++) {  
      let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1); 
    }
  return arr.join(" "); 
};


/*MessageMixer.*/ const reverseWord = function (word) {
  return word.split("").reverse().join("");
};

/*MessageMixer.*/const reverseAllWords =  function (sentence) {
  let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = /*MessageMixer.*/reverseWord(words[i]);
    }
   return words.join(" ");
};


/*MessageMixer.*/const replaceFirstOccurence = function (string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};


/*MessageMixer.*/const replaceAllOccurrences = function (string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};

/*MessageMixer.*/const encode = function (string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
      string = /*MessageMixer.*/replaceAllOccurrences(string, key, replacementObject[key]); 
    }	
    return string;
};

/*MessageMixer.*/const palindrome = (str) => {
  return str + ' ' + /*MessageMixer.*/reverseWord(str);
};

/*MessageMixer.*/const pigLatin = (sentence, character) => {
  return sentence.split(' ').join(character + ' ');
}


//module.exports = MessageMixer;
//export default MessageMixer;
export { countCharacter, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurence, replaceAllOccurrences, encode, palindrome, pigLatin };