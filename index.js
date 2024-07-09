const express = require("express");
const path = require("path");
const app = express();
const games = require(`${__dirname}/games.json`);
console.log(games);

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");



app.get("/", (req, res) => {
    res.status(200).render("index", {});
});

/*app.get("/fourchette", (req, res) => {
    res.status(200).render("fourchette", {});
});*/

app.get("/:gameName", (req,res) => {
    const gameName = req.params.gameName;
    const game = games.find(gamesEl => gamesEl.name.toLocaleLowerCase() === gameName);
    if(game){
      res.status(200).render(game.name, {game});
    }else{
      res.status(404).render("error", {message: "Game not found"});
    }
  });

/*app.get("/diceroller", (req, res) => {
    res.status(200).render("diceRoller", {});
});*/

const port = 3000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
