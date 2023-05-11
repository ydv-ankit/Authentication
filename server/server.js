const express = require("express")
const app = express()
const fs = require('fs')
const cors = require('cors')
app.use(cors())

const PORT = process.env.PORT || 8080
app.get('/', (req, res)=>{
    res.json({
        msg:'server working'
    })
})

app.get('/data', (req, res)=>{
    fs.readFile("./db/data.json", 'utf-8', (err, jsonString)=>{
        if(err){
            console.log("cannot read file !!")
            res.json({error:"cannot read file"})
        }
        console.log("file data: ", jsonString)
        res.json({data: JSON.parse(jsonString)})
    })
})

app.get('/post', (req, res)=>{
    let data;
    fs.readFile("./db/data.json", 'utf-8', (err, jsonString)=>{
        if(err){
            console.log("cannot read file !!")
            return;
        }
        data = JSON.parse(jsonString);
    })

    Object.assign(data, newData);
    
    fs.writeFile('./db/data.json', data, err => {
        if (err) {
            res.send('Error writing file', err)
        } else {
            res.send('Successfully wrote file')
        }
    })
    
})

app.listen(PORT, ()=>console.log("server running at http://localhost:"+PORT))