var m = 0
exports.run = (client, message, args) => {
  const http = require('https');
    http.get(`https://www.reddit.com/r/${args[0]}/top/.json`, (res) => {
      //grab json file of subreddit selected
          var body = '';
      res.on('data', function(chunk){
          body += chunk;
      });
      res.on('end', function(){
        //this is here so that the whole body is cached so it doesn't try to read quicker then it can send you the information
        var Don = JSON.parse(body);
        //parse the body as json
          if( args[1] * 1000) {
          //unnecessary
          function news() {
             var m = Math.floor((Math.random() * 5) + 0);
             //random so you are less likely to get the same story; better soultion in progress
             console.log(Don.data.children[m].data.url);
             message.channel.send(Don.data.children[m].data.url);
             //show news from source; minus one cause ARRAYS START AT 0
          }
          message.channel.send(`Timer Started for ${args[1]} hours, on the ${args[0]} subreddit`);
          //lists settings of timer
          setInterval(news, args[1] * 3600000);
          //sets timer on by hours
          } else {
			message.channel.send("Timer <subreddit> <Time in hours>")
		  }
      });
  });
}
