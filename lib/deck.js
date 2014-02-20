'use strict';
module.exports = function(Card) { //module means that the entire file, not just the function will be exported
  function Constructor () {}
  //var card;
  var cards = [];
  var ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['diamonds', 'hearts', 'spades', 'clubs'];
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < ranks.length; j++) {
      var card = new Card(suits[i], ranks[j]);
      cards.push(card);
    }
  }




// constructor.prototype.add = function (card) {
//   cards.push(card);
// };

  Constructor.prototype.total = function () {
    return cards.length;
  };

  Constructor.prototype.getCards = function () {
    return cards;
  };

  return new Constructor();
};

