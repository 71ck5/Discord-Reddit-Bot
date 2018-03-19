  exports.run = (client, message, args) => {
    const http = require('https');
    var k = args[0].toUpperCase()
    //To make coin symbol more recognizable
      http.get(`https://min-api.cryptocompare.com/data/price?fsym=${k}&tsyms=USD`, (res) => {
        //grab json file of coin selected; you can change what currency by changing USD to any monitary symbol
            var body = '';
        res.on('data', function(chunk){
            body += chunk;
        });
        res.on('end', function(){
          //this is here so that the whole body is cached so it doesn't try to read quicker then it can send you the information
         var Don = JSON.parse(body);
         //parse the body as json
         try {
             console.log(Don.USD);
             //Debug
             message.channel.send(`The price of ${k} is at $` + Don.USD);
   		  }
        catch(err) {
          message.channel.send("$coin <coin symbol>")
        }
  });
 });
}
