var ar = []
exports.run = (client, message, args) => {
  const http = require('https');
    http.get(`https://www.reddit.com/r/${args[0]}/top/.json`, (res) => {
          var body = '';
      res.on('data', function(chunk){
          body += chunk;
        });
        res.on('end', function(){
         var Don = JSON.parse(body);
         if( args[1] * 1000) {
             function news() {
             var m = 0
             while (m < Don.data.children.length && ar.indexOf(Don.data.children[m].data.url) != -1) {
              m++
             }
             if(ar.length > 5) {
             message.channel.send(Don.data.children[m].data.url);
             ar.shift(Don.data.children[m].data.url);
             ar.push(Don.data.children[m].data.url);
            } else {
             message.channel.send(Don.data.children[m].data.url);
             ar.push(Don.data.children[m].data.url);
            }
          }
          message.channel.send(`Timer Started for ${args[1]} hours, on the ${args[0]} subreddit`);
          setInterval(news, args[1] * 3600000);
          } else {
			message.channel.send("Timer <subreddit> <Time in hours>")
      }
  })
})
}
