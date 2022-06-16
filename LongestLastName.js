let numPpl = parseInt(prompt("How many people do you know?"));

let namesPpl = [];

for(let i = 0; i<numPpl;i++ ){
    namesPpl.push(prompt("Enter Full Name of person "+ (i+1)));
}



//full name of longest last name
let namesLastLongest;

let lastNames = [];

for(let j = 0; j<namesPpl.length; j++){
    let indexSpace = namesPpl[j].lastIndexOf(" ");
    lastNames.push(namesPpl[j].substring((indexSpace+1), (namesPpl[j].length)));
}


let indexOfTempLongestLast = 0;

for(let j = 1; j<lastNames.length; j++){
    if(lastNames[j].length>lastNames[indexOfTempLongestLast].length){
        indexOfTempLongestLast = j;
    }
}

console.log("Full Name of Longest Last Name : " + namesPpl[indexOfTempLongestLast]);



//range of lengths of the names
let namesLengthShortest = namesPpl[0].length;
let namesLengthLongest = namesPpl[0].length;

for(let k = 1; k<namesPpl.length; k++){
    if(namesPpl[k].length<namesLengthShortest){
        namesLengthShortest = namesPpl[k].length;
    }
}

for(let k = 1; k<namesPpl.length; k++){
    if(namesPpl[k].length>namesLengthLongest){
        namesLengthLongest = namesPpl[k].length;
    }
}

let range = namesLengthLongest-namesLengthShortest;
console.log("Range of Length of Names : " + namesLengthShortest + " to " + namesLengthLongest + " characters long| Range being : " + range);

//display all names
console.log("All Names : ");
for(let l = 0; l<namesPpl.length; l++){
    console.log(namesPpl[l]);
}