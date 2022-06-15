let length = prompt("How many people do you know?")

const names = []

let i = 0;
while(i < length){
    let name = prompt("Name?")
    names.push(name)
    i++
}
i = 0;

let index = 0;
let longest = "";

while (i < length){

    let space = names[i].indexOf(" ");

    if (names[i].substring(space + 1) > longest){
        index = i;
        longest = names[i]
    }
    i++
}
i = 0;

let space = names[i].indexOf(" ");
console.log("First name of person with longest Last Name: " + longest.substring(0, space))

let min = 9999;
let max = 0;

while (i < length){
    if (names[i].length > max){
        max = names[i].length
    }

    if (names[i].length < min){
        min = names[i].length
    }
    i++
}
i = 0;

console.log("Range of Lengths: " + (max - min))

while (i < length){
    console.log(names[i])
}
