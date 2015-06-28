'use strict';

var expect = require('chai').expect;
var subtract = require('../subtract');

describe('#subtract', function () {

	it('should subtract 2 from 2', function (done) {
		subtract(2, 2, function (err, result) {
			expect(result).to.equal(0);
			expect(err).to.be.null;

			done();
		});
	});

});
