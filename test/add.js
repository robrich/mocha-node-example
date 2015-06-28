'use strict';

var add = require('../add');
var expect = require('chai').expect;

describe('#add', function () {

	it('should add 2 + 2', function () {
		var answer = add(2, 2);
		expect(answer).to.equal(4);
	});
	it('should add 2 + -1', function () {
		var answer = add(2, -2);
		expect(answer).to.equal(0);
	});

});
