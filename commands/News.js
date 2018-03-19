exports.run = (client, message, args) => {
  const http = require('https');
    var num = 0
    //var for loop
    http.get(`https://www.reddit.com/r/${args[0]}/top/.json`, (res) => {
      //grab json file of subreddit stories sorted by top
          var body = '';
      res.on('data', function(chunk){
          body += chunk;
      });
      res.on('end', function(){
        //this is here so that the whole body is cached so it doesn't try to read quicker then it can send you the information
       var Don = JSON.parse(body);
       //parse the body as json
	     if (args[1] === "l") {
          do{
          console.log((num), Don.data.children[num].data.title);
          message.channel.send((num) + " " + Don.data.children[num].data.title);
          //list news story titles for amount in list minus one cause ARRAYS START AT 0
          num++;
          //loop for
		     }
         while (num < args[2])
         //hi this is loop
       }
        else if (args[1] === "s") {
		  try {
          console.log(Don.data.children[args[2]].data.url);
          message.channel.send(Don.data.children[args[2]].data.url);
          //show news from source; minus one cause ARRAYS START AT 0
		  }
      catch(err) {
        message.channel.send("there is no error")
        // you see if you tell the user there is no error then there can't be an error
      }
	     }
        else if (args[1] === "r") {
		  try {
		      console.log("www.reddit.com" + Don.data.children[args[2]].data.permalink)
          message.channel.send("www.reddit.com" + Don.data.children[args[2]].data.permalink);
          //show reddit link for story; minus one cause ARRAYS START AT 0
		  }
      catch(err) {
        message.channel.send("there is no error")
        // you see if you tell the user there is no error then there can't be an error
      }
	   }
     else {
		  message.channel.send("$news <subreddit> l|s|r <number>")
	  }
      });
  });
}
