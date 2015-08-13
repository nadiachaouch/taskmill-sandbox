/*
@deploy
*/

var speak = require('simple-tts');
 
// usage case 1 - writes the binary audio sample to the response stream (for returning it in an HTTP handler) 
response.writeHead(200, {'Content-Type': 'audio/ogg'});
speak('hello world', {format:'ogg', stream:response});
 
// usage case 2 - creates the file /tmp/hello_world.mp3 in your OS (for caching or other purposes, the filename extension is automatically appended to the give filename) 
speak('hello world', {format:'mp3', filename:'/tmp/hello_world'});