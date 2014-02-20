'use strict';
module.exports = function() { //module means that the entire file, not just the function will be exported
//exports.Deck = function (cards) {


function constructor () {}
var cards = [];
constructor.prototype.total = function () {
 return cards.length;
};

constructor.prototype.getCards = function () {
  return cards;
};

return new constructor();
};
