import test from 'ava';
import isSuccess from './';

[200, 201, 202, 203, 204, 205, 206, 207, 208, 226].forEach(code => {
	test('should detect `' + code + '`', t => {
		t.true(isSuccess(code));
		t.end();
	});
});

test('should return `false` for other codes', t => {
	t.false(isSuccess(404));
	t.end();
});

test('should throw when passing nonsense', t => {
	[undefined, {}].forEach(input => {
		t.throws(() => {
			isSuccess(input);
		});
	});

	t.end();
});
