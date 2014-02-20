var expect = require('chai').expect;
var util = require('util');
var Deck = require('../lib/deck');//entire file, not just one function
//var Deck = require('../lib/deck').Deck;
var Card = require('../lib/card');

describe('Deck object tests', function() {
  'use strict';
  var deck;
  //var card;
  //var cards;

  beforeEach(function() {
    //card = new Card("queen", "hearts", true, false);
    //cards = [];
    //cards.push(card);
    deck = new Deck(Card);
  });

  describe('constructor', function() {
    it('deck should exist', function () {
      expect(deck).to.be.ok;
    });
    // it('deck can add new cards', function () {
    //   deck.add(new Card("diamonds", "king", true, false));
    // });
    it('deck can know which cards it has', function () {
      //console.log(util.inspect(deck.getCards(), { showHidden: true }));
      //console.log(deck.getCards());
      expect(deck.getCards().length).to.be.above(50);

    });
    it('deck will have at least one card', function () {
      expect(deck.total()).to.be.above(0);
      //expect(deck.getCards()[0].getSuit()).to.equal("queen" || "diamonds");
    });


  });

});
