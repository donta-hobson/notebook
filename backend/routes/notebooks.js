const express = require('express');
const cli = require('nodemon/lib/cli');
const router = express.Router()
const { Client } = require('pg');
const credentials = {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PG_PORT,
  };
const client = new Client(credentials);

// Connect to the database
async function clientDemo() {
    await client.connect();
    const now = await client.query("SELECT NOW()");
    if(now){
      console.log('Database connected')
    }
    await client.end();
  
    return now;
}
//   Select Notebook
//  selection : is the selectors want to query the table.
//   notebook: is the table you want to qurery.
async function selectNotebook(selection,notebook) {
    clientDemo()
    const now = await client.query(`SELECT ${selection}  FROM ${notebook}`);
    return now;

}
//  Insert into notebook
async function insertIntoNotebook(){
    const now = await client.query("INSERT INTO notebooks (id,message) VALUES (1,'hello every one im rick')")
    return now
}


router.get("/",async (req,res)=>{
    // insertIntoNotebook()
    const x = selectNotebook()
    x.then(res=>{
        console.log(res.rows)
    })
    
    res.send('connected')

    
})
module.exports= router