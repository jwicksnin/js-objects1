'use strict';
module.exports = function (Deck, Card) {

  function Constructor () {}
  var deck = new Deck(Card);

  constructor.prototype.deal = function (card, player, deck) {
    var deck = deck.getCards();
    if (deck.length > 0) {
      var index = deck.indexOf(card.getRank());
      deck.splice(index, 1);
      player.getCards().push(card);
    }
  };

  constructor.prototype.pickup = function (card, player, deck) {
    //deck.getCards().push(player.getCards().pop());
    var hand = player.getCards();
    if (hand.length > 0) {
      var index = hand.indexOf(card.getRank());
      hand.splice(index, 1);
      deck.getCards().push(card);
    }
  };

  return new Constructor();
};
