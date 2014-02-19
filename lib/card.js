"use strict";
exports.Card = function(suit, rank, dealer, deck) {

  //the constructor function allows for inheritance while the more literal, non closure approach does not
  //var contructor = function () {}; equally possible
  function constructor() { }
  //will be filled with the following values
  constructor.prototype.changeHands = function () {
    //can this be done via toggle?
    // if (this.dealer === true) {
    //   this.dealer = false;
    //   this.deck = true;
    // } else {
    //   this.dealer = true;
    //   this.deck = false;
    // }
    return true;
  };
  constructor.prototype.getSuit = function() {
    return suit;
  };
  constructor.prototype.getRank = function() {
    return rank;
  };
  return new constructor();
};
