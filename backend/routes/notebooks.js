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

const tableHeaders = 'id int PRIMARY KEY, message char, title char, tags text [], links text [],created timetz'

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
//   notebook: is the table you want to qurery. expects an array [id, message,title,tags:array,links:array,created]
async function createNotebook(tableName,values =Array){
    clientDemo()
    const x = ''
    values.map((i,n)=>{
        if(n >0){
            x = x + ","+i
        }
        else{
            x = x+i

        }
        
    })
    const now = await client.query(`CREATE TABLE ${tableName} (${tableHeaders}) VALUES (${x})`)
    return now
}


async function selectNotebook(selection,notebook) {
    clientDemo()
    const now = await client.query(`SELECT ${selection}  FROM ${notebook}`);
    return now;

}
//  Insert into notebook
async function createCard(values,notebook){
    clientDemo()
    

    const now = await client.query(`INSERT INTO ${notebook} (${tableHeaders}) VALUES (${values})`)
    return now
}


router.get("/",async (req,res)=>{
    // insertIntoNotebook()
    const x = selectNotebook("id,message",'notebooks')
    x.then(res=>{
        console.log(res.rows)
    })
    
    res.send('connected')

    
})
module.exports= router