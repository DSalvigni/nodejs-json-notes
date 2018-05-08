console.log('-> Starting notes.js');
const fs = require('fs');

var addNote = function(title,body,err){
    if(err) throw err;
    //console.log(title,body);
    originalNote = {
        title: title,
        body: body
    };
    //COnvert the OBJ to string
    var originalNoteString = JSON.stringify(originalNote);
    //Write the string in the file
    fs.writeFileSync('notes.JSON',originalNoteString);
    //I read the file
    var noteString = fs.readFileSync('notes.JSON');
    //I print out the JSON with parse
    console.log('---');
    console.log('Added the note:',JSON.parse(noteString));
};

var getAll = function(err){
    if(err) throw err;
    console.log('List of all!');
};

var removeNote = function(err){
    if(err) throw err;
    console.log('List of all!');
};

var readNote = function(err){
    if(err) throw err;
    console.log('List of all!');
};


module.exports = {
    addNote,
    getAll,
    removeNote,
    readNote
};