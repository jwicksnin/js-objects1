var expect = require('chai').expect;
//var Deck = require('../lib/deck').Deck;
var Card = require('../lib/card').Card;
var Dealer = require('../lib/dealer').Dealer;
describe('Deck object tests', function() {
  'use strict';
  var card;
  var dealer;
  var player;

  beforeEach(function() {
    card = new Card("queen", "hearts", true, false);
    dealer = new Dealer();
    player = new Player();
  });

  describe('constructor', function() {
    it('player should exist', function () {
      expect(player).to.be.ok;
    )};
    it('player should know how many cards they have', function() {
      expect(player.total()).to.be
    });
    )};

  });
});
