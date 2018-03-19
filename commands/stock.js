  exports.run = (client, message, args) => {
    const http = require('https');
    var slim = args[0].toUpperCase()
    //To make coin symbol more recognizable
      http.get(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${slim}&types=quote&range=1m&last=5`, (res) => {
        //grab json file of stock selected
            var body = '';
        res.on('data', function(chunk){
            body += chunk;
        });
        res.on('end', function(){
          //this is here so that the whole body is cached so it doesn't try to read quicker then it can send you the information
         var Don = JSON.parse(body);
         //parse the body as json
           try{
             console.log(Don[slim].quote.latestPrice);
             message.channel.send(`The price of ${slim} is at $` + Don[slim].quote.latestPrice);
             //list latestPrice of stock
           }
           catch(err) {
             message.channel.send("Error")
           }
  });
 });
}
