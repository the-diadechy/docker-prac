const { createServer } = require('node:http');
const os = require('node:os');

const hostname = os.networkInterfaces().tailscale0[0].address
const port = 3000;

const server = createServer((req, res) => {
    res.end("Hello Cindy");

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});



