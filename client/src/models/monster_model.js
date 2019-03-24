const MonsterModel = function(name){

  this.name = name;
  // this.attributes = this.setAttributes();
  // this.gear = this.setGear();
  this.stats = this.setStats();

};

MonsterModel.prototype.setStats = function () {
  const stats =
  {
    health: 5,
    attack: 5
  };

  return stats;
};



module.exports = MonsterModel;
