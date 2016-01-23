import test from 'ava';
import m from './';

test('Should return true if the input is one of the types', t => {
	t.true(m('hello', ['string', 'array']));
	t.true(m(['hi', 123], ['string', 'array']));
	t.true(m(true, ['string', 'array', 'boolean']));
	t.true(m({foo: 'bar'}, 'object'));
	t.true(!m(123, ['string', 'array']));
});

test('Should return false if the input is not one of the types', t => {
	t.false(m({foo: 'bar'}, ['string', 'array']));
	t.false(m(true, ['string', 'object']));
	t.false(m(['foo'], ['object']));
});
