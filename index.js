const express = require("express");
const path = require("path");
const app = express();
const games = require(`${__dirname}/public/games.json`);
console.log(games);

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");



app.get("/", (req, res) => {
    res.status(200).render("index", {games});
});



app.get("/game/:gameName", (req,res) => {
    const gameName = req.params.gameName;
    const game = games.find(gamesEl => gamesEl.name.toLocaleLowerCase() === gameName);
    if(game){
      res.status(200).render(game.name, {game});
    }else{
      res.status(404).render("error", {message: "Game not found"});
    }
  });



const port = 3000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
