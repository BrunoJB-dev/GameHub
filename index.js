const express = require("express");
const path = require("path");
const app = express();

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");



app.get("/", (req, res) => {
    res.status(200).render("index", {});
});

app.get("/fourchette", (req, res) => {
    res.status(200).render("fourchette", {});
});

app.get("/diceroller", (req, res) => {
    res.status(200).render("diceRoller", {});
});

const port = 3000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
