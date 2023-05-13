const express = require("express")
const app = express()
const fs = require('fs')
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const cors = require('cors')
app.use(cors())
app.use(jsonParser)

const PORT = process.env.PORT || 8080
app.get('/', (req, res) => {
    res.json({
        msg: 'server working'
    })
})

app.get('/data', (req, res) => {
    fs.readFile("./db/data.json", 'utf-8', (err, jsonString) => {
        if (err) {
            console.log("cannot read file !!")
            res.json({ error: err })
        }
        console.log("file data: ", jsonString)
        res.json({ data: JSON.parse(jsonString) })
    })
})

app.post('/signup', (req, res) => {
    const username = req.body.user;
    const password = req.body.pass;

    const dataToAppend = { 'user': username, 'password': password };

    try {
        const jsonString = fs.readFileSync("./db/data.json", "utf-8");
        var data = JSON.parse(jsonString);
    } catch (err) {
        console.log(err);
        res.send("Error!! Cannot create account")
    }

    data = [...data, dataToAppend]

    fs.writeFile('./db/data.json', JSON.stringify(data), err => {
        if (err) {
            res.send('Error signing up', err)
        } else {
            res.send("Successfully signed up")
        }
    })
})

app.listen(PORT, () => console.log("server running at http://localhost:" + PORT))