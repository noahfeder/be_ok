'use strict';
const Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {
  'LaunchRequest': function() {
    var say = "Would you like to know if everything is going to be ok? Just ask.";
    this.emit(':ask', say, 'What was that?')
  },
  'OKIntent': function() {
    var say = 'Everything is going to be OK.'
    this.emit(':tell', say);
  },
  'AMAZON.HelpIntent': function() {
    var HELP = "Just ask, if everything is going to be OK";
    this.emit(':ask', HELP, 'What was that?');
  },
  'AMAZON.StopIntent': function() {
    this.emit(':tell', 'Goodbye.');
  },
  'AMAZON.CancelIntent': function() {
    this.emit(':tell', 'Goodbye.');
  }
}
