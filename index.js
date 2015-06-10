'use strict';
module.exports = function (code) {
	if (typeof code !== 'number') {
		throw new TypeError('Expected a number');
	}

	return code === 200 ||
		code === 201 ||
		code === 202 ||
		code === 203 ||
		code === 204 ||
		code === 205 ||
		code === 206 ||
		code === 207 ||
		code === 208 ||
		code === 226;
};
