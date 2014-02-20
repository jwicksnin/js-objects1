'use strict';
module.exports = function (Deck, Card) {


function Constructor () {}
var deck = new Deck(Card);
constructor.prototype.deal = function (card, player, deck) {
  player.getCards().push(deck.getCards().pop());
};

constructor.prototype.pickup = function (card, player, deck) {
  deck.getCards().push(player.getCards().pop());;
};



// constructor.prototype.count = function () {
//   return cards.length;
// };
return new Constructor();
};
