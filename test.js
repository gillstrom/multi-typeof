'use strict';
var assert = require('assert');
var multiTypeof = require('./');

it('Should return true if the input is one of the types', function () {
	assert.strictEqual(multiTypeof('hello', ['string', 'array']), true);
	assert.strictEqual(multiTypeof(['hi', 123], ['string', 'array']), true);
	assert.strictEqual(multiTypeof(true, ['string', 'array', 'boolean']), true);
	assert.strictEqual(multiTypeof({foo: 'bar'}, 'object'), true);
	assert.strictEqual(!multiTypeof(123, ['string', 'array']), true);
});


it('Should return false if the input is not one of the types', function () {
	assert.strictEqual(multiTypeof({foo: 'bar'}, ['string', 'array']), false);
	assert.strictEqual(multiTypeof(true, ['string', 'object']), false);
	assert.strictEqual(multiTypeof(['foo'], ['object']), false);
});
