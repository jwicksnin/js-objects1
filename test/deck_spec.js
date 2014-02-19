var expect = require('chai').expect;
var Deck = require('../lib/deck').Deck;
var Card = require('../lib/card').Card;
describe('Deck object tests', function() {
  'use strict';
  var deck;
  var card;
  var cards;

  beforeEach(function() {
    card = new Card("queen", "hearts", true, false);
    cards = [];
    cards.push(card);
    deck = new Deck(cards);
  });

  describe('constructor', function() {
    it('deck should exist', function () {
      expect(deck).to.be.ok;
    });
    it('deck can add new cards', function () {
      deck.add(new Card("diamonds", "king", true, false));
    });
    it('deck can exchange cards with a dealer', function () {
      //tbd
    });
    it('deck will have at least one card', function () {
      expect(deck.size()).to.be.above(0);
      //expect(deck).to.have.property(cards);
    });


  });
});
