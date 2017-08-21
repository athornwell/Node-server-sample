'use strict';

var mongoose = require('mongoose'),
  Reward = mongoose.model('Reward');



exports.list_all_reward = function(req, res) {
  Reward.find({}, function(err, reward) {
    if (err)
      res.send(err);
    res.json(reward);
  });
};


exports.create_a_reward = function(req, res) {
  var new_reward = new Reward(req.body);
  new_reward.save(function(err, reward) {
    if (err)
      res.send(err);
    res.json(reward);
  });
};

exports.read_a_reward = function(req, res) {
  Reward.findById(req.params.rewardId, function(err, reward) {
    if (err)
      res.send(err);
    res.json(reward);
  });
};

exports.update_a_reward = function(req, res) {
  Task.findOneAndUpdate({_id:req.params.rewardId}, req.body, {new: true}, function(err, reward) {
    if (err)
      res.send(err);
    res.json(reward);
  });
};
// Task.remove({}).exec(function(){});
exports.delete_a_reward = function(req, res) {

  Reward.remove({
    _id: req.params.rewardId
  }, function(err, reward) {
    if (err)
      res.send(err);
    res.json({ message: 'Reward successfully deleted' });
  });
};
