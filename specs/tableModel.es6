import TableModel from 'table/model';
import config from 'config';

var should = chai.should();
var model;

describe("Model", () => {
    describe("Table", () => {
        beforeEach(() => {
            let data = {
                position: config.maxLeaderPosition
            };
            model = new TableModel();
            model.parse(data);
        });
        it("should has leader",() => {
            model.get('isLeader').should.be.true;
        });
    });
    describe("Table", () => {
        beforeEach(() => {
            let data = {
                position: config.minOutsiderPosition
            };
            model = new TableModel();
            model.parse(data);
        });
        it("should has outsider",() => {
            model.get('isOutsider').should.be.true;
        });
    });
});