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

    const dataToAppend = { 'user': username, 'pass': password };

    try {
        const jsonString = fs.readFileSync("./db/data.json", "utf-8");
        var data = JSON.parse(jsonString);
    } catch (err) {
        console.log(err);
        res.json({ msg: "Error!! Cannot create account" })
    }

    let found = false;
    Object.entries(data).forEach((element) => {
        let user = element[1].user
        if (user == username) {
            found = true;
            return;
        }
    })

    if (found) {
        res.json({ msg: "username already exists !!" })
    } else {
        data = [...data, dataToAppend]

        fs.writeFile('./db/data.json', JSON.stringify(data), err => {
            if (err) {
                res.json({ msg: "Error signing up" })
            } else {
                res.json({ msg: "user added successfully" })
            }
        })
    }
})

app.post('/login', (req, res) => {
    const username = req.body.user;
    const password = req.body.pass;

    try {
        const jsonString = fs.readFileSync("./db/data.json", "utf-8");
        var data = JSON.parse(jsonString);
    } catch (err) {
        res.json({ msg: "Error!! Cannot create account" })
    }
    let found = false;
    console.log(username, password)
    Object.entries(data).forEach((element) => {
        let user = element[1].user
        let pass = element[1].pass
        console.log(user, pass)
        if (user == username) {
            if (pass == password) {
                found = true;
                return;
            }
        }
    })
    if (found) {
        res.json({ msg: "logged in" })
    } else {
        res.json({ msg: "invalid credentials" })
    }
})

app.post('/admin', (req, res) => {
    const password = req.body.pass;
    let usersData = [];

    try {
        const jsonString = fs.readFileSync("./db/data.json", "utf-8");
        var data = JSON.parse(jsonString);
    } catch (err) {
        res.json({ msg: "Error occured !!" })
    }

    Object.entries(data).forEach((element) => {
        usersData.push(element[1]);
    })
    if (password == "m") {
        res.json({ msg: "logged in", data: usersData })
    } else {
        res.json({ msg: "invalid credentials", data: []})
    }
})

app.listen(PORT, () => console.log("server running at http://localhost:" + PORT))