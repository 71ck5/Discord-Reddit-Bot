exports.run = (client, message, args) => {
  const http = require('https');
    var num = 0
    http.get(`https://www.reddit.com/r/${args[0]}/top/.json`, (res) => {
          var body = '';
      res.on('data', function(chunk){
          body += chunk;
      });
      res.on('end', function(){
       var Don = JSON.parse(body);
	     if (args[1] === "l") {
          do{
          console.log((num), Don.data.children[num].data.title);
          message.channel.send((num) + " " + Don.data.children[num].data.title);
          num++;
		     }
         while (num < args[2])
       }
        else if (args[1] === "s") {
		  try {
          console.log(Don.data.children[args[2]].data.url);
          message.channel.send(Don.data.children[args[2]].data.url);
		  }
      catch(err) {
        message.channel.send("error")
      }
	     }
        else if (args[1] === "r") {
		  try {
		      console.log("www.reddit.com" + Don.data.children[args[2]].data.permalink)
          message.channel.send("www.reddit.com" + Don.data.children[args[2]].data.permalink);
		  }
      catch(err) {
        message.channel.send("error")
      }
	   }
     else {
		  message.channel.send("$news <subreddit> l|s|r <number>")
	  }
      });
  });
}
