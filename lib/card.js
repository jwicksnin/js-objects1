exports.Card = function(suit, rank) {
  //var card = {
  function constructor() { };
  constructor.prototype.getSuit = function() {
    return suit;
  };
  constructor.prototype.getRank = function() {
    return rank;
  };
  return new constructor();
    // suit: suit,
    // rank: rank
  //};
  // return card;
  // function constructor() { };
  // constructor.prototype.getSuit() {
  //   return suit;
  // };
  // constructor.prototype.getRank() {
  //   return rank;
  // };
  // return new constructor();
};
