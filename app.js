console.log('-> Starting the App...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');



const argv = yargs.argv;
var command = argv._[0];
//var command = process.argv[2];
//var command = argv._[2];

console.log('-> command:',command);
//console.log('Yargs:',argv);
//console.log('Titolo:',argv.title);
//console.log('Body:',argv.body);


if(command ==='add'){
    notes.addNote(argv.title,argv.body);
} else if(command ==='list'){
    notes.getAll();
} else if(command ==='get'){
    notes.getNote(argv.title);
} else if(command ==='remove'){
    notes.removeNote(argv.title);
} else{
    console.log('Command null or not recognized')
}


