/*
@deploy
*/

module.exports = function(req, res, next) {
  
  
  
  tts = require('node-tts-api');
 
example = "Taskmill is the best!!";
 
 tts.getSpeech(example, function(error, link) {
  return res.redirect(link);
});



};

