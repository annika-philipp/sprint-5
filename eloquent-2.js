Looping a triangle

My solution:

var line = "";
for (var x = 0; x < 7; x++) {
  line += "#";
  console.log(line);
}

or shorter (book solution)

for (var line = "#"; line.length < 8; line += "#")
    console.log(line);



FizzBuzz

My long solution:

var num = 1;
while (num <= 100) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
  num++
}

Shorter version:

var num = 1;
while (num <= 100) {
    var result = (((num % 3 === 0)&&(num % 5 === 0))? "FizzBuzz" : (num % 3 === 0)? "Fizz" : (num % 5 === 0)? "Buzz" : num);
  console.log(result);
  num++;
}



Chess Board:
//I found this really hard and needed to look this up. In hindsight I can see the logic behind it now.

var width = 8;
var board = "";

for (i=0; i < width; i++) {
  for (j=0; j < width; j++) {
    if ((i+j) % 2 === 0) {
      board += "#";
    } else {
      board += " ";
    }
  }
  board += "\n";
}
console.log(board);