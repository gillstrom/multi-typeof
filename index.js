'use strict';
module.exports = function (input, types) {
	if (!Array.isArray(types)) {
		types = String(types).split();
	}

	for (var i = 0; i < types.length; i++) {
		if (types[i] === 'array' && Array.isArray(input)) {
			return true;
		}

		if (typeof input === types[i]) {
			return true;
		}
	}

	return false;
};
