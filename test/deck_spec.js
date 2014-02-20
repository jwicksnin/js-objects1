var expect = require('chai').expect;
var util = require('util');
var Deck = require('../lib/deck');//entire file, not just one function
;
var Card = require('../lib/card');

describe('Deck object tests', function() {
  'use strict';
  var deck;

  beforeEach(function() {
    deck = new Deck(Card);
  });

  describe('constructor', function() {
    it('deck should exist', function () {
      expect(deck).to.be.ok;
    });

    it('deck can know which cards it has', function () {
      //console.log(util.inspect(deck.getCards(), { showHidden: true }));
      //console.log(deck.getCards());
      expect(deck.getCards().length).to.be.above(50);
    });
    it('deck will have at least one card', function () {
      expect(deck.total()).to.be.above(0);
    });
  });
});
