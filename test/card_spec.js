var expect = require('chai').expect; //using the chai library expect
var Card = require('../lib/card'); //object is constructed from file name card.js

describe('Card object tests', function() {
  'use strict';
  var card;

  beforeEach(function() {
    card = new Card('hearts', 'Jack');
  });

  describe('constructor', function() {
    //write what each card should be first
    it('card should be truthy (exists)', function() {
      //expect(card).to.be.ok;
      expect(card).to.be.an('object');
    });
    // it('card belongs to a deck or a player', function () {
    //   expect(card.dealer || card.deck).to.be.true;
    // });
    // it('card can change between decks and players', function () {
    //   expect(card.changeHands()).to.be.ok;
    // });
    it('card.suit should be immutable', function() {
      expect(card.getSuit()).to.equal('hearts');
      card.suit = 'diamonds';
      expect(card.getSuit()).to.equal('hearts');
    });
    it('card.rank should be immutable', function() {
      expect(card.getRank()).to.equal('Jack');
      card.suit = 10;
      expect(card.getRank()).to.equal('Jack');
    });
  });
});

