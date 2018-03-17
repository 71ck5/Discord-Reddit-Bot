exports.run = (client, message, args) => {
  const http = require('https');
    http.get(`https://www.reddit.com/r/${args[0]}/top/.json`, (res) => {
          var body = '';
      res.on('data', function(chunk){
          body += chunk;
      });
      res.on('end', function(){
        var Don = JSON.parse(body);
		if (agrs[1] === "f") {
          do{
          console.log((num), Don.data.children[num].data.title);
          message.channel.send((num) + " " + Don.data.children[num].data.title);
          num++;
		  }
        while (num < args[2])
      }else if (agrs[1] === "s") {
		  do{
          console.log(Don.data.children[num].data.url);
          message.channel.send(Don.data.children[num].data.url);
          num++;
		  }
        while (num < args[2])
	  }else if (agrs[1] === "r") {
		  do{
		  console.log("www.reddit.com" + Don.data.children[num].data.permalink)
          message.channel.send("www.reddit.com" + Don.data.children[num].data.permalink);
          num++;
		  }
        while (num < args[2])
	  }else {
		  message.channel.send("$news <subreddit> f|s|r <number>")
	  }
      });
  });
}
