let express = require("express")

const app = express()

//app.set("Views", "./view");
//app.set("view engine", "ejs");

app.get("/home", (req, res) => { res.render("home.ejs") })
app.get("/home/person", (req, res) => { res.render("person.ejs") })
app.get("/home/person/validation", (req, res) => { res.render("validation.ejs") })
app.get("/home/person/validation/confirmation", (req, res) => { res.render("confirmation.ejs") })








app.use(express.static('public'))




app.listen(3000, () => {
    console.log("Bonjour")
})