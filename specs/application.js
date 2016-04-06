import App from 'components/app/app';

const should = chai.should();
const app = new App();

describe('Application', () => {
    it('should starts successfully', () => {
        app.should.be.instanceof(Marionette.Application);
    });
    it('should has region', () => {
        app.region.length.should.be.not.null;
    });
});