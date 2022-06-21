const { Client } = require('pg');

const credentials = {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PG_PORT,
  };
const client = new Client(credentials);
client.connect()
const tableHeaders = 'id int PRIMARY KEY, message char, title char, tags text [], links text [],created timetz'

/*---------------------------------------------------------------------- */

// Connect to the database
async function clientDemo() {
    // await client.connect();
    const now = await client.query("SELECT NOW()");
    if(now){
      console.log('Database connected')
    }
    // await client.end();
  
    return now;
}




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
    // clientDemo()
    const now =await client.query(`SELECT table_name FROM information_schema.tables WHERE table_schema='public'`)
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
async function selectCard(selection,notebook,where) {
    let qstring = `SELECT ${selection}  FROM ${notebook}`
    if (where){
        qstring += ` WHERE ${where}`
    }
    const now = await client.query(qstring);
    return now;

}

// Create a notecard
async function createCard(values,notebook){
    // id,message,title,[tags]
    let v = values
    v+= `,CURRENT_TIMESTAMP`
    const now = await client.query(`INSERT INTO ${notebook} VALUES (${v})`)
    return now
}

// Update notecard 
async function updateNoteCard(values,notebook,id){
    const now = await client.query(`UPDATE ${notebook} SET ${values} WHERE id = ${id}` )
    return now

}

// DELETE NOTECARD
async function deleteNoteCard(notebook,id){
    const now = await client.query(`DELETE FROM ${notebook} WHERE ${id}` )
    return now

}

module.exports ={
    createNotebook,
    getNotebooks,
    deleteNotebook,
    renameNotebook,
    selectCard,
    createCard,
    updateNoteCard,
    deleteNoteCard,
    clientDemo

}
