// // business logic
 // var vowels = ['a', 'e', 'i', 'o', 'u'];
// var qu = 'qu';
 var space = ' ';
// var comma = ', ';

// user interface logic
var pigLatin = (function(word) {
if (word.charAt(0) === "a"|| word.charAt(0) === "e"|| word.charAt(0) === "i"|| word.charAt(0) === "o"|| word.charAt(0) === "u") {
  return word + "ay";
  }
  else if (word.charAt(0) !== "a"|| word.charAt(0) !== "e"|| word.charAt(0) !== "i"|| word.charAt(0) !== "o"|| word.charAt(0) !== "u")
{
  var remove = word.slice(1);
  return remove + word.charAt(0) + "ay";
}
else if (word.charAt(0) !== "a"|| word.charAt(0) !== "e"|| word.charAt(0) !== "i"|| word.charAt(0) !== "o"|| word.charAt(0) !== "u")
{
var remove = word.slice(2);
return remove + word.charAt(0) + word.charAt() + "ay";
}

});

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var word = ($("input#sentence").val());
    pigLatin(word);



     console.log(pigLatin(word));
  });
});







//create a loop that contains a forEach function that calls on the character at method for each word [var string, forEach, var res = str.charAt(0); #vowels #oneatatime]

//create if, else if for vowels, qu, and "squ" logic. else will be constants and "y".
