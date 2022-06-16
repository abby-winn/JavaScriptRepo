let peopleKnown = parseInt(prompt("How many people do you know?"));

const people = [];
for(let i = 0; i < peopleKnown; i++){
    let person = prompt("What is a person full's name?");
    people.push(person);
}

let lastName = people[0].substring(people[0].indexOf(" ") + 1);
for(let i = 1; i < people.length; i++){
    let currentLastName = people[i].substring(people[i].indexOf(" ") + 1);

    if(currentLastName.length > lastName.length){
        lastName = currentLastName;
    }
}

console.log("The longest last name is " + lastName);

let shortLength = people[0].length;
let longLength = people[0].length;
for(let i = 1; i < people.length; i++){
    if(people[i].length < shortLength){
        shortLength = people[i].length;
    }
    if(people[i].length > longLength){
        longLength = people[i].length;
    }
}

console.log("The range is " + (shortLength - 1) + " to " + (longLength - 1));


console.log("All the people are");
for(let i = 0; i < people.length; i++){
    console.log(people[i]);
}
