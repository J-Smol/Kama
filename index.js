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

//How to sum smallest number

function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};


numbers.sort(function(a, b){return a - b; }); - сортирует числа в массиве от большего к меньшему
