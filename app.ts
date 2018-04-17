/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import * as net from 'net';

const server7999 = net.createServer((connection) => {
	console.log(`Server received a connection on 7999`);
	connection.on('data', (data) => {
		console.log('Server 7999 Received data');
		console.log(data.toString('utf8'));
	});
	connection.on('close', () => {
		console.log('7999 connection got closed.');
	});
});

server7999.on('error', (err) => {
	console.error('Server 7999 received error');
	if (err) {
		console.error(err);
	}
});

server7999.listen(7999, () => {
	console.log('Server listening on 7999...');
});

const server8000 = net.createServer((connection) => {
	console.log(`Server received a connection on 8000`);
	connection.on('data', (data) => {
		console.log('Server 8000 received data');
		console.log(data.toString('utf8'));
	});
	connection.on('close', () => {
		console.log('8000 connection got closed.');
	});
});

server8000.on('error', (err) => {
	console.error('Server 8000 received error');
	if (err) {
		console.error(err);
	}
});

server8000.listen(8000, () => {
	console.log('Server listening on 8000...');
});