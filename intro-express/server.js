const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: 'Albert Einstein',
  },
  {
    id: 1,
    name: 'Sir Isaac Newton',
  },
];

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post('/friends', (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };
  friends.push(newFriend);

  res.json(newFriend);
});

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/friends/:id', (req, res) => {
  const { id } = Number(req.params);
  const friend = friends[id];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({ error: 'Friend does not exist' });
  }
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
