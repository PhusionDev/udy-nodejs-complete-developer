const path = require('path');

const getMessages = (req, res) => {
  res.sendFile(
    path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg')
  );
  // return res.send('<ul><li>Hello Albert!</li></ul');
};

const postMessage = (req, res) => {
  return res.send('Updating messages...');
};

module.exports = {
  getMessages,
  postMessage,
};
