function sleep(x) {
   return function(cb) {
      setTimeout(cb, x)
   }
}
var m = 0
exports.run = (client, message, args) => {
  const http = require('https');
    http.get(`https://www.reddit.com/r/${args[0]}/top/.json`, (res) => {
          var body = '';
      res.on('data', function(chunk){
          body += chunk;
      });
      res.on('end', function(){
        var i = 1
        var Don = JSON.parse(body);
          if( args[1] * 1000) {
          function news() {
            if (z === Don.data.children[m].data.url) {
             m + 1
             } else {
             var z === Don.data.children[m].data.url
             console.log(Don.data.children[m].data.url);
             message.channel.send(Don.data.children[m].data.url);
             m = 0
            }
          }
          setInterval(news, args[1] * 3600000);
          } else {
			message.channel.send("Timer <subreddit> <Time in hours>")
		  }
      });
  });
}
