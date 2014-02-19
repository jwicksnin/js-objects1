'use strict';
exports.Deck = function (cards) {


function constructor () {}

constructor.prototype.add = function (card) {
  cards.push(card);
};

constructor.prototype.size = function () {
  return cards.length;
};
return new constructor();
};
