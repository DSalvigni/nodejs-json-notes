console.log('-> Starting notes.js');
const fs = require('fs');
const dateFormat = require('dateformat');


var day=dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");

var addNote = function(title,body,err){
    if(err) throw err;
    //I create the empty array to fill with the Json:
    var originalObjJson = [];
    //I open the original JSON file
    newNote = {
        title: title,
        body: body,
        day: day
    };

    //We try to open the JSON files
    try {
        var originalJson = fs.readFileSync('notes.JSON');
        //I parse the TXT in a JSON Obj
        var originalObjJson = JSON.parse(originalJson);    
    } catch (e) {
        console.log('JSON files does´t exist. JASON File created from scratch');
    }

    //I load the new data from the command line and add the new note in the JSON Obj
    originalObjJson.push(newNote);
    //COnvert the OBJ to string
    var originalJson = JSON.stringify(originalObjJson);
    //Write the string in the file
    fs.writeFileSync('notes.JSON',originalJson);
    //I read the file 
    var notesString = fs.readFileSync('notes.JSON');
    //I print out the JSON with parse
    console.log('------------->START<-----------------');
    console.log('Added the note:',newNote);
    console.log('-------------->END<------------------');   
   
};

var getAll = function(err){
    if(err) throw err;
    console.log('List of all:');
    var notesString = fs.readFileSync('notes.JSON');
    console.log('My Note file (JSON):',JSON.parse(notesString));
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