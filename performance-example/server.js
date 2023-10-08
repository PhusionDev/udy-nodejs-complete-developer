const express = require('express');

const app = express();

const delay = (duration) => {
  const start = Date.now();
  while (Date.now() < start + duration) {
    // event loop is blocked...
  }
};

app.get('/', (req, res) => {
  res.send(`Performance Example - ${process.pid}`);
});

app.get('/timer', (req, res) => {
  delay(9000);
  res.send(`Ding ding ding! - ${process.pid}`);
});

console.log('Running server.js');
console.log('Worker has been started...');
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
