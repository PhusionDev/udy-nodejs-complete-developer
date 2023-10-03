const model = require('../models/friends.model');

const addFriend = (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const newFriend = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newFriend);

  return res.json(newFriend);
};

const getFriends = (req, res) => {
  return res.json(model);
};

const getFriend = (req, res) => {
  const id = Number(req.params.id);
  console.log(`params: ${req.params.id}`);
  const friend = model[id];
  if (friend) {
    return res.json(friend);
  }

  return res.status(404).json({ error: 'Friend does not exist' });
};

module.exports = {
  addFriend,
  getFriends,
  getFriend,
};
