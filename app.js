/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
exports.__esModule = true;
var net = require("net");
var server7999 = net.createServer(function (connection) {
    console.log("Server received a connection on 7999");
    connection.on('data', function (data) {
        console.log('Server 7999 Received data');
        console.log(data.toString('utf8'));
    });
    connection.on('close', function () {
        console.log('7999 connection got closed.');
    });
});
server7999.on('error', function (err) {
    console.error('Server 7999 received error');
    if (err) {
        console.error(err);
    }
});
server7999.listen(7999, function () {
    console.log('Server listening on 7999...');
});
var server8000 = net.createServer(function (connection) {
    console.log("Server received a connection on 8000");
    connection.on('data', function (data) {
        console.log('Server 8000 received data');
        console.log(data.toString('utf8'));
    });
    connection.on('close', function () {
        console.log('8000 connection got closed.');
    });
});
server8000.on('error', function (err) {
    console.error('Server 8000 received error');
    if (err) {
        console.error(err);
    }
});
server8000.listen(8000, function () {
    console.log('Server listening on 8000...');
});
