var expect = require('chai').expect;
var Deck = require('../lib/deck');
var Card = require('../lib/card');
var Dealer = require('../lib/dealer');
var Player = require('../lib/player');
describe('Dealer object tests', function() {
  'use strict';
  var dealer;
  var card;
  var deck;
  var player;

  beforeEach(function() {
    card = new Card("queen", "hearts");
    deck = new Deck(Card);
    dealer = new Dealer(Deck, Card);
    player = new Player();
    dealer.deal(card, player, deck);
  });

  describe('constructor', function() {

    it('dealer should be able to take cards from player and add cards to a deck', function () {
      var playerTotal = player.total();
      var num = deck.total();
      dealer.pickup(card, player, deck);
      var newNum = deck.total();
      expect(num).to.be.equal(newNum - 1);
      expect(player.total()).to.be.equal(playerTotal - 1);
    });

    it('dealer should be able to take cards from a deck and add cards to a player', function () {
      var playerTotal = player.total();
      var num = player.total();
      dealer.deal(card, player, deck);
      var newNum = player.total();
      expect(num).to.be.equal(newNum - 1);
      expect(player.total()).to.be.equal(playerTotal + 1);
    });
  });
});
