/* 
* Simple program to manage a JSON notes repository based on nodeJS
* It is a command line yargs tool, with simple sintax:
* - add a note: "C:\node app.js add --title='....' --body='...'" 
* - get a note: "C:\node app.js add --title='....' "
* - get all notes: "C:\node app.js list "
* - remove all notes: "C:\node app.js remove --title='...' "
*/

console.log('-> Starting the App...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');



//Arg vector collect the prompt arguments
const argv = yargs.argv;
//I need to isolate the value to pass my function
var command = argv._[0];
//I print the command provided
console.log('-> command:',command);

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


