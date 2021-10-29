

const express = require('express');
const path = require('path');
const app = express();
const db = require('./db/db.json');

// defining port and console log the output.
const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> console.log(`Server started on port: ${PORT}`));

//sets static folder to public
app.use(express.static(path.join(__dirname, './public')))

// sets route for /notes 
app.get('/notes', (req,res) =>{
    res.sendFile(path.join(__dirname, './public', 'notes.html' ));
})


// sets API route for reading db.json
app.get('/api/notes', (req, res) => res.json(db));

// Need to create API PUT

