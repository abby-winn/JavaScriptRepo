let peopleKnown = parseInt(prompt("How many people do you know?"));

const people = [];
for(let i = 0; i < peopleKnown; i++){
    let person = prompt("What is a person's name?");
    people.push(person);
}

let longName = people[0];
for(let i = 1; i < people.length; i++){
    if(longName.length < people[i].length){
        longName = people[i];
    }
}

console.log("The longest name is " + longName);

let shortName = people[0];
for(let i = 1; i < people.length; i++){
    if(shortName.length > people[i].length){
        shortName = people[i];
    }
}

console.log("The range of the name length is " + shortName.length + " to " + longName.length);


for(let i = 0; i < people.length; i++){
    console.log(people[i]);
}
