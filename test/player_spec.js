var expect = require('chai').expect;
var Deck = require('../lib/deck');
var Card = require('../lib/card');
var Dealer = require('../lib/dealer');
var Player = require('../lib/player');
describe('Deck object tests', function() {
  'use strict';
  var card;
  var dealer;
  var player;

  beforeEach(function() {
    card = new Card("queen", "hearts");
    dealer = new Dealer(Deck, Card);
    player = new Player();
  });

  describe('constructor', function() {
    it('player should exist', function () {
      expect(player).to.be.an('object');
    });
    it('player should know how many cards they have', function() {
      expect(player.total()).to.be.above(-1);
    });
    it('player should show thier hand', function () {
      expect(player.getCards).to.be.a('function');
    });
  });
});
