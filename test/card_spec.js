var expect = require('chai').expect; //using the chai library expect
var Card = require('../lib/card').Card; //object is constructed from file name card.js

describe('Card object tests', function() {
  var card;

  beforeEach(function() {
    card = new Card('hearts', 'Jack');
  });

  describe('constructor', function() {
    //write what each card should be first
    it('card should be truthy (exists)', function() {
      expect(card).to.be.ok;
    });
    it('card should have a get suit function', function() {
      expect(card.getSuit).to.be.ok;
      // -or- expect(card).to.have.property(getSuit);
    });
    it('card should have a get rank function', function() {
      expect(card.getRank).to.be.ok;
      // -or- expect(card).to.have.property(getRank);
    });
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

