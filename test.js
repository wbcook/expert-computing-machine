var chai = require('chai')
, assert = chai.assert
, should = chai.should();

describe('Game', function() {

  it('should exist', function() {
    var game = new Game();
    game.should.be.ok;
  });

  describe('chat()', function() {

    it('should start a new chat', function() {
      var game = new Game();
      var chat = game.chat();
      chat.should.be.ok;
    });

  });

  describe('lobby()', function() {

    it('should open a new lobby', function() {
      var game = new Game();
      var lobby = game.lobby();
      lobby.should.be.ok;
    });

  });

  describe('player()', function() {

    it('should create a new player', function() {
        var game = new Game();
        var player = new Player('player1');
        player.should.be.ok;
    });

    it('should add the player to the list of all players', function() {
      var game = new Game();
      var player = new Player('player1');
      assert.equal(1, game.players.indexOf(player));
    });

  });

});

describe('Chat', function() {

  it('should exist', function() {
    var chat = new Chat();
    chat.should.be.ok;
  });

  describe('messages()', function() {

    it('should get messages from the chat history', function() {
      var chat = new Chat();
      var message = 'old message';
      chat.set(message);
      chat.get().should.equal(message);
    });

    it('should set messages to the chat history', function() {
      var chat = new Chat();
      var message = 'new message';
      chat.set(message);
      chat.get().should.equal(message);
    });

  });

});

describe('Lobby', function() {

  it('should exist', function() {
    var lobby = new Lobby();
    lobby.should.be.ok;
  });

  describe('state()', function() {

    it('should get the state of the game', function() {
      var game = new Game();
      var state = 'waiting';
      game.state(state);
      game.state().should.equal(state);

    });

    it('should set the state of the game', function() {
      var game = new Game();
      var state = 'playing';
      game.state(state);
      game.state().should.equal(state);
    });

  });

  describe('players()', function() {

    it('should get the players in the lobby', function() {
      var lobby = new Lobby();
      var player = 'player1';
      lobby.set(player);
      lobby.get().should.equal(player);
    });

    it('should set the players in the lobby', function() {
      var lobby = new Lobby();
      var player = 'player2';
      lobby.set(player);
      lobby.get().should.equal(player);
    });

  });

});
