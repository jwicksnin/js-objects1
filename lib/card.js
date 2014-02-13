exports.Card = function(suit, rank) {
  //the constructor function allows for inheritance while the more literal, non closure approach does not
  //var contructor = function () {}; equally possible
  function constructor() { }; //will be filled with the following values
  constructor.prototype.getSuit = function() {
    return suit;
  };
  constructor.prototype.getRank = function() {
    return rank;
  };
  return new constructor();
};
