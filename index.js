'use strict';
module.exports = function (input, types) {
	if (!Array.isArray(types)) {
		types = String(types).split();
	}

	for (var i = 0; i < types.length; i++) {
		if (Array.isArray(input)) {
			if (types[i] === 'array') {
				return true;
			}

			continue;
		}

		if (typeof input === types[i]) {
			return true;
		}
	}

	return false;
};
