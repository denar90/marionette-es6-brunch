import app from 'components/app/app';

var should = chai.should();

describe('Application', () => {
    it('should start successfully', () => {
        app.should.be.instanceof(Marionette.Application);
    });
});