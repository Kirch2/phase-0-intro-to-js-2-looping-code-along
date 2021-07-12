// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {

    }

    return gifts;
}

wrapGifts(gifts);


function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);

    }
    return messages;
}


function countDown(positiveNumber) {
    while (positiveNumber >= 0) {
        console.log(positiveNumber);
        positiveNumber -= 1;
    }
}