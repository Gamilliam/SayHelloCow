const { myInfo } = require("./information");


const cowsays = require("cowsay");

console.log(cowsays.say({
    text: `Hello, I'm ${myInfo.myName} and I'm in ${myInfo.myCampus}`,
    e: "~0",
    T: " U"
}));

//----------------------------------------------------------------

const cowthinks = require("cowsay");

console.log(cowthinks.think({
    text: "I'm a moooodule",
}));

//----------------------------------------------------------------

const dalek = require("cowsay");

console.log(dalek.say({
    text: "\nEXTERMINAAAAATE\n",
    f: 'dalek'
}));

//----------------------------------------------------------------

const squirrel = require("cowsay");

console.log(squirrel.say({
    text: 'Let me walk you out now',
    f: 'squirrel',
    r: true
}),
    squirrel.think({
        text: "You've been here for too long...",
        t: true
    }));