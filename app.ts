/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import * as net from 'net';

const server = net.createServer((connection) => {
	console.log(`Server received a connection on 8000`);
	connection.on('close', () => {
		console.log('8000 connection got closed.');
	});
});

server.on('error', (err) => {
	console.error('Server received error');
	if (err) {
		console.error(err);
	}
});

server.listen(8000, () => {
	console.log('Server listening on 8000...');
});