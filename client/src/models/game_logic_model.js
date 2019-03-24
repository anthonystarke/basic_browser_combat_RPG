const FighterModel = require("./fighter_model.js");
const MonsterModel = require("./monster_model.js");
const BattleModel = require('./battle_model.js');
const PubSub = require('../helpers/pub_sub.js');

const GameLogic = function(){

  this.battleModel = new BattleModel();

  this.fighter = this.createPlayer("Toby");
  this.monster = this.createMonster("Worm");

  this.publishData(this.fighter,this.monster);

}

GameLogic.prototype.createPlayer = function (name) {
  const fighter = new FighterModel(name);
  return fighter
};

GameLogic.prototype.createMonster = function (name) {
  const monster = new MonsterModel(name);
  return monster
};

GameLogic.prototype.runGameLoop = function () {
  this.runBattle(this.fighter,this.monster)


  
  this.publishData(this.fighter,this.monster);
};

GameLogic.prototype.runBattle = function (player,monster) {
  this.battleModel.fight(player,monster);
};

GameLogic.prototype.publishData = function (playerData,monsterData) {
  const combinedData = {
    player: playerData,
    monster: monsterData
  }

  PubSub.publish('game_logic: Characters-data',combinedData)

};
GameLogic.prototype.bindEvents = function () {

  PubSub.subscribe('',() => {


  })

};

module.exports = GameLogic;
