let numPpl = parseInt(prompt("How many people do you know?"));

let namesPpl = [];

for(let i = 0; i<numPpl;i++ ){
    namesPpl.push(prompt("Enter Full Name of person "+ (i+1)));
}

function task(list){
    let namesLastLongest;

    let lastNames = [];

    for(let j = 0; j<list.length; j++){
        let indexSpace = list[j].lastIndexOf(" ");
        lastNames.push(list[j].substring((indexSpace+1), (list[j].length)));
    }
    
    
    let indexOfTempLongestLast = 0;
    
    for(let j = 1; j<lastNames.length; j++){
        if(lastNames[j].length>lastNames[indexOfTempLongestLast].length){
            indexOfTempLongestLast = j;
        }
    }
    
    
    //range of lengths of the names
    let namesLengthShortest = list[0].length;
    let namesLengthLongest = list[0].length;
    
    for(let k = 1; k<list.length; k++){
        if(list[k].length<namesLengthShortest){
            namesLengthShortest = list[k].length;
        }
    }
    
    for(let k = 1; k<list.length; k++){
        if(list[k].length>namesLengthLongest){
            namesLengthLongest = list[k].length;
        }
    }
    
    let range = namesLengthLongest-namesLengthShortest;
    
const data = {
    nameLongestLastF : list[indexOfTempLongestLast],
    rangeF : range
}
return data
}

//display full name of longest last name + range of lengths of names
console.log("Name with Longest Last Name : " + task(namesPpl).nameLongestLastF);
console.log("Range of Lengths of Names : " + task(namesPpl).rangeF);

//display all names
console.log("All Names : ");
for(let l = 0; l<namesPpl.length; l++){
    console.log(namesPpl[l]);
}