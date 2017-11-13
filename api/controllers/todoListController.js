'use strict';

var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.list_all_tasks = function (req, res) {
  /*Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });*/

  //for sorting we are using sort method of mongoose
  Task.find({}).sort('name').exec(function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_task = function (req, res) {

  var new_task = new Task(req.body);

  console.log("req.body ", req.body);

  new_task.save(function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function (req, res) {
  Task.findById(req.params.taskId, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function (req, res) {
  Task.findOneAndUpdate(
    { "taskId": req.params.taskId },
    { $set: req.body },
    { "new": true },
    function (err, task) {
      if (err)
        res.send(err);
      res.json(task);
    }
  );
};


exports.delete_a_task = function (req, res) {
  Task.remove({
    'taskId': req.params.taskId
  }, function (err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};