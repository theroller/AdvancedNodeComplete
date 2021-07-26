const https = require('https');

const start = Date.now();

function doRequest() {
  https.request('https://www.google.com', (res) => {
    res.on('data', () => {});
    res.on('end', () => {
      console.log(Date.now() - start);
    });
  }).end();
}

for (let index = 0; index < 10; index++) {
  doRequest();
}
