var express = require('express'),
    exphbs  = require('express-handlebars'),
    config = require('./config'),
    path = require('path');

var app = express();

app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname,'static')));
app.set('views', path.join(__dirname,"views"));
app.engine('handlebars', exphbs({
  defaultLayout: 'main', 
  layoutsDir: path.join(__dirname,"views","layouts"),
  partialsDir: path.join(__dirname,"views","partials")
}));
console.error(path.join(__dirname,"views"));
app.set('remoting', { 
  context: {enableHttpContext: true}, 
  errorHandler: { 
    handler: function handler(err, req, res, callback) {
      res.send("OPPZ! u spooked da server!?!");
      res.end();
  }}
});

app.get('/', function (req, res) {
  res.render('home', {
    name: "Mr. Skeltal",
    email: "thankyouskeleton@gmail.com"
  });
});

app.get('/thank', function(req, res) {
  res.json({
    good_bones: true,
    calcium: Math.floor(Math.random() * 1000)
  });
});

app.listen(3000, function() {
  console.log('\nServer running on port: ' + this.address().port);
});
