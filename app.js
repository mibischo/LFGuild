var express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

// mongo example: https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/

var app = express();
var port = process.env.PORT || 3000;
var db;


app.use(express.static('wwwroot'));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database: ' + err);
    process.exit();
});

require('./LFGuild.server/routes/player.routes.js')(app);
require('./LFGuild.server/routes/wowprogress.routes.js')(app);
require('./LFGuild.server/routes/character.routes.js')(app);

// starting the server
app.listen(port, () => {
  console.log('listening on ' + port)
});
