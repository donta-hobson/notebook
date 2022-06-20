require("dotenv/config")
const { Client } = require('pg');
const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser');
const notesRoute = require('./routes/notes')
const notebookRoute = require('./routes/notebooks')

// Create express app 
const app = express()

const port = 3000

// Middleware
app.use(cors())
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


//  Routes

app.use("/",notebookRoute)


app.listen(port,()=>{
    console.log('Now listening on: ' + port )
})