let http = require('http');

/*
  Makes the HTTP call to the Back End express server.
    update: function that updates the DOM based on the response of the server.
    path: Path to the Back End express server.
*/
export function makeHTTPRequest(update, path) {
  let options = {
    hostname: 'localhost',
    port: 8080,
    method: 'GET',
    path: path
  };
  const request = http.request(options, res => {
    let data = '';
    res.on('data', chunk => {
      data += chunk;
    });
    res.on('end', () => {
      update(JSON.parse(data));
    });
  });

  request.on('error', e => {
      console.log(e);
  });

  request.end();
}
