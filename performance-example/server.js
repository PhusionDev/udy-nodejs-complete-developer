const express = require('express');
const cluster = require('cluster');
const os = require('os');

const app = express();

const delay = (duration) => {
  const start = Date.now();
  while (Date.now() < start + duration) {
    // event loop is blocked...
  }
};

app.get('/', (req, res) => {
  // BLOCKING FUNCTIONS
  // JSON.stringify();
  // JSON.parse();
  // [5,1,2,3,4].sort();

  res.send(`Performance Example - ${process.pid}`);
});

app.get('/timer', (req, res) => {
  delay(9000);
  res.send(`Ding ding ding! - ${process.pid}`);
});

// console.log('Running server.js');

if (cluster.isMaster) {
  console.log('Master has been started...');
  const cpus = os.cpus().length;
  console.log(`Forking for ${cpus} CPUs`);
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
} else {
  console.log('Worker has been started...');
  app.listen(3000, () => {
    console.log('Server is listening on port 3000');
  });
}
