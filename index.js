//How to reverse every word in a string

function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}

//How to exclude letters from string

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
