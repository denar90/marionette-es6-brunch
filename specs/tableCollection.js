import TableCollection from 'components/table/collection';

const should = chai.should();
let collection;
let model;

describe("Collection", function() {
    describe("Table", function() {
        before(function() {
            const data = {
                    leagueCaption: 'Lorem Ipsum',
                    standing: [
                        {
                            position: 1,
                            teamName: 'Lorem',
                            playedGames: 10,
                            points: 30
                        },
                        {
                            position: 19,
                            teamName: 'Ipsum',
                            playedGames: 10,
                            points: 30
                        }
                    ]
                };
            collection = new TableCollection();
            collection.add(data, {parse: true});
            model = collection.at(0);
        });
        it("should has title", function() {
            collection.title.should.be.equal('Lorem Ipsum');
        });
        it("should has elements", function() {
            collection.length.should.be.equal(2);
        });
        it("should has position", function() {
            model.get('position').should.be.not.undefined;
            model.get('position').should.be.equal(1);
        });
        it("should has teamName", function() {
            model.get('teamName').should.be.not.undefined;
            model.get('teamName').should.be.equal('Lorem');
        });
        it("should has playedGames", function() {
            model.get('playedGames').should.be.not.undefined;
            model.get('playedGames').should.be.equal(10);
        });
        it("should has points", function() {
            model.get('points').should.be.not.undefined;
            model.get('points').should.be.equal(30);
        });
    });
});