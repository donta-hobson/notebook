const express = require('express');
const cli = require('nodemon/lib/cli');
const router = express.Router()
const noteFunc = require('./notebookFunctions')
const {
    getNotebooks,
    selectCard,
    createNotebook,
    createCard
} = require("./notebookFunctions")



/*** ********  Routes  ************ */ 
// Get NOTEBOOK TITLES route
router.get("/notebook",async (req,res)=>{
    const q = req.params.query
    const getAll = await getNotebooks(q)
    
    res.send(getAll.rows)
})

// Create Notebook
router.post('/notebook',(req,res)=>{
    let name = req.body.tableName
    if (!name){
        res.status(400).send('must have a tablename')
    }
    else{
    createNotebook(name)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(400).send(err.message)
    })
}


})

// SELECT CARD FROM TABLE
router.get('/notecard',async (req,res)=>{
    const data = req.query
    const now = await selectCard(data.selection,data.notebook,data.where)
    res.send(now.rows)

})

// Create Notecard
router.post('/notecard',(req,res)=>{
    // id,message,title,[tags]

    let values = req.body.values
    let notebook = req.body.notebook
    createCard(values,notebook)
    .then(suc=>{
        res.status(200).send({success:true})
    })
    .catch(err=>{
        res.status(400).send({success:false,error:err.message})
    })

})




module.exports= router