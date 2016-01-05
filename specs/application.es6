import app from 'app';

var should = chai.should();

describe('Application', () => {
    it('should start successfully', () => {
        app.should.be.instanceof(Marionette.Application);
    });
});