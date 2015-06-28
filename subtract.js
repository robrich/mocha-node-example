'use strict';

function subtract(a, b, cb) {
	cb(null, a - b);
}

module.exports = subtract;
