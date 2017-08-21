'use strict';

module.exports = function(app) {
var reward = require('../controllers/rewardControllers');

// rewards Routes
app.route('/rewards')
.get(reward.list_all_reward)
.post(reward.create_a_reward);

app.route('/rewards/:rewardId')
.get(reward.read_a_reward)
.put(reward.update_a_reward)
.delete(reward.delete_a_reward);
};