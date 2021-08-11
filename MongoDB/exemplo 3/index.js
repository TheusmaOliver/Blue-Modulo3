var request = require('request');
var fs = require('fs');

request.post({
  url: 'https://api.remove.bg/v1.0/removebg',
  formData: {
    image_url: 'https://images.lojanike.com.br/500x500/produto/tenis-nike-air-max-plus-se-DB0681-200-1-11622563582.jpg',
    size: 'auto',
  },
  headers: {
    'X-Api-Key': 'xfTMy7QGifZsYzvUCWkacMhf'
  }
  
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  fs.writeFileSync("no-bgg.png", body);
});