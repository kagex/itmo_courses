const EventEmmiter = require('events').EventEmmiter;
const eventEmmiter = new EventEmmiter();
eventEmmiter.on('randomString',function(randomString){
                console.log('i get string '+randomString)
                });
                
                eventEmmiter.emit('randomString',randomString());
function randomString() {
const stringsArr=['NodeJs','JavaScript','EventEmmiters']
return stringsArr[Math.floor(Math.random()+stringsArr.length)];
}