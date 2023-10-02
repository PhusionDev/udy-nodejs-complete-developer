const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send({
    id: 1,
    name: 'Sir Isaac Newton',
  });
});

app.get('/messages', (req, res) => {
  res.send('<ul><li>Hello Albert!</li></ul');
});

app.post('/messages', (req, res) => {
  res.send('Updating messages...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
