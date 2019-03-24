const FighterModel = function(name){
  this.name = name;
  this.attributes = this.setAttributes();
  this.gear = this.setGear();
  this.stats = this.setStats();

}

FighterModel.prototype.setAttributes = function () {
  const attributes =
  {
    strength: 2,
    wisdom: 2,
    constitution: 2,
    charisma: 2,
    stamina: 2
  }
  return attributes
};

FighterModel.prototype.setGear = function () {

  const gear =
  {
    head: 0,
    chest: 1,
    hands: 1,
    legs: 1,
    feet: 1
  }
  return gear
};

FighterModel.prototype.setStats = function () {
  const stats =
  {
    health: this.attributes['constitution'] * 10,
    turns: this.attributes['stamina'],
    attack: this.attributes['strength'] * 5,
    defensee: this.attributes['constitution'] + this.attributes['strength']
  }
  return stats
};

FighterModel.prototype.attack = function (defender) {



};


module.exports = FighterModel;
