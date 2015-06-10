'use strict';
var assert = require('assert');
var isSuccess = require('./');

[200, 201, 202, 203, 204, 205, 206, 207, 208, 226].forEach(function (code) {
	it('should detect `' + code + '`', function () {
		assert.strictEqual(isSuccess(code), true);
	});
});

it('should return `false` for other codes', function () {
	assert.strictEqual(isSuccess(404), false);
});

it('should throw when passing nonsense', function () {
	[undefined, function () {}, {}].forEach(function (input) {
		assert.throws(function () {
			isSuccess(input);
		});
	});
});
