/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
exports.__esModule = true;
var net = require("net");
var server = net.createServer(function (connection) {
    console.log("Server received a connection on 8000");
    connection.on('data', function (data) {
        console.log('Received data');
        console.log(data.toString('utf8'));
    });
    connection.on('close', function () {
        console.log('8000 connection got closed.');
    });
});
server.on('error', function (err) {
    console.error('Server received error');
    if (err) {
        console.error(err);
    }
});
server.listen(8000, function () {
    console.log('Server listening on 8000...');
});
