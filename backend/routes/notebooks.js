const express = require('express');
const cli = require('nodemon/lib/cli');
const router = express.Router()
const noteFunc = require('./notebookFunctions')
const {
    getNotebooks,
    selectCard,
    createNotebook,
    createCard,
    deleteNotebook,
    renameNotebook,
    updateNoteCard
} = require("./notebookFunctions")



/*** ********  Routes  ************ */ 
// Get NOTEBOOK TITLES route
router.get("/notebook",async (req,res)=>{
    const q = req.params.query
    getNotebooks(q)
    .then(succ=>{
        res.send(succ.rows)
    })
    .catch(err=>{
        res.status(400).send({success:false,error:err.message})
    })
    
})

// Create Notebook
router.post('/notebook',(req,res)=>{
    let name = req.body.notebook
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
// DELETE NOTEBOOK
router.delete('/notebook',(req,res)=>{
    const body = req.body
    deleteNotebook(body.notebook)
    .then(suc=>{
        res.status(200).send({success:true,data:suc})
    })
    .catch(err=>{
        res.status(400).send({success:false,error:err.message})
    })

})

// Rename Notebook
router.put('/notebook',(req,res)=>{
let body =req.body
renameNotebook(body.notebook,body.title)
.then(succ=>{
    res.send({success:true,data:succ})
})
.catch(err=>{
    res.status(400).send({success:false,error:err.message})
})
})

// SELECT CARD FROM TABLE
router.get('/notecard',async (req,res)=>{
    const data = req.query
    selectCard(data.selection,data.notebook,data.where)
    .then(data=>{
        res.send({success:true,data:data.rows})
    })
    .catch(err=>{
        res.status(400).send({success:false,error:err.message})
    })

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
// Update Notecard
router.put('/notecard',(req,res)=>{
    let body = req.body
    updateNoteCard(body.values,body.notebook,String(body.id))
    .then(succ=>{
        res.send({success:true,data:succ.rows})
    })
    .catch(err=>{
        res.status(400).send({error:err.message})
    })

})



module.exports= router