const ParentView = require("./views/parent_view.js");
const GameLogic = require('./models/game_logic_model.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log("Jscript Loaded");

  const parentView = new ParentView();
  parentView.bindEvents();

  const gameLogic = new GameLogic();
  gameLogic.bindEvents();

  const attackButton = document.querySelector('#fight-button');
  attackButton.addEventListener('click',(evt) => {
    console.log('Button Pressed');
    gameLogic.runGameLoop();

  })

});
