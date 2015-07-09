# multi-typeof [![Build Status](https://travis-ci.org/gillstrom/multi-typeof.svg?branch=master)](https://travis-ci.org/gillstrom/multi-typeof)

> Check something against an array of types.


## Install

```
$ npm install --save multi-typeof
```


## Example

```js
var multiTypeof = require('multi-typeof');

if (!multiTypeof(65, ['string', 'array'])) {
	throw new TypeError('Expected a string or an array');
}
```


## API

### multiTypeof(input, types)

#### input

*Required*  
Type: `Any type`

Value to test.

#### types

*Required*  
Type: `array`

Types to check against.


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
