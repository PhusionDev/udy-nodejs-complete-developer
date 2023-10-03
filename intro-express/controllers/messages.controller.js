const getMessages = (req, res) => {
  return res.send('<ul><li>Hello Albert!</li></ul');
};

const postMessage = (req, res) => {
  return res.send('Updating messages...');
};

module.exports = {
  getMessages,
  postMessage,
};
