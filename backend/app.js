require("dotenv/config")
const { Client } = require('pg');
const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser');
const notebookRoute = require('./routes/notebooks')
const {clientDemo} = require('./routes/notebookFunctions')

// Create express app 
const app = express()

const port = process.env.PORT

// Middleware
app.use(cors())
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


//  Routes

app.use("/",notebookRoute)


app.listen(port,()=>{
    clientDemo()
    console.log('Now listening on: ' + port )
})