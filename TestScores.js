let score1 = parseInt(prompt("Enter Grade 1"));
let score2 = parseInt(prompt("Enter Grade 2"));
let score3 = parseInt(prompt("Enter Grade 3"));
let average = (score1 + score2 + score3) / 3;
console.log("The average is " + average);

if(average >= 92.5){
    console.log("Your letter grade is a A");
}
else if(average >= 84.5){
    console.log("Your letter grade is a B");
}
else if(average >= 77.5){
    console.log("Your letter grade is a C");
}
else if(average >= 69.5){
    console.log("Your letter grade is a D");
}
else{
    console.log("Your letter grade is a F");
}