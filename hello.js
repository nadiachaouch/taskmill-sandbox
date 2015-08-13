/*
@deploy
*/

module.exports = function(req, res, next) {
  
  
  
  tts = require('node-tts-api');
 
example = "Hello World";
 
 tts.getSpeech(example, function(error, link) {
  return res.redirect(link);
});



};

