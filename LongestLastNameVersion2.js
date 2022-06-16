let length = prompt("How many people do you know?");

const names = [];

let i = 0;
while(i < length){
    let name = prompt("Name?");
    names.push(name);
    i++;
}
i = 0;

function xyz(names){
    let index = 0;
    let longest = "";

    while (i < length){

        let space = names[i].indexOf(" ");

        if (names[i].substring(space + 1) > longest){
           index = i;
         longest = names[i];
        }
        i++;
    }
    i = 0;

    let space = names[i].indexOf(" ");
    let firstname = longest.substring(0, space);

    let min = 9999;
    let max = 0;

    while (i < length){
        if (names[i].length > max){
            max = names[i].length;
        }

        if (names[i].length < min){
            min = names[i].length;
        }
        i++;
    }
    i = 0;

    let rangeX = (max - min);

    const object = {
        first : firstname,
        rangeY : rangeX
    }

    return object
}

console.log(xyz(names).first)
console.log(xyz(names).rangeY)

while (i < length){
    console.log(names[i]);
    i++;
}
