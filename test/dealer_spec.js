var expect = require('chai').expect;
var Deck = require('../lib/deck').Deck;
var Card = require('../lib/card').Card;
var Dealer = require('../lib/dealer').Dealer;
describe('Dealer object tests', function() {
  'use strict';
  var dealer;
  var card;
  var cards;
  var deck;
  var player;

  beforeEach(function() {
    card = new Card("queen", "hearts", true, false);
    cards = [];
    cards.push(card);
    deck = new Deck(cards);
    dealer = new Dealer(deck);
    //player = new Player();
  });


  describe('constructor', function() {

    it('dealer should be able to take cards from player and add cards to a deck', function () {
      dealer.pickup(card, player, deck);
    });

    it('dealer should be able to take cards from a deck and add cards to a player', function () {
      dealer.deal(card, player, deck);
    });
    it('dealer should know how many cards they have from the deck', function () {
      expect(dealer.count()).to.be.a('function');
    });


  });
});
