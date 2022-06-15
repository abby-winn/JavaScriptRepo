let side1 = parsInt(prompt("What is the length of one edge of the box?"));
let side2 = parsInt(prompt("What is the length of the second edge of the box?"));
let side3 = parsInt(prompt("What is the length of the third edge of the box?"));

let volume = (side1*side2)+(side2*side3)+(side1*side3);

console.log("Volume of the box : "+ volume);