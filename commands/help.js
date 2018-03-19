  exports.run = (client, message, args) => {;
         try {
             console.log("Help called");
             message.channel.send("$news <subreddit> l|s|r <number>" + '\n' +
             "$timer <subreddit> <Time in hours>" + '\n' +
             "$coin <coin symbol>" + '\n' +
             "$stock <symbol>");
   		  }
        catch(err) {
          message.channel.send("Idk how but you screwed it up")
        }
  }
