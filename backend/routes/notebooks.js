const express = require('express');
const cli = require('nodemon/lib/cli');
const router = express.Router()
const { Client } = require('pg');


/* 🍄 🍄 🍄 🍄🍄   Constants  🍄 🍄 🍄 🍄 🍄 🍄 🍄  */ 

const credentials = {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PG_PORT,
  };
const client = new Client(credentials);

const tableHeaders = 'id int PRIMARY KEY, message char, title char, tags text [], links text [],created timetz'

/*---------------------------------------------------------------------- */

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
clientDemo()
.then(res=>{
    console.log('database conected')
})
.catch(err=>{
    console.log(err.message)
})


/*-----------   NoteBook functions       ---------- */

// Create Notebook function
async function createNotebook(tableName){
    
    const now = await client.query(`CREATE TABLE ${tableName} (
        id varchar,
        message varchar,
        title varchar,
        tags varchar [ ],
        created timestamptz
    )`)
    return now
}
// Get all notebooks(tables)
async function getNotebooks(notebooks){
    const now =await client.query(`SELECT ${notebooks} FROM information_schema.tables WHERE table_schema='public'`)
    return now

}

// Delete Notebook
async function deleteNotebook(notebook){
    const now = client.query(`DROP TABLE ${notebook}`)
    return now
}

// Rename Notebook 
async function renameNotebook(notebook,title){
    const now = client.query(`ALTER TABLE ${notebook} RENAME TO ${title}`)
    return now
}

/*-----------   Notecard functions       ---------- */

/*   Select Notecard from notebook */
async function selectCard(selection,notebook) {
    const now = await client.query(`SELECT ${selection}  FROM ${notebook}`);
    return now;

}

// Create a notecard
async function createCard(values,notebook){
    const now = await client.query(`INSERT INTO ${notebook} VALUES (${values})`)
    return now
}

// Update notecard 
async function updateNoteCard(values,notebook,id){
    const now = await client.query(`UPDATE ${notebook} SET ${values} WHERE ${id}` )
    return now

}

// DELETE NOTECARD
async function deleteNoteCard(notebook,id){
    const now = await client.query(`DELETE FROM ${notebook} WHERE ${id}` )
    return now

}



/*** ********  Routes  ************ */ 
// Get all notebooks route
router.get("/notebook",async (req,res)=>{
    const getAll = await getNotebooks()
    
    res.send(getAll.rows)
})

/****** Create Notebook Route   ******/ 
router.post("/notebook",(req,res)=>{
    const par = req.body.tableName
    createNotebook(par)
    .then(data=>{
        res.status(200).send({success:true})

    })
    .catch(err=>{
        res.status(400).send(err.message)
    })
})


/********   Create Notecard       ******* */
router.post('/notecard',(req,res)=>{
    const data = req.body.data
    createCard(data,req.body.tableName)
    .then(fin=>{
        res.status(200).send({sucess:true,data:fin})
    })
    .catch(err=>{
        res.status(400).send(err.message)
    })

})



module.exports= router