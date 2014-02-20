'use strict';
module.exports = function() {

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
