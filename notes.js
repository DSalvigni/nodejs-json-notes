console.log('-> Starting notes.js');
const fs = require('fs');
const dateFormat = require('dateformat');


var day=dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");

var addNote = function(title,body,err){
    if(err) throw err;
    //I create the empty array to fill with the Json:
    var notes = [];
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
        var notes = JSON.parse(originalJson);    
    } catch (e) {
        console.log('JSON files does´t exist. JASON File created from scratch');
    }

    //Check the duplicate...
    var duplicateNotes = notes.filter((item) => item.title===title);

    //I load the new data from the command line and add the new note in the JSON Obj

    if(duplicateNotes.length === 0){
        notes.push(newNote);
        //COnvert the OBJ to string and I write the string in the file
        fs.writeFileSync('notes.JSON',JSON.stringify(notes));
        //I print out the JSON with parse
        //console.log('------------->START<-----------------');
        console.log('Added the note:',newNote);
        //console.log('-------------->END<------------------');  
    }else{
        console.log('Found already -> '+duplicateNotes.length+' with the tile -> '+title);
        console.log('Note will be not inserted because duplicated!');  
    }
   
};

var getAll = function(err){
    if(err) throw err;
    console.log('List of all:');
    var notesString = fs.readFileSync('notes.JSON');
    console.log('My Note file (JSON):',JSON.parse(notesString));
};


var removeNote = function(title,err){


    if(err) throw err;
    console.log('Remove -> ');
};

var readNote = function(title,err){
    if(err) throw err;
    //We try to open the JSON files
    try {
        var originalJson = fs.readFileSync('notes.JSON');
        //I parse the TXT in a JSON Obj
        var notes = JSON.parse(originalJson);    
    } catch (e) {
        console.log('JSON files does´t exist. JASON File created from scratch');
    }
    //we filter the found note:
    var foundNotes = notes.filter((item) => item.title===title);
    //we print out the notes found:
    if(foundNotes.length > 0){
        console.log('Found number of duplicates -> '+foundNotes.length);
        if(foundNotes.length===1){
            console.log('Found note -> '+JSON.stringify(foundNotes));
        }else{ 
            console.log('Found notes -> '+JSON.stringify(foundNotes));
        }
        
    } else {
        console.log('No notes found');
    }
    
};

module.exports = {
    addNote,
    getAll,
    removeNote,
    readNote
};