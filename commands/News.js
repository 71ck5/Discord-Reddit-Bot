exports.run = (client, message, args) => {
  const http = require('https');
    http.get(`https://www.reddit.com/r/${args[0]}/top/.json`, (res) => {
          var body = '';
      res.on('data', function(chunk){
          body += chunk;
      });
      res.on('end', function(){
        var Don = JSON.parse(body);
          do{
          console.log((num), Don.data.children[num].data.title);
          message.channel.send((num) + " " + Don.data.children[num].data.title);
          num++;
        
        while (num < args[1])
      }
      });
  });
}
