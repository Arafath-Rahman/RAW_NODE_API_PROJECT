/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up/down time of user defined links
 * Author: Md. Arafath Rahman Khan
 * Date: 19/03/2021
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./handlers/handleReqRes');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}...`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// running the server
app.createServer();
