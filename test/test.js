var chai = require('chai')
, assert = chai.assert
, should = chai.should();

// Game

describe('Game', function() {

  it('should exist', function() {
    var game = new Game();
    game.should.be.ok;
  });

  describe('lobby()', function() {

    it('should open a new lobby', function() {
      var game = new Game();
      var lobby = game.lobby();
      lobby.should.be.ok;
    });

  });

});

// Lobby

describe('Lobby', function() {

  it('should exist', function() {
    var lobby = new Lobby();
    lobby.should.be.ok;
  });

  describe('chat()', function() {

    it('should start a new chat', function() {
      var lobby = new Lobby();
      var chat = lobby.chat();
      chat.should.be.ok;
    });

  });

  describe('chess()', function() {

    it('should start a new chess match', function() {
      var lobby = new Lobby();
      var chess = lobby.chess();
      chess.should.be.ok;
    });

  });

});

// Chat

describe('Chat', function() {

  it('should exist', function() {
    var chat = new Chat();
    chat.should.be.ok;
  });

  describe('copy()', function() {

    it('should copy messages to all connected chatters');

  });

  describe('record()', function() {

    it('should record messages to the chat history');

  });

});

// Chess

describe('Chess', function() {

  it('should exist', function() {
    var chess = new Chess();
    chess.should.be.ok;
  });

  describe('update()', function() {

    it('should update the chess board');

  });

});
