const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('port', (process.env.PORT || 5000));

// app.use
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// routes
app.get('/', (request, response) => {
  response.render('pages/index');
});

//Including the routes module
const routes = require("./modules/routes/index");
routes(app);

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});