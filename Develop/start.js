
const fs = require('fs');
const express = require('express');
const path = require('path');
const { JSHandle } = require('puppeteer');
const app = express();

// defining port and console log the output.
const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> console.log(`Server started on port: ${PORT}`));

//sets static folder to public
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')))

// sets route for /notes 
app.get('/notes', (req,res) =>{
    res.sendFile(path.join(__dirname, './public', 'notes.html' ));
})


// sets API route for reading db.json

app.get('/api/notes', (req, res) => {

    fs.readFile('./db/db.json', 'utf-8',(err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
      });

});
// Sets API post for saving to DB
app.post('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8',(err, data) => {
        if (err) throw err;
        let newdata = JSON.parse(data);
        newdata.push(req.body);
        fs.writeFile('./db/db.json',JSON.stringify(newdata), (err)=>
        {
            if (err) throw err;
            console.log("xyz");  
             res.json(newdata);
        }


    )});
    })


