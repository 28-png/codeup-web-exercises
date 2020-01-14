function findOutlier(integers){
    var even = [];
    var odd = [];
    for(var i = 0; i < integers.length; i++) {
        if((integers[i] % 2) === 0) {
            even.push(integers[i])
       } else {
            odd.push(integers[i])
        }
    }
    var elen = even.length;
    var olen = odd.length;

    if (elen > olen)
    {
        return odd[0];
    }
    else
    {
        return even[0];
    }
}

console.log(findOutlier(['3', '6', '7', '9']));
console.log(findOutlier(['2', '6', '7', '8']));

function upperCase(x) {
if (x == null || parseFloat(x) == x) return false;
if(typeof x === "string")
return x.toUpperCase();
else
    return false;
    }



function containsVowel(words) {
       if(typeof words !== 'string') return false;
       else
           var lower = words.toLowerCase();
           return (lower.includes('a') ||
               lower.includes('e') ||
               lower.includes('i') ||
               lower.includes('o') ||
               lower.includes('u'))
}

// capitalizes first letter of every word in sentence.
var sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence);
var words = sentence.split(" ");
for (var i = 0;i<words.length; i++) {
    // capitalize first letter
    var word = words[i];
    // var firstLetter = word.split()[0];
    var letters = word.split("");
    var capitalFirstLetter = letters[0].toUpperCase();
    var capitalizedWord = "";
    capitalizedWord += capitalFirstLetter;
    for (var j=1;j<letters.length;j++) {
        capitalizedWord += letters[j];
    }
    words[i] = capitalizedWord;
}
sentence = words.join(" ");
console.log(sentence);



function isArray(x) {
        return Array.isArray(x);
}

function isZero(x) {
    var y = parseInt(x);
    return (y === 0);
}

function isPositive(x){
    var x = (parseFloat(x));
   return ((x > 0) && (typeof x == "number"));
}

function isNegative(x){
    var x = (parseFloat(x));
    return ((x < 0) && (typeof x == "number"));
}

function isEmptyString(x) {
    return x === "";
}

function isNotString(x){
    return typeof x != "string";
}

function isString(x){
    return typeof x == "string"
}

  function isBoolean(val) {
        return typeof val === 'boolean';
}









