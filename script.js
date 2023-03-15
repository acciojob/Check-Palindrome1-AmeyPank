// complete the given function

function palindrome(str){
 // convert string to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[\W_]/g, '');

  // check if the reversed string is the same as the original
  return str === str.split('').reverse().join('');
}
module.exports = palindrome
