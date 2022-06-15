let a = prompt("First Test Score")
let b = prompt("First Second Score")
let c = prompt("First Third Score")

average = (parseFloat(a)+parseFloat(b)+parseFloat(c))/3;

console.log(average)

let grade;

switch(average){
    case (average >= 90):
        grade = "A";
        break;
    case (average >= 80):
        grade = "B";
        break;
    case (average >= 70):
        grade = "C";
        break;
    case (average >= 60):
        grade = "D";
        break;
    default:
        grade = "F";
}

console.log(grade)