var chai = require('chai')
, assert = chai.assert
, should = chai.should();

describe('Server', function() {

  it('should be a Server object', function() {
    var testS = new Server();
    testS.should.be.ok;
  });

  describe('startChat', function() {

    it('should return a new Chat instance', function() {
      var testS = new Server();
      var testC = testS.startChat();
      testC.should.be.a('object');
    });

  });

});

describe('Chat', function() {

  it('should be a Chat object', function() {
    var testC = new Chat();
    testC.should.be.ok;
  });

  describe('allMessages()', function() {

    it('should return the entire chat history', function() {
      var testC = new Chat();
      var chatH = testC.allMessages();
      chatH.length.should.equal(0);
    });

  });

  describe('lastMessage()', function() {

    it('should return the last message from chat history', function() {
      var testC = new Chat();
      var testM = 'new message';
      testC.newMessage(testM);
      testC.lastMessage().should.equal(testM);
    });

  });

  describe('newMessage()', function() {

    it('should add a new message to the chat history', function() {
      var testC = new Chat();
      var testM = 'new message';
      testC.newMessage(testM);
      testC.lastMessage().should.equal(testM);
    });

  });

});
