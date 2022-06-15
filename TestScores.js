let score1 = parseFloat(prompt("First Test Score : "));
let score2 = parseFloat(prompt("Second Test Score : "));
let score3 = parseFloat(prompt("Third Test Score : "));

let average = (score1 + score2 + score3)/3;

console.log("Average test score : " + average);
let grade;

if(average>=92.5){
    grade = "A";
}else if(average>=84.5){
    grade = "B";
}else if(average>=77.5){
    grade = "C";
}else if (average >=69.5){
    grade = "D";
}else{
    grade = "F";
}

console.log("Grade : " + grade);