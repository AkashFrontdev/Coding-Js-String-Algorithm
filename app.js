// First question
function front3(str){
    let char = str.slice(0, 3);
    return char + char + char;
}

var output = front3("Chocolate");
console.log(output);
// Second question
function backAround(str) {
  let x = str.at(-1);
  return x + str + x;
}

var result = backAround("Java");
console.log(result);


// third question
 function convertWords(str){
   for(let i = str.length; i >= 0; i--){
    console.log(str[i]);
    
   }
 }

 convertWords("Ulmas Kashshe");





