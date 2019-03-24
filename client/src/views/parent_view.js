const PubSub = require('../helpers/pub_sub.js');

const ParentView = function (container){
  // this.container = container


}

ParentView.prototype.bindEvents = function () {
  PubSub.subscribe('game_logic: Characters-data',(evt) => {

    const playerContainer = document.querySelector('#player-one');
    this.renderObject(playerContainer,evt.detail['player']);

    const monsterContainer = document.querySelector('#monster');
    this.renderObject(monsterContainer,evt.detail['monster']);
  })


};

ParentView.prototype.renderObject = function (container,object) {
  container.textContent = "";

  const objectName = document.createElement("H2");
  objectName.textContent = `${object.name}`;
  container.appendChild(objectName);

  const objectHealth = document.createElement("H3");
  objectHealth.textContent = `Health: ${object.stats['health']}`;
  container.appendChild(objectHealth);

};


module.exports = ParentView;
