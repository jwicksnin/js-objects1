"use strict";
module.exports = function(suit, rank) {

  function constructor() { }

  constructor.prototype.getSuit = function() {
    return suit;
  };
  constructor.prototype.getRank = function() {
    return rank;
  };
  return new constructor();
};
