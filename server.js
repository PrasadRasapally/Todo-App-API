var express = require('express'),
  cors = require('cors'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  TaskSchema = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');
//autoIncrement = require('mongoose-auto-increment');

mongoose.Promise = global.Promise;
var connection = mongoose.connect('mongodb://localhost/tododb');

//autoIncrement.initialize(connection);

// TaskSchema.plugin(
//   autoIncrement.plugin, 
//   { 
//     model: 'Tasks', 
//     field: 'taskId',
//     startAt: 1,
//     incrementBy: 1
//   });

connection.model('Tasks', TaskSchema);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);