require("dotenv/config")
const { Client } = require('pg');
const express = require('express')

// Create express app 
const app = express()

const port = 3000
// postgress credentials from ENV
const credentials = {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PG_PORT,
  };
// Connect to the database
  async function clientDemo() {
    const client = new Client(credentials);
    await client.connect();
    const now = await client.query("SELECT NOW()");
    if(now){
      console.log('Database connected')
    }
    await client.end();
  
    return now;
  }

// Initialize aoo
app.listen(port,()=>{
  clientDemo()

    console.log('Now listening on: ' + port )
})