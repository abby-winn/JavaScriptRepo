let peopleKnown = parseInt(prompt("How many people do you know?"));

const people = [];
for(let i = 0; i < peopleKnown; i++){
    let person = prompt("What is a person full's name?");
    people.push(person);
}

const names = longestLastname(people);
console.log("The longest last name is " + names.lastName);
console.log:("The shortest length is " + names.shortLength);
console.log("The longest length is " + names.lastName);


console.log("All the people are");
for(let i = 0; i < people.length; i++){
    console.log(people[i]);
}

function longestLastname(people){

    let lastname = people[0].substring(people[0].indexOf(" ") + 1);
    for(let i = 1; i < people.length; i++){
        let currentLastName = people[i].substring(people[i].indexOf(" ") + 1);

        if(currentLastName.length > lastname.length){
            lastname = currentLastName;
        }
    }
    // lastName;
    let shortlength = people[0].length;
    let longlength = people[0].length;
    for(let i = 1; i < people.length; i++){
        if(people[i].length < shortlength){
            shortlength = people[i].length;
        }
        if(people[i].length > longlength){
            longlength = people[i].length;
        }
    }

    const names ={
        lastName : lastname,
        shortLength : shortlength,
        longLength : longLength
    };

}

