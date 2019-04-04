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

//Перевод двоичного числа в десятеричное

const binaryArrayToNumber = arr => {
  let acc = 0;
  for (let i = 0; i < arr.length; i++) {
    acc += arr[i] * (Math.pow(2, (- (i - arr.length + 1))));
  }
  return acc;
};

//и как это сделать нормально)))

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);



//количество вхождений в массив

[1,2,3,4,4,4,5,4,1,5,4].filter(item => item === 4).length // 5


//есть ли вхождение в массив

var pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));


//Шифрование ROT13

function rot13(message){
  var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  var index     = x => input.indexOf(x);
  var translate = x => index(x) > -1 ? output[index(x)] : x;
  return message.split('').map(translate).join('');
}

//или

function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}


//Повторяются ли буквы в слове

function isIsogram(str){
  let arr = str.toLowerCase().split('');
  function getUniqTags(tags) {
    var results = [];

    tags.forEach(function (value) {
        value = value.trim();

        if (results.indexOf(value) === -1) {
            results.push(value);
        }
    });

    return results; 
  }
  return (getUniqTags(arr).join('') === str.toLowerCase());
}

//другое решение
function isIsogram(str){ 
  return !/(\w).*\1/i.test(str);
}

//или
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}
