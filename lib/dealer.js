'use strict';
exports.Dealer = function (cards) {


function constructor () {}

constructor.prototype.deal = function (card, player, deck) {
  player.cards.push(deck.cards.pop(card));
};

constructor.prototype.pickup = function (card, player, deck) {
  deck.cards.push(player.cards.pop(card));;
};


constructor.prototype.count = function () {
  return cards.length;
};
return new constructor();
};
