  exports.run = (client, message, args) => {
    const http = require('https');
    var k = args[0].toUpperCase()
      http.get(`https://min-api.cryptocompare.com/data/price?fsym=${k}&tsyms=USD`, (res) => {
            var body = '';
        res.on('data', function(chunk){
            body += chunk;
        });
        res.on('end', function(){
         var Don = JSON.parse(body);
         try {
             console.log(Don.USD);
             message.channel.send(`The price of ${k} is at $` + Don.USD);
   		  }
        catch(err) {
          message.channel.send("Error msg Nick")
        }
  });
 });
}
