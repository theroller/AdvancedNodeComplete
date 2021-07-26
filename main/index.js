const cluster = require('cluster');
const express = require('express');

function doWork(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) { }
}

if (cluster.isMaster) {
  cluster.fork();
  // cluster.fork();
  // cluster.fork();
  // cluster.fork();
} else {
  const app = express();

  app.get('/', (req, res) => {
    doWork(5000);
    res.send('hi there');
  });

  app.get('/fast', (req, res) => {
    res.send('FAST!!!');
  });
  app.listen(3000);
}
