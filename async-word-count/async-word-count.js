var fs = require('fs');
var path = require('path');

var specificWordCount = function(filePath, word, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var count= 0;
    var words = data.trim().split(' ');
    for(var i = 0 ; i < words.length ; i++){
      if( words[i] === word ){
        count++;
      }
    }
    callback(null, count);
  });
};

var getTotalSpecificWordCount = function(filePathOne, filePathTwo, word, callback) {
	console.log('word count for the first file ')
specificWordCount(filePathOne,word,callback)

console.log('word count for the second  file ')
specificWordCount(filePathTwo,word,callback)


  
};

module.exports = getTotalSpecificWordCount;
