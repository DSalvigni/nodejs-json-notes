console.log('-> Starting notes.js');
const fs = require('fs');
const dateFormat = require('dateformat');

//We define a variable to catch the current date
var day = dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");
var jsonFile = 'notes.JSON';


var saveNotes = (note) => {
    fs.writeFileSync(jsonFile,JSON.stringify(note));
}

var readJson = (jsonFile) => {
    try {
        var originalJson = fs.readFileSync(jsonFile);
        //I parse the TXT in a JSON Obj
        var notes = JSON.parse(originalJson);    
        return notes;
    } catch (e) {
        console.log('JSON files does´t exist. JASON File created from scratch');
    }
};




//ADD Note Function
var addNote = (title,body) => {
    //I create an empty array to fill with the Json:
    var notes = [];

    //I format a variable to show what I have inserted
    var newNote = {
        title: title,
        body: body,
        day: day
    };

    //We try to open the JSON files
    var notes = readJson(jsonFile);

    //Check the duplicate based on the title
    var duplicateNotes = notes.filter((item) => item.title===title);

    //If i do not find note with the given title
    if(duplicateNotes.length === 0){
        //If not duplicates found, I push the note in the array
        notes.push(newNote);
        //Save the note
        saveNotes(notes);
        //I print out the added note
        console.log('Added the note: Title-> '+JSON.stringify(newNote));
    }else{
        //If duplicates found, I return the  alert
        console.log('Found already -> '+duplicateNotes.length+' with the tile -> '+title);
        console.log('Note will be not inserted because duplicated!');  
    }
   
};

//Read all notes function
var fetchNotes = function(err){
    if(err) throw err;
    var results = [];
    var n=0;
    console.log('List of all:');
    try {
        var results = JSON.parse(fs.readFileSync(jsonFile));
        results.forEach(function(item) {
            n++;
            console.log('My Note in JSON file-> '+n+') Title:'+item.title+' - Body:'+item.body+' - Created at: '+item.day);
        });
    } catch (e) {
        console.log('JSON files does´t exist or it is empty!');
    }
};

//Remove a note
var removeNote = (title) => {
    console.log('Try to remove note with Title = '+title);
    var notes = readJson(jsonFile);    
    var foundNotes = notes.filter((item) => item.title===title);
    if(foundNotes.length === 0){
        console.log('No notes found to be removed');
    }else{
        finalNotes = notes.filter((item) => item.title!==title);
        console.log(finalNotes);
        saveNotes(finalNotes);
        console.log('Note Removed!');
    }
   

};

//Read one note/notes based on title
var fetchNote = function(title,err){
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
    fetchNotes,
    removeNote,
    fetchNote
};