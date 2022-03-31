function isPalindrome(word){
  const string = word;
  const array = string.split('');
  const reversed = [...array];
  reversed.reverse();
  const forward = array.join();
  const backwards = reversed.join();
  const palindrome = (forward === backwards);
  return palindrome;
}


isPalindrome('abba');
/* 
  Assign word to variable 'string';
  Assign string.split('') to variable 'array';
  Use .reverse on a copy of array and save it in variable reversed
  use .join on each variable to turn the array and reversed into a joined string
  if forward === backwards is true than the it is a palindrome.

*/

/*
  To check if it is a palindrome, you want to compare the string characters in regular and reverse order.
  So to keep it simple, just create two arrays out of the characters in the string.
  One in the order entered, the other in reverse order.
  We can use .reverse() after splitting the string into an array to flip the order of the word,
  then use .join() to return the array to a word to check if array and reversed are the same.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
