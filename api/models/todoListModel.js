'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var TaskSchema = new Schema({
  taskId: {
    type: Number,
    Required: 'Kindly enter the taskID'
  },
  name: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

//module.exports = mongoose.model('Tasks', TaskSchema);
module.exports = TaskSchema;