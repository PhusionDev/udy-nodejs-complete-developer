const path = require('path');

const getMessages = (req, res) => {
  res.render('messages', {
    title: 'Messages to my friends!',
    friend: 'Elon Musk',
  });
};

const postMessage = (req, res) => {
  return res.send('Updating messages...');
};

module.exports = {
  getMessages,
  postMessage,
};
