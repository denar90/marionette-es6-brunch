import TableView from 'components/table/views/compositeView';
import TableCollection from 'components/table/collection';
import config from 'config';

var should = chai.should();
var table;

describe('Table view', () => {
    beforeEach(() => {
        let data = {
            leagueCaption: 'Lorem Ipsum',
            standing: [
                {
                    position: 1,
                    teamName: 'Lorem',
                    playedGames: 10,
                    points: 30
                },
                {
                    position: 20,
                    teamName: 'Ipsum',
                    playedGames: 10,
                    points: 30
                }
            ]
        };
        let collection = new TableCollection();
        collection.add(data, {parse: true});
        table = new TableView({collection: collection});
        table.render();
    });
    it('should has title', () => {
        table.$el.find('h3').text().should.be.equal('Lorem Ipsum');
    });
    it('should has leader', () => {
        let $leaderEl = table.$childViewContainer.find('tr').first();
        $leaderEl.attr('class').should.be.equal('table-info');
    });
    it('should has 4 columns', () => {
        let $rows = table.$childViewContainer.find('tr');
        $rows.each((index, row) => {
            $(row).find('td').length.should.be.equal(3);
        });

    });
    it('should has outsider', () => {
        let $outsiderEl = table.$childViewContainer.find('tr').last();
        $outsiderEl.attr('class').should.be.equal('table-danger');
    });
});