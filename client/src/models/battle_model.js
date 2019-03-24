const BattleModel = function(){

}

BattleModel.prototype.fight = function (player,mob) {

  console.log("Player: ",player.name, "VS", mob.name);
  playerChance = this.random(0,10);
  mobChance = this.random(0,5);

  if(playerChance > mobChance){
    console.log('Player Attacks first');
    mob.stats['health'] -= player.stats['attack'];
  } else {
    console.log('Worm Attacks first');
    player.stats['health'] -= mob.stats['attack'];
  }
};

BattleModel.prototype.random = function (min,max) {
  return Math.random() * (max - min) + min;
};

module.exports = BattleModel;
