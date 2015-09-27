var express = require('express'),
    exphbs  = require('express-handlebars'),
    config = require('./config');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('static'));

app.get('/', function (req, res) {
  res.render('home', {
    name: "Mr. Skeltal",
    email: "thankyouskeleton@gmail.com"
  });
});

app.get('/thank', function(req, res) {
  res.json({
    good_bones: true,
    calcium: 100
  });
});

app.listen(3000, function() {
  console.log('\nServer running on port: ' + this.address().port);
});
