const reverse = require('../lib/reverse');
const expect = require('chai').expect;

describe('# reverse', function() {
    it('reverses the string given', function() {
        expect(reverse('hello')).to.be.equal('olleh');
    })
})