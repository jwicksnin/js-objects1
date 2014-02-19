var expect = require('chai').expect;
var Deck = require('../lib/deck').Deck;
var Card = require('../lib/card').Card;
var Dealer = require('../lib/dealer').Dealer;
describe('Dealer object tests', function() {
  'use strict';
  var dealer;

  beforeEach(function() {
    dealer = new Dealer();
    card = new Card();
    deck = new Deck();
  });

  describe('constructor', function() {

    it('dealer should be able to take cards from player and add cards to a deck', function () {
      dealer.out(card, player, deck);
    });

    it('dealer should be able to take cards from a deck and add cards to a player', function () {
      dealer.into(card, player, deck);
    });
    it('dealer should know how many cards they have', function () {
      dealer.count();
    }):


  });
});
