const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs")


app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json)

app.get('/about', (req, res)=>{
    res.render("about")
})
app.get('/add', (req, res)=>{
    res.render("add")
})
app.get('/', (req, res)=>{
    res.render("index")
})

app.post('/photos', (req, res)=>{
    console.log(req.body);
    res.redirect("/")
})

const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı..`)
})