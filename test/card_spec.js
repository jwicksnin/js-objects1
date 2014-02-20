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
    it('card.suit should be immutable', function() {
      expect(card.getSuit()).to.equal('hearts');
      card.suit = 'diamonds';
      expect(card.getSuit()).to.equal('hearts');
    });
    it('card.rank should be immutable', function() {
      expect(card.getRank()).to.equal('Jack');
      card.rank = 10;
      expect(card.getRank()).to.equal('Jack');
    });
  });
});

