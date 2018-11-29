const input = 'A whale of a deal!';
const stringArray = input.split('');

const vowelExtractor = arr => {
  let vowelArray = [];
	for(let i = 0; i < arr.length; i++) {
	if (arr[i] === 'a' || arr[i] === 'A' || arr[i] === 'o' || arr[i] === 'O' || arr[i] === 'i' || arr[i] === 'I') {
    vowelArray.push(arr[i]);
  	} else if (arr[i] === 'u' || arr[i] === 'U' || arr[i] === 'e' || arr[i] === 'E'){
      vowelArray.push(arr[i]);
      vowelArray.push(arr[i]);
    }
  }
  const vowelString = vowelArray.join('').toUpperCase();
  return vowelString;
}

const whaleTales = vowelExtractor(stringArray);
console.log(whaleTales);
