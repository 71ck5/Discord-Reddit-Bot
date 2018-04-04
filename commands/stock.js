  exports.run = (client, message, args) => {
    const http = require('https');
    var slim = args[0].toUpperCase()
      http.get(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${slim}&types=quote&range=1m&last=5`, (res) => {
            var body = '';
        res.on('data', function(chunk){
            body += chunk;
        });
        res.on('end', function(){
         var Don = JSON.parse(body);
           try{
             console.log(Don[slim].quote.latestPrice);
             message.channel.send(`The price of ${slim} is at $` + Don[slim].quote.latestPrice);
           }
           catch(err) {
             message.channel.send(`You  it up ${slim}` + Don)
           }
  });
 });
}
