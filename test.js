'use strict';
var test = require('ava');
var isSuccess = require('./');

[200, 201, 202, 203, 204, 205, 206, 207, 208, 226].forEach(function (code) {
	test('should detect `' + code + '`', function (t) {
		t.true(isSuccess(code));
		t.end();
	});
});

test('should return `false` for other codes', function (t) {
	t.false(isSuccess(404));
	t.end();
});

test('should throw when passing nonsense', function (t) {
	[undefined, function () {}, {}].forEach(function (input) {
		t.throws(function () {
			isSuccess(input);
		});
	});

	t.end();
});
